'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { CircuitBoard, Github, Linkedin, Twitter, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const carouselItems = ["B2B SaaS", "Pre Seed", "Enterprise", "Technical", "Gen AI", "Healthcare"]

const testimonials = [
  {
    id: 1,
    text: "Array Ventures has been instrumental in our growth. Their insights and network have been invaluable.",
    author: "Jane Doe",
    company: "TechCorp"
  },
  {
    id: 2,
    text: "The team at Array Ventures truly understands the challenges of early-stage startups. They've been there every step of the way.",
    author: "John Smith",
    company: "InnovateTech"
  },
  {
    id: 3,
    text: "Array's hands-on approach and deep industry knowledge set them apart from other VCs we've worked with.",
    author: "Alice Johnson",
    company: "FutureSoft"
  }
]

const focusAreas = [
  { name: 'AI & Machine Learning', icon: '/ai-icon.svg' },
  { name: 'Enterprise SaaS', icon: '/saas-icon.svg' },
  { name: 'Cybersecurity', icon: '/security-icon.svg' },
  { name: 'Data Infrastructure', icon: '/data-icon.svg' },
  { name: 'DevOps', icon: '/devops-icon.svg' },
  { name: 'FinTech', icon: '/fintech-icon.svg' }
]

const TechyQuote = () => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div ref={containerRef} className="py-12 bg-gradient-to-r from-gray-900 to-black rounded-lg overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        variants={sentence}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {"We bring the 2nd wave of customers".split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
            className={char === '2' ? 'text-blue-500' : 'text-white'}
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="w-16 h-1 bg-blue-500 mx-auto rounded-full"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
    </div>
  )
}

export default function Home() {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cursorRef = useRef(null)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentCarouselItem((prev) => (prev + 1) % carouselItems.length)
    }, 3000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      clearInterval(carouselInterval)
      clearInterval(testimonialInterval)
      window.removeEventListener('mousemove', moveCursor)
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
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
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
              <CircuitBoard className="w-6 h-6" aria-hidden="true" />
              <span className="text-xl font-bold">[ARRAY VC]</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="font-bold">Home</Link>
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
              <Link href="/events" className="hover:text-gray-300 transition-colors">Events</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </nav>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                className="md:hidden bg-black bg-opacity-95 py-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/" className="block px-4 py-2 bg-gray-800 font-bold">Home</Link>
                <Link href="/portfolio" className="block px-4 py-2 hover:bg-gray-800">Portfolio</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-gray-800">Team</Link>
                <Link href="/events" className="block px-4 py-2 hover:bg-gray-800">Events</Link>
                <Link href="/news" className="block px-4 py-2 hover:bg-gray-800">News</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="container mx-auto px-4 py-12 pt-20">
          <section className="text-left mb-16">
            <motion.div 
              className="flex flex-col items-start space-y-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold">Empowering</h1>
              <div className="relative h-16 md:h-20 overflow-hidden w-full max-w-xs my-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCarouselItem}
                    className="absolute inset-0 flex items-center justify-start text-3xl md:text-5xl font-bold text-blue-400"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {carouselItems[currentCarouselItem]}
                  </motion.div>
                </AnimatePresence>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">Founders</h1>
            </motion.div>
            <motion.p
              className="text-lg md:text-xl mt-8 mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Array Ventures invests in early-stage enterprise companies building transformative technologies.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Link href="/portfolio" className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center justify-center">
                View Our Portfolio
                <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center">
                Get in Touch
              </Link>
            </motion.div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  className="bg-gray-900 p-6 rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Image src={area.icon} alt="" width={48} height={48} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{area.name}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Founders Say</h2>
            <div className="relative h-48">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
                  <p className="font-bold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-gray-400">{testimonials[currentTestimonial].company}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <section className="mb-16">
            <TechyQuote />
          </section>
        </main>

        <footer className="border-t border-gray-800 py-8 mt-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Array Ventures. All rights reserved.</div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-gray-300 transition-colors" aria-hidden="true" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-gray-300 transition-colors" aria-hidden="true" />
              </a>
              <a href="#" aria-label="GitHub">
                <Github className="w-5 h-5 hover:text-gray-300 transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}