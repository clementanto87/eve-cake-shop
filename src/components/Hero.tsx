import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="@container relative">
      <div className="@[480px]:p-4">
        <div className="flex min-h-[600px] flex-col gap-8 bg-cover bg-center bg-no-repeat @[480px]:gap-10 @[480px]:rounded-2xl items-center justify-center p-8 text-center relative overflow-hidden" 
             data-alt="A beautiful, professionally baked cake with intricate frosting on a clean background." 
             style={{
               backgroundImage: `linear-gradient(135deg, rgba(238, 43, 75, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%), url("./assets/images/hero-bg.jpg")`,
               backgroundAttachment: 'fixed'
             }}>
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
          
          <div className={`flex flex-col gap-6 z-10 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Now Open for Custom Orders</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em] drop-shadow-2xl">
              Made with Love,
              <span className="block text-primary bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-pink-100">
                Baked to Perfection
              </span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-white/95 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Discover our delightful range of homemade cakes, crafted with the freshest, highest-quality ingredients and lots of love.
            </h2>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm">Cake Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/cakes" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gradient-to-r from-primary to-pink-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Cakes
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/custom-order" 
                className="group inline-flex items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Custom Order
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero