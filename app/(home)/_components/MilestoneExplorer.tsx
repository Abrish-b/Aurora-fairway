"use client";

import { FileCode2, PlugZap, ServerCog, ShieldCheck } from "lucide-react";

import ExplorerGrid, { type ExplorerItem } from "./ExplorerGrid";

const MILESTONES: ExplorerItem[] = [
  {
    badge: "M1",
    icon: FileCode2,
    title: "Specifications & Architecture",
    detail: "Core standards and implementation architecture finalized.",
  },
  {
    badge: "M2",
    icon: ServerCog,
    title: "Core Build",
    detail:
      "Discovery, verification, indexing, filtering, and API infrastructure operational on testnet.",
  },
  {
    badge: "M3",
    icon: PlugZap,
    title: "Integration & Technical Demonstration",
    detail:
      "Reference implementation, developer tooling, and complete testnet workflow demonstrated.",
  },
  {
    badge: "M4",
    icon: ShieldCheck,
    title: "Independent Review & Public Release",
    detail:
      "Independent review completed and final open-source infrastructure released.",
  },
];

export default function MilestoneExplorer() {
  return <ExplorerGrid items={MILESTONES} />;
}
