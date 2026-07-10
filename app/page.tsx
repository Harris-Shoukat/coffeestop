import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeatureRibbon from '@/components/FeatureRibbon'
import MenuCategories from '@/components/MenuCategories'
import Highlights from '@/components/Highlights'
import OurStory from '@/components/OurStory'
import Testimonials from '@/components/Testimonials'
import InstagramFeed from '@/components/InstagramFeed'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureRibbon />
        <MenuCategories />
        <Highlights />
        <OurStory />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  )
}
