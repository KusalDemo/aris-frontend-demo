import type { DemoScenario } from "@/lib/api/types";

export type ScenarioGroupId = "healthy" | "payment" | "order";

export interface ScenarioMeta {
  id: DemoScenario;
  label: string;
  group: ScenarioGroupId;
  caption?: string;
}

export const SCENARIO_GROUPS: {
  id: ScenarioGroupId;
  label: string;
}[] = [
  { id: "healthy", label: "Healthy" },
  { id: "payment", label: "Payment path" },
  { id: "order", label: "Order path" },
];

export const SCENARIOS: ScenarioMeta[] = [
  { id: "NORMAL", label: "NORMAL", group: "healthy" },
  {
    id: "BUSY_SPIKE",
    label: "BUSY_SPIKE",
    group: "payment",
    caption: "Affects order and/or payment depending on backend",
  },
  { id: "PAYMENT_SLOW", label: "PAYMENT_SLOW", group: "payment" },
  { id: "PAYMENT_DOWN", label: "PAYMENT_DOWN", group: "payment" },
  { id: "PARTNER_TIMEOUT", label: "PARTNER_TIMEOUT", group: "payment" },
  { id: "ORDER_SLOW", label: "ORDER_SLOW", group: "order" },
  { id: "ORDER_DOWN", label: "ORDER_DOWN", group: "order" },
  { id: "ORDER_DB_DOWN", label: "ORDER_DB_DOWN", group: "order" },
];

export function scenariosInGroup(group: ScenarioGroupId): ScenarioMeta[] {
  return SCENARIOS.filter((s) => s.group === group);
}

export function getScenarioMeta(id: DemoScenario): ScenarioMeta | undefined {
  return SCENARIOS.find((s) => s.id === id);
}

export function isPaymentPathScenario(id: DemoScenario): boolean {
  return getScenarioMeta(id)?.group === "payment";
}

export function isOrderPathScenario(id: DemoScenario): boolean {
  return getScenarioMeta(id)?.group === "order";
}
