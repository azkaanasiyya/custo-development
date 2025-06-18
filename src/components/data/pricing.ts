export interface PricingPlan {
  name: string;
  price: string;
  note: string;
  desc: string;
  features: string[];
  variant: "primary" | "Secondary";
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    note: "/month",
    desc: "Ideal for solo founders and small teams just getting started with CRM.",
    features: [
      "Up to 3 Users",
      "2 GB Storage",
      "Core CRM Features",
      "1 Sales Pipeline",
      "Basic Email Integration"
    ],
    variant: "Secondary"
  },
  {
    name: "Growth",
    price: "$79",
    note: "/month",
    desc: "Best for scaling teams that need advanced collaboration tools.",
    features: [
      "Up to 10 Users",
      "Workflow Automation",
      "Multiple Pipelines",
      "Team Collaboration Tools",
      "Activity & Deal Reports"
    ],
    variant: "primary",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    note: "/month",
    desc: "Tailored for large organizations with complex workflows.",
    features: [
      "Unlimited Users",
      "Role-Based Permissions",
      "Advanced Workflow Automation",
      "Custom Dashboards",
      "Priority Support"
    ],
    variant: "Secondary"
  }
];
