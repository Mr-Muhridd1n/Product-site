import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Basket } from "./pages/Basket";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
