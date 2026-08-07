import Link from "next/link";

const BENEFITS = [
  {
    audience: "Normal users",
    title: "Fewer failed checkouts on busy days",
    body: "When payment or order systems strain, customers see less spinning and fewer dead ends. The same checkout path, calmer under load.",
  },
  {
    audience: "Developers",
    title: "One place for retry behaviour",
    body: "Java asks ARIS for retry, backoff, and timeout, then applies it. Teams stop copying fragile retry loops into every service.",
  },
  {
    audience: "IT & company leadership",
    title: "Less wasted traffic, clearer control",
    body: "Adaptive decisions cut useless retries. Approved limits and a STATIC fallback keep automation inside guardrails.",
  },
] as const;

export function BenefitCards() {
  return (
    <div className="benefit-grid">
      {BENEFITS.map((card) => (
        <article key={card.audience} className="benefit-card">
          <p className="benefit-audience">{card.audience}</p>
          <h3 className="benefit-title">{card.title}</h3>
          <p className="benefit-body">{card.body}</p>
        </article>
      ))}
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="home-hero">
      <p className="home-eyebrow">Live product demo</p>
      <h1 className="home-brand">ARIS</h1>
      <p className="home-headline">
        When checkout gets busy, fixed retry rules waste calls - ARIS adapts
        retry, backoff, and timeout so the same order path stays calmer.
      </p>
      <p className="home-support">
        Watch one customer action under STATIC fixed rules versus ARIS adaptive
        decisions - including failures in the order path and the payment path.
      </p>
      <div className="home-cta-row">
        <Link className="btn btn-primary btn-lg" href="/checkout">
          Try the live demo
        </Link>
        <Link className="btn btn-secondary btn-lg btn-on-light" href="/cost">
          See the cost story
        </Link>
      </div>
    </section>
  );
}
