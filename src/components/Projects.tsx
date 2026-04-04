import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Gamepad2, Cpu, Eye, Box, Trophy, Zap, Layers, Code2, Monitor, Smartphone, Glasses, Music, Layout, Car, Users, ShieldCheck, X, CheckCircle2, Sparkles, PlayCircle, Camera, PenTool, Video, Bot, UserCircle, Clock, Mic, Volume2, Brush, Move, Activity } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  icon: React.ReactNode;
  tags: string[];
  color: string;
  videoUrl: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: 'Logistics Manager',
    description: 'A 3D simulation and management game for overseeing a bustling logistics hub.',
    fullDescription: 'A strategic 3D simulation game where players manage a complex logistics network. The core gameplay involves strategically assigning trucks and cargo ships to specific ports, managing supply chains, and optimizing routing to ensure efficient delivery operations under time constraints.',
    features: ['3D Environment', 'Resource Management', 'Routing Optimization', 'Real-time Strategy'],
    icon: <Box className="w-6 h-6" />,
    tags: ['Unity', '3D Game', 'Simulation'],
    color: 'from-blue-600 to-indigo-600',
    videoUrl: 'https://drive.google.com/file/d/1vZO4j6I9k2uwQOjG7zMehU3__OKDw5Si/preview',
  },
  {
    title: 'Trickshot Star',
    description: 'A 2D physics-based football game focused on scoring creative trickshots.',
    fullDescription: 'An engaging 2D football game where players must navigate obstacles, utilize physics mechanics, and find creative angles to score goals. The game challenges players with increasingly complex levels that require precision, timing, and strategic thinking.',
    features: ['2D Physics Engine', 'Level Progression', 'Obstacle Navigation', 'Touch & Drag Controls'],
    icon: <Gamepad2 className="w-6 h-6" />,
    tags: ['Unity', '2D Game', 'Physics'],
    color: 'from-yellow-400 to-orange-500',
    videoUrl: 'https://drive.google.com/file/d/1bTCQrYAgKs6KK3eWDGaDXYdQzsvajn3f/preview',
  },
  {
    title: 'Music Generator',
    description: 'AI-powered music generation system that creates dynamic soundtracks based on user input.',
    fullDescription: 'An innovative AI system that generates dynamic, royalty-free music tracks in real-time. By analyzing user inputs such as mood, tempo, and genre preferences, the underlying machine learning models compose and synthesize unique audio streams suitable for games and interactive media.',
    features: ['Real-time Audio Synthesis', 'Machine Learning Models', 'Dynamic Tempo & Mood Adjustment', 'Procedural Generation'],
    icon: <Music className="w-6 h-6" />,
    tags: ['AI', 'Audio Processing', 'Unity'],
    color: 'from-pink-500 to-rose-500',
    videoUrl: 'https://drive.google.com/file/d/1-YD7q1tU8IwdGIU7P0jaqzjOtYPcTJMK/preview',
  },
  {
    title: 'Comic Con Avatar Hero Creator',
    description: 'Interactive avatar creation experience for Comic Con events, blending character design with immersive tech.',
    fullDescription: 'A highly interactive application developed for Comic Con that allows users to create, customize, and animate their own superhero avatars in real-time. Built with Unity, the system features a robust character customization engine, real-time rendering, and seamless integration with event displays to engage thousands of attendees.',
    features: ['Real-time 3D Rendering', 'Advanced Character Customization', 'Event Display Integration', 'Interactive UI/UX'],
    icon: <Users className="w-6 h-6" />,
    tags: ['Unity', 'Avatar System', 'Interactive'],
    color: 'from-purple-500 to-indigo-500',
    videoUrl: 'https://drive.google.com/file/d/1HmVw6jyJbmHZ5_WILv40IWv5ZKM4dUSR/preview',
  },
  {
    title: 'F1 Simulator',
    description: 'High-fidelity Formula 1 racing simulator with realistic physics and immersive feedback systems.',
    fullDescription: 'An immersive F1 racing simulator designed to provide a hyper-realistic driving experience. Utilizing Unity\'s advanced physics engine, the simulator integrates with physical steering wheels and motion platforms to deliver accurate force feedback, tire physics, and aerodynamics.',
    features: ['Advanced Vehicle Physics', 'Hardware Integration (Force Feedback)', 'High-Fidelity Graphics', 'Telemetry Data Analysis'],
    icon: <Car className="w-6 h-6" />,
    tags: ['Unity', 'Simulation', 'Physics'],
    color: 'from-red-500 to-orange-500',
    videoUrl: 'https://drive.google.com/file/d/15uhBYHzI4fEQiOW2eXPYi11s6LgUXwaq/preview',
  },
  {
    title: 'AI Photobooth',
    description: 'AI generated photo of the user based on a selected theme.',
    fullDescription: 'Action: user takes a photo. Selection: themes clothing, backgrounds. Generation Time: 30-40 seconds. Result: AI generated photo of the user based on a theme.',
    features: ['Theme Selection', 'Background Replacement', 'Fast Generation (30-40s)', 'High Quality Output'],
    icon: <Camera className="w-6 h-6" />,
    tags: ['AI', 'Computer Vision', 'Interactive'],
    color: 'from-purple-500 to-pink-500',
    videoUrl: 'https://drive.google.com/file/d/1xtv771lC38IUtwq1wWDXWhvGBPRs2ePV/preview',
  },
  {
    title: 'AI Sketch',
    description: 'AI generates an high quality drawing based on the sketch & fixed theme.',
    fullDescription: 'Action: user draws a simple sketch. Selection: Free-hand drawing. Generation Time: 30-40 seconds. Result: AI generates an high quality drawing based on the sketch & fixed theme.',
    features: ['Free-hand Drawing Input', 'Theme-based Generation', 'Fast Processing', 'High Quality Art'],
    icon: <PenTool className="w-6 h-6" />,
    tags: ['AI', 'Generative Art', 'Interactive'],
    color: 'from-indigo-500 to-purple-500',
    videoUrl: 'https://drive.google.com/file/d/1BvipCn02lPtPDwTEVu1AsbM42RfTsuCI/preview',
  },
  {
    title: 'AI Videobooth',
    description: 'AI generates the user as an avatar that is animated for 5 seconds.',
    fullDescription: 'Action: user takes a photo. Selection: theme, animation preset. Generation Time: 90 seconds. Result: AI generates the user as an avatar that is animated for 5 seconds.',
    features: ['Avatar Generation', 'Animation Presets', 'Theme Selection', 'Video Output'],
    icon: <Video className="w-6 h-6" />,
    tags: ['AI', 'Video Generation', 'Avatar'],
    color: 'from-blue-500 to-indigo-500',
    videoUrl: 'https://drive.google.com/file/d/1pWmRqcpIlvLzglKPZooekwnxom6i0tBK/preview',
  },
  {
    title: 'AI Assistant',
    description: 'AI responds based on its knowledge bank in a sentence form that fits the question.',
    fullDescription: 'Action: user asks questions. Selection: Free-speech into Mic, Avatar switching. Response Time: 5 seconds - 15 seconds based on amount of data AI is trained on. Result: AI responds based on its knowledge bank in a sentence form that fits the question.',
    features: ['Speech Recognition', 'Avatar Switching', 'Knowledge Base Integration', 'Natural Language Processing'],
    icon: <Bot className="w-6 h-6" />,
    tags: ['AI', 'NLP', 'Voice'],
    color: 'from-emerald-500 to-teal-500',
    videoUrl: 'https://drive.google.com/file/d/1hYNrbm-Lb1U0VhosJ66ScCjc2XvLpYr4/preview',
  },
  {
    title: 'Realistic AI Assistant',
    description: 'Realistic AI avatar responding to user questions.',
    fullDescription: 'Action: user asks questions. Selection: Free-speech into Mic, Avatar switching. Response Time: 5 seconds - 15 seconds based on amount of data AI is trained on. Result: AI responds based on its knowledge bank in a sentence form that fits the question.',
    features: ['Realistic Avatar', 'Speech Recognition', 'Fast Response', 'Knowledge Integration'],
    icon: <UserCircle className="w-6 h-6" />,
    tags: ['AI', 'Avatar', 'NLP'],
    color: 'from-teal-500 to-cyan-500',
    videoUrl: 'https://drive.google.com/file/d/1JbZmeKtXkcv-iM9d1VfVo7dOxwSlfZiB/preview',
  },
  {
    title: 'Sensory Wall',
    description: 'Interactive sensory wall experience providing responsive visual and auditory feedback.',
    fullDescription: 'An interactive sensory wall designed to provide engaging, responsive visual and auditory feedback based on user interactions. Perfect for immersive environments and interactive installations.',
    features: ['Interactive Displays', 'Real-time Feedback', 'Sensory Engagement', 'Custom Visuals'],
    icon: <Activity className="w-6 h-6" />,
    tags: ['Interactive', 'Unity', 'Installation'],
    color: 'from-cyan-500 to-blue-500',
    videoUrl: 'https://drive.google.com/file/d/1SEYP6dYmiGb5GUfuWvgSMHXnPFm0zHLJ/preview',
  },
  {
    title: 'AI Timelapse',
    description: 'A timelapse showing the user as a young boy growing up to an old man.',
    fullDescription: 'Action: user takes a photo. Selection: None. Generation Time: 30 - 40 seconds. Result: a timelapse showing the user as a young boy growing up to an old man.',
    features: ['Age Progression', 'Fast Generation', 'Video Output', 'Facial Analysis'],
    icon: <Clock className="w-6 h-6" />,
    tags: ['AI', 'Computer Vision', 'Generative'],
    color: 'from-orange-500 to-red-500',
    videoUrl: 'https://drive.google.com/file/d/14A5erG3LPV06BS7Yu3KRnRVQWjPq3kFW/preview',
  },
  {
    title: 'Digital AI Clone',
    description: 'An AI Digital Clone of the User voice, being able to answer questions and mimicking the voice.',
    fullDescription: 'Action: User records an audio sample. Selection: Free to add insert any audio. Generation Time: 4-5 seconds. Result: An AI Digital Clone of the User voice, being able to answer questions and mimicking the voice of the user.',
    features: ['Voice Cloning', 'Fast Generation (4-5s)', 'Audio Input', 'Interactive Responses'],
    icon: <Mic className="w-6 h-6" />,
    tags: ['AI', 'Audio', 'Voice Cloning'],
    color: 'from-rose-500 to-pink-500',
    videoUrl: 'https://drive.google.com/file/d/14iHLwHaOqEE50PMYt4Qbkq6Xltabs9C-/preview',
  },
  {
    title: 'AI Singer',
    description: 'AI Generates a piece of music sung in the voice of the user.',
    fullDescription: 'Action: User records an audio sample. Selection: moods, themes, instruments. Generation Time: 60 seconds. Result: AI Generates a piece of music sung in the voice of the user that is relevant to the theme & mood.',
    features: ['Voice Cloning for Singing', 'Mood & Theme Selection', 'Instrument Selection', 'Music Generation'],
    icon: <Music className="w-6 h-6" />,
    tags: ['AI', 'Music', 'Voice Cloning'],
    color: 'from-fuchsia-500 to-purple-500',
    videoUrl: '',
  },
  {
    title: 'Artificial Voice',
    description: 'AI generates the same video that was recorded but with the user’s voice stylized.',
    fullDescription: 'Action: The user records a video of him speaking a paragraph. Selection: a specific audio atmosphere or effect, such as "Vintage Radio," "Robot," or "Megaphone." Generation Time: Realtime. Result: AI generates the same video that was recorded but with the user’s voice stylized.',
    features: ['Realtime Processing', 'Voice Stylization', 'Video Input', 'Audio Effects'],
    icon: <Volume2 className="w-6 h-6" />,
    tags: ['AI', 'Audio Processing', 'Realtime'],
    color: 'from-violet-500 to-indigo-500',
    videoUrl: '',
  },
  {
    title: 'Humming To Music',
    description: 'AI generates a full 60 seconds music based on humming.',
    fullDescription: 'Action: The user records a humming sound. Generation Time: 60 Seconds. Result: AI generates a full 60 seconds music based on humming.',
    features: ['Audio to Music', 'Humming Recognition', 'Full Track Generation', 'Fast Processing'],
    icon: <Mic className="w-6 h-6" />,
    tags: ['AI', 'Music Generation', 'Audio'],
    color: 'from-blue-500 to-sky-500',
    videoUrl: '',
  },
  {
    title: 'Realtime Sketch to AI',
    description: 'AI generates a realistic image of what is the user drawing in realtime.',
    fullDescription: 'Action: user draws a simple sketch. Selection: Free-hand drawing. Generation Time: Realtime. Result: AI generates a realistic image of what is the user drawing.',
    features: ['Realtime Generation', 'Sketch Recognition', 'Realistic Output', 'Interactive Drawing'],
    icon: <Brush className="w-6 h-6" />,
    tags: ['AI', 'Realtime', 'Generative Art'],
    color: 'from-green-500 to-emerald-500',
    videoUrl: '',
  },
  {
    title: 'Motion Stream',
    description: 'AI generates a short video demonstrating the element moving in a specified direction.',
    fullDescription: 'Action: The user draws a line over the image to indicate the desired direction of movement for the element. Generation Time: N/A. Result: AI generates a short video demonstrating the element moving in that specified direction.',
    features: ['Directional Input', 'Video Generation', 'Image Animation', 'Interactive Control'],
    icon: <Move className="w-6 h-6" />,
    tags: ['AI', 'Video Generation', 'Animation'],
    color: 'from-yellow-500 to-orange-500',
    videoUrl: '',
  },
  {
    title: 'STC Forward Museum',
    description: 'A futuristic museum experience showcasing the evolution of technology and telecommunications.',
    fullDescription: 'An interactive digital museum experience developed for STC (Saudi Telecom Company). The project features interactive 3D exhibits, augmented reality elements, and touch-screen interfaces that guide visitors through the history and future of telecommunications in a visually stunning environment.',
    features: ['Interactive 3D Exhibits', 'Touch-screen Interfaces', 'Augmented Reality', 'Immersive Storytelling'],
    icon: <Layout className="w-6 h-6" />,
    tags: ['Unity', 'Museum Tech', 'Interactive'],
    color: 'from-blue-500 to-cyan-500',
    videoUrl: '',
    images: ['https://storage.googleapis.com/makedraft-user-content/us-central1/project-1033481691/11698294-8178-43d9-95a2-9c17822d51d4/image_1.jpg'],
  },
  {
    title: 'Hololens App',
    description: 'Mixed reality application for Microsoft Hololens, pushing the boundaries of spatial computing.',
    fullDescription: 'A cutting-edge Mixed Reality application developed for the Microsoft HoloLens. The app overlays interactive 3D holograms onto the real world, allowing users to interact with complex data visualizations and spatial interfaces using hand gestures and voice commands.',
    features: ['Spatial Mapping', 'Gesture Recognition', 'Voice Commands', 'Holographic UI'],
    icon: <Glasses className="w-6 h-6" />,
    tags: ['Mixed Reality', 'Hololens', 'Unity'],
    color: 'from-teal-500 to-emerald-500',
    videoUrl: '',
  },
  {
    title: 'Aramco Mobile App',
    description: 'Enterprise-grade mobile application developed for Aramco, focusing on efficiency and user experience.',
    fullDescription: 'A comprehensive mobile application built for Aramco to streamline internal processes and improve operational efficiency. The app features secure data visualization, real-time reporting, and an intuitive user interface tailored for enterprise needs.',
    features: ['Secure Data Handling', 'Real-time Analytics', 'Cross-platform Support', 'Enterprise UI/UX'],
    icon: <Smartphone className="w-6 h-6" />,
    tags: ['Mobile Development', 'Unity', 'Enterprise'],
    color: 'from-green-500 to-lime-500',
    videoUrl: '',
    images: ['https://storage.googleapis.com/makedraft-user-content/us-central1/project-1033481691/11698294-8178-43d9-95a2-9c17822d51d4/image_2.jpg'],
  },
  {
    title: '3D Chess',
    description: 'A visually stunning 3D chess game with advanced AI opponents and smooth animations.',
    fullDescription: 'A modern take on the classic game of chess, featuring high-quality 3D graphics, smooth piece animations, and multiple dynamic environments. The game includes a sophisticated AI opponent with adjustable difficulty levels, utilizing advanced search algorithms and board evaluation techniques.',
    features: ['Minimax AI Algorithm', 'High-Quality 3D Models', 'Dynamic Lighting', 'Multiplayer Support'],
    icon: <Box className="w-6 h-6" />,
    tags: ['Unity', 'Game Design', 'AI'],
    color: 'from-indigo-500 to-blue-500',
    videoUrl: '',
  },
  {
    title: 'IntelliEye',
    description: 'Advanced computer vision system for real-time object detection and tracking.',
    fullDescription: 'A robust computer vision application designed to detect, classify, and track objects in real-time video streams. Built using Python and deep learning frameworks, IntelliEye can be integrated into various surveillance, robotics, and automation systems.',
    features: ['Real-time Object Detection', 'Deep Learning Models (YOLO/SSD)', 'Multi-object Tracking', 'Video Stream Processing'],
    icon: <Eye className="w-6 h-6" />,
    tags: ['AI', 'Computer Vision', 'Python'],
    color: 'from-amber-500 to-yellow-500',
    videoUrl: '',
  },
  {
    title: 'Traffic System',
    description: 'Complex traffic simulation system with intelligent AI behavior and realistic road networks.',
    fullDescription: 'A highly detailed traffic simulation engine built in Unity. It features AI-driven vehicles that follow traffic rules, navigate complex intersections, and react dynamically to obstacles and traffic lights, providing a realistic environment for urban planning and autonomous vehicle testing.',
    features: ['AI Pathfinding', 'Dynamic Obstacle Avoidance', 'Traffic Light Logic', 'Large-scale Simulation'],
    icon: <Zap className="w-6 h-6" />,
    tags: ['Unity', 'AI', 'Simulation'],
    color: 'from-violet-500 to-purple-500',
    videoUrl: '',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-black/40 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-indigo-500 font-bold tracking-widest uppercase text-sm"
            >
              <Layers className="w-4 h-4" />
              <span>Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              FEATURED <span className="text-indigo-500">PROJECTS</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-400 font-medium">
            A selection of my work across game development, artificial intelligence, and interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white mb-6 shadow-lg shrink-0",
                project.color
              )}>
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:bg-indigo-600 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="space-y-4 relative z-10">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
              WANT TO SEE MORE?
            </h3>
            <p className="text-indigo-100 font-medium max-w-md">
              I have worked on numerous other projects involving VR, AR, and advanced AI systems. Let's discuss how I can help your next project.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-50 transition-all relative z-10"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-gray-900 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className={cn("p-8 sm:p-10 bg-gradient-to-br relative overflow-hidden shrink-0", selectedProject.color)}>
                <div className="absolute inset-0 bg-black/20" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg shrink-0">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  {/* Video Player */}
                  {selectedProject.videoUrl && (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10 relative group">
                      <iframe
                        src={selectedProject.videoUrl}
                        title={selectedProject.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  {/* Images */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.images.map((imgUrl, idx) => (
                        <div key={idx} className="w-full rounded-2xl overflow-hidden bg-black/50 border border-white/10 relative">
                          <img
                            src={imgUrl}
                            alt={`${selectedProject.title} screenshot ${idx + 1}`}
                            className="w-full h-auto object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-indigo-500" />
                      Project Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-indigo-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                          <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
