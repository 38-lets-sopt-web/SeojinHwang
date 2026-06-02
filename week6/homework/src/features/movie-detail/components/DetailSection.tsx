import type { ReactNode } from "react";

interface DetailSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const DetailSection = ({
  title,
  children,
  className = "",
}: DetailSectionProps) => {
  return (
    <section className={`rounded-2xl bg-white p-8 border border-gray-300 ${className}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default DetailSection;