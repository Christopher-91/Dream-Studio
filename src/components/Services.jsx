import { motion } from 'framer-motion';
import { Image, Frame, Palette, Printer } from 'lucide-react';

const services = [
  {
    icon: <Image className="w-8 h-8 text-accent" />,
    title: 'Photo Editing',
    description: 'Professional editing and enhancement for portraits, family photographs, special occasions and other memorable moments.',
  },
  {
    icon: <Frame className="w-8 h-8 text-accent" />,
    title: 'Custom Photo Frames',
    description: 'Beautiful custom-made frames designed to complement the photograph and the space where it will be displayed.',
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: 'Resin Art',
    description: 'Unique handmade resin creations that transform photographs and memories into artistic keepsakes.',
  },
  {
    icon: <Printer className="w-8 h-8 text-accent" />,
    title: 'Photo Printing',
    description: 'High-quality photo printing designed to preserve photographs with excellent color and detail.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to capture, enhance, and display your most cherished memories.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group bg-background rounded-xl p-8 border border-foreground/5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>
              <a href="#contact" className="inline-flex items-center text-accent font-medium hover:text-foreground transition-colors">
                Enquire Now <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
