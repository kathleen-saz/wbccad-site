import { ArrowIcon, CadViewport, CheckIcon, ModuleGlyph, Wordmark } from "@/components/visuals";

const modules = [
  {
    index: "01",
    title: "Gôndolas",
    description: "Crie layouts completos com pontas, módulos, acessórios, medidas e acabamentos configuráveis.",
    glyph: "shelves" as const,
  },
  {
    index: "02",
    title: "Mobílias",
    description: "Configure checkouts, equipamentos e móveis com detalhamento técnico e consumo elétrico.",
    glyph: "furniture" as const,
  },
  {
    index: "03",
    title: "Refrigeração",
    description: "Modele expositores, câmaras e sistemas com variáveis térmicas, elétricas e de instalação.",
    glyph: "cooling" as const,
  },
  {
    index: "04",
    title: "Armazenagem",
    description: "Projete porta-paletes e estruturas com dimensões, cargas e regras específicas do produto.",
    glyph: "storage" as const,
  },
  {
    index: "05",
    title: "Tubulação",
    description: "Calcule tubos, conexões, isolamento e insumos a partir dos dados técnicos do projeto.",
    glyph: "pipes" as const,
  },
  {
    index: "06",
    title: "Render",
    description: "Transforme o layout em cenas e materiais que ajudam seu cliente a visualizar a entrega.",
    glyph: "render" as const,
  },
];

