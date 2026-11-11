/* 生成 static/js/offline.js。
 *
 * 双击 index.html 时浏览器使用 file:// 协议，会拦截 fetch('contents/...')，
 * 导致 config.yml 与 Markdown 全部加载失败、页面只剩空骨架。
 * 这里把 contents/ 下的文本做成内联快照，仅在 file:// 下作为 fetch 的响应返回，
 * 让同一份 index.html 双击也能完整渲染；线上仍走正常的 fetch 流程。
 *
 * 每次修改 contents/ 里的配置或正文后，运行：node tools/build-offline.js
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const config = fs.readFileSync(path.join(root, 'contents/config.yml'), 'utf8');

// 从 config.yml 的 sections 里取 id，避免正文清单和配置脱节
const sectionIds = [...config.matchAll(/^\s*-\s+id:\s*(\S+)\s*$/gm)].map((match) => match[1]);
if (sectionIds.length === 0) {
    throw new Error('No sections found in contents/config.yml');
}

const snapshots = { 'contents/config.yml': config };
for (const id of sectionIds) {
    const file = path.join(root, 'contents', `${id}.md`);
    if (!fs.existsSync(file)) {
        throw new Error(`Missing markdown file: contents/${id}.md`);
    }
    snapshots[`contents/${id}.md`] = fs.readFileSync(file, 'utf8');
}

const entries = Object.entries(snapshots)
    .map(([key, value]) => `        ${JSON.stringify(key)}: ${JSON.stringify(value)}`)
    .join(',\n');

const output = `/* 自动生成，请勿手动编辑 —— 运行 node tools/build-offline.js 重新生成。
   仅在 file:// 协议下生效；线上（http/https）完全不介入。 */
(function () {
    'use strict';
    if (window.location.protocol !== 'file:') return;

    var snapshots = {
${entries}
    };

    var nativeFetch = typeof window.fetch === 'function' ? window.fetch.bind(window) : null;
    window.fetch = function (input, init) {
        var url = typeof input === 'string' ? input : (input && input.url) || '';
        var key = Object.keys(snapshots).find(function (item) {
            return url === item || url.indexOf(item) !== -1;
        });
        if (key) {
            return Promise.resolve(new Response(snapshots[key], {
                status: 200,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
            }));
        }
        return nativeFetch
            ? nativeFetch(input, init)
            : Promise.reject(new Error('fetch is unavailable in this environment'));
    };
})();
`;

fs.writeFileSync(path.join(root, 'static/js/offline.js'), output, 'utf8');
console.log('offline.js generated with', Object.keys(snapshots).length, 'snapshots:',
    sectionIds.join(', '));
