"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { postContactForm } from "@/lib/api/contact";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  subject: z.string().min(2).max(255),
});

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {

    postContactForm(values)
      .then((response) => {
        if (response) {
          setError(undefined);
          setSuccess(true);
          form.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        } else {
          setError("An error occurred while sending the message.");

          setTimeout(() => {
            setError(undefined);
          }, 5000);
        }
      }
      )
  }

  return (
    <Form {...form}>
      {
        error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm my-5" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block">{error}</span>
          </div>
        )
      }

      {
        success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm my-5" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block">Message sent successfully.</span>
          </div>
        )
      }
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jdoe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Send</Button>
     
      </form>
    </Form>
  );
}

export default ContactForm;
