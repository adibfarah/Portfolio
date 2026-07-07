import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    // TODO: Replace this with your Web3Forms access key
    formData.append("access_key", "0b795619-5d7a-4acf-b878-fe21ba025b0d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.414 9.866-9.83.002-2.624-1.012-5.09-2.856-6.937C16.438 1.995 13.987 1.01 11.375 1.01 5.936 1.01 1.512 5.424 1.508 10.84c-.001 1.558.411 3.078 1.196 4.414l-.992 3.626 3.725-.976h.21zm12.336-6.634c-.211-.106-1.253-.618-1.447-.687-.194-.069-.336-.103-.477.106-.14.211-.544.687-.667.828-.123.14-.246.159-.458.053-.211-.106-.893-.329-1.702-1.05-.63-.561-1.055-1.254-1.178-1.466-.123-.211-.013-.326.093-.431.096-.095.211-.246.316-.37.106-.123.14-.211.211-.352.07-.14.035-.264-.017-.37-.053-.106-.477-1.147-.654-1.573-.172-.421-.344-.365-.477-.372-.123-.006-.264-.007-.406-.007-.142 0-.373.053-.568.264-.194.211-.741.723-.741 1.761 0 1.04.755 2.043.861 2.184.106.14 1.488 2.272 3.601 3.183.502.217.894.347 1.2.444.505.161.964.138 1.327.084.405-.06 1.253-.512 1.428-1.006.175-.494.175-.917.123-1.006-.052-.089-.194-.141-.406-.247z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">WhatsApp</div>
                  <a href="https://wa.me/971522590098" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
                    +971 52 259 0098
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
                <a href="https://www.linkedin.com/in/adibfarah5/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/adibfarah" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://wa.me/971522590098" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 transition-all" title="Chat on WhatsApp">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.437 0 9.862-4.414 9.866-9.83.002-2.624-1.012-5.09-2.856-6.937C16.438 1.995 13.987 1.01 11.375 1.01 5.936 1.01 1.512 5.424 1.508 10.84c-.001 1.558.411 3.078 1.196 4.414l-.992 3.626 3.725-.976h.21zm12.336-6.634c-.211-.106-1.253-.618-1.447-.687-.194-.069-.336-.103-.477.106-.14.211-.544.687-.667.828-.123.14-.246.159-.458.053-.211-.106-.893-.329-1.702-1.05-.63-.561-1.055-1.254-1.178-1.466-.123-.211-.013-.326.093-.431.096-.095.211-.246.316-.37.106-.123.14-.211.211-.352.07-.14.035-.264-.017-.37-.053-.106-.477-1.147-.654-1.573-.172-.421-.344-.365-.477-.372-.123-.006-.264-.007-.406-.007-.142 0-.373.053-.568.264-.194.211-.741.723-.741 1.761 0 1.04.755 2.043.861 2.184.106.14 1.488 2.272 3.601 3.183.502.217.894.347 1.2.444.505.161.964.138 1.327.084.405-.06 1.253-.512 1.428-1.006.175-.494.175-.917.123-1.006-.052-.089-.194-.141-.406-.247z"/>
                  </svg>
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
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 text-sm text-center font-bold">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm text-center font-bold">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

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
