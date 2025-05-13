import { Users, CreditCard, PieChart, Bell, Layers } from "lucide-react";

export const FEATURES = [
  {
    title: "Effortless Bill Splitting",
    Icon: Layers,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Split bills equally, by percentage, or exact amounts — tailored for any group scenario.",
  },
  {
    title: "One-Click Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Our advanced algorithm minimizes the number of transactions required to settle up.",
  },
  {
    title: "Organized Group Expenses",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Manage shared expenses easily within groups — ideal for roommates, trips, and events.",
  },
  {
    title: "Real-Time Sync",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Instant updates when new expenses or payments are added — stay in sync effortlessly.",
  },
  {
    title: "Clear Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Gain insights into who’s spending what and settle group finances confidently.",
  },
  {
    title: "Smart Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Automated nudges to ensure timely repayments and avoid awkward follow-ups.",
  },
];

export const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Start a group for your roommates, trip, or event and invite friends.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Record who paid and how the bill should be split amongst members.",
  },
  {
    label: "3",
    title: "Settle Up",
    description: "View who owes what and log payments when debts are cleared.",
  },
];

export const TESTIMONIALS = [
    {
      quote:
        "Ye babu rao ka style hai! With Splitr, I finally stopped getting confused about who paid for what!",
      name: "Babu Rao",
      image: "/testimonials/babubhaiya.png",
      role: "Rental Property Manager",
    },
    {
      quote:
        "Splitr's calculations are so accurate, they're even better than my scheme to double money in 25 days!",
      name: "Raju",
      image: "/testimonials/raju.jpg",
      role: "Stock Market Expert",
    },
    {
      quote:
        "If I had Splitr back then, Raju wouldn’t have gotten away with selling my shoes and coat — I’d have added it to his debt!",
      name: "Shyam",
      image: "/testimonials/shyam.png",
      role: "Job Searcher",
    },
  ];