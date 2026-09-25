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
  "Uma alteração de medida não vira uma nova planilha",
  "O orçamento nasce do que foi desenhado",
  "Compras recebe a lista do projeto aprovado",
  "O ERP recebe dados, não retrabalho",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WBCcad — início">
          <Wordmark />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#plataforma">Produto</a>
          <a href="#modulos">Aplicações</a>
          <a href="#metodo">Fluxo</a>
          <a href="#empresa">Quem faz</a>
        </nav>
        <a className="header-cta" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">
          Agendar demo <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>CAD especializado</span> / projeto, orçamento e produção</p>
          <h1>
            Projete. Orce. Produza.
            <span>Sem refazer o trabalho.</span>
          </h1>
          <p className="hero-lede">
            Você muda uma medida no layout. O WBCcad atualiza materiais, custos e documentação — sem manter o mesmo projeto em três lugares diferentes.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">
              Ver o WBCcad em ação <ArrowIcon />
            </a>
            <a className="text-link" href="#modulos">Explorar os módulos <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Visualização conceitual de um projeto técnico no WBCcad">
          <CadViewport />
        </div>
        <div className="hero-proof" aria-label="Informações sobre a empresa">
          <div><strong>Desde 1994</strong><span>desenvolvido pela Workbench</span></div>
          <div><strong>6 módulos</strong><span>que podem trabalhar juntos</span></div>
          <div><strong>1 projeto</strong><span>para desenho, materiais e proposta</span></div>
        </div>
      </section>

      <section className="marquee" aria-label="Recursos principais">
        <div className="marquee-track">
          <span>Desenho técnico</span><i />
          <span>Lista de materiais</span><i />
          <span>Orçamento do projeto</span><i />
          <span>Regras do seu produto</span><i />
          <span>Dados para o ERP</span><i />
          <span>Desenho técnico</span><i />
          <span>Lista de materiais</span><i />
          <span>Orçamento do projeto</span><i />
        </div>
      </section>

      <section className="platform section-shell" id="plataforma">
        <div className="section-heading">
          <p className="eyebrow">Uma fonte para o projeto</p>
          <h2>O projeto mudou? O orçamento muda junto.</h2>
        </div>
        <div className="platform-grid">
          <article className="feature-card feature-card-wide">
            <div className="card-copy">
              <span className="card-index">A / 01</span>
              <h3>Troque uma medida sem refazer três arquivos.</h3>
              <p>Medidas, acabamentos e conjuntos ficam ligados ao projeto. Quando algo muda, materiais e orçamento acompanham a revisão.</p>
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
            <h3>Saiba o que fabricar.</h3>
            <p>Componentes, quantidades, códigos e acabamentos saem do que foi desenhado.</p>
          </article>
          <article className="feature-card feature-accent">
            <span className="card-index">A / 03</span>
            <div className="orbit-mark" aria-hidden="true"><span /><span /><span /></div>
            <h3>Seu produto tem regras.</h3>
            <p>O WBCcad conhece as combinações, limites e opções que sua engenharia já usa.</p>
          </article>
        </div>
      </section>

      <section className="modules section-shell" id="modulos">
        <div className="section-heading modules-heading">
          <p className="eyebrow">Aplicações</p>
          <h2>Escolha só o que sua operação precisa.</h2>
          <p>Os módulos compartilham a mesma base de projeto. Você combina as partes que fazem sentido para o seu catálogo e para a sua entrega.</p>
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
          <p className="eyebrow eyebrow-light">Do primeiro traço à entrega</p>
          <h2>Desenhe uma vez.<br />Use a informação até o fim.</h2>
        </div>
        <div className="workflow-steps section-shell">
          <article>
            <span>01 / Projetar</span>
            <h3>Monte o layout com o seu catálogo.</h3>
            <p>Posicione equipamentos e módulos já configurados com as medidas e opções que você vende.</p>
          </article>
          <article>
            <span>02 / Validar</span>
            <h3>O sistema confere as combinações.</h3>
            <p>As regras cadastradas avisam quando uma escolha não fecha antes que ela chegue ao orçamento.</p>
          </article>
          <article>
            <span>03 / Entregar</span>
            <h3>Entregue a informação para cada equipe.</h3>
            <p>Comercial recebe a proposta. Compras e produção recebem os itens do projeto aprovado.</p>
          </article>
        </div>
      </section>

      <section className="results section-shell">
        <div className="results-statement">
          <p className="eyebrow">No dia a dia</p>
          <h2>Menos ida e volta entre quem vende, quem projeta e quem fabrica.</h2>
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
          <h2>Feito por quem conhece o caminho entre a tela e a fábrica.</h2>
          <p>A Workbench desenvolve o WBCcad desde 1994. O trabalho começa entendendo como cada empresa vende, projeta e fabrica — e só depois vira regra dentro do software.</p>
          <a className="text-link" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">Conheça a trajetória <ArrowIcon /></a>
        </div>
      </section>

      <section className="final-cta section-shell">
        <div>
          <p className="eyebrow eyebrow-light">Uma demonstração com contexto</p>
          <h2>Quer testar o WBCcad com um produto do seu catálogo?</h2>
        </div>
        <a className="button button-light" href="https://wbccad.com/about-us" target="_blank" rel="noreferrer">
          Agendar uma demonstração <ArrowIcon />
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
