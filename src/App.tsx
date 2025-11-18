import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CakesPage from './pages/CakesPage'
import CustomOrderPage from './pages/CustomOrderPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import OrderConfirmation from './components/OrderConfirmation'
import { cakes, categories } from './data/cakes'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage cakes={cakes} />} />
      <Route path="/cakes" element={<CakesPage cakes={cakes} categories={categories} />} />
      <Route path="/custom-order" element={<CustomOrderPage />} />
      <Route path="/order-confirmation" element={
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <main className="flex-1 py-12">
              <OrderConfirmation />
            </main>
          </div>
        </div>
      } />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
