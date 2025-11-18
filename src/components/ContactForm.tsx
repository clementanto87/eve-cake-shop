import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Column: Info */}
        <div className="flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-3">
            <p className="text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">Get in Touch</p>
            <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal max-w-md">
              We'd love to hear from you! Whether you have a question about our cakes, a custom order request, or just want to say hello, please feel free to reach out.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
              <div className="text-text-light dark:text-text-dark flex items-center justify-center rounded-lg bg-background-light dark:bg-background-dark shrink-0 size-12">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Phone</p>
                <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
              <div className="text-text-light dark:text-text-dark flex items-center justify-center rounded-lg bg-background-light dark:bg-background-dark shrink-0 size-12">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Email</p>
                <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">hello@evelynscakes.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark">
              <div className="text-text-light dark:text-text-dark flex items-center justify-center rounded-lg bg-background-light dark:bg-background-dark shrink-0 size-12">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">Address</p>
                <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">123 Sweet Street, Caketon, CA 90210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-surface-light dark:bg-surface-dark p-8 sm:p-10 rounded-xl border border-border-light dark:border-border-dark">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Send us a Message</h3>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Evelyn Doe"
                  className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-11 px-4 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-text-light dark:text-text-dark"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="evelyn.doe@email.com"
                  className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-11 px-4 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-text-light dark:text-text-dark"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Custom cake inquiry"
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark h-11 px-4 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-text-light dark:text-text-dark"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us more about your request..."
                rows={5}
                className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-text-light dark:text-text-dark resize-vertical"
                required
              />
            </div>

            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}