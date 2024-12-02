import ProductGrid from "@/components/products/product-grid";
import { getProducts } from "@/lib/api/products";
import React from "react";

async function ProductsPage() {

  const products = await getProducts();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Products</h1>

      <ProductGrid products={products} />
    </div>
  );
}

export default ProductsPage;
