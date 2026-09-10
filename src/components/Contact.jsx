import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/dreamstudiohl@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: "New Enquiry from Dream Studio Website",
          _captcha: "false" // Disables the visual captcha redirect
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We would love to hear from you. Visit our studio or drop us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Visit Us</h4>
                  <p className="text-foreground/70 mt-1">M.G road, near Lenskart<br/>Shetty Street, Chikmagalur-577101</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Call or WhatsApp</h4>
                  <div className="text-foreground/70 mt-1 flex flex-col sm:flex-row sm:gap-3 sm:items-center">
                    <a href="tel:+918310755920" className="group flex items-center gap-2 hover:text-accent transition-colors py-1">
                      +91 8310755920
                      <span className="text-xs font-medium bg-accent text-white px-2 py-0.5 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Call</span>
                    </a>
                    <span className="hidden sm:inline text-foreground/20">|</span>
                    <a href="tel:+918867575828" className="group flex items-center gap-2 hover:text-accent transition-colors py-1">
                      +91 8867575828
                      <span className="text-xs font-medium bg-accent text-white px-2 py-0.5 rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Call</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Email Us</h4>
                  <p className="text-foreground/70 mt-1">dreamstudiohl@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-accent mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground">Business Hours</h4>
                  <p className="text-foreground/70 mt-1">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Location Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Google Maps */}
              <div className="relative w-full h-64 bg-foreground/5 rounded-lg border border-foreground/10 overflow-hidden shadow-inner group">
                <iframe 
                  src="https://maps.google.com/maps?q=13.3173926,75.7743926&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dream Studio Location"
                ></iframe>
                
                {/* Custom Hover Overlay */}
                <a 
                  href="https://maps.google.com/?q=13.3173926,75.7743926" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
                >
                  <span className="bg-accent text-white px-4 py-2 rounded-full font-medium text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                    <MapPin className="w-4 h-4" />
                    Open Maps
                  </span>
                </a>
              </div>

              {/* Shop Storefront */}
              <div className="w-full h-64 rounded-lg overflow-hidden border border-foreground/10 shadow-inner group">
                <img 
                  src="/assets/shop-front.jpg" 
                  alt="Dream Studio Storefront" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-8 shadow-sm border border-foreground/5"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send an Enquiry</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center h-full flex flex-col items-center justify-center border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-transparent border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-transparent border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="+91 83107 55920"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-transparent border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                      placeholder="dreamstudiohl@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-1">Service Required</label>
                  <select 
                    id="service" 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-transparent border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Photo Editing">Photo Editing</option>
                    <option value="Custom Photo Frames">Custom Photo Frames</option>
                    <option value="Resin Art">Resin Art</option>
                    <option value="Photo Printing">Photo Printing</option>
                    <option value="Other">Other / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md bg-transparent border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                    placeholder="Tell us about your memory..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary !bg-accent hover:!bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
