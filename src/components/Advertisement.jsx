import { useState, useEffect } from "react";

export const Advertisement = () => {
  const [index, setIndex] = useState(0);
  const ads = [
    "https://picsum.photos/1000/400?random=1",
    "https://picsum.photos/1000/400?random=2",
    "https://picsum.photos/1000/400?random=3",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="ml-auto mr-auto container flex items-center justify-center mb-5">
      <img
        src={ads[index]}
        alt="Advertisement"
        className="w-full h-[400px] object-cover rounded-3xl"
      />
    </div>
  );
};
