import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export const Contact = () => {
  return <section id="contact" className="min-h-screen bg-gradient-to-br from-white to-blue-800 p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Contact <span className="text-black">Me</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-black mb-8">
              I'd love to connect or collaborate! Feel free to reach out through
              any of the channels below or use the contact form.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-black">Email</h4>
                  <a href="mailto:yourname@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    yourname@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-black">Phone</h4>
                  <a href="tel:+1234567890" className="text-red-950 hover:text-blue-600 transition-colors">
                    +123-456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-black">Location</h4>
                  <p className="text-red-950">City, Country</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Subject" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};