/* ============================================================
   Kelly Entertainment Co. — App components
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* ---------- icons ---------- */
const Icon = {
  Search: (p) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
    </svg>
  ),
  Bag: (p) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  User: (p) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  ),
  Arrow: (p) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
    </svg>
  ),
  Plus: (p) => (
    <svg {...p} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="M12 5v14" />
    </svg>
  ),
  X: (p) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  ),
  Mail: (p) => (
    <svg {...p} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="3" /><path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

/* ---------- smooth scroll helper ---------- */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navOffset = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ---------- promo strip + nav ---------- */
function PromoStrip() {
  return (
    <div className="k-promo">
      <span className="k-promo-dot" />
      <span>Now booking events for 2026</span>
      <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Get in touch</a>
    </div>
  );
}

function Nav({ active, setActive }) {
  const links = [
    { label: "Divisions",   id: "divisions" },
    { label: "Events",      id: "events" },
    { label: "About",       id: "about" },
    { label: "Contact",     id: "contact" },
  ];
  return (
    <nav className="k-nav">
      <div className="k-nav-row">
        <a className="k-logo" href="#top" onClick={(e) => { e.preventDefault(); scrollToId("top"); }}>
          <span className="k-logo-mark">K</span>
          <span className="k-logo-text">Kelly Entertainment<span className="reg">Co.</span></span>
        </a>
        <div className="k-nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`k-nav-link ${active === l.id ? "active" : ""}`}
              onClick={() => { setActive(l.id); scrollToId(l.id); }}
            >{l.label}</button>
          ))}
        </div>
        <div className="k-nav-spacer" />
        <button className="k-icon-btn" aria-label="Search"><Icon.Search /></button>
        <button className="k-cta-pill accent" onClick={() => scrollToId("contact")}>Work with us</button>
      </div>
    </nav>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section className="k-hero" id="top">
      <div className="k-hero-copy-card">
        <div>
          <div className="k-eyebrow">Kelly Entertainment Co. · Columbus, OH</div>
          <h1 className="k-hero-title">
            Where culture<br />
            meets <span className="accent">opportunity.</span>
          </h1>
          <p className="k-hero-sub">
            Live experiences, premium media, and cultural development — building
            equitable platforms from Columbus to the world.
          </p>
          <div className="k-hero-ctas">
            <button className="k-cta-pill accent" onClick={() => scrollToId("divisions")}>
              Explore divisions
            </button>
            <button className="k-cta-pill ghost" onClick={() => scrollToId("contact")}>
              Work with us
            </button>
          </div>
        </div>
        <div className="k-hero-meta">
          <div className="k-hero-meta-item">
            <div className="num">04</div>
            <span className="lbl">Divisions</span>
          </div>
          <div className="k-hero-meta-item">
            <div className="num">2025</div>
            <span className="lbl">Founded</span>
          </div>
          <div className="k-hero-meta-item">
            <div className="num">OH</div>
            <span className="lbl">Headquartered Columbus</span>
          </div>
        </div>
      </div>
      <div className="k-hero-art"><HeroArt /></div>
    </section>
  );
}

/* ---------- divisions ---------- */
const DIVISIONS = [
  {
    id: "live",
    num: "01",
    tag: "Division 01",
    name: "Live Entertainment & Experiences",
    body: "Concerts, festivals, panels, and immersive cultural events — produced end-to-end. From intimate showcases to flagship multi-day series, with ticketing and event logistics included.",
    services: ["Concert production", "Festival programming", "Ticketing & logistics", "Venue activation", "Hospitality + VIP"],
    art: LiveArt,
  },
  {
    id: "media",
    num: "02",
    tag: "Division 02",
    name: "Media, Streaming & Distribution",
    body: "Premium content created with — not just about — culture. Documentaries, music, podcasts, and original series built to reach culturally engaged audiences at scale.",
    services: ["Original series", "Music distribution", "Podcast network", "Sync licensing"],
    art: MediaArt,
  },
  {
    id: "realestate",
    num: "03",
    tag: "Division 03",
    name: "Real Estate & Development",
    body: "Entertainment-anchored spaces that build neighborhood equity — venues, creative campuses, and mixed-use cultural districts that anchor long-term economic opportunity.",
    services: ["Venue development", "Creative campuses", "Mixed-use districts", "Community programming"],
    photo: "assets/real-estate.png",
  },
  {
    id: "partnerships",
    num: "04",
    tag: "Division 04",
    name: "Partnerships & Brand Strategy",
    body: "Connecting brands with culturally engaged audiences. Strategy, creative, and activation that earns trust — never extracts it.",
    services: ["Brand strategy", "Cultural activations", "Creator partnerships", "Insights & research"],
    art: PartnershipsArt,
  },
];

