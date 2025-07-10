import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        card: [...state.card, payload],
      };
    case "ADD_PRODUCT_ID":
      return {
        ...state,
        card: state.card.map((item) => {
          if (item.id == payload) {
            return { ...item, amound: item.amound + 1 };
          } else {
            return item;
          }
        }),
      };
    case "DEL_PRODUCT_ID":
      return {
        ...state,
        card: state.card.map((item) => {
          if (item.id == payload) {
            return { ...item, amound: item.amound - 1 };
          } else {
            return item;
          }
        }),
      };
    case "DEL_PRODUCT":
      return {
        ...state,
        card: state.card.filter((item) => item.id != payload),
      };
    case "ADD_LIKE":
      const isLiked = state.like.some((item) => item.id === payload);
      return {
        ...state,
        like: isLiked
          ? state.like.filter((item) => item.id !== action.payload)
          : [...state.like, { id: payload }],
      };
    case "CALCULATE_TOTAL":
      const { allProduct, allPrice } = state.card.reduce(
        (acc, curVal) => {
          const { amound, price } = curVal;
          const itemTotal = amound * price;

          acc.allPrice += itemTotal;
          acc.allProduct += amound;

          return acc;
        },
        { allPrice: 0, allProduct: 0 }
      );
      return { ...state, allProduct, allPrice };
    default:
      return state;
  }
};

const initalState = {
  card: [],
  like: [],
  allProduct: 0,
  allPrice: 0,
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeState, initalState);
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.card]);
  console.log(state);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
