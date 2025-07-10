import { useGlobalContext } from "../hooks/useGlobalContext";

export const Basket = () => {
  const { card, allProduct, allPrice, dispatch } = useGlobalContext();

  const isAdded = card.find((item) => item.id == item.id);

  if (card.length === 0) {
    return (
      <div className="container ml-auto mr-auto p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Savatingiz,</h2>
          <span className="text-gray-600">0 mahsulot</span>
        </div>
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-24 w-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Savatingiz bo'sh
          </h3>
          <p className="text-gray-600">
            Mahsulotlar qo'shish uchun katalogga o'ting
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container ml-auto mr-auto mb-5">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Savatingiz,</h2>
        <span className="text-gray-600">{card.length} mahsulot</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {card.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      defaultChecked
                    />
                  </div>

                  {/* Product Image */}
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Katigoriya:{" "}
                      <span className="font-medium capitalize">
                        {item.category || "KOSMETIKI"}
                      </span>
                    </p>

                    <div className="flex items-center gap-3 mb-2">
                      <button
                        onClick={() => {
                          isAdded
                            ? isAdded.amound > 1
                              ? dispatch({
                                  type: "DEL_PRODUCT_ID",
                                  payload: item.id,
                                })
                              : dispatch({
                                  type: "DEL_PRODUCT",
                                  payload: item.id,
                                })
                            : "";
                        }}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>

                      <span className="w-8 text-center text-black font-medium">
                        {item.amound}
                      </span>

                      <button
                        onClick={() => {
                          dispatch({
                            type: "ADD_PRODUCT_ID",
                            payload: item.id,
                          });
                        }}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      {item.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${item.oldPrice * item.amount}
                        </span>
                      )}
                      <span className="text-lg font-semibold text-gray-900">
                        Narxi: $
                        {(
                          item.price -
                          (item.price * item.discountPercentage) / 100
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      isAdded
                        ? dispatch({
                            type: "DEL_PRODUCT",
                            payload: item.id,
                          })
                        : "";
                    }}
                    className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">Buyurtmangiz</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Mahsulotlar ({allProduct}):
                </span>
                <span className="font-medium">${allPrice}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Yetkazib berish:</span>
                <span className="font-medium text-green-600">Bepul</span>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Umumiy:</span>
                  <span className="text-xl font-semibold text-purple-600">
                    ${allPrice}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Rasmiylashtirishga o'tish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
