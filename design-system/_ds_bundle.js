/* @ds-bundle: {"format":4,"namespace":"ManelLPezPortfolioDesignSystem_30aec3","components":[{"name":"BitTile","sourcePath":"components/content/BitTile.jsx"},{"name":"CaseNavBtn","sourcePath":"components/content/CaseNavBtn.jsx"},{"name":"JournalRow","sourcePath":"components/content/JournalRow.jsx"},{"name":"MetaBar","sourcePath":"components/content/MetaBar.jsx"},{"name":"PanelCard","sourcePath":"components/content/PanelCard.jsx"},{"name":"ProcessCard","sourcePath":"components/content/ProcessCard.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"SectionHead","sourcePath":"components/content/SectionHead.jsx"},{"name":"SpotlightCard","sourcePath":"components/content/SpotlightCard.jsx"},{"name":"StatRow","sourcePath":"components/content/StatRow.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_FILLED","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"MonoLabel","sourcePath":"components/core/MonoLabel.jsx"},{"name":"Monogram","sourcePath":"components/core/Monogram.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SectionRail","sourcePath":"components/navigation/SectionRail.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/content/BitTile.jsx":"bad132b275d8","components/content/CaseNavBtn.jsx":"faab9af3e6fa","components/content/JournalRow.jsx":"c546f2a61e1b","components/content/MetaBar.jsx":"e2e011792321","components/content/PanelCard.jsx":"d92b35bf0fd8","components/content/ProcessCard.jsx":"64af0f7b6f65","components/content/ProjectCard.jsx":"a76c4cfdef5d","components/content/SectionHead.jsx":"d0be76e97869","components/content/SpotlightCard.jsx":"0cbe9eca8b3d","components/content/StatRow.jsx":"4e00ac2fd9c0","components/content/Testimonial.jsx":"2d6fab58c426","components/core/Avatar.jsx":"7c4261419df8","components/core/Button.jsx":"79b774e37440","components/core/Chip.jsx":"03908ac7ea31","components/core/Icon.jsx":"b247c936ae45","components/core/IconButton.jsx":"b0028dcdbae0","components/core/MonoLabel.jsx":"f5ad4d539353","components/core/Monogram.jsx":"eb570e71364e","components/core/TextLink.jsx":"6b64c3fa5401","components/core/ThemeToggle.jsx":"cb05b54b8f5d","components/core/Wordmark.jsx":"9e7f20455516","components/forms/Field.jsx":"15ebccfd12b6","components/navigation/NavBar.jsx":"a29e0bac20ea","components/navigation/SectionRail.jsx":"d2437c1e9115","components/overlay/Dialog.jsx":"fcec183ec885","ui_kits/portfolio/CaseStudyScreen.jsx":"00c40f5dc9ea","ui_kits/portfolio/HomeScreen.jsx":"dd0e6672702d","ui_kits/portfolio/JournalPostScreen.jsx":"1093b615f6a8","ui_kits/portfolio/data.js":"64748aa2787c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ManelLPezPortfolioDesignSystem_30aec3 = window.ManelLPezPortfolioDesignSystem_30aec3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BitTile.jsx
try { (() => {
/* Small tile in the "Design bits" rows: 4:3 media, an accent mono kicker and
   one sentence. Renders as an <li> for .bitsRow. */
