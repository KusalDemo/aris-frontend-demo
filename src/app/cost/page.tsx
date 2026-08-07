"use client";

import { useEffect } from "react";
import {
  CostModelControls,
  RunsCharts,
  StatsCards,
} from "@/components/cost/CostPanels";
import { PageStory } from "@/components/layout/PageStory";
import { useDemoStore } from "@/lib/store/demoStore";

export default function CostPage() {
  const token = useDemoStore((s) => s.token);
  const refreshStats = useDemoStore((s) => s.refreshStats);
  const busy = useDemoStore((s) => s.busy);
  const recentRunCount = useDemoStore((s) => s.recentRuns.length);

  // Refresh server snapshot on mount, after each run finishes, and when the
  // session log grows (keeps cards aligned with sticky-bar actions).
  useEffect(() => {
    if (token && !busy) void refreshStats();
  }, [token, busy, recentRunCount, refreshStats]);

  return (
    <main className="page-main">
      <p className="page-kicker">IT / company</p>
      <h1 className="page-title">Cost &amp; load</h1>
      <p className="page-lead">
        In-memory story from <code>/api/demo/stats</code> plus this browser’s
        recent runs. Enough to show wasted retries without a billing system.
      </p>

      <PageStory
        problem="Fixed retry rules can multiply traffic during incidents and nobody sees the cost in the customer UI."
        whatYouSee="Counters, editable cost dials, and simple charts comparing STATIC vs ARIS for the selected scenario."
        whoBenefits="IT and leadership get a calm, presentation-ready picture of infra waste and failed-order penalty."
      />

      <div className="cost-toolbar">
        <button
          type="button"
          className="btn btn-secondary btn-on-light"
          disabled={busy || !token}
          onClick={() => void refreshStats()}
        >
          Refresh stats
        </button>
        {!token ? (
          <span className="panel-hint warn">Sign in to load server stats.</span>
        ) : null}
      </div>

      <StatsCards />
      <CostModelControls />
      <RunsCharts />
    </main>
  );
}
