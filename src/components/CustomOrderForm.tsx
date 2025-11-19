import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendEmail, formatOrderEmail, sendCustomerConfirmation } from '../lib/emailService'

interface OrderFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  cakeType: string
  cakeSize: string
  flavor: string
  frosting: string
  deliveryDate: string
  deliveryTime: string
  deliveryAddress: string
  specialInstructions: string
  budget: string
  cakeImage?: File
  imageUrl?: string
}

const CustomOrderForm = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cakeType: 'birthday',
    cakeSize: 'medium',
    flavor: 'vanilla',
    frosting: 'buttercream',
    deliveryDate: '',
    deliveryTime: '',
    deliveryAddress: '',
    specialInstructions: '',
    budget: '',
    cakeImage: undefined,
    imageUrl: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [previewUrl, setPreviewUrl] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }
      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file')
        return
      }
      
      // Create preview URL
      const preview = URL.createObjectURL(file)
      setPreviewUrl(preview)
      
      setFormData(prev => ({
        ...prev,
        cakeImage: file
      }))
    }
  }

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'evelyn_cakes_preset') // IMPORTANT: Create this unsigned preset in Cloudinary Console
      // Note: Do NOT include folder when using upload preset - it's defined in the preset itself
      
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/doyf9a3rl/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      )
      
      if (response.ok) {
        const data = await response.json()
        return data.secure_url
      } else {
        const errorData = await response.json()
        console.error('Cloudinary upload error:', errorData)
        return null
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      return null
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Upload image if present
      let imageUrl = ''
      if (formData.cakeImage) {
        const uploadedUrl = await uploadImage(formData.cakeImage)
        if (!uploadedUrl) {
          throw new Error('Failed to upload image')
        }
        imageUrl = uploadedUrl
      }

      // Update form data with image URL
      const orderData = { ...formData, imageUrl }

      // Send order notification to business
      const businessEmailContent = {
        to: 'hello@evelynscakes.com',
        subject: `New Custom Cake Order - ${formData.firstName} ${formData.lastName}`,
        html: formatOrderEmail(orderData),
        replyTo: formData.email
      }

      const businessEmailSent = await sendEmail(businessEmailContent)
      
      // Send confirmation to customer
      const customerEmailSent = await sendCustomerConfirmation(formData.email, orderData)
      
      if (businessEmailSent && customerEmailSent) {
        setSubmitStatus('success')
        
        // Clean up preview URL
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl)
        }
        
        // Redirect to confirmation page after a short delay
        setTimeout(() => {
          navigate('/order-confirmation')
        }, 2000)
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          cakeType: 'birthday',
          cakeSize: 'medium',
          flavor: 'vanilla',
          frosting: 'buttercream',
          deliveryDate: '',
          deliveryTime: '',
          deliveryAddress: '',
          specialInstructions: '',
          budget: '',
          cakeImage: undefined,
          imageUrl: ''
        })
        setPreviewUrl('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting order:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-background-dark rounded-lg">
      <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">Custom Cake Order</h1>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
          <h3 className="font-semibold mb-2">Order Submitted Successfully!</h3>
          <p>Thank you for your order! We've sent a confirmation email and will contact you within 24 hours to discuss the details.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
          <h3 className="font-semibold mb-2">Error Submitting Order</h3>
          <p>There was an error submitting your order. Please try again or contact us directly at hello@evelynscakes.com.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
            />
          </div>
        </div>

        {/* Cake Details */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">Cake Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Cake Type *
              </label>
              <select
                name="cakeType"
                value={formData.cakeType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              >
                <option value="birthday">Birthday Cake</option>
                <option value="wedding">Wedding Cake</option>
                <option value="anniversary">Anniversary Cake</option>
                <option value="graduation">Graduation Cake</option>
                <option value="baby">Baby Shower Cake</option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Size *
              </label>
              <select
                name="cakeSize"
                value={formData.cakeSize}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              >
                <option value="small">Small (6-8 servings)</option>
                <option value="medium">Medium (10-15 servings)</option>
                <option value="large">Large (20-25 servings)</option>
                <option value="xlarge">Extra Large (30+ servings)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Flavor *
              </label>
              <select
                name="flavor"
                value={formData.flavor}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              >
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="redvelvet">Red Velvet</option>
                <option value="lemon">Lemon</option>
                <option value="carrot">Carrot</option>
                <option value="strawberry">Strawberry</option>
                <option value="coffee">Coffee</option>
                <option value="custom">Custom Flavor</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Frosting *
              </label>
              <select
                name="frosting"
                value={formData.frosting}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              >
                <option value="buttercream">Buttercream</option>
                <option value="creamcheese">Cream Cheese</option>
                <option value="fondant">Fondant</option>
                <option value="whipped">Whipped Cream</option>
                <option value="ganache">Chocolate Ganache</option>
                <option value="meringue">Meringue</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              Budget Range
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              placeholder="e.g., $50-100"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
            />
          </div>
        </div>

        {/* Delivery Information */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4">Delivery Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Delivery Date *
              </label>
              <input
                type="date"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                Preferred Time *
              </label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              >
                <option value="">Select a time</option>
                <option value="9-11">9:00 AM - 11:00 AM</option>
                <option value="11-1">11:00 AM - 1:00 PM</option>
                <option value="1-3">1:00 PM - 3:00 PM</option>
                <option value="3-5">3:00 PM - 5:00 PM</option>
                <option value="5-7">5:00 PM - 7:00 PM</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
              Delivery Address *
            </label>
            <textarea
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
              placeholder="Enter complete delivery address"
            />
          </div>
        </div>

        {/* Special Instructions */}
        <div className="border-t pt-6">
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Special Instructions
          </label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark"
            placeholder="Any special requests, dietary restrictions, design ideas, etc."
          />
        </div>

        {/* Cake Image Upload */}
        <div className="border-t pt-6">
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
            Upload Cake Design Image (Optional)
          </label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-light text-text-light dark:text-text-dark file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-opacity-90"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Upload a reference image for your cake design (max 5MB, JPG/PNG)
            </p>
            {formData.cakeImage && (
              <div className="mt-2">
                <p className="text-sm text-green-600 dark:text-green-400">
                  ✓ Selected: {formData.cakeImage.name}
                </p>
                {previewUrl && (
                  <div className="mt-3">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-xs rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="border-t pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting Order...' : 'Submit Order'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CustomOrderForm