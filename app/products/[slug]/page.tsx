"use server";
import products from "@/lib/products-placeholders";
import React from "react";

function ProductInspectPage({ params }: { params: { slug: string } }) {
  const product = products.find((product) => product.slug === params.slug);

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
