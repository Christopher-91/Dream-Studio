import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/assets/resin-couple-plate.jpg', alt: 'Couple Photo Resin Plate', category: 'Resin Art' },
  { src: '/assets/flower-bouquet.jpg', alt: 'Flower Bouquet', category: 'Photography' },
  { src: '/assets/keychains.jpg', alt: 'Printed Keychains', category: 'Printing' },
  { src: '/assets/bottle-lamp.jpg', alt: 'Custom Bottle and Lamp', category: 'Gifts' },
  { src: '/assets/old-age-portrait.jpg', alt: 'Old Age Portrait Edit', category: 'Photo Editing' },
  { src: '/assets/anniversary-frame.jpg', alt: 'Anniversary Frame Calendar', category: 'Frames' },
  { src: '/assets/heart-collage.jpg', alt: 'Heart Photo Collage', category: 'Frames' },
  { src: '/assets/baby-milestones.jpg', alt: 'Baby Milestones Frame', category: 'Frames' },
  { src: '/assets/rotating-cube.jpg', alt: 'Rotating Photo Cube', category: 'Gifts' },
  { src: '/assets/custom-cushion.jpg', alt: 'Custom Photo Cushion', category: 'Printing' },
  { src: '/assets/wedding-calendar.jpg', alt: 'Wedding Calendar Frame', category: 'Frames' },
  { src: '/assets/custom-clocks.jpg', alt: 'Custom Photo Clocks', category: 'Gifts' },
  { src: '/assets/acrylic-lamp.jpg', alt: 'Acrylic Portrait Lamp', category: 'Gifts' },
  { src: '/assets/collage-frame.jpg', alt: 'Love Story Collage Frame', category: 'Frames' },
  { src: '/assets/birthday-collage-frame.jpg', alt: 'Birthday Collage Frame', category: 'Frames' },
  { src: '/assets/wood-print.jpg', alt: 'Wood Printed Photo', category: 'Printing' },
  { src: '/assets/pencil-sketch-frame.jpg', alt: 'Pencil Sketch Portrait Frame', category: 'Frames' },
  { src: '/assets/custom-mugs.jpg', alt: 'Custom Printed Mugs Pyramid', category: 'Printing' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse of the memories, art and craftsmanship created at Dream Studio.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white font-serif text-xl font-medium mb-1">{image.category}</span>
                <span className="text-white/80 text-sm uppercase tracking-wider text-center">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Arrow */}
            <button 
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-[110] bg-black/40 hover:bg-black/60 rounded-full p-2"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <motion.img 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Arrow */}
            <button 
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-[110] bg-black/40 hover:bg-black/60 rounded-full p-2"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