const outcomes = [
  "Menos retrabalho entre projeto e orçamento",
  "Listas de materiais geradas a partir do layout",
  "Regras do seu produto incorporadas ao fluxo",
  "Integração com ERP, bases de dados e serviços",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WBCcad — início">
          <Wordmark />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#plataforma">Plataforma</a>
          <a href="#modulos">Módulos</a>
          <a href="#metodo">Como funciona</a>
          <a href="#empresa">Empresa</a>
        </nav>
        <a className="header-cta" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">
          Fale conosco <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>CAD especializado</span> / projetos comerciais</p>
          <h1>
            Do layout ao orçamento.
            <span>Sem perder um parafuso.</span>
          </h1>
          <p className="hero-lede">
            O WBCcad transforma projetos complexos em um fluxo preciso: desenhe, configure, calcule e entregue — com as regras do seu produto dentro do sistema.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">
              Agendar uma conversa <ArrowIcon />
            </a>
            <a className="text-link" href="#plataforma">Conhecer a plataforma <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Visualização conceitual de um projeto técnico no WBCcad">
          <CadViewport />
        </div>
        <div className="hero-proof" aria-label="Informações sobre a empresa">
          <div><strong>1994</strong><span>fundação da Workbench</span></div>
          <div><strong>6+</strong><span>frentes especializadas</span></div>
          <div><strong>1 fluxo</strong><span>do CAD à produção</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Recursos principais">
        <div className="marquee-track">
          <span>DWG compatível</span><i />
          <span>Lista de materiais</span><i />
          <span>Orçamento integrado</span><i />
          <span>Regras de engenharia</span><i />
          <span>Integração ERP</span><i />
          <span>DWG compatível</span><i />
          <span>Lista de materiais</span><i />
          <span>Orçamento integrado</span><i />
        </div>
      </section>

      <section className="platform section-shell" id="plataforma">
        <div className="section-heading">
          <p className="eyebrow">Um sistema, todo o processo</p>
          <h2>Precisão que começa no projeto e chega ao chão de fábrica.</h2>
        </div>
        <div className="platform-grid">
          <article className="feature-card feature-card-wide">
            <div className="card-copy">
              <span className="card-index">A / 01</span>
              <h3>Edite o projeto. O restante acompanha.</h3>
              <p>Altere medidas, acabamentos ou conjuntos e mantenha documentação, materiais e orçamento alinhados à nova configuração.</p>
            </div>
            <div className="change-visual" aria-hidden="true">
              <div className="change-before"><span>REV. 03</span><b>4,20 m</b></div>
              <div className="change-pulse"><ArrowIcon /></div>
              <div className="change-after"><span>REV. 04</span><b>4,80 m</b></div>
            </div>
          </article>
          <article className="feature-card feature-dark">
            <span className="card-index">A / 02</span>
            <div className="bom-icon" aria-hidden="true"><span>12</span><span>04</span><span>28</span></div>
            <h3>Lista técnica, sem adivinhação.</h3>
            <p>Componentes, quantidades, códigos e acabamentos saem do próprio projeto.</p>
          </article>
          <article className="feature-card feature-accent">
            <span className="card-index">A / 03</span>
            <div className="orbit-mark" aria-hidden="true"><span /><span /><span /></div>
            <h3>Feito para o seu produto.</h3>
            <p>Cadastros, restrições e combinações seguem a lógica real da sua engenharia.</p>
          </article>
        </div>
      </section>

      <section className="modules section-shell" id="modulos">
        <div className="section-heading modules-heading">
          <p className="eyebrow">Módulos especializados</p>
          <h2>Uma base comum.<br />Cada operação, sua lógica.</h2>
          <p>Combine os módulos conforme seu portfólio, seu processo comercial e a profundidade técnica de cada entrega.</p>
        </div>
        <div className="module-list">
          {modules.map((module) => (
            <article className="module-row" key={module.index}>
              <span className="module-index">{module.index}</span>
              <ModuleGlyph type={module.glyph} />
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <span className="module-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" id="metodo">
        <div className="workflow-intro section-shell">
          <p className="eyebrow eyebrow-light">Da ideia à entrega</p>
          <h2>Um fluxo contínuo,<br />sem versões paralelas.</h2>
        </div>
        <div className="workflow-steps section-shell">
          <article>
            <span>01 / Projetar</span>
            <h3>Monte o layout com blocos inteligentes.</h3>
            <p>Arraste, posicione e configure itens com as medidas e regras permitidas para cada linha.</p>
          </article>
          <article>
            <span>02 / Validar</span>
            <h3>Deixe o sistema cuidar das dependências.</h3>
            <p>Restrições de engenharia reduzem combinações inválidas e conferências manuais.</p>
          </article>
          <article>
            <span>03 / Entregar</span>
            <h3>Gere proposta, materiais e documentação.</h3>
            <p>Compartilhe uma entrega coerente com comercial, compras, produção e cliente.</p>
          </article>
        </div>
      </section>

      <section className="results section-shell">
        <div className="results-statement">
          <p className="eyebrow">Menos incerteza. Mais controle.</p>
          <blockquote>“O projeto deixa de ser um desenho isolado e passa a conduzir toda a operação.”</blockquote>
        </div>
        <ul className="outcome-list">
          {outcomes.map((outcome) => (
            <li key={outcome}><CheckIcon /><span>{outcome}</span></li>
          ))}
        </ul>
      </section>

      <section className="about section-shell" id="empresa">
        <div className="about-mark" aria-hidden="true">
          <span>W</span><span>B</span><span>C</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Workbench / São Paulo</p>
          <h2>Três décadas traduzindo engenharia em software.</h2>
          <p>O WBCcad é desenvolvido pela Workbench, fundada em 1994. A plataforma nasceu da combinação entre tecnologia, engenharia e operação — e evoluiu em parceria com empresas que projetam, vendem e fabricam soluções complexas.</p>
          <a className="text-link" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">Conheça a trajetória <ArrowIcon /></a>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow eyebrow-light">Seu produto. Suas regras. Um fluxo.</p>
          <h2>Vamos projetar uma operação mais precisa?</h2>
        </div>
        <a className="button button-light" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">
          Conversar com a WBCcad <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer section-shell">
        <Wordmark />
        <p>Software especializado para projetos, orçamentos e produção.</p>
        <div className="footer-links">
          <a href="#top">Voltar ao topo ↑</a>
          <a href="https://wbccad.com" target="_blank" rel="noreferrer">Site atual ↗</a>
        </div>
        <small>© {new Date().getFullYear()} Workbench Consultoria. Conceito de novo site.</small>
      </footer>
    </main>
  );
}
