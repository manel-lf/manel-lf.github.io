/**
 * Manel López — portfolio
 * ---------------------------------------------------------------------------
 * Single self-contained React app. No external CSS, no asset files, no router.
 *
 * EVERYTHING editable lives in the CONTENT object below. Copy, links, projects,
 * case-study sections, testimonials, journal posts and every visual are keyed
 * there. Nothing below CONTENT needs to be touched to change what the site says.
 *
 * Images: CONTENT.IMAGES is the single map for every visual on the site. Each
 * entry renders as a procedurally drawn SVG "plate" until you give it a `src`.
 * Set `src` to a file path (e.g. '/img/gamehouse-hero.png' with the file in
 * public/img/) and that one value swaps a real screenshot in. Alt text travels
 * with the entry, so it stays correct either way.
 */

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

/* =========================================================================
 * CONTENT — the only thing you need to edit
 * ========================================================================= */

/**
 * Links live here so each URL is written exactly once — CONTENT.links, the
 * About buttons and the footer socials all read from this object.
 * EDIT THESE before publishing.
 */
const LINKS = {
  email: 'manellopez.alu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manel-lf/',
  behance: 'https://www.behance.net/manellpez',
  bookACall: 'https://cal.com/manel-lopez-wc3pop/book-a-call',
}

