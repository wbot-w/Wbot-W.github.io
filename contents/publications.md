<p class="section-eyebrow"><span class="eyebrow-num">02</span><span class="eyebrow-line"></span><span>SELECTED PROJECTS</span></p>

<p class="section-intro">从运动控制上位机，到视觉检测与坐标引导 —— 三个从需求到落地完整走通的项目。点击卡片查看完整案例。</p>

<div class="filters" role="group" aria-label="项目分类筛选"><a class="filter is-active" href="#" data-filter="all">全部 <sup>03</sup></a><a class="filter" href="#" data-filter="motion">运动控制 <sup>01</sup></a><a class="filter" href="#" data-filter="vision">机器视觉 <sup>02</sup></a></div>

<div class="project-grid">
  <article class="project-card" data-category="motion" aria-label="查看项目：三轴机器人运动控制上位机与离线仿真">
    <div class="project-visual"><span class="visual-tag">FIG. 01 / MOTION</span><img src="static/assets/img/project-motion.svg" alt="三轴运动轨迹与伺服跟随误差示意图"></div>
    <div class="project-body">
      <div class="project-meta"><span>01 / 运动控制</span><span>2024.11 — 2024.12</span></div>
      <h3>三轴机器人运动控制上位机与离线仿真</h3>
      <p>基于 C# / WinForms 与 Zmotion SDK 开发 EtherCAT 三轴控制上位机，实现 JOG、直线与圆弧插补，并用自研仿真器量化伺服跟随误差。</p>
      <div class="tag-row"><span>C#</span><span>WinForms</span><span>Zmotion SDK</span><span>EtherCAT</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <p class="detail-summary">面向三轴 EtherCAT 运动平台，基于 C# / WinForms 与 Zmotion 控制器 SDK 开发上位机，把路径规划、插补运算与伺服状态验证串成一套可复现的闭环。</p>
          <dl class="detail-meta"><div><dt>年份</dt><dd>2024.11 — 2024.12</dd></div><div><dt>类别</dt><dd>运动控制 · 上位机开发</dd></div><div><dt>技术栈</dt><dd>C# · WinForms · Zmotion SDK · EtherCAT</dd></div><div><dt>关键词</dt><dd>插补算法 · 路径规划 · 跟随误差</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>基于 C# / WinForms 与 Zmotion 控制器 SDK 开发三轴 EtherCAT 运动控制上位机。</li><li>添加路径规划，实现 JOG 运动、绝对 / 相对运动、直线和圆弧插补，并按主轴分速度模型换算插补速度。</li><li>自研离线仿真器复现控制器运动规律，用 Chart 同图对比 DPOS / MPOS，量化伺服跟随误差。</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>C#</span><span>WinForms</span><span>Zmotion SDK</span><span>EtherCAT</span><span>JOG</span><span>直线 / 圆弧插补</span><span>DPOS / MPOS</span><span>离线仿真</span></div>
        </div>
      </details>
    </div>
  </article>
  <article class="project-card" data-category="vision" aria-label="查看项目：基于 C# 与 Halcon 的工件定位与抓取">
    <div class="project-visual"><span class="visual-tag">FIG. 02 / INSPECTION</span><img src="static/assets/img/project-inspection.svg" alt="工件计数、缺件与放歪判别及视觉引导示意图"></div>
    <div class="project-body">
      <div class="project-meta"><span>02 / 机器视觉</span><span>2025.03 — 2025.05</span></div>
      <h3>基于 C# 与 Halcon 的工件定位与抓取</h3>
      <p>Halcon 完成元器件计数与缺件 / 放歪判别，经 HDevEngine 与 C# 无缝集成，输出世界坐标引导机械臂自动补料。</p>
      <div class="tag-row"><span>Halcon</span><span>HDevEngine</span><span>海康威视相机</span><span>坐标转换</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <p class="detail-summary">面向产线元器件检测与自动补料，构建集图像采集、缺陷判别、坐标转换与机械臂引导于一体的视觉检测系统，提升检测与补料流程的自动化程度。</p>
          <dl class="detail-meta"><div><dt>年份</dt><dd>2025.03 — 2025.05</dd></div><div><dt>类别</dt><dd>机器视觉 · 视觉引导</dd></div><div><dt>技术栈</dt><dd>Halcon · C# · HDevEngine · 海康威视相机</dd></div><div><dt>关键词</dt><dd>目标计数 · 缺陷检测 · 手眼坐标转换</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>使用 Halcon 实现元器件合格总数统计与缺件 / 放歪判别，分别输出缺失、放歪及合格数量。</li><li>当数量不足时，提取缺陷目标像素坐标并转换为世界坐标系，引导机械臂完成元器件补充。</li><li>采用 HDevEngine 实现 Halcon 算法与 C# 工程无缝调用，编写控制面板，集成海康威视相机图像采集与结果显示，实现读数、目标定位、像素点坐标显示、拍照等基础功能。</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>Halcon</span><span>C#</span><span>HDevEngine</span><span>海康威视相机</span><span>缺件判别</span><span>放歪判别</span><span>像素→世界坐标</span><span>机械臂补料</span></div>
        </div>
      </details>
    </div>
  </article>
  <article class="project-card" data-category="vision" aria-label="查看项目：基于 Halcon 的汽车充电口识别与粗定位">
    <div class="project-visual"><span class="visual-tag">FIG. 03 / LOCALIZATION</span><img src="static/assets/img/project-localization.svg" alt="充电口形状匹配与九点手眼标定坐标映射示意图"></div>
    <div class="project-body">
      <div class="project-meta"><span>03 / 视觉定位</span><span>2025.08 — 2025.10</span></div>
      <h3>基于 Halcon 的汽车充电口识别与粗定位</h3>
      <p>200+ 组多角度样本，融合形状匹配与几何约束完成识别；经相机标定与 9 点手眼标定，建立像素到机械臂基座坐标系的映射。</p>
      <div class="tag-row"><span>Halcon</span><span>形状匹配</span><span>相机标定</span><span>9 点手眼标定</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <p class="detail-summary">面向新能源汽车自动充电场景，完成从样本采集、图像增强、形状匹配到手眼标定坐标映射的整套视觉粗定位流程，为后续机械臂精细插拔提供坐标引导。</p>
          <dl class="detail-meta"><div><dt>年份</dt><dd>2025.08 — 2025.10</dd></div><div><dt>类别</dt><dd>机器视觉 · 视觉定位</dd></div><div><dt>技术栈</dt><dd>Halcon · 形状匹配 · 相机标定 · 9 点手眼标定</dd></div><div><dt>关键词</dt><dd>200+ 组样本 · 特征增强 · 坐标映射</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>完成 200+ 组多角度充电口图像采集与标注，结合直方图均衡化与非局部均值去噪提升关键特征对比度。</li><li>融合形状匹配与几何约束分析，实现充电口区域快速识别。</li><li>执行相机标定与手眼标定（9 点法），建立像素坐标到机械臂基座坐标系的映射模型。</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>Halcon</span><span>直方图均衡化</span><span>非局部均值去噪</span><span>形状匹配</span><span>几何约束</span><span>相机标定</span><span>9 点手眼标定</span><span>坐标系转换</span></div>
        </div>
      </details>
    </div>
  </article>
</div>

<p class="empty-state" id="emptyState" hidden>该分类下暂无项目案例。</p>
