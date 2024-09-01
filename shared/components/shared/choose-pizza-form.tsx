import { cn } from "@/shared/lib/utils";
import { FC, useState } from "react";
import { Title } from ".";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import {
  PizzaSize,
  PizzaType,
  pizzaSizes,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient } from "@prisma/client";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: Ingredient[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: FC<Props> = ({
  imageUrl,
  ingredients,
  name,
  className,
  items,
  onClickAdd,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const textDetails =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aut?";
  const totalPrice = 350;

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-5">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3">

        </div>

        <Button className="mt-10 h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