export const CONTENT = {
  meta: {
    name: 'Manel López',
    monogram: 'M',
    role: 'Senior Product Designer',
    location: 'Barcelona, Spain',
  },

  links: LINKS,

  booking: {
    // The scheduling page shown inside the dialog. `?embed=` drops Cal.com's
    // own site chrome; the theme is matched to the site's at open time.
    url: LINKS.bookACall,
    title: 'Book a call',
    subtitle: 'Pick a slot that suits you — 30 minutes, no agenda needed.',
    closeLabel: 'Close booking dialog',
    newTabLabel: 'Open in a new tab instead',
    loadingLabel: 'Loading available times…',
  },

  nav: {
    bookLabel: 'Book a call',
    themeLabelToLight: 'Switch to light theme',
    themeLabelToDark: 'Switch to dark theme',
    homeLabel: 'Manel López — back to home',
  },

  hero: {
    // Line one: masks up per word on load.
    name: 'Manel López',
    // Line two: types and untypes on loop. Reduced motion pins it to roles[0].
    rolePrefix: '',
    roles: [
      'Product Designer',
      'UX/UI Designer',
      'AI Prototyper',
      'User Researcher',
      'System Builder',
      'Engineer',
      'University Lecturer',
    ],
    bio: 'Barcelona-based Senior Product Designer with an engineering background. From research and analytics to prototypes and production, I help turn ideas into products people return to.',
    scrollHint: 'Scroll',
  },

  logos: {
    label: 'Companies and teams I have designed for',
    // Shown `perPage` at a time, cross-fading every `intervalMs`.
    // Under reduced motion the rotation is dropped and all of them render at once.
    perPage: 4,
    // 3x the original 3500ms. This is the only number to change the pace.
    intervalMs: 10500,
    // `mark` maps to a hand-drawn SVG wordmark below. Keep the key if you swap the name.
    items: [
      { name: 'GameHouse', mark: 'gamehouse' },
      { name: 'Jesterday', mark: 'jesterday' },
      { name: 'Eunoia Digital', mark: 'eunoia' },
      { name: 'Popcore Games', mark: 'popcore' },
      { name: 'SEAT CUPRA', mark: 'cupra' },
      { name: 'Socialpoint', mark: 'socialpoint' },
      { name: 'La Salle BCN', mark: 'lasalle' },
      { name: 'Kave Home', mark: 'kave' },
    ],
  },

  work: {
    eyebrow: 'Recent work.',
    heading: 'From pixels to products.',
    spotlightSlug: 'gamehouse-plus',
    viewCase: 'View case',
  },

  bits: {
    eyebrow: 'Design bits.',
    heading: 'What I have lately been working on.',
    prevLabel: 'Previous bits',
    nextLabel: 'Next bits',
    // One label per row of four items below.
    rowLabels: ['Prototypes and tooling', 'Systems and analysis'],
    // Every tile uses this ratio, so the cards line up as an even grid.
    mediaRatio: 4 / 3,
    items: [
      {
        id: 'bit-claude-figma',
        kicker: 'AI tooling',
        caption:
          'A working prototype in an afternoon — Claude Code driving the build, the Figma MCP keeping it on the design system.',
        imageKey: 'bits.claudeFigma',
      },
      {
        id: 'bit-energy',
        kicker: 'Game economy',
        caption:
          'Jesterday’s energy economy modelled in a spreadsheet and tuned against session length before a single screen was drawn.',
        imageKey: 'bits.energy',
      },
      {
        id: 'bit-teaching',
        kicker: 'Teaching',
        caption:
          'Research-methods material for a UX course inside an AI and Data Science degree at La Salle URL.',
        imageKey: 'bits.teaching',
      },
      {
        id: 'bit-instant',
        kicker: 'Prototype',
        caption:
          'Five entry-point variants for instant play, narrowed to one by putting a real build in front of players.',
        imageKey: 'bits.instant',
      },
      {
        id: 'bit-tokens',
        kicker: 'Design systems',
        caption:
          'Design tokens as the contract between Figma and Unity, so a colour change is one commit rather than a meeting.',
        imageKey: 'bits.tokens',
      },
      {
        id: 'bit-typeramp',
        kicker: 'Automotive',
        caption:
          'One type ramp that has to stay legible from a 7-inch cluster to a 15-inch centre display, at arm’s length, in sunlight.',
        imageKey: 'bits.typeRamp',
      },
      {
        id: 'bit-analytics',
        kicker: 'Product analytics',
        caption:
          'The funnel that told me a feature I had already shipped was solving the wrong half of the problem.',
        imageKey: 'bits.analytics',
      },
      {
        id: 'bit-componentapi',
        kicker: 'Craft',
        caption:
          'Sketching the component API before the component — props first, pixels second.',
        imageKey: 'bits.componentApi',
      },
    ],
  },

  about: {
    eyebrow: 'About me.',
    heading: 'Design that ships.',
    title: 'AI Native Designer. Design Thinker.',
    body: [
      'I came to design through engineering. The degree gave me the systems habit — read the constraints, model the thing, then draw it — and a Master’s in User Experience gave me the research and evaluation side to go with it.',
      'Today I own a consumer subscription app end to end at GameHouse, and I teach UX inside an AI and Data Science degree at La Salle URL. Teaching keeps the fundamentals sharp; the engineering background means I can build the prototype instead of describing it.',
    ],
    imageKey: 'about.portrait',
    buttons: [{ label: 'LinkedIn', href: LINKS.linkedin, icon: 'linkedin' }],
  },

  testimonials: {
    eyebrow: 'Shoutouts.',
    heading: 'What stakeholders and teammates say about me.',
    intro:
      'People I have worked with directly, across product, design and engineering. Happy to put you in touch with any of them.',
    prevLabel: 'Previous testimonial',
    nextLabel: 'Next testimonial',
    dotLabel: 'Go to testimonial',
    quotes: [
      {
        id: 'q-emmi',
        quote:
          'Manel combines strong design skills with genuine product thinking. He consistently keeps the user at the center, runs usability tests, and uses feedback to improve. He embraces feedback while confidently challenging perspectives with thoughtful reasoning and a clear point of view. He has a strong sense of product vision and translates it into coherent, consistent experiences.',
        name: 'Emmi Kuusikko',
        role: 'Head of Product',
        avatar: 'img/testimonial-emmi-kuusikko.jpg',
      },
      {
        id: 'q-lea',
        quote:
          'Manel consistently acted above his level as a Senior UI/UX Designer. He presented ideas in front of senior management and defended them with confidence. He combines UI/UX craft excellence with strong prototyping and technical skills, paired with sharp abstraction and communication skills, which is a rare mix. Whoever gets to work with Manel will be very lucky.',
        name: 'Lea Schönfelder',
        role: 'UX Creative Director',
        avatar: 'img/testimonial-lea-schonfelder.jpg',
      },
      {
        id: 'q-alex',
        quote:
          'Manel consistently delivers clean and visually appealing designs. He’s great at bringing Product and Development together, making sure everyone is aligned and ideas move smoothly from concept to delivery. Even with tight deadlines, he stays collaborative, open to new ideas, and focused on finding practical solutions.',
        name: 'Alex Segura',
        role: 'Frontend Developer',
        avatar: 'img/testimonial-alex-segura.jpg',
      },
    ],
  },

  journal: {
    eyebrow: 'Journal.',
    heading: 'Notes from the work.',
    readLabel: 'Read',
    posts: [
      {
        id: 'post-prototyping',
        date: 'July 2026',
        tags: ['Prototyping', 'AI Tooling'],
        title: 'Prototyping in code with Claude Code and the Figma MCP',
        dek: 'How a functional prototype became cheaper than a clickable mock, and what that changes about when you commit engineering time.',
        imageKey: 'journal.prototyping',
      },
      {
        id: 'post-system',
        date: 'April 2026',
        tags: ['Design Systems', 'Process'],
        title: 'Building a design system from scratch, with no team to inherit one',
        dek: 'Starting from a single product and one designer: what to standardise first, what to leave loose, and how to keep it alive past launch.',
        imageKey: 'journal.system',
      },
      {
        id: 'post-analytics',
        date: 'January 2026',
        tags: ['Analytics', 'Product'],
        title: 'The feature I shipped, and the analytics that told me to redirect it',
        dek: 'A funnel that disagreed with the roadmap, and the case for treating a shipped feature as a hypothesis rather than a result.',
        imageKey: 'journal.analytics',
      },
    ],
  },

  contact: {
    eyebrow: 'Get in touch.',
    heading: 'Let’s talk.',
    intro:
      'Open to senior product design roles, design system work, and prototyping engagements with product and games teams. Also available for guest lectures and workshops.',
    emailLabel: 'Or email me directly',

    /**
     * Set this to a form-service endpoint and the form genuinely sends the
     * message — no mail client involved. It POSTs JSON
     * { name, email, subject, message } and reports real success or failure.
     *
     * Works as-is with Formspree ('https://formspree.io/f/<id>') or
     * Web3Forms ('https://api.web3forms.com/submit', which also needs
     * `endpointExtraFields: { access_key: '<your-key>' }`).
     *
     * Left null: the form validates, then opens a prefilled draft in the
     * visitor's mail app instead. Nothing else needs to change either way.
     */
    endpoint: null,
    endpointExtraFields: null,

    fields: {
      name: { label: 'Your name', placeholder: 'Hiring Manager', required: true },
      email: { label: 'Your email', placeholder: 'you@company.com', required: true },
      subject: { label: 'Subject', placeholder: 'Senior Product Designer role', required: true },
      message: {
        label: 'Message',
        placeholder: 'A line or two about the team, the product and the problem.',
        required: true,
      },
    },
    submitLabel: 'Send message',
    submittingLabel: 'Sending…',

    // Shown when `endpoint` is set and the message actually went out.
    sentTitle: 'Message sent.',
    sentBody: 'Thanks — it landed in my inbox and I’ll come back to you shortly.',

    // Shown when `endpoint` is null and a mail draft was opened instead.
    // Deliberately does not say "above": on a wide screen the address sits to
    // the left of the form, not above it.
    draftTitle: 'Your email is ready.',
    draftBody: `A prefilled draft to ${LINKS.email} should have opened in your mail app. If nothing happened, copy that address and send it directly.`,

    // Shown when `endpoint` is set but the request failed.
    failedTitle: 'That didn’t go through.',
    failedBody: `Something went wrong sending the message. Please email me directly at ${LINKS.email}.`,

    resetLabel: 'Write another',
    errors: {
      name: 'Please tell me your name.',
      email: 'Please enter a valid email address.',
      subject: 'Please add a subject.',
      message: 'Please add a message — a couple of sentences is plenty.',
    },
  },

  footer: {
    rail: [
      { id: 'work', label: 'Work' },
      { id: 'bits', label: 'Bits' },
      { id: 'about', label: 'About' },
      { id: 'shoutouts', label: 'Shoutouts' },
      { id: 'journal', label: 'Journal' },
      { id: 'contact', label: 'Contact' },
    ],
    railLabel: 'Sections on this page',
    socials: [
      { label: 'LinkedIn', href: LINKS.linkedin, icon: 'linkedin' },
      { label: 'Behance', href: LINKS.behance, icon: 'behance' },
      { label: 'Email', href: `mailto:${LINKS.email}`, icon: 'mail' },
    ],
    location: 'Barcelona, Spain',
    copyright: '© 2026 Manel López. Built and written by hand in Barcelona.',
  },

  caseUi: {
    eyebrow: 'End-to-End Design',
    titlePrefix: 'For',
    backLabel: 'Back to work',
    metaLabels: { role: 'Role', years: 'Years', skills: 'Skills' },
    processPrev: 'Previous process card',
    processNext: 'Next process card',
    prevProject: 'Previous',
    nextProject: 'Next',
    railLabel: 'Sections in this case study',
    rail: [
      { id: 'overview', label: 'Overview' },
      { id: 'process', label: 'Process' },
      { id: 'system', label: 'System' },
      { id: 'extend', label: 'Extend' },
      { id: 'impact', label: 'Impact' },
    ],
  },

  /* -----------------------------------------------------------------------
   * PROJECTS — the spotlight is CONTENT.work.spotlightSlug; the rest fill the
   * secondary grid in this order. Every project renders a full case study.
   * --------------------------------------------------------------------- */
  projects: [
    {
      slug: 'gamehouse-plus',
      name: 'GameHouse+',
      mark: 'gamehouse',
      eyebrow: 'GameHouse+',
      positioning:
        'A consumer subscription app for casual games, repositioned around instant play.',
      cardDescription:
        'End-to-end ownership of a casual-games subscription app — research, product analytics, design system and the first-session rebuild.',
      role: 'Senior Product Designer — end-to-end ownership',
      years: '2023 — Present',
      skills: ['UX Design', 'UX Research', 'Product Analytics', 'Design Systems', 'Prototyping', 'Visual'],
      metrics: [
        { value: '6×', label: 'Day-0 activation' },
        { value: '6×', label: 'Faster time to first session' },
        { value: '2×', label: 'Day-1 retention' },
      ],
      images: {
        hero: 'case.gamehouse-plus.hero',
        overview: 'case.gamehouse-plus.overview',
        system: [
          'case.gamehouse-plus.system.1',
          'case.gamehouse-plus.system.2',
          'case.gamehouse-plus.system.3',
          'case.gamehouse-plus.system.4',
        ],
        extend: ['case.gamehouse-plus.extend.1', 'case.gamehouse-plus.extend.2'],
      },
      overview: {
        eyebrow: 'Overview:',
        heading: 'Backstory of the work.',
        body: [
          'GameHouse+ is a subscription app for casual games. I own it end to end — discovery, research, interaction design, the design system, the visual language, and the analytics that tell us whether any of it worked.',
          'The product had a catalogue people liked and a first session almost nobody finished. Installs arrived, the store loaded, and the majority of new users left before they had played anything at all. The subscription was being asked to justify itself before it had delivered a single minute of value.',
        ],
      },
      process: {
        eyebrow: 'Process:',
        heading: 'How I kicked things off.',
        body: [
          'I started where the disagreement was: everyone had a theory about why activation was low, and none of them were written down. So I made the current state undeniable before proposing anything.',
          'Session recordings and funnel analysis first, then a short round of moderated sessions with new users, then a written problem statement the whole team could argue with. Only after that did I start drawing.',
        ],
        cards: [
          {
            title: 'Funnel teardown',
            meta: 'Product analytics',
            body: 'Instrumented the first session step by step in Amplitude and found the drop was not at paywall or signup — it was in the gap between opening the app and anything being playable.',
          },
          {
            title: 'Moderated first sessions',
            meta: 'UX research',
            body: 'Watched new users open the app cold. The catalogue read as a decision to make rather than an invitation to play, and the download wait broke the moment of intent.',
          },
          {
            title: 'Problem statement',
            meta: 'Framing document',
            body: 'One page: what we observed, what it costs, what we are choosing to optimise, and what we are explicitly not solving in this cycle. Signed off by product and engineering before design started.',
          },
          {
            title: 'Instant-play hypothesis',
            meta: 'Concept',
            body: 'If the first thing a new user meets is content already running rather than a catalogue to browse, activation stops depending on a download completing.',
          },
          {
            title: 'Coded prototype',
            meta: 'Prototyping',
            body: 'Built the entry flow as a working prototype rather than a clickable mock, so latency, loading and failure states were real and could be tested honestly.',
          },
          {
            title: 'Instrumented rollout',
            meta: 'Validation',
            body: 'Shipped behind a flag with the funnel already wired, so the comparison against the old first session was available in days rather than after a quarter.',
          },
        ],
      },
      system: {
        eyebrow: 'Shaping the system:',
        heading: 'Shaping the system for GameHouse+.',
        body: [
          'The pivot only holds if the surfaces around it are consistent, so I built the design system in parallel with the flow rather than after it. Tokens for colour, type, spacing and motion; a component library with real states rather than happy-path artwork; and documented rules for how content density behaves as the catalogue grows.',
          'The system is deliberately small. Every component in it exists because two or more surfaces needed it, and each one ships with its loading, empty, error and offline states — those are the states a games subscription actually spends its time in.',
        ],
      },
      extend: {
        eyebrow: 'Extend:',
        heading: 'Store and marketing surfaces.',
        body: [
          'Once the in-app language settled, the same system had to carry the surfaces that sit outside the app: store listings, lifecycle email, acquisition landing pages and the in-app merchandising slots that promote new content.',
          'Reusing the tokens and components meant the promise made in an ad matched the first screen a new user saw. That continuity is a measurable part of activation, not a brand nicety.',
        ],
      },
      impact: {
        eyebrow: 'The impact:',
        heading: 'Activation, and what changed.',
        body: [
          'The instant-content pivot delivered six times day-0 activation, a six-fold reduction in time to first session, and double day-1 retention. The first session stopped being a decision and became an experience.',
          'The more durable change is how the team now works. A problem statement precedes design, prototypes are functional before they are pretty, and the funnel is instrumented before a feature ships rather than after someone asks how it is doing. I have since used the same analytics to argue for redirecting a feature I had already shipped myself.',
        ],
      },
    },
    {
      slug: 'jesterday',
      name: 'Jesterday',
      mark: 'jesterday',
      eyebrow: 'Jesterday',
      positioning:
        'An indie mobile multiplayer title, given a design system and an economy that survive production.',
      cardDescription:
        'Indie mobile multiplayer. Design system built from scratch, an energy economy modelled end to end, and the component library implemented in Unity.',
      role: 'Product Designer & Design System Owner',
      years: '2022 — 2023',
      skills: ['UX Design', 'Design Systems', 'Game Economy', 'Unity Implementation', 'Visual'],
      metrics: [
        { value: '0 → 1', label: 'Design system, built from scratch' },
        { value: '48', label: 'Components shipped into Unity' },
        { value: '1', label: 'Energy economy, modelled before build' },
      ],
      images: {
        hero: 'case.jesterday.hero',
        overview: 'case.jesterday.overview',
        system: [
          'case.jesterday.system.1',
          'case.jesterday.system.2',
          'case.jesterday.system.3',
          'case.jesterday.system.4',
        ],
        extend: ['case.jesterday.extend.1', 'case.jesterday.extend.2'],
      },
      overview: {
        eyebrow: 'Overview:',
        heading: 'Backstory of the work.',
        body: [
          'Jesterday is an indie mobile multiplayer game. There was no design system, no component library and no shared language for the interface — the studio had a strong art direction and a UI assembled ad hoc, screen by screen.',
          'I joined to give the product a system: something the two of us on design could work inside, and something engineering could implement once rather than re-solve for every new screen.',
        ],
      },
      process: {
        eyebrow: 'Process:',
        heading: 'How I kicked things off.',
        body: [
          'A game interface has a harder constraint than most product UI: the economy and the interface are the same design. You cannot lay out an energy meter sensibly until you know what energy costs, how fast it refills and what it gates.',
          'So I modelled the economy first, in a spreadsheet, against target session lengths — then designed the surfaces that expose it.',
        ],
        cards: [
          {
            title: 'Interface audit',
            meta: 'Discovery',
            body: 'Catalogued every existing screen and found eleven button treatments, four type scales and no consistent spacing. Turned that into the argument for a system.',
          },
          {
            title: 'Economy model',
            meta: 'Game design',
            body: 'Modelled energy cost, refill rate and session pacing in a spreadsheet, tuned against the session length the studio wanted, before any screen was drawn.',
          },
          {
            title: 'Token foundation',
            meta: 'Design systems',
            body: 'Colour, type, spacing, radius and motion as named tokens, defined once and referenced everywhere — including in the Unity implementation.',
          },
          {
            title: 'Component library',
            meta: 'Design systems',
            body: 'Built the library in Figma with real states, then worked alongside engineering to mirror it as reusable Unity prefabs rather than a set of exported images.',
          },
          {
            title: 'Multiplayer states',
            meta: 'Interaction design',
            body: 'Matchmaking, reconnect, opponent-dropped and latency states designed as first-class screens. In multiplayer these are not edge cases, they are the weather.',
          },
          {
            title: 'Handoff in engine',
            meta: 'Implementation',
            body: 'Reviewed in the build rather than in Figma. If a component only looked right in the design file, it was not finished.',
          },
        ],
      },
      system: {
        eyebrow: 'Shaping the system:',
        heading: 'Shaping the system for Jesterday.',
        body: [
          'The library ended up at forty-eight components, each one earning its place by being needed on more than one surface. Tokens were the contract: a colour or spacing change was a single edit that propagated into the engine, not a coordination meeting.',
          'The part I would defend hardest is the state coverage. Every component was specified with its loading, empty, error and disconnected appearance, because a multiplayer game spends a meaningful share of its life in exactly those states.',
        ],
      },
      extend: {
        eyebrow: 'Extend:',
        heading: 'Into the engine, and out to the store.',
        body: [
          'The system extended in two directions. Inward, into Unity, as prefabs built from the same tokens — which is what made it stick, because the implementation was not a translation of the design, it was the design.',
          'Outward, into store assets and campaign surfaces, so the game presented one visual language from the first screenshot a player sees to the interface they land in.',
        ],
      },
      impact: {
        eyebrow: 'The impact:',
        heading: 'What the system changed.',
        body: [
          'New screens stopped being bespoke. A feature that would previously have needed a designer to invent its buttons, spacing and states could be assembled from the library and reviewed in the build the same week.',
          'The economy model turned out to be the more valuable artefact. Because the numbers existed before the screens, arguments about pacing were settled against the model rather than against taste — and the interface never had to be redrawn because the economy shifted underneath it.',
        ],
      },
    },
    {
      slug: 'seat-cupra',
      name: 'SEAT CUPRA',
      mark: 'cupra',
      eyebrow: 'SEAT CUPRA',
      positioning:
        'In-car infotainment for connected services — enrolment, data plans and software updates, across every screen in the range.',
      cardDescription:
        'In-car infotainment. Connected-services enrolment, data plan purchase and an update centre, designed to hold from 7-inch clusters to 15-inch displays.',
      role: 'Product Designer, Connected Services',
      years: '2021 — 2022',
      skills: ['UX Design', 'UX Research', 'Automotive HMI', 'Responsive Systems', 'Visual'],
      metrics: [
        { value: '7"–15"', label: 'Screen sizes supported' },
        { value: '3', label: 'Core flows owned end to end' },
        { value: '2', label: 'Brands sharing one system' },
      ],
      images: {
        hero: 'case.seat-cupra.hero',
        overview: 'case.seat-cupra.overview',
        system: [
          'case.seat-cupra.system.1',
          'case.seat-cupra.system.2',
          'case.seat-cupra.system.3',
          'case.seat-cupra.system.4',
        ],
        extend: ['case.seat-cupra.extend.1', 'case.seat-cupra.extend.2'],
      },
      overview: {
        eyebrow: 'Overview:',
        heading: 'Backstory of the work.',
        body: [
          'Connected services turn a car into a product with an account, a subscription and a software lifecycle. I designed three of those flows for SEAT and CUPRA infotainment: enrolling the vehicle, buying a data plan, and managing software updates.',
          'The context is unforgiving. The user is in a driver’s seat, possibly parked and impatient, reading a screen at arm’s length in variable light, using a system that cannot assume a keyboard, a fast connection or a second attempt.',
        ],
      },
      process: {
        eyebrow: 'Process:',
        heading: 'How I kicked things off.',
        body: [
          'Automotive HMI has constraints you cannot design around, only design for: legal, safety, hardware and a screen range that spans more than double in physical size. I began by writing those constraints down as design inputs.',
          'From there the work was mostly about reduction — finding the smallest flow that survives a bad connection, a distracted user and a 7-inch display.',
        ],
        cards: [
          {
            title: 'Constraint inventory',
            meta: 'Framing',
            body: 'Hardware sizes, input methods, safety rules on what may appear while moving, and connectivity assumptions — collected as a single document that every design decision was checked against.',
          },
          {
            title: 'Flow reduction',
            meta: 'UX design',
            body: 'Rewrote enrolment to the minimum number of decisions, deferring everything that could be completed later from a phone rather than blocking the driver in the car.',
          },
          {
            title: 'Type and touch ramp',
            meta: 'Responsive system',
            body: 'One type and target scale defined against viewing distance rather than pixels, so the same layout stays legible and tappable at 7 inches and does not look sparse at 15.',
          },
          {
            title: 'Purchase without a keyboard',
            meta: 'Interaction design',
            body: 'Designed data plan purchase to avoid text entry wherever possible, handing off to the phone for anything that genuinely needed typing.',
          },
          {
            title: 'Update centre',
            meta: 'UX design',
            body: 'Software updates presented as a state the driver can understand and trust: what is changing, how long it takes, and what happens if they walk away.',
          },
          {
            title: 'In-vehicle review',
            meta: 'Validation',
            body: 'Reviewed on real hardware in real light. Contrast and legibility decisions that looked safe on a monitor repeatedly did not survive a sunny car park.',
          },
        ],
      },
      system: {
        eyebrow: 'Shaping the system:',
        heading: 'One system, every screen size.',
        body: [
          'The core of the work is a responsive system keyed to viewing distance instead of viewport width. Type, touch targets, spacing and information density all step together across the screen range, so a flow designed once behaves correctly on every configuration in the line-up.',
          'Two brands share it. SEAT and CUPRA differ in tone and palette but not in structure, which meant the flows could be designed once and themed rather than forked.',
        ],
      },
      extend: {
        eyebrow: 'Extend:',
        heading: 'Beyond the head unit.',
        body: [
          'Several flows genuinely belong on a phone — anything involving typing, payment detail or reading terms. I designed the handoff so starting in the car and finishing on a phone is one continuous task rather than two disconnected ones.',
          'The same system also carried the companion-app surfaces that mirror vehicle state, so the two screens agreed with each other about what the car was doing.',
        ],
      },
      impact: {
        eyebrow: 'The impact:',
        heading: 'What shipped, and what it taught me.',
        body: [
          'Three connected-services flows shipped into production infotainment across two brands and the full screen range, on a shared responsive system rather than per-configuration designs.',
          'Automotive changed how I design generally. When you cannot patch next week and a mistake sits in front of the user for the life of the vehicle, you get rigorous about states, about legibility, and about testing on the real thing rather than on a monitor.',
        ],
      },
    },
    {
      slug: 'radisson',
      name: 'Radisson Hotels',
      mark: 'radisson',
      eyebrow: 'Radisson Hotels — via Eunoia Digital',
      positioning:
        'Enterprise interfaces, flows and UI kits for a global hotel group, produced at agency scale.',
      cardDescription:
        'Enterprise interfaces for a global hotel group. Flows, screens and reusable UI kits delivered at agency pace without losing consistency.',
      role: 'Product Designer, Eunoia Digital',
      years: '2020 — 2021',
      skills: ['UX Design', 'UI Design', 'Design Systems', 'Enterprise Flows', 'Visual'],
      metrics: [
        { value: 'Enterprise', label: 'Scale and governance' },
        { value: 'Multi-market', label: 'Rollout footprint' },
        { value: 'Reusable', label: 'UI kits over one-off screens' },
      ],
      images: {
        hero: 'case.radisson.hero',
        overview: 'case.radisson.overview',
        system: [
          'case.radisson.system.1',
          'case.radisson.system.2',
          'case.radisson.system.3',
          'case.radisson.system.4',
        ],
        extend: ['case.radisson.extend.1', 'case.radisson.extend.2'],
      },
      overview: {
        eyebrow: 'Overview:',
        heading: 'Backstory of the work.',
        body: [
          'At Eunoia Digital I worked on enterprise interfaces for Radisson Hotels — internal and operational tools rather than the booking site most people picture when they hear hotel software.',
          'Enterprise work at agency pace has a specific failure mode: every request is urgent, every screen is delivered by a different person, and six months later the product is a patchwork. The interesting problem was consistency under deadline pressure, not any single screen.',
        ],
      },
      process: {
        eyebrow: 'Process:',
        heading: 'How I kicked things off.',
        body: [
          'I treated reusable UI kits as the deliverable and individual screens as the by-product. Building the kit costs more on the first request and less on every one after it.',
          'That argument had to be made commercially as well as design-side, because it front-loads effort in a model that bills by delivery.',
        ],
        cards: [
          {
            title: 'Flow mapping',
            meta: 'Discovery',
            body: 'Mapped the operational flows end to end with the people who actually run them, which surfaced steps that existed only as institutional knowledge.',
          },
          {
            title: 'Pattern extraction',
            meta: 'Analysis',
            body: 'Pulled the recurring structures out of the screens already delivered — tables, filters, detail panes, bulk actions — and made them the basis of the kit.',
          },
          {
            title: 'UI kit build',
            meta: 'Design systems',
            body: 'Built kits designed to be handed to another designer and used correctly without a briefing. Documentation as part of the component, not a separate wiki nobody opens.',
          },
          {
            title: 'Dense data screens',
            meta: 'UI design',
            body: 'Enterprise screens carry far more information than consumer ones. Established density, hierarchy and scanning rules so volume stayed readable.',
          },
          {
            title: 'Multi-market variance',
            meta: 'UX design',
            body: 'Designed for markets whose operational rules differ, keeping one structure and varying only what genuinely had to vary.',
          },
          {
            title: 'Delivery cadence',
            meta: 'Process',
            body: 'Set a review rhythm with client stakeholders so consistency was checked continuously rather than discovered as drift at the end of a phase.',
          },
        ],
      },
      system: {
        eyebrow: 'Shaping the system:',
        heading: 'UI kits that survive a handover.',
        body: [
          'The kits were built for the realistic case: someone else picking them up under time pressure, with no access to me. That meant obvious naming, states included by default, and documentation written into the component rather than filed beside it.',
          'Density was the hard part. Operational users want everything on one screen, and the job is to make that volume scannable — consistent alignment, real hierarchy, and restraint about how many things may compete for attention at once.',
        ],
      },
      extend: {
        eyebrow: 'Extend:',
        heading: 'Across products and markets.',
        body: [
          'Once the kits existed they were reused across adjacent products in the same account, which is where the front-loaded effort paid back. New requests started from assembly rather than invention.',
          'They also absorbed market-specific variation without forking, because the variable parts were isolated by design rather than copied and edited.',
        ],
      },
      impact: {
        eyebrow: 'The impact:',
        heading: 'Consistency, under deadline.',
        body: [
          'Delivery got faster and drift got slower. The measurable win was that a new screen could be assembled from existing patterns and reviewed the same day, instead of being designed from a blank canvas by whoever was free.',
          'This is where I learned that a design system is mostly an organisational argument. The components are the easy half; getting a team under commercial pressure to invest in reuse is the work.',
        ],
      },
    },
    {
      slug: 'scavenger-hunt',
      name: 'Scavenger Hunt',
      mark: 'popcore',
      eyebrow: 'Scavenger Hunt — at Popcore',
      positioning:
        'Live-events design support on a top-grossing mobile title.',
      cardDescription:
        'Live events on a top-grossing mobile game. Designing a recurring event so it reads instantly, ships on cadence and never blocks the release train.',
      role: 'Product Designer, Live Events',
      years: '2023',
      skills: ['UX Design', 'Live Ops', 'Mobile Games', 'Visual', 'Rapid Iteration'],
      metrics: [
        { value: 'Top-grossing', label: 'Title the event ran on' },
        { value: 'Recurring', label: 'Event cadence, not a one-off' },
        { value: 'Live ops', label: 'Shipped inside a running game' },
      ],
      images: {
        hero: 'case.scavenger-hunt.hero',
        overview: 'case.scavenger-hunt.overview',
        system: [
          'case.scavenger-hunt.system.1',
          'case.scavenger-hunt.system.2',
          'case.scavenger-hunt.system.3',
          'case.scavenger-hunt.system.4',
        ],
        extend: ['case.scavenger-hunt.extend.1', 'case.scavenger-hunt.extend.2'],
      },
      overview: {
        eyebrow: 'Overview:',
        heading: 'Backstory of the work.',
        body: [
          'Popcore runs top-grossing casual mobile titles, and live events are how those games stay alive between releases. I provided design support on Scavenger Hunt, a recurring event layered onto a game already in players’ hands.',
          'Designing into a live product is a different discipline from designing a new one. You inherit the interface, the economy and the player’s existing habits, and your event has to be understood in seconds by someone who did not ask for it.',
        ],
      },
      process: {
        eyebrow: 'Process:',
        heading: 'How I kicked things off.',
        body: [
          'Live ops runs on cadence, so the process has to be fast without becoming careless. I worked from the existing game language outward rather than proposing anything the player would have to learn.',
          'The constraint I held to: the event must be comprehensible without a tutorial. If it needs explaining, it is too complicated for a live event.',
        ],
        cards: [
          {
            title: 'Existing language audit',
            meta: 'Discovery',
            body: 'Catalogued the game’s existing patterns for progress, reward and time pressure so the event could reuse them instead of inventing new ones.',
          },
          {
            title: 'Comprehension in seconds',
            meta: 'UX design',
            body: 'Designed the entry point so a returning player understands the goal, the reward and the deadline at a glance, with no tutorial step.',
          },
          {
            title: 'Reward legibility',
            meta: 'Interaction design',
            body: 'Made progress and payoff visible at every moment. In a live event the player’s sense of momentum is the feature.',
          },
          {
            title: 'Cadence-safe scope',
            meta: 'Process',
            body: 'Scoped every element against the release train. Anything that could not ship reliably on cadence was cut rather than carried.',
          },
          {
            title: 'Cross-functional loop',
            meta: 'Collaboration',
            body: 'Worked in a tight loop with product, live ops and engineering, reviewing in build so the event was validated in the real game, not in isolation.',
          },
          {
            title: 'Post-event read',
            meta: 'Analytics',
            body: 'Reviewed participation and completion after the run so the next iteration started from evidence rather than from opinion.',
          },
        ],
      },
      system: {
        eyebrow: 'Shaping the system:',
        heading: 'An event built from the game’s own parts.',
        body: [
          'The event deliberately reuses the game’s existing visual and interaction vocabulary. Recognition is worth more than novelty here — a player should feel like they already know how it works, because structurally they do.',
          'What is new is confined to the event’s own identity and its progress model, so the surrounding game stays untouched and the event can be re-run, re-skinned and re-scheduled without redesign.',
        ],
      },
      extend: {
        eyebrow: 'Extend:',
        heading: 'Re-runs and promotion.',
        body: [
          'A live event is only economical if it comes back. The structure was built to be re-skinned and re-scheduled, so subsequent runs are a content exercise rather than a design one.',
          'The same assets carried into in-game promotion and store surfaces, so what players were told about the event matched what they found when they opened it.',
        ],
      },
      impact: {
        eyebrow: 'The impact:',
        heading: 'Shipping into a live game.',
        body: [
          'The event shipped on cadence into a top-grossing title and was built to be re-run rather than rebuilt, which is the outcome live ops actually needs from design.',
          'The lasting lesson was about restraint. On a live product the best design is frequently the one that adds the least new vocabulary — reuse is not a shortcut, it is the reason the player understands you at all.',
        ],
      },
    },
  ],

  /* -----------------------------------------------------------------------
   * IMAGES — the single map for every visual on the site.
   *
   * Each entry: { src, alt, plate, tone, seed }
   *   src   — null renders the procedural SVG plate. Set it to a path with
   *           NO leading slash ('img/my-shot.png', file in public/img/) to
   *           use a real image. That one value is the whole swap.
   *           Paths are resolved against the deployment base by resolveSrc,
   *           so the same value works at a domain root and in a subfolder.
   *           Absolute URLs (https://...) also work.
   *   alt   — always required, and correct for either rendering.
   *   plate — lattice | mesh | grid | strata | portrait | orbit | panels
   *           | columns | weave | ramp
   *   tone  — dark | light | accent
   *   seed  — any integer; changes the deterministic composition.
   * --------------------------------------------------------------------- */
  IMAGES: {
    'hero.spotlight': { src: null, alt: 'GameHouse+ — an isometric lattice of extruded blocks receding into darkness, standing in for the app’s content system.', plate: 'lattice', tone: 'dark', seed: 11 },
    'about.portrait': { src: null, alt: 'Abstract portrait plate — a soft figure-shaped light form emerging from a dark, grained field.', plate: 'portrait', tone: 'dark', seed: 27 },

    'bits.claudeFigma': { src: null, alt: 'Overlapping structured panels suggesting a prototype assembled from a design system.', plate: 'panels', tone: 'dark', seed: 41 },
    'bits.energy': { src: null, alt: 'A decaying and refilling waveform standing in for an energy economy model.', plate: 'ramp', tone: 'light', seed: 52 },
    'bits.teaching': { src: null, alt: 'A grid of hairline cells with a few filled, standing in for teaching material and research methods.', plate: 'grid', tone: 'light', seed: 63 },
    'bits.instant': { src: null, alt: 'Five stacked variants converging on one, standing in for prototype iterations.', plate: 'strata', tone: 'accent', seed: 74 },
    'bits.tokens': { src: null, alt: 'Interlocking bars standing in for design tokens shared between Figma and Unity.', plate: 'weave', tone: 'dark', seed: 85 },
    'bits.typeRamp': { src: null, alt: 'A stepped ramp of increasing bar heights, standing in for a type scale across screen sizes.', plate: 'columns', tone: 'light', seed: 96 },
    'bits.analytics': { src: null, alt: 'A falling funnel of narrowing bands, standing in for a product analytics funnel.', plate: 'ramp', tone: 'dark', seed: 107 },
    'bits.componentApi': { src: null, alt: 'Concentric arcs around a small centre, standing in for a component API sketched before the component.', plate: 'orbit', tone: 'light', seed: 118 },

    'journal.prototyping': { src: null, alt: 'Abstract plate of nested panels for the prototyping-in-code journal entry.', plate: 'panels', tone: 'dark', seed: 129 },
    'journal.system': { src: null, alt: 'Abstract plate of a modular grid for the design-system journal entry.', plate: 'grid', tone: 'dark', seed: 140 },
    'journal.analytics': { src: null, alt: 'Abstract plate of stepped columns for the product-analytics journal entry.', plate: 'columns', tone: 'dark', seed: 151 },

    'case.gamehouse-plus.hero': { src: null, alt: 'GameHouse+ case study hero — a wide gradient mesh over a modular grid, in near-black and electric blue.', plate: 'mesh', tone: 'dark', seed: 201 },
    'case.gamehouse-plus.overview': { src: null, alt: 'GameHouse+ overview visual — an isometric lattice standing in for the catalogue and content system.', plate: 'lattice', tone: 'dark', seed: 202 },
    'case.gamehouse-plus.system.1': { src: null, alt: 'GameHouse+ system panel — nested structural panels standing in for the component library.', plate: 'panels', tone: 'dark', seed: 203 },
    'case.gamehouse-plus.system.2': { src: null, alt: 'GameHouse+ system panel — a token grid standing in for colour, type and spacing tokens.', plate: 'grid', tone: 'dark', seed: 204 },
    'case.gamehouse-plus.system.3': { src: null, alt: 'GameHouse+ system panel — stacked strata standing in for content density rules.', plate: 'strata', tone: 'dark', seed: 205 },
    'case.gamehouse-plus.system.4': { src: null, alt: 'GameHouse+ system panel — interlocking bars standing in for component state coverage.', plate: 'weave', tone: 'dark', seed: 206 },
    'case.gamehouse-plus.extend.1': { src: null, alt: 'GameHouse+ extend visual — a wide mesh standing in for store and marketing surfaces.', plate: 'mesh', tone: 'accent', seed: 207 },
    'case.gamehouse-plus.extend.2': { src: null, alt: 'GameHouse+ extend visual — stepped columns standing in for merchandising slots.', plate: 'columns', tone: 'dark', seed: 208 },

    'case.jesterday.hero': { src: null, alt: 'Jesterday case study hero — interlocking bars over a dark grained field.', plate: 'weave', tone: 'dark', seed: 301 },
    'case.jesterday.overview': { src: null, alt: 'Jesterday overview visual — concentric arcs standing in for multiplayer matchmaking states.', plate: 'orbit', tone: 'dark', seed: 302 },
    'case.jesterday.system.1': { src: null, alt: 'Jesterday system panel — a token grid standing in for the foundation layer.', plate: 'grid', tone: 'dark', seed: 303 },
    'case.jesterday.system.2': { src: null, alt: 'Jesterday system panel — nested panels standing in for the component library.', plate: 'panels', tone: 'dark', seed: 304 },
    'case.jesterday.system.3': { src: null, alt: 'Jesterday system panel — a decaying and refilling ramp standing in for the energy economy.', plate: 'ramp', tone: 'dark', seed: 305 },
    'case.jesterday.system.4': { src: null, alt: 'Jesterday system panel — stacked strata standing in for component states.', plate: 'strata', tone: 'dark', seed: 306 },
    'case.jesterday.extend.1': { src: null, alt: 'Jesterday extend visual — an isometric lattice standing in for the Unity prefab implementation.', plate: 'lattice', tone: 'dark', seed: 307 },
    'case.jesterday.extend.2': { src: null, alt: 'Jesterday extend visual — a wide mesh standing in for store and campaign assets.', plate: 'mesh', tone: 'accent', seed: 308 },

    'case.seat-cupra.hero': { src: null, alt: 'SEAT CUPRA case study hero — a wide horizontal ramp of light across a dark field, echoing an instrument cluster.', plate: 'ramp', tone: 'dark', seed: 401 },
    'case.seat-cupra.overview': { src: null, alt: 'SEAT CUPRA overview visual — stacked strata standing in for the range of screen sizes.', plate: 'strata', tone: 'dark', seed: 402 },
    'case.seat-cupra.system.1': { src: null, alt: 'SEAT CUPRA system panel — a stepped column ramp standing in for the type and touch scale.', plate: 'columns', tone: 'dark', seed: 403 },
    'case.seat-cupra.system.2': { src: null, alt: 'SEAT CUPRA system panel — a modular grid standing in for layout across screen sizes.', plate: 'grid', tone: 'dark', seed: 404 },
    'case.seat-cupra.system.3': { src: null, alt: 'SEAT CUPRA system panel — nested panels standing in for the enrolment flow.', plate: 'panels', tone: 'dark', seed: 405 },
    'case.seat-cupra.system.4': { src: null, alt: 'SEAT CUPRA system panel — concentric arcs standing in for update-centre progress states.', plate: 'orbit', tone: 'dark', seed: 406 },
    'case.seat-cupra.extend.1': { src: null, alt: 'SEAT CUPRA extend visual — interlocking bars standing in for the car-to-phone handoff.', plate: 'weave', tone: 'accent', seed: 407 },
    'case.seat-cupra.extend.2': { src: null, alt: 'SEAT CUPRA extend visual — an isometric lattice standing in for companion-app surfaces.', plate: 'lattice', tone: 'dark', seed: 408 },

    'case.radisson.hero': { src: null, alt: 'Radisson Hotels case study hero — a dense hairline grid standing in for enterprise data interfaces.', plate: 'grid', tone: 'dark', seed: 501 },
    'case.radisson.overview': { src: null, alt: 'Radisson Hotels overview visual — nested panels standing in for operational flows.', plate: 'panels', tone: 'dark', seed: 502 },
    'case.radisson.system.1': { src: null, alt: 'Radisson Hotels system panel — a dense grid standing in for table and filter patterns.', plate: 'grid', tone: 'dark', seed: 503 },
    'case.radisson.system.2': { src: null, alt: 'Radisson Hotels system panel — stacked strata standing in for information density rules.', plate: 'strata', tone: 'dark', seed: 504 },
    'case.radisson.system.3': { src: null, alt: 'Radisson Hotels system panel — interlocking bars standing in for the reusable UI kit.', plate: 'weave', tone: 'dark', seed: 505 },
    'case.radisson.system.4': { src: null, alt: 'Radisson Hotels system panel — nested panels standing in for detail panes and bulk actions.', plate: 'panels', tone: 'dark', seed: 506 },
    'case.radisson.extend.1': { src: null, alt: 'Radisson Hotels extend visual — a wide mesh standing in for reuse across adjacent products.', plate: 'mesh', tone: 'accent', seed: 507 },
    'case.radisson.extend.2': { src: null, alt: 'Radisson Hotels extend visual — stepped columns standing in for multi-market variance.', plate: 'columns', tone: 'dark', seed: 508 },

    'case.scavenger-hunt.hero': { src: null, alt: 'Scavenger Hunt case study hero — concentric arcs over a dark field, standing in for event progress.', plate: 'orbit', tone: 'dark', seed: 601 },
    'case.scavenger-hunt.overview': { src: null, alt: 'Scavenger Hunt overview visual — a wide mesh standing in for a live game surface.', plate: 'mesh', tone: 'dark', seed: 602 },
    'case.scavenger-hunt.system.1': { src: null, alt: 'Scavenger Hunt system panel — concentric arcs standing in for the progress model.', plate: 'orbit', tone: 'dark', seed: 603 },
    'case.scavenger-hunt.system.2': { src: null, alt: 'Scavenger Hunt system panel — nested panels standing in for the event entry point.', plate: 'panels', tone: 'dark', seed: 604 },
    'case.scavenger-hunt.system.3': { src: null, alt: 'Scavenger Hunt system panel — stepped columns standing in for reward legibility.', plate: 'columns', tone: 'dark', seed: 605 },
    'case.scavenger-hunt.system.4': { src: null, alt: 'Scavenger Hunt system panel — a ramp standing in for time pressure and deadline.', plate: 'ramp', tone: 'dark', seed: 606 },
    'case.scavenger-hunt.extend.1': { src: null, alt: 'Scavenger Hunt extend visual — stacked strata standing in for re-skinned event re-runs.', plate: 'strata', tone: 'accent', seed: 607 },
    'case.scavenger-hunt.extend.2': { src: null, alt: 'Scavenger Hunt extend visual — interlocking bars standing in for in-game promotion surfaces.', plate: 'weave', tone: 'dark', seed: 608 },
  },
}

