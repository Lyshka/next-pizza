"use client";

import { FC } from "react";

import { Input } from "../ui";
import { RangeSlider, Title, CheckboxFiltersGroup } from "./";

import { useIngredients } from "@/hooks/use-ingredients";
import { useFilters } from "@/hooks/use-filters";
import { useQueryFilters } from "@/hooks/use-query-filters";

interface Props {
  className?: string;
}

export const Filters: FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map(({ id, name }) => ({
    value: `${id}`,
    text: name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceForm", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        name="pizzaTypes"
        className="mb-5"
        title="Тип теста"
        selected={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          {
            text: "Тонкое",
            value: "1",
          },
          {
            text: "Традиционнное",
            value: "2",
          },
        ]}
      />

      <CheckboxFiltersGroup
        name="sizes"
        title="Размеры"
        className="mb-5"
        selected={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickCheckbox={filters.setSizes}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceForm)}
            onChange={(e) =>
              filters.setPrices("priceForm", Number(e.target.value))
            }
          />

          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceForm || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        name="ingredients"
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
