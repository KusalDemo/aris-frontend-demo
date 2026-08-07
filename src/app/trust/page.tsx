"use client";

import { PageStory } from "@/components/layout/PageStory";
import {
  ApprovedLimits,
  FailOpenStory,
  LeadershipTalkTrack,
} from "@/components/trust/TrustPanels";

export default function TrustPage() {
  return (
    <main className="page-main">
      <p className="page-kicker">Company Management</p>
      <h1 className="page-title">Trust &amp; limits</h1>
      <p className="page-lead">
        ARIS is adaptive inside approved bounds with STATIC as the explicit
        fallback story when you need calm, boring defaults.
      </p>

      <PageStory
        problem="Company Management fears black-box automation changing production behaviour without guardrails."
        whatYouSee="Approved-limit metaphor, fail-open explanation and a one-click Switch to STATIC control."
        whoBenefits="IT and company management get safer automation with a visible manual override."
      />

      <div className="two-col">
        <ApprovedLimits />
        <FailOpenStory />
      </div>
      <LeadershipTalkTrack />
    </main>
  );
}