/* =========================================================================
 * Design tokens
 * ========================================================================= */

const RADIUS = { sm: '4px', md: '8px', lg: '12px', pill: '999px' }

const EASE = {
  // Entrances: decisive start, long settle.
  out: 'cubic-bezier(0.16, 1, 0.3, 1)',
  // Standard UI state changes.
  std: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Exits: leaves quickly.
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  // Restrained spring for the section-rail pill. Slight overshoot, no bounce.
  spring: 'cubic-bezier(0.34, 1.28, 0.52, 1)',
}

const DUR = {
  fast: 150,
  base: 220,
  slow: 320,
  reveal: 640,
  hero: 760,
}

/* =========================================================================
 * Stylesheet — injected once. Themes are pure CSS-variable swaps so the
 * light/dark toggle cross-fades colour rather than snapping.
 * ========================================================================= */

const STYLES = `
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0}
h1,h2,h3,h4,p,figure,blockquote,ul,ol{margin:0}
ul,ol{padding:0;list-style:none}
img,svg{display:block;max-width:100%}
button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}
a{color:inherit;text-decoration:none}
input,textarea{font:inherit;color:inherit}

:root{
  --font-display:'Archivo','Helvetica Neue',Helvetica,Arial,system-ui,sans-serif;
  --font-mono:'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;

  --s1:4px; --s2:8px; --s3:12px; --s4:16px; --s5:24px; --s6:32px;
  --s7:48px; --s8:64px; --s9:96px; --s10:128px; --s11:160px;

  --r-sm:${RADIUS.sm}; --r-md:${RADIUS.md}; --r-lg:${RADIUS.lg}; --r-pill:${RADIUS.pill};

  --ease-out:${EASE.out}; --ease-std:${EASE.std}; --ease-in:${EASE.in}; --ease-spring:${EASE.spring};
  --dur-fast:${DUR.fast}ms; --dur-base:${DUR.base}ms; --dur-slow:${DUR.slow}ms; --dur-reveal:${DUR.reveal}ms;

  --gutter:clamp(20px,5vw,64px);
  --maxw:1240px;
  --section-y:clamp(80px,12vh,160px);

  --z-rail:40; --z-nav:50;
}

/* Light — the default editorial canvas */
[data-theme='light']{
  --canvas:#F4F4F2;
  --surface:#FFFFFF;
  --surface-2:#EDEDEA;
  --ink:#0A0A0A;
  --ink-2:#3A3A38;
  --muted:#6B6B68;
  --hairline:#E2E2DE;
  --hairline-strong:#CFCFC9;
  --panel:#0E0E0E;
  --panel-ink:#F4F4F2;
  --panel-muted:#9A9A96;
  --panel-hairline:#242424;
  --accent:#2145E6;
  --accent-ink:#FFFFFF;
  --shadow-card:0 1px 2px rgba(10,10,10,.04);
  --shadow-lift:0 18px 40px -18px rgba(10,10,10,.22);
  color-scheme:light;
}

/* Dark — same structure, inverted ground. Accent lifts for contrast. */
[data-theme='dark']{
  --canvas:#0B0B0B;
  --surface:#131313;
  --surface-2:#1A1A1A;
  --ink:#F4F4F2;
  --ink-2:#C9C9C5;
  --muted:#8E8E8A;
  --hairline:#232323;
  --hairline-strong:#333331;
  --panel:#050505;
  --panel-ink:#F4F4F2;
  --panel-muted:#8E8E8A;
  --panel-hairline:#1E1E1E;
  --accent:#5B77FF;
  --accent-ink:#08080C;
  --shadow-card:0 1px 2px rgba(0,0,0,.5);
  --shadow-lift:0 18px 40px -18px rgba(0,0,0,.7);
  color-scheme:dark;
}

body{
  background:var(--canvas);
  color:var(--ink);
  font-family:var(--font-display);
  font-size:1rem;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}

/* Theme cross-fade. Only applied after mount so first paint never animates. */
.theme-ready body,
.theme-ready .xfade{
  transition:background-color var(--dur-slow) var(--ease-std),
             color var(--dur-slow) var(--ease-std),
             border-color var(--dur-slow) var(--ease-std);
}

::selection{background:var(--accent);color:var(--accent-ink)}

:focus-visible{
  outline:2px solid var(--accent);
  outline-offset:3px;
  border-radius:var(--r-sm);
}

.skip{
  position:absolute;left:var(--s4);top:var(--s4);z-index:100;
  padding:var(--s3) var(--s4);
  background:var(--ink);color:var(--canvas);
  border-radius:var(--r-md);
  transform:translateY(-200%);
}
.skip:focus{transform:none}

.container{
  width:100%;max-width:var(--maxw);margin-inline:auto;
  padding-inline:var(--gutter);
}
.bleed{width:100%}

.section{padding-block:var(--section-y)}
.section--tight{padding-block:clamp(56px,8vh,104px)}

.hr{height:1px;background:var(--hairline);border:0;margin:0}

/* ---- mono micro-label ---- */
.mono{
  font-family:var(--font-mono);
  font-size:.6875rem;
  font-weight:500;
  letter-spacing:.12em;
  text-transform:uppercase;
  line-height:1.4;
}

/* ---- two-line section header: muted label, then the statement ---- */
.sectionHead{max-width:22ch}
.sectionHead .label{
  display:block;
  font-size:clamp(1.5rem,3vw,2.5rem);
  font-weight:600;letter-spacing:-.03em;line-height:1.08;
  color:var(--muted);
}
.sectionHead .statement{
  display:block;
  font-size:clamp(1.5rem,3vw,2.5rem);
  font-weight:600;letter-spacing:-.03em;line-height:1.08;
  color:var(--ink);
  text-wrap:balance;
}
.sectionHead--onPanel .label{color:var(--panel-muted)}
.sectionHead--onPanel .statement{color:var(--panel-ink)}

.splitHead{
  display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:var(--s7);align-items:end;
}
.splitHead > .aside{
  color:var(--muted);font-size:1rem;line-height:1.65;max-width:46ch;
  justify-self:end;
}

/* ---- reveal on scroll: opacity + transform only, fires once ---- */
/* Hiding is applied by JS (the .has-reveal gate), never by the stylesheet
   alone. If scripting or IntersectionObserver is unavailable, every .reveal
   simply renders visible instead of being stranded at opacity 0. */
.has-reveal .reveal{opacity:0;transform:translate3d(0,18px,0)}
.has-reveal .reveal.is-in{
  opacity:1;transform:none;
  transition:opacity var(--dur-reveal) var(--ease-out),
             transform var(--dur-reveal) var(--ease-out);
  transition-delay:var(--reveal-delay,0ms);
}

/* =============================== NAV =============================== */
.nav{
  position:fixed;inset:0 0 auto 0;z-index:var(--z-nav);
  display:flex;align-items:center;justify-content:space-between;
  gap:var(--s4);
  padding:var(--s4) var(--gutter);
  background:color-mix(in srgb, var(--canvas) 82%, transparent);
  backdrop-filter:saturate(140%) blur(12px);
  border-bottom:1px solid transparent;
}
.nav.is-stuck{border-bottom-color:var(--hairline)}
.monogram{
  display:grid;place-items:center;
  width:32px;height:32px;
  border-radius:var(--r-md);
  background:var(--ink);color:var(--canvas);
  font-weight:800;font-size:.9375rem;letter-spacing:-.02em;
  transition:transform var(--dur-base) var(--ease-out);
}
.monogram:hover{transform:translateY(-1px)}
.navRight{display:flex;align-items:center;gap:var(--s5)}
.navLink{
  display:inline-flex;align-items:center;gap:var(--s2);
  color:var(--ink);
}
.navLink .dot{
  width:6px;height:6px;border-radius:50%;background:var(--accent);
  flex:none;
}
.navLink:hover{color:var(--accent)}

/* Primary call to action in the bar. Filled, not a quiet text link. */
.ctaBook{
  display:inline-flex;align-items:center;gap:var(--s2);
  padding:var(--s3) var(--s4);
  border-radius:var(--r-pill);
  background:var(--ink);
  color:var(--canvas);
  font-weight:500;
  border:1px solid var(--ink);
  transition:transform var(--dur-base) var(--ease-out),
             background-color var(--dur-base) var(--ease-std),
             opacity var(--dur-base) var(--ease-std);
}
.ctaBook svg{transition:transform var(--dur-base) var(--ease-out)}
.ctaBook:hover{transform:translate3d(0,-1px,0);opacity:.92}
.ctaBook:hover svg{transform:translateX(3px)}
.ctaBook .ctaDot{
  width:6px;height:6px;border-radius:50%;flex:none;
  background:var(--accent);
}
[data-theme='dark'] .ctaBook .ctaDot{background:var(--accent)}

/* ---- booking dialog ---- */
.bookingScrim{
  position:fixed;inset:0;z-index:60;
  display:grid;place-items:center;
  padding:var(--s4);
  background:rgba(10,10,10,.55);
  backdrop-filter:blur(4px);
}
.bookingScrim.is-animated{animation:scrimIn var(--dur-base) var(--ease-out) both}
@keyframes scrimIn{from{opacity:0}to{opacity:1}}
.bookingPanel{
  /* Wide and tall enough for Cal.com's month view plus its slot column;
     below this the embed starts clipping its own layout. */
  width:min(1080px,100%);
  max-height:min(94vh,940px);
  display:flex;flex-direction:column;
  background:var(--surface);
  border:1px solid var(--hairline-strong);
  border-radius:var(--r-lg);
  overflow:hidden;
  box-shadow:0 40px 80px -32px rgba(0,0,0,.5);
}
.bookingScrim.is-animated .bookingPanel{
  animation:panelIn var(--dur-slow) var(--ease-out) both;
}
@keyframes panelIn{
  from{opacity:0;transform:translate3d(0,12px,0) scale(.99)}
  to{opacity:1;transform:none}
}
.bookingHead{
  display:flex;align-items:flex-start;justify-content:space-between;
  gap:var(--s4);
  padding:var(--s5);
  border-bottom:1px solid var(--hairline);
}
.bookingTitle{
  font-size:1.25rem;font-weight:600;letter-spacing:-.025em;color:var(--ink);
}
.bookingSub{margin-top:var(--s2);color:var(--muted);font-size:.9375rem;max-width:44ch}
.bookingFrame{position:relative;flex:1;min-height:640px;background:var(--surface)}
.bookingFrame iframe{
  position:absolute;inset:0;
  width:100%;height:100%;
  border:0;
}
.bookingLoading{
  position:absolute;inset:0;
  display:grid;place-items:center;
  color:var(--muted);
}
.bookingFoot{
  padding:var(--s4) var(--s5);
  border-top:1px solid var(--hairline);
}
.bookingFoot .textLink{display:inline-flex;align-items:center;gap:var(--s2)}

@media (max-width:640px){
  .bookingScrim{padding:0;place-items:stretch}
  .bookingPanel{max-height:100dvh;border:0;border-radius:0;width:100%}
  .bookingFrame{min-height:0}
  .bookingHead{padding:var(--s4)}
  .bookingSub{display:none}
}

.themeToggle{
  position:relative;
  width:44px;height:24px;flex:none;
  border-radius:var(--r-pill);
  background:var(--surface-2);
  border:1px solid var(--hairline-strong);
}
.themeToggle .knob{
  position:absolute;top:2px;left:2px;
  width:18px;height:18px;border-radius:50%;
  background:var(--ink);
  display:grid;place-items:center;
  color:var(--canvas);
  transition:transform var(--dur-slow) var(--ease-spring);
}
[data-theme='dark'] .themeToggle .knob{transform:translateX(20px)}

/* =============================== HERO =============================== */
.hero{padding-top:clamp(112px,18vh,200px);padding-bottom:clamp(48px,7vh,88px)}
.heroName{
  font-size:clamp(2.75rem,9.2vw,7.5rem);
  font-weight:700;letter-spacing:-.045em;line-height:.92;
  color:var(--ink);
}
.heroName .word{display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:.06em}
.heroName .word + .word{margin-left:.28em}
.heroName .wordInner{
  display:inline-block;
  transform:translate3d(0,110%,0);
}
.is-loaded .heroName .wordInner{
  transform:none;
  transition:transform ${DUR.hero}ms var(--ease-out);
  transition-delay:var(--word-delay,0ms);
}
.typeLine{
  display:flex;align-items:baseline;gap:0;
  margin-top:.06em;
  font-size:clamp(2.75rem,9.2vw,7.5rem);
  font-weight:700;letter-spacing:-.045em;line-height:1;
  color:var(--muted);
  min-height:1em;
}
.typeLine .typed{white-space:pre}
.caret{
  display:inline-block;
  margin-left:.035em;
  width:.055em;height:.82em;
  background:var(--accent);
  translate:0 .04em;
  animation:blink 1.06s steps(1,end) infinite;
}
@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}

.heroLower{
  display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:var(--s7);
  margin-top:clamp(40px,6vh,80px);
  align-items:end;
}
.heroBio{
  grid-column:2;justify-self:end;
  max-width:46ch;color:var(--ink-2);
  font-size:1.0625rem;line-height:1.62;
}
.scrollHint{
  display:inline-flex;align-items:center;gap:var(--s2);
  color:var(--muted);
  grid-column:1;align-self:end;
}
.scrollHint svg{transform:rotate(90deg)}

/* ---- logo strip ---- */
.logoStrip{
  display:flex;flex-wrap:wrap;align-items:center;
  gap:clamp(20px,4vw,48px);
  padding-block:var(--s7);
  border-top:1px solid var(--hairline);
  border-bottom:1px solid var(--hairline);
}
.logoRotator{
  display:grid;
  border-top:1px solid var(--hairline);
  border-bottom:1px solid var(--hairline);
}
.logoRotator .logoPage{
  grid-area:1 / 1;
  /* A page always holds exactly perPage marks, so spreading them reads as an
     even row. The reduced-motion strip wraps all eight and stays left-aligned,
     where space-between would strand a partial last row across the width. */
  justify-content:space-between;
  border:0;
  opacity:0;
  pointer-events:none;
  transform:translate3d(0,6px,0);
  transition:opacity var(--dur-slow) var(--ease-std),
             transform var(--dur-slow) var(--ease-out);
}
.logoRotator .logoPage.is-active{opacity:1;transform:none;pointer-events:auto}
.logoStrip li{opacity:.62;transition:opacity var(--dur-base) var(--ease-std)}
.logoStrip li:hover{opacity:1}
.wordmark{height:24px;width:auto;color:var(--ink)}
.wordmark--lg{height:34px}
`

