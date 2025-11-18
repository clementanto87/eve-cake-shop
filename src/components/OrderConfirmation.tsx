import { Link } from 'react-router-dom'

const OrderConfirmation = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-background-dark rounded-lg text-center">
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Thank you for choosing Evelyn's Homemade Cakes!
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 text-left">
        <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">
          What happens next?
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </div>
            <div>
              <h3 className="font-medium text-text-light dark:text-text-dark">Review Your Order</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We'll review your custom cake order within 24 hours
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </div>
            <div>
              <h3 className="font-medium text-text-light dark:text-text-dark">Personal Consultation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We'll contact you to confirm details and discuss any special requirements
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </div>
            <div>
              <h3 className="font-medium text-text-light dark:text-text-dark">Final Confirmation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We'll provide a final quote and collect payment
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </div>
            <div>
              <h3 className="font-medium text-text-light dark:text-text-dark">Baking & Delivery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your cake will be freshly prepared and delivered on your chosen date
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          Important Information
        </h3>
        <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1 text-left">
          <li>• Check your email for order confirmation and details</li>
          <li>• Keep your phone available for our consultation call</li>
          <li>• Orders require at least 48 hours advance notice</li>
          <li>• Payment is collected after final confirmation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <Link
          to="/"
          className="inline-block bg-primary text-white py-3 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition-opacity"
        >
          Return to Homepage
        </Link>
        
        <div className="pt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Have questions? We're here to help!
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a 
              href="mailto:hello@evelynscakes.com" 
              className="text-primary hover:underline"
            >
              hello@evelynscakes.com
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="tel:1234567890" 
              className="text-primary hover:underline"
            >
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation
