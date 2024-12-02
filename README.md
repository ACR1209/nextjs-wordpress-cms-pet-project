This is a [Next.js](https://nextjs.org) project to test integrating [WordPress](https://wordpress.org/) as headless CMS.  

## Setup

You'll first have to run `docker compose up -d` to start the Wordpress instance. With that you can just create the SCF post type for the products and get the `Contact Form 7` and `Flamingo` plugins to handle the contact form.

Then you can use the `.env.local.sample` by renaming it to `.env.local` and replacing the variables 

Lastly run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

