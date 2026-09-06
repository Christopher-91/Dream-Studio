import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-accent blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-accent blur-[120px] rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Have a Memory You Want to Preserve?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light"
        >
          Let Dream Studio turn your photographs and ideas into something special. 
          Reach out today to discuss your next masterpiece.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary !bg-white !text-foreground hover:!bg-background w-full sm:w-auto">
            Contact Us
          </a>
          <a 
            href="https://wa.me/[PlaceholderPhoneNumber]" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary !text-white !border-white/30 hover:!border-white hover:!bg-white/10 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
