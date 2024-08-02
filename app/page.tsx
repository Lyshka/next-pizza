import {
  Container,
  Filters,
  ProductGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-20">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Мега Мясная",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF38541E76455F9A3150F1EFDA0055.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
