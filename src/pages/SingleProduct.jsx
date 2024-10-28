import React, { useEffect, useState } from "react";
import ProductDetailCard from "../Components/ProductDetailCard";
import useProductData from "../hooks/useProductData";
import { useParams } from "react-router-dom";
import ProductDetailSkeleton from "../Components/Skeletons";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useProductData();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (products) {
      const data = products.find((item) => item?.id === Number(id));
      setProductData(data);
    }
  }, [id, products]);

  return !productData ? (
    <ProductDetailSkeleton />
  ) : (
    <ProductDetailCard {...productData} />
  );
};

export default SingleProduct;
