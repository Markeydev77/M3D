import type { ReactNode } from "react";

import { useInView } from "./use-in-view";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      className={["m3d-reveal", className].filter(Boolean).join(" ")}
      data-inview={inView}
      ref={ref}
    >
      {children}
    </div>
  );
}