const STYLES_HOME = `
/* ============================ SPOTLIGHT ============================ */
.spotlight{
  position:relative;
  background:var(--panel);
  color:var(--panel-ink);
  border-radius:var(--r-lg);
  overflow:hidden;
  isolation:isolate;
}
.spotlightMedia{
  position:absolute;inset:-12% 0;
  z-index:0;
  will-change:transform;
}
.spotlightMedia > *{width:100%;height:100%;object-fit:cover}
.spotlightMedia::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(5,5,5,.55) 0%,rgba(5,5,5,.35) 45%,rgba(5,5,5,.9) 100%);
}
.spotlightInner{
  position:relative;z-index:1;
  display:flex;flex-direction:column;justify-content:space-between;
  gap:var(--s9);
  padding:clamp(28px,4.5vw,72px);
  min-height:clamp(420px,62vh,660px);
}
.spotlightEyebrow{color:var(--panel-muted)}
.spotlightStatement{
  font-size:clamp(1.5rem,3.4vw,2.75rem);
  font-weight:600;letter-spacing:-.03em;line-height:1.12;
  max-width:24ch;text-wrap:balance;
}
.statRow{
  display:flex;flex-wrap:wrap;gap:clamp(24px,4vw,72px);
  padding-top:var(--s5);
  border-top:1px solid var(--panel-hairline);
}
.stat{display:flex;flex-direction:column-reverse}
.stat .value{
  display:block;
  font-size:clamp(1.75rem,3.2vw,2.75rem);
  font-weight:700;letter-spacing:-.03em;line-height:1;
}
.stat .label{display:block;margin-top:var(--s2);color:var(--panel-muted)}
.spotFoot{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:var(--s5)}

.viewCase{
  display:inline-flex;align-items:center;gap:var(--s3);
  padding:var(--s3) var(--s5);
  border:1px solid var(--panel-hairline);
  border-radius:var(--r-pill);
  color:var(--panel-ink);
  background:rgba(255,255,255,.04);
  transition:background-color var(--dur-base) var(--ease-std),
             border-color var(--dur-base) var(--ease-std);
}
.viewCase svg{transition:transform var(--dur-base) var(--ease-out)}
.viewCase:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.34)}
.viewCase:hover svg{transform:translateX(3px)}

/* ========================= PROJECT GRID ========================= */
.projectGrid{
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
  gap:var(--s5);
  margin-top:var(--s5);
}
.projectCard{
  display:flex;flex-direction:column;
  background:var(--surface);
  border:1px solid var(--hairline);
  border-radius:var(--r-lg);
  overflow:hidden;
  text-align:left;
  transition:transform var(--dur-slow) var(--ease-out),
             box-shadow var(--dur-slow) var(--ease-out),
             border-color var(--dur-slow) var(--ease-std);
  box-shadow:var(--shadow-card);
}
.projectCard:hover{
  transform:translate3d(0,-4px,0);
  box-shadow:var(--shadow-lift);
  border-color:var(--hairline-strong);
}
.cardTop{
  display:flex;align-items:center;justify-content:space-between;
  gap:var(--s4);
  padding:var(--s5) var(--s5) 0;
  color:var(--muted);
}
.cardMarkWrap{
  display:grid;place-items:center;
  padding:clamp(40px,7vw,88px) var(--s5);
  /* fixed-radius clip: the mark scales inside, the frame never moves */
  border-radius:var(--r-md);
  overflow:hidden;
}
.cardMarkWrap > *{
  transition:transform ${DUR.reveal}ms var(--ease-out);
  will-change:transform;
}
.projectCard:hover .cardMarkWrap > *{transform:scale(1.045)}
.cardBody{
  padding:0 var(--s5) var(--s5);
  border-top:1px solid var(--hairline);
  margin-top:auto;
}
.cardBody p{
  padding-top:var(--s4);
  color:var(--ink-2);font-size:.9375rem;line-height:1.6;max-width:44ch;
}
.cardCta{
  display:inline-flex;align-items:center;gap:var(--s2);
  margin-top:var(--s4);color:var(--ink);
}
.cardCta svg{transition:transform var(--dur-base) var(--ease-out)}
.projectCard:hover .cardCta svg{transform:translateX(3px)}

/* ============================== BITS ============================== */
.bitsRows{
  margin-top:clamp(32px,5vh,56px);
  display:grid;
  gap:var(--s7);
  min-width:0;
}
/* A grid item defaults to min-width:auto, so without this the cluster
   inflates to the row's min-content width (4 tiles + gaps) and pushes the
   whole document sideways instead of letting the row scroll inside it. */
.bitsCluster{min-width:0}
.bitsRow{
  min-width:0;
  display:flex;
  /* stretch, so every card in a row ends at the same baseline regardless of
     how long its caption runs */
  align-items:stretch;
  gap:var(--s5);
  overflow-x:auto;
  scroll-snap-type:x mandatory;
  scrollbar-width:none;
  -ms-overflow-style:none;
  overscroll-behavior-x:contain;
  padding-bottom:var(--s2);
}
.bitsRow::-webkit-scrollbar{display:none}
.bitsRow > .bitTile{flex:1 1 0;min-width:212px;scroll-snap-align:start}
.rowHead{
  display:flex;align-items:center;justify-content:space-between;
  gap:var(--s4);
  margin-bottom:var(--s4);
  color:var(--muted);
}
.arrowPair{display:flex;gap:var(--s2)}
.iconBtn{
  display:grid;place-items:center;
  width:32px;height:32px;flex:none;
  border:1px solid var(--hairline-strong);
  border-radius:var(--r-pill);
  color:var(--ink);
  transition:background-color var(--dur-fast) var(--ease-std),
             border-color var(--dur-fast) var(--ease-std),
             opacity var(--dur-fast) var(--ease-std);
}
.iconBtn:hover:not(:disabled){background:var(--surface);border-color:var(--ink)}
.iconBtn:disabled{opacity:.32;cursor:not-allowed}

.bitTile{
  display:flex;flex-direction:column;gap:var(--s3);
  background:var(--surface);
  border:1px solid var(--hairline);
  border-radius:var(--r-lg);
  overflow:hidden;
  box-shadow:var(--shadow-card);
  transition:transform var(--dur-slow) var(--ease-out),
             box-shadow var(--dur-slow) var(--ease-out);
}
.bitTile:hover{transform:translate3d(0,-3px,0);box-shadow:var(--shadow-lift)}
.bitMedia{
  border-radius:0;
  overflow:hidden;
  background:var(--surface-2);
}
.bitMedia > *{transition:transform ${DUR.reveal}ms var(--ease-out);will-change:transform}
.bitTile:hover .bitMedia > *{transform:scale(1.04)}
.bitBody{
  padding:0 var(--s4) var(--s4);
  display:flex;flex-direction:column;gap:var(--s2);
  flex:1;
}
.bitBody .kicker{color:var(--accent)}
.bitBody p{color:var(--ink-2);font-size:.875rem;line-height:1.55}

/* ============================== ABOUT ============================== */
.aboutCard{
  display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);
  gap:clamp(32px,5vw,80px);
  align-items:center;
  background:var(--panel);
  color:var(--panel-ink);
  border-radius:var(--r-lg);
  padding:clamp(28px,4.5vw,72px);
  overflow:hidden;
}
.aboutCard h3{
  font-size:clamp(1.5rem,3vw,2.25rem);
  font-weight:600;letter-spacing:-.03em;line-height:1.14;
  max-width:20ch;text-wrap:balance;
}
.aboutCard p{color:var(--panel-muted);line-height:1.65;max-width:52ch}
.aboutCopy{display:flex;flex-direction:column;gap:var(--s5)}
.aboutBody{display:flex;flex-direction:column;gap:var(--s4)}
.btnRow{display:flex;flex-wrap:wrap;gap:var(--s3);margin-top:var(--s2)}
.btn{
  display:inline-flex;align-items:center;gap:var(--s3);
  padding:var(--s3) var(--s5);
  border-radius:var(--r-pill);
  border:1px solid transparent;
  background:var(--panel-ink);color:var(--panel);
  font-weight:500;
  transition:transform var(--dur-base) var(--ease-out),
             opacity var(--dur-base) var(--ease-std);
}
.btn:hover{transform:translate3d(0,-2px,0);opacity:.92}
.btn--ghost{
  background:transparent;color:var(--panel-ink);
  border-color:var(--panel-hairline);
}
.btn--ghost:hover{border-color:rgba(255,255,255,.4);opacity:1}
.aboutPortrait{
  border-radius:var(--r-md);
  overflow:hidden;
}

/* =========================== TESTIMONIALS =========================== */
.quoteWrap{display:flex;flex-direction:column;gap:var(--s6);min-height:1px}
.quoteMark{
  font-family:var(--font-display);
  font-weight:700;
  font-size:clamp(3.5rem,7vw,5.5rem);
  line-height:.62;color:var(--hairline-strong);
  user-select:none;
}
.quoteViewport{position:relative}
.quoteBody{
  font-size:clamp(1.0625rem,1.7vw,1.375rem);
  line-height:1.55;letter-spacing:-.011em;color:var(--ink);
  max-width:48ch;
}
.quoteAttr{
  margin-top:var(--s5);
  display:flex;align-items:center;gap:var(--s3);
}
.quoteWho{display:flex;flex-direction:column;gap:2px;min-width:0}
.avatar{
  width:44px;height:44px;flex:none;
  border-radius:50%;
  object-fit:cover;
  background:var(--surface-2);
  border:1px solid var(--hairline-strong);
}
.avatar--initials{
  display:grid;place-items:center;
  font-size:.8125rem;font-weight:600;letter-spacing:.02em;
  color:var(--muted);
}
.quoteName{font-weight:600;letter-spacing:-.015em;color:var(--ink)}
.quoteRole{color:var(--muted)}
.quoteFoot{
  display:flex;align-items:center;justify-content:space-between;
  gap:var(--s5);margin-top:var(--s6);
  padding-top:var(--s5);border-top:1px solid var(--hairline);
}
.dots{display:flex;gap:var(--s2)}
.dot{
  width:24px;height:3px;border-radius:var(--r-pill);
  background:var(--hairline-strong);
  transition:background-color var(--dur-base) var(--ease-std),
             transform var(--dur-base) var(--ease-out);
}
.dot[aria-current='true']{background:var(--ink);transform:scaleY(1.6)}

/* ============================= JOURNAL ============================= */
.postRow{
  display:grid;
  grid-template-columns:120px minmax(0,180px) minmax(0,1fr) 40px;
  gap:var(--s5);align-items:center;
  padding-block:var(--s5);
  border-top:1px solid var(--hairline);
  text-align:left;width:100%;
}
.postRow:last-child{border-bottom:1px solid var(--hairline)}
.postThumb{border-radius:var(--r-sm);overflow:hidden;width:120px}
.postMeta{display:flex;flex-direction:column;gap:var(--s3);color:var(--muted)}
.chips{display:flex;flex-wrap:wrap;gap:var(--s2)}
.chip{
  display:inline-block;
  padding:3px var(--s3);
  border:1px solid var(--hairline-strong);
  border-radius:var(--r-pill);
  color:var(--muted);
}
.postTitle{
  font-size:clamp(1.0625rem,1.7vw,1.3125rem);
  font-weight:600;letter-spacing:-.02em;line-height:1.3;color:var(--ink);
}
.postDek{margin-top:var(--s2);color:var(--muted);font-size:.9375rem;line-height:1.55;max-width:60ch}
.postRow .go{
  justify-self:end;color:var(--muted);
  transition:transform var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-std);
}
.postRow:hover .go{transform:translateX(3px);color:var(--ink)}

/* ============================= CONTACT ============================= */
.form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--s5)}
.field{display:flex;flex-direction:column;gap:var(--s2)}
.field--full{grid-column:1 / -1}
.field label{color:var(--muted)}
.control{
  width:100%;
  padding:var(--s3) 0;
  background:transparent;
  border:0;border-bottom:1px solid var(--hairline-strong);
  border-radius:0;
  font-size:1rem;
  transition:border-color var(--dur-base) var(--ease-std);
}
.control::placeholder{color:var(--muted);opacity:.7}
.control:focus{outline:none;border-bottom-color:var(--accent)}
.control:focus-visible{outline:none}
textarea.control{min-height:120px;resize:vertical;line-height:1.6}
.field[data-invalid='true'] .control{border-bottom-color:#C0392B}
[data-theme='dark'] .field[data-invalid='true'] .control{border-bottom-color:#FF6B5B}
.fieldError{color:#C0392B}
[data-theme='dark'] .fieldError{color:#FF8B7D}
.formFoot{grid-column:1 / -1;display:flex;flex-wrap:wrap;align-items:center;gap:var(--s5)}
.submit{
  display:inline-flex;align-items:center;gap:var(--s3);
  padding:var(--s4) var(--s6);
  background:var(--ink);color:var(--canvas);
  border-radius:var(--r-pill);font-weight:500;
  transition:transform var(--dur-base) var(--ease-out),opacity var(--dur-base) var(--ease-std);
}
.submit:hover:not(:disabled){transform:translate3d(0,-2px,0)}
.submit:disabled{opacity:.55;cursor:progress}
.formStatus{color:var(--muted)}
.successCard{
  border:1px solid var(--hairline-strong);
  border-radius:var(--r-lg);
  padding:clamp(24px,3.5vw,40px);
  background:var(--surface);
  display:flex;flex-direction:column;gap:var(--s3);
  align-items:flex-start;
}
.successCard h3{font-size:1.25rem;font-weight:600;letter-spacing:-.02em}
.successCard--failed{border-color:#C0392B}
[data-theme='dark'] .successCard--failed{border-color:#FF6B5B}
.successCard p{color:var(--muted);max-width:48ch}
.textLink{
  color:var(--ink);
  border-bottom:1px solid var(--hairline-strong);
  transition:border-color var(--dur-base) var(--ease-std),color var(--dur-base) var(--ease-std);
}
.textLink:hover{color:var(--accent);border-bottom-color:var(--accent)}

/* ========================== FOOTER + RAIL ========================== */
.footer{padding-bottom:clamp(96px,14vh,152px)}
.footerTop{
  display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;
  gap:var(--s5);
  padding-block:var(--s6);
  border-top:1px solid var(--hairline);
}
.socials{display:flex;gap:var(--s3)}
.socialBtn{
  display:grid;place-items:center;width:36px;height:36px;
  border:1px solid var(--hairline);border-radius:var(--r-pill);
  color:var(--muted);
  transition:color var(--dur-base) var(--ease-std),border-color var(--dur-base) var(--ease-std),transform var(--dur-base) var(--ease-out);
}
.socialBtn:hover{color:var(--ink);border-color:var(--ink);transform:translateY(-2px)}
.copyright{color:var(--muted)}

.railDock{
  position:fixed;left:0;right:0;bottom:var(--s5);
  z-index:var(--z-rail);
  display:flex;justify-content:center;
  padding-inline:var(--s4);
  pointer-events:none;
}
.rail{
  position:relative;
  display:flex;align-items:center;gap:2px;
  padding:5px;
  background:color-mix(in srgb, var(--panel) 92%, transparent);
  border:1px solid var(--panel-hairline);
  border-radius:var(--r-pill);
  backdrop-filter:blur(14px) saturate(150%);
  pointer-events:auto;
  max-width:100%;
  overflow-x:auto;
  scrollbar-width:none;
  -ms-overflow-style:none;
  overscroll-behavior-x:contain;
}
.rail::-webkit-scrollbar{display:none}
.railPill{
  position:absolute;top:5px;left:0;
  height:calc(100% - 10px);
  border-radius:var(--r-pill);
  background:rgba(255,255,255,.13);
  opacity:0;
  /* transform carries the slide; width is animated too because rail items
     differ in length. The pill is absolutely positioned and childless, so
     this reflows nothing and distorts no border radius. */
  transition:transform var(--dur-slow) var(--ease-spring),
             width var(--dur-slow) var(--ease-spring),
             opacity var(--dur-fast) var(--ease-std);
  pointer-events:none;
}
.railPill.is-ready{opacity:1}
.railItem{
  position:relative;z-index:1;
  padding:var(--s2) var(--s4);
  border-radius:var(--r-pill);
  color:var(--panel-muted);
  white-space:nowrap;
  transition:color var(--dur-base) var(--ease-std);
}
.railItem:hover{color:var(--panel-ink)}
.railItem[aria-current='true']{color:var(--panel-ink)}

/* On a light canvas a near-black block defines its own edge. On a dark
   canvas it does not, so give the dark blocks a hairline there. */
.spotlight,.systemPanel,.aboutCard{border:1px solid transparent}
[data-theme='dark'] .spotlight,
[data-theme='dark'] .systemPanel,
[data-theme='dark'] .aboutCard{border-color:var(--hairline)}
`

