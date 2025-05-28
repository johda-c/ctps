'use client'
import { useState } from 'react'
import { send } from 'emailjs-com'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Note: In a real implementation, you would replace these with your actual EmailJS credentials
      // This is just a placeholder for demonstration purposes
      await send(
        'service_n6m9yu4',
        'template_9k87rw7',
        formData,
        'YOUR_USER_ID'
      )

      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for assistance with your transportation needs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              {status.submitted ? (
                <div className={`p-4 mb-6 rounded-md ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4 mb-10">
                <p><strong>Phone:</strong> +264 81 628 3329</p>
                <div>
                  <p><strong>Email:</strong></p>
                  <p>johanc.cloete@outlook.com</p>
                  <p>johanc.cloete@gmail.com</p>
                </div>
                <p><strong>Address:</strong><br />Windhoek, Namibia</p>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">Business Hours</h3>
              <div className="space-y-4">
                <p><strong>Monday-Friday:</strong> 8:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
