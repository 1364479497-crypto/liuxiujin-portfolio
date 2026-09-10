import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react";
import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "AI 产品原型",
    description: "把模糊的创意拆成可以验证、可以演示、可以继续生长的产品体验。",
  },
  {
    number: "02",
    title: "互动学习体验",
    description: "让知识从静态讲解变成可观察、可操作、可留下个人理解的学习过程。",
  },
  {
    number: "03",
    title: "3D 可视化",
    description: "用实时三维、镜头语言和交互设计，让复杂对象变得直观而有记忆点。",
  },
  {
    number: "04",
    title: "创意自动化",
    description: "连接内容、设计、代码与发布流程，提高从想法到成品的速度和稳定性。",
  },
];

const projects = [
  {
    number: "01",
    status: "已完成 · V3",
    name: "住在中国",
    subtitle: "互动式建筑文化网页",
    description:
      "从八种地域民居出发，让文字门帘在指尖摆动与落下；建筑、气候和生活方式在一次交互中被看见。",
    tags: ["文化叙事", "Canvas 物理", "交互设计", "原生 Web"],
    image: "/projects/living-in-china.jpg",
    repo: "",
    live: "https://living-in-china.vercel.app",
    tone: "earth",
  },
];

const marqueeItems = [
  "AI PROTOTYPING",
  "INTERACTIVE LEARNING",
  "THREE.JS",
  "CREATIVE SYSTEMS",
  "VISUAL STORYTELLING",
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article
      className={`project-card project-card--${project.tone}`}
      style={{ top: `${88 + index * 16}px` }}
    >
      <div className="project-card__top">
        <div className="project-number">{project.number}</div>
        <div className="project-title-block">
          <p>{project.status}</p>
          <h3>{project.name}</h3>
          <span>{project.subtitle}</span>
        </div>
        <div className="project-actions">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              在线体验 <ArrowUpRight size={18} />
            </a>
          )}
          {project.repo && (
            <a className="project-action--ghost" href={project.repo} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-copy">
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        {project.image ? (
          <div className="project-image-wrap">
            <Image
              src={project.image}
              alt={`${project.name}项目界面预览`}
              width={2560}
              height={1440}
              sizes="(max-width: 900px) 100vw, 68vw"
            />
            <div className="project-image-stamp">OPEN / 01</div>
          </div>
        ) : (
          <div className="project-placeholder" aria-label={`${project.name}预告`}>
            <span>{project.number}</span>
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" />

      <section className="hero" id="top">
        <nav className="site-nav" aria-label="主要导航">
          <a className="wordmark" href="#top" aria-label="回到首页">
            XIUJIN<span>°</span>
          </a>
          <div className="nav-links">
            <a href="#work">作品</a>
            <a href="#method">方法</a>
            <a href="#about">关于</a>
          </div>
          <a className="nav-contact" href="https://github.com/1364479497-crypto" target="_blank" rel="noreferrer">
            联系我 <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="hero-kicker">
          <span>PORTFOLIO / 2026</span>
          <span>BASED IN CHINA</span>
        </div>

        <h1 className="hero-heading hero-enter hero-enter--one">
          XIUJIN
        </h1>

        <div className="hero-artifact hero-enter hero-enter--two">
          <Image
            src="/projects/living-in-china.jpg"
            alt="《住在中国》互动项目界面"
            width={2560}
            height={1440}
            sizes="(max-width: 620px) 72vw, 33vw"
            priority
          />
          <div className="artifact-label">
            <Sparkles size={15} /> FIRST PUBLIC WORK
          </div>
          <div className="artifact-orbit" aria-hidden="true" />
        </div>

        <div className="hero-bottom">
          <p>我把 AI、教育与 3D，做成可以亲手操作的数字体验。</p>
          <a href="#work">
            查看作品 <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="marquee" aria-label="创作方向">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item} <i>✦</i>
            </span>
          ))}
        </div>
        <div className="marquee-track marquee-track--reverse">
          {[...marqueeItems.slice().reverse(), ...marqueeItems.slice().reverse()].map((item, index) => (
            <span key={`${item}-reverse-${index}`}>
              {item} <i>✦</i>
            </span>
          ))}
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label reveal">
          不是观看作品，是进入作品
        </p>
        <h2 className="reveal">
          CREATE<br />
          <span>LEARN</span><br />
          PLAY
        </h2>
        <div className="manifesto-copy reveal">
          <p>
            我的工作发生在内容、设计与技术的交界处。每个项目都从一个真实问题开始，
            最后变成可以点击、拖动、观察和感受的界面。
          </p>
          <span>独立创作 / 产品原型 / 互动叙事</span>
        </div>
      </section>

      <section className="capabilities" id="method">
        <div className="capabilities-heading reveal">
          <p>WHAT I MAKE</p>
          <h2>创作方法</h2>
          <span>从一个问题，到一个能被体验的答案。</span>
        </div>

        <div className="capability-list">
          {capabilities.map((item) => (
            <article key={item.number} className="reveal">
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="projects" id="work">
        <div className="projects-heading reveal">
          <p>FIRST PUBLIC CASE</p>
          <h2>PROJECT 01</h2>
          <span>从一个完整案例开始，之后逐件加入。</span>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </section>

      <footer>
        <div>
          <span>下一件作品</span>
          <h2>正在发生。</h2>
        </div>
        <a href="https://github.com/1364479497-crypto" target="_blank" rel="noreferrer">
          在 GitHub 继续探索 <ArrowUpRight />
        </a>
        <p>© 2026 XIUJIN — INTERACTIVE CREATOR</p>
      </footer>
    </main>
  );
}
