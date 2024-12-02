import { Page } from "@/types/page";
import wpApiClient from "../requests";


export async function getPage(slug: string) {
    try {
        const response = await wpApiClient.get<Page[]>(`/wp/v2/pages?slug=${slug}&_fields=id,slug,title,content`);
        return response.data[0];
    } catch (error) {
        return null;
    }
}