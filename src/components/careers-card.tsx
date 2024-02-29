import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    _id: string;
    name: string;
    image: string;
    CareerLink: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?._id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-400 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card link={item.CareerLink} text="Apply" className="min-h-80">
            <CardImage imageLink={item.image} />
            <CardTitle>{item.name}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  link,
  text,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  link?: string;
  text?: string;
  onClick?: MouseEventHandler;
}) => {
  const emptyfunction = () => {};
  return (
    <div
      className={cn(
        "flex flex-col justify-between items-center dark:bg-black bg-gray-300 rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-300 dark:group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="p-4 flex flex-col items-center gap-2">{children}</div>
      </div>
      {link && (
        <Link
          href={link || "#"}
          target="_blank"
          className="bg-blue-800 w-full text-white text-center font-semibold p-1 rounded-full cursor-pointer"
        >
          {text}
        </Link>
      )}
      {onClick && (
        <button
          onClick={onClick}
          className="bg-blue-800 w-full text-white text-center font-semibold p-1 rounded-full cursor-pointer"
        >
          {text}
        </button>
      )}
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "dark:text-zinc-100 text-black font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardImage = ({
  className,
  imageLink,
}: {
  className?: string;
  imageLink?: string;
}) => {
  return <img src={imageLink} className={cn("w-40", className)}></img>;
};
