import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.jpg" 
          alt="Dream Studio Workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight"
        >
          Bring Your Memories to Life
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
        >
          Beautiful photo editing, custom frames, resin art, and high-quality photo printing — crafted with care at Dream Studio.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#gallery" className="btn-primary border-none !bg-accent hover:!bg-accent/90 w-full sm:w-auto">
            Explore Our Work
          </a>
          <a href="#contact" className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-black w-full sm:w-auto">
            Contact Dream Studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
