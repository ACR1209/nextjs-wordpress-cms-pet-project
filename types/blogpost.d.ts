import { Page } from "./page";
export interface BlogPost {
    id?: string
    title: string
    content?: string
    date: string
    slug: string
}   

export interface BlogPostPage extends Page {
    date: string;
}

export interface WPBlogPost {
    id: string;
    title: {
        rendered: string;
    };
    slug: string;
    date: string;
}