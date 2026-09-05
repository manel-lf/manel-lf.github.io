/* Home view of manellopez portfolio. Composes the design-system components;
   the only local pieces are the typewriter headline, the logo rotator and the
   scroll-reveal/scroll-spy hooks, which are behaviour rather than UI. */
const NS = window.ManelLPezPortfolioDesignSystem_30aec3;
const { NavBar, SectionRail, SectionHead, SpotlightCard, ProjectCard, BitTile, PanelCard, Testimonial, JournalRow, Button, IconButton, MonoLabel, TextLink, Icon, Field, Wordmark, Dialog } = NS;
const D = window.PortfolioData;
const LOGO = (f) => `../../assets/logos/${f}`;
const IMG = (f) => `../../assets/img/${f}`;

function Plate({ ratio = 16 / 9, tone = 'dark', label }) {
  const bg = tone === 'dark' ? 'var(--panel)' : 'var(--surface-2)';
  const ink = tone === 'dark' ? 'var(--panel-muted)' : 'var(--muted)';
  return (
    <div style={{ width: '100%', aspectRatio: String(ratio), background: bg, display: 'grid', placeItems: 'center' }}>
      <span className="mono" style={{ color: ink }}>{label || 'Screenshot'}</span>
    </div>
  );
}

function useTypewriter(words, reduced) {
  const [text, setText] = React.useState('');
  const [i, setI] = React.useState(0);
  const [del, setDel] = React.useState(false);
  React.useEffect(() => {
    if (reduced) { setText(words[0]); return; }
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), 1500);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      const t = setTimeout(() => { setDel(false); setI((n) => n + 1); }, 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, del ? 30 : 58);
    return () => clearTimeout(t);
  }, [text, del, i, words, reduced]);
  return reduced ? words[0] : text;
}

function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const root = ref.current;
    if (!root) return;
    document.documentElement.classList.add('has-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    root.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
  return ref;
}

function useScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return active;
}

