"use client";
import { BlogPost } from "@/types/blogpost";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BLOG_PAGE } from "@/lib/routes";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)


function BlogPostItem({ post }: { post: BlogPost }) {
  const timeAgo = new TimeAgo('en-US')

  return (
    <Link href={`${BLOG_PAGE}/${post.slug}`} className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{timeAgo.format(new Date(post.date))}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default BlogPostItem;
