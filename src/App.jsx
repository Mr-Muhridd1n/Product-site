import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Product } from "./pages/Product";

function App() {
  const [basketArr, setBasketArr] = useState(0);
  const { products, loading } = useFetch("https://dummyjson.com/products");

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
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout basketArr={basketArr} setBasketArr={setBasketArr} />,
      children: [
        {
          index: true,
          element: (
            <Home
              basketArr={basketArr}
              setBasketArr={setBasketArr}
              products={products}
            />
          ),
        },
        {
          path: "/product/:id",
          element: (
            <Product basketArr={basketArr} setBasketArr={setBasketArr} />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
