import { BenefitCards, HomeHero } from "@/components/home/BenefitCards";
import { PageStory } from "@/components/layout/PageStory";

export default function HomePage() {
  return (
    <main className="page-main home-page">
      <HomeHero />

      <PageStory
        problem="Busy days turn small timeouts into retry storms - customers wait, and servers pay for wasted calls."
        whatYouSee="A branded ARIS demo: same checkout, STATIC vs adaptive policy, order-path and payment-path failures."
        whoBenefits="Shoppers get calmer checkouts, developers get one retry helper, IT sees fewer wasted calls with clear fallbacks."
      />

      <section className="home-section">
        <h2 className="section-heading">Who benefits..?</h2>
        <BenefitCards />
      </section>
    </main>
  );
}
