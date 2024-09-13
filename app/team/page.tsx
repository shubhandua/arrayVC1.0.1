'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CircuitBoard, Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const teamMember = {
  name: "Shruti Gandhi",
  role: "Founder & Managing Partner",
  bio: "Shruti Gandhi is the Founder and Managing Partner of Array Ventures. With over 15 years of experience in venture capital and technology, Shruti has a proven track record of identifying and supporting innovative startups. Her expertise spans across various sectors including AI, machine learning, enterprise software, and emerging technologies.",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shruti-sVZNC7z6q6iS6OaeaalufH06qCn7eT.png",
  linkedin: "https://www.linkedin.com/in/shrutigandhi/",
  twitter: "https://x.com/atShruti",
  email: "shruti@array.vc"
}

const advisors = [
  {
    name: "Lucas Baker",
    role: "Google Deepmind",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucas%20Baker-ISyUzT8YJngLMlllbwQzvjPJZ7RYwD.png",
    linkedin: "https://www.linkedin.com/in/tesuji/",
  },
  {
    name: "Anthony Wu",
    role: "Apple",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AnthonyWu-3q514spbEQrUMgFcQzAd2YoiJJHbOf.png",
    linkedin: "https://www.crunchbase.com/person/anthony-wu",
  },
  {
    name: "Dan Janney",
    role: "Alta Partners",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dan%20Janney-IZXJDddHllyCPVU83zZ1nWieRtZoRu.png",
    linkedin: "https://www.altapartners.com/leadership/dan-janney/",
  },
  {
    name: "Kimberly Ha",
    role: "FTI Consulting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KimberleyHa-ZbVmJI4RmOuEEH8YBFTOEsO8TU0d7N.png",
    linkedin: "https://www.linkedin.com/in/kimberlyha/",
  },
  {
    name: "Ellen Rudnick",
    role: "Liberty Mutual Board of Director and Booth",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ellen%20Rudnick-VNK0NrWkFgn6liTVJOW1NcixLyhpFw.png",
    linkedin: "https://www.linkedin.com/in/ellen-rudnick-364a793/",
  },
  {
    name: "Henning Schulzrinne",
    role: "Former FCC CTO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Henning-vSSjb7P7HKncED8mOkDx2k1lxXmeIi.png",
    linkedin: "https://www.linkedin.com/in/henningschulzrinne/",
  },
  {
    name: "Christine Schmid",
    role: "Lecturer Executive Master of European and International Business Law",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christine-LLc6pzEQyisY4HrnGGsvBAbJuJhJAJ.png",
    linkedin: "https://www.linkedin.com/in/dr-christine-schmid-96092416a/?originalSubdomain=de",
  },
]

const startupNetwork = [
  {
    name: "Alex Johnson",
    role: "CEO",
    startup: "TechNova",
    industry: "AI",
    year: 2019,
    acquiredBy: "Google",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/alexjohnson",
  },
  {
    name: "Sarah Lee",
    role: "CTO",
    startup: "GreenEnergy",
    industry: "CleanTech",
    year: 2020,
    acquiredBy: null,
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/sarahlee",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    startup: "HealthTech",
    industry: "MedTech",
    year: 2018,
    acquiredBy: "Johnson & Johnson",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/michaelchen",
  },
  {
    name: "Emily Rodriguez",
    role: "Co-founder",
    startup: "FinanceAI",
    industry: "FinTech",
    year: 2021,
    acquiredBy: null,
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/emilyrodriguez",
  },
  {
    name: "David Kim",
    role: "CEO",
    startup: "CloudSecure",
    industry: "Cybersecurity",
    year: 2017,
    acquiredBy: "Microsoft",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/davidkim",
  },
  {
    name: "Olivia Patel",
    role: "CTO",
    startup: "DataViz",
    industry: "Data Analytics",
    year: 2022,
    acquiredBy: null,
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/oliviapatel",
  },
  {
    name: "James Wilson",
    role: "Founder",
    startup: "EduTech",
    industry: "Education Technology",
    year: 2016,
    acquiredBy: "Pearson",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/jameswilson",
  },
  {
    name: "Sophia Nguyen",
    role: "CEO",
    startup: "BioGen",
    industry: "Biotechnology",
    year: 2020,
    acquiredBy: null,
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/sophianguyen",
  },
  {
    name: "Ethan Brown",
    role: "Co-founder",
    startup: "SpaceTech",
    industry: "Aerospace",
    year: 2018,
    acquiredBy: "SpaceX",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/ethanbrown",
  },
  {
    name: "Isabella Martinez",
    role: "CTO",
    startup: "Robotics Inc.",
    industry: "Robotics",
    year: 2019,
    acquiredBy: null,
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/isabellamartinez",
  },
  {
    name: "Ryan Taylor",
    role: "Founder",
    startup: "AgriTech",
    industry: "Agriculture Technology",
    year: 2017,
    acquiredBy: "John Deere",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/ryantaylor",
  },
  {
    name: "Emma Watson",
    role: "CEO",
    startup: "VRWorld",
    industry: "Virtual Reality",
    year: 2021,
    acquiredBy: null,
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://www.linkedin.com/in/emmawatson",
  }
]

