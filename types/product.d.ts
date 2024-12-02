export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    image: string;
    slug: string;
} 

export interface WPProduct {
    id: number;
    title: {
        rendered: string;
    };
    slug: string;
    acf: {
        price: number;
        summary: string;
        main_image: string;
    };
}