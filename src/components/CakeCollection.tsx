import { useState } from 'react'
import type { Cake } from '../types/cake'

interface CakeCollectionProps {
  cakes: Cake[]
  categories: string[]
  showTitle?: boolean
}

export default function CakeCollection({ cakes, categories, showTitle = true }: CakeCollectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCakes = selectedCategory === "All"
    ? cakes
    : cakes.filter(cake => cake.category === selectedCategory)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {showTitle && (
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h2 className="text-[#181112] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Our Collection of Cakes</h2>
        </div>
      )}

      <div className="flex gap-2 p-1 overflow-x-auto mb-8 -mx-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4 ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#181112] dark:text-white/90'
            }`}
          >
            <p className="text-sm font-medium leading-normal">{category}</p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCakes.map((cake) => (
          <div key={cake.id} className="flex flex-col gap-3 group">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                 data-alt={cake.name}
                 style={{ backgroundImage: `url("${cake.image}")` }}>
            </div>
            <div>
              <h3 className="text-[#181112] dark:text-white text-base font-bold leading-normal">{cake.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{cake.description}</p>
              <p className="text-[#181112] dark:text-white text-sm font-medium leading-normal mt-1">{cake.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}