export default function Component() {
  const [currentInnovator, setCurrentInnovator] = useState("B2B SaaS")
  const [sortBy, setSortBy] = useState('name')
  const innovatorTypes = ["B2B SaaS", "Pre Seed", "Enterprise", "Technical"]

  useEffect(() => {
    const innovatorInterval = setInterval(() => {
      setCurrentInnovator(prev => {
        const currentIndex = innovatorTypes.indexOf(prev)
        return innovatorTypes[(currentIndex + 1) % innovatorTypes.length]
      })
    }, 2000)

    return () => clearInterval(innovatorInterval)
  })

  const sortedStartupNetwork = [...startupNetwork].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    if (sortBy === 'startup') return a.startup.localeCompare(b.startup)
    if (sortBy === 'industry') return a.industry.localeCompare(b.industry)
    if (sortBy === 'year') return b.year - a.year
    return 0
  })

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New',_monospace] overflow-hidden relative">
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
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CircuitBoard className="w-6 h-6" />
              <span className="text-xl font-bold">[ARRAY VC]</span>
            </motion.div>
            <motion.div 
              className="space-x-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/team" className="font-bold">Team</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </motion.div>
          </nav>
        </header>
        
        <main className="container mx-auto px-4 pt-20">
          <section className="py-12">
            <motion.h1 
              className="text-6xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Array Ventures
            </motion.h1>
          </section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-12"
          >
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <Image src={teamMember.image} alt={teamMember.name} width={400} height={400} className="h-full w-full object-cover md:w-48" />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{teamMember.role}</div>
                    <h2 className="mt-2 text-3xl leading-tight font-bold text-white">{teamMember.name}</h2>
                    <p className="mt-4 text-gray-300">{teamMember.bio}</p>
                    <div className="mt-6 flex space-x-4">
                      <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
                      </a>
                      <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                      </a>
                      <a href={`mailto:${teamMember.email}`} aria-label="Email">
                        <Mail className="w-6 h-6 hover:text-blue-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="py-12"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <motion.div 
                  key={advisor.name}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image src={advisor.image} alt={advisor.name} width={400} height={400} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{advisor.name}</h3>
                    <p className="text-gray-400 mb-4">{advisor.role}</p>
                    <div className="flex space-x-4">
                      <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${advisor.name}'s LinkedIn`}>
                        <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="py-12"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Startup Operations Network</h2>
            <div className="mb-8 flex justify-end">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2"
              >
                <option value="name">Sort by Name</option>
                <option value="startup">Sort by Startup</option>
                <option value="industry">Sort by Industry</option>
                <option value="year">Sort by Year</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedStartupNetwork.map((person, index) => (
                <motion.div 
                  key={person.name}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Image src={person.image} alt={person.name} width={400} height={400} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                    <p className="text-gray-400 mb-1">{person.role} at {person.startup}</p>
                    <p className="text-gray-400 mb-1">Industry: {person.industry}</p>
                    <p className="text-gray-400 mb-4">Founded: {person.year}</p>
                    {person.acquiredBy && (
                      <p className="text-green-400 mb-4">Acquired by {person.acquiredBy}</p>
                    )}
                    <div className="flex space-x-4">
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${person.name}'s LinkedIn`}>
                        <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
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