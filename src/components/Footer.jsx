import { Camera } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/80 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Camera className="w-8 h-8 text-accent" />
              <span className="font-serif text-2xl font-bold text-white tracking-tight">Dream Studio</span>
            </div>
            <p className="mb-6 max-w-sm">
              Preserving memories. Creating art. A creative photo and art studio dedicated to turning your special moments into something you can keep forever.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/d_r_e_a_m__studio_ckm?stkn=eG0zOXZ0eXRxN29j" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform drop-shadow-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-accent transition-colors">Photo Editing</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Custom Photo Frames</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Resin Art</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Photo Printing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>M.G road, near Lenskart</li>
              <li>Shetty Street, Chikmagalur-577101</li>
              <li className="pt-2">+91 8310755920</li>
              <li>dreamstudiohl@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center items-center text-sm text-white/60">
          <p>&copy; {currentYear} Dream Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
