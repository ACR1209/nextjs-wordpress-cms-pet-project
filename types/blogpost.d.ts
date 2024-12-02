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