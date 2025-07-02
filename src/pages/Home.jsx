import { useState, useEffect } from "react";
import { List } from "../components/List";
import { Advertisement } from "../components/Advertisement";
import { MainLayout } from "../layout/MainLayout";

export const Home = ({
  basketArr,
  setBasketArr,
  products,
  like,
  setLike,
  basket,
  setBacket,
}) => {
  const [listCount, setListCount] = useState(10);

  return (
    <section>
      <Advertisement />
      <h2 className="container ml-auto mr-auto text-2xl font-bold mb-3">
        Products: {listCount} / {products.products.length}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 container ml-auto mr-auto mb-5">
        {products &&
          products.products &&
          products.products
            .slice(0, listCount)
            .map((product) => (
              <List
                product={product}
                key={product.id}
                setBasketArr={setBasketArr}
                like={like}
                setLike={setLike}
                setBascet={setBacket}
                basket={basket}
              />
            ))}
      </ul>
      {products.products.length >= listCount + 10 && (
        <button
          className="btn ml-auto mr-auto flex w-2/4 text-xl py-6 mb-5"
          onClick={() => {
            setListCount(listCount + 10);
          }}
        >
          Yana ko'rsatish 10
        </button>
      )}
    </section>
  );
};
