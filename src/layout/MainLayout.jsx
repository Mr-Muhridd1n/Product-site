import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainLayout = ({ basketArr, setBasketArr }) => {
  return (
    <>
      <Header basketArr={basketArr} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
