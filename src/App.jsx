import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { List } from "./components/List";
import { Advertisement } from "./components/Advertisement";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [listCount, setListCount] = useState(10);
  const [basketArr, setBasketArr] = useState(0);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products?limit=194");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="bg-black w-full h-screen grid place-items-center text-white">
        <div className="flex flex-col gap-2 items-center">
          <span className="loading loading-spinner loading-xl "></span>
          <p className="text-2xl">Biroz kuting ...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header basketArr={basketArr}></Header>
      <main>
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
                />
              ))}
        </ul>
        {products.products.length > listCount + 10 && (
          <button
            className="btn ml-auto mr-auto flex w-2/4 text-xl py-6 mb-5"
            onClick={() => {
              setListCount(listCount + 10);
            }}
          >
            Yana ko'rsatish 10
          </button>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