const STYLES_CASE = `
/* ============================ CASE STUDY ============================ */
.caseTop{padding-top:clamp(104px,16vh,168px)}
.backLink{
  display:inline-flex;align-items:center;gap:var(--s2);
  color:var(--muted);margin-bottom:var(--s6);
}
.backLink svg{transition:transform var(--dur-base) var(--ease-out)}
.backLink:hover{color:var(--ink)}
.backLink:hover svg{transform:translateX(-3px)}

.caseHeadGrid{
  display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);
  gap:var(--s7);align-items:end;
}
.caseEyebrow{color:var(--muted);display:block;margin-bottom:var(--s4)}
.caseTitle{
  font-size:clamp(2.25rem,6.2vw,5rem);
  font-weight:700;letter-spacing:-.042em;line-height:.98;
  color:var(--ink);
}
.caseTitle .prefix{display:block;color:var(--muted)}
.caseTitle .subject{display:block;transform-origin:left top}
.casePositioning{
  justify-self:end;max-width:42ch;
  color:var(--ink-2);font-size:1rem;line-height:1.62;
}

/* shared-element flight: transform only, cloned target sits in place */
.subject.is-flying{
  transition:transform ${DUR.hero}ms var(--ease-out);
  will-change:transform;
}

.caseHeroFrame{
  margin-top:clamp(40px,6vh,72px);
  padding:clamp(12px,1.6vw,22px);
  background:var(--surface);
  border:1px solid var(--hairline);
  border-radius:var(--r-lg);
  box-shadow:var(--shadow-card);
}
.caseHeroFrame .inner{border-radius:var(--r-md);overflow:hidden}

.metaBar{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,2fr);
  gap:var(--s5);
  padding-block:var(--s6);
  border-top:1px solid var(--hairline);
  border-bottom:1px solid var(--hairline);
  margin-top:clamp(32px,5vh,56px);
}
.metaCell{display:flex;flex-direction:column;gap:var(--s2)}
.metaCell dt{color:var(--muted)}
.metaCell dd{margin:0;color:var(--ink);font-size:.9375rem;line-height:1.5}

/* ---- narrow prose column, right of the section header ---- */
.caseSplit{
  display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.28fr);
  gap:clamp(32px,6vw,88px);
  align-items:start;
}
.prose{display:flex;flex-direction:column;gap:var(--s4)}
.prose p{color:var(--ink-2);font-size:1rem;line-height:1.68;max-width:62ch}
.prose--onPanel p{color:var(--panel-muted)}
.wideVisual{
  margin-top:clamp(32px,5vh,64px);
  border-radius:var(--r-lg);overflow:hidden;
  border:1px solid var(--hairline);
}

/* ---- process scroller ---- */
.scrollerHead{
  display:flex;align-items:center;justify-content:space-between;
  gap:var(--s5);margin-top:clamp(32px,5vh,56px);
}
.scroller{
  display:grid;
  grid-auto-flow:column;
  grid-auto-columns:minmax(268px,1fr);
  gap:var(--s5);
  margin-top:var(--s5);
  padding-bottom:var(--s3);
  overflow-x:auto;
  scroll-snap-type:x mandatory;
  scrollbar-width:none;
  -ms-overflow-style:none;
  overscroll-behavior-x:contain;
}
.scroller::-webkit-scrollbar{display:none}
.processCard{
  scroll-snap-align:start;
  display:flex;flex-direction:column;gap:var(--s3);
  padding:var(--s5);
  min-height:236px;
  background:var(--surface);
  border:1px solid var(--hairline);
  border-radius:var(--r-lg);
  box-shadow:var(--shadow-card);
}
.processCard .idx{color:var(--accent)}
.processCard h3{
  font-size:1.0625rem;font-weight:600;letter-spacing:-.02em;line-height:1.3;
  color:var(--ink);
}
.processCard .meta{color:var(--muted)}
.processCard p{color:var(--ink-2);font-size:.875rem;line-height:1.6;margin-top:auto}

/* ---- system: dark full-bleed panel with a dense screen grid ---- */
.systemPanel{
  background:var(--panel);
  color:var(--panel-ink);
  border-radius:var(--r-lg);
  padding:clamp(28px,4.5vw,80px);
  overflow:hidden;
}
.systemGrid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:clamp(12px,1.6vw,20px);
  margin-top:clamp(36px,5vh,64px);
}
.systemCell{
  border-radius:var(--r-md);
  overflow:hidden;
  border:1px solid var(--panel-hairline);
  background:#0A0A0A;
}
.systemCell > *{transition:transform ${DUR.reveal}ms var(--ease-out)}
.systemCell:hover > *{transform:scale(1.03)}
.systemCell:nth-child(1){grid-column:span 2;grid-row:span 2}
.systemCell:nth-child(4){grid-column:span 2}

/* ---- extend ---- */
.extendGrid{
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
  gap:clamp(16px,2vw,24px);
  margin-top:clamp(32px,5vh,64px);
}
.extendCell{
  border-radius:var(--r-lg);overflow:hidden;
  border:1px solid var(--hairline);
}

/* ---- case footer nav ---- */
.caseNav{
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
  gap:var(--s5);
  padding-block:var(--s7);
  border-top:1px solid var(--hairline);
}
.caseNavBtn{
  display:flex;flex-direction:column;gap:var(--s2);
  padding:var(--s5);
  border:1px solid var(--hairline);
  border-radius:var(--r-lg);
  background:var(--surface);
  text-align:left;
  transition:transform var(--dur-slow) var(--ease-out),border-color var(--dur-slow) var(--ease-std);
}
.caseNavBtn:hover{transform:translate3d(0,-3px,0);border-color:var(--ink)}
.caseNavBtn--next{text-align:right;align-items:flex-end}
.caseNavBtn .dir{color:var(--muted);display:inline-flex;align-items:center;gap:var(--s2)}
.caseNavBtn .name{
  font-size:clamp(1.125rem,2vw,1.5rem);
  font-weight:600;letter-spacing:-.025em;color:var(--ink);
}

/* ---- view crossfade fallback ---- */
.viewFade{animation:viewIn ${DUR.slow}ms var(--ease-out) both}
@keyframes viewIn{from{opacity:0;transform:translate3d(0,10px,0)}to{opacity:1;transform:none}}

/* ============================ RESPONSIVE ============================ */
@media (max-width:1024px){
  .systemGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .systemCell:nth-child(1),.systemCell:nth-child(4){grid-column:span 2;grid-row:auto}
  .metaBar{grid-template-columns:repeat(2,minmax(0,1fr))}
  .metaCell:last-child{grid-column:1 / -1}
}

@media (max-width:900px){
  .splitHead{grid-template-columns:1fr;gap:var(--s5);align-items:start}
  .splitHead > .aside{justify-self:start}
  .heroLower{grid-template-columns:1fr;gap:var(--s5)}
  .heroBio{grid-column:1;justify-self:start}
  .projectGrid{grid-template-columns:1fr}
  .aboutCard{grid-template-columns:1fr}
  .aboutPortrait{order:-1;max-width:340px}
  .caseHeadGrid{grid-template-columns:1fr;gap:var(--s5);align-items:start}
  .casePositioning{justify-self:start}
  .caseSplit{grid-template-columns:1fr;gap:var(--s5)}
  .extendGrid{grid-template-columns:1fr}
  .caseNav{grid-template-columns:1fr}
  .caseNavBtn--next{text-align:left;align-items:flex-start}
  .form{grid-template-columns:1fr}
  .postRow{
    grid-template-columns:88px minmax(0,1fr);
    grid-template-areas:'thumb meta' 'body body';
    row-gap:var(--s4);
  }
  .postThumb{grid-area:thumb;width:88px}
  .postMeta{grid-area:meta;flex-direction:row;flex-wrap:wrap;align-items:center;gap:var(--s3)}
  .postRow > .postMain{grid-area:body}
  .postRow .go{display:none}
  /* Case screen grids become horizontally scrollable strips on small screens */
  .systemGrid{
    display:flex;
    gap:var(--s3);
    overflow-x:auto;
    scroll-snap-type:x mandatory;
    scrollbar-width:none;
    overscroll-behavior-x:contain;
    padding-bottom:var(--s3);
  }
  .systemGrid::-webkit-scrollbar{display:none}
  .systemCell{flex:0 0 78%;scroll-snap-align:start}
}

@media (max-width:640px){
  .bitsRow > .bitTile{flex:0 0 78%}
  .navRight{gap:var(--s4)}
  .navLink{
    padding:var(--s2) var(--s4);
    border:1px solid var(--hairline-strong);
    border-radius:var(--r-pill);
  }
  .navLink .navLinkText{display:inline}
  .statRow{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:var(--s4);
  }
  .stat .label{font-size:.5625rem;letter-spacing:.08em}
  .railDock{bottom:var(--s3);padding-inline:var(--s3)}
  .rail{justify-content:flex-start}
}

/* ========================= REDUCED MOTION =========================
 * Everything animated is gated here. Nothing moves, nothing fades in
 * from nothing, and the typing headline resolves to a single static role.
 * ================================================================= */
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{
    animation-duration:1ms !important;
    animation-iteration-count:1 !important;
    transition-duration:1ms !important;
    scroll-behavior:auto !important;
  }
  .has-reveal .reveal{opacity:1 !important;transform:none !important}
  .heroName .wordInner{transform:none !important}
  .caret{animation:none;opacity:1}
  .spotlightMedia{transform:none !important}
  .projectCard:hover,.bitTile:hover,.caseNavBtn:hover,.btn:hover,.submit:hover{transform:none}
  .projectCard:hover .cardMarkWrap > *,
  .bitTile:hover .bitMedia > *,
  .systemCell:hover > *{transform:none}
  .viewFade{animation:none}
  .subject.is-flying{transition:none !important;transform:none !important}
}
`

/* =========================================================================
 * Hooks
 * ========================================================================= */

function useStyleSheet() {
  useEffect(() => {
    const el = document.createElement('style')
    el.setAttribute('data-portfolio', '')
    el.textContent = STYLES + STYLES_HOME + STYLES_CASE + STYLES_UTIL
    document.head.appendChild(el)
    return () => el.remove()
  }, [])
}

/** Live prefers-reduced-motion. Every animation in the app reads this. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  useEffect(() => {
    if (!window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/** Theme lives in component state and drives the CSS-variable set. */
function useTheme() {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
  }, [theme])
  // Enable colour transitions only after first paint, so load never animates.
  useEffect(() => {
    const id = requestAnimationFrame(() =>
      document.documentElement.classList.add('theme-ready'),
    )
    return () => cancelAnimationFrame(id)
  }, [])
  const toggle = useCallback(
    () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    [],
  )
  return { theme, toggle }
}

/**
 * Fade-and-rise on scroll into view. Fires once per element, then stops
 * observing — re-entering a section does not replay it.
 */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.querySelectorAll('.reveal')
    if (!targets.length) return

    if (!('IntersectionObserver' in window)) {
      targets.forEach((t) => t.classList.add('is-in'))
      return
    }
    document.documentElement.classList.add('has-reveal')

    // IntersectionObserver delivers an initial callback for every observed
    // target, intersecting or not. So "the callback ran at all" is the signal
    // that the observer works — not "something has revealed yet", which is
    // merely a function of where the page is scrolled and how fast it painted.
    let fired = false

    const io = new IntersectionObserver(
      (entries) => {
        fired = true
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )
    targets.forEach((t) => io.observe(t))

    // Safety net: if the observer never reports at all, it is not working, so
    // drop the gate rather than strand the page at opacity 0.
    //
    // Only armed while the document is visible: a backgrounded tab suspends
    // observer callbacks, and treating that as a broken observer would throw
    // away the reveal for anyone who opens the site in a background tab and
    // switches to it later.
    let guard = 0
    const arm = () => {
      if (document.hidden || fired || guard) return
      guard = window.setTimeout(() => {
        guard = 0
        if (!fired) document.documentElement.classList.remove('has-reveal')
      }, 2500)
    }
    const onVisibility = () => {
      if (document.hidden) {
        window.clearTimeout(guard)
        guard = 0
      } else {
        arm()
      }
    }
    arm()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      io.disconnect()
      window.clearTimeout(guard)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])
  return ref
}

/**
 * Types a phrase, holds at full word, untypes, moves to the next.
 * Under reduced motion it returns roles[0] and no caret movement at all.
 */
function useTypewriter(words, reduced, cfg = {}) {
  const { typeMs = 58, deleteMs = 30, holdMs = 1500, gapMs = 420 } = cfg
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    if (reduced) return
    const word = words[index % words.length]
    let t

    if (phase === 'typing') {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs)
      } else {
        t = setTimeout(() => setPhase('holding'), holdMs)
      }
    } else if (phase === 'holding') {
      t = setTimeout(() => setPhase('deleting'), 0)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteMs)
      } else {
        t = setTimeout(() => {
          setIndex((i) => (i + 1) % words.length)
          setPhase('typing')
        }, gapMs)
      }
    }
    return () => clearTimeout(t)
  }, [text, phase, index, words, reduced, typeMs, deleteMs, holdMs, gapMs])

  // Reduced motion resolves to a single static role — no loop, no timers.
  return reduced ? words[0] : text
}

/** Hash routing: '#/' is home, '#/work/<slug>' is a case study. No router dep. */
function parseHash(hash) {
  const m = /^#\/work\/([a-z0-9-]+)/i.exec(hash || '')
  if (m) return { view: 'case', slug: m[1] }
  return { view: 'home', slug: null }
}

function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

/** Which section is currently in view, for the rail. */
function useScrollSpy(ids, deps) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!nodes.length) return

    const visible = new Map()
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.intersectionRatio))
        let best = null
        let bestRatio = 0
        visible.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        })
        if (best && bestRatio > 0) setActive(best)
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.85], rootMargin: '-18% 0px -38% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return active
}

/** Slow parallax on the spotlight media. rAF-throttled, transform only. */
function useParallax(strength = 0.12, reduced = false) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.parentElement.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // -1 (below fold) .. 1 (above fold)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      const offset = Math.max(-1, Math.min(1, progress)) * rect.height * strength
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength, reduced])
  return ref
}

/* =========================================================================
 * Procedural visuals
 *
 * Every CONTENT.IMAGES entry with `src: null` is drawn here as deterministic
 * SVG. These are art-directed editorial plates — gradient meshes, modular
 * grids, isometric lattices, strata — not screenshots and not placeholders.
 * Give an entry a `src` and the <img> takes over instead.
 * ========================================================================= */

/**
 * Resolves a CONTENT.IMAGES `src` against the deployment base.
 *
 * Write paths WITHOUT a leading slash — 'img/shot.png'. A leading slash
 * resolves from the domain root, which 404s when the site is served from a
 * subfolder (a GitHub Pages project site, say). This prefixes Vite's
 * BASE_URL so the same value works at a domain root and in a subfolder.
 * Absolute URLs and data URIs are passed straight through.
 */
function resolveSrc(src) {
  if (!src) return src
  if (/^([a-z]+:)?\/\//i.test(src) || /^data:/i.test(src)) return src
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/+$/, '')}/${src.replace(/^\/+/, '')}`
}

/** Deterministic PRNG so a given seed always draws the same composition. */
function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const PLATE_PALETTE = {
  dark: {
    bg0: '#15151A', bg1: '#07070A',
    line: 'rgba(255,255,255,0.17)', line2: 'rgba(255,255,255,0.07)',
    fill: 'rgba(255,255,255,0.055)', fill2: 'rgba(255,255,255,0.135)',
    accent: '#4665FF', glow: '#2145E6', grain: 0.16,
  },
  light: {
    bg0: '#FAFAF8', bg1: '#E4E4DF',
    line: 'rgba(10,10,10,0.26)', line2: 'rgba(10,10,10,0.11)',
    fill: 'rgba(10,10,10,0.05)', fill2: 'rgba(10,10,10,0.12)',
    accent: '#2145E6', glow: '#2145E6', grain: 0.07,
  },
  accent: {
    bg0: '#18225F', bg1: '#06091B',
    line: 'rgba(255,255,255,0.19)', line2: 'rgba(255,255,255,0.08)',
    fill: 'rgba(255,255,255,0.075)', fill2: 'rgba(150,175,255,0.22)',
    accent: '#8AA0FF', glow: '#3B5BFF', grain: 0.14,
  },
}

/* ---- individual plate generators: (rnd, W, H, p) -> array of elements ---- */

function drawLattice(rnd, W, H, p) {
  const cw = W / 11
  const ch = cw * 0.5
  const ox = W * 0.52
  const oy = H * 0.2
  const out = []
  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 9; i++) {
      const x = ox + (i - j) * cw
      const y = oy + (i + j) * ch * 0.66
      if (x < -cw * 2 || x > W + cw * 2 || y > H + ch * 6) continue
      const r = rnd()
      const h = 6 + r * r * H * 0.22
      const depth = Math.min(1, Math.max(0, y / (H * 1.15)))
      const o = 0.25 + depth * 0.75
      const key = `l${i}-${j}`
      out.push(
        <g key={key} opacity={o.toFixed(3)}>
          <polygon
            points={`${x},${y - h} ${x + cw},${y - h + ch} ${x},${y - h + ch * 2} ${x - cw},${y - h + ch}`}
            fill={p.fill2}
          />
          <polygon
            points={`${x - cw},${y - h + ch} ${x},${y - h + ch * 2} ${x},${y + ch * 2} ${x - cw},${y + ch}`}
            fill={p.fill}
          />
          <polygon
            points={`${x},${y - h + ch * 2} ${x + cw},${y - h + ch} ${x + cw},${y + ch} ${x},${y + ch * 2}`}
            fill="rgba(0,0,0,0.34)"
          />
          {r > 0.87 && (
            <line
              x1={x - cw} y1={y - h + ch} x2={x} y2={y - h + ch * 2}
              stroke={p.accent} strokeWidth={1.4} opacity="0.9"
            />
          )}
        </g>,
      )
    }
  }
  return out
}

function drawMesh(rnd, W, H, p, id) {
  const blobs = []
  // Radius is keyed to width, not min(W,H). This plate also renders in the
  // spotlight's fill mode, where the frame can be far taller than it is wide —
  // keying off the shorter side there made every blob as wide as the panel and
  // flooded it, leaving no dark ground for the type to sit on.
  for (let i = 0; i < 4; i++) {
    const cx = W * (0.08 + rnd() * 0.84)
    const cy = H * (0.08 + rnd() * 0.84)
    const r = W * (0.16 + rnd() * 0.3)
    blobs.push(
      <circle key={`b${i}`} cx={cx} cy={cy} r={r} fill={`url(#${id}-rg${i % 3})`} />,
    )
  }
  // Square-ish cells at any aspect, rather than stretching a 9-row grid.
  const cell = W / 12
  const lines = []
  for (let i = 1; i * cell < H; i++) {
    lines.push(
      <line key={`h${i}`} x1="0" y1={i * cell} x2={W} y2={i * cell}
        stroke={p.line2} strokeWidth="1" />,
    )
  }
  for (let i = 1; i < 12; i++) {
    lines.push(
      <line key={`v${i}`} x1={i * cell} y1="0" x2={i * cell} y2={H}
        stroke={p.line2} strokeWidth="1" />,
    )
  }
  return [
    <g key="blobs">{blobs}</g>,
    <g key="lines" opacity="0.7">{lines}</g>,
  ]
}

function drawGrid(rnd, W, H, p) {
  const cols = 12
  const rows = Math.max(4, Math.round((cols * H) / W))
  const cwid = W / cols
  const chei = H / rows
  const out = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = rnd()
      if (v > 0.84) {
        out.push(
          <rect key={`f${r}-${c}`} x={c * cwid} y={r * chei} width={cwid} height={chei}
            fill={v > 0.965 ? p.accent : p.fill2} opacity={v > 0.965 ? 0.85 : 1} />,
        )
      } else if (v > 0.7) {
        out.push(
          <rect key={`f${r}-${c}`} x={c * cwid} y={r * chei} width={cwid} height={chei}
            fill={p.fill} />,
        )
      }
    }
  }
  for (let c = 0; c <= cols; c++) {
    out.push(<line key={`vl${c}`} x1={c * cwid} y1="0" x2={c * cwid} y2={H}
      stroke={p.line2} strokeWidth="1" />)
  }
  for (let r = 0; r <= rows; r++) {
    out.push(<line key={`hl${r}`} x1="0" y1={r * chei} x2={W} y2={r * chei}
      stroke={p.line2} strokeWidth="1" />)
  }
  return out
}

