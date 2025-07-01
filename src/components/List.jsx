import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

export const List = ({ product }) => {
  const [like, setLike] = useState(0);
  const [basket, setBascet] = useState(0);

  return (
    <li
      key={product.id}
      className="bg-blend-lighten rounded-lg hover:shadow-md p-4 flex flex-col group cursor-pointer"
    >
      <button
        className="ml-auto"
        onClick={() => {
          setLike(like == 0 ? 1 : 0);
        }}
      >
        <FaHeart
          className={
            like == 0
              ? "text-black cursor-pointer text-2xl"
              : "text-red-700 cursor-pointer text-2xl"
          }
        />
      </button>

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
      <button className="btn btn-primary">Savatga</button>
    </li>
  );
};
