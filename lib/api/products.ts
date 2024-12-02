import { Product, WPProduct } from "@/types/product";
import wpApiClient from "../requests";


function parseProduct(product: WPProduct): Product {
    return {
        id: product.id,
        name: product.title.rendered,
        slug: product.slug,
        price: product.acf.price,
        description: product.acf.summary,
        image: product.acf.main_image,
    };
}

export async function getProducts() {
    try {
        const response = await wpApiClient.get("/wp/v2/products?acf_format=standard&_fields=id,title,slug,acf");
        return response.data.map(parseProduct);
    }catch {
        return [];
    }
}

export async function getProduct(slug: string) {
    try {
        const response = await wpApiClient.get(`/wp/v2/products?slug=${slug}&acf_format=standard&_fields=id,title,slug,acf`);
        return parseProduct(response.data[0]);
    }catch {
        return null;
    }
}