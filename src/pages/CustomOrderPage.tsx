import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomOrderForm from '../components/CustomOrderForm'

export default function CustomOrderPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <main className="flex-1">
          <CustomOrderForm />
        </main>

        <Footer />
      </div>
    </div>
  )
}