import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Stats from '@/components/Stats'
import About from '@/components/About'
import BusinessNetwork from '@/components/BusinessNetwork'
import FeaturedProducts from '@/components/FeaturedProducts'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Stats />
        <About />
        <BusinessNetwork />
        <FeaturedProducts />
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}
