"use client";

import { CheckoutResult } from "@/components/checkout/CheckoutResult";
import { ComparePanel } from "@/components/checkout/ComparePanel";
import { PlaceOrderForm } from "@/components/checkout/PlaceOrderForm";
import { RequestTimeline } from "@/components/checkout/RequestTimeline";
import { RunHistoryTable } from "@/components/checkout/RunHistoryTable";
import { ExplainDoc } from "@/components/explain/ExplainDoc";
import { ExplainBarChart, ExplainFlow } from "@/components/explain/ExplainVisuals";
import { PageTabs } from "@/components/layout/PageTabs";
import { ArisSessionHero } from "@/components/performance/ArisSessionHero";
import { SessionPerformanceReport } from "@/components/performance/SessionPerformanceReport";

function CheckoutExplain() {
  return (
    <div className="explain-layout">
      <ExplainDoc file="checkout.md" />
      <ExplainFlow
        title="Same button, two policies"
        steps={[
          "Customer taps place order",
          "Shop and payment steps run",
          "STATIC uses fixed extra knocks",
          "ARIS may knock fewer times if things look unwell",
        ]}
      />
      <ExplainBarChart
        title="Teaching picture: wasted knocks"
        data={[
          { name: "Shop problem", STATIC: 3, ARIS: 1 },
          { name: "Payment problem", STATIC: 3, ARIS: 1 },
        ]}
      />
    </div>
  );
}

function CheckoutTester() {
  return (
    <>
      <div className="checkout-layout">
        <PlaceOrderForm />
        <div className="checkout-main-col">
          <CheckoutResult />
          <RequestTimeline />
        </div>
      </div>
      <ComparePanel />
      <RunHistoryTable />
    </>
  );
}

export default function CheckoutPage() {
  return (
    <main className="page-main">
      <p className="page-kicker">Customer demo</p>
      <h1 className="page-title">Checkout</h1>
      <p className="page-lead">
        Same place-order button every time. Change Policy and Scenario in the
        sticky bar to compare STATIC fixed rules with ARIS. Including shop
        problems and payment problems.
      </p>
      <ArisSessionHero />
      <PageTabs
        defaultTab="tester"
        explain={<CheckoutExplain />}
        tester={<CheckoutTester />}
        report={<SessionPerformanceReport />}
      />
    </main>
  );
}
