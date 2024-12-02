import blogposts from "@/lib/blogpost-placeholders";
import React from "react";

function InspectBlogPage({ params }: { params: { slug: string } }) {
  const blog = blogposts.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return (
      <div className="text-center flex items-center justify-center text-xl font-bold h-full w-full">
        404: Blog not found
      </div>
    );
  }

  return (
    <div>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <h2 className="text-xl mb-5">{blog.date}</h2>

        <p>{blog.content}</p>
    </div>
  )
}

export default InspectBlogPage;
