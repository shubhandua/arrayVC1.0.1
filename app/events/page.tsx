"use client";

import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { CircuitBoard, Github, Linkedin, Twitter, Search, Calendar, MapPin, Clock, ExternalLink, ChevronDown, Play, Pause, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "AI in Enterprise: The Next Frontier",
    date: "2023-09-15",
    time: "14:00",
    location: "San Francisco, CA",
    description: "Join us for a deep dive into how AI is transforming enterprise software and operations.",
    image: "/ai-enterprise-event.jpg",
    link: "https://arrayventures.com/events/ai-enterprise"
  },
  {
    id: 2,
    title: "Founder Fireside Chat: Scaling Your Startup",
    date: "2023-10-05",
    time: "18:30",
    location: "New York, NY",
    description: "Learn from successful founders about the challenges and strategies of scaling a startup.",
    image: "/founder-fireside-chat.jpg",
    link: "https://arrayventures.com/events/founder-fireside"
  },
  {
    id: 3,
    title: "The Future of FinTech: Trends and Opportunities",
    date: "2023-11-20",
    time: "11:00",
    location: "Virtual Event",
    description: "Explore emerging trends in FinTech and discover new investment opportunities.",
    image: "/fintech-future-event.jpg",
    link: "https://arrayventures.com/events/fintech-future"
  },
  {
    id: 4,
    title: "Cybersecurity Summit 2023",
    date: "2023-12-08",
    time: "09:00",
    location: "Boston, MA",
    description: "A comprehensive look at the latest in cybersecurity threats and solutions.",
    image: "/cybersecurity-summit.jpg",
    link: "https://arrayventures.com/events/cybersecurity-summit"
  },
  {
    id: 5,
    title: "Women in Tech Leadership Forum",
    date: "2024-01-25",
    time: "13:00",
    location: "Seattle, WA",
    description: "Celebrating and empowering women leaders in the tech industry.",
    image: "/women-tech-leadership.jpg",
    link: "https://arrayventures.com/events/women-tech-leadership"
  }
]

const videos = [
  {
    id: 1,
    title: "Shruti Gandhi on Bloomberg",
    description: "Shruti Gandhi discusses the current state of venture capital and emerging trends in technology.",
    videoUrl: "https://player.vimeo.com/video/816951475",
    thumbnailUrl: "/bloomberg-thumbnail.jpg"
  },
  {
    id: 2,
    title: "Shruti Gandhi at TechCrunch Disrupt",
    description: "Array Ventures' founder shares insights on early-stage investing at TechCrunch Disrupt.",
    videoUrl: "https://player.vimeo.com/video/816951586",
    thumbnailUrl: "/techcrunch-thumbnail.jpg"
  }
]
// {video} : {video:any}
const VideoPlayer = ({ video }: {video:any}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true })

//   useEffect(() => {
//     if (isInView) {
//       videoRef.current.src = video.videoUrl
//     }
//   }, [isInView, video.videoUrl])

//   const togglePlay = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play()
//       setIsPlaying(true)
//     } else {
//       videoRef.current.pause()
//       setIsPlaying(false)
//     }
//   }

  return (
    <motion.div
      ref={containerRef}
      className="relative rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          ref={videoRef}
          title={video.title}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
        //   onClick={togglePlay}
          className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-4 transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-8 h-8 text-black" /> : <Play className="w-8 h-8 text-black" />}
        </button>
      </div>
      <div className="p-4 bg-gray-900">
        <h3 className="text-xl font-bold mb-2">{video.title}</h3>
        <p className="text-gray-400">{video.description}</p>
      </div>
    </motion.div>
  )
}

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      if (sortBy === "date") return new Date(a.date).getTime() - new Date(b.date).getTime()
      return a.title.localeCompare(b.title)
    })
  }, [sortBy])

  const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New',_Courier,_monospace] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r="1"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2
              }}
            />
          ))}
        </svg>
      </div>
      
      <div className="relative z-10">
        <header className="fixed w-full z-20 bg-black bg-opacity-50 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CircuitBoard className="w-6 h-6" />
              <span className="text-xl font-bold">[ARRAY VC]</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
              <Link href="/events" className="font-bold">Events</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-black bg-opacity-95 py-2">
              <Link href="/" className="block px-4 py-2 hover:bg-gray-800">Home</Link>
              <Link href="/portfolio" className="block px-4 py-2 hover:bg-gray-800">Portfolio</Link>
              <Link href="/team" className="block px-4 py-2 hover:bg-gray-800">Team</Link>
              <Link href="/events" className="block px-4 py-2 bg-gray-800 font-bold">Events</Link>
              <Link href="/news" className="block px-4 py-2 hover:bg-gray-800">News</Link>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 py-12 pt-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Array Ventures Events & Media
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Join us for insightful discussions, networking opportunities, and the latest in tech innovation.
          </motion.p>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <VideoPlayer key={video.id} video={video} />
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">VC Outlook in Enterprise Panel</h2>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://player.vimeo.com/video/518465060?autoplay=1&loop=1&autopause=0&muted=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="VC Outlook in Enterprise Panel from Shruti Gandhi on Vimeo"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-bold mb-2">VC Outlook in Enterprise Panel</h3>
                <p className="text-gray-400">Featuring Shruti Gandhi discussing the future of enterprise technology and investment opportunities.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Upcoming Events</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative w-full md:w-auto">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full md:w-auto appearance-none bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  <option value="date">Sort by Date</option>
                  <option value="title">Sort by Title</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={event.image} alt={event.title} width={600} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h2>
                    <p className="text-gray-400 mb-4">{event.description}</p>
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 mr-2 flex-shrink-0"  />
                      <span className="text-sm md:text-base">{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">{event.time}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm md:text-base">{event.location}</span>
                    </div>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm md:text-base"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>

        <footer className="border-t border-gray-800 py-8 mt-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">&copy; {new Date().getFullYear()} Array Venture. All rights reserved.</div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
              <a href="#" aria-label="GitHub"><Github className="w-5 h-5 hover:text-gray-300 transition-colors" /></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}