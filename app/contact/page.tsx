import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact | Coffeepoint',
  description: 'Get in touch with Coffeepoint for questions, events, or a good cup of coffee.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream-base">
        <ContactHero />
        <section className="w-full pb-20 md:pb-[120px]">
          <div className="mx-auto grid max-w-[1280px] items-stretch gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
