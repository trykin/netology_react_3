import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./Product";

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export function OfferList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function GetSore() {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    GetSore();
  }, []);

  return (
    <>
      {products.map((e) => (
        <Product title={e.title} url={e.image} id={e.id} price={e.price} />
      ))}
    </>
  );
}
