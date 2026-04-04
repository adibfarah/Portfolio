import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-indigo-500 font-bold tracking-widest uppercase text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                LET'S BUILD <br />
                <span className="text-indigo-500">TOGETHER</span>
              </h2>
              <p className="text-gray-400 text-lg font-medium max-w-md">
                Have a project in mind? Let's discuss how we can bring your ideas to life with Unity and AI.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:adib.farah5@gmail.com" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                    adib.farah5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Phone</div>
                  <a href="tel:+9710522590098" className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
                    +971 052 259 0098
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl font-bold text-white">
                    United Arab Emirates
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-10 space-y-4">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Follow Me</div>
              <div className="flex items-center gap-4">
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>

              <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest pt-4">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>Usually responds within 24 hours</span>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
