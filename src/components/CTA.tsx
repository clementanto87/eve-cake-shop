import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CTA = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-pink-600 to-purple-600 rounded-3xl"></div>
        <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
        
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white font-medium">Limited Time Offer</span>
        </div>
        
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Ready to Make Your
          <span className="block text-yellow-300">
            Celebration Sweeter?
          </span>
        </h2>
        
        {/* Subheading */}
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Let us add a touch of sweetness to your special moments. Browse our full collection of custom and pre-designed cakes, crafted with love and premium ingredients.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">24h</div>
            <div className="text-sm text-white/80">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">100%</div>
            <div className="text-sm text-white/80">Fresh Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">★5.0</div>
            <div className="text-sm text-white/80">Customer Rating</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/cakes" 
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-white text-primary text-lg font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              Browse All Cakes
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            to="/custom-order" 
            className="group inline-flex items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-transparent text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Custom Order
            </span>
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/20">
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-sm">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Satisfaction Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">Fast Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA