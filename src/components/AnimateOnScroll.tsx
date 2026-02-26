import { ReactNode } from "react";
import { useInView } from "@/hooks/use-in-view";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimateOnScroll = ({ children, delay = 0, className = "" }: AnimateOnScrollProps) => {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
