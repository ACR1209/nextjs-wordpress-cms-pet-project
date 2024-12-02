"use client";
import { Button } from "@/components/ui/button";
import { PRODUCTS_PAGE } from "@/lib/routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold">Welcome to the AACR Store!</h1>
      <p className="mt-5 max-w-3xl">
        This is a simple store built with Next.js, Wordpress as headless CMS, Shoppify as e-commerce handler and Tailwind CSS. It is a
        starting point for building your own store.
      </p>

      <Button className="mt-5" onClick={
        () => router.push(PRODUCTS_PAGE)
      }>Browse products</Button>
    </div>
  );
}
