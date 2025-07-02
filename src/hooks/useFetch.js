import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  console.log(url);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const req = await fetch(url);
      const data = await req.json();
      setProducts(data);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    getData();
  }, [url]);

  return { products, loading };
};
