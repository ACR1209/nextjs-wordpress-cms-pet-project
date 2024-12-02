import { contactFormSchema } from "@/components/contact/contact-form";
import wpApiClient from "../requests";
import { z } from "zod";

const FORM_ID = 19;

export async function postContactForm(data: z.infer<typeof contactFormSchema>) {
    try {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(`wp-${key}`, value as string);
        });

        formData.append('_wpcf7_unit_tag', `wpcf7-f${FORM_ID}-o1`);
        const response = await wpApiClient.post(`/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }catch(error){
        console.error(error);
        return null;
    }
}