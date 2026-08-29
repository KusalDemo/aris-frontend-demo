"use client";

import { useMemo } from "react";
import { formatDemoMoney } from "@/lib/demo/cost";
import {
  comparisonMeaning,
  computeSessionComparison,
  type SessionPolicyComparison,
} from "@/lib/demo/sessionPerformance";
import { useDemoStore } from "@/lib/store/demoStore";

function fmtRate(n: number | null): string {
  if (n === null) return "-";
  return `${(n * 100).toFixed(0)}%`;
}

function fmtAvg(n: number | null, digits = 2): string {
  if (n === null) return "-";
  return n.toFixed(digits);
}

function PolicySessionCard({
  title,
  runs,
  comparison,
  policy,
}: {
  title: string;
  runs: SessionPolicyComparison["staticRuns"];
  comparison: SessionPolicyComparison;
  policy: "STATIC" | "ARIS";
}) {
  const emptyHint =
    policy === "STATIC"
      ? "No STATIC runs in this session yet."
      : "No ARIS runs in this session yet.";

  if (runs.length === 0) {
    return (
      <div className="compare-card">
        <h3>{title}</h3>
        <p className="panel-hint">{emptyHint}</p>
      </div>
    );
  }

  const successCount = runs.filter((r) => r.success).length;
  const failCount = runs.length - successCount;
  const avgRetries =
    policy === "STATIC"
      ? comparison.staticAvgRetries
      : comparison.arisAvgRetries;
  const avgDuration =
    policy === "STATIC"
      ? comparison.staticAvgDurationMs
      : comparison.arisAvgDurationMs;
  const extraCalls =
    policy === "STATIC"
      ? comparison.staticExtraCalls
      : comparison.arisExtraCalls;
  const infraWaste =
    policy === "STATIC"
      ? comparison.staticInfraWaste
      : comparison.arisInfraWaste;
  const successRate =
    policy === "STATIC"
      ? comparison.staticSuccessRate
      : comparison.arisSuccessRate;

  const tone =
    failCount === 0 && successCount > 0
      ? "compare-ok"
      : successCount === 0
        ? "compare-fail"
        : "";

  return (
    <div className={tone ? `compare-card ${tone}` : "compare-card"}>
      <h3>{title}</h3>
      <dl className="compare-dl">
        <div>
          <dt>Runs (session)</dt>
          <dd>{runs.length}</dd>
        </div>
        <div>
          <dt>Success / fail</dt>
          <dd>
            {successCount} / {failCount}
          </dd>
        </div>
        <div>
          <dt>Success rate</dt>
          <dd>{fmtRate(successRate)}</dd>
        </div>
        <div>
          <dt>Avg retries</dt>
          <dd>{fmtAvg(avgRetries)}</dd>
        </div>
        <div>
          <dt>Total retries</dt>
          <dd>{extraCalls}</dd>
        </div>
        <div>
          <dt>Avg duration</dt>
          <dd>
            {avgDuration === null ? "-" : `${Math.round(avgDuration)} ms`}
          </dd>
        </div>
        <div>
          <dt>Extra-call waste (est.)</dt>
          <dd>{formatDemoMoney(infraWaste)}</dd>
        </div>
      </dl>
    </div>
  );
}

export function ComparePanel() {
  const hydrated = useDemoStore((s) => s.hydrated);
  const recentRuns = useDemoStore((s) => s.recentRuns);
  const costConstants = useDemoStore((s) => s.costConstants);

  const comparison = useMemo(() => {
    const runs = hydrated ? recentRuns : [];
    return computeSessionComparison(runs, costConstants);
  }, [hydrated, recentRuns, costConstants]);

  const meaning = useMemo(() => comparisonMeaning(comparison), [comparison]);

  return (
    <div className="panel">
      <h2 className="panel-title">Side-by-side compare (session totals)</h2>
      <p className="panel-hint">
        Every checkout in this browser session, <strong>all scenarios</strong>,
        split by STATIC vs ARIS. The sticky-bar scenario only affects new runs,
        not this rollup.
      </p>
      {!comparison.hasPair &&
      (comparison.staticRuns.length > 0 || comparison.arisRuns.length > 0) ? (
        <p className="panel-hint warn">
          Only one policy has runs so far. Add the other arm for a full compare.
        </p>
      ) : null}
      <div className="compare-grid">
        <PolicySessionCard
          title="STATIC (session)"
          runs={comparison.staticRuns}
          comparison={comparison}
          policy="STATIC"
        />
        <PolicySessionCard
          title="ARIS (session)"
          runs={comparison.arisRuns}
          comparison={comparison}
          policy="ARIS"
        />
      </div>
      <p className="sv-meaning">
        <strong>What this means:</strong> {meaning}
      </p>
    </div>
  );
}
