import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaBars, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState(null);
  const { allProduct } = useGlobalContext();
  return (
    <header className="mb-5">
      <div className="lg:bg-gray-300 w-full py-1 text-sm">
        <div className="container mx-auto flex items-center">
          <div className="mr-auto flex gap-3 justify-between w-full lg:w-max">
            <button className="cursor-pointer flex items-center gap-1">
              <FaMapMarkerAlt />
              Toshkent
              <FaChevronDown className="text-1xl" />
            </button>
            <a href="#">Topshirish punktlari</a>
          </div>
          <div className="lg:flex gap-3 items-center font-medium hidden">
            <a href="#" className="text-purple-600">
              Sotuvchi bo'lish
            </a>
            <span className="opacity-55">|</span>
            <a href="#" className="text-purple-600">
              Topshirish punktni ochish
            </a>
            <a href="#">Savol-javob</a>
            <button>Buyurtmalarim</button>
            <button className="flex items-center gap-3 font-medium cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
                alt="O'zbekiston bayrog'i"
                className="rounded-full w-5 h-5"
              />
              O'zbekcha
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow">
        <div className="container mx-auto lg:flex items-center py-3 gap-6 hidden">
          <Link to="/" className="text-2xl font-bold text-purple-700">
            Uzum Market
          </Link>
          <button className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded font-medium hover:bg-purple-200 transition">
            <FaBars className="text-purple-700" size={20} />
            Katalog
          </button>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Mahsulotlarni qidirish"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
            />
          </div>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            <FaUser className="text-gray-700" size={20} />
            Kirish
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
          >
            <FaHeart className="text-gray-700" size={20} />
            Saqlangan
          </a>
          <Link
            to="/basket"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition relative"
          >
            <FaShoppingCart className="text-gray-700" size={20} />
            Savat
            {allProduct > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-2 py-0.5">
                {allProduct}
              </span>
            )}
          </Link>
        </div>
        <div className="flex-1 flex lg:hidden justify-center mt-5 container ml-auto mr-auto gap-3">
          <input
            type="text"
            placeholder="Mahsulotlarni qidirish"
            className="w-11/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-500"
            onInput={(e) => {
              setSearch(e.target.value);
            }}
          />
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition relative"
          >
            <FaHeart className="text-gray-700" size={20} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition relative"
          >
            <FaShoppingCart className="text-gray-700" size={20} />
            {allProduct > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-2 py-0.5">
                {allProduct}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
};
