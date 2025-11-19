import emailjs from '@emailjs/browser'

interface EmailData {
  to: string
  subject: string
  html: string
  replyTo?: string
}

// Email service using EmailJS (client-side solution)
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // For production with EmailJS, you would:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create an email service
    // 3. Create an email template
    // 4. Replace these values with your actual credentials
    
    // For development/demo, we'll simulate the email sending
    console.log('=== EMAIL SERVICE ===')
    console.log('To:', emailData.to)
    console.log('Subject:', emailData.subject)
    console.log('Reply-To:', emailData.replyTo)
    console.log('HTML Content Length:', emailData.html.length)
    console.log('===================')
    
    // In production with EmailJS, uncomment and use this code:
    
    
    const SERVICE_ID = 'service_qy59qqi'
    const TEMPLATE_ID = 'template_25f1y2h'
    const PUBLIC_KEY = 'XQ3TQZST-Fbe6awEX'
    
    const templateParams = {
      to_email: emailData.to,
      subject: emailData.subject,
      message: emailData.html.replace(/<[^>]*>/g, ''), // Strip HTML for plain text fallback
      html_content: emailData.html, // Send full HTML for templates that support it
      reply_to: emailData.replyTo
    }
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )
    
    return response.status === 200
    
    
    // Alternative: Use a backend API endpoint
    // If you have a backend, you could call:
    /*
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    
    return response.ok
    */
    
    // For now, return true to simulate successful sending
    // In production, this should return the actual response
    return true
    
  } catch (error) {
    console.error('Error sending email:', error)
    return false
  }
}

// Alternative: Use a third-party service like Resend (requires backend)
export const sendEmailWithResend = async (emailData: EmailData): Promise<boolean> => {
  try {
    // This requires a backend API key, so it would need to be implemented on the server
    const response = await fetch('/api/send-email-resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
    
    return response.ok
  } catch (error) {
    console.error('Error sending email with Resend:', error)
    return false
  }
}

// Helper function to format email HTML with better styling
export const formatOrderEmail = (orderData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  cakeType: string
  cakeSize: string
  flavor: string
  frosting: string
  budget?: string
  deliveryDate: string
  deliveryTime: string
  deliveryAddress: string
  specialInstructions?: string
  imageUrl?: string
}): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Cake Order</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ee2b4b; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f8f6f6; }
        .section { margin-bottom: 20px; }
        .label { font-weight: bold; color: #181112; }
        .value { margin-bottom: 10px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎂 New Custom Cake Order</h1>
        </div>
        <div class="content">
          <div class="section">
            <h2>Customer Information</h2>
            <p class="value"><span class="label">Name:</span> ${orderData.firstName} ${orderData.lastName}</p>
            <p class="value"><span class="label">Email:</span> ${orderData.email}</p>
            <p class="value"><span class="label">Phone:</span> ${orderData.phone}</p>
          </div>
          
          <div class="section">
            <h2>Cake Details</h2>
            <p class="value"><span class="label">Cake Type:</span> ${orderData.cakeType}</p>
            <p class="value"><span class="label">Size:</span> ${orderData.cakeSize}</p>
            <p class="value"><span class="label">Flavor:</span> ${orderData.flavor}</p>
            <p class="value"><span class="label">Frosting:</span> ${orderData.frosting}</p>
            <p class="value"><span class="label">Budget:</span> ${orderData.budget || 'Not specified'}</p>
          </div>
          
          <div class="section">
            <h2>Delivery Information</h2>
            <p class="value"><span class="label">Delivery Date:</span> ${orderData.deliveryDate}</p>
            <p class="value"><span class="label">Delivery Time:</span> ${orderData.deliveryTime}</p>
            <p class="value"><span class="label">Delivery Address:</span></p>
            <p class="value">${orderData.deliveryAddress}</p>
          </div>
          
          <div class="section">
            <h2>Special Instructions</h2>
            <p class="value">${orderData.specialInstructions || 'None provided'}</p>
          </div>
          
          ${orderData.imageUrl ? `
          <div class="section">
            <h2>Cake Design Reference</h2>
            <p class="value">Customer uploaded a reference image:</p>
            <p class="value">
              <a href="${orderData.imageUrl}" target="_blank" style="color: #ee2b4b; text-decoration: none;">
                📷 View Cake Design Image
              </a>
            </p>
            <p class="value" style="margin-top: 10px;">
              <img src="${orderData.imageUrl}" alt="Cake Design Reference" style="max-width: 300px; max-height: 300px; border: 1px solid #ddd; border-radius: 8px;" />
            </p>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>This order was placed on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
          <p>Evelyn's Homemade Cakes - Baked with Love</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Send customer confirmation email
export const sendCustomerConfirmation = async (
  customerEmail: string, 
  orderData: {
    firstName: string
    lastName: string
    email: string
    phone: string
    cakeType: string
    cakeSize: string
    flavor: string
    frosting: string
    budget?: string
    deliveryDate: string
    deliveryTime: string
    deliveryAddress: string
    specialInstructions?: string
    imageUrl?: string
  }
): Promise<boolean> => {
  const confirmationEmail = {
    to: customerEmail,
    subject: 'Your Custom Cake Order Confirmation - Evelyn\'s Homemade Cakes',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Order Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #ee2b4b; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f8f6f6; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Order Confirmation</h1>
            <p>Thank you for choosing Evelyn's Homemade Cakes!</p>
          </div>
          <div class="content">
            <h2>Order Details</h2>
            <p><strong>Order Number:</strong> #${Date.now()}</p>
            <p><strong>Cake Type:</strong> ${orderData.cakeType}</p>
            <p><strong>Size:</strong> ${orderData.cakeSize}</p>
            <p><strong>Flavor:</strong> ${orderData.flavor}</p>
            <p><strong>Frosting:</strong> ${orderData.frosting}</p>
            <p><strong>Delivery Date:</strong> ${orderData.deliveryDate}</p>
            
            <h3>What's Next?</h3>
            <ul>
              <li>We'll review your order within 24 hours</li>
              <li>We'll contact you to confirm details and pricing</li>
              <li>Payment will be collected after confirmation</li>
              <li>Your cake will be freshly prepared for delivery</li>
            </ul>
            
            <p>If you have any questions, please don't hesitate to contact us at hello@evelynscakes.com or call (123) 456-7890.</p>
          </div>
          <div class="footer">
            <p>Evelyn's Homemade Cakes | (123) 456-7890 | hello@evelynscakes.com</p>
            <p>Baked with Love, Delivered with Care</p>
          </div>
        </div>
      </body>
      </html>
    `
  }
  
  return await sendEmail(confirmationEmail)
}