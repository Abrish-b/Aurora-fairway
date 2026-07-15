"use client";

import dynamic from "next/dynamic";

const SunStageInner = dynamic(() => import("./SunStageInner"), {
  ssr: false,
  loading: () => null,
});

export default function SunStage() {
  return <SunStageInner />;
}