function BitTile({
  image,
  kicker,
  caption,
  index = 0,
  ratio = 4 / 3
}) {
  return /*#__PURE__*/React.createElement("li", {
    className: "bitTile reveal",
    style: {
      '--reveal-delay': `${index * 60}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bitMedia"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      aspectRatio: String(ratio),
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: String(ratio),
      background: 'var(--surface-2)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "bitBody"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono kicker"
  }, kicker), /*#__PURE__*/React.createElement("p", null, caption)));
}
Object.assign(__ds_scope, { BitTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BitTile.jsx", error: String((e && e.message) || e) }); }

// components/content/MetaBar.jsx
try { (() => {
/* The rules-bounded meta strip under a case study's hero: role, years, and a
   wider skills cell. */
function MetaBar({
  items
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: "metaBar"
  }, items.map(item => /*#__PURE__*/React.createElement("div", {
    className: "metaCell",
    key: item.label
  }, /*#__PURE__*/React.createElement("dt", {
    className: "mono"
  }, item.label), /*#__PURE__*/React.createElement("dd", null, item.value))));
}
Object.assign(__ds_scope, { MetaBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MetaBar.jsx", error: String((e && e.message) || e) }); }

// components/content/PanelCard.jsx
try { (() => {
/* The near-black panel: the brand's one inverted surface. Used for the About
   block (with a portrait beside the copy) and for a case study's system
   section. Content on it uses --panel-ink / --panel-muted. */
function PanelCard({
  children,
  aside,
  variant = 'about',
  className = ''
}) {
  const cls = variant === 'system' ? 'systemPanel' : 'aboutCard';
  if (variant === 'system') {
    return /*#__PURE__*/React.createElement("section", {
      className: `${cls}${className ? ' ' + className : ''}`
    }, children);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `${cls}${className ? ' ' + className : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "aboutCopy"
  }, children), aside ? /*#__PURE__*/React.createElement("div", {
    className: "aboutPortrait"
  }, aside) : null);
}
Object.assign(__ds_scope, { PanelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PanelCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessCard.jsx
try { (() => {
/* One step of a case study's process, in the horizontal scroller. The index
   is accent mono; the body is pushed to the bottom with margin-top:auto so
   cards of different title lengths still baseline-align. */
function ProcessCard({
  index,
  title,
  meta,
  body
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "processCard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "idx mono"
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("span", {
    className: "meta mono"
  }, meta), /*#__PURE__*/React.createElement("p", null, body));
}
Object.assign(__ds_scope, { ProcessCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHead.jsx
try { (() => {
/* Every section opens the same way: a muted label, then the statement in ink,
   both at the same size and weight. An optional aside splits it into two
   columns. Both halves reveal on scroll, the statement 80ms behind the label. */
function SectionHead({
  label,
  statement,
  aside,
  onPanel = false,
  headingId,
  as: Tag = 'h2'
}) {
  const heading = /*#__PURE__*/React.createElement(Tag, {
    className: `sectionHead${onPanel ? ' sectionHead--onPanel' : ''}`,
    id: headingId
  }, /*#__PURE__*/React.createElement("span", {
    className: "label reveal"
  }, label), ' ', /*#__PURE__*/React.createElement("span", {
    className: "statement reveal",
    style: {
      '--reveal-delay': '80ms'
    }
  }, statement));
  if (!aside) return heading;
  return /*#__PURE__*/React.createElement("div", {
    className: "splitHead"
  }, heading, /*#__PURE__*/React.createElement("p", {
    className: "aside reveal",
    style: {
      '--reveal-delay': '160ms'
    }
  }, aside));
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/content/StatRow.jsx
try { (() => {
/* Metric row. The value is rendered below the label in the DOM and flipped
   with column-reverse, so the label reads first to assistive tech while the
   number sits on top. */
function StatRow({
  stats,
  onPanel = true
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: `statRow${onPanel ? '' : ' statRow--onCanvas'}`
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("dt", {
    className: "label mono"
  }, s.label), /*#__PURE__*/React.createElement("dd", {
    className: "value"
  }, s.value))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const {
  useState
} = React;
/* 44px circle with a hairline border. Falls back to initials rather than a
   broken image, so a missing file degrades to something deliberate. */
function Avatar({
  src,
  name,
  size = 44
}) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(/\s+/).map(w => w[0]).slice(0, 2).join('');
  if (!src || failed) {
    return /*#__PURE__*/React.createElement("span", {
      className: "avatar avatar--initials",
      style: {
        width: size,
        height: size
      },
      "aria-hidden": "true"
    }, initials);
  }
  return /*#__PURE__*/React.createElement("img", {
    className: "avatar",
    style: {
      width: size,
      height: size
    },
    src: src,
    alt: "",
    loading: "lazy",
    decoding: "async",
    onError: () => setFailed(true)
  });
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill-outlined mono tag. Journal post tags and skill lists. */
function Chip({
  children,
  as: Tag = 'span',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `chip mono${className ? ' ' + className : ''}`
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Icon set lifted verbatim from the portfolio: 20×20 viewBox, 1.5px stroke,
   round caps and joins. Brand marks (linkedin, behance, github) are filled
   paths instead of strokes. */
const ICON_PATHS = {
  arrowRight: 'M4 10h12M11 5l5 5-5 5',
  arrowLeft: 'M16 10H4M9 15L4 10l5-5',
  arrowUpRight: 'M6 14L14 6M7 6h7v7',
  chevronLeft: 'M12 4L6 10l6 6',
  chevronRight: 'M8 4l6 6-6 6',
  sun: 'M10 3v1.6M10 15.4V17M3 10h1.6M15.4 10H17M5.05 5.05l1.13 1.13M13.82 13.82l1.13 1.13M14.95 5.05l-1.13 1.13M6.18 13.82l-1.13 1.13',
  moon: 'M15.5 12.6A6.2 6.2 0 017.4 4.5a6.5 6.5 0 108.1 8.1z',
  mail: 'M2.5 5.5h15v9h-15zM2.5 6l7.5 5 7.5-5',
  calendar: 'M4 5.5h12v11H4zM7 3v3M13 3v3M4 9h12',
  close: 'M5 5l10 10M15 5L5 15'
};
const ICON_FILLED = {
  linkedin: 'M4.98 3.5a2 2 0 11-.02 4 2 2 0 01.02-4zM3.3 8.9h3.35V19H3.3zM9.2 8.9h3.2v1.38h.05c.45-.83 1.55-1.7 3.19-1.7 3.41 0 4.04 2.2 4.04 5.05V19h-3.35v-4.72c0-1.13-.02-2.58-1.6-2.58-1.6 0-1.85 1.22-1.85 2.5V19H9.2z',
  behance: 'M8.4 4.6c1.9 0 3.4.55 3.4 2.55 0 1.05-.5 1.75-1.4 2.15 1.25.35 1.9 1.3 1.9 2.6 0 2.15-1.75 3.1-3.75 3.1H2.5V4.6zm-.3 4.2c.8 0 1.35-.35 1.35-1.2 0-.95-.7-1.15-1.5-1.15H5.1v2.35zm.15 4.45c.9 0 1.6-.35 1.6-1.4 0-1.05-.6-1.45-1.55-1.45H5.1v2.85zM16.9 13.6c.6 0 1.15-.3 1.35-.85h1.9c-.4 1.7-1.65 2.5-3.3 2.5-2.3 0-3.75-1.55-3.75-3.85 0-2.2 1.5-3.85 3.75-3.85 2.4 0 3.5 1.85 3.4 4.2h-5c0 1.15.6 1.85 1.65 1.85zm1.15-3.1c-.1-.9-.55-1.4-1.4-1.4-.95 0-1.35.65-1.4 1.4zM14.3 5.4h4.35v1.25H14.3z',
  github: 'M10 1.8a8.2 8.2 0 00-2.6 16c.41.08.56-.18.56-.4v-1.4c-2.28.5-2.76-1.1-2.76-1.1-.37-.95-.91-1.2-.91-1.2-.75-.51.06-.5.06-.5.82.06 1.26.85 1.26.85.73 1.26 1.92.9 2.39.68.07-.53.28-.9.51-1.1-1.82-.21-3.73-.91-3.73-4.05 0-.9.32-1.63.85-2.2-.09-.21-.37-1.05.08-2.18 0 0 .69-.22 2.25.84a7.8 7.8 0 014.1 0c1.56-1.06 2.25-.84 2.25-.84.45 1.13.17 1.97.08 2.18.53.57.85 1.3.85 2.2 0 3.15-1.92 3.84-3.75 4.04.29.25.55.74.55 1.5v2.22c0 .22.15.48.57.4A8.2 8.2 0 0010 1.8z'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  className,
  style
}) {
  const filled = ICON_FILLED[name];
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    style: style,
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false"
  }, filled ? /*#__PURE__*/React.createElement("path", {
    d: filled,
    fill: "currentColor"
  }) : /*#__PURE__*/React.createElement("path", {
    d: ICON_PATHS[name] || ICON_PATHS.arrowRight,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { ICON_PATHS, ICON_FILLED, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseNavBtn.jsx
try { (() => {
/* Prev/next pair at the foot of a case study or journal post. The "next"
   variant mirrors its alignment to the right edge. */
function CaseNavBtn({
  direction,
  label,
  name,
  href,
  onClick
}) {
  const isNext = direction === 'next';
  return /*#__PURE__*/React.createElement("a", {
    className: `caseNavBtn${isNext ? ' caseNavBtn--next' : ''}`,
    href: href,
    onClick: onClick,
    "aria-label": `${label} — ${name}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dir mono"
  }, !isNext ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowLeft",
    size: 14
  }) : null, label, isNext ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, name));
}
Object.assign(__ds_scope, { CaseNavBtn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseNavBtn.jsx", error: String((e && e.message) || e) }); }

// components/content/JournalRow.jsx
try { (() => {
/* A journal row: thumbnail, date + tags, title + dek, and an arrow that
   slides 3px on hover. The whole row is the link. */
function JournalRow({
  post,
  index = 0,
  onClick
}) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "postRow reveal",
    href: `#/journal/${post.slug}`,
    style: {
      '--reveal-delay': `${index * 70}ms`
    },
    onClick: onClick,
    "aria-label": `${post.title} — Read`
  }, /*#__PURE__*/React.createElement("span", {
    className: "postThumb"
  }, post.image ? /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: "",
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      aspectRatio: '4 / 3',
      background: 'var(--surface-2)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "postMeta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, post.date), /*#__PURE__*/React.createElement("span", {
    className: "chips"
  }, (post.tags || []).map(t => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("span", {
    className: "postMain"
  }, /*#__PURE__*/React.createElement("span", {
    className: "postTitle"
  }, post.title), /*#__PURE__*/React.createElement("span", {
    className: "postDek"
  }, post.dek)), /*#__PURE__*/React.createElement("span", {
    className: "go",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowUpRight",
    size: 18
  }))));
}
Object.assign(__ds_scope, { JournalRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/JournalRow.jsx", error: String((e && e.message) || e) }); }

// components/content/SpotlightCard.jsx
try { (() => {
/* The hero work card: a near-black panel with the case's imagery behind a
   three-stop protection gradient, the brand lockup top-left, a two-line
   statement, and stats sharing the bottom rail with the CTA. */
function SpotlightCard({
  image,
  logo,
  logoAspect = 4.457,
  eyebrow,
  statement = [],
  stats = [],
  href,
  ctaLabel = 'View case',
  mediaRef
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "spotlight reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spotlightMedia",
    ref: mediaRef,
    "aria-hidden": "true"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "spotlightInner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "spotlightBrand"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "",
    style: {
      height: '30px',
      width: `${Math.round(30 * logoAspect)}px`
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "mono spotlightEyebrow"
  }, eyebrow)), /*#__PURE__*/React.createElement("h3", {
    className: "spotlightStatement"
  }, statement.map((line, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, line))), /*#__PURE__*/React.createElement("div", {
    className: "spotFoot"
  }, /*#__PURE__*/React.createElement(__ds_scope.StatRow, {
    stats: stats
  }), /*#__PURE__*/React.createElement("a", {
    className: "viewCase",
    href: href
  }, ctaLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 16
  })))));
}
Object.assign(__ds_scope, { SpotlightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpotlightCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
/* A single quote: an oversized hairline quote mark, the quote at 1.375rem,
   then avatar + name + role. The attribution is a link when the person has a
   profile, and inert (but identically laid out) when they do not. */
function Testimonial({
  quote,
  name,
  role,
  avatar,
  href,
  profileLabel = 'on LinkedIn'
}) {
  const who = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    name: name
  }), /*#__PURE__*/React.createElement("span", {
    className: "quoteWho"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quoteName"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "quoteRole mono"
  }, role)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowUpRight",
    size: 16
  }));
  return /*#__PURE__*/React.createElement("figure", {
    className: "quoteWrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "quoteMark",
    "aria-hidden": "true"
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    className: "quoteViewport"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "quoteBody"
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    className: "quoteAttr"
  }, href ? /*#__PURE__*/React.createElement("a", {
    className: "quoteWhoLink",
    href: href,
    target: "_blank",
    rel: "noreferrer noopener",
    "aria-label": `${name} ${profileLabel}`
  }, who) : /*#__PURE__*/React.createElement("span", {
    className: "quoteWhoLink is-static"
  }, who))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Four button treatments, all from the portfolio:
   ink      → .ctaBook / .submit   filled near-black on the canvas
   inverse  → .viewCase            filled off-white on a dark panel
   panel    → .btn                 filled off-white on a dark panel, smaller
   ghost    → .btn--ghost          outlined on a dark panel
   Every one is a pill; every one lifts 1–2px on hover and dims to .92. */
const CLASS = {
  ink: {
    sm: 'ctaBook mono',
    md: 'submit',
    lg: 'submit'
  },
  inverse: {
    sm: 'viewCase',
    md: 'viewCase',
    lg: 'viewCase'
  },
  panel: {
    sm: 'btn',
    md: 'btn',
    lg: 'btn'
  },
  ghost: {
    sm: 'btn btn--ghost',
    md: 'btn btn--ghost',
    lg: 'btn btn--ghost'
  }
};
function Button({
  children,
  variant = 'ink',
  size = 'md',
  href,
  icon = 'arrowRight',
  iconPosition = 'end',
  leadingIcon,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  const base = (CLASS[variant] || CLASS.ink)[size] || CLASS.ink.md;
  const cls = `${base}${className ? ' ' + className : ''}`;
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }) : null;
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 18
  }) : null, iconPosition === 'start' ? glyph : null, /*#__PURE__*/React.createElement("span", null, children), iconPosition === 'end' ? glyph : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      onClick: onClick
    }, rest), body);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick
  }, rest), body);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 32px circular outline button. Used in pairs for the horizontal scrollers
   (.iconBtn) and at 36px for the footer socials (.socialBtn). */
function IconButton({
  icon,
  label,
  href,
  variant = 'outline',
  size,
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = `${variant === 'social' ? 'socialBtn' : 'iconBtn'}${className ? ' ' + className : ''}`;
  const glyph = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size || (variant === 'social' ? 17 : 16)
  });
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      "aria-label": label
    }, rest), glyph);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    disabled: disabled,
    onClick: onClick
  }, rest), glyph);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/MonoLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The mono micro-label: 11px JetBrains Mono, .12em tracking, uppercase.
   Every eyebrow, meta line, rail item and stat label in the product. */
function MonoLabel({
  children,
  as: Tag = 'span',
  tone = 'default',
  className = '',
  ...rest
}) {
  const toneStyle = tone === 'muted' ? {
    color: 'var(--muted)'
  } : tone === 'accent' ? {
    color: 'var(--accent)'
  } : tone === 'onPanel' ? {
    color: 'var(--panel-muted)'
  } : undefined;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `mono${className ? ' ' + className : ''}`,
    style: toneStyle
  }, rest), children);
}
Object.assign(__ds_scope, { MonoLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MonoLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Monogram.jsx
try { (() => {
/* The brand mark: a single letter in a 32px near-black rounded square.
   This is the whole identity — there is no wordmark logo. */
function Monogram({
  letter = 'M',
  href = '#/',
  label = 'Manel López — back to home',
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "monogram",
    href: href,
    "aria-label": label,
    onClick: onClick
  }, letter);
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inline text link: ink text on a hairline underline that both turn accent
   on hover. The only link treatment in body copy. */
function TextLink({
  children,
  href,
  mono = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = `textLink${mono ? ' mono' : ''}${className ? ' ' + className : ''}`;
  if (!href) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      className: cls,
      onClick: onClick
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    onClick: onClick
  }, rest), children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
/* 44×24 pill with an 18px knob. The knob slides 20px on a spring; the theme
   itself is a CSS-variable swap on [data-theme]. */
function ThemeToggle({
  theme = 'light',
  onToggle,
  labelToDark = 'Switch to dark theme',
  labelToLight = 'Switch to light theme'
}) {
  const isDark = theme === 'dark';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "themeToggle",
    onClick: onToggle,
    "aria-pressed": isDark,
    "aria-label": isDark ? labelToLight : labelToDark
  }, /*#__PURE__*/React.createElement("span", {
    className: "knob",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isDark ? 'moon' : 'sun',
    size: 11,
    strokeWidth: 1.8
  })));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/* Client brand marks. The SVG file is used as a CSS mask over currentColor,
   so one solid-black source renders near-black on the light canvas and
   off-white in dark mode. `aspect` is the file's viewBox ratio and sets width
   from height; `scale` evens out optical weight between a wide wordmark and a
   compact one. A mark whose colour must survive is passed `preserveColor` and
   rendered as a real <img> instead, since a mask discards the source fills. */
function Wordmark({
  src,
  name,
  aspect = 4,
  scale = 1,
  height,
  large = false,
  preserveColor = false,
  className = '',
  style
}) {
  const h = height || (large ? 34 : 24);
  const w = Math.round(h * aspect * scale);
  if (preserveColor) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      className: className,
      style: {
        height: `${h * scale}px`,
        width: 'auto',
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    className: `brandmark${large ? ' wordmark--lg' : ''}${className ? ' ' + className : ''}`,
    style: {
      width: `${w}px`,
      height: `${Math.round(h * scale)}px`,
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
/* Secondary work card. Either a masked client wordmark centred in the media
   box, or a real thumbnail bleeding to its edges with the eyebrow lifted onto
   it as a translucent overlay. Lifts 4px on hover; the media scales 1.045. */
function ProjectCard({
  project,
  index = 0,
  onClick
}) {
  const isExternal = Boolean(project.externalUrl);
  const hasThumb = Boolean(project.thumbnail);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    className: "projectCard reveal",
    href: isExternal ? project.externalUrl : `#/work/${project.slug}`,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noreferrer noopener' : undefined,
    style: {
      '--reveal-delay': `${index * 70}ms`
    },
    onClick: onClick,
    "aria-label": `${project.name} — ${isExternal ? 'View on Behance' : 'View case'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "cardMedia"
  }, /*#__PURE__*/React.createElement("span", {
    className: `cardTop mono${hasThumb ? ' cardTop--overlay' : ''}`
  }, /*#__PURE__*/React.createElement("span", null, project.eyebrow), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowUpRight",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: `cardMarkWrap${hasThumb ? ' cardMarkWrap--thumbnail' : ''}`
  }, hasThumb ? /*#__PURE__*/React.createElement("img", {
    className: "cardMediaImg",
    src: project.thumbnail,
    alt: "",
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    src: project.logo,
    name: project.name,
    aspect: project.logoAspect,
    scale: project.logoScale,
    large: true
  }))), /*#__PURE__*/React.createElement("span", {
    className: "cardBody"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cardDesc"
  }, project.cardDescription), /*#__PURE__*/React.createElement("span", {
    className: "cardCta mono"
  }, isExternal ? 'View on Behance' : 'View case', /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrowRight",
    size: 14
  })))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/* Underline-only field: no box, no fill. The bottom hairline turns accent on
   focus and danger when invalid. Error text is mono, below the control. */
function Field({
  id,
  name,
  label,
  type = 'text',
  value,
  placeholder,
  required = false,
  invalid = false,
  error,
  full = false,
  textarea = false,
  rows = 4,
  onChange,
  onBlur
}) {
  const Control = textarea ? 'textarea' : 'input';
  const fieldId = id || `field-${name}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `field${full ? ' field--full' : ''}`,
    "data-invalid": invalid ? 'true' : 'false'
  }, /*#__PURE__*/React.createElement("label", {
    className: "mono",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement(Control, {
    className: "control",
    id: fieldId,
    name: name,
    type: textarea ? undefined : type,
    rows: textarea ? rows : undefined,
    value: value,
    placeholder: placeholder,
    required: required,
    "aria-invalid": invalid,
    "aria-describedby": invalid ? `err-${name}` : undefined,
    onChange: onChange,
    onBlur: onBlur
  }), invalid && error ? /*#__PURE__*/React.createElement("span", {
    className: "fieldError mono",
    id: `err-${name}`
  }, error) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
/* Fixed translucent bar: monogram left, one filled CTA and the theme toggle
   right. It has no nav links — the section rail at the bottom does that job.
   A hairline appears under it once the page is scrolled. */
function NavBar({
  theme = 'light',
  onToggleTheme,
  ctaLabel = 'Book a call',
  ctaHref,
  onCta,
  onHome,
  monogram = 'M'
}) {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: `nav xfade${stuck ? ' is-stuck' : ''}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Monogram, {
    letter: monogram,
    onClick: onHome
  }), /*#__PURE__*/React.createElement("div", {
    className: "navRight"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ink",
    size: "sm",
    href: ctaHref,
    onClick: onCta,
    icon: "arrowRight"
  }, ctaLabel), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    theme: theme,
    onToggle: onToggleTheme
  })));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionRail.jsx
try { (() => {
const {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} = React;
/* Floating pill rail, docked bottom-centre on a blurred near-black capsule.
   The active highlight is an absolutely-positioned pill that slides and
   resizes on a spring, rather than a border on each item. */
function SectionRail({
  items,
  activeId,
  label = 'Sections on this page',
  onSelect,
  reduced = false
}) {
  const listRef = useRef(null);
  const [pill, setPill] = useState({
    x: 0,
    w: 0,
    ready: false
  });
  const measure = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    const el = list.querySelector(`[data-rail-id="${activeId}"]`);
    if (!el) return;
    setPill({
      x: el.offsetLeft,
      w: el.offsetWidth,
      ready: true
    });
    if (list.scrollWidth > list.clientWidth) {
      const target = el.offsetLeft - (list.clientWidth - el.offsetWidth) / 2;
      list.scrollTo({
        left: Math.max(0, target),
        behavior: reduced ? 'auto' : 'smooth'
      });
    }
  }, [activeId, reduced]);
  useLayoutEffect(measure, [measure, items]);
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);
  return /*#__PURE__*/React.createElement("div", {
    className: "railDock"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "rail xfade",
    "aria-label": label,
    ref: listRef
  }, /*#__PURE__*/React.createElement("span", {
    className: `railPill${pill.ready ? ' is-ready' : ''}`,
    style: {
      transform: `translate3d(${pill.x}px,0,0)`,
      width: `${pill.w}px`
    },
    "aria-hidden": "true"
  }), items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    type: "button",
    "data-rail-id": item.id,
    className: "railItem mono",
    "aria-current": activeId === item.id ? 'true' : undefined,
    onClick: () => onSelect && onSelect(item.id)
  }, item.label))));
}
Object.assign(__ds_scope, { SectionRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionRail.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
const {
  useEffect,
  useRef
} = React;
/* Modal shell: blurred scrim, a surface panel that rises 12px and settles,
   Escape to close, focus trapped inside, body scroll locked. The compact
   variant is for a fixed-size third-party embed. */
function Dialog({
  title,
  subtitle,
  children,
  footerLink,
  footerLabel,
  closeLabel = 'Close dialog',
  compact = false,
  reduced = false,
  onClose,
  titleId = 'dialog-title'
}) {
  const panelRef = useRef(null);
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const {
      overflow
    } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose && onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusables = panelRef.current?.querySelectorAll('a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])');
      if (!focusables || !focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    panelRef.current?.querySelector('button, a[href]')?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: `bookingScrim${reduced ? '' : ' is-animated'}`,
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `bookingPanel${compact ? ' bookingPanel--compact' : ''}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": titleId,
    ref: panelRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookingHead"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "bookingTitle",
    id: titleId
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    className: "bookingSub"
  }, subtitle) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: closeLabel,
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "bookingBody"
  }, children), footerLink ? /*#__PURE__*/React.createElement("div", {
    className: "bookingFoot"
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    mono: true,
    href: footerLink,
    target: "_blank",
    rel: "noreferrer noopener"
  }, footerLabel)) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
/* Case-study view: #/work/<slug>. Same section grammar as home — label +
   statement on the left, prose on the right — with a dark system panel in the
   middle and prev/next wrapping the project list. */
const CS_NS = window.ManelLPezPortfolioDesignSystem_30aec3;
const {
  NavBar: CSNav,
  SectionRail: CSRail,
  SectionHead: CSHead,
  MetaBar,
  ProcessCard,
  CaseNavBtn,
  Chip: CSChip,
  IconButton: CSIconButton,
  MonoLabel: CSMono,
  Icon: CSIcon
} = CS_NS;
const CSD = window.PortfolioData;
function CaseSection({
  id,
  headingId,
  label,
  statement,
  body,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "caseSplit"
  }, /*#__PURE__*/React.createElement(CSHead, {
    headingId: headingId,
    label: label,
    statement: statement
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose reveal",
    style: {
      '--reveal-delay': '120ms'
    }
  }, body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)))), children);
}
function ProcessScroller({
  cards
}) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({
    atStart: true,
    atEnd: false
  });
  const sync = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      atStart: el.scrollLeft <= 2,
      atEnd: max <= 2 || el.scrollLeft >= max - 2
    });
  };
  React.useEffect(() => {
    sync();
  }, []);
  const scrollBy = dir => ref.current?.scrollBy({
    left: dir * Math.max(240, ref.current.clientWidth * 0.75),
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrollerHead"
  }, /*#__PURE__*/React.createElement(CSMono, {
    tone: "muted"
  }, `${cards.length} steps`), /*#__PURE__*/React.createElement("span", {
    className: "arrowPair"
  }, /*#__PURE__*/React.createElement(CSIconButton, {
    icon: "chevronLeft",
    label: "Previous process card",
    disabled: state.atStart,
    onClick: () => scrollBy(-1)
  }), /*#__PURE__*/React.createElement(CSIconButton, {
    icon: "chevronRight",
    label: "Next process card",
    disabled: state.atEnd,
    onClick: () => scrollBy(1)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "scroller",
    ref: ref,
    onScroll: sync
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(ProcessCard, {
    key: c.title,
    index: i + 1,
    title: c.title,
    meta: c.meta,
    body: c.body
  }))));
}
function CaseStudyScreen({
  slug,
  theme,
  onToggleTheme
}) {
  const projects = CSD.projects;
  const idx = Math.max(0, projects.findIndex(p => p.slug === slug));
  const project = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const revealRef = window.useReveal();
  const railIds = React.useMemo(() => CSD.caseUi.rail.map(r => r.id), []);
  const active = window.useScrollSpy(railIds);
  const ui = CSD.caseUi;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!project.overview) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CSNav, {
      theme: theme,
      onToggleTheme: onToggleTheme,
      ctaHref: CSD.links.bookACall,
      onCta: e => e.preventDefault()
    }), /*#__PURE__*/React.createElement("main", {
      id: "main",
      className: "container caseTop"
    }, /*#__PURE__*/React.createElement("a", {
      className: "backLink mono",
      href: "#/"
    }, /*#__PURE__*/React.createElement(CSIcon, {
      name: "arrowLeft",
      size: 16
    }), ui.backLabel), /*#__PURE__*/React.createElement("h1", {
      className: "caseTitle"
    }, /*#__PURE__*/React.createElement("span", {
      className: "prefix"
    }, ui.eyebrow), " ", /*#__PURE__*/React.createElement("span", {
      className: "subject"
    }, `${ui.titlePrefix} ${project.name}`)), /*#__PURE__*/React.createElement("p", {
      className: "casePositioning",
      style: {
        justifySelf: 'start',
        marginTop: 'var(--s5)'
      }
    }, project.positioning, " This case study is published in full on Behance."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 'var(--s6)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "viewCase",
      href: project.externalUrl,
      target: "_blank",
      rel: "noreferrer noopener"
    }, "View on Behance", /*#__PURE__*/React.createElement(CSIcon, {
      name: "arrowUpRight",
      size: 16
    }))), /*#__PURE__*/React.createElement(window.SiteFooter, null)));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CSNav, {
    theme: theme,
    onToggleTheme: onToggleTheme,
    ctaHref: CSD.links.bookACall,
    onCta: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement("main", {
    id: "main",
    ref: revealRef,
    className: "viewFade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container caseTop"
  }, /*#__PURE__*/React.createElement("a", {
    className: "backLink mono",
    href: "#/"
  }, /*#__PURE__*/React.createElement(CSIcon, {
    name: "arrowLeft",
    size: 16
  }), ui.backLabel), /*#__PURE__*/React.createElement("div", {
    className: "caseHeadGrid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "caseEyebrow mono"
  }, project.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "caseTitle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prefix"
  }, ui.eyebrow), ' ', /*#__PURE__*/React.createElement("span", {
    className: "subject"
  }, `${ui.titlePrefix} ${project.name}`))), /*#__PURE__*/React.createElement("p", {
    className: "casePositioning reveal"
  }, project.positioning)), /*#__PURE__*/React.createElement("div", {
    className: "caseHeroFrame reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.IMG(project.heroImage),
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement(MetaBar, {
    items: [{
      label: ui.metaLabels.role,
      value: project.role
    }, {
      label: ui.metaLabels.years,
      value: project.years
    }, {
      label: ui.metaLabels.skills,
      value: /*#__PURE__*/React.createElement("span", {
        className: "chips"
      }, project.skills.map(s => /*#__PURE__*/React.createElement(CSChip, {
        key: s
      }, s)))
    }]
  })), /*#__PURE__*/React.createElement("section", {
    className: "section",
    "aria-labelledby": "case-overview-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseSection, {
    id: "overview",
    headingId: "case-overview-h",
    label: project.overview.eyebrow,
    statement: project.overview.heading,
    body: project.overview.body
  }, /*#__PURE__*/React.createElement("div", {
    className: "wideVisual reveal"
  }, /*#__PURE__*/React.createElement(window.Plate, {
    ratio: 16 / 7,
    tone: "light",
    label: "Overview \u2014 product screens"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    "aria-labelledby": "case-process-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseSection, {
    id: "process",
    headingId: "case-process-h",
    label: project.process.eyebrow,
    statement: project.process.heading,
    body: project.process.body
  }, /*#__PURE__*/React.createElement(ProcessScroller, {
    cards: project.process.cards
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    "aria-labelledby": "case-system-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "systemPanel reveal",
    id: "system"
  }, /*#__PURE__*/React.createElement("div", {
    className: "caseSplit"
  }, /*#__PURE__*/React.createElement(CSHead, {
    headingId: "case-system-h",
    label: project.system.eyebrow,
    statement: project.system.heading,
    onPanel: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose prose--onPanel reveal",
    style: {
      '--reveal-delay': '120ms'
    }
  }, project.system.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)))), /*#__PURE__*/React.createElement("ul", {
    className: "systemGrid"
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("li", {
    className: "systemCell",
    key: i
  }, /*#__PURE__*/React.createElement(window.Plate, {
    ratio: i === 0 ? 4 / 3 : 3 / 4,
    tone: "dark",
    label: `System ${i + 1}`
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--tight",
    "aria-labelledby": "case-extend-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseSection, {
    id: "extend",
    headingId: "case-extend-h",
    label: project.extend.eyebrow,
    statement: project.extend.heading,
    body: project.extend.body
  }, /*#__PURE__*/React.createElement("ul", {
    className: "extendGrid"
  }, [0, 1].map(i => /*#__PURE__*/React.createElement("li", {
    className: "extendCell reveal",
    key: i
  }, /*#__PURE__*/React.createElement(window.Plate, {
    ratio: 4 / 3,
    tone: "light",
    label: `Store surface ${i + 1}`
  }))))))), /*#__PURE__*/React.createElement("section", {
    className: "section",
    "aria-labelledby": "case-impact-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(CaseSection, {
    id: "impact",
    headingId: "case-impact-h",
    label: project.impact.eyebrow,
    statement: project.impact.heading,
    body: project.impact.body
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "caseNav",
    "aria-label": "Other case studies"
  }, /*#__PURE__*/React.createElement(CaseNavBtn, {
    direction: "prev",
    label: "Previous",
    name: prev.name,
    href: `#/work/${prev.slug}`
  }), /*#__PURE__*/React.createElement(CaseNavBtn, {
    direction: "next",
    label: "Next",
    name: next.name,
    href: `#/work/${next.slug}`
  }))), /*#__PURE__*/React.createElement(window.SiteFooter, null)), /*#__PURE__*/React.createElement(CSRail, {
    items: CSD.caseUi.rail,
    activeId: active,
    label: CSD.caseUi.railLabel,
    onSelect: id => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth'
      });
    }
  }));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Home view of manellopez portfolio. Composes the design-system components;
   the only local pieces are the typewriter headline, the logo rotator and the
   scroll-reveal/scroll-spy hooks, which are behaviour rather than UI. */
