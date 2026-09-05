/* Journal post view: #/journal/<slug>. One measured 68ch column — long-form
   reading, not a layout exercise. Body blocks are { p } | { h } | { figure } |
   { list } | { stats }, rendered in whatever order the post declares. */
const JP_NS = window.ManelLPezPortfolioDesignSystem_30aec3;
const { NavBar: JPNav, Chip: JPChip, Icon: JPIcon, CaseNavBtn: JPNavBtn } = JP_NS;
const JPD = window.PortfolioData;

function JournalPostScreen({ slug, theme, onToggleTheme }) {
  const posts = JPD.journal.posts;
  const idx = Math.max(0, posts.findIndex((p) => p.slug === slug));
  const post = posts[idx];
  const prev = posts[(idx - 1 + posts.length) % posts.length];
  const next = posts[(idx + 1) % posts.length];
  const revealRef = window.useReveal();

  React.useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <>
      <JPNav theme={theme} onToggleTheme={onToggleTheme} ctaHref={JPD.links.bookACall} onCta={(e) => e.preventDefault()} />
      <main id="main" ref={revealRef} className="viewFade">
        <div className="container postTop">
          <a className="backLink mono" href="#/">
            <JPIcon name="arrowLeft" size={16} />
            Back to journal
          </a>
          <header className="postHead">
            <p className="postHeadMeta mono">
              <span>{post.date}</span>
              <span className="chips">{post.tags.map((t) => <JPChip key={t}>{t}</JPChip>)}</span>
              {post.readMins ? <span>{`${post.readMins} min read`}</span> : null}
            </p>
            <h1 className="postHeadTitle"><span className="subject">{post.title}</span></h1>
            <p className="postHeadDek">{post.dek}</p>
          </header>

          <div className="postHero reveal">
            {post.image
              ? <img src={window.IMG(post.image)} alt="" style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
              : <window.Plate ratio={16 / 9} tone="light" label="Post hero" />}
          </div>

          <div className="postBody">
            {(post.body || [{ p: post.dek }]).map((block, i) => {
              if (block.h) return <h2 className="postH reveal" key={i}>{block.h}</h2>;
              if (block.list) return (
                <ul className="postList reveal" key={i}>
                  {block.list.map((li, n) => <li key={n}>{li}</li>)}
                </ul>
              );
              if (block.stats) return (
                <dl className="postStats reveal" key={i}>
                  {block.stats.map((s) => (
                    <div className="postStat" key={s.label}>
                      <dd>{s.value}</dd>
                      <dt className="mono">{s.label}</dt>
                    </div>
                  ))}
                </dl>
              );
              if (block.figure) return (
                <figure className="postFig reveal" key={i}>
                  <div className="vis"><window.Plate ratio={16 / 9} tone="light" label="Diagram" /></div>
                  <figcaption className="mono">{block.figure}</figcaption>
                </figure>
              );
              return <p className="postP reveal" key={i}>{block.p}</p>;
            })}

            {post.references && post.references.length ? (
              <div className="postRefs reveal">
                <h2 className="postH" style={{ marginTop: 0 }}>References</h2>
                <ol>
                  {post.references.map((ref, i) => (
                    <li key={ref.href}>
                      <span className="postRefNum mono">{`[${i + 1}]`}</span>
                      <a href={ref.href} target="_blank" rel="noreferrer noopener">
                        {ref.label}
                        <JPIcon name="arrowUpRight" size={14} />
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>

          <nav className="caseNav" aria-label="Other posts">
            <JPNavBtn direction="prev" label="Previous" name={prev.title} href={`#/journal/${prev.slug}`} />
            <JPNavBtn direction="next" label="Next" name={next.title} href={`#/journal/${next.slug}`} />
          </nav>
        </div>
        <window.SiteFooter />
      </main>
    </>
  );
}

Object.assign(window, { JournalPostScreen });
