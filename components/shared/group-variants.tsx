"use client";

import { cn } from "@/lib/utils";
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
  selectedValue?: Variant["value"];
}

export const GroupVariants: FC<Props> = ({
  className,
  items,
  onClick,
  selectedValue,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none",
        className
      )}
    >
      {items.map(({ name, value, disabled }) => (
        <button
          key={name}
          onClick={() => onClick?.(value)}
          className={cn(
            "flex items-center justify-center h-[30px] px-5 flex-1 rounded-3xl transition-all duration-300 text-sm",
            {
              "bg-white shadow": value === selectedValue,
              "text-gray-500 opacity-50 pointer-events-none": disabled,
            }
          )}
        >
          {name}
        </button>
      ))}
    </div>
  );
};