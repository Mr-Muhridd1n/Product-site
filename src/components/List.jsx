import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const List = ({ product }) => {
  const { card, like, dispatch } = useGlobalContext();

  const isAdded = card.find((item) => product.id == item.id);
  const isLike = like.find((item) => product.id == item.id);

  return (
    <li
      key={product.id}
      className="bg-[#EFEFEF] rounded-lg hover:shadow-md p-4 flex flex-col group cursor-pointer"
    >
      <button
        className="ml-auto bg-white rounded-full btn w-9 h-9 p-2 flex items-center justify-center"
        onClick={() => {
          dispatch({ type: "ADD_LIKE", payload: product.id });
        }}
      >
        <FaHeart
          className={`text-2xl ${isLike ? "text-[#795BD5]" : "text-black"}`}
        />
      </button>
      <Link
        to={`/product/${product.title.trim().replaceAll(" ", "-")}-${
          product.id
        }`}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-contain mb-4 transition duration-300 group-hover:scale-105"
        />
        <p className="text-gray-600 font-bold">
          $
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
        </p>
        <p className="line-through text-gray-500">${product.price}</p>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
          <FaStar className="text-yellow-500" />{" "}
          <span className="opacity-90">
            {product.rating.toFixed(1)} ({product.reviews.length} sharhlar)
          </span>
        </div>
      </Link>
      {isAdded ? (
        <div className="flex justify-between bg-gray-400/40 rounded-sm items-center p-1">
          <button
            className="btn bg-white border-0 btn-sm text-sm flex items-center w-7 h-7"
            onClick={() => {
              isAdded
                ? isAdded.amound > 1
                  ? dispatch({ type: "DEL_PRODUCT_ID", payload: product.id })
                  : dispatch({ type: "DEL_PRODUCT", payload: product.id })
                : "";
            }}
          >
            {" "}
            &minus;{" "}
          </button>
          <span className="font-bold">{isAdded ? isAdded.amound : 1}</span>
          <button
            className="btn bg-white border-0 btn-sm text-sm h-7 w-7"
            onClick={() => {
              dispatch({ type: "ADD_PRODUCT_ID", payload: product.id });
            }}
          >
            {" "}
            &#43;
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            dispatch({
              type: "ADD_PRODUCT",
              payload: { ...product, amound: 1 },
            });
          }}
        >
          Savatga
        </button>
      )}
    </li>
  );
};
