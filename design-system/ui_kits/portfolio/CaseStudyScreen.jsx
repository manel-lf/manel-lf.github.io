/* Case-study view: #/work/<slug>. Same section grammar as home — label +
   statement on the left, prose on the right — with a dark system panel in the
   middle and prev/next wrapping the project list. */
const CS_NS = window.ManelLPezPortfolioDesignSystem_30aec3;
const { NavBar: CSNav, SectionRail: CSRail, SectionHead: CSHead, MetaBar, ProcessCard, CaseNavBtn, Chip: CSChip, IconButton: CSIconButton, MonoLabel: CSMono, Icon: CSIcon } = CS_NS;
const CSD = window.PortfolioData;

function CaseSection({ id, headingId, label, statement, body, children }) {
  return (
    <div id={id}>
      <div className="caseSplit">
        <CSHead headingId={headingId} label={label} statement={statement} />
        <div className="prose reveal" style={{ '--reveal-delay': '120ms' }}>
          {body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
      {children}
    </div>
  );
}

function ProcessScroller({ cards }) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({ atStart: true, atEnd: false });
  const sync = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({ atStart: el.scrollLeft <= 2, atEnd: max <= 2 || el.scrollLeft >= max - 2 });
  };
  React.useEffect(() => { sync(); }, []);
  const scrollBy = (dir) => ref.current?.scrollBy({ left: dir * Math.max(240, ref.current.clientWidth * 0.75), behavior: 'smooth' });
  return (
    <>
      <div className="scrollerHead">
        <CSMono tone="muted">{`${cards.length} steps`}</CSMono>
        <span className="arrowPair">
          <CSIconButton icon="chevronLeft" label="Previous process card" disabled={state.atStart} onClick={() => scrollBy(-1)} />
          <CSIconButton icon="chevronRight" label="Next process card" disabled={state.atEnd} onClick={() => scrollBy(1)} />
        </span>
      </div>
      <div className="scroller" ref={ref} onScroll={sync}>
        {cards.map((c, i) => <ProcessCard key={c.title} index={i + 1} title={c.title} meta={c.meta} body={c.body} />)}
      </div>
    </>
  );
}

function CaseStudyScreen({ slug, theme, onToggleTheme }) {
  const projects = CSD.projects;
  const idx = Math.max(0, projects.findIndex((p) => p.slug === slug));
  const project = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const revealRef = window.useReveal();
  const railIds = React.useMemo(() => CSD.caseUi.rail.map((r) => r.id), []);
  const active = window.useScrollSpy(railIds);
  const ui = CSD.caseUi;

  React.useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project.overview) {
    return (
      <>
        <CSNav theme={theme} onToggleTheme={onToggleTheme} ctaHref={CSD.links.bookACall} onCta={(e) => e.preventDefault()} />
        <main id="main" className="container caseTop">
          <a className="backLink mono" href="#/"><CSIcon name="arrowLeft" size={16} />{ui.backLabel}</a>
          <h1 className="caseTitle"><span className="prefix">{ui.eyebrow}</span> <span className="subject">{`${ui.titlePrefix} ${project.name}`}</span></h1>
          <p className="casePositioning" style={{ justifySelf: 'start', marginTop: 'var(--s5)' }}>
            {project.positioning} This case study is published in full on Behance.
          </p>
          <p style={{ marginTop: 'var(--s6)' }}>
            <a className="viewCase" href={project.externalUrl} target="_blank" rel="noreferrer noopener">View on Behance<CSIcon name="arrowUpRight" size={16} /></a>
          </p>
          <window.SiteFooter />
        </main>
      </>
    );
  }

  return (
    <>
      <CSNav theme={theme} onToggleTheme={onToggleTheme} ctaHref={CSD.links.bookACall} onCta={(e) => e.preventDefault()} />
      <main id="main" ref={revealRef} className="viewFade">
        <div className="container caseTop">
          <a className="backLink mono" href="#/">
            <CSIcon name="arrowLeft" size={16} />
            {ui.backLabel}
          </a>
          <div className="caseHeadGrid">
            <div>
              <span className="caseEyebrow mono">{project.eyebrow}</span>
              <h1 className="caseTitle">
                <span className="prefix">{ui.eyebrow}</span>{' '}
                <span className="subject">{`${ui.titlePrefix} ${project.name}`}</span>
              </h1>
            </div>
            <p className="casePositioning reveal">{project.positioning}</p>
          </div>
          <div className="caseHeroFrame reveal">
            <div className="inner">
              <img src={window.IMG(project.heroImage)} alt="" style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
            </div>
          </div>
          <MetaBar items={[
            { label: ui.metaLabels.role, value: project.role },
            { label: ui.metaLabels.years, value: project.years },
            { label: ui.metaLabels.skills, value: <span className="chips">{project.skills.map((s) => <CSChip key={s}>{s}</CSChip>)}</span> },
          ]} />
        </div>

        <section className="section" aria-labelledby="case-overview-h">
          <div className="container">
            <CaseSection id="overview" headingId="case-overview-h" label={project.overview.eyebrow} statement={project.overview.heading} body={project.overview.body}>
              <div className="wideVisual reveal"><window.Plate ratio={16 / 7} tone="light" label="Overview — product screens" /></div>
            </CaseSection>
          </div>
        </section>

        <section className="section section--tight" aria-labelledby="case-process-h">
          <div className="container">
            <CaseSection id="process" headingId="case-process-h" label={project.process.eyebrow} statement={project.process.heading} body={project.process.body}>
              <ProcessScroller cards={project.process.cards} />
            </CaseSection>
          </div>
        </section>

        <section className="section" aria-labelledby="case-system-h">
          <div className="container">
            <div className="systemPanel reveal" id="system">
              <div className="caseSplit">
                <CSHead headingId="case-system-h" label={project.system.eyebrow} statement={project.system.heading} onPanel />
                <div className="prose prose--onPanel reveal" style={{ '--reveal-delay': '120ms' }}>
                  {project.system.body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <ul className="systemGrid">
                {[0, 1, 2, 3].map((i) => (
                  <li className="systemCell" key={i}><window.Plate ratio={i === 0 ? 4 / 3 : 3 / 4} tone="dark" label={`System ${i + 1}`} /></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--tight" aria-labelledby="case-extend-h">
          <div className="container">
            <CaseSection id="extend" headingId="case-extend-h" label={project.extend.eyebrow} statement={project.extend.heading} body={project.extend.body}>
              <ul className="extendGrid">
                {[0, 1].map((i) => <li className="extendCell reveal" key={i}><window.Plate ratio={4 / 3} tone="light" label={`Store surface ${i + 1}`} /></li>)}
              </ul>
            </CaseSection>
          </div>
        </section>

        <section className="section" aria-labelledby="case-impact-h">
          <div className="container">
            <CaseSection id="impact" headingId="case-impact-h" label={project.impact.eyebrow} statement={project.impact.heading} body={project.impact.body} />
          </div>
        </section>

        <div className="container">
          <nav className="caseNav" aria-label="Other case studies">
            <CaseNavBtn direction="prev" label="Previous" name={prev.name} href={`#/work/${prev.slug}`} />
            <CaseNavBtn direction="next" label="Next" name={next.name} href={`#/work/${next.slug}`} />
          </nav>
        </div>

        <window.SiteFooter />
      </main>
      <CSRail items={CSD.caseUi.rail} activeId={active} label={CSD.caseUi.railLabel} onSelect={(id) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
      }} />
    </>
  );
}

Object.assign(window, { CaseStudyScreen });
