import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import { Title } from ".";
import { Button } from "../ui";
import Image from "next/image";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: FC<Props> = ({
  imageUrl,
  name,
  className,
  items,
  onClickAdd,
}) => {
  const textDetails =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aut?";
  const totalPrice = 350;

  return (
    <div className={cn("flex flex-1", className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <Image
          alt={name}
          src={imageUrl}
          width={350}
          height={350}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="mt-10 h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
