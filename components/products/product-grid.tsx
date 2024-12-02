"use client";
import { Product } from '@/types/product'
import React from 'react'
import ProductItem from './product-item';

function ProductGrid({products}: {products: Product[]}) {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {
            products.map((product) => (
                <ProductItem key={product.slug} product={product} />
            ))
        }
    </div>
  )
}

export default ProductGrid