"use client";
import { Product } from "@/types/product";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_PAGE } from "@/lib/routes";

function ProductItem({ product }: { product: Product }) {
  return (
    <Link href={`${PRODUCTS_PAGE}/${product.slug}`}>
      <Card>
        <CardHeader className="p-0">
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={1200}
            className="object-cover w-full h-72"
          />
          <div className="px-6 py-3">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>$ {product.price}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{product.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductItem;
