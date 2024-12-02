import BlogPostGrid from "@/components/blog/blogpost-grid";
import { getBlogs } from "@/lib/api/blog";
import React from "react";

async function BlogPage() {
  const blogposts = await getBlogs();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>

      <BlogPostGrid posts={blogposts} />
    </div>
  );
}

export default BlogPage;
