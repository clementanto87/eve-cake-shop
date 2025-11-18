import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-[#181112] via-[#2a1818] to-[#3a1f1f] text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#ee2b4b] to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-[#ee2b4b] rounded-lg flex items-center justify-center shadow-lg shadow-[#ee2b4b]/25">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                      <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f8f6f6] rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-[-0.02em]">Evelyn's</h2>
                  <p className="text-xs text-[#f8f6f6]/70 tracking-wider uppercase">Homemade Cakes</p>
                </div>
              </div>
              
              <p className="text-[#f8f6f6]/80 leading-relaxed mb-6">
                Crafting memories one slice at a time. Premium ingredients, traditional recipes, and a whole lot of love in every bite.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#ee2b4b]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="text-sm text-[#f8f6f6]/90">4.9/5 Stars</span>
                </div>
                <div className="text-sm text-[#f8f6f6]/70">•</div>
                <div className="text-sm text-[#f8f6f6]/90">500+ Happy Customers</div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#f8f6f6]">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-[#f8f6f6]/80 hover:text-[#ee2b4b] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#ee2b4b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/cakes" className="text-[#f8f6f6]/80 hover:text-[#ee2b4b] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#ee2b4b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Our Cakes
                  </a>
                </li>
                <li>
                  <a href="/custom-order" className="text-[#f8f6f6]/80 hover:text-[#ee2b4b] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#ee2b4b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Custom Orders
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-[#f8f6f6]/80 hover:text-[#ee2b4b] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#ee2b4b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-[#f8f6f6]/80 hover:text-[#ee2b4b] transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-[#ee2b4b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#f8f6f6]">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#ee2b4b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#ee2b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f8f6f6]/90 font-medium">Visit Us</p>
                    <p className="text-[#f8f6f6]/70 text-sm">123 Bakery Lane, Sweetville, 45678</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#ee2b4b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#ee2b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f8f6f6]/90 font-medium">Call Us</p>
                    <p className="text-[#f8f6f6]/70 text-sm">(123) 456-7890</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#ee2b4b]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#ee2b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#f8f6f6]/90 font-medium">Email Us</p>
                    <p className="text-[#f8f6f6]/70 text-sm">hello@evelynscakes.com</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#f8f6f6]">Stay Sweet</h3>
              <p className="text-[#f8f6f6]/80 mb-6 text-sm">
                Get exclusive offers, new cake announcements, and sweet surprises delivered to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-[#f8f6f6]/10 border border-[#f8f6f6]/20 rounded-lg text-white placeholder-[#f8f6f6]/50 focus:outline-none focus:border-[#ee2b4b] focus:ring-1 focus:ring-[#ee2b4b] transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ee2b4b] hover:bg-[#d62342] text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ee2b4b]/25"
                >
                  {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-[#f8f6f6]/60">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-[#f8f6f6]/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <p className="text-[#f8f6f6]/80 font-medium">Follow Our Sweet Journey</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#f8f6f6]/10 rounded-lg flex items-center justify-center text-[#f8f6f6]/80 hover:bg-[#ee2b4b] hover:text-white transition-all duration-200 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.215 3.793 4.65-1.002.274-2.12.338-3.22.115.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#f8f6f6]/10 rounded-lg flex items-center justify-center text-[#f8f6f6]/80 hover:bg-[#ee2b4b] hover:text-white transition-all duration-200 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#f8f6f6]/10 rounded-lg flex items-center justify-center text-[#f8f6f6]/80 hover:bg-[#ee2b4b] hover:text-white transition-all duration-200 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#f8f6f6]/10 rounded-lg flex items-center justify-center text-[#f8f6f6]/80 hover:bg-[#ee2b4b] hover:text-white transition-all duration-200 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-[#f8f6f6]/60">
                <div className="flex items-center gap-2">
                  
                  
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                  </svg>
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f8f6f6]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#f8f6f6]/60 text-sm">
                © 2024 Evelyn's Homemade Cakes. All rights reserved. Made with ❤️ and lots of sugar.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-[#f8f6f6]/60 hover:text-[#ee2b4b] transition-colors">Privacy Policy</a>
                <a href="#" className="text-[#f8f6f6]/60 hover:text-[#ee2b4b] transition-colors">Terms of Service</a>
                <a href="#" className="text-[#f8f6f6]/60 hover:text-[#ee2b4b] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}