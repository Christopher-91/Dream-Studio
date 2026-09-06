import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Where Memories Become Art
            </h2>
            <div className="w-20 h-1 bg-accent mb-8"></div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Dream Studio combines photography, design, craftsmanship and creativity to turn your special moments into something you can keep forever. 
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe every memory deserves to be treated as a masterpiece. From meticulous photo editing to handcrafted resin art and custom frames, we pour our heart into every detail to ensure your memories are preserved beautifully.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 grid grid-cols-2 gap-4"
          >
            <img 
              src="/assets/resin-clock.jpg" 
              alt="Handmade Resin Art" 
              className="w-full h-64 object-cover rounded-lg shadow-md mt-8"
            />
            <img 
              src="/assets/heart-collage.jpg" 
              alt="Custom Heart Collage" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