function drawStrata(rnd, W, H, p) {
  const out = []
  let y = H * 0.06
  let i = 0
  while (y < H * 0.96 && i < 26) {
    const h = H * (0.012 + rnd() * 0.07)
    const inset = W * (rnd() * 0.16)
    const v = rnd()
    out.push(
      <rect key={`s${i}`} x={inset} y={y} width={W - inset - W * (rnd() * 0.1)} height={h}
        fill={v > 0.9 ? p.accent : v > 0.6 ? p.fill2 : p.fill}
        opacity={v > 0.9 ? 0.9 : 1} rx="1" />,
    )
    y += h + H * (0.008 + rnd() * 0.024)
    i += 1
  }
  return out
}

function drawPortrait(rnd, W, H, p, id) {
  const cx = W * 0.5
  const headR = W * 0.155
  const headCy = H * 0.3
  return [
    // light behind the figure
    <ellipse key="halo" cx={cx} cy={H * 0.3} rx={W * 0.44} ry={H * 0.32}
      fill={`url(#${id}-rg0)`} />,
    // shoulders, sitting lower and wider so a neck gap stays readable
    <path key="shoulders"
      d={`M ${cx - W * 0.46} ${H} C ${cx - W * 0.42} ${H * 0.76} ${cx - W * 0.23} ${H * 0.62} ${cx} ${H * 0.62} C ${cx + W * 0.23} ${H * 0.62} ${cx + W * 0.42} ${H * 0.76} ${cx + W * 0.46} ${H} Z`}
      fill={`url(#${id}-lg1)`} />,
    // neck
    <rect key="neck" x={cx - W * 0.06} y={headCy + headR * 0.6} width={W * 0.12}
      height={H * 0.14} fill={`url(#${id}-lg1)`} opacity="0.8" />,
    // head
    <circle key="head" cx={cx} cy={headCy} r={headR} fill={`url(#${id}-rg1)`} />,
    <circle key="headEdge" cx={cx} cy={headCy} r={headR} fill="none"
      stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />,
    // single hard rim light down one side, the way a studio portrait is lit
    <path key="rim"
      d={`M ${cx - headR * 0.95} ${headCy - headR * 0.35} A ${headR} ${headR} 0 0 0 ${cx - headR * 0.5} ${headCy + headR * 0.86}`}
      fill="none" stroke={p.accent} strokeWidth="3" opacity="0.75" strokeLinecap="round" />,
    <rect key="scan" width={W} height={H} fill={`url(#${id}-scan)`} opacity="0.42" />,
  ]
}

