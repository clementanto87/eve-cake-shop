import { Link } from 'react-router-dom'
import type { Cake } from '../types/cake'

interface FeaturedCakesProps {
  cakes: Cake[]
}

const FeaturedCakes = ({ cakes }: FeaturedCakesProps) => {
  const featuredCakes = cakes.slice(0, 3)
  
  return (
    <section className="relative py-16 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-purple-50/50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-3xl"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-medium text-sm">Customer Favorites</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            Our Most Loved
            <span className="block text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
              Signature Cakes
            </span>
          </h2>
          <p className="text-subtext-light dark:text-subtext-dark max-w-2xl mx-auto">
            Handcrafted with premium ingredients and lots of love. These are the cakes our customers can't get enough of!
          </p>
        </div>
        
        {/* Featured Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredCakes.map((cake, index) => (
            <div 
              key={cake.id} 
              className="group relative transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                    data-alt={cake.name}
                    style={{ backgroundImage: `url("${cake.image}")` }}
                  >
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      BESTSELLER
                    </div>
                    
                    {/* Quick view button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link 
                        to="/cakes" 
                        className="bg-white text-primary px-6 py-3 rounded-full font-bold shadow-xl hover:scale-110 transition-transform duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors duration-300">
                      {cake.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">{cake.price}</span>
                  </div>
                  
                  <p className="text-subtext-light dark:text-subtext-dark mb-4 line-clamp-2">
                    {cake.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-subtext-light dark:text-subtext-dark ml-2">(4.9)</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-subtext-light dark:text-subtext-dark">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>24h delivery</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Link 
                      to="/custom-order" 
                      className="w-full bg-gradient-to-r from-primary to-pink-600 text-white text-center py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 block"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Cakes Button */}
        <div className="text-center mt-12">
          <Link 
            to="/cakes" 
            className="inline-flex items-center gap-2 bg-white dark:bg-[#1a1a1a] text-primary border-2 border-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Cakes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCakes