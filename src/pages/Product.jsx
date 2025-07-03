import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { FaHeart, FaStar, FaCheck } from "react-icons/fa";
import { List } from "../components/List";

export const Product = ({ basketArr, setBasketArr }) => {
  const { id } = useParams();
  const lastNumber = id.match(/\d+$/)?.[0];
  const [like, setLike] = useState(0);
  const [basket, setBascet] = useState(0);

  const { products: product, loading } = useFetch(
    `https://dummyjson.com/products/${lastNumber}`
  );

  const { products } = useFetch(
    product
      ? `https://dummyjson.com/products/category/${product.category}`
      : null
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <FaStar
            key={i}
            className="text-yellow-400"
            style={{
              clipPath: "inset(0 50% 0 0)",
              marginRight: "-1em",
            }}
          />
        );
        stars.push(
          <FaStar
            key={i + "empty"}
            className="text-gray-300"
            style={{
              clipPath: "inset(0 0 0 50%)",
            }}
          />
        );
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  function formatDate(dateInput, useUTC = true) {
    const d = dateInput instanceof Date ? dateInput : new Date(dateInput);

    const day = useUTC ? d.getUTCDate() : d.getDate();

    const monthIndex = useUTC ? d.getUTCMonth() : d.getMonth();

    const monthsUz = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];

    return `${day} ${monthsUz[monthIndex]}`;
  }

  return (
    <>
      {product && (
        <section className="mb-5">
          <div className="flex container ml-auto mr-auto flex-col lg:flex-row">
            <div className="w-full lg:w-8/12 mr-5">
              <div className="">
                <h1 className="text-3xl mb-3 font-bold">{product.title}</h1>
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex items-center">
                    {renderStars(product.rating)}
                  </span>
                  <a href="" className="underline opacity-70">
                    {product.rating.toFixed(1)} ({product.reviews.length} sharx)
                  </a>
                </div>
              </div>
              <div className="flex gap-3 mb-5">
                <figure className="bg-gray-400 md:w-6/12 rounded-2xl w-full">
                  <img
                    src={
                      product.images[1] ? product.images[1] : product.thumbnail
                    }
                    className="w-full"
                    alt=""
                  />
                </figure>
                <figure className="bg-gray-400 w-6/12 rounded-2xl hidden md:inline-block">
                  <img
                    src={
                      product.images[2] ? product.images[2] : product.thumbnail
                    }
                    className="w-full"
                    alt={product.title}
                  />
                </figure>
              </div>
              {product.reviews && product.reviews.length > 0 && (
                <div className="flex gap-5">
                  {product.reviews.slice(0, 2).map((comment) => (
                    <div
                      className="w-full max-w-6/12 border-2 border-gray-500/40 rounded-2xl p-5"
                      key={comment.id || comment.reviewerName}
                    >
                      <div className="flex justify-between mb-2">
                        <span>
                          <h4 className="font-bold">{comment.reviewerName}</h4>
                          <p className="opacity-55">
                            {formatDate(comment.date)}
                          </p>
                        </span>
                        <span className="flex">
                          {renderStars(comment.rating)}
                        </span>
                      </div>
                      <div>
                        <span className="line-clamp-1">
                          Izoh:{" "}
                          <span className="opacity-60">{comment.comment}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-2 border-gray-400/40 w-full lg:max-w-4/12 rounded-3xl py-5.5 px-5 gap-5 flex flex-col mt-4 lg:mt-0">
              <div className="bg-[#F0F2F5] hover:bg-gray-500/40 p-5 rounded-2xl">
                <div className="max-w-9/12 cursor-pointer">
                  <p className="text-purple-600 font-semibold text-sm">
                    Uzum kartasi bilan to'lov amalga oshirilganda:
                  </p>
                  <span className="text-purple-600 font-bold text-2xl flex items-center gap-2">
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                    <span>USD</span>
                    <span className="bg-purple-600 rounded-full text-sm h-5 flex items-center text-white p-1">
                      -{product.discountPercentage.toFixed()}%
                    </span>
                  </span>
                  <p className="line-through leading-4">
                    {product.price} <span>USD</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <button className="btn bg-[#F0F2F5] hover:bg-gray-500/40 rounded-md w-full max-w-10/12">
                    1 klikda xarid qilish
                  </button>
                  <button
                    className="bg-[#F0F2F5] hover:bg-gray-500/40 rounded-md btn max-w-3/12 p-2 flex items-center justify-center"
                    onClick={() => {
                      setLike(like == 0 ? 1 : 0);
                    }}
                  >
                    <FaHeart
                      className={
                        like == 0
                          ? "text-black text-2xl"
                          : "text-[#795BD5] text-2xl"
                      }
                    />
                  </button>
                </div>

                {basket >= 1 ? (
                  <div className="flex justify-between bg-[#F0F2F5] hover:bg-gray-500/40 rounded-[12px] items-center p-4 w-full">
                    <button
                      className="btn shadow-none bg-transparent border-0 h-7 w-7 text-2xl"
                      onClick={() => {
                        setBascet(basket - 1);
                        setBasketArr((prop) => prop - 1);
                      }}
                    >
                      {" "}
                      &minus;{" "}
                    </button>
                    <span className="font-bold">{basket}</span>
                    <button
                      className="btn shadow-none bg-transparent border-0 h-7 w-7 text-2xl"
                      onClick={() => {
                        setBascet(basket + 1);
                        setBasketArr((prop) => prop + 1);
                      }}
                    >
                      {" "}
                      &#43;
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn bg-[#7000FF] w-full text-white text-[18px] p-7 rounded-[12px]"
                    onClick={() => {
                      setBascet(basket + 1);
                      setBasketArr((prop) => prop + 1);
                    }}
                  >
                    Savatga qo'shish
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-green-500/50 p-1 w-8 h-8 flex items-center justify-center rounded-md">
                  <FaCheck />
                </span>
                <p className="font-medium text-sm">
                  {product.stock} dona sotib olish mumkun
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      {products && products.products && (
        <section className="container ml-auto mr-auto">
          <h2 className="text-2xl font-bold mb-3">O'xshash maxsulotlar</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-auto mr-auto mb-5">
            {products.products.map((_product) => (
              <List
                product={_product}
                key={_product.id}
                setBasketArr={setBasketArr}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
