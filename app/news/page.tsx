'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { CircuitBoard, Github, Linkedin, Twitter, Calendar, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Updated LinkedIn posts
const linkedinPosts = [
  {
    id: 1,
    content: "Excited to announce our latest investment in AI-driven healthcare solutions! #VentureCapital #HealthTech",
    likes: 250,
    comments: 45,
    link: "https://www.linkedin.com/posts/shrutigandhi_venturecapital-healthtech-activity-7076543210987654321-abcd"
  },
  {
    id: 2,
    content: "Join me at the upcoming Tech Innovators Summit where I'll be speaking about the future of B2B SaaS. #TechInnovation #B2BSaaS",
    likes: 180,
    comments: 32,
    link: "https://www.linkedin.com/posts/shrutigandhi_techinnovation-b2bsaas-activity-7075432109876543210-efgh"
  },
  {
    id: 3,
    content: "Reflecting on the incredible journey of our portfolio company, XYZ Tech, as they announce their Series B funding. Proud to be part of their growth story! #StartupSuccess",
    likes: 320,
    comments: 58,
    link: "https://www.linkedin.com/posts/shrutigandhi_startupsuccess-activity-7074321098765432109-ijkl"
  },
  {
    id: 4,
    content: "Thrilled to share insights on the future of AI in enterprise at the upcoming AI Summit. Looking forward to connecting with fellow innovators! #AISummit #EnterpriseAI",
    likes: 210,
    comments: 40,
    link: "https://www.linkedin.com/posts/shrutigandhi_aisummit-enterpriseai-activity-7077654321098765432-mnop"
  },
  {
    id: 5,
    content: "Congratulations to our portfolio company, DataFlow, on their successful product launch! Their innovative approach to data management is set to revolutionize the industry. #DataManagement #StartupSuccess",
    likes: 280,
    comments: 52,
    link: "https://www.linkedin.com/posts/shrutigandhi_datamanagement-startupsuccess-activity-7078765432109876543-qrst"
  },
  {
    id: 6,
    content: "Just wrapped up an inspiring mentoring session with young entrepreneurs. The future of tech is bright! #MentoringMatters #TechLeadership",
    likes: 195,
    comments: 38,
    link: "https://www.linkedin.com/posts/shrutigandhi_mentoringmatters-techleadership-activity-7079876543210987654-uvwx"
  },
  {
    id: 7,
    content: "Excited to be a keynote speaker at next month's Women in Tech conference. Let's continue to break barriers and inspire the next generation of female leaders in technology. #WomenInTech #Diversity",
    likes: 430,
    comments: 72,
    link: "https://www.linkedin.com/posts/shrutigandhi_womenintech-diversity-activity-7080987654321098765-yzab"
  },
  {
    id: 8,
    content: "Our latest blog post on 'The Future of Work in a Post-Pandemic World' is now live. Check it out and join the conversation! #FutureOfWork #RemoteWork",
    likes: 165,
    comments: 29,
    link: "https://www.linkedin.com/posts/shrutigandhi_futureofwork-remotework-activity-7081098765432109876-cdef"
  }
]

// Sample data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    name: "AI in Enterprise: The Next Frontier",
    date: "2023-07-15",
    time: "2:00 PM - 4:00 PM PST",
    location: "Virtual Event",
    description: "Join us for an insightful discussion on how AI is transforming enterprise solutions.",
    link: "https://arrayvc.com/events/ai-in-enterprise"
  },
  {
    id: 2,
    name: "Founder Fireside Chat: Scaling B2B SaaS",
    date: "2023-07-28",
    time: "5:30 PM - 7:00 PM PST",
    location: "Array Ventures Office, San Francisco",
    description: "Learn from successful founders about the challenges and strategies in scaling B2B SaaS companies.",
    link: "https://arrayvc.com/events/founder-fireside-chat"
  },
  {
    id: 3,
    name: "Tech Innovators Summit 2023",
    date: "2023-08-10",
    time: "9:00 AM - 5:00 PM PST",
    location: "Moscone Center, San Francisco",
    description: "A day-long summit featuring talks from industry leaders and showcasing cutting-edge technologies.",
    link: "https://arrayvc.com/events/tech-innovators-summit-2023"
  }
]

