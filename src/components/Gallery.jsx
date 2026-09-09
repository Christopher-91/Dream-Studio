import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, PlayCircle, Images } from 'lucide-react';

const mediaList = [
  { type: 'image', src: '/assets/resin-couple-plate.jpg', alt: 'Couple Photo Resin Plate', category: 'Resin Art' },
  { type: 'image', src: '/assets/flower-bouquet.jpg', alt: 'Flower Bouquet', category: 'Photography' },
  { type: 'image', src: '/assets/keychains.jpg', alt: 'Printed Keychains', category: 'Printing' },
  { type: 'image', src: '/assets/bottle-lamp.jpg', alt: 'Custom Bottle and Lamp', category: 'Gifts' },
  { type: 'image', src: '/assets/old-age-portrait.jpg', alt: 'Old Age Portrait Edit', category: 'Photo Editing' },
  { type: 'image', src: '/assets/anniversary-frame.jpg', alt: 'Anniversary Frame Calendar', category: 'Frames' },
  { type: 'image', src: '/assets/heart-collage.jpg', alt: 'Heart Photo Collage', category: 'Frames' },
  { type: 'image', src: '/assets/baby-milestones.jpg', alt: 'Baby Milestones Frame', category: 'Frames' },
  { type: 'image', src: '/assets/rotating-cube.jpg', alt: 'Rotating Photo Cube', category: 'Gifts' },
  { type: 'image', src: '/assets/custom-cushion.jpg', alt: 'Custom Photo Cushion', category: 'Printing' },
  { type: 'image', src: '/assets/wedding-calendar.jpg', alt: 'Wedding Calendar Frame', category: 'Frames' },
  { type: 'image', src: '/assets/custom-clocks.jpg', alt: 'Custom Photo Clocks', category: 'Gifts' },
  { type: 'image', src: '/assets/acrylic-lamp.jpg', alt: 'Acrylic Portrait Lamp', category: 'Gifts' },
  { type: 'image', src: '/assets/collage-frame.jpg', alt: 'Love Story Collage Frame', category: 'Frames' },
  { type: 'image', src: '/assets/birthday-collage-frame.jpg', alt: 'Birthday Collage Frame', category: 'Frames' },
  { type: 'image', src: '/assets/wood-print.jpg', alt: 'Wood Printed Photo', category: 'Printing' },
  { type: 'image', src: '/assets/pencil-sketch-frame.jpg', alt: 'Pencil Sketch Portrait Frame', category: 'Frames' },
  { type: 'image', src: '/assets/custom-mugs.jpg', alt: 'Custom Printed Mugs Pyramid', category: 'Printing' },
  { type: 'image', src: '/assets/wall-frames-display.jpg', alt: 'Studio Wall Frames Display', category: 'Photography' },
  { type: 'image', src: '/assets/couple-portrait-frame.jpg', alt: 'Couple Portrait Frame', category: 'Frames' },
  { type: 'image', src: '/assets/gift-cushions-wall.jpg', alt: 'Gift Cushions Wall', category: 'Gifts' },
  { type: 'image', src: '/assets/rose-bouquets.jpg', alt: 'Rose Bouquets', category: 'Gifts' },
  { type: 'image', src: '/assets/floral-resin-plate.jpg', alt: 'Floral Resin Plate', category: 'Resin Art' },
  { type: 'image', src: '/assets/geometric-frame.jpg', alt: 'Geometric Photo Frame', category: 'Frames' },
  { type: 'image', src: '/assets/digital-oil-painting.jpg', alt: 'Digital Oil Painting Portrait', category: 'Painting' },
  { type: 'video', src: '/assets/WhatsApp Video 1.mp4', alt: 'Studio Showcase 1', category: 'Video' },
  { type: 'video', src: '/assets/WhatsApp Video 2.mp4', alt: 'Studio Showcase 2', category: 'Video' },
  { type: 'video', src: '/assets/WhatsApp Video 3.mp4', alt: 'Studio Showcase 3', category: 'Video' },
  { type: 'video', src: '/assets/WhatsApp Video 4.mp4', alt: 'Studio Showcase 4', category: 'Video' },
  { type: 'video', src: '/assets/WhatsApp Video 5.mp4', alt: 'Studio Showcase 5', category: 'Video' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('photos');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const filteredMedia = useMemo(() => {
    return mediaList.filter(item => filter === 'photos' ? item.type === 'image' : item.type === 'video');
  }, [filter]);

  const displayedMedia = useMemo(() => {
    if (filter === 'photos' && !showAllPhotos) {
      return filteredMedia.slice(0, 12);
    }
    return filteredMedia;
  }, [filteredMedia, filter, showAllPhotos]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % filteredMedia.length);
    }
  }, [selectedIndex, filteredMedia.length]);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length);
    }
  }, [selectedIndex, filteredMedia.length]);

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
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A glimpse of the memories, art and craftsmanship created at Dream Studio.
          </p>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={() => { setFilter('photos'); setSelectedIndex(null); setShowAllPhotos(false); }}
              className={`px-8 py-2.5 rounded-full font-medium transition-colors ${
                filter === 'photos' 
                  ? 'bg-accent text-white shadow-lg' 
                  : 'bg-white/50 text-foreground hover:bg-white/80'
              }`}
            >
              Photos
            </button>
            <button 
              onClick={() => { setFilter('videos'); setSelectedIndex(null); setShowAllPhotos(false); }}
              className={`px-8 py-2.5 rounded-full font-medium transition-colors ${
                filter === 'videos' 
                  ? 'bg-accent text-white shadow-lg' 
                  : 'bg-white/50 text-foreground hover:bg-white/80'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
          {displayedMedia.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  loading="lazy"
                  className="block w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <video 
                  src={item.src} 
                  className="block w-full aspect-[4/5] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  muted 
                  loop 
                  playsInline
                  autoPlay
                />
              )}
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <span className="text-white font-serif text-xl font-medium mb-1">{item.category}</span>
                <span className="text-white/80 text-sm uppercase tracking-wider text-center">{item.alt}</span>
              </div>
            </motion.div>
          ))}

          {filter === 'photos' && !showAllPhotos && filteredMedia.length > 12 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group cursor-pointer bg-black/60 hover:bg-black/80 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center aspect-[4/5]"
              onClick={() => setShowAllPhotos(true)}
            >
              <div className="flex flex-col items-center justify-center p-8 text-white/80 transition-colors">
                <Images className="w-16 h-16 mb-4 group-hover:-translate-y-2 group-hover:text-accent transition-all duration-300" />
                <span className="font-sans text-2xl font-medium tracking-wide text-center group-hover:text-accent transition-colors duration-300">View More Photos</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Arrow */}
            {filteredMedia.length > 1 && (
              <button 
                className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-[110] bg-black/40 hover:bg-black/60 rounded-full p-2"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
              </button>
            )}

            {filteredMedia[selectedIndex].type === 'image' ? (
              <motion.img 
                key={`img-${selectedIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                src={filteredMedia[selectedIndex].src} 
                alt={filteredMedia[selectedIndex].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-sm"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <motion.video 
                key={`vid-${selectedIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                src={filteredMedia[selectedIndex].src} 
                className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              />
            )}

            {/* Next Arrow */}
            {filteredMedia.length > 1 && (
              <button 
                className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-[110] bg-black/40 hover:bg-black/60 rounded-full p-2"
                onClick={handleNext}
              >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
