"use client";

import { cn } from "@/shared/lib/utils";
import { Api } from "@/shared/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => {
        setProducts(items);
      });
    },
    200,
    [searchQuery]
  );

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 transition-all display-trans duration-500 bg-black/50 z-30",
          focused ? "block opacity-100" : "opacity-0 hidden"
        )}
      />

      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search
          className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
          size={20}
        />

        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11 pr-3"
          placeholder="Найти пиццу..."
          type="search"
          value={searchQuery}
          onFocus={() => setFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-white rounded-xl shadow-md transition-all duration-300 z-30 display-trans",
            focused && products.length > 0
              ? "opacity-100 top-12 block"
              : "top-14 opacity-0 hidden"
          )}
        >
          {products.map(({ id, imageUrl, name }) => (
            <Link
              onClick={onClickItem}
              key={id}
              className="px-3 py-2 hover:bg-primary/10 first:mt-2 last:mb-2 w-full flex items-center gap-3"
              href={`/product/${id}`}
            >
              <Image
                className="rounded-sm w-auto h-auto aspect-square"
                src={imageUrl}
                width={32}
                height={32}
                alt={name}
              />
              {name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
