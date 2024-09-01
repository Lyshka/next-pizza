"use client";

import { cn } from "@/shared/lib/utils";
import { FC } from "react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  className?: string;
  value?: Variant["value"];
}

export const GroupVariants: FC<Props> = ({
  className,
  items,
  onClick,
  value,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl transition-all duration-300 text-sm",
            {
              "bg-white shadow": item.value === value,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};