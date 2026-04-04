import { motion } from 'motion/react';
import { ChevronDown, Gamepad2, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-indigo-400 text-sm font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Unity Team Lead & AI Engineer</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none drop-shadow-2xl">
            ADIB <span className="text-indigo-500">FARAH</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed font-medium drop-shadow-md">
            Blending creativity with advanced technology to build immersive game experiences and cutting-edge AI solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all pointer-events-auto"
            >
              <Gamepad2 className="w-5 h-5" />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold flex items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all pointer-events-auto"
            >
              <Cpu className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 drop-shadow-md"
      >
        <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