const NS = window.ManelLPezPortfolioDesignSystem_30aec3;
const {
  NavBar,
  SectionRail,
  SectionHead,
  SpotlightCard,
  ProjectCard,
  BitTile,
  PanelCard,
  Testimonial,
  JournalRow,
  Button,
  IconButton,
  MonoLabel,
  TextLink,
  Icon,
  Field,
  Wordmark,
  Dialog
} = NS;
const D = window.PortfolioData;
const LOGO = f => `../../assets/logos/${f}`;
const IMG = f => `../../assets/img/${f}`;
function Plate({
  ratio = 16 / 9,
  tone = 'dark',
  label
}) {
  const bg = tone === 'dark' ? 'var(--panel)' : 'var(--surface-2)';
  const ink = tone === 'dark' ? 'var(--panel-muted)' : 'var(--muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: String(ratio),
      background: bg,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: ink
    }
  }, label || 'Screenshot'));
}
function useTypewriter(words, reduced) {
  const [text, setText] = React.useState('');
  const [i, setI] = React.useState(0);
  const [del, setDel] = React.useState(false);
  React.useEffect(() => {
    if (reduced) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), 1500);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      const t = setTimeout(() => {
        setDel(false);
        setI(n => n + 1);
      }, 420);
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
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.08
    });
    root.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  });
  return ref;
}
function useScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return active;
}
function LogoStrip() {
  const {
    items,
    perPage,
    intervalMs,
    fadeMs
  } = D.logos;
  const pages = Math.ceil(items.length / perPage);
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPage(n => (n + 1) % pages), intervalMs);
    return () => clearInterval(id);
  }, [pages, intervalMs]);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logoRotator reveal",
    style: {
      '--logo-fade': `${fadeMs}ms`
    },
    "aria-label": D.logos.label
  }, Array.from({
    length: pages
  }, (_, i) => /*#__PURE__*/React.createElement("ul", {
    key: i,
    className: `logoStrip logoPage${i === page ? ' is-active' : ''}`,
    "aria-hidden": i === page ? undefined : 'true'
  }, items.slice(i * perPage, i * perPage + perPage).map(l => /*#__PURE__*/React.createElement("li", {
    key: l.name
  }, /*#__PURE__*/React.createElement(Wordmark, {
    src: LOGO(l.logo),
    name: l.name,
    aspect: l.aspect,
    scale: l.scale
  })))))));
}
function BitsRow({
  items,
  rowIndex
}) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({
    atStart: true,
    atEnd: false
  });
  const sync = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setState({
      atStart: el.scrollLeft <= 2,
      atEnd: max <= 2 || el.scrollLeft >= max - 2
    });
  };
  React.useEffect(() => {
    sync();
  }, []);
  const scrollBy = dir => ref.current?.scrollBy({
    left: dir * Math.max(240, ref.current.clientWidth * 0.75),
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bitsCluster"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rowHead"
  }, /*#__PURE__*/React.createElement(MonoLabel, null, D.bits.rowLabels[rowIndex]), /*#__PURE__*/React.createElement("span", {
    className: "arrowPair"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronLeft",
    label: "Previous bits",
    disabled: state.atStart,
    onClick: () => scrollBy(-1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronRight",
    label: "Next bits",
    disabled: state.atEnd,
    onClick: () => scrollBy(1)
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "bitsRow",
    ref: ref,
    onScroll: sync
  }, items.map((bit, i) => /*#__PURE__*/React.createElement(BitTile, {
    key: bit.id,
    index: i,
    kicker: bit.kicker,
    caption: bit.caption,
    image: bit.image ? IMG(bit.image) : undefined
  }))));
}
function TestimonialCarousel() {
  const quotes = D.testimonials.quotes;
  const [i, setI] = React.useState(0);
  const q = quotes[i];
  return /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: q.quote,
    name: q.name,
    role: q.role,
    avatar: IMG(q.avatar),
    href: q.href
  }), /*#__PURE__*/React.createElement("div", {
    className: "quoteFoot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dots",
    role: "tablist",
    "aria-label": "Testimonials"
  }, quotes.map((x, n) => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    type: "button",
    className: "dot",
    "aria-current": n === i ? 'true' : undefined,
    "aria-label": `Go to testimonial ${n + 1}`,
    onClick: () => setI(n)
  }))), /*#__PURE__*/React.createElement("span", {
    className: "arrowPair"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronLeft",
    label: "Previous testimonial",
    onClick: () => setI(n => (n - 1 + quotes.length) % quotes.length)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevronRight",
    label: "Next testimonial",
    onClick: () => setI(n => (n + 1) % quotes.length)
  }))));
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function ContactForm() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  const validate = v => {
    const e = {};
    if (!v.name.trim()) e.name = D.contact.errors.name;
    if (!EMAIL_RE.test(v.email.trim())) e.email = D.contact.errors.email;
    if (!v.subject.trim()) e.subject = D.contact.errors.subject;
    if (v.message.trim().length < 4) e.message = D.contact.errors.message;
    return e;
  };
  const set = k => ev => {
    const next = {
      ...values,
      [k]: ev.target.value
    };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = k => () => {
    setTouched(t => ({
      ...t,
      [k]: true
    }));
    setErrors(validate(values));
  };
  const submit = e => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    if (Object.keys(next).length) return;
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 700);
  };
  const field = (k, opts = {}) => /*#__PURE__*/React.createElement(Field, _extends({
    name: k,
    label: D.contact.fields[k].label,
    placeholder: D.contact.fields[k].placeholder,
    value: values[k],
    invalid: Boolean(touched[k] && errors[k]),
    error: errors[k],
    onChange: set(k),
    onBlur: blur(k),
    required: true
  }, opts));
  if (status === 'sent') {
    return /*#__PURE__*/React.createElement("div", {
      className: "successCard reveal"
    }, /*#__PURE__*/React.createElement("h3", null, D.contact.sentTitle), /*#__PURE__*/React.createElement("p", null, D.contact.sentBody), /*#__PURE__*/React.createElement(TextLink, {
      mono: true,
      onClick: () => {
        setStatus('idle');
        setValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTouched({});
        setErrors({});
      }
    }, D.contact.resetLabel));
  }
  return /*#__PURE__*/React.createElement("form", {
    className: "form reveal",
    onSubmit: submit,
    noValidate: true
  }, field('name'), field('email', {
    type: 'email'
  }), field('subject', {
    full: true
  }), field('message', {
    textarea: true,
    full: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "formFoot"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "ink",
    disabled: status === 'sending'
  }, status === 'sending' ? D.contact.submittingLabel : D.contact.submitLabel), /*#__PURE__*/React.createElement(MonoLabel, {
    className: "formStatus"
  }, status === 'sending' ? D.contact.submittingLabel : '')));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footerTop"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(IconButton, {
    variant: "social",
    icon: "linkedin",
    label: "LinkedIn",
    href: D.links.linkedin
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(IconButton, {
    variant: "social",
    icon: "behance",
    label: "Behance",
    href: D.links.behance
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(IconButton, {
    variant: "social",
    icon: "mail",
    label: "Email",
    href: `mailto:${D.links.email}`
  }))), /*#__PURE__*/React.createElement("p", {
    className: "copyright mono"
  }, /*#__PURE__*/React.createElement("span", null, D.footer.copyright), /*#__PURE__*/React.createElement("span", {
    className: "sep",
    "aria-hidden": "true"
  }, "|"), /*#__PURE__*/React.createElement("span", null, D.footer.madeIn)))));
}
function HomeScreen({
  theme,
  onToggleTheme
}) {
  const [loaded, setLoaded] = React.useState(false);
  const [booking, setBooking] = React.useState(false);
  React.useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const revealRef = useReveal();
  const railIds = React.useMemo(() => D.footer.rail.map(r => r.id), []);
  const active = useScrollSpy(railIds);
  const typed = useTypewriter(D.hero.roles, false);
  const spotlight = D.projects.find(p => p.slug === D.work.spotlightSlug);
  const others = D.projects.filter(p => p.slug !== D.work.spotlightSlug);
  const bitRows = [D.bits.items.slice(0, 4), D.bits.items.slice(4, 8)];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    theme: theme,
    onToggleTheme: onToggleTheme,
    ctaHref: D.links.bookACall,
    onCta: e => {
      e.preventDefault();
      setBooking(true);
    }
  }), /*#__PURE__*/React.createElement("main", {
    id: "main",
    ref: revealRef
  }, /*#__PURE__*/React.createElement("section", {
    className: `container hero${loaded ? ' is-loaded' : ''}`,
    "aria-labelledby": "hero-name"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "heroName",
    id: "hero-name",
    "aria-label": `${D.hero.name} — ${D.meta.role}`
  }, D.hero.name.split(' ').map((w, i) => /*#__PURE__*/React.createElement("span", {
    className: "word",
    key: w
  }, /*#__PURE__*/React.createElement("span", {
    className: "wordInner",
    style: {
      '--word-delay': `${i * 90}ms`
    }
  }, w)))), /*#__PURE__*/React.createElement("p", {
    className: "typeLine",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "typed"
  }, typed), /*#__PURE__*/React.createElement("span", {
    className: "caret"
  })), /*#__PURE__*/React.createElement("div", {
    className: "heroLower"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scrollHint mono reveal",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowRight",
    size: 14
  }), D.hero.scrollHint), /*#__PURE__*/React.createElement("p", {
    className: "heroBio reveal"
  }, D.hero.bio))), /*#__PURE__*/React.createElement(LogoStrip, null), /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "section",
    "aria-labelledby": "work-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    headingId: "work-h",
    label: D.work.eyebrow,
    statement: D.work.heading
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(32px,5vh,56px)'
    }
  }, /*#__PURE__*/React.createElement(SpotlightCard, {
    image: IMG(spotlight.heroImage),
    logo: LOGO(spotlight.spotlightLogo),
    logoAspect: spotlight.spotlightLogoAspect,
    statement: spotlight.spotlightTitle,
    stats: spotlight.metrics,
    href: `#/work/${spotlight.slug}`
  })), /*#__PURE__*/React.createElement("ul", {
    className: "projectGrid"
  }, others.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    index: i,
    project: {
      ...p,
      logo: p.logo ? LOGO(p.logo) : undefined,
      thumbnail: p.thumbnail ? IMG(p.thumbnail) : undefined
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "bits",
    className: "section",
    "aria-labelledby": "bits-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    headingId: "bits-h",
    label: D.bits.eyebrow,
    statement: D.bits.heading
  }), /*#__PURE__*/React.createElement("div", {
    className: "bitsRows"
  }, bitRows.map((row, i) => /*#__PURE__*/React.createElement(BitsRow, {
    key: i,
    items: row,
    rowIndex: i
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "section",
    "aria-labelledby": "about-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    headingId: "about-h",
    label: D.about.eyebrow,
    statement: D.about.heading
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(32px,5vh,56px)'
    },
    className: "reveal"
  }, /*#__PURE__*/React.createElement(PanelCard, {
    aside: /*#__PURE__*/React.createElement("img", {
      src: IMG('manel-portrait.jpg'),
      alt: "Manel L\xF3pez",
      style: {
        width: '100%',
        aspectRatio: '1',
        objectFit: 'cover'
      }
    })
  }, /*#__PURE__*/React.createElement("h3", null, D.about.title), /*#__PURE__*/React.createElement("div", {
    className: "aboutBody"
  }, D.about.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "btnRow"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "panel",
    leadingIcon: "linkedin",
    icon: "arrowUpRight",
    href: D.links.linkedin,
    target: "_blank",
    rel: "noreferrer noopener"
  }, "LinkedIn")))))), /*#__PURE__*/React.createElement("section", {
    id: "shoutouts",
    className: "section",
    "aria-labelledby": "shout-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "caseSplit"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    headingId: "shout-h",
    label: D.testimonials.eyebrow,
    statement: D.testimonials.heading
  }), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      marginTop: 'var(--s5)',
      color: 'var(--muted)',
      maxWidth: '40ch',
      lineHeight: 1.65
    }
  }, D.testimonials.intro)), /*#__PURE__*/React.createElement(TestimonialCarousel, null)))), /*#__PURE__*/React.createElement("section", {
    id: "journal",
    className: "section",
    "aria-labelledby": "journal-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    headingId: "journal-h",
    label: D.journal.eyebrow,
    statement: D.journal.heading
  }), /*#__PURE__*/React.createElement("ul", {
    className: "journalList"
  }, D.journal.posts.map((post, i) => /*#__PURE__*/React.createElement(JournalRow, {
    key: post.slug,
    index: i,
    post: {
      ...post,
      image: post.image ? IMG(post.image) : undefined
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "section",
    "aria-labelledby": "contact-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "caseSplit"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    headingId: "contact-h",
    label: D.contact.eyebrow,
    statement: D.contact.heading
  }), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      marginTop: 'var(--s5)',
      color: 'var(--muted)',
      maxWidth: '40ch',
      lineHeight: 1.65
    }
  }, D.contact.intro), /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      marginTop: 'var(--s6)'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    tone: "muted",
    style: {
      display: 'block'
    }
  }, D.contact.emailLabel), /*#__PURE__*/React.createElement(TextLink, {
    href: `mailto:${D.links.email}`,
    style: {
      display: 'inline-block',
      marginTop: 'var(--s2)'
    }
  }, D.links.email))), /*#__PURE__*/React.createElement(ContactForm, null)))), /*#__PURE__*/React.createElement(SiteFooter, null)), /*#__PURE__*/React.createElement(SectionRail, {
    items: D.footer.rail,
    activeId: active,
    label: D.footer.railLabel,
    onSelect: id => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth'
      });
    }
  }), booking ? /*#__PURE__*/React.createElement(Dialog, {
    title: D.booking.title,
    subtitle: D.booking.subtitle,
    footerLink: D.links.bookACall,
    footerLabel: D.booking.newTabLabel,
    onClose: () => setBooking(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: '320px',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--r-md)',
      background: 'var(--surface-2)'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    tone: "muted"
  }, D.booking.loadingLabel))) : null);
}
Object.assign(window, {
  HomeScreen,
  SiteFooter,
  Plate,
  useReveal,
  useScrollSpy,
  LOGO,
  IMG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/JournalPostScreen.jsx
try { (() => {
/* Journal post view: #/journal/<slug>. One measured 68ch column — long-form
   reading, not a layout exercise. Body blocks are { p } | { h } | { figure } |
   { list } | { stats }, rendered in whatever order the post declares. */
const JP_NS = window.ManelLPezPortfolioDesignSystem_30aec3;
const {
  NavBar: JPNav,
  Chip: JPChip,
  Icon: JPIcon,
  CaseNavBtn: JPNavBtn
} = JP_NS;
const JPD = window.PortfolioData;
function JournalPostScreen({
  slug,
  theme,
  onToggleTheme
}) {
  const posts = JPD.journal.posts;
  const idx = Math.max(0, posts.findIndex(p => p.slug === slug));
  const post = posts[idx];
  const prev = posts[(idx - 1 + posts.length) % posts.length];
  const next = posts[(idx + 1) % posts.length];
  const revealRef = window.useReveal();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(JPNav, {
    theme: theme,
    onToggleTheme: onToggleTheme,
    ctaHref: JPD.links.bookACall,
    onCta: e => e.preventDefault()
  }), /*#__PURE__*/React.createElement("main", {
    id: "main",
    ref: revealRef,
    className: "viewFade"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container postTop"
  }, /*#__PURE__*/React.createElement("a", {
    className: "backLink mono",
    href: "#/"
  }, /*#__PURE__*/React.createElement(JPIcon, {
    name: "arrowLeft",
    size: 16
  }), "Back to journal"), /*#__PURE__*/React.createElement("header", {
    className: "postHead"
  }, /*#__PURE__*/React.createElement("p", {
    className: "postHeadMeta mono"
  }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", {
    className: "chips"
  }, post.tags.map(t => /*#__PURE__*/React.createElement(JPChip, {
    key: t
  }, t))), post.readMins ? /*#__PURE__*/React.createElement("span", null, `${post.readMins} min read`) : null), /*#__PURE__*/React.createElement("h1", {
    className: "postHeadTitle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "subject"
  }, post.title)), /*#__PURE__*/React.createElement("p", {
    className: "postHeadDek"
  }, post.dek)), /*#__PURE__*/React.createElement("div", {
    className: "postHero reveal"
  }, post.image ? /*#__PURE__*/React.createElement("img", {
    src: window.IMG(post.image),
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(window.Plate, {
    ratio: 16 / 9,
    tone: "light",
    label: "Post hero"
  })), /*#__PURE__*/React.createElement("div", {
    className: "postBody"
  }, (post.body || [{
    p: post.dek
  }]).map((block, i) => {
    if (block.h) return /*#__PURE__*/React.createElement("h2", {
      className: "postH reveal",
      key: i
    }, block.h);
    if (block.list) return /*#__PURE__*/React.createElement("ul", {
      className: "postList reveal",
      key: i
    }, block.list.map((li, n) => /*#__PURE__*/React.createElement("li", {
      key: n
    }, li)));
    if (block.stats) return /*#__PURE__*/React.createElement("dl", {
      className: "postStats reveal",
      key: i
    }, block.stats.map(s => /*#__PURE__*/React.createElement("div", {
      className: "postStat",
      key: s.label
    }, /*#__PURE__*/React.createElement("dd", null, s.value), /*#__PURE__*/React.createElement("dt", {
      className: "mono"
    }, s.label))));
    if (block.figure) return /*#__PURE__*/React.createElement("figure", {
      className: "postFig reveal",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "vis"
    }, /*#__PURE__*/React.createElement(window.Plate, {
      ratio: 16 / 9,
      tone: "light",
      label: "Diagram"
    })), /*#__PURE__*/React.createElement("figcaption", {
      className: "mono"
    }, block.figure));
    return /*#__PURE__*/React.createElement("p", {
      className: "postP reveal",
      key: i
    }, block.p);
  }), post.references && post.references.length ? /*#__PURE__*/React.createElement("div", {
    className: "postRefs reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "postH",
    style: {
      marginTop: 0
    }
  }, "References"), /*#__PURE__*/React.createElement("ol", null, post.references.map((ref, i) => /*#__PURE__*/React.createElement("li", {
    key: ref.href
  }, /*#__PURE__*/React.createElement("span", {
    className: "postRefNum mono"
  }, `[${i + 1}]`), /*#__PURE__*/React.createElement("a", {
    href: ref.href,
    target: "_blank",
    rel: "noreferrer noopener"
  }, ref.label, /*#__PURE__*/React.createElement(JPIcon, {
    name: "arrowUpRight",
    size: 14
  })))))) : null), /*#__PURE__*/React.createElement("nav", {
    className: "caseNav",
    "aria-label": "Other posts"
  }, /*#__PURE__*/React.createElement(JPNavBtn, {
    direction: "prev",
    label: "Previous",
    name: prev.title,
    href: `#/journal/${prev.slug}`
  }), /*#__PURE__*/React.createElement(JPNavBtn, {
    direction: "next",
    label: "Next",
    name: next.title,
    href: `#/journal/${next.slug}`
  }))), /*#__PURE__*/React.createElement(window.SiteFooter, null)));
}
Object.assign(window, {
  JournalPostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/JournalPostScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* Content for the portfolio UI kit. Copy is verbatim from the CONTENT object
   in the source repo (src/App.jsx). Image keys that point at a generated SVG
   plate upstream are rendered here as flat placeholder boxes — see README.md. */
window.PortfolioData = {
  meta: {
    name: 'Manel López',
    monogram: 'M',
    role: 'Senior Product Designer',
    location: 'Barcelona, Spain'
  },
  links: {
    email: 'manellopez.alu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/manel-lf/',
    behance: 'https://www.behance.net/manellpez',
    bookACall: 'https://cal.com/manel-lopez-wc3pop/book-a-call'
  },
  hero: {
    name: 'Manel López',
    roles: ['Product Designer', 'Engineer', 'Systems Designer', 'AI Prototyper', 'Gamificator', 'Product Thinker', 'University Lecturer', 'Cat Butler'],
    bio: 'From research and analytics to prototypes and production, I help turn ideas into products people return to.',
    scrollHint: 'Scroll'
  },
  booking: {
    title: 'Book a call',
    subtitle: 'Pick a slot that suits you — 30 minutes, no agenda needed.',
    newTabLabel: 'Open in a new tab instead',
    loadingLabel: 'Loading available times…'
  },
  logos: {
    label: 'Companies and teams I have designed for',
    perPage: 5,
    intervalMs: 4000,
    fadeMs: 960,
    items: [{
      name: 'GameHouse',
      logo: 'gamehouse.svg',
      aspect: 8.201,
      scale: 0.62
    }, {
      name: 'Jesterday',
      logo: 'jesterday.svg',
      aspect: 3.292,
      scale: 1.45
    }, {
      name: 'Eunoia Digital',
      logo: 'eunoiadigital.svg',
      aspect: 12.264,
      scale: 0.45
    }, {
      name: 'Popcore Games',
      logo: 'popcore.svg',
      aspect: 6.036,
      scale: 0.9
    }, {
      name: 'SEAT CUPRA',
      logo: 'cupra.svg',
      aspect: 7.008,
      scale: 0.85
    }, {
      name: 'Socialpoint',
      logo: 'socialpoint.svg',
      aspect: 4.867
    }, {
      name: 'La Salle BCN',
      logo: 'lasalle.svg',
      aspect: 3.526,
      scale: 1.4
    }, {
      name: 'Kave Home',
      logo: 'kavehome.svg',
      aspect: 5.581,
      scale: 0.95
    }, {
      name: 'MURIS',
      logo: 'murisbrand.svg',
      aspect: 4.68
    }, {
      name: 'Radisson Hotels',
      logo: 'radisson.svg',
      aspect: 2.681,
      scale: 1.5
    }]
  },
  work: {
    eyebrow: 'Recent work.',
    heading: 'From pixels to products.',
    spotlightSlug: 'gamehouse-plus'
  },
  bits: {
    eyebrow: 'Design bits.',
    heading: 'What I have lately been working on.',
    rowLabels: ['Prototypes and tooling', 'Systems and analysis'],
    items: [{
      id: 'bit-claude-figma',
      kicker: 'AI tooling',
      caption: 'A working prototype in an afternoon — Claude Code driving the build, the Figma MCP keeping it on the design system.',
      image: 'journal-tcebc-tool.jpg'
    }, {
      id: 'bit-energy',
      kicker: 'Game economy',
      caption: 'Jesterday’s energy economy modelled in a spreadsheet and tuned against session length before a single screen was drawn.'
    }, {
      id: 'bit-teaching',
      kicker: 'Teaching',
      caption: 'Research-methods material for a UX course inside an AI and Data Science degree at La Salle URL.'
    }, {
      id: 'bit-instant',
      kicker: 'Prototype',
      caption: 'Five entry-point variants for instant play, narrowed to one by putting a real build in front of players.',
      image: 'scavenger-hunt-thumbnail.jpg'
    }, {
      id: 'bit-tokens',
      kicker: 'Design systems',
      caption: 'Design tokens as the contract between Figma and Unity, so a colour change is one commit rather than a meeting.'
    }, {
      id: 'bit-typeramp',
      kicker: 'Automotive',
      caption: 'One type ramp that has to stay legible from a 7-inch cluster to a 15-inch centre display, at arm’s length, in sunlight.'
    }, {
      id: 'bit-analytics',
      kicker: 'Product analytics',
      caption: 'The funnel that told me a feature I had already shipped was solving the wrong half of the problem.'
    }, {
      id: 'bit-componentapi',
      kicker: 'Craft',
      caption: 'Sketching the component API before the component — props first, pixels second.'
    }]
  },
  about: {
    eyebrow: 'About me.',
    heading: 'Design that ships.',
    title: 'AI Native Designer. Design Thinker.',
    body: ['I came to design through engineering. The degree gave me the systems habit — read the constraints, model the thing, then draw it — and a Master’s in User Experience gave me the research and evaluation side to go with it.', 'Today I own a consumer subscription app end to end at GameHouse, and I teach UX inside an AI and Data Science degree at La Salle URL. Teaching keeps the fundamentals sharp; the engineering background means I can build the prototype instead of describing it.']
  },
  testimonials: {
    eyebrow: 'Shoutouts.',
    heading: 'What stakeholders and teammates say about me.',
    intro: 'People I have worked with directly, across product, design and engineering. Happy to put you in touch with any of them.',
    quotes: [{
      id: 'q-emmi',
      quote: 'Manel combines strong design skills with genuine product thinking. He consistently keeps the user at the center, runs usability tests, and uses feedback to improve. He embraces feedback while confidently challenging perspectives with thoughtful reasoning and a clear point of view. He has a strong sense of product vision and translates it into coherent, consistent experiences.',
      name: 'Emmi Kuusikko',
      role: 'Head of Product',
      avatar: 'testimonial-emmi-kuusikko.jpg',
      href: 'https://www.linkedin.com/in/emmik/'
    }, {
      id: 'q-lea',
      quote: 'Manel consistently acted above his level as a Senior UI/UX Designer. He presented ideas in front of senior management and defended them with confidence. He combines UI/UX craft excellence with strong prototyping and technical skills, paired with sharp abstraction and communication skills, which is a rare mix. Whoever gets to work with Manel will be very lucky.',
      name: 'Lea Schönfelder',
      role: 'UX Creative Director',
      avatar: 'testimonial-lea-schonfelder.jpg',
      href: 'https://www.linkedin.com/in/lea-schoenfelder/'
    }, {
      id: 'q-alex',
      quote: 'Manel consistently delivers clean and visually appealing designs. He’s great at bringing Product and Development together, making sure everyone is aligned and ideas move smoothly from concept to delivery. Even with tight deadlines, he stays collaborative, open to new ideas, and focused on finding practical solutions.',
      name: 'Alex Segura',
      role: 'Frontend Developer',
      avatar: 'testimonial-alex-segura.jpg',
      href: 'https://www.linkedin.com/in/xlerida/'
    }]
  },
  journal: {
    eyebrow: 'Journal.',
    heading: 'Notes from the work.',
    posts: [{
      slug: 'grounding-ideas-fast',
      date: 'June 2026',
      tags: ['Process', 'Prototyping'],
      readMins: 6,
      title: 'Grounding ideas fast is changing how I design',
      dek: 'The distance between a question and an answer used to be a chain of documents. Collapsing it changed what design review is even about.',
      image: 'journal-tcebc-tool.jpg',
      body: [{
        p: 'For most of my career, the distance between “what if we tried this” and an actual answer was measured in days. Wireframe, then flow, then mockup, then a slow march toward something you could put in front of a person. Somewhere in that chain the original question quietly got answered by the effort of building the deck meant to answer it, rather than by anything resembling evidence.'
      }, {
        h: 'The old shape of the process'
      }, {
        p: 'The linear version goes: ideation, wireframes, flows, low-fidelity mockups, prototyping, and eventually a Figma prototype that is convincing from the front and hollow behind. Each step is a translation of the step before it, and every translation is a place to quietly lose the thing that mattered about the original idea.'
      }, {
        figure: 'The old shape: a chain of translations between the question and an answer.'
      }, {
        h: 'What actually changed in the room'
      }, {
        p: 'The practical shift is not speed for its own sake, it is where judgment gets spent. I used to defend a direction that had not been tested yet — taste standing in for evidence, because evidence was a week away. Now I bring the thing, and the room reacts to the thing. Design review has moved from arguing about opinions to reading a result that already exists.'
      }, {
        stats: [{
          value: 'Same day',
          label: 'Idea to a testable build'
        }, {
          value: 'Fewer',
          label: 'Slide decks defending a hunch'
        }, {
          value: 'Earlier',
          label: 'Point where reality gets a vote'
        }]
      }, {
        h: 'Where I still do it the old way'
      }, {
        p: 'Framing, research, and the call about what is actually worth building — that work did not get any cheaper, and I do not let it. A tighter loop compresses the distance between a defined idea and a working answer. It does not decide which idea deserves the trip.'
      }],
      references: [{
        label: "A designer's framework for better AI prompts — Figma Blog",
        href: 'https://www.figma.com/blog/designer-framework-for-better-ai-prompts/'
      }]
    }, {
      slug: 'claude-code-toolkit',
      date: 'June 2026',
      tags: ['Prototyping', 'AI Tooling'],
      readMins: 6,
      title: 'My toolkit for prototyping with Claude Code',
      dek: 'The setup behind a working prototype: one terminal and a small, swappable stack of MCPs and skills layered on top of it.'
    }, {
      slug: 'framework-to-agent',
      date: 'May 2026',
      tags: ['AI Tooling', 'Process'],
      readMins: 5,
      title: 'From a prompt framework to an agent that writes them',
      dek: 'A fixed framework got the prompts good enough to keep. Handing the framework itself to an agent got them better.'
    }]
  },
  contact: {
    eyebrow: 'Get in touch.',
    heading: 'Let’s talk.',
    intro: 'Open to senior product design roles, design system work, and prototyping engagements with product and games teams. Also available for guest lectures and workshops.',
    emailLabel: 'Or email me directly',
    fields: {
      name: {
        label: 'Your name',
        placeholder: 'Hiring Manager'
      },
      email: {
        label: 'Your email',
        placeholder: 'you@company.com'
      },
      subject: {
        label: 'Subject',
        placeholder: 'Senior Product Designer role'
      },
      message: {
        label: 'Message',
        placeholder: 'A line or two about the team, the product and the problem.'
      }
    },
    submitLabel: 'Send message',
    submittingLabel: 'Sending…',
    sentTitle: 'Message sent.',
    sentBody: 'Thanks — it landed in my inbox and I’ll come back to you shortly.',
    resetLabel: 'Write another',
    errors: {
      name: 'Please tell me your name.',
      email: 'Please enter a valid email address.',
      subject: 'Please add a subject.',
      message: 'Please add a message — a couple of sentences is plenty.'
    }
  },
  footer: {
    rail: [{
      id: 'work',
      label: 'Work'
    }, {
      id: 'bits',
      label: 'Bits'
    }, {
      id: 'about',
      label: 'About'
    }, {
      id: 'shoutouts',
      label: 'Shoutouts'
    }, {
      id: 'journal',
      label: 'Journal'
    }, {
      id: 'contact',
      label: 'Contact'
    }],
    railLabel: 'Sections on this page',
    copyright: '© 2026 Manel López',
    madeIn: 'Designed and built in Barcelona.'
  },
  caseUi: {
    eyebrow: 'End-to-End Design',
    titlePrefix: 'For',
    backLabel: 'Back to work',
    metaLabels: {
      role: 'Role',
      years: 'Years',
      skills: 'Skills'
    },
    rail: [{
      id: 'overview',
      label: 'Overview'
    }, {
      id: 'process',
      label: 'Process'
    }, {
      id: 'system',
      label: 'System'
    }, {
      id: 'extend',
      label: 'Extend'
    }, {
      id: 'impact',
      label: 'Impact'
    }],
    railLabel: 'Sections in this case study'
  },
  projects: [{
    slug: 'gamehouse-plus',
    name: 'GameHouse+',
    eyebrow: 'GameHouse+',
    spotlightLogo: 'ghplus-colored.svg',
    spotlightLogoAspect: 4.457,
    spotlightTitle: ['Rethinking how players start playing.', 'A product-wide pivot to in-app games.'],
    positioning: 'A consumer subscription app for casual games, repositioned around instant play.',
    cardDescription: 'End-to-end ownership of a casual-games subscription app — research, product analytics, design system and the first-session rebuild.',
    role: 'Senior Product Designer — end-to-end ownership',
    years: '2023 — Present',
    skills: ['UX Design', 'UX Research', 'Product Analytics', 'Design Systems', 'Prototyping', 'Visual'],
    metrics: [{
      value: '6×',
      label: 'Day-0 activation'
    }, {
      value: '6×',
      label: 'Faster time to first session'
    }, {
      value: '2×',
      label: 'Day-1 retention'
    }],
    heroImage: 'scavenger-hunt-thumbnail.jpg',
    overview: {
      eyebrow: 'Overview:',
      heading: 'Backstory of the work.',
      body: ['GameHouse+ is a subscription app for casual games. I own it end to end — discovery, research, interaction design, the design system, the visual language, and the analytics that tell us whether any of it worked.', 'The product had a catalogue people liked and a first session almost nobody finished. Installs arrived, the store loaded, and the majority of new users left before they had played anything at all. The subscription was being asked to justify itself before it had delivered a single minute of value.']
    },
    process: {
      eyebrow: 'Process:',
      heading: 'How I kicked things off.',
      body: ['I started where the disagreement was: everyone had a theory about why activation was low, and none of them were written down. So I made the current state undeniable before proposing anything.', 'Session recordings and funnel analysis first, then a short round of moderated sessions with new users, then a written problem statement the whole team could argue with. Only after that did I start drawing.'],
      cards: [{
        title: 'Funnel teardown',
        meta: 'Product analytics',
        body: 'Instrumented the first session step by step in Amplitude and found the drop was not at paywall or signup — it was in the gap between opening the app and anything being playable.'
      }, {
        title: 'Moderated first sessions',
        meta: 'UX research',
        body: 'Watched new users open the app cold. The catalogue read as a decision to make rather than an invitation to play, and the download wait broke the moment of intent.'
      }, {
        title: 'Problem statement',
        meta: 'Framing document',
        body: 'One page: what we observed, what it costs, what we are choosing to optimise, and what we are explicitly not solving in this cycle. Signed off by product and engineering before design started.'
      }, {
        title: 'Instant-play hypothesis',
        meta: 'Concept',
        body: 'If the first thing a new user meets is content already running rather than a catalogue to browse, activation stops depending on a download completing.'
      }, {
        title: 'Coded prototype',
        meta: 'Prototyping',
        body: 'Built the entry flow as a working prototype rather than a clickable mock, so latency, loading and failure states were real and could be tested honestly.'
      }, {
        title: 'Instrumented rollout',
        meta: 'Validation',
        body: 'Shipped behind a flag with the funnel already wired, so the comparison against the old first session was available in days rather than after a quarter.'
      }]
    },
    system: {
      eyebrow: 'Shaping the system:',
      heading: 'Shaping the system for GameHouse+.',
      body: ['The pivot only holds if the surfaces around it are consistent, so I built the design system in parallel with the flow rather than after it. Tokens for colour, type, spacing and motion; a component library with real states rather than happy-path artwork; and documented rules for how content density behaves as the catalogue grows.', 'The system is deliberately small. Every component in it exists because two or more surfaces needed it, and each one ships with its loading, empty, error and offline states — those are the states a games subscription actually spends its time in.']
    },
    extend: {
      eyebrow: 'Extend:',
      heading: 'Store and marketing surfaces.',
      body: ['Once the in-app language settled, the same system had to carry the surfaces that sit outside the app: store listings, lifecycle email, acquisition landing pages and the in-app merchandising slots that promote new content.', 'Reusing the tokens and components meant the promise made in an ad matched the first screen a new user saw. That continuity is a measurable part of activation, not a brand nicety.']
    },
    impact: {
      eyebrow: 'The impact:',
      heading: 'Activation, and what changed.',
      body: ['The instant-content pivot delivered six times day-0 activation, a six-fold reduction in time to first session, and double day-1 retention. The first session stopped being a decision and became an experience.', 'The more durable change is how the team now works. A problem statement precedes design, prototypes are functional before they are pretty, and the funnel is instrumented before a feature ships rather than after someone asks how it is doing. I have since used the same analytics to argue for redirecting a feature I had already shipped myself.']
    }
  }, {
    slug: 'jesterday',
    name: 'Jesterday',
    eyebrow: 'GPixel · Jesterday',
    logo: 'jesterday.svg',
    logoAspect: 3.292,
    thumbnail: 'jesterday-thumbnail.svg',
    externalUrl: 'https://www.behance.net/gallery/215857737/GPixel-Arcade-Racing-Mobile-Game-UXUI-Design-Case',
    positioning: 'An indie mobile multiplayer title, given a design system and an economy that survive production.',
    cardDescription: 'Indie mobile multiplayer. Design system built from scratch, an energy economy modelled end to end, and the component library implemented in Unity.',
    role: 'Product Designer & Design System Owner',
    years: '2022 — 2023'
  }, {
    slug: 'seat-cupra',
    name: 'SEAT CUPRA',
    eyebrow: 'SEAT CUPRA',
    logo: 'cupra.svg',
    logoAspect: 7.008,
    logoScale: 0.85,
    positioning: 'In-car infotainment for connected services — enrolment, data plans and software updates, across every screen in the range.',
    cardDescription: 'In-car infotainment. Connected-services enrolment, data plan purchase and an update centre, designed to hold from 7-inch clusters to 15-inch displays.',
    role: 'Product Designer, Connected Services',
    years: '2021 — 2022'
  }, {
    slug: 'radisson',
    name: 'Radisson Hotels',
    eyebrow: 'Radisson Hotels — via Eunoia Digital',
    logo: 'radisson.svg',
    logoAspect: 2.681,
    logoScale: 1.5,
    positioning: 'Enterprise interfaces, flows and UI kits for a global hotel group, produced at agency scale.',
    cardDescription: 'Enterprise interfaces for a global hotel group. Flows, screens and reusable UI kits delivered at agency pace without losing consistency.',
    role: 'Product Designer, Eunoia Digital',
    years: '2020 — 2021'
  }, {
    slug: 'scavenger-hunt',
    name: 'Scavenger Hunt',
    eyebrow: 'Scavenger Hunt · Popcore',
    logo: 'popcore.svg',
    logoAspect: 6.036,
    thumbnail: 'scavenger-hunt-thumbnail.jpg',
    externalUrl: 'https://www.behance.net/gallery/194452315/Scavenger-Hunt-Hyper-Casual-Mobile-Game-UXUI-Design',
    positioning: 'Live-events design support on a top-grossing mobile title.',
    cardDescription: 'Live events on a top-grossing mobile game. Designing a recurring event so it reads instantly, ships on cadence and never blocks the release train.',
    role: 'Product Designer, Live Events',
    years: '2023'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BitTile = __ds_scope.BitTile;

__ds_ns.CaseNavBtn = __ds_scope.CaseNavBtn;

__ds_ns.JournalRow = __ds_scope.JournalRow;

__ds_ns.MetaBar = __ds_scope.MetaBar;

__ds_ns.PanelCard = __ds_scope.PanelCard;

__ds_ns.ProcessCard = __ds_scope.ProcessCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.SpotlightCard = __ds_scope.SpotlightCard;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.ICON_FILLED = __ds_scope.ICON_FILLED;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.MonoLabel = __ds_scope.MonoLabel;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionRail = __ds_scope.SectionRail;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
