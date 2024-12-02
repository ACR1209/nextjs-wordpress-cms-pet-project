import ProductGrid from "@/components/products/product-grid";
import products from "@/lib/products-placeholders";
import React from "react";

function ProductsPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Products</h1>

      <ProductGrid products={products} />
    </div>
  );
}

export default ProductsPage;
