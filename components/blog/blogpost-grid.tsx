import { BlogPost } from "@/types/blogpost";
import React from "react";
import BlogPostItem from "./blogpost-item";

function BlogPostGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {posts.map((post) => (
        <BlogPostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default BlogPostGrid;
