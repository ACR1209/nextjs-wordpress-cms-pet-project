import { getPage } from '@/lib/api/pages'
import React from 'react'

async function Page({ params }: { params: { slug: string } }) {
  const pageData = await getPage(params.slug) 

  if (!pageData) {
    return (
      <div className='text-center flex items-center justify-center text-xl font-bold h-full w-full'>
        404: Page not found
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold mb-5">{pageData.title.rendered}</h1>
        <div className='w-full max-w-2xl' dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
    </div>
  )
}

export default Page