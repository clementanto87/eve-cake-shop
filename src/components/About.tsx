import { useState, useEffect } from 'react'

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative py-20 px-4 @container overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-pink-500/5 rounded-3xl"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          
          {/* Content Section */}
          <div className={`flex flex-col gap-8 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary font-medium text-sm">Our Story</span>
            </div>
            
            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-black text-text-light dark:text-text-dark leading-tight">
                Meet
                <span className="block text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500">
                  Evelyn
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-subtext-light dark:text-subtext-dark">Master Baker</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="flex flex-col gap-6">
              <p className="text-lg text-text-light dark:text-text-dark leading-relaxed">
                From my kitchen to your celebration, every cake is a testament to my lifelong passion for baking. I believe in the magic of simple, high-quality ingredients and the joy that a truly homemade cake can bring.
              </p>
              <p className="text-lg text-text-light dark:text-text-dark leading-relaxed">
                It's not just about baking; it's about creating memories, one slice at a time. Each cake is crafted with love, attention to detail, and the freshest ingredients available.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Cake Varieties</div>
              </div>
            </div>
            
            {/* Signature */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                E
              </div>
              <div>
                <div className="font-bold text-text-light dark:text-text-dark">Evelyn's Homemade Cakes</div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">Baked with ❤️ since 2009</div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover transition-transform duration-700 hover:scale-105"
                data-alt="A warm, friendly photo of Evelyn smiling in her kitchen."
                style={{
                  backgroundImage: `url("./assets/images/about-evelyn.jpg")`
                }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-2xl shadow-xl flex items-center justify-center text-white">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-pink-500 rounded-full shadow-xl flex items-center justify-center text-white">
                <span className="text-2xl font-bold">★</span>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute top-4 right-4 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-2xl mb-1">🎂</div>
              <div className="text-sm font-bold text-text-light dark:text-text-dark">Fresh Daily</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-2xl mb-1">🌟</div>
              <div className="text-sm font-bold text-text-light dark:text-text-dark">Premium Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About