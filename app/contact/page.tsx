import ContactForm from '@/components/contact/contact-form'
import React from 'react'

function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className='w-full max-w-lg'>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage