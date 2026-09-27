import type { ReactNode } from "react";

type PageWrapProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function PageWrap({ children, id, className = "" }: PageWrapProps) {
  return (
    <div className={`content-wrap ${className}`.trim()} id={id}>
      {children}
    </div>
  );
}