function LogoStrip() {
  const { items, perPage, intervalMs, fadeMs } = D.logos;
  const pages = Math.ceil(items.length / perPage);
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPage((n) => (n + 1) % pages), intervalMs);
    return () => clearInterval(id);
  }, [pages, intervalMs]);
  return (
    <div className="container">
      <div className="logoRotator reveal" style={{ '--logo-fade': `${fadeMs}ms` }} aria-label={D.logos.label}>
        {Array.from({ length: pages }, (_, i) => (
          <ul key={i} className={`logoStrip logoPage${i === page ? ' is-active' : ''}`} aria-hidden={i === page ? undefined : 'true'}>
            {items.slice(i * perPage, i * perPage + perPage).map((l) => (
              <li key={l.name}>
                <Wordmark src={LOGO(l.logo)} name={l.name} aspect={l.aspect} scale={l.scale} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function BitsRow({ items, rowIndex }) {
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
    <div className="bitsCluster">
      <div className="rowHead">
        <MonoLabel>{D.bits.rowLabels[rowIndex]}</MonoLabel>
        <span className="arrowPair">
          <IconButton icon="chevronLeft" label="Previous bits" disabled={state.atStart} onClick={() => scrollBy(-1)} />
          <IconButton icon="chevronRight" label="Next bits" disabled={state.atEnd} onClick={() => scrollBy(1)} />
        </span>
      </div>
      <ul className="bitsRow" ref={ref} onScroll={sync}>
        {items.map((bit, i) => (
          <BitTile key={bit.id} index={i} kicker={bit.kicker} caption={bit.caption} image={bit.image ? IMG(bit.image) : undefined} />
        ))}
      </ul>
    </div>
  );
}

function TestimonialCarousel() {
  const quotes = D.testimonials.quotes;
  const [i, setI] = React.useState(0);
  const q = quotes[i];
  return (
    <div className="reveal">
      <Testimonial quote={q.quote} name={q.name} role={q.role} avatar={IMG(q.avatar)} href={q.href} />
      <div className="quoteFoot">
        <span className="dots" role="tablist" aria-label="Testimonials">
          {quotes.map((x, n) => (
            <button key={x.id} type="button" className="dot" aria-current={n === i ? 'true' : undefined} aria-label={`Go to testimonial ${n + 1}`} onClick={() => setI(n)} />
          ))}
        </span>
        <span className="arrowPair">
          <IconButton icon="chevronLeft" label="Previous testimonial" onClick={() => setI((n) => (n - 1 + quotes.length) % quotes.length)} />
          <IconButton icon="chevronRight" label="Next testimonial" onClick={() => setI((n) => (n + 1) % quotes.length)} />
        </span>
      </div>
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function ContactForm() {
  const [values, setValues] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  const validate = (v) => {
    const e = {};
    if (!v.name.trim()) e.name = D.contact.errors.name;
    if (!EMAIL_RE.test(v.email.trim())) e.email = D.contact.errors.email;
    if (!v.subject.trim()) e.subject = D.contact.errors.subject;
    if (v.message.trim().length < 4) e.message = D.contact.errors.message;
    return e;
  };
  const set = (k) => (ev) => {
    const next = { ...values, [k]: ev.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => { setTouched((t) => ({ ...t, [k]: true })); setErrors(validate(values)); };
  const submit = (e) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(next).length) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 700);
  };
  const field = (k, opts = {}) => (
    <Field
      name={k} label={D.contact.fields[k].label} placeholder={D.contact.fields[k].placeholder}
      value={values[k]} invalid={Boolean(touched[k] && errors[k])} error={errors[k]}
      onChange={set(k)} onBlur={blur(k)} required {...opts}
    />
  );

  if (status === 'sent') {
    return (
      <div className="successCard reveal">
        <h3>{D.contact.sentTitle}</h3>
        <p>{D.contact.sentBody}</p>
        <TextLink mono onClick={() => { setStatus('idle'); setValues({ name: '', email: '', subject: '', message: '' }); setTouched({}); setErrors({}); }}>
          {D.contact.resetLabel}
        </TextLink>
      </div>
    );
  }

  return (
    <form className="form reveal" onSubmit={submit} noValidate>
      {field('name')}
      {field('email', { type: 'email' })}
      {field('subject', { full: true })}
      {field('message', { textarea: true, full: true })}
      <div className="formFoot">
        <Button type="submit" variant="ink" disabled={status === 'sending'}>
          {status === 'sending' ? D.contact.submittingLabel : D.contact.submitLabel}
        </Button>
        <MonoLabel className="formStatus">{status === 'sending' ? D.contact.submittingLabel : ''}</MonoLabel>
      </div>
    </form>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <ul className="socials">
            <li><IconButton variant="social" icon="linkedin" label="LinkedIn" href={D.links.linkedin} /></li>
            <li><IconButton variant="social" icon="behance" label="Behance" href={D.links.behance} /></li>
            <li><IconButton variant="social" icon="mail" label="Email" href={`mailto:${D.links.email}`} /></li>
          </ul>
          <p className="copyright mono">
            <span>{D.footer.copyright}</span>
            <span className="sep" aria-hidden="true">|</span>
            <span>{D.footer.madeIn}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function HomeScreen({ theme, onToggleTheme }) {
  const [loaded, setLoaded] = React.useState(false);
  const [booking, setBooking] = React.useState(false);
  React.useEffect(() => { const id = requestAnimationFrame(() => setLoaded(true)); return () => cancelAnimationFrame(id); }, []);
  const revealRef = useReveal();
  const railIds = React.useMemo(() => D.footer.rail.map((r) => r.id), []);
  const active = useScrollSpy(railIds);
  const typed = useTypewriter(D.hero.roles, false);
  const spotlight = D.projects.find((p) => p.slug === D.work.spotlightSlug);
  const others = D.projects.filter((p) => p.slug !== D.work.spotlightSlug);
  const bitRows = [D.bits.items.slice(0, 4), D.bits.items.slice(4, 8)];

  return (
    <>
      <NavBar theme={theme} onToggleTheme={onToggleTheme} ctaHref={D.links.bookACall} onCta={(e) => { e.preventDefault(); setBooking(true); }} />
      <main id="main" ref={revealRef}>
        <section className={`container hero${loaded ? ' is-loaded' : ''}`} aria-labelledby="hero-name">
          <h1 className="heroName" id="hero-name" aria-label={`${D.hero.name} — ${D.meta.role}`}>
            {D.hero.name.split(' ').map((w, i) => (
              <span className="word" key={w}>
                <span className="wordInner" style={{ '--word-delay': `${i * 90}ms` }}>{w}</span>
              </span>
            ))}
          </h1>
          <p className="typeLine" aria-hidden="true">
            <span className="typed">{typed}</span>
            <span className="caret" />
          </p>
          <div className="heroLower">
            <span className="scrollHint mono reveal" aria-hidden="true">
              <Icon name="arrowRight" size={14} />
              {D.hero.scrollHint}
            </span>
            <p className="heroBio reveal">{D.hero.bio}</p>
          </div>
        </section>

        <LogoStrip />

        <section id="work" className="section" aria-labelledby="work-h">
          <div className="container">
            <SectionHead headingId="work-h" label={D.work.eyebrow} statement={D.work.heading} />
            <div style={{ marginTop: 'clamp(32px,5vh,56px)' }}>
              <SpotlightCard
                image={IMG(spotlight.heroImage)}
                logo={LOGO(spotlight.spotlightLogo)} logoAspect={spotlight.spotlightLogoAspect}
                statement={spotlight.spotlightTitle} stats={spotlight.metrics}
                href={`#/work/${spotlight.slug}`}
              />
            </div>
            <ul className="projectGrid">
              {others.map((p, i) => (
                <ProjectCard key={p.slug} index={i} project={{ ...p, logo: p.logo ? LOGO(p.logo) : undefined, thumbnail: p.thumbnail ? IMG(p.thumbnail) : undefined }} />
              ))}
            </ul>
          </div>
        </section>

        <section id="bits" className="section" aria-labelledby="bits-h">
          <div className="container">
            <SectionHead headingId="bits-h" label={D.bits.eyebrow} statement={D.bits.heading} />
            <div className="bitsRows">
              {bitRows.map((row, i) => <BitsRow key={i} items={row} rowIndex={i} />)}
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-h">
          <div className="container">
            <SectionHead headingId="about-h" label={D.about.eyebrow} statement={D.about.heading} />
            <div style={{ marginTop: 'clamp(32px,5vh,56px)' }} className="reveal">
              <PanelCard aside={<img src={IMG('manel-portrait.jpg')} alt="Manel López" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />}>
                <h3>{D.about.title}</h3>
                <div className="aboutBody">{D.about.body.map((p, i) => <p key={i}>{p}</p>)}</div>
                <div className="btnRow">
                  <Button variant="panel" leadingIcon="linkedin" icon="arrowUpRight" href={D.links.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</Button>
                </div>
              </PanelCard>
            </div>
          </div>
        </section>

        <section id="shoutouts" className="section" aria-labelledby="shout-h">
          <div className="container">
            <div className="caseSplit">
              <div>
                <SectionHead headingId="shout-h" label={D.testimonials.eyebrow} statement={D.testimonials.heading} />
                <p className="reveal" style={{ marginTop: 'var(--s5)', color: 'var(--muted)', maxWidth: '40ch', lineHeight: 1.65 }}>{D.testimonials.intro}</p>
              </div>
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <section id="journal" className="section" aria-labelledby="journal-h">
          <div className="container">
            <SectionHead headingId="journal-h" label={D.journal.eyebrow} statement={D.journal.heading} />
            <ul className="journalList">
              {D.journal.posts.map((post, i) => (
                <JournalRow key={post.slug} index={i} post={{ ...post, image: post.image ? IMG(post.image) : undefined }} />
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-h">
          <div className="container">
            <div className="caseSplit">
              <div>
                <SectionHead headingId="contact-h" label={D.contact.eyebrow} statement={D.contact.heading} />
                <p className="reveal" style={{ marginTop: 'var(--s5)', color: 'var(--muted)', maxWidth: '40ch', lineHeight: 1.65 }}>{D.contact.intro}</p>
                <p className="reveal" style={{ marginTop: 'var(--s6)' }}>
                  <MonoLabel tone="muted" style={{ display: 'block' }}>{D.contact.emailLabel}</MonoLabel>
                  <TextLink href={`mailto:${D.links.email}`} style={{ display: 'inline-block', marginTop: 'var(--s2)' }}>{D.links.email}</TextLink>
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
      <SectionRail items={D.footer.rail} activeId={active} label={D.footer.railLabel} onSelect={(id) => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
      }} />
      {booking ? (
        <Dialog title={D.booking.title} subtitle={D.booking.subtitle} footerLink={D.links.bookACall} footerLabel={D.booking.newTabLabel} onClose={() => setBooking(false)}>
          <div style={{ display: 'grid', placeItems: 'center', minHeight: '320px', border: '1px solid var(--hairline)', borderRadius: 'var(--r-md)', background: 'var(--surface-2)' }}>
            <MonoLabel tone="muted">{D.booking.loadingLabel}</MonoLabel>
          </div>
        </Dialog>
      ) : null}
    </>
  );
}

Object.assign(window, { HomeScreen, SiteFooter, Plate, useReveal, useScrollSpy, LOGO, IMG });
