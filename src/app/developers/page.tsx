"use client";

import {
  DeveloperTalkTrack,
  IntegrationExplainer,
  LastArisDecision,
} from "@/components/developers/DevPanels";
import { PageStory } from "@/components/layout/PageStory";

export default function DevelopersPage() {
  return (
    <main className="page-main">
      <p className="page-kicker">Developers</p>
      <h1 className="page-title">How Java asks ARIS</h1>
      <p className="page-lead">
        Plain words: the service asks ARIS for retry, backoff, and timeout, then
        applies those dials. Business code stays one helper call.
      </p>

      <PageStory
        problem="Retry logic copied across services drifts and causes retry storms."
        whatYouSee="An integration sketch plus the last ARIS decision fields from demo stats."
        whoBenefits="Developers keep one shared policy path instead of per-service guesswork."
      />

      <div className="two-col">
        <IntegrationExplainer />
        <LastArisDecision />
      </div>
      <DeveloperTalkTrack />
    </main>
  );
}
