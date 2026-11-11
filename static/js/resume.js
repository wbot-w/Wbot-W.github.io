/* ============================================================
   韦昌宇 · 个人简历 — 轻量交互层
   内容由 scripts.js 异步注入，因此统一使用 document 级事件委托。
   ============================================================ */

(function () {
    'use strict';

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const THEME_KEY = 'wcy-theme';
    const root = document.documentElement;

    /* ---------- 明暗主题 ---------- */
    const themeToggle = $('#themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
            root.dataset.theme = next;
            try { localStorage.setItem(THEME_KEY, next); } catch (err) { /* 忽略存储不可用 */ }
        });
    }

    /* ---------- 打印 / 存为 PDF ---------- */
    const printBtn = $('#printBtn');
    if (printBtn) printBtn.addEventListener('click', () => window.print());

    /* ---------- 复制邮箱（内容异步注入，用事件委托） ---------- */
    const toast = $('#resumeToast');
    let toastTimer;
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('is-show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('is-show'), 2200);
    }

    async function copyEmail(trigger) {
        const mail = trigger.getAttribute('data-copy-email');
        if (!mail) return;
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(mail);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = mail;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                textarea.remove();
            }
            showToast('邮箱地址已复制');
        } catch (err) {
            showToast('复制失败，请手动选择邮箱地址');
        }
    }

    /* ---------- 项目分类筛选（内容异步注入，用事件委托） ---------- */
    function applyFilter(category, activeButton) {
        $$('.filter[data-filter]').forEach((button) => {
            button.classList.toggle('is-active', button === activeButton);
        });
        let count = 0;
        $$('.project-card').forEach((card) => {
            const show = category === 'all' || card.dataset.category === category;
            card.hidden = !show;
            if (show) count++;
        });
        const empty = $('#emptyState');
        if (empty) empty.hidden = count > 0;
    }

    document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;

        const filter = event.target.closest('.filter[data-filter]');
        if (filter) {
            event.preventDefault();
            applyFilter(filter.dataset.filter, filter);
            return;
        }

        const trigger = event.target.closest('[data-copy-email]');
        if (trigger) copyEmail(trigger);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        const trigger = event.target instanceof Element ? event.target.closest('[data-copy-email]') : null;
        if (!trigger) return;
        event.preventDefault();
        copyEmail(trigger);
    });

    /* ---------- 首屏副标题的暖色高亮（与源站一致） ---------- */
    function highlightHeroAccent() {
        const subline = $('#hero-subline');
        if (!subline || subline.querySelector('.hero-accent')) return;
        const first = subline.firstChild;
        if (!first || first.nodeType !== Node.TEXT_NODE) return;
        const text = first.nodeValue;
        const keyword = '稳稳落地';
        const at = text.indexOf(keyword);
        if (at < 0) return;
        const accent = document.createElement('span');
        accent.className = 'hero-accent';
        accent.textContent = keyword;
        subline.replaceChildren(
            document.createTextNode(text.slice(0, at)),
            accent,
            document.createTextNode(text.slice(at + keyword.length))
        );
    }

    /* ---------- 内容就绪后：恢复深链接 + 高亮 ---------- */
    const readyObserver = new MutationObserver(() => {
        if (!document.body.classList.contains('site-ready')) return;
        readyObserver.disconnect();
        highlightHeroAccent();
        if (!location.hash || location.hash.length < 2) return;
        requestAnimationFrame(() => {
            try {
                const target = document.querySelector(location.hash);
                if (target) target.scrollIntoView({ block: 'start' });
            } catch (err) { /* 忽略非法选择器 */ }
        });
    });
    readyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    /* ---------- 打印时展开所有项目详情 ---------- */
    window.addEventListener('beforeprint', () => {
        $$('details.project-detail').forEach((detail) => {
            detail.dataset.wasOpen = detail.open ? '1' : '0';
            detail.open = true;
        });
    });
    window.addEventListener('afterprint', () => {
        $$('details.project-detail').forEach((detail) => {
            if (detail.dataset.wasOpen === '0') detail.open = false;
            delete detail.dataset.wasOpen;
        });
    });
})();
