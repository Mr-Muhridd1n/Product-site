import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { List } from "./components/List";
import { Advertisement } from "./components/Advertisement";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=194")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
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
      <Header></Header>
      <main>
        <Advertisement />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
          {products &&
            products.products &&
            products.products.map((product) => (
              <List product={product} key={product.id} />
            ))}
        </ul>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
