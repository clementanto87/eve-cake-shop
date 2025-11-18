import type { Cake } from '../types/cake'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedCakes from '../components/FeaturedCakes'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

interface HomePageProps {
  cakes: Cake[]
}

const HomePage = ({ cakes }: HomePageProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="flex flex-1 flex-col items-center py-5">
          <div className="layout-content-container flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 sm:px-8">
            <Hero />
            <FeaturedCakes cakes={cakes} />
            <About />
            <CTA />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default HomePage