function drawOrbit(rnd, W, H, p) {
  const cx = W * 0.5
  const cy = H * 0.54
  const out = []
  const maxR = Math.min(W, H) * 0.62
  for (let i = 1; i <= 9; i++) {
    const r = (i / 9) * maxR
    const start = rnd() * Math.PI * 2
    const sweep = 0.6 + rnd() * 4.4
    const x1 = cx + r * Math.cos(start)
    const y1 = cy + r * Math.sin(start)
    const x2 = cx + r * Math.cos(start + sweep)
    const y2 = cy + r * Math.sin(start + sweep)
    const large = sweep > Math.PI ? 1 : 0
    out.push(
      <path key={`a${i}`}
        d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`}
        fill="none"
        stroke={i === 6 ? p.accent : p.line}
        strokeWidth={i === 6 ? 2.4 : 1.3}
        opacity={i === 6 ? 0.95 : 0.5 + (i / 9) * 0.4}
        strokeLinecap="round" />,
    )
  }
  out.push(<circle key="core" cx={cx} cy={cy} r={Math.min(W, H) * 0.028} fill={p.accent} opacity="0.9" />)
  return out
}

function drawPanels(rnd, W, H, p) {
  const out = []
  for (let i = 0; i < 4; i++) {
    const w = W * (0.34 + rnd() * 0.3)
    const h = H * (0.4 + rnd() * 0.4)
    const x = W * 0.06 + i * (W * 0.16) * (rnd() > 0.5 ? 1 : 0.7)
    const y = H * 0.08 + rnd() * (H * 0.3)
    out.push(
      <g key={`p${i}`} opacity={(0.5 + i * 0.14).toFixed(2)}>
        <rect x={x} y={y} width={Math.min(w, W - x - 6)} height={Math.min(h, H - y - 6)}
          rx={Math.min(W, H) * 0.02} fill={p.fill} stroke={p.line} strokeWidth="1" />
        {[0, 1, 2, 3].map((b) => (
          <rect key={b}
            x={x + W * 0.02} y={y + H * 0.06 + b * (H * 0.075)}
            width={Math.min(w, W - x - 6) * (0.3 + rnd() * 0.55)}
            height={Math.max(2, H * 0.014)}
            rx="1"
            fill={b === 0 ? p.accent : p.fill2}
            opacity={b === 0 ? 0.8 : 1} />
        ))}
      </g>,
    )
  }
  return out
}

function drawColumns(rnd, W, H, p) {
  const n = 16
  const gap = W * 0.012
  const bw = (W - gap * (n + 1)) / n
  const out = []
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1)
    const h = H * (0.1 + Math.pow(t, 1.7) * 0.78) * (0.82 + rnd() * 0.28)
    const x = gap + i * (bw + gap)
    out.push(
      <rect key={`c${i}`} x={x} y={H - h - H * 0.08} width={bw} height={h}
        rx={Math.min(2, bw * 0.12)}
        fill={i === n - 1 ? p.accent : p.fill2}
        opacity={i === n - 1 ? 0.92 : 0.5 + t * 0.5} />,
    )
  }
  out.push(<line key="base" x1="0" y1={H - H * 0.08} x2={W} y2={H - H * 0.08}
    stroke={p.line} strokeWidth="1" />)
  return out
}

function drawWeave(rnd, W, H, p) {
  const out = []
  for (let i = 0; i < 9; i++) {
    const y = H * (0.08 + i * 0.1)
    const w = W * (0.35 + rnd() * 0.6)
    out.push(
      <rect key={`h${i}`} x={W * (rnd() * 0.2)} y={y} width={Math.min(w, W)} height={H * 0.032}
        rx={H * 0.016} fill={i === 4 ? p.accent : p.fill2}
        opacity={i === 4 ? 0.9 : 0.42 + rnd() * 0.4} />,
    )
  }
  for (let i = 0; i < 11; i++) {
    const x = W * (0.05 + i * 0.088)
    const h = H * (0.3 + rnd() * 0.6)
    out.push(
      <rect key={`v${i}`} x={x} y={H * (rnd() * 0.25)} width={W * 0.014} height={Math.min(h, H)}
        rx={W * 0.007} fill={p.fill} opacity={0.5 + rnd() * 0.5} />,
    )
  }
  return out
}

function drawRamp(rnd, W, H, p, id) {
  const pts = []
  const n = 26
  for (let i = 0; i <= n; i++) {
    const t = i / n
    // decay with periodic refills — reads as an energy or funnel curve
    const decay = 1 - t * 0.72
    const wobble = Math.sin(t * Math.PI * 3.1) * 0.1 + (rnd() - 0.5) * 0.05
    const v = Math.max(0.06, Math.min(1, decay + wobble))
    pts.push(`${(t * W).toFixed(1)},${(H - v * H * 0.78 - H * 0.08).toFixed(1)}`)
  }
  const line = pts.join(' ')
  return [
    <polygon key="area" points={`0,${H} ${line} ${W},${H}`} fill={`url(#${id}-lg0)`} />,
    <polyline key="line" points={line} fill="none" stroke={p.accent} strokeWidth="2.2"
      strokeLinejoin="round" strokeLinecap="round" opacity="0.95" />,
    <line key="base" x1="0" y1={H - H * 0.08} x2={W} y2={H - H * 0.08}
      stroke={p.line} strokeWidth="1" />,
  ]
}

const PLATE_DRAW = {
  lattice: drawLattice,
  mesh: drawMesh,
  grid: drawGrid,
  strata: drawStrata,
  portrait: drawPortrait,
  orbit: drawOrbit,
  panels: drawPanels,
  columns: drawColumns,
  weave: drawWeave,
  ramp: drawRamp,
}

function Plate({ plate = 'mesh', tone = 'dark', seed = 1, ratio = 16 / 9, alt }) {
  const uid = useId().replace(/[^a-zA-Z0-9-]/g, '')
  const W = 1200
  const H = Math.round(W / ratio)
  const p = PLATE_PALETTE[tone] || PLATE_PALETTE.dark
  const shapes = useMemo(() => {
    const rnd = mulberry32(seed)
    const draw = PLATE_DRAW[plate] || PLATE_DRAW.mesh
    return draw(rnd, W, H, p, uid)
  }, [plate, seed, H, p, uid])

  return (
    <svg
      className="plate"
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      style={{ display: 'block', isolation: 'isolate' }}
    >
      <defs>
        <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.bg0} />
          <stop offset="1" stopColor={p.bg1} />
        </linearGradient>
        <linearGradient id={`${uid}-lg0`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.glow} stopOpacity="0.42" />
          <stop offset="1" stopColor={p.glow} stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id={`${uid}-lg1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id={`${uid}-rg0`}>
          <stop offset="0" stopColor={p.glow} stopOpacity="0.52" />
          <stop offset="1" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-rg1`}>
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.42" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-rg2`}>
          <stop offset="0" stopColor={p.accent} stopOpacity="0.4" />
          <stop offset="1" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
        {/* Texture via <pattern>, not feTurbulence. A fractal-noise filter
            over ~13 simultaneous plates pegs the compositor; a tiled pattern
            costs almost nothing and reads the same at these opacities. */}
        {/* Fills only, no strokes. The non-scaling-stroke rule that keeps the
            linework visible at small sizes would otherwise apply in here too,
            inflating a 1-unit hatch line to a device pixel — which at these
            scales is most of the tile, turning the texture into a flat wash. */}
        <pattern id={`${uid}-tex`} width="6" height="6" patternUnits="userSpaceOnUse"
          patternTransform="rotate(38)">
          <rect width="6" height="6" fill="#000000" opacity="0.35" />
          <rect width="2" height="6" fill="#FFFFFF" opacity="0.5" />
        </pattern>
        <pattern id={`${uid}-scan`} width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="2" fill="rgba(0,0,0,0.42)" />
        </pattern>
      </defs>

      <rect width={W} height={H} fill={`url(#${uid}-bg)`} />
      {shapes}
      {/* Plain alpha compositing, deliberately not mix-blend-mode. An SVG
          blend group is not isolated by default, so an `overlay` rect here
          blended against the page background instead of the plate's own dark
          ground and washed the whole panel out to grey. */}
      <rect width={W} height={H} fill={`url(#${uid}-tex)`} opacity={p.grain} />
    </svg>
  )
}

/**
 * Renders a CONTENT.IMAGES entry: a real <img> if it has a src, else a plate.
 *
 * `ratio` sizes the box and the plate together, so the composition fills it
 * exactly with no crop. `fill` is for boxes whose size comes from elsewhere
 * (the spotlight's absolutely-positioned media layer): there the box is
 * measured and the plate is drawn at whatever aspect it turns out to be,
 * rather than being cover-cropped down to a narrow slice of a 16/9 drawing.
 */
function Visual({ imageKey, ratio = 16 / 9, fill = false, className, style }) {
  const entry = CONTENT.IMAGES[imageKey]
  const boxRef = useRef(null)
  const [measured, setMeasured] = useState(null)

  useEffect(() => {
    if (!fill) return
    const el = boxRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver((entries) => {
      const box = entries[0]?.contentRect
      if (!box || !box.width || !box.height) return
      const next = box.width / box.height
      // Only re-render on a change that would actually be visible.
      setMeasured((prev) => (prev && Math.abs(prev - next) < 0.02 ? prev : next))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [fill])

  if (!entry) {
    // A missing key is a content bug, not something to paper over silently.
    if (import.meta.env.DEV) console.warn(`[portfolio] unknown image key: ${imageKey}`)
    return null
  }

  const wrapStyle = fill
    ? { width: '100%', height: '100%', overflow: 'hidden', ...style }
    : { aspectRatio: String(ratio), overflow: 'hidden', ...style }

  return (
    <div ref={boxRef} className={className ? `${className} vis` : 'vis'} style={wrapStyle}>
      {entry.src ? (
        <img
          src={resolveSrc(entry.src)}
          alt={entry.alt}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <Plate
          plate={entry.plate}
          tone={entry.tone}
          seed={entry.seed}
          ratio={fill ? measured || ratio : ratio}
          alt={entry.alt}
        />
      )}
    </div>
  )
}

/* =========================================================================
 * Icons — every icon on the site is inline SVG. No icon font, no emoji.
 * ========================================================================= */

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
  close: 'M5 5l10 10M15 5L5 15',
}

const ICON_FILLED = {
  linkedin:
    'M4.98 3.5a2 2 0 11-.02 4 2 2 0 01.02-4zM3.3 8.9h3.35V19H3.3zM9.2 8.9h3.2v1.38h.05c.45-.83 1.55-1.7 3.19-1.7 3.41 0 4.04 2.2 4.04 5.05V19h-3.35v-4.72c0-1.13-.02-2.58-1.6-2.58-1.6 0-1.85 1.22-1.85 2.5V19H9.2z',
  behance:
    'M8.4 4.6c1.9 0 3.4.55 3.4 2.55 0 1.05-.5 1.75-1.4 2.15 1.25.35 1.9 1.3 1.9 2.6 0 2.15-1.75 3.1-3.75 3.1H2.5V4.6zm-.3 4.2c.8 0 1.35-.35 1.35-1.2 0-.95-.7-1.15-1.5-1.15H5.1v2.35zm.15 4.45c.9 0 1.6-.35 1.6-1.4 0-1.05-.6-1.45-1.55-1.45H5.1v2.85zM16.9 13.6c.6 0 1.15-.3 1.35-.85h1.9c-.4 1.7-1.65 2.5-3.3 2.5-2.3 0-3.75-1.55-3.75-3.85 0-2.2 1.5-3.85 3.75-3.85 2.4 0 3.5 1.85 3.4 4.2h-5c0 1.15.6 1.85 1.65 1.85zm1.15-3.1c-.1-.9-.55-1.4-1.4-1.4-.95 0-1.35.65-1.4 1.4zM14.3 5.4h4.35v1.25H14.3z',
  github:
    'M10 1.8a8.2 8.2 0 00-2.6 16c.41.08.56-.18.56-.4v-1.4c-2.28.5-2.76-1.1-2.76-1.1-.37-.95-.91-1.2-.91-1.2-.75-.51.06-.5.06-.5.82.06 1.26.85 1.26.85.73 1.26 1.92.9 2.39.68.07-.53.28-.9.51-1.1-1.82-.21-3.73-.91-3.73-4.05 0-.9.32-1.63.85-2.2-.09-.21-.37-1.05.08-2.18 0 0 .69-.22 2.25.84a7.8 7.8 0 014.1 0c1.56-1.06 2.25-.84 2.25-.84.45 1.13.17 1.97.08 2.18.53.57.85 1.3.85 2.2 0 3.15-1.92 3.84-3.75 4.04.29.25.55.74.55 1.5v2.22c0 .22.15.48.57.4A8.2 8.2 0 0010 1.8z',
}

function Icon({ name, size = 20, strokeWidth = 1.5, className }) {
  const filled = ICON_FILLED[name]
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {filled ? (
        <path d={filled} fill="currentColor" />
      ) : (
        <path
          d={ICON_PATHS[name] || ICON_PATHS.arrowRight}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

/* =========================================================================
 * Wordmarks — drawn as SVG in a single muted colour (currentColor).
 *
 * These are typographic wordmarks with a geometric glyph, NOT reproductions
 * of the companies' registered logos. Swap in an official SVG here if you
 * have clearance to use one.
 * ========================================================================= */

const GLYPHS = {
  gamehouse: 'M3 17V9.5L11 3l8 6.5V17h-6v-5H9v5z',
  jesterday: 'M11 3l4.5 7H6.5zM6.5 12h9l-4.5 6z',
  eunoia: 'M11 3a7 7 0 100 14 7 7 0 000-14zm0 4a3 3 0 110 6 3 3 0 010-6z',
  popcore: 'M11 2.5a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8zm0 5.1a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8zm0 5.1a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z',
  cupra: 'M9 3L4 17h3l5-14zM15 3l-5 14h3l5-14z',
  socialpoint: 'M11 2l8 8-8 8-8-8zm0 5.2L7.8 10 11 12.8 14.2 10z',
  radisson: 'M4 17V3h4a5 5 0 010 10H8l5 4H9L5 13v4zm4-6h1a2.5 2.5 0 000-5H8z',
  lasalle: 'M11 2l2.2 5.4L19 8.2l-4 4 1 5.8-5-2.9-5 2.9 1-5.8-4-4 5.8-.8z',
  kave: 'M4 3h3v6l5-6h3.6l-5.4 6.4L19 17h-4l-4-5.2V17H4z',
}

function Wordmark({ mark, name, large = false }) {
  const glyph = GLYPHS[mark] || GLYPHS.eunoia
  const textRef = useRef(null)
  const TEXT_X = 27
  // Start from an estimate, then measure for real. Measuring again once the
  // webfont resolves is what stops the mark from clipping on a cold load.
  const [width, setWidth] = useState(() => Math.round(TEXT_X + name.length * 12.6))

  useLayoutEffect(() => {
    const measure = () => {
      const t = textRef.current
      if (!t || typeof t.getComputedTextLength !== 'function') return
      let len = 0
      try {
        len = t.getComputedTextLength()
      } catch {
        return
      }
      if (len > 0) setWidth(Math.ceil(TEXT_X + len + 2))
    }
    measure()
    if (document.fonts && document.fonts.ready) {
      let live = true
      document.fonts.ready.then(() => {
        if (live) measure()
      })
      return () => {
        live = false
      }
    }
  }, [name])

  return (
    <svg
      className={large ? 'wordmark wordmark--lg' : 'wordmark'}
      viewBox={`0 0 ${width} 32`}
      role="img"
      aria-label={name}
    >
      <g transform="translate(0, 6)">
        <path d={glyph} fill="currentColor" />
      </g>
      <text
        ref={textRef}
        x={TEXT_X}
        y="22"
        fill="currentColor"
        fontFamily="Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        {name}
      </text>
    </svg>
  )
}

/* =========================================================================
 * Shared UI
 * ========================================================================= */

const NAV_OFFSET = 76

function scrollToId(id, reduced) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' })
}

function Nav({ theme, onToggleTheme, onHome, onBook }) {
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isDark = theme === 'dark'
  return (
    <header className={`nav xfade${stuck ? ' is-stuck' : ''}`}>
      <a
        href="#/"
        className="monogram"
        aria-label={CONTENT.nav.homeLabel}
        onClick={onHome}
      >
        {CONTENT.meta.monogram}
      </a>
      <div className="navRight">
        {/* Anchored to the real scheduling URL so it still works without
            JavaScript, middle-click and "open in new tab"; the click is
            intercepted to show the calendar inline instead. */}
        <a
          className="ctaBook mono"
          href={CONTENT.links.bookACall}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={CONTENT.nav.bookLabel}
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
            e.preventDefault()
            onBook()
          }}
        >
          <span className="ctaDot" aria-hidden="true" />
          <span className="navLinkText">{CONTENT.nav.bookLabel}</span>
          <Icon name="arrowRight" size={14} />
        </a>
        <button
          type="button"
          className="themeToggle"
          onClick={onToggleTheme}
          aria-pressed={isDark}
          aria-label={
            isDark ? CONTENT.nav.themeLabelToLight : CONTENT.nav.themeLabelToDark
          }
        >
          <span className="knob" aria-hidden="true">
            <Icon name={isDark ? 'moon' : 'sun'} size={11} strokeWidth={1.8} />
          </span>
        </button>
      </div>
    </header>
  )
}

/**
 * Booking dialog: the Cal.com scheduling page in an iframe.
 *
 * Uses an iframe rather than Cal.com's embed script so the app stays free of
 * third-party JavaScript. If the frame is refused for any reason there is an
 * always-visible link to open the page in a new tab, so booking never becomes
 * a dead end.
 */
function BookingDialog({ onClose, theme, reduced }) {
  const panelRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  // Mounted only while open, so `loaded` starts fresh on every open and the
  // iframe is torn down on close rather than kept alive in the background.
  useEffect(() => {
    const previouslyFocused = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      // Keep focus inside the dialog while it is open.
      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || !focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    // Focus synchronously: the panel is already in the DOM by the time this
    // effect runs, and requestAnimationFrame does not fire in a background
    // tab — which would leave focus stranded outside the dialog.
    panelRef.current?.querySelector('button, a[href]')?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose])

  const src = `${CONTENT.booking.url}?embed=&layout=month_view&theme=${theme}`

  return (
    <div
      className={`bookingScrim${reduced ? '' : ' is-animated'}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="bookingPanel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        ref={panelRef}
      >
        <div className="bookingHead">
          <div>
            <h2 id="booking-title" className="bookingTitle">
              {CONTENT.booking.title}
            </h2>
            <p className="bookingSub">{CONTENT.booking.subtitle}</p>
          </div>
          <button
            type="button"
            className="iconBtn"
            onClick={onClose}
            aria-label={CONTENT.booking.closeLabel}
          >
            <Icon name="close" size={16} />
          </button>
        </div>

        <div className="bookingFrame">
          {!loaded ? (
            <p className="bookingLoading mono" role="status">
              {CONTENT.booking.loadingLabel}
            </p>
          ) : null}
          <iframe
            src={src}
            title={CONTENT.booking.title}
            onLoad={() => setLoaded(true)}
            loading="eager"
          />
        </div>

        <div className="bookingFoot">
          <a
            className="textLink mono"
            href={CONTENT.booking.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {CONTENT.booking.newTabLabel}
            <Icon name="arrowUpRight" size={13} />
          </a>
        </div>
      </div>
    </div>
  )
}

function SectionHead({ label, statement, aside, onPanel, headingId, as: Tag = 'h2' }) {
  const heading = (
    <Tag className={`sectionHead${onPanel ? ' sectionHead--onPanel' : ''}`} id={headingId}>
      <span className="label reveal">{label}</span>
      {/* Both halves are block-level, so this space is invisible but keeps
          the heading's accessible name from running them together. */}
      {' '}
      <span className="statement reveal" style={{ '--reveal-delay': '80ms' }}>
        {statement}
      </span>
    </Tag>
  )
  // Only split into two columns when there is actually an aside to put in the
  // second one. Wrapping unconditionally halved the measure of every heading
  // that already sat inside a narrow column.
  if (!aside) return heading
  return (
    <div className="splitHead">
      {heading}
      <p className="aside reveal" style={{ '--reveal-delay': '160ms' }}>
        {aside}
      </p>
    </div>
  )
}

/** Sticky bottom pill rail. The highlight slides with a restrained spring. */
function SectionRail({ items, activeId, label, reduced }) {
  const listRef = useRef(null)
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false })

  const measure = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const el = list.querySelector(`[data-rail-id="${activeId}"]`)
    if (!el) return
    setPill({ x: el.offsetLeft, w: el.offsetWidth, ready: true })
    // keep the active item in view when the rail is a scrollable row
    if (list.scrollWidth > list.clientWidth) {
      const target = el.offsetLeft - (list.clientWidth - el.offsetWidth) / 2
      list.scrollTo({ left: Math.max(0, target), behavior: reduced ? 'auto' : 'smooth' })
    }
  }, [activeId, reduced])

  useLayoutEffect(measure, [measure, items])
  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  return (
    <div className="railDock">
      <nav className="rail xfade" aria-label={label} ref={listRef}>
        <span
          className={`railPill${pill.ready ? ' is-ready' : ''}`}
          style={{ transform: `translate3d(${pill.x}px,0,0)`, width: `${pill.w}px` }}
          aria-hidden="true"
        />
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            data-rail-id={item.id}
            className="railItem mono"
            aria-current={activeId === item.id ? 'true' : undefined}
            onClick={() => scrollToId(item.id, reduced)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

/** Horizontal scroller with arrow controls. Used by Bits rows and Process. */
function useScrollerControls() {
  const ref = useRef(null)
  const [state, setState] = useState({ atStart: true, atEnd: true })

  const sync = useCallback(() => {
    const el = ref.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({
      atStart: el.scrollLeft <= 2,
      atEnd: max <= 2 || el.scrollLeft >= max - 2,
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const scrollBy = useCallback((dir, reduced) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({
      left: dir * Math.max(240, el.clientWidth * 0.75),
      behavior: reduced ? 'auto' : 'smooth',
    })
  }, [])

  return { ref, ...state, scrollBy }
}

/* =========================================================================
 * HOME — hero
 * ========================================================================= */

function Hero({ reduced }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const typed = useTypewriter(CONTENT.hero.roles, reduced)
  const words = CONTENT.hero.name.split(' ')

  return (
    <section
      className={`container hero${loaded ? ' is-loaded' : ''}`}
      aria-labelledby="hero-name"
    >
      {/* The visible name is split into per-word masks with margin-based
          spacing, which would otherwise be read as one run-together token
          ("ManelLópez"). aria-label sets the accessible name outright rather
          than relying on the split spans being skipped. */}
      <h1
        className="heroName"
        id="hero-name"
        aria-label={`${CONTENT.hero.name} — ${CONTENT.meta.role}`}
      >
        {words.map((word, i) => (
          <span className="word" key={word + i}>
            <span className="wordInner" style={{ '--word-delay': `${i * 90}ms` }}>
              {word}
            </span>
          </span>
        ))}
      </h1>

      {/* Line two. The live region is polite and the roles are also listed for
          assistive tech, so the loop is never read out character by character. */}
      <p className="typeLine" aria-hidden="true">
        <span className="typed">{typed}</span>
        <span className="caret" />
      </p>

      <div className="heroLower">
        <span className="scrollHint mono reveal" aria-hidden="true">
          <Icon name="arrowRight" size={14} />
          {CONTENT.hero.scrollHint}
        </span>
        <p className="heroBio reveal">{CONTENT.hero.bio}</p>
      </div>
    </section>
  )
}

/**
 * Logo strip. Shows CONTENT.logos.perPage marks at a time and cross-fades to
 * the next set on an interval.
 *
 * This is the one timed animation besides the typing headline. Under reduced
 * motion the rotation is dropped entirely and every mark renders at once, so
 * nothing moves and no content is hidden behind a timer. It pauses on hover
 * and on focus, so a reader can stop it to read a name.
 */
function LogoStrip({ reduced }) {
  const items = CONTENT.logos.items
  const perPage = Math.max(1, CONTENT.logos.perPage || 4)
  const pageCount = Math.max(1, Math.ceil(items.length / perPage))
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduced || pageCount < 2 || paused) return
    // Deliberately no document.hidden check: browsers already throttle
    // background timers, and some embedded contexts report hidden
    // permanently — which would strand the strip on its first page and
    // hide the remaining logos for good.
    const id = window.setInterval(() => {
      setPage((n) => (n + 1) % pageCount)
    }, CONTENT.logos.intervalMs || 3500)
    return () => window.clearInterval(id)
  }, [reduced, pageCount, paused])

  // Reduced motion: no rotation, no timer, everything visible at once.
  if (reduced) {
    return (
      <div className="container">
        <ul className="logoStrip" aria-label={CONTENT.logos.label}>
          {items.map((logo) => (
            <li key={logo.name}>
              <Wordmark mark={logo.mark} name={logo.name} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="container">
      {/* All pages are stacked in one grid cell, so the strip's height is
          fixed by the tallest page and the section never reflows as it turns. */}
      <div
        className="logoRotator reveal"
        aria-label={CONTENT.logos.label}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {Array.from({ length: pageCount }, (_, i) => (
          <ul
            key={i}
            className={`logoStrip logoPage${i === page ? ' is-active' : ''}`}
            aria-hidden={i === page ? undefined : 'true'}
          >
            {items.slice(i * perPage, i * perPage + perPage).map((logo) => (
              <li key={logo.name}>
                <Wordmark mark={logo.mark} name={logo.name} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

/* =========================================================================
 * HOME — work
 * ========================================================================= */

function Spotlight({ project, onCapture, reduced }) {
  const mediaRef = useParallax(0.1, reduced)
  const titleRef = useRef(null)

  return (
    <article className="spotlight reveal">
      <div className="spotlightMedia" ref={mediaRef} aria-hidden="true">
        <Visual imageKey={project.images.hero} fill />
      </div>
      <div className="spotlightInner">
        <p className="mono spotlightEyebrow" ref={titleRef}>
          {project.eyebrow}
        </p>
        <div className="spotFoot">
          <h3 className="spotlightStatement">{project.positioning}</h3>
          <a
            className="viewCase mono"
            href={`#/work/${project.slug}`}
            onClick={() => onCapture(titleRef.current)}
            aria-label={`${project.name} — ${CONTENT.work.viewCase}`}
          >
            {CONTENT.work.viewCase}
            <Icon name="arrowRight" size={16} />
          </a>
        </div>
        <dl className="statRow">
          {project.metrics.map((m) => (
            <div className="stat" key={m.label}>
              <dt className="label mono">{m.label}</dt>
              <dd className="value">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

function ProjectCard({ project, onCapture, index }) {
  const titleRef = useRef(null)
  return (
    <li>
      <a
        className="projectCard reveal"
        href={`#/work/${project.slug}`}
        style={{ '--reveal-delay': `${index * 70}ms` }}
        onClick={() => onCapture(titleRef.current)}
        aria-label={`${project.name} — ${CONTENT.work.viewCase}`}
      >
        <span className="cardTop mono">
          <span ref={titleRef}>{project.eyebrow}</span>
          <Icon name="arrowUpRight" size={16} />
        </span>
        <span className="cardMarkWrap">
          <Wordmark mark={project.mark} name={project.name} large />
        </span>
        <span className="cardBody">
          <span className="cardDesc">{project.cardDescription}</span>
          <span className="cardCta mono">
            {CONTENT.work.viewCase}
            <Icon name="arrowRight" size={14} />
          </span>
        </span>
      </a>
    </li>
  )
}

function WorkSection({ projects, spotlight, onCapture, reduced }) {
  return (
    <section id="work" className="section" aria-labelledby="work-h">
      <div className="container">
        <SectionHead
          headingId="work-h"
          label={CONTENT.work.eyebrow}
          statement={CONTENT.work.heading}
        />
        <div style={{ marginTop: 'clamp(32px,5vh,56px)' }}>
          <Spotlight project={spotlight} onCapture={onCapture} reduced={reduced} />
        </div>
        <ul className="projectGrid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} onCapture={onCapture} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================================
 * HOME — design bits
 * ========================================================================= */

function BitsRow({ items, reduced, rowIndex }) {
  const { ref, atStart, atEnd, scrollBy } = useScrollerControls()
  return (
    <div className="bitsCluster">
      <div className="rowHead">
        <span className="mono">
          {CONTENT.bits.rowLabels[rowIndex] || `Set ${rowIndex + 1}`}
        </span>
        <span className="arrowPair">
          <button
            type="button"
            className="iconBtn"
            aria-label={CONTENT.bits.prevLabel}
            disabled={atStart}
            onClick={() => scrollBy(-1, reduced)}
          >
            <Icon name="chevronLeft" size={16} />
          </button>
          <button
            type="button"
            className="iconBtn"
            aria-label={CONTENT.bits.nextLabel}
            disabled={atEnd}
            onClick={() => scrollBy(1, reduced)}
          >
            <Icon name="chevronRight" size={16} />
          </button>
        </span>
      </div>
      <ul className="bitsRow" ref={ref}>
        {items.map((bit, i) => (
          <li
            className="bitTile reveal"
            key={bit.id}
            style={{ '--reveal-delay': `${i * 60}ms` }}
          >
            <div className="bitMedia">
              <Visual imageKey={bit.imageKey} ratio={CONTENT.bits.mediaRatio} />
            </div>
            <div className="bitBody">
              <span className="mono kicker">{bit.kicker}</span>
              <p>{bit.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BitsSection({ reduced }) {
  const rows = useMemo(() => {
    const items = CONTENT.bits.items
    const out = []
    for (let i = 0; i < items.length; i += 4) out.push(items.slice(i, i + 4))
    return out
  }, [])

  return (
    <section id="bits" className="section" aria-labelledby="bits-h">
      <div className="container">
        <SectionHead
          headingId="bits-h"
          label={CONTENT.bits.eyebrow}
          statement={CONTENT.bits.heading}
        />
        <div className="bitsRows">
          {rows.map((row, i) => (
            <BitsRow key={i} items={row} rowIndex={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
 * HOME — about
 * ========================================================================= */

function AboutSection() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <div className="container">
        <SectionHead
          headingId="about-h"
          label={CONTENT.about.eyebrow}
          statement={CONTENT.about.heading}
        />
        <div className="aboutCard reveal" style={{ marginTop: 'clamp(32px,5vh,56px)' }}>
          <div className="aboutCopy">
            <h3>{CONTENT.about.title}</h3>
            <div className="aboutBody">
              {CONTENT.about.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="btnRow">
              {CONTENT.about.buttons.map((b, i) => (
                <a
                  key={b.label}
                  className={i === 0 ? 'btn' : 'btn btn--ghost'}
                  href={b.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Icon name={b.icon} size={18} />
                  {b.label}
                  <Icon name="arrowUpRight" size={14} />
                </a>
              ))}
            </div>
          </div>
          <div className="aboutPortrait">
            <Visual imageKey={CONTENT.about.imageKey} ratio={4 / 5} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
 * HOME — testimonials
 * ========================================================================= */

/**
 * Circular avatar for a testimonial.
 *
 * Falls back to the person's initials if no file is set, or if the file is
 * missing once deployed — so a dropped or misnamed image degrades to
 * something deliberate rather than a broken-image icon.
 *
 * alt is empty on purpose: the name sits right next to it, and announcing
 * it twice is noise.
 */
function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  if (!src || failed) {
    return (
      <span className="avatar avatar--initials" aria-hidden="true">
        {initials}
      </span>
    )
  }
  return (
    <img
      className="avatar"
      src={resolveSrc(src)}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}

function Testimonials() {
  const quotes = CONTENT.testimonials.quotes
  const [i, setI] = useState(0)
  const touch = useRef(null)

  const go = useCallback(
    (dir) => setI((n) => (n + dir + quotes.length) % quotes.length),
    [quotes.length],
  )

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  return (
    <section id="shoutouts" className="section" aria-labelledby="shout-h">
      <div className="container">
        <div className="caseSplit">
          <div>
            <SectionHead
              headingId="shout-h"
              label={CONTENT.testimonials.eyebrow}
              statement={CONTENT.testimonials.heading}
            />
            <p
              className="reveal"
              style={{
                marginTop: 'var(--s5)',
                color: 'var(--muted)',
                maxWidth: '42ch',
                lineHeight: 1.65,
                '--reveal-delay': '160ms',
              }}
            >
              {CONTENT.testimonials.intro}
            </p>
          </div>

          <div
            className="quoteWrap reveal"
            role="group"
            aria-roledescription="carousel"
            aria-label={CONTENT.testimonials.heading}
            tabIndex={0}
            onKeyDown={onKeyDown}
            onTouchStart={(e) => {
              touch.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touch.current == null) return
              const dx = e.changedTouches[0].clientX - touch.current
              if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1)
              touch.current = null
            }}
          >
            <span className="quoteMark" aria-hidden="true">
              &#8220;
            </span>
            <div className="quoteViewport">
              {quotes.map((q, n) => (
                <figure
                  key={q.id}
                  className={`quoteSlide${n === i ? ' is-active' : ''}`}
                  aria-hidden={n === i ? undefined : 'true'}
                >
                  <blockquote className="quoteBody">{q.quote}</blockquote>
                  <figcaption className="quoteAttr">
                    <Avatar src={q.avatar} name={q.name} />
                    <span className="quoteWho">
                      <span className="quoteName">{q.name}</span>
                      <span className="quoteRole mono">{q.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="quoteFoot">
              <div className="dots">
                {quotes.map((q, n) => (
                  <button
                    key={q.id}
                    type="button"
                    className="dot"
                    aria-current={n === i ? 'true' : undefined}
                    aria-label={`${CONTENT.testimonials.dotLabel} ${n + 1}: ${q.name}, ${q.role}`}
                    onClick={() => setI(n)}
                  />
                ))}
              </div>
              <span className="arrowPair">
                <button
                  type="button"
                  className="iconBtn"
                  aria-label={CONTENT.testimonials.prevLabel}
                  onClick={() => go(-1)}
                >
                  <Icon name="chevronLeft" size={16} />
                </button>
                <button
                  type="button"
                  className="iconBtn"
                  aria-label={CONTENT.testimonials.nextLabel}
                  onClick={() => go(1)}
                >
                  <Icon name="chevronRight" size={16} />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
 * HOME — journal
 *
 * Posts render as plain rows. Give a post an `href` in CONTENT and it becomes
 * a real link with a visible affordance — no dead links until then.
 * ========================================================================= */

function JournalSection() {
  return (
    <section id="journal" className="section" aria-labelledby="journal-h">
      <div className="container">
        <SectionHead
          headingId="journal-h"
          label={CONTENT.journal.eyebrow}
          statement={CONTENT.journal.heading}
        />
        <div style={{ marginTop: 'clamp(32px,5vh,56px)' }}>
          {CONTENT.journal.posts.map((post, i) => {
            const Row = post.href ? 'a' : 'article'
            const rowProps = post.href
              ? { href: post.href, target: '_blank', rel: 'noreferrer noopener' }
              : {}
            return (
              <Row
                key={post.id}
                className="postRow reveal"
                style={{ '--reveal-delay': `${i * 70}ms` }}
                {...rowProps}
              >
                <div className="postThumb">
                  <Visual imageKey={post.imageKey} ratio={4 / 3} />
                </div>
                <div className="postMeta">
                  <span className="mono">{post.date}</span>
                  <span className="chips">
                    {post.tags.map((t) => (
                      <span className="chip mono" key={t}>
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="postMain">
                  <h3 className="postTitle">{post.title}</h3>
                  <p className="postDek">{post.dek}</p>
                </div>
                {post.href ? (
                  <span className="go" aria-label={CONTENT.journal.readLabel}>
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                ) : (
                  <span />
                )}
              </Row>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
 * HOME — contact
 *
 * Validates inline, then hands off to the visitor's mail client with
 * everything prefilled. No third-party endpoint, no secrets, works as a
 * pure static build. To POST to a form service instead, replace the body of
 * `deliver()` below — nothing else needs to change.
 * ========================================================================= */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  // idle | sending | sent (posted for real) | draft (mail app opened) | failed
  const [status, setStatus] = useState('idle')

  const validate = useCallback((v) => {
    const e = {}
    if (!v.name.trim()) e.name = CONTENT.contact.errors.name
    if (!EMAIL_RE.test(v.email.trim())) e.email = CONTENT.contact.errors.email
    if (!v.subject.trim()) e.subject = CONTENT.contact.errors.subject
    if (v.message.trim().length < 4) e.message = CONTENT.contact.errors.message
    return e
  }, [])

  const setField = (key) => (ev) => {
    const next = { ...values, [key]: ev.target.value }
    setValues(next)
    if (touched[key]) setErrors(validate(next))
  }

  const blurField = (key) => () => {
    setTouched((t) => ({ ...t, [key]: true }))
    setErrors(validate(values))
  }

  /** Opens a prefilled draft in the visitor's mail app. */
  const openMailDraft = (v) => {
    const body = `${v.message}\n\n— ${v.name}\n${v.email}`
    const href =
      `mailto:${CONTENT.links.email}` +
      `?subject=${encodeURIComponent(v.subject)}` +
      `&body=${encodeURIComponent(body)}`
    window.location.href = href
  }

  /** Actually posts the message, when an endpoint is configured. */
  const postMessage = async (v) => {
    const res = await fetch(CONTENT.contact.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...(CONTENT.contact.endpointExtraFields || {}), ...v }),
    })
    if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`)
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate(values)
    setErrors(e)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(e).length) {
      const first = document.getElementById(`field-${Object.keys(e)[0]}`)
      if (first) first.focus()
      return
    }
    setStatus('sending')

    if (CONTENT.contact.endpoint) {
      // Real send: report what actually happened rather than assuming success.
      try {
        await postMessage(values)
        setStatus('sent')
      } catch {
        setStatus('failed')
      }
      return
    }

    // No endpoint: hand off to the visitor's mail app. Optimistic, because
    // the page cannot observe whether the client opened.
    window.setTimeout(() => {
      try {
        openMailDraft(values)
      } catch {
        /* no mail handler; the card names the address as a fallback */
      }
      setStatus('draft')
    }, 420)
  }

  const reset = () => {
    setValues({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  const f = CONTENT.contact.fields

  const renderField = (key, opts = {}) => {
    const cfg = f[key]
    const invalid = Boolean(touched[key] && errors[key])
    const Control = opts.textarea ? 'textarea' : 'input'
    return (
      <div
        className={`field${opts.full ? ' field--full' : ''}`}
        data-invalid={invalid ? 'true' : 'false'}
      >
        <label className="mono" htmlFor={`field-${key}`}>
          {cfg.label}
        </label>
        <Control
          className="control"
          id={`field-${key}`}
          name={key}
          type={opts.type}
          rows={opts.textarea ? 4 : undefined}
          value={values[key]}
          placeholder={cfg.placeholder}
          required={cfg.required}
          aria-invalid={invalid}
          aria-describedby={invalid ? `err-${key}` : undefined}
          onChange={setField(key)}
          onBlur={blurField(key)}
        />
        {invalid ? (
          <span className="fieldError mono" id={`err-${key}`}>
            {errors[key]}
          </span>
        ) : null}
      </div>
    )
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="container">
        <div className="caseSplit">
          <div>
            <SectionHead
              headingId="contact-h"
              label={CONTENT.contact.eyebrow}
              statement={CONTENT.contact.heading}
            />
            <p
              className="reveal"
              style={{
                marginTop: 'var(--s5)',
                color: 'var(--muted)',
                maxWidth: '40ch',
                lineHeight: 1.65,
                '--reveal-delay': '160ms',
              }}
            >
              {CONTENT.contact.intro}
            </p>
            <p className="reveal" style={{ marginTop: 'var(--s6)', '--reveal-delay': '220ms' }}>
              <span className="mono" style={{ color: 'var(--muted)', display: 'block' }}>
                {CONTENT.contact.emailLabel}
              </span>
              <a
                className="textLink"
                href={`mailto:${CONTENT.links.email}`}
                style={{ display: 'inline-block', marginTop: 'var(--s2)' }}
              >
                {CONTENT.links.email}
              </a>
            </p>
          </div>

          <div className="reveal">
            {/* Submission state is announced, not just shown. */}
            <div aria-live="polite" aria-atomic="true">
              {status === 'sent' || status === 'draft' || status === 'failed' ? (
                <div className={`successCard${status === 'failed' ? ' successCard--failed' : ''}`}>
                  <h3>
                    {status === 'sent'
                      ? CONTENT.contact.sentTitle
                      : status === 'draft'
                        ? CONTENT.contact.draftTitle
                        : CONTENT.contact.failedTitle}
                  </h3>
                  <p>
                    {status === 'sent'
                      ? CONTENT.contact.sentBody
                      : status === 'draft'
                        ? CONTENT.contact.draftBody
                        : CONTENT.contact.failedBody}
                  </p>
                  <button type="button" className="textLink mono" onClick={reset}>
                    {status === 'failed' ? CONTENT.contact.submitLabel : CONTENT.contact.resetLabel}
                  </button>
                </div>
              ) : null}
            </div>

            {status === 'idle' || status === 'sending' ? (
              <form className="form" onSubmit={onSubmit} noValidate>
                {renderField('name', { type: 'text' })}
                {renderField('email', { type: 'email' })}
                {renderField('subject', { type: 'text', full: true })}
                {renderField('message', { textarea: true, full: true })}
                <div className="formFoot">
                  <button className="submit" type="submit" disabled={status === 'sending'}>
                    {status === 'sending'
                      ? CONTENT.contact.submittingLabel
                      : CONTENT.contact.submitLabel}
                    <Icon name="arrowRight" size={16} />
                  </button>
                  <span className="formStatus mono" aria-live="polite">
                    {status === 'sending' ? CONTENT.contact.submittingLabel : ''}
                  </span>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
 * Footer
 * ========================================================================= */

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerTop">
          <ul className="socials">
            {CONTENT.footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  className="socialBtn"
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                >
                  <Icon name={s.icon} size={17} />
                </a>
              </li>
            ))}
          </ul>
          <p className="copyright mono">
            {CONTENT.footer.location} &middot; {CONTENT.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

/* =========================================================================
 * Case study detail view
 * ========================================================================= */

function CaseSection({ id, label, statement, body, children, onPanel, headingId }) {
  return (
    <div id={id}>
      <div className="caseSplit">
        <SectionHead
          headingId={headingId}
          label={label}
          statement={statement}
          onPanel={onPanel}
        />
        <div className={`prose${onPanel ? ' prose--onPanel' : ''} reveal`} style={{ '--reveal-delay': '120ms' }}>
          {body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}

function ProcessScroller({ cards, reduced }) {
  const { ref, atStart, atEnd, scrollBy } = useScrollerControls()
  return (
    <>
      <div className="scrollerHead">
        <span className="mono" style={{ color: 'var(--muted)' }}>
          {`${cards.length} steps`}
        </span>
        <span className="arrowPair">
          <button
            type="button"
            className="iconBtn"
            aria-label={CONTENT.caseUi.processPrev}
            disabled={atStart}
            onClick={() => scrollBy(-1, reduced)}
          >
            <Icon name="chevronLeft" size={16} />
          </button>
          <button
            type="button"
            className="iconBtn"
            aria-label={CONTENT.caseUi.processNext}
            disabled={atEnd}
            onClick={() => scrollBy(1, reduced)}
          >
            <Icon name="chevronRight" size={16} />
          </button>
        </span>
      </div>
      <ul className="scroller" ref={ref}>
        {cards.map((c, i) => (
          <li className="processCard" key={c.title}>
            <span className="idx mono">{String(i + 1).padStart(2, '0')}</span>
            <h3>{c.title}</h3>
            <span className="meta mono">{c.meta}</span>
            <p>{c.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

function CaseStudy({ project, prev, next, onCapture, onHome, flight, reduced }) {
  const revealRef = useReveal()
  const subjectRef = useRef(null)
  const caseIds = useMemo(() => CONTENT.caseUi.rail.map((r) => r.id), [])
  const activeId = useScrollSpy(caseIds, [project.slug])

  /**
   * Shared-element flight: the title the visitor clicked animates into the
   * detail hero. FLIP — measure the destination, offset it back to the source
   * with a transform, then release. Transform only, and skipped entirely under
   * reduced motion or on a direct URL load with no source rect.
   */
  useLayoutEffect(() => {
    const el = subjectRef.current
    if (!el || !flight || reduced) return

    // Measure from a clean state. This effect can run more than once for the
    // same flight (StrictMode in development, dependency changes), and
    // measuring while a previous transform is still applied collapses the
    // delta to zero — the animation silently does nothing.
    el.classList.remove('is-flying')
    el.style.transition = 'none'
    el.style.transform = 'none'
    el.style.opacity = ''

    const to = el.getBoundingClientRect()
    if (!to.height) return

    const dx = flight.left - to.left
    const dy = flight.top - to.top
    const scale = Math.max(0.2, Math.min(1, flight.height / to.height))
    el.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`
    el.style.opacity = '0.55'

    const raf = requestAnimationFrame(() => {
      el.classList.add('is-flying')
      el.style.transform = 'none'
      el.style.opacity = '1'
    })
    const clear = window.setTimeout(() => {
      el.classList.remove('is-flying')
      el.style.transition = ''
      el.style.transform = ''
      el.style.opacity = ''
    }, DUR.hero + 80)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(clear)
      el.classList.remove('is-flying')
      el.style.transition = ''
      el.style.transform = ''
      el.style.opacity = ''
    }
  }, [flight, reduced, project.slug])

  const m = CONTENT.caseUi.metaLabels

  return (
    <>
      <main id="main" ref={revealRef} className={reduced ? undefined : 'viewFade'}>
        <div className="container caseTop">
          <a className="backLink mono" href="#/" onClick={onHome}>
            <Icon name="arrowLeft" size={16} />
            {CONTENT.caseUi.backLabel}
          </a>

          <div className="caseHeadGrid">
            <div>
              <span className="caseEyebrow mono">{project.eyebrow}</span>
              <h1 className="caseTitle">
                <span className="prefix">{CONTENT.caseUi.eyebrow}</span>
                {' '}
                <span className="subject" ref={subjectRef}>
                  {`${CONTENT.caseUi.titlePrefix} ${project.name}`}
                </span>
              </h1>
            </div>
            <p className="casePositioning reveal">{project.positioning}</p>
          </div>

          <div className="caseHeroFrame reveal">
            <div className="inner">
              <Visual imageKey={project.images.hero} ratio={16 / 9} />
            </div>
          </div>

          <dl className="metaBar">
            <div className="metaCell">
              <dt className="mono">{m.role}</dt>
              <dd>{project.role}</dd>
            </div>
            <div className="metaCell">
              <dt className="mono">{m.years}</dt>
              <dd>{project.years}</dd>
            </div>
            <div className="metaCell">
              <dt className="mono">{m.skills}</dt>
              <dd>
                <span className="chips">
                  {project.skills.map((s) => (
                    <span className="chip mono" key={s}>
                      {s}
                    </span>
                  ))}
                </span>
              </dd>
            </div>
          </dl>
        </div>

        {/* Overview */}
        <section className="section" aria-labelledby="case-overview-h">
          <div className="container">
            <CaseSection
              id="overview"
              headingId="case-overview-h"
              label={project.overview.eyebrow}
              statement={project.overview.heading}
              body={project.overview.body}
            >
              <div className="wideVisual reveal">
                <Visual imageKey={project.images.overview} ratio={16 / 7} />
              </div>
            </CaseSection>
          </div>
        </section>

        {/* Process */}
        <section className="section section--tight" aria-labelledby="case-process-h">
          <div className="container">
            <CaseSection
              id="process"
              headingId="case-process-h"
              label={project.process.eyebrow}
              statement={project.process.heading}
              body={project.process.body}
            >
              <ProcessScroller cards={project.process.cards} reduced={reduced} />
            </CaseSection>
          </div>
        </section>

        {/* Shaping the system — dark full-bleed panel */}
        <section className="section" aria-labelledby="case-system-h">
          <div className="container">
            <div className="systemPanel reveal" id="system">
              <div className="caseSplit">
                <SectionHead
                  headingId="case-system-h"
                  label={project.system.eyebrow}
                  statement={project.system.heading}
                  onPanel
                />
                <div className="prose prose--onPanel reveal" style={{ '--reveal-delay': '120ms' }}>
                  {project.system.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              <ul className="systemGrid">
                {project.images.system.map((key, i) => (
                  <li className="systemCell" key={key}>
                    <Visual imageKey={key} ratio={i === 0 ? 4 / 3 : 3 / 4} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Extend */}
        <section className="section section--tight" aria-labelledby="case-extend-h">
          <div className="container">
            <CaseSection
              id="extend"
              headingId="case-extend-h"
              label={project.extend.eyebrow}
              statement={project.extend.heading}
              body={project.extend.body}
            >
              <ul className="extendGrid">
                {project.images.extend.map((key) => (
                  <li className="extendCell reveal" key={key}>
                    <Visual imageKey={key} ratio={4 / 3} />
                  </li>
                ))}
              </ul>
            </CaseSection>
          </div>
        </section>

        {/* Impact */}
        <section className="section" aria-labelledby="case-impact-h">
          <div className="container">
            <CaseSection
              id="impact"
              headingId="case-impact-h"
              label={project.impact.eyebrow}
              statement={project.impact.heading}
              body={project.impact.body}
            />
          </div>
        </section>

        {/* Prev / next */}
        <div className="container">
          <nav className="caseNav" aria-label="Other case studies">
            <a
              className="caseNavBtn"
              href={`#/work/${prev.slug}`}
              onClick={(e) => onCapture(e.currentTarget.querySelector('[data-nav-name]'))}
            >
              <span className="dir mono">
                <Icon name="arrowLeft" size={14} />
                {CONTENT.caseUi.prevProject}
              </span>
              <span className="name" data-nav-name>
                {prev.name}
              </span>
            </a>
            <a
              className="caseNavBtn caseNavBtn--next"
              href={`#/work/${next.slug}`}
              onClick={(e) => onCapture(e.currentTarget.querySelector('[data-nav-name]'))}
            >
              <span className="dir mono">
                {CONTENT.caseUi.nextProject}
                <Icon name="arrowRight" size={14} />
              </span>
              <span className="name" data-nav-name>
                {next.name}
              </span>
            </a>
          </nav>
        </div>

        <Footer />
      </main>

      <SectionRail
        items={CONTENT.caseUi.rail}
        activeId={activeId}
        label={CONTENT.caseUi.railLabel}
        reduced={reduced}
      />
    </>
  )
}

/* =========================================================================
 * Home view
 * ========================================================================= */

function HomeView({ onCapture, reduced }) {
  const revealRef = useReveal()
  const homeIds = useMemo(() => CONTENT.footer.rail.map((r) => r.id), [])
  const activeId = useScrollSpy(homeIds, [])

  const spotlight = CONTENT.projects.find((p) => p.slug === CONTENT.work.spotlightSlug)
  const secondary = CONTENT.projects.filter((p) => p.slug !== CONTENT.work.spotlightSlug)

  return (
    <>
      <main id="main" ref={revealRef}>
        <Hero reduced={reduced} />
        <LogoStrip reduced={reduced} />
        <WorkSection
          projects={secondary}
          spotlight={spotlight}
          onCapture={onCapture}
          reduced={reduced}
        />
        <BitsSection reduced={reduced} />
        <AboutSection />
        <Testimonials />
        <JournalSection />
        <ContactSection />
        <Footer />
      </main>
      <SectionRail
        items={CONTENT.footer.rail}
        activeId={activeId}
        label={CONTENT.footer.railLabel}
        reduced={reduced}
      />
    </>
  )
}

/* =========================================================================
 * App shell + client-side routing
 * ========================================================================= */

export default function App() {
  useStyleSheet()
  const reduced = usePrefersReducedMotion()
  const { theme, toggle } = useTheme()
  const route = useHashRoute()
  const [flight, setFlight] = useState(null)
  const [booking, setBooking] = useState(false)

  const projects = CONTENT.projects
  const index = route.slug ? projects.findIndex((p) => p.slug === route.slug) : -1
  const project = index >= 0 ? projects[index] : null
  const isCase = route.view === 'case' && project

  // Reset scroll on every view change, before paint, so nothing jumps.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [route.view, route.slug])

  /**
   * Navigation itself is a plain anchor href, so keyboard, middle-click and
   * open-in-new-tab all behave. This only records where the visitor clicked
   * from, so the detail hero can fly out of it.
   */
  const captureFlight = useCallback(
    (sourceEl) => {
      if (!sourceEl || reduced) {
        setFlight(null)
        return
      }
      const r = sourceEl.getBoundingClientRect()
      // Only fly from a source that was actually on screen. Anything else
      // would swoop across an implausible distance; those fall back to the
      // plain crossfade, which is the better read anyway.
      const vh = window.innerHeight || 0
      if (!r.height || r.bottom < 0 || r.top > vh) {
        setFlight(null)
        return
      }
      setFlight({ left: r.left, top: r.top, width: r.width, height: r.height })
    },
    [reduced],
  )

  const closeBooking = useCallback(() => setBooking(false), [])

  const goHome = useCallback((e) => {
    if (e) e.preventDefault()
    setFlight(null)
    window.location.hash = '#/'
  }, [])

  // An unknown slug is not a blank screen — send it home.
  useEffect(() => {
    if (route.view === 'case' && !project) window.location.hash = '#/'
  }, [route.view, project])

  const title = isCase
    ? `${project.name} — ${CONTENT.meta.name}`
    : `${CONTENT.meta.name} — ${CONTENT.meta.role}`
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <a className="skip mono" href="#main">
        Skip to content
      </a>
      <Nav
        theme={theme}
        onToggleTheme={toggle}
        onHome={goHome}
        onBook={() => setBooking(true)}
      />
      {booking ? (
        <BookingDialog
          onClose={closeBooking}
          theme={theme}
          reduced={reduced}
        />
      ) : null}
      {isCase ? (
        <CaseStudy
          key={project.slug}
          project={project}
          prev={projects[(index - 1 + projects.length) % projects.length]}
          next={projects[(index + 1) % projects.length]}
          onCapture={captureFlight}
          onHome={goHome}
          flight={flight}
          reduced={reduced}
        />
      ) : (
        <HomeView onCapture={captureFlight} reduced={reduced} />
      )}
    </>
  )
}

/* =========================================================================
 * Utility + late-cascade styles
 * ========================================================================= */

const STYLES_UTIL = `
.sr-only{
  position:absolute;width:1px;height:1px;
  padding:0;margin:-1px;overflow:hidden;
  clip:rect(0,0,0,0);white-space:nowrap;border:0;
}

/* project grid items are list items wrapping the card link */
.projectGrid > li{display:flex}
.projectCard{width:100%}
.cardDesc{
  display:block;
  padding-top:var(--s4);
  color:var(--ink-2);font-size:.9375rem;line-height:1.6;max-width:44ch;
}

/* testimonial slides share one grid cell, so the block never changes height */
.quoteViewport{display:grid}
.quoteSlide{
  grid-area:1 / 1;
  margin:0;
  opacity:0;
  transform:translate3d(0,8px,0);
  pointer-events:none;
  transition:opacity var(--dur-slow) var(--ease-std),
             transform var(--dur-slow) var(--ease-out);
}
.quoteSlide.is-active{opacity:1;transform:none;pointer-events:auto}
.quoteSlide blockquote{margin:0}

.postMain{min-width:0}

/* Offscreen plates are not painted. The box keeps its size from
   aspect-ratio, so enabling this never shifts layout. */
.vis{content-visibility:auto}

/* Plates are drawn in a 1200-unit viewBox but can render as small as ~160px.
   Without this, every hairline collapses to a fraction of a device pixel and
   the linework disappears. */
.plate [stroke]{vector-effect:non-scaling-stroke}

/* generous focus target on the large clickable surfaces */
.projectCard:focus-visible,
.caseNavBtn:focus-visible,
.bitTile:focus-visible{outline-offset:4px}

@media (prefers-reduced-motion:reduce){
  .quoteSlide{transition:none}
}
`