// Sample data for press coverage
const pressCoverage = [
  {
    id: 1,
    title: "Array Ventures' Shruti Gandhi on the Future of Enterprise Tech",
    publication: "TechCrunch",
    date: "2023-06-20",
    link: "https://techcrunch.com/2023/06/20/array-ventures-shruti-gandhi-on-the-future-of-enterprise-tech"
  },
  {
    id: 2,
    title: "How Array Ventures is Reshaping Early-Stage Investing",
    publication: "Forbes",
    date: "2023-06-15",
    link: "https://www.forbes.com/sites/forbesdigitalcovers/2023/06/15/how-array-ventures-is-reshaping-early-stage-investing"
  },
  {
    id: 3,
    title: "Array Ventures' Latest Fund Focuses on AI and Machine Learning Startups",
    publication: "VentureBeat",
    date: "2023-06-10",
    link: "https://venturebeat.com/2023/06/10/array-ventures-latest-fund-focuses-on-ai-and-machine-learning-startups"
  }
]

export default function News() {
  const [currentPressArticle, setCurrentPressArticle] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cursorRef = useRef(null)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const pressInterval = setInterval(() => {
      setCurrentPressArticle((prev) => (prev + 1) % pressCoverage.length)
    }, 8000)

    return () => {
      clearInterval(pressInterval)
    }
  }, [])

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
        <motion.div
          ref={cursorRef}
          className="w-8 h-8 bg-white bg-opacity-20 rounded-full pointer-events-none absolute"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />
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
              <Link href="/events" className="hover:text-gray-300 transition-colors">Events</Link>
              <Link href="/news" className="font-bold">News</Link>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden bg-black bg-opacity-95 py-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/" className="block px-4 py-2 hover:bg-gray-800">Home</Link>
                <Link href="/portfolio" className="block px-4 py-2 hover:bg-gray-800">Portfolio</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-gray-800">Team</Link>
                <Link href="/events" className="block px-4 py-2 hover:bg-gray-800">Events</Link>
                <Link href="/news" className="block px-4 py-2 bg-gray-800 font-bold">News</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="container mx-auto px-4 py-12 pt-20">
          <h1 className="text-6xl font-bold mb-12 text-center">Array Ventures News</h1>

          <section className="mb-16" aria-labelledby="latest-from-shruti">
            <h2 id="latest-from-shruti" className="text-4xl font-bold mb-8">Latest from Shruti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {linkedinPosts.map((post) => (
                <div key={post.id} className="bg-gray-900 bg-opacity-50 rounded-lg p-6">
                  <p className="text-lg mb-4">{post.content}</p>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">{post.likes} Likes</span>
                      <span className="text-sm text-gray-400">{post.comments} Comments</span>
                    </div>
                  </div>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View on LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <section aria-labelledby="upcoming-events">
              <h2 id="upcoming-events" className="text-4xl font-bold mb-8">Upcoming Events</h2>
              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-gray-900 bg-opacity-50 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                    <p className="text-gray-400 mb-2">
                      <Calendar className="inline-block mr-2 w-4 h-4" aria-hidden="true" />
                      <time dateTime={event.date}>{event.date}</time> | {event.time}
                    </p>
                    <p className="text-gray-400 mb-4">{event.location}</p>
                    <p className="mb-4">{event.description}</p>
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      Learn More & Register
                      <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="press-coverage">
              <h2 id="press-coverage" className="text-4xl font-bold mb-8">Press Coverage</h2>
              <div className="relative bg-gray-900 bg-opacity-50 rounded-lg p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPressArticle}
                    className="flex flex-col items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{pressCoverage[currentPressArticle].title}</h3>
                    <p className="text-gray-400 mb-4">{pressCoverage[currentPressArticle].publication}</p>
                    <time dateTime={pressCoverage[currentPressArticle].date} className="text-sm text-gray-400 mb-4">
                      {new Date(pressCoverage[currentPressArticle].date).toLocaleDateString()}
                    </time>
                    <a 
                      href={pressCoverage[currentPressArticle].link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>
          </div>
        </main>

        <footer className="border-t border-gray-800 py-8 mt-20">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div>&copy; {new Date().getFullYear()} Array Ventures. All rights reserved.</div>
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