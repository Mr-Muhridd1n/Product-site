import { useState, useEffect } from "react";
import { List } from "../components/List";
import { Advertisement } from "../components/Advertisement";
import { useFetch } from "../hooks/useFetch";

export const Home = () => {
  const [listCount, setListCount] = useState(10);
  const { products, loading } = useFetch(
    "https://dummyjson.com/products?limit=194"
  );

  if (loading) {
    return (
      <div className="bg-black fixed z-10 top-0 w-full h-screen grid place-items-center text-white">
        <div className="flex flex-col gap-2 items-center">
          <span className="loading loading-spinner loading-xl "></span>
          <p className="text-2xl">Biroz kuting ...</p>
        </div>
      </div>
    );
  }

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
            .map((product) => <List product={product} key={product.id} />)}
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
