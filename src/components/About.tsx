import { motion } from 'motion/react';
import { Cpu, Gamepad2, Brain, Code2, Layers, Sparkles, User, ShieldCheck, Trophy, Target } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+', icon: <Trophy className="w-5 h-5" /> },
  { label: 'Projects Led', value: '20+', icon: <Target className="w-5 h-5" /> },
  { label: 'AI Models Built', value: '15+', icon: <Brain className="w-5 h-5" /> },
  { label: 'Unity Games', value: '30+', icon: <Gamepad2 className="w-5 h-5" /> },
];

const skills = [
  { name: 'Unity 3D/2D', level: 95 },
  { name: 'C# / .NET', level: 90 },
  { name: 'Python / AI', level: 85 },
  { name: 'TensorFlow / PyTorch', level: 80 },
  { name: 'AR / VR (Oculus, Hololens)', level: 90 },
  { name: 'Team Leadership', level: 95 },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-indigo-500 font-bold tracking-widest uppercase text-sm"
              >
                <User className="w-4 h-4" />
                <span>About Me</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                UNITY TEAM LEAD & <br />
                <span className="text-indigo-500">AI ENGINEER</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                I am a Unity Team Lead and Artificial Intelligence Engineer with a deep passion for leading innovative projects that blend creativity with advanced technology.
              </p>
              <p>
                I specialize in overseeing game development and interactive experiences, leveraging Unity’s capabilities to integrate cutting-edge artificial intelligence solutions. I thrive in managing teams, driving complex projects to completion, and delivering high-quality, immersive experiences that push the boundaries of game development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-2"
                >
                  <div className="text-indigo-500">{stat.icon}</div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Skills & Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
            
            <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Technical Expertise</h3>
              </div>

              <div className="space-y-8">
                {skills.map((skill, i) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-indigo-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-indigo-600/20 transition-all">
                  <Cpu className="w-6 h-6 text-indigo-500 group-hover:text-white" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white">AI</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-indigo-600/20 transition-all">
                  <Gamepad2 className="w-6 h-6 text-indigo-500 group-hover:text-white" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white">Unity</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-indigo-600/20 transition-all">
                  <ShieldCheck className="w-6 h-6 text-indigo-500 group-hover:text-white" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white">Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
