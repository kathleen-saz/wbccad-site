export function Wordmark() {
  return (
    <svg className="wordmark" viewBox="0 0 152 28" role="img" aria-label="WBCcad">
      <path d="M1 4h5l5 17 5-17h4l5 17 5-17h5l-8 23h-4l-5-15-5 15H9L1 4Z" fill="currentColor" />
      <path d="M39 4h11c5 0 8 2 8 6 0 2-1 4-3 5 3 1 4 3 4 6 0 4-3 7-9 7H39V4Zm5 4v5h6c2 0 3-1 3-3s-1-2-3-2h-6Zm0 9v6h6c3 0 4-1 4-3s-1-3-4-3h-6Z" fill="currentColor" />
      <path d="M73 3c5 0 9 2 11 6l-4 2c-1-2-4-4-7-4-5 0-8 3-8 8s3 9 8 9c3 0 6-2 7-5l4 2c-2 4-6 7-11 7-8 0-13-5-13-13S65 3 73 3Z" fill="currentColor" />
      <path d="M87 12h3v13c0 2 0 2 2 2h1v3h-2c-3 0-4-1-4-4V12Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm13 5c4 0 7 2 8 5h-4c0-1-2-2-4-2-3 0-5 2-5 5s2 5 5 5c2 0 3-1 4-3h4c-1 4-4 6-8 6-5 0-9-3-9-8s4-8 9-8Zm16 0c5 0 8 3 8 8v8h-4v-2c-1 2-3 2-5 2-4 0-6-2-6-5 0-4 3-5 7-5h4c0-2-2-3-4-3s-3 1-4 2l-3-2c2-2 4-3 7-3Zm0 9c-2 0-3 1-3 2s1 2 3 2c3 0 4-2 4-4h-4Zm22-15h4v22h-4v-2c-1 2-3 2-5 2-5 0-8-3-8-8s3-8 8-8c2 0 4 1 5 2V5Zm-4 9c-3 0-5 2-5 5s2 5 5 5 4-2 4-5-1-5-4-5Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg className="arrow-icon" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true">
      <path d="M3 8.5h10M9 4l4.5 4.5L9 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg className="check-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" />
      <path d="m7.5 12 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CadViewport() {
  return (
    <div className="cad-shell">
      <div className="cad-toolbar">
        <span className="cad-app">WB / PROJECT</span>
        <span className="cad-file">mercado_central_rev04.dwg</span>
        <span className="cad-status">SALVO</span>
      </div>
      <div className="cad-body">
        <aside className="cad-tools" aria-hidden="true">
          <span className="tool-active">⌖</span><span>╱</span><span>□</span><span>○</span><span>⌁</span>
        </aside>
        <div className="cad-canvas">
          <svg viewBox="0 0 760 475" aria-hidden="true">
            <defs>
              <pattern id="minorGrid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="currentColor" strokeOpacity=".07" strokeWidth=".6" /></pattern>
              <pattern id="majorGrid" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="url(#minorGrid)" /><path d="M50 0H0V50" fill="none" stroke="currentColor" strokeOpacity=".13" strokeWidth=".8" /></pattern>
            </defs>
            <rect width="760" height="475" fill="url(#majorGrid)" />
            <g className="plan-lines" fill="none" stroke="currentColor">
              <path d="M80 74h560v320H80z" strokeWidth="3" />
              <path d="M80 130h145v264M225 130h175v125M400 130h240M400 255v139" strokeWidth="2" />
              <path d="M80 74v56h145V74M400 130V74" strokeDasharray="6 5" opacity=".65" />
            </g>
            <g className="fixtures" fill="none" stroke="currentColor">
              <g transform="translate(265 160)"><rect width="95" height="25" /><path d="M8 5h79M8 12h79M8 19h79" /></g>
              <g transform="translate(265 205)"><rect width="95" height="25" /><path d="M8 5h79M8 12h79M8 19h79" /></g>
              <g transform="translate(265 270)"><rect width="95" height="25" /><path d="M8 5h79M8 12h79M8 19h79" /></g>
              <g transform="translate(265 315)"><rect width="95" height="25" /><path d="M8 5h79M8 12h79M8 19h79" /></g>
              <g transform="translate(445 170)"><path d="M0 0h135v58H0zM10 8h115v42H10zM45 8v42M90 8v42" /></g>
              <g transform="translate(445 285)"><circle cx="25" cy="25" r="22" /><circle cx="78" cy="25" r="22" /><circle cx="131" cy="25" r="22" /></g>
              <path d="M105 160h90v40h-90zM105 225h90v40h-90zM105 290h90v40h-90z" />
            </g>
            <g className="dimensions" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M80 52h560M80 47v10M640 47v10" /><path d="M654 74v320M649 74h10M649 394h10" />
              <text x="340" y="46" fill="currentColor" stroke="none">12.500</text><text x="672" y="245" fill="currentColor" stroke="none" transform="rotate(90 672 245)">8.400</text>
            </g>
            <g className="selection">
              <rect x="258" y="153" width="109" height="84" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" />
              <rect x="255" y="150" width="6" height="6" /><rect x="364" y="150" width="6" height="6" /><rect x="255" y="234" width="6" height="6" /><rect x="364" y="234" width="6" height="6" />
            </g>
          </svg>
          <div className="cursor-tag" aria-hidden="true"><span /> GÔNDOLA · M02</div>
          <div className="cad-coordinates" aria-hidden="true">X 1250.00 &nbsp; Y 840.00 &nbsp; Z 0.00</div>
        </div>
        <aside className="cad-panel" aria-hidden="true">
          <div className="panel-title"><span>PROPRIEDADES</span><b>×</b></div>
          <dl><div><dt>família</dt><dd>gôndola central</dd></div><div><dt>comprimento</dt><dd>1250 mm</dd></div><div><dt>altura</dt><dd>1800 mm</dd></div><div><dt>módulos</dt><dd>02</dd></div><div><dt>acabamento</dt><dd>grafite 12</dd></div></dl>
          <div className="panel-bom"><span>ITENS CALCULADOS</span><strong>148</strong><small>lista atualizada</small></div>
        </aside>
      </div>
      <div className="cad-footer"><span>MODELO</span><span>LAYOUT 01</span><span>ORÇAMENTO</span><b>ESCALA 1:50</b></div>
    </div>
  );
}

type GlyphType = "shelves" | "furniture" | "cooling" | "storage" | "pipes" | "render";

export function ModuleGlyph({ type }: { type: GlyphType }) {
  const paths: Record<GlyphType, React.ReactNode> = {
    shelves: <><path d="M6 6h28v28H6zM6 15h28M6 25h28M12 6v28M28 6v28" /><path d="M2 34h36" /></>,
    furniture: <><path d="M5 13h30v21H5zM10 8h20v5M12 34v4M28 34v4" /><path d="M20 13v21" /></>,
    cooling: <><rect x="6" y="6" width="28" height="29" rx="2" /><path d="M6 14h28M13 19v11M20 19v11M27 19v11" /><path d="M20 2v4" /></>,
    storage: <><path d="M5 5v32M35 5v32M5 13h30M5 25h30" /><rect x="9" y="8" width="8" height="5" /><rect x="20" y="8" width="11" height="5" /><rect x="9" y="18" width="12" height="7" /><rect x="24" y="18" width="7" height="7" /></>,
    pipes: <><path d="M5 7h14v10h8v16h8" /><path d="M12 7v10h7M27 25h8" /><circle cx="5" cy="7" r="2" /><circle cx="35" cy="33" r="2" /></>,
    render: <><path d="m20 4 15 8v17l-15 8-15-8V12l15-8Z" /><path d="m5 12 15 8 15-8M20 20v17" /><path d="m12 8 15 8" /></>,
  };
  return <svg className="module-glyph" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2">{paths[type]}</svg>;
}
