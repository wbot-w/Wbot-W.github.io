<p class="section-eyebrow"><span class="eyebrow-num">02</span><span class="eyebrow-line"></span><span>SELECTED PROJECTS</span></p>

<p class="section-intro">5 个项目案例，覆盖上位机开发、运动控制与机器视觉。点击卡片查看完整案例。</p>

<div class="filters" role="group" aria-label="项目分类筛选"><a class="filter is-active" href="#" data-filter="all">全部 <sup>05</sup></a><a class="filter" href="#" data-filter="motion">运动控制 <sup>03</sup></a><a class="filter" href="#" data-filter="vision">机器视觉 <sup>02</sup></a></div>

<div class="project-grid">
  <article class="project-card" data-category="motion" data-image-slot="01" aria-label="查看项目：三轴机器人项目">
    <div class="project-visual"><span class="visual-tag">FIG. 01 / MOTION</span><img src="static/assets/img/project-motion.svg" alt="三轴运动轨迹与伺服跟随误差示意图"></div>
    <div class="project-body">
      <div class="project-meta"><span>01 / 运动控制</span><span>2024-11-2024-12</span></div>
      <h3>三轴机器人项目</h3>
      <p>基于 C# / WinForms 与 ZMotion 控制器 SDK，开发三轴 EtherCAT 运动控制上位机。</p>
      <div class="tag-row"><span>C#</span><span>WinForms</span><span>ZMotion 控制器 SDK</span><span>EtherCAT</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <dl class="detail-meta"><div><dt>年份</dt><dd>2024-11-2024-12</dd></div><div><dt>类别</dt><dd>运动控制 · 上位机开发</dd></div><div><dt>技术栈</dt><dd>C# / WinForms · ZMotion 控制器 SDK · EtherCAT</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>基于 C# / WinForms 与 ZMotion 控制器 SDK，开发三轴 EtherCAT 运动控制上位机</li><li>实现路径规划，支持 JOG、绝对 / 相对运动及直线 / 圆弧插补，按主轴分速度模型换算插补速度</li><li>自研离线仿真器复现控制器运动规律，用 Chart 同图对比 DPOS / MPOS，量化伺服跟随误差，降低实机调试试错成本，形成可复用调试工具</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>C#</span><span>WinForms</span><span>ZMotion 控制器 SDK</span><span>EtherCAT</span><span>JOG</span><span>直线 / 圆弧插补</span><span>DPOS / MPOS</span><span>离线仿真器</span><span>Chart</span></div>
        </div>
      </details>
    </div>
  </article>
  <article class="project-card" data-category="vision" data-image-slot="02" aria-label="查看项目：基于C#与Halcon的工件定位与抓取">
    <div class="project-visual"><span class="visual-tag">FIG. 02 / INSPECTION</span><img src="static/assets/img/project-inspection.svg" alt="工件计数、缺件与放歪判别及视觉引导示意图"></div>
    <div class="project-body">
      <div class="project-meta"><span>02 / 机器视觉</span><span>2025-03-2025-05</span></div>
      <h3>基于C#与Halcon的工件定位与抓取</h3>
      <p>使用 Halcon 完成元器件合格总数统计与缺件 / 放歪判别，分别输出缺失、放歪及合格数量。</p>
      <div class="tag-row"><span>Halcon</span><span>C#</span><span>HDevEngine</span><span>海康威视相机</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <dl class="detail-meta"><div><dt>年份</dt><dd>2025-03-2025-05</dd></div><div><dt>类别</dt><dd>机器视觉 · 视觉引导</dd></div><div><dt>技术栈</dt><dd>Halcon · C# · HDevEngine · 海康威视相机</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>使用 Halcon 完成元器件合格总数统计与缺件 / 放歪判别，分别输出缺失、放歪及合格数量</li><li>数量不足时提取缺陷目标像素坐标并转换为世界坐标，引导机械臂完成元器件补充</li><li>通过 HDevEngine 打通 Halcon 算法与 C# 工程，集成海康威视相机采集、读数 / 定位 / 坐标显示与拍照，提升检测与补料流程自动化程度</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>Halcon</span><span>C#</span><span>HDevEngine</span><span>海康威视相机</span><span>缺件判别</span><span>放歪判别</span><span>像素→世界坐标</span><span>机械臂补料</span></div>
        </div>
      </details>
    </div>
  </article>
  <article class="project-card" data-category="vision" data-image-slot="03" aria-label="查看项目：基于Halcon的汽车充电口识别与粗定位">
    <div class="project-visual"><span class="visual-tag">FIG. 03 / LOCALIZATION</span><img src="static/assets/img/project-localization.svg" alt="充电口形状匹配与九点手眼标定坐标映射示意图"></div>
    <div class="project-body">
      <div class="project-meta"><span>03 / 机器视觉</span><span>2025-08-2025-10</span></div>
      <h3>基于Halcon的汽车充电口识别与粗定位</h3>
      <p>采集并标注 200+ 组多角度充电口图像，结合直方图均衡化与非局部均值去噪提升关键特征对比度。</p>
      <div class="tag-row"><span>Halcon</span><span>200+ 组样本</span><span>形状匹配</span><span>9 点手眼标定</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <dl class="detail-meta"><div><dt>年份</dt><dd>2025-08-2025-10</dd></div><div><dt>类别</dt><dd>机器视觉 · 视觉定位</dd></div><div><dt>技术栈</dt><dd>Halcon · 直方图均衡化 · 形状匹配 · 相机标定 · 9 点手眼标定</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>采集并标注 200+ 组多角度充电口图像，结合直方图均衡化与非局部均值去噪提升关键特征对比度</li><li>融合形状匹配与几何约束分析，实现充电口区域快速识别</li><li>完成相机标定与手眼标定（9 点法），建立像素坐标到机械臂基座坐标系的映射模型</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>Halcon</span><span>200+ 组样本</span><span>直方图均衡化</span><span>非局部均值去噪</span><span>形状匹配</span><span>几何约束</span><span>相机标定</span><span>9 点手眼标定</span><span>坐标系映射</span></div>
        </div>
      </details>
    </div>
  </article>
  <article class="project-card" data-category="motion" data-image-slot="04" aria-label="查看项目：飞特六轴机械臂上位机与视觉抓取平台">
    <div class="project-visual project-visual--empty"><span class="visual-tag">FIG. 04 / ROBOTICS</span><div class="image-slot"><span class="image-slot-mark" aria-hidden="true">＋</span><span class="image-slot-title">PROJECT IMAGE</span><span class="image-slot-hint">配图待补 · project-04</span></div></div>
    <div class="project-body">
      <div class="project-meta"><span>04 / 运动控制</span><span>2026-03-2026-06</span></div>
      <h3>飞特六轴机械臂上位机与视觉抓取平台</h3>
      <p>完成7轴（6关节+夹爪）半双工串口控制上位机，实现位置同步写入、姿态序列保存/回放、实时状态反馈、急停与ID工具，形成可独立使用的机械臂调试控制工具。</p>
      <div class="tag-row"><span>C# WinForms</span><span>飞特 STS 串口舵机</span><span>URDF</span><span>Python / YOLOv8</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <dl class="detail-meta"><div><dt>年份</dt><dd>2026-03-2026-06</dd></div><div><dt>类别</dt><dd>运动控制 · 视觉抓取</dd></div><div><dt>技术栈</dt><dd>C# WinForms、飞特 STS 串口舵机、URDF、Python / YOLOv8、相机标定</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>完成7轴（6关节+夹爪）半双工串口控制上位机，实现位置同步写入、姿态序列保存/回放、实时状态反馈、急停与ID工具，形成可独立使用的机械臂调试控制工具。</li><li>基于URDF实现FK/数值IK及直线/圆弧插补、S形平滑与连续轨迹混接，支持笛卡尔空间连续轨迹执行。</li><li>集成YOLOv8视觉服务与相机标定，已跑通“识别—定位—抓取”端到端闭环，形成可复用视觉抓取平台</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>C# WinForms</span><span>飞特 STS 串口舵机</span><span>URDF</span><span>FK / 数值IK</span><span>S形平滑</span><span>Python</span><span>YOLOv8</span><span>相机标定</span></div>
        </div>
      </details>
    </div>
  </article>
  <article class="project-card" data-category="motion" data-image-slot="05" aria-label="查看项目：Windows ↔ Linux TCP 运动控制上位机">
    <div class="project-visual project-visual--empty"><span class="visual-tag">FIG. 05 / GATEWAY</span><div class="image-slot"><span class="image-slot-mark" aria-hidden="true">＋</span><span class="image-slot-title">PROJECT IMAGE</span><span class="image-slot-hint">配图待补 · project-05</span></div></div>
    <div class="project-body">
      <div class="project-meta"><span>05 / 运动控制</span><span>2026-08-2026-09</span></div>
      <h3>Windows ↔ Linux TCP 运动控制上位机</h3>
      <p>项目面向运动控制降本，采用团队自研Linux EtherCAT网关替代商用控制方案，降低运动控制平台对商用控制器和控制卡的依赖；本人负责Windows客户端开发与联调。</p>
      <div class="tag-row"><span>C# WinForms</span><span>ControllerSdk</span><span>TCP 行文本协议</span><span>Linux EtherCAT 网关</span></div>
      <details class="project-detail"><summary>查看完整案例 <span class="detail-arrow" aria-hidden="true">↗</span></summary>
        <div class="detail-body">
          <dl class="detail-meta"><div><dt>年份</dt><dd>2026-08-2026-09</dd></div><div><dt>类别</dt><dd>运动控制 · 上位机开发</dd></div><div><dt>技术栈</dt><dd>C# WinForms、ControllerSdk、TCP 行文本协议、Linux EtherCAT 网关</dd></div></dl>
          <h4>核心职责 / 技术实现</h4>
          <ol class="detail-list"><li>项目面向运动控制降本，采用团队自研Linux EtherCAT网关替代商用控制方案，降低运动控制平台对商用控制器和控制卡的依赖；本人负责Windows客户端开发与联调。</li><li>经TCP行协议连接自研网关，封装单/双轴控制指令：单轴实现JOG、绝对/相对、回零、急停；双轴实现直线/圆弧插补、S曲线限幅、前瞻拐角过渡及A→B耐久往返测试。</li><li>支撑平台功能验证与耐久测试，验证自研网关在单/双轴场景下的可用性；通过S曲线限幅和前瞻拐角过渡提升运动平顺性、降低拐角冲击。</li></ol>
          <h4>技术要点</h4>
          <div class="tag-row"><span>C# WinForms</span><span>ControllerSdk</span><span>TCP 行文本协议</span><span>Linux EtherCAT 网关</span><span>JOG</span><span>S曲线限幅</span><span>前瞻拐角过渡</span><span>A→B 耐久测试</span></div>
        </div>
      </details>
    </div>
  </article>
</div>

<p class="empty-state" id="emptyState" hidden>该分类下暂无项目案例。</p>
