import type { Metadata } from "next";
import { Dashboard } from "@/components/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard — 0Bot",
  description: "Monitor CVEs, threat intelligence, and security news in real-time.",
};

export default function DashboardPage() {
  return <Dashboard />;
}
