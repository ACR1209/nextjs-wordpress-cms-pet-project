"use server";
import { getProduct } from "@/lib/api/products";
import React from "react";

async function ProductInspectPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    return (
      <div className="text-center flex items-center justify-center text-xl font-bold h-full w-full">
        404: Product not found
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-full gap-5">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="font-semibold text-xl mb-5">$ {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductInspectPage;
