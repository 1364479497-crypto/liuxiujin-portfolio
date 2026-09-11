import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

const experience = [
  {
    company: "猿力科技",
    direction: "教育内容制作与项目协作",
    paragraphs: [
      "从教育课程视频制作出发，我逐步积累了内容表达、制作组织与项目协作经验。与教研和制作团队一起，把课程目标转化为清晰的内容结构与视觉呈现，并在实际交付中协调进度、资源和质量。",
      "这段经历构成了我的工作基础：理解内容，也理解一件作品如何在团队协作中被完成。",
    ],
    projects: [{ label: "教育课程内容与制作管理", href: "#project-education-content" }],
  },
  {
    company: "飞象星球",
    direction: "AI 产品传播、市场运营与内容制作管理",
    paragraphs: [
      "在飞象星球，我承担飞象课堂视频制作团队管理与项目交付，并负责飞象老师相关市场传播与运营工作。工作范围从课程内容延伸到 AI 产品发布、内容传播、话题与事件策划、大型市场运营活动、创作者合作及跨团队项目落地。",
      "围绕飞象老师 2.0、3.0 等重要版本，我参与产品价值和核心叙事梳理，组织官方内容、产品案例、话题传播与不同渠道的内容合作，让技术能力与真实教学场景建立联系。",
      "在运营项目中，我也会从业务方视角梳理用户路径、设计页面交互，借助 AI 辅助编程做出可操作原型，并组织产品、研发、设计等团队对齐需求，推进开发、验收和上线。",
    ],
    projects: [
      { label: "飞象老师 3.0 发布传播", href: "#project-feixiang-3" },
      { label: "飞象老师 2.0 互动课件传播", href: "#project-feixiang-2" },
    ],
  },
  {
    company: "个人创作与 AI 工作流",
    direction: "AI 图文视频、自动化生产与互动网页",
    paragraphs: [
      "工作之外，我持续用真实项目探索 AI 创作。以 LINYUE 为内容实验场，实践 AI 图文、五人同框走秀、快闪变装，并持续探索穿搭纠错口播；同时制作互动网页和产品原型，把内容判断、视觉表达与交互设计放到同一个项目里验证。",
      "我尤其关注从样片到连续生产的过程：人物能否保持一致，动作与转场是否自然，文字是否清晰，修改经验能否沉淀成下一次可以复用的规则。",
    ],
    projects: [
      { label: "LINYUE AI 内容生产工作流", href: "#project-linyue" },
      { label: "住在中国", href: "#project-living-in-china" },
      { label: "微观生命结构馆", href: "#project-micro-life" },
    ],
  },
];

const projects = [
  {
    id: "project-feixiang-3",
    title: "飞象老师 3.0 发布传播",
    meta: "企业团队项目 · 飞象星球",
    subtitle: "让一次版本升级，被理解为产品能力的跃迁。",
    summary:
      "围绕飞象老师 3.0 发布，将“教育想法可以成为教育产品”的能力变化，组织成产品叙事、应用案例与多渠道传播内容，连接官方表达、科技视角和教师真实场景。",
  },
  {
    id: "project-feixiang-2",
    title: "飞象老师 2.0 互动课件传播",
    meta: "企业团队项目 · 飞象星球",
    subtitle: "把“能动、能练、能反馈”，讲成具体的课堂体验。",
    summary:
      "围绕 AI 互动课件的产品能力，从教学场景和实际操作出发组织传播内容，呈现知识讲解、课堂练习与反馈之间的联系，让用户理解互动课件能够怎样进入课堂。",
  },
  {
    id: "project-education-content",
    title: "教育课程内容与制作管理",
    meta: "企业项目合集 · 猿力科技 / 飞象星球",
    subtitle: "把课程目标，变成清晰的内容表达和可靠的交付。",
    summary:
      "从猿力科技阶段的课程内容制作，到飞象星球阶段的人工智能课程与微课项目，持续围绕知识表达、视觉呈现、团队协作和交付质量开展工作。",
  },
  {
    id: "project-linyue",
    title: "LINYUE AI 内容生产工作流",
    meta: "个人项目 · AI 图文与视频实践",
    subtitle: "让 AI 创作，从一次生成走向连续生产。",
    summary:
      "以穿搭图文和视频为持续实验场，连接选题、视觉生成、动态素材与程序化合成，迭代人物一致性、卡点转场、版式和质检规则，形成可复用的人机协同生产工作流。",
  },
  {
    id: "project-micro-life",
    title: "微观生命结构馆",
    meta: "个人实践 · 产品设计方案",
    subtitle: "把细胞结构，组织成一条可以主动探索的学习路径。",
    summary:
      "围绕选标本、看模型、点结构、看证据、做对比和记笔记，设计三维细胞探索的产品方案，让模型、知识解释与学习记录形成连贯的交互关系。",
  },
];

