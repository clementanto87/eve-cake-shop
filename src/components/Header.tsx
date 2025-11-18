import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex justify-center px-4 sm:px-8">
        <div className="flex h-16 w-full max-w-7xl items-center justify-between border-b border-solid border-b-[#f4f0f1]/10 dark:border-b-[#f8f6f6]/10">
          <div className="flex items-center gap-4">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em] text-text-light dark:text-text-dark">Evelyn's</h2>
          </div>
          <nav className="hidden items-center gap-9 md:flex">
            <Link 
              to="/" 
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/cakes" 
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/cakes') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Cakes
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/about') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/custom-order" 
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/custom-order') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Custom Order
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium leading-normal transition-colors ${
                isActive('/contact') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link 
              to="/custom-order" 
              className={`hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-opacity ${
                isActive('/custom-order')
                  ? 'bg-primary/20 text-primary'
                  : 'bg-primary text-white hover:bg-opacity-90'
              }`}
            >
              <span className="truncate">Order Now</span>
            </Link>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center size-10 rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className={`text-sm font-medium leading-normal transition-colors py-2 ${
                isActive('/') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/cakes" 
              onClick={closeMobileMenu}
              className={`text-sm font-medium leading-normal transition-colors py-2 ${
                isActive('/cakes') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Cakes
            </Link>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className={`text-sm font-medium leading-normal transition-colors py-2 ${
                isActive('/about') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/custom-order" 
              onClick={closeMobileMenu}
              className={`text-sm font-medium leading-normal transition-colors py-2 ${
                isActive('/custom-order') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Custom Order
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className={`text-sm font-medium leading-normal transition-colors py-2 ${
                isActive('/contact') 
                  ? 'text-primary dark:text-primary font-bold' 
                  : 'text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/custom-order" 
              onClick={closeMobileMenu}
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] transition-opacity ${
                isActive('/custom-order')
                  ? 'bg-primary/20 text-primary'
                  : 'bg-primary text-white hover:bg-opacity-90'
              }`}
            >
              <span className="truncate">Order Now</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header