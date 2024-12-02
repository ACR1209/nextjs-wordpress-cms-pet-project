import { getBlogPage } from "@/lib/api/blog";
import React from "react";

async function InspectBlogPage({ params }: { params: { slug: string } }) {
  const blogData = await getBlogPage(params.slug) 

  if (!blogData) {
    return (
      <div className='text-center flex items-center justify-center text-xl font-bold h-full w-full'>
        404: Blog not found
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold mb-5">{blogData.title.rendered}</h1>
        <div className='w-full max-w-2xl' dangerouslySetInnerHTML={{__html: blogData.content.rendered}} />
    </div>
  )
}

export default InspectBlogPage;
