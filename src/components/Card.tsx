import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export function Card({ title, children, action }: CardProps) {
  return (
    <section className="card">
      <div className="cardHeader">
        <h2>{title}</h2>
        {action}
      </div>
      <div className="cardBody">{children}</div>
    </section>
  );
}
