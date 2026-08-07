"use client";

import { CheckoutResult } from "@/components/checkout/CheckoutResult";
import { ComparePanel } from "@/components/checkout/ComparePanel";
import { PlaceOrderForm } from "@/components/checkout/PlaceOrderForm";
import { RequestTimeline } from "@/components/checkout/RequestTimeline";
import { PageStory } from "@/components/layout/PageStory";

export default function CheckoutPage() {
  return (
    <main className="page-main">
      <p className="page-kicker">Customer demo</p>
      <h1 className="page-title">Checkout</h1>
      <p className="page-lead">
        Same place-order action. Change Policy and Scenario in the sticky bar to
        see STATIC fixed rules vs ARIS. Including ORDER and PAYMENT failures.
      </p>

      <PageStory
        problem="Customers only see “spinning” or “failed”.. They do not see which dependency broke."
        whatYouSee="A live order form, big result state, a reconstructed timeline, and a STATIC vs ARIS compare panel."
        whoBenefits="Normal users feel fewer dead-end checkouts; presenters can show order-path vs payment-path clearly."
      />

      <div className="checkout-layout">
        <PlaceOrderForm />
        <div className="checkout-main-col">
          <CheckoutResult />
          <RequestTimeline />
        </div>
      </div>

      <ComparePanel />
    </main>
  );
}