const methods = [
  {
    title: "先找到真正要被理解的事",
    description:
      "从业务目标和用户场景出发，先判断产品带来了什么变化、用户为什么在意，再决定用什么内容和形式去表达。",
  },
  {
    title: "让内容、话题与事件相互配合",
    description:
      "重视内容本身的吸引力，也围绕产品发布和市场活动设计话题切口、事件表达与渠道节奏，让每条内容承担明确的传播任务。",
  },
  {
    title: "把方案变成可以讨论的原型",
    description:
      "在文档之外，用页面、交互或样片把想法做出来，帮助产品、研发和设计更快对齐，也让问题在投入完整开发前被看见。",
  },
  {
    title: "把交付经验变成下一次的起点",
    description:
      "在项目中明确分工、节点和验收要求，并把有效的表达方式、制作规则和返修经验沉淀下来，形成可以持续迭代的工作方法。",
  },
];

const keywords = [
  "产品叙事",
  "内容传播",
  "话题与事件",
  "市场运营",
  "产品交互",
  "AI 视频",
  "工作流自动化",
  "跨团队协作",
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return (
    <header className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-intro">{intro}</p>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="回到首页">
          XIUJIN<span>°</span>
        </a>
        <nav className="site-nav" aria-label="主要导航">
          <a href="#experience">经历</a>
          <a href="#work">作品</a>
          <a href="#method">方法</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy hero-enter hero-enter--one">
          <p className="hero-identity">AI 产品传播 · 产品交互 · AI 内容生产</p>
          <h1>
            <span className="hero-line hero-line--solid">把产品讲清楚，</span>
            <span className="hero-line hero-line--outline">把想法做出来。</span>
          </h1>
        </div>

        <div className="hero-summary hero-enter hero-enter--two">
          <p>
            我从教育内容制作出发，在猿力科技、飞象星球积累了内容创作、团队协作与项目落地经验。现在，我的工作连接产品传播、市场运营、交互设计与 AI 内容生产：既组织团队推进项目，也亲手制作页面、原型和图文视频作品。
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">
              查看作品 <ArrowRight size={17} />
            </a>
            <a className="button button--ghost" href="#experience">
              了解我的经历
            </a>
          </div>
        </div>

        <div className="hero-principles hero-enter hero-enter--three" aria-label="工作过程">
          <span>理解</span>
          <i aria-hidden="true" />
          <span>创作</span>
          <i aria-hidden="true" />
          <span>落地</span>
        </div>
      </section>

      <section className="keyword-strip" aria-label="工作关键词">
        <div className="keyword-track">
          {[...keywords, ...keywords].map((keyword, index) => (
            <span key={`${keyword}-${index}`}>
              {keyword} <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="experience section-dark" id="experience">
        <SectionHeading
          eyebrow="经历"
          title={<>从内容出发，<br />走向产品与创造。</>}
          intro="我的经历围绕着一件事展开：让一个想法获得合适的表达，并把它真正做出来。在课程里，是让知识更容易被理解；在产品传播中，是让用户看见新能力与自己的关系；在交互和 AI 创作中，是把原本停在文档里的方案，变成可以打开、操作和持续迭代的作品。"
        />

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card reveal" key={item.company}>
              <div className="experience-title">
                <p>{item.direction}</p>
                <h3>{item.company}</h3>
              </div>
              <div className="experience-copy">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="experience-links" aria-label={`${item.company}对应作品`}>
                <span>对应作品</span>
                {item.projects.map((project) => (
                  <a key={project.href} href={project.href}>
                    {project.label} <ArrowRight size={14} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-light" id="work">
        <SectionHeading
          eyebrow="精选作品"
          title={<>用具体作品，<br />说明我怎样工作。</>}
          intro="这里既有团队协作完成的业务项目，也有我持续推进的个人实践。每个案例都会说明项目背景、我的具体工作，以及最终可以看到或体验的内容。"
        />

        <article className="featured-project reveal" id="project-living-in-china">
          <div className="featured-project__copy">
            <p className="project-meta">个人项目 · 已上线 · 可在线体验</p>
            <h3>住在中国</h3>
            <p className="project-subtitle">从八种民居，读懂房子与生活的关系。</p>
            <p className="project-summary">
              把民居文化组织成可以探索的网页：拨动文字门帘，观察典型建筑构造，将自己的发现留在地图日记里。关注建筑的样子，也关注气候、材料与日常生活怎样塑造它。
            </p>
            <a
              className="button button--primary"
              href="https://living-in-china.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              进入作品 <ArrowUpRight size={17} />
            </a>
          </div>
          <a
            className="featured-project__image"
            href="https://living-in-china.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="打开《住在中国》互动网页"
          >
            <Image
              src="/projects/living-in-china.jpg"
              alt="《住在中国》互动网页界面预览"
              width={2560}
              height={1440}
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </a>
        </article>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" id={project.id} key={project.id}>
              <p className="project-meta">{project.meta}</p>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-summary">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experiments section-dark" aria-label="视觉与交互实验">
        <SectionHeading
          eyebrow="视觉与交互实验"
          title={<>一些正在做的<br />小实验。</>}
          intro="把一个具体问题做成原型，看看它能否被表达得更清楚、使用得更自然。"
        />
        <div className="experiment-grid">
          <article className="experiment-card reveal">
            <p>业务交互原型</p>
            <h3>运营提示交互</h3>
            <span>
              从提示位置、信息层级到展开与关闭反馈，用可操作页面验证运营信息的表达方式，让文案和界面一起参与方案讨论。
            </span>
          </article>
          <article className="experiment-card reveal">
            <p>视觉复现与程序化动画实验</p>
            <h3>鱼群漩涡</h3>
            <span>
              围绕鱼群形态、密度和运动节奏，使用 p5.js 进行视觉复现，探索如何将静态参考画面转化为持续运动的程序化场景。
            </span>
          </article>
        </div>
      </section>

      <section className="method section-light" id="method">
        <div className="method-display reveal" aria-hidden="true">
          <span>理解</span>
          <span>创作</span>
          <span>落地</span>
        </div>
        <SectionHeading
          eyebrow="工作方法"
          title={<>理解问题，做出表达，<br />推进落地。</>}
          intro="内容、交互和项目推进不是分开的步骤，而是同一件事的不同部分。"
        />
        <div className="method-list">
          {methods.map((method, index) => (
            <article className="reveal" key={method.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{method.title}</h3>
              <p>{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="contact-copy">
          <p>联系</p>
          <h2>下一件值得做的事，聊聊看。</h2>
          <span>
            欢迎交流 AI 产品传播、市场运营、AI 内容生产与数字体验相关的工作和项目。这个网站记录我的工作轨迹，也持续收录新的创作实验。
          </span>
        </div>
        <a
          className="contact-link"
          href="https://github.com/1364479497-crypto"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={19} /> GitHub <ArrowUpRight size={18} />
        </a>
        <p className="copyright">© 2026 XIUJIN · 内容、产品与 AI 创作</p>
      </footer>
    </main>
  );
}