function DivisionRow({ d, flip }) {
  const Art = d.art;
  return (
    <article className={`k-division-row ${flip ? "flip" : ""}`} id={`division-${d.id}`}>
      <div className="k-division-art">
        <span className="corner-mark">{d.tag}</span>
        {d.photo
          ? <img src={d.photo} alt={d.name} />
          : <Art />}
      </div>
      <div className="k-division-body">
        <span className="k-division-num">{d.num}</span>
        <h3 className="k-division-title">{d.name}</h3>
        <p>{d.body}</p>
        <div className="k-division-services">
          {d.services.map((s) => (
            <span className="k-division-service" key={s}>{s}</span>
          ))}
        </div>
        <button className="k-division-cta" onClick={() => scrollToId("contact")}>
          Discuss a project <Icon.Arrow />
        </button>
      </div>
    </article>
  );
}

function Divisions() {
  return (
    <section className="k-section" id="divisions" data-screen-label="Divisions">
      <div className="k-section-head">
        <h2 className="k-section-title">
          Four divisions, one <span className="accent">cultural engine.</span>
        </h2>
        <p className="k-section-lede">
          We build live moments, premium media, durable real estate, and brand
          partnerships — and we make sure each one reinforces the others.
        </p>
      </div>
      <div className="k-divisions">
        {DIVISIONS.map((d, i) => (
          <DivisionRow key={d.id} d={d} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

/* ---------- events coming soon ---------- */
const UPCOMING = [
  { when: "Spring",   what: "Inaugural live showcase",      where: "Columbus, OH",       status: "Announcing soon" },
  { when: "Summer",   what: "Cultural builders panel",      where: "Partner venue · TBA", status: "In planning" },
  { when: "Fall",     what: "Documentary premiere series",  where: "Streaming + theaters", status: "In production" },
];

function EventsComingSoon() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  function submit(e) {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    setDone(true);
  }
  return (
    <section className="k-section" id="events" data-screen-label="Events">
      <div className="k-coming">
        <div className="k-coming-art"><ImpactBgArt /></div>

        <div className="k-coming-copy">
          <div className="k-eyebrow">Events</div>
          <h3>
            Events <span className="accent">coming soon.</span>
          </h3>
          <p>
            Our 2026 programming is in the works. Get on the list and you'll be
            first to hear when tickets, panels, and premieres are announced —
            ahead of public release.
          </p>
          <form className={`k-newsletter-form ${done ? "ok" : ""}`} onSubmit={submit} style={{ background: "var(--k-canvas)", maxWidth: 460 }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={done}
              required
            />
            <button type="submit">{done ? "You're on the list ✓" : "Notify me"}</button>
          </form>
        </div>

        <div className="k-coming-list">
          {UPCOMING.map((u, i) => (
            <div className="k-coming-item" key={i}>
              <span className="when">{u.when} 2026</span>
              <div className="what">
                {u.what}
                <small>{u.where}</small>
              </div>
              <span className={`status ${u.status === "Announcing soon" ? "soon" : ""}`}>{u.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- impact (vision-oriented for new co) ---------- */
function Impact() {
  return (
    <section className="k-section">
      <div className="k-impact">
        <div className="k-impact-bg"><ImpactBgArt /></div>
        <div className="k-impact-copy">
          <div className="k-eyebrow">What we're building</div>
          <h3>
            A new kind of cultural<br />
            company, built deliberately.
          </h3>
        </div>
        <div className="k-impact-stat">
          <span className="num">04</span>
          <span className="lbl">Integrated divisions, one cultural engine</span>
        </div>
        <div className="k-impact-stat">
          <span className="num">100<span className="unit">%</span></span>
          <span className="lbl">Black-owned &amp; Columbus-headquartered</span>
        </div>
        <div className="k-impact-stat">
          <span className="num">2026</span>
          <span className="lbl">Inaugural season of live programming</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- mission / about ---------- */
function Mission() {
  return (
    <section className="k-section" id="about" data-screen-label="About">
      <div className="k-mission">
        <div className="k-mission-card">
          <div>
            <div className="k-eyebrow">Our story</div>
            <h3>
              Rooted in Columbus.<br />
              Built for the culture.
            </h3>
            <p>
              Kelly Entertainment Co. is a cultural entertainment and development
              company on a mission to <span className="accent">amplify Black creativity</span>,
              build <span className="accent">equitable platforms</span> for cultural
              expression, and create economic opportunity through innovation and
              entertainment.
            </p>
            <p>
              We help brands, creators, and communities harness live events,
              premium media, and strategic partnerships to make cultural impact
              that lasts.
            </p>
          </div>
        </div>
        <div className="k-mission-card art">
          <MissionArt />
          <div className="k-mission-overlay">
            <strong>"Culturally centered entertainment, education, and economic development."</strong>
            <span>— Collective vision, Kelly Entertainment Co.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
function Contact() {
  return (
    <section className="k-section" id="contact" data-screen-label="Contact">
      <div className="k-section-head">
        <h2 className="k-section-title">
          Work with <span className="accent">us.</span>
        </h2>
        <p className="k-section-lede">
          Booking an event, scoping a partnership, or programming a venue?
          Reach our team directly — we respond within two business days.
        </p>
      </div>
      <div className="k-mission">
        <div className="k-mission-card">
          <div>
            <div className="k-eyebrow">Visit &amp; reach us</div>
            <h3>Get in touch.</h3>
            <p>
              Our headquarters sits in Columbus. Most live programming runs at
              venue partners across the city — we'll route your inquiry to the
              right division.
            </p>
          </div>
          <dl className="contact">
            <div>
              <dt>Studio</dt>
              <dd>1890 East Main Street<br />Suite 309 · Columbus, OH 43205</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>(614) 636-5985</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>info@kellyentertainmentco.com</dd>
            </div>
            <div>
              <dt>Press</dt>
              <dd>press@kellyentertainmentco.com</dd>
            </div>
          </dl>
        </div>
        <div className="k-mission-card art">
          <MissionArt />
          <div className="k-mission-overlay">
            <strong>Available for: event production, ticketing &amp; logistics, brand activations, content development, venue programming.</strong>
            <span>— Kelly Entertainment Co.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "What kinds of events does Kelly Entertainment produce?",
    a: "Concerts, festivals, panels, film series, and immersive cultural events — produced end-to-end from creative direction through hospitality. We program our own seasons and produce custom events for partners." },
  { q: "How do I book a private event or buyout?",
    a: "Reach out to info@kellyentertainmentco.com or call (614) 636-5985. Our Partnerships team will scope the experience, venue, and timeline within two business days." },
  { q: "Do you offer ticketing services and logistics for events?",
    a: "Yes. Our Live Entertainment division provides full ticketing services and event logistics — from box-office setup and access control to staffing, hospitality, and run-of-show coordination. We can plug in as a full producer or layer on logistics for an event you're already running." },
  { q: "Where are you located?",
    a: "Our headquarters is at 1890 East Main Street, Suite 309, Columbus, OH 43205. Most live programming runs at venue partners across the city; specific venues are announced with each experience." },
  { q: "How do you partner with brands?",
    a: "Our Partnerships & Brand Strategy division builds custom programs — from cultural activations to creator partnerships and brand-funded content. We start every engagement with discovery and a cultural insights review." },
];

function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="k-section" data-screen-label="FAQ">
      <div className="k-section-head">
        <h2 className="k-section-title">Common <span className="accent">questions.</span></h2>
        <p className="k-section-lede">Can't find what you need? Reach our team at info@kellyentertainmentco.com.</p>
      </div>
      <div className="k-faq-stack">
        {FAQS.map((f, i) => (
          <div key={i} className={`k-faq-item ${openIdx === i ? "open" : ""}`}>
            <button className="k-faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
              <span>{f.q}</span>
              <span className="k-faq-icon">{openIdx === i ? <Icon.X /> : <Icon.Plus />}</span>
            </button>
            <div className="k-faq-a">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="k-footer">
      <div className="k-footer-inner">
        <div className="k-footer-grid">
          <div className="k-footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="k-logo-mark">K</span>
              <span style={{ font: "700 17px/1 var(--font-display)", color: "var(--k-canvas)" }}>
                Kelly Entertainment Co.
              </span>
            </div>
            <p>A cultural entertainment & development company based in Columbus, Ohio.</p>
            <p style={{ marginTop: 6 }}>1890 E. Main St, Ste 309<br />Columbus, OH 43205</p>
          </div>
          <div className="k-footer-col">
            <h5>Divisions</h5>
            <ul>
              <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollToId("divisions"); }}>Live Entertainment</a></li>
              <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollToId("divisions"); }}>Media & Streaming</a></li>
              <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollToId("divisions"); }}>Real Estate</a></li>
              <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollToId("divisions"); }}>Partnerships</a></li>
            </ul>
          </div>
          <div className="k-footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToId("about"); }}>Our story</a></li>
              <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollToId("events"); }}>Events</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Contact</a></li>
              <li><a>Press</a></li>
            </ul>
          </div>
          <div className="k-footer-col">
            <h5>Services</h5>
            <ul>
              <li><a>Event production</a></li>
              <li><a>Ticketing &amp; logistics</a></li>
              <li><a>Brand partnerships</a></li>
              <li><a>Venue programming</a></li>
            </ul>
          </div>
          <div className="k-footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a>(614) 636-5985</a></li>
              <li><a>info@kellyentertainmentco.com</a></li>
              <li><a>Instagram</a></li>
              <li><a>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="k-footer-bottom">
          <span>© 2026 Kelly Entertainment Co. All rights reserved.</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  PromoStrip, Nav, Hero, Divisions, EventsComingSoon,
  Impact, Mission, Contact, Faq, Footer,
});
