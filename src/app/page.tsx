"use client";

import { ExplainDoc } from "@/components/explain/ExplainDoc";
import { ExplainBarChart, ExplainFlow } from "@/components/explain/ExplainVisuals";
import { BenefitCards, HomeHero } from "@/components/home/BenefitCards";
import { PageTabs } from "@/components/layout/PageTabs";
import { StaticVsArisTable } from "@/components/shared/StaticVsArisTable";

function HomeExplain() {
  return (
    <div className="explain-layout">
      <ExplainDoc file="home.md" />
      <ExplainFlow
        title="Busy day, two paths"
        steps={[
          "The shop or payment desk gets stuck",
          "STATIC keeps knocking the same way",
          "ARIS asks for calmer try-again rules",
          "Fewer extra knocks, same checkout button",
        ]}
      />
      <ExplainBarChart
        title="Teaching picture: extra knocks"
        hint="Example of the idea - not this session’s numbers."
        data={[
          { name: "Extra knocks", STATIC: 4, ARIS: 1 },
          { name: "Wait (relative)", STATIC: 8, ARIS: 3 },
        ]}
      />
    </div>
  );
}

function HomeTester() {
  return (
    <>
      <StaticVsArisTable
        title="Busy day at a glance"
        hint="Simple story before you run anything. Same idea as the Checkout compare."
        rows={[
          {
            metric: "Extra knocks on busy day",
            staticValue: "Many, fixed every time",
            arisValue: "Fewer, adapted to load",
            better: "aris",
          },
          {
            metric: "Who tunes dials",
            staticValue: "Each team / fixed config",
            arisValue: "Shared policy service",
            better: "aris",
          },
          {
            metric: "Customer wait",
            staticValue: "Often longer spinning",
            arisValue: "Usually calmer path",
            better: "aris",
          },
        ]}
        meaning="Fixed retry rules can hammer a sick dependency. ARIS turns the same approved dials more carefully when the system is already under stress."
      />
      <section className="home-section">
        <h2 className="section-heading">Who benefits..?</h2>
        <BenefitCards />
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <main className="page-main home-page">
      <HomeHero />
      <PageTabs explain={<HomeExplain />} tester={<HomeTester />} />
    </main>
  );
}
