import { BlogPost, BlogPostPage, WPBlogPost } from "@/types/blogpost";
import wpApiClient from "../requests";


export async function getBlogPage(slug: string) {
    try {
        const response = await wpApiClient.get<BlogPostPage[]>(`/wp/v2/posts?slug=${slug}&_fields=id,slug,title,content,date`);
        return response.data[0];
    } catch {
        return null;
    }
}

function parseBlogPost(blogPost: WPBlogPost): BlogPost {
    return {
        id: blogPost.id,
        title: blogPost.title.rendered,
        slug: blogPost.slug,
        date: blogPost.date,
    };
}
    
export async function getBlogs() {
    try {
        const response = await wpApiClient.get<WPBlogPost[]>("/wp/v2/posts?_fields=id,slug,title,date");
        return response.data.map(parseBlogPost);
    } catch {
        return [];
    }
}
