export interface featuresProps {
  subTitle: string;
  title: string;
  description: string;
  image: string;
}

export const features2: featuresProps[] = [
  {
    image: "/features/Image.svg",
    subTitle: "Analytics & Reporting",
    title: "Understand Your Business Like Never Before",
    description:
      "Get real-time insights into sales performance, customer behavior, and business growth.",
  },
  {
    image: "/features/Image (1).svg",
    subTitle: "Multi-User Collaboration",
    title: "Empower Your Team with Real-Time Sync",
    description:
      "Collaborate effortlessly with your team by sharing information, notes, and real-time updates.",
  },
  {
    image: "/features/Image (2).svg",
    subTitle: "Email Integration",
    title: "Manage Emails Without Leaving Your CRM",
    description:
      "Sync with your email to send, receive, and track conversations directly from the CRM.",
  },
];
