export const Footer = () => {
  return (
    <>
      <footer className="w-full py-5">
        <div className="container ml-auto mr-auto lg:flex justify-between hidden">
          <div>
            <h4 className="mb-3 font-semibold">Biz haqimizda</h4>
            <ul className="list-none p-0 text-gray-700 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Topshirish punktlari
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Foydalanuvchilarga</h4>
            <ul className="list-none p-0 text-gray-700 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Biz bilan bog'lanish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Savol-Javob
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Tadbirkorlarga</h4>
            <ul className="list-none p-0 text-gray-700 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Uzumda soting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Sotuvchi kabinetiga kirish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Topshirish punktini ochish
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h4 className="mb-3 font-semibold">Ilovalarni yuklab olish</h4>
              <div className="flex gap-3">
                <a href="#" className="flex font-semibold gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    alt="App Store"
                    className="w-6"
                  />
                  AppStore
                </a>
                <a href="#" className="flex font-semibold gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    alt="Google Play"
                    className="w-6"
                  />
                  Google Play
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Ijtimoiy tarmoqlar</h4>
              <div className="flex gap-3">
                <a href="#">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Telegram"
                    className="w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                    alt="Instagram"
                    className="w-6"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                    alt="Facebook"
                    className="w-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="opacity-20 container ml-auto mr-auto" />
      <div className="text-center text-gray-400 py-5 text-sm container ml-auto mr-auto">
        © {new Date().getFullYear()} Uzum Market. Barcha huquqlar himoyalangan.
      </div>
    </>
  );
};
