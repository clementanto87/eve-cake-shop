import Header from '../components/Header'
import CakeCollection from '../components/CakeCollection'
import Footer from '../components/Footer'
import type { Cake } from '../types/cake'

interface CakesPageProps {
  cakes: Cake[]
  categories: string[]
}

export default function CakesPage({ cakes, categories }: CakesPageProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-[#181112] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-8">All Cakes</h1>
          </div>
          <CakeCollection cakes={cakes} categories={categories} showTitle={false} />
        </main>

        <Footer />
      </div>
    </div>
  )
}