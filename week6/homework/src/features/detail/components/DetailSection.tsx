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
    <section className={`flex flex-col rounded-3xl bg-white p-10 border border-gray-200 gap-6 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default DetailSection;