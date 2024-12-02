"use client";
import { BlogPost } from "@/types/blogpost";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BLOG_PAGE } from "@/lib/routes";

function BlogPostItem({ post }: { post: BlogPost }) {
  return (
    <Link href={`${BLOG_PAGE}/${post.slug}`} className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <p>{post.content}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BlogPostItem;
