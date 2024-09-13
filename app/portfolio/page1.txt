'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CircuitBoard, Github, Linkedin, Twitter, Search, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const exits = [
  { name: "Simility", description: "AI/ML fraud management", acquirer: "Paypal", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simility-LQnTc5oW8FxY3lflOPukFrNFL6lMKj.png" },
  { name: "Passage AI", description: "Conversational AI platform", acquirer: "ServiceNow", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PassageAI-kOiBOpFILixVRkiEah7NN7iN0Q9ToC.png" },
  { name: "Art19", description: "Enterprise Podcast Platform", acquirer: "Amazon", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Art19-F0llv1CPRTYOTIZMg8NTREbHGou8l3.png" },
  { name: "Hivy", description: "Automation for Office Managers", acquirer: "Managed By Q", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hiuy-WWwgbxGMgnRTPRZwtjxrq8hIB8Asaj.png" },
  { name: "Lennd", description: "OS for event planning", acquirer: "Classy", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lennd-hOqqpzVZwbzkH4pEClOWgVrWcirwQS.png" },
  { name: "Tank Utility", description: "Smart Monitors for Propane Tank", acquirer: "Generac", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TankUtility-ZODz9PU4RxK6Tf6pKho4qokkBTSoS6.png" },
  { name: "Wootric", description: "Data-driven customer UX platform", acquirer: "InMoment", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wootric-SRy8To52t6Q7bxBOaLh33ajo58aY7N.png" },
]

const investments = [
  { name: "Cast", description: "Digital Customer Success", logo: "/cast-logo.svg" },
  { name: "Tumble", description: "Smart Commercial Laundry", logo: "/tumble-logo.svg" },
  { name: "Shipyard", description: "Environment management and release automation", logo: "/shipyard-logo.svg" },
  { name: "Intentomatic", description: "SEO dashboard", logo: "/intentomatic-logo.svg" },
  { name: "Blumira", description: "Automated threat detection & response", logo: "/blumira-logo.svg" },
  { name: "Uniform", description: "Uniform helps connect your existing digital marketing stack", logo: "/uniform-logo.svg" },
  { name: "EraDB", description: "A time-series database built for machine learning and anomaly detection", logo: "/eradb-logo.svg" },
  { name: "Almanac", description: "Automated professional assistant", logo: "/almanac-logo.svg" },
  { name: "Liftlab", description: "Media experimentation and analytics", logo: "/liftlab-logo.svg" },
  { name: "Dyneti", description: "An authentication platform using deep learning", logo: "/dyneti-logo.svg" },
  { name: "Verview", description: "Manufacturing automation using computer vision", logo: "/verview-logo.svg" },
  { name: "Goodtime", description: "Automated Interview Scheduling", logo: "/goodtime-logo.svg" },
  { name: "Productiv", description: "SaaS Management Platform", logo: "/productiv-logo.svg" },
  { name: "Casaone", description: "Seamless Furniture Rental", logo: "/casaone-logo.svg" },
  { name: "PrecisionGH", description: "AI for Health Insurance", logo: "/precisiongh-logo.svg" },
  { name: "Empinfo", description: "Automated Employment & Income Verification", logo: "/empinfo-logo.svg" },
  { name: "Xwing", description: "Autonomy for Aviation", logo: "/xwing-logo.svg" },
  { name: "RAD AI", description: "For radiology groups and companies", logo: "/rad-ai-logo.svg" },
  { name: "Stronghold", description: "Buy and Sell Digital Currencies", logo: "/stronghold-logo.svg" },
  { name: "Mapistry", description: "Painless Stormwater compliance", logo: "/mapistry-logo.svg" },
  { name: "Vertalo", description: "The future of work", logo: "/vertalo-logo.svg" },
  { name: "Zendar", description: "Self-driving Radar/ML company", logo: "/zendar-logo.svg" },
  { name: "Openprise", description: "Data orchestration", logo: "/openprise-logo.svg" },
  { name: "Blendid", description: "Robotic food tech", logo: "/blendid-logo.svg" },
  { name: "Take44", description: "Zenefits for brokers", logo: "/take44-logo.svg" },
  { name: "Leap", description: "Revenue operations Automation", logo: "/leap-logo.svg" },
  { name: "Placer", description: "Insights on foot traffic", logo: "/placer-logo.svg" },
  { name: "Vue.ai", description: "Enabling brands with deep tech", logo: "/vue-ai-logo.svg" },
  { name: "Safegraph", description: "Predicting the past", logo: "/safegraph-logo.svg" },
  { name: "Solugen", description: "Plant based hydrogen peroxide", logo: "/solugen-logo.svg" },
  { name: "Pulse", description: "Crowdsourced research for C-level execs", logo: "/pulse-logo.svg" },
  { name: "Modal", description: "Stripe for auto dealers", logo: "/modal-logo.svg" },
  { name: "Catch & Release", description: "Media Discovery & Licensing", logo: "/catch-and-release-logo.svg" },
  { name: "zecOps", description: "Zecops - Threat Intelligence Platform", logo: "/zecops-logo.svg" },
  { name: "Chisel", description: "Product Management Software", logo: "/chisel-logo.svg" },
  { name: "Runway", description: "Release Management", logo: "/runway-logo.svg" },
  { name: "Hermis", description: "Employee Engagement", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hermis-zaTlSXd9lw4vsapaSaarlCtbkknDhp.png" },
  { name: "Bytewax", description: "Log Management API", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bytewax-ljr8vdGdp4ZRhVO3HbdudYOZb04jLL.png" },
  { name: "Mozart Data", description: "Data Pipeline", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mozartdata-bxP51gGuuDYTIOGSOEhA6e4QTuPEac.png" },
  { name: "Sliceup", description: "Log Management API", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sliceup-S3niutD44aOmmVwsc5vKqQTLr8kbbV.png" },
]

export default function Portfolio() {
  const [currentExit, setCurrentExit] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)

  useEffect(() => {
    const exitInterval = setInterval(() => {
      setCurrentExit((prev) => (prev + 1) % exits.length)
    }, 5000)

    return () => clearInterval(exitInterval)
  }, [])

  const filteredInvestments = investments.filter(investment =>
    investment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investment.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentInvestments = filteredInvestments.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
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
        <header className="border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CircuitBoard className="w-6 h-6" />
              <span className="text-xl font-bold">[ARRAY VC]</span>
            </Link>
            <div className="space-x-4">
              <Link href="/portfolio" className="font-bold">Portfolio</Link>
              <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Our Exits</h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExit}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-64 h-32 relative mb-4">
                    <Image
                      src={exits[currentExit].logo}
                      alt={`${exits[currentExit].name} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{exits[currentExit].name}</h3>
                  <p className="text-lg mb-2">{exits[currentExit].description}</p>
                  <p className="text-sm text-gray-400">Acquired by {exits[currentExit].acquirer}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8">Our Investments</h2>
            <div className="mb-8 relative">
              <input
                type="text"
                placeholder="Search investments..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {currentInvestments.map((investment) => (
                <motion.div
                  key={investment.name}
                  className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-24 relative mb-4">
                    {investment.logo === "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comingsoon-2FAHxd4tr5s2vQatisGzmoVt8nezXH.png" ? (
                      <Image
                        src={investment.logo}
                        alt={`${investment.name} logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    ) : (
                      <Image
                        src={investment.logo}
                        alt={`${investment.name} logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{investment.name}</h3>
                  <p className="text-sm text-gray-400">{investment.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span>{currentPage} of {Math.ceil(filteredInvestments.length / itemsPerPage)}</span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredInvestments.length / itemsPerPage)}
                className="bg-gray-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </section>
        </main>

        <footer className="border-t border-gray-800 py-8 mt-20">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div>&copy; {new Date().getFullYear()} Array Venture. All rights reserved.</div>
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