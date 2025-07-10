import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "Xatolik element o'ralmagan GlobalContextProvider ichida bolishi kerak !"
    );
  }

  return context;
};
