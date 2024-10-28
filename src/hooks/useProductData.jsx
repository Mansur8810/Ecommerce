import { useEffect, useState } from "react";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "https://fakestoreapi.com/products?limit=20";

  const fetchEcommerce = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      setProducts(data);
    } catch (err) {
      console.log("Error fetching eCommerce data:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEcommerce();
  }, []);

  return {
    products,
    loading,
  };
};

export default useProductData;
