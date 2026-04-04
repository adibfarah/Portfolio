import { Cpu, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black/80 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <span>ADIB FARAH</span>
          </div>

          <div className="flex items-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <span>© 2026 Adib Farah.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in UAE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
