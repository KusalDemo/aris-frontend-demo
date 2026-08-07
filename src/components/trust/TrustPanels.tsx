"use client";

import { useDemoStore } from "@/lib/store/demoStore";

export function ApprovedLimits() {
  return (
    <div className="panel">
      <h2 className="panel-title">Approved limits (the dial metaphor)</h2>
      <p>
        STATIC mode uses fixed, pre-approved defaults (retry, backoff, timeout).
        ARIS may suggest adaptive values but they stay{" "}
        <strong>clamped inside those approved ranges</strong>. Automation turns
        the dials. It does not invent a new policy from nowhere.
      </p>
      <div className="limits-grid">
        <div>
          <h3>STATIC defaults</h3>
          <p className="panel-hint">
            Known, boring, predictable. Same numbers every busy Tuesday
            (demo defaults: retry=2, backoff≈1.5, timeout≈1000ms).
          </p>
        </div>
        <div>
          <h3>ARIS clamped values</h3>
          <p className="panel-hint">
            Adapts to load signals, then safety checks keep suggestions inside
            the board-approved envelope. Look for{" "}
            <code>override_reasons</code> / <code>frozen_active</code> on the
            Developers page.
          </p>
        </div>
      </div>
    </div>
  );
}

export function FailOpenStory() {
  const setPolicy = useDemoStore((s) => s.setPolicy);
  const policy = useDemoStore((s) => s.policy);
  const busy = useDemoStore((s) => s.busy);

  return (
    <div className="panel">
      <h2 className="panel-title">Fail-open &amp; manual fallback</h2>
      <p>
        If the ARIS policy service is unavailable, the Spring demo{" "}
        <strong>fails open</strong> to safe STATIC-style behaviour so checkout
        does not depend on a black box being reachable.
      </p>
      <p>
        Operators can also flip the sticky control to{" "}
        <strong>STATIC</strong> any time, a clear manual story for incidents.
      </p>
      <button
        type="button"
        className="btn btn-secondary btn-on-light"
        disabled={busy || policy === "STATIC"}
        onClick={() => setPolicy("STATIC")}
      >
        Switch to STATIC now
      </button>
      <p className="panel-hint" style={{ marginTop: "0.75rem" }}>
        Why safer than opaque automation: limits are visible, fallback is
        explicit, and the customer path still works when the advisor is down.
      </p>
    </div>
  );
}

export function LeadershipTalkTrack() {
  return (
    <div className="panel">
      <h2 className="panel-title">Viva line (IT / leadership)</h2>
      <p>
        “ARIS is not a black box that can do anything. It only turns approved
        dials. If the advisor is down, we fail open. If an incident feels wrong,
        we switch to STATIC in one click and the Cost page shows why fewer
        wasted retries matter in money and load.”
      </p>
    </div>
  );
}
