import BlogPostGrid from "@/components/blog/blogpost-grid";
import blogposts from "@/lib/blogpost-placeholders";
import React from "react";

function BlogPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Blog Posts</h1>

      <BlogPostGrid posts={blogposts} />
    </div>
  );
}

export default BlogPage;
