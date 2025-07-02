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

  console.log(products);

  return (
    <>
      {product && (
        <section className="mb-5">
          <div className="flex container ml-auto mr-auto">
            <div className="w-8/12 mr-5">
              <div className="">
                <h1 className="text-3xl mb-3 font-bold">{product.title}</h1>
                <div className="mb-4">
                  ⭐ {product.rating.toFixed(1)} ({product.reviews.length}{" "}
                  sharx)
                </div>
                <div className="flex gap-3">
                  <figure className="bg-gray-400 w-6/12 rounded-2xl">
                    <img
                      src={
                        product.images[1]
                          ? product.images[1]
                          : product.thumbnail
                      }
                      className="w-full"
                      alt=""
                    />
                  </figure>
                  <figure className="bg-gray-400 w-6/12 rounded-2xl">
                    <img
                      src={
                        product.images[2]
                          ? product.images[2]
                          : product.thumbnail
                      }
                      className="w-full"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-400/50 w-4/12 rounded-3xl py-5.5 px-5 gap-5 flex flex-col">
              <div className="bg-gray-500/40 p-5 rounded-3xl">
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
                  <button className="btn bg-gray-500/40 rounded-2xl w-full max-w-10/12">
                    1 klikda xarid qilish
                  </button>
                  <button
                    className="bg-gray-500/40 rounded-2xl btn max-w-3/12 p-2 flex items-center justify-center"
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
                  <div className="flex justify-between bg-gray-400/40 rounded-sm items-center p-1 w-full">
                    <button
                      className="btn bg-white border-0 text-sm flex items-center w-7 h-7"
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
                      className="btn bg-white border-0 text-sm h-7 w-7"
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
                    className="btn btn-primary w-full"
                    onClick={() => {
                      setBascet(basket + 1);
                      setBasketArr((prop) => prop + 1);
                    }}
                  >
                    Savatga
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
