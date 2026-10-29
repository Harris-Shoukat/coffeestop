# Coffeepoint

Coffeepoint is a responsive coffee shop website built with Next.js, TypeScript, and Tailwind CSS. It includes a landing page, a filterable menu, a contact page, a product drawer, and smooth scroll animations.

## Pages

- `/` - Home page with hero, featured menu, story, testimonials, and Instagram section
- `/menu` - Full menu with category filters and product cards
- `/contact` - Contact form, opening hours, address, email, and phone details

## Features

- Responsive layout for mobile, tablet, and desktop
- Product drawer with quantity controls and order total
- Menu filtering by category
- Scroll and entrance animations with Framer Motion
- Custom logo-based favicon and app icons
- Shared navbar, footer, and cart context
- Remote images optimized through `next/image`

## Tech stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Getting started

You need Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can also use `yarn`, `pnpm`, or `bun` if you prefer.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project structure

```text
app/
  contact/            Contact page
  menu/               Menu page
  globals.css         Tailwind theme and global styles
  layout.tsx          Root layout, fonts, metadata, cart provider
  page.tsx            Home page
components/
  contact/            Contact hero, form, and info cards
  Footer.tsx          Site footer
  Hero.tsx            Home hero
  Highlights.tsx      Featured products
  MenuCategories.tsx  Menu category cards
  Navbar.tsx          Site navigation
  OurStory.tsx        Story section
  ProductDrawer.tsx   Product drawer
  Testimonials.tsx    Customer testimonials
context/
  CartContext.tsx     Product drawer state
lib/
  images.ts           Shared image URLs
  products.ts         Menu data and category helpers
public/
  l1.png              Logo
```

## Customizing the site

- Edit menu items, prices, categories, and images in `lib/products.ts`.
- Change brand colors and fonts in the `@theme` block in `app/globals.css`.
- Update the site title and description in `app/layout.tsx`.
- Add or change remote image hosts in `next.config.ts`.
- Replace `public/l1.png` and regenerate the files in `app/` if the logo changes.
- Update contact details in `components/contact/ContactInfo.tsx` and `components/Footer.tsx`.

## Current limitations

The contact form shows a success state but does not send email yet. The product drawer's "Add to Cart" button is also a placeholder. Connect both to a backend, email service, or payment flow before using the site in production.

## Deployment

This project can be deployed to Vercel or any platform that supports Next.js. Run `npm run build` to verify the production build before deploying.
