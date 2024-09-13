'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CircuitBoard, Github, Linkedin, Twitter, Search, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type IndustryKey = keyof typeof industryColors;

const exits = [
  { 
    name: "Simility", 
    description: "AI/ML fraud management", 
    acquirer: "Paypal", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simility-LQnTc5oW8FxY3lflOPukFrNFL6lMKj.png",
    acquirerLogo: "/paypal-logo.svg",
    website: "https://www.simility.com"
  },
  { 
    name: "Passage AI", 
    description: "Conversational AI platform", 
    acquirer: "ServiceNow", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PassageAI-kOiBOpFILixVRkiEah7NN7iN0Q9ToC.png",
    acquirerLogo: "/servicenow-logo.svg",
    website: "https://www.passageai.com"
  },
  { 
    name: "Art19", 
    description: "Enterprise Podcast Platform", 
    acquirer: "Amazon", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Art19-F0llv1CPRTYOTIZMg8NTREbHGou8l3.png",
    acquirerLogo: "/amazon-logo.svg",
    website: "https://www.art19.com"
  },
  { 
    name: "Hivy", 
    description: "Automation for Office Managers", 
    acquirer: "Managed By Q", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hiuy-WWwgbxGMgnRTPRZwtjxrq8hIB8Asaj.png",
    acquirerLogo: "/managed-by-q-logo.svg",
    website: "https://www.hivy.com"
  },
  { 
    name: "Lennd", 
    description: "OS for event planning", 
    acquirer: "Classy", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lennd-hOqqpzVZwbzkH4pEClOWgVrWcirwQS.png",
    acquirerLogo: "/classy-logo.svg",
    website: "https://www.lennd.com"
  },
  { 
    name: "Tank Utility", 
    description: "Smart Monitors for Propane Tank", 
    acquirer: "Generac", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TankUtility-ZODz9PU4RxK6Tf6pKho4qokkBTSoS6.png",
    acquirerLogo: "/generac-logo.svg",
    website: "https://www.tankutility.com"
  },
  { 
    name: "Wootric", 
    description: "Data-driven customer UX platform", 
    acquirer: "InMoment", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wootric-SRy8To52t6Q7bxBOaLh33ajo58aY7N.png",
    acquirerLogo: "/inmoment-logo.svg",
    website: "https://www.wootric.com"
  },
]

const industryColors = {
  "AI": "bg-purple-500",
  "Healthcare": "bg-green-500",
  "Robotics": "bg-yellow-500",
  "FinTech": "bg-blue-500",
  "Enterprise": "bg-red-500",
  "Data": "bg-indigo-500",
  "IoT": "bg-pink-500",
  "Automation": "bg-orange-500",
  "Media": "bg-teal-500",
  "Blockchain": "bg-cyan-500"
}

const investments = [
  { name: "Cast", description: "Digital Customer Success", logo: "/cast-logo.svg", website: "https://www.cast.ai", year: 2018, acquiredBy: null, industry: "Enterprise" },
  { name: "Tumble", description: "Smart Commercial Laundry", logo: "/tumble-logo.svg", website: "https://www.tumble.com", year: 2020, acquiredBy: null, industry: "IoT" },
  { name: "Shipyard", description: "Environment management and release automation", logo: "/shipyard-logo.svg", website: "https://www.shipyard.build", year: 2019, acquiredBy: null, industry: "Automation" },
  { name: "Intentomatic", description: "SEO dashboard", logo: "/intentomatic-logo.svg", website: "https://www.intentomatic.com", year: 2021, acquiredBy: null, industry: "Data" },
  { name: "Blumira", description: "Automated threat detection & response", logo: "/blumira-logo.svg", website: "https://www.blumira.com", year: 2017, acquiredBy: null, industry: "AI" },
  { name: "Uniform", description: "Uniform helps connect your existing digital marketing stack", logo: "/uniform-logo.svg", website: "https://www.uniform.dev", year: 2022, acquiredBy: null, industry: "Enterprise" },
  { name: "EraDB", description: "A time-series database built for machine learning and anomaly detection", logo: "/eradb-logo.svg", website: "https://www.eradb.com", year: 2016, acquiredBy: "MongoDB", industry: "Data" },
  { name: "Almanac", description: "Automated professional assistant", logo: "/almanac-logo.svg", website: "https://www.almanac.io", year: 2023, acquiredBy: null, industry: "AI" },
  { name: "Liftlab", description: "Media experimentation and analytics", logo: "/liftlab-logo.svg", website: "https://www.liftlab.com", year: 2015, acquiredBy: "Adobe", industry: "Media" },
  { name: "Dyneti", description: "An authentication platform using deep learning", logo: "/dyneti-logo.svg", website: "https://www.dyneti.com", year: 2024, acquiredBy: null, industry: "AI" },
  { name: "Verview", description: "Manufacturing automation using computer vision", logo: "/verview-logo.svg", website: "https://www.verview.ai", year: 2014, acquiredBy: "Siemens", industry: "Robotics" },
  { name: "Goodtime", description: "Automated Interview Scheduling", logo: "/goodtime-logo.svg", website: "https://www.goodtime.io", year: 2019, acquiredBy: null, industry: "Automation" },
  { name: "Productiv", description: "SaaS Management Platform", logo: "/productiv-logo.svg", website: "https://www.productiv.com", year: 2018, acquiredBy: null, industry: "Enterprise" },
  { name: "Casaone", description: "Seamless Furniture Rental", logo: "/casaone-logo.svg", website: "https://www.casaone.com", year: 2020, acquiredBy: null, industry: "Enterprise" },
  { name: "PrecisionGH", description: "AI for Health Insurance", logo: "/precisiongh-logo.svg", website: "https://www.precisiongh.com", year: 2017, acquiredBy: null, industry: "Healthcare" },
  { name: "Empinfo", description: "Automated Employment & Income Verification", logo: "/empinfo-logo.svg", website: "https://www.empinfo.com", year: 2021, acquiredBy: null, industry: "FinTech" },
  { name: "Xwing", description: "Autonomy for Aviation", logo: "/xwing-logo.svg", website: "https://www.xwing.com", year: 2016, acquiredBy: null, industry: "Robotics" },
  { name: "RAD AI", description: "For radiology groups and companies", logo: "/rad-ai-logo.svg", website: "https://www.radai.com", year: 2022, acquiredBy: null, industry: "Healthcare" },
  { name: "Stronghold", description: "Buy and Sell Digital Currencies", logo: "/stronghold-logo.svg", website: "https://www.stronghold.co", year: 2015, acquiredBy: "Coinbase", industry: "Blockchain" },
  { name: "Mapistry", description: "Painless Stormwater compliance", logo: "/mapistry-logo.svg", website: "https://www.mapistry.com", year: 2019, acquiredBy: null, industry: "Enterprise" },
  { name: "Vertalo", description: "The future of work", logo: "/vertalo-logo.svg", website: "https://www.vertalo.com", year: 2018, acquiredBy: null, industry: "Blockchain" },
  { name: "Zendar", description: "Self-driving Radar/ML company", logo: "/zendar-logo.svg", website: "https://www.zendar.io", year: 2020, acquiredBy: null, industry: "AI" },
  { name: "Openprise", description: "Data orchestration", logo: "/openprise-logo.svg", website: "https://www.openprisetech.com", year: 2017, acquiredBy: null, industry: "Data" },
  { name: "Blendid", description: "Robotic food tech", logo: "/blendid-logo.svg", website: "https://www.blendid.com", year: 2021, acquiredBy: null, industry: "Robotics" },
  { name: "Take44", description: "Zenefits for brokers", logo: "/take44-logo.svg", website: "https://www.take44.com", year: 2016, acquiredBy: "Zenefits", industry: "FinTech" },
  { name: "Leap", description: "Revenue operations Automation", logo: "/leap-logo.svg", website: "https://www.leapops.com", year: 2022, acquiredBy: null, industry: "Automation" },
  { name: "Placer", description: "Insights on foot traffic", logo: "/placer-logo.svg", website: "https://www.placer.ai", year: 2014, acquiredBy: null, industry: "Data" },
  { name: "Vue.ai", description: "Enabling brands with deep tech", logo: "/vue-ai-logo.svg", website: "https://www.vue.ai", year: 2019, acquiredBy: null, industry: "AI" },
  { name: "Safegraph", description: "Predicting the past", logo: "/safegraph-logo.svg", website: "https://www.safegraph.com", year: 2018, acquiredBy: null, industry: "Data" },
  { name: "Solugen", description: "Plant based hydrogen peroxide", logo: "/solugen-logo.svg", website: "https://www.solugen.com", year: 2016, acquiredBy: null, industry: "Enterprise" },
  { name: "Pulse", description: "Crowdsourced research for C-level execs", logo: "/pulse-logo.svg", website: "https://www.pulse.qa", year: 2020, acquiredBy: null, industry: "Enterprise" },
  { name: "Modal", description: "Stripe for auto dealers", logo: "/modal-logo.svg", website: "https://www.modal.com", year: 2017, acquiredBy: null, industry: "FinTech" },
  { name: "Catch & Release", description: "Media Discovery & Licensing", logo: "/catch-and-release-logo.svg", website: "https://www.catchandrelease.com", year: 2021, acquiredBy: null, industry: "Media" },
  { name: "zecOps", description: "Zecops - Threat Intelligence Platform", logo: "/zecops-logo.svg", website: "https://www.zecops.com", year: 2015, acquiredBy: "SentinelOne", industry: "AI" },
  { name: "Chisel", description: "Product Management Software", logo: "/chisel-logo.svg", website: "https://www.chisel.ai", year: 2019, acquiredBy: null, industry: "Enterprise" },
  { name: "Runway", description: "Release Management", logo: "/runway-logo.svg", website: "https://www.runway.team", year: 2018, acquiredBy: null, industry: "Automation" },
  { name: "Hermis", description: "Employee Engagement", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hermis-zaTlSXd9lw4vsapaSaarlCtbkknDhp.png", website: "https://www.hermis.io", year: 2022, acquiredBy: null, industry: "Enterprise" },
  { name: "Bytewax", description: "Log Management API", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bytewax-ljr8vdGdp4ZRhVO3HbdudYOZb04jLL.png", website: "https://www.bytewax.io", year: 2020, acquiredBy: null, industry: "Data" },
  { name: "Mozart Data", description: "Data Pipeline", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mozartdata-bxP51gGuuDYTIOGSOEhA6e4QTuPEac.png", website: "https://www.mozartdata.com", year: 2021, acquiredBy: null, industry: "Data" },
  { name: "Sliceup", description: "Log Management API", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sliceup-S3niutD44aOmmVwsc5vKqQTLr8kbbV.png", website: "https://www.sliceup.com", year: 2019, acquiredBy: null, industry: "Data" },
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
    investment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investment.industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentInvestments = filteredInvestments.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="min-h-screen bg-black text-white font-['Courier_New',_monospace] overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <motion.svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.svg>
      </div>
      
      <div className="relative z-10">
        <header className="sticky top-0 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <CircuitBoard className="w-6 h-6" />
              <span className="text-xl font-bold">[ARRAY VC]</span>
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link href="/portfolio" className="font-bold">Portfolio</Link>
              <Link href="/team" className="hover:text-gray-300 transition-colors">Team</Link>
              <Link href="/events" className="hover:text-gray-300 transition-colors">Events</Link>
              <Link href="/news" className="hover:text-gray-300 transition-colors">News</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8">Our Exits</h2>
            <div className="relative h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExit}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center space-x-8 mb-4">
                      <div className="w-32 h-32 relative">
                        <Image
                          src={exits[currentExit].logo}
                          alt={`${exits[currentExit].name} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <motion.div 
                        className="w-12 h-12 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                      <div className="w-32 h-32 relative">
                        <Image
                          src={exits[currentExit].acquirerLogo}
                          alt={`${exits[currentExit].acquirer} logo`}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      <a href={exits[currentExit].website} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                        {exits[currentExit].name}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </h3>
                    <p className="text-lg mb-2">{exits[currentExit].description}</p>
                    <p className="text-sm">
                      Acquired by <span className="text-green-400 font-semibold">{exits[currentExit].acquirer}</span>
                    </p>
                  </div>
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
                aria-label="Search investments"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true" />
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
                  className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-24 relative mb-4">
                    <Image
                      src={investment.logo}
                      alt={`${investment.name} logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    <a href={investment.website} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                      {investment.name}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{investment.description}</p>
                  <p className="text-xs text-gray-500">Founded: {investment.year}</p>
                  {investment.acquiredBy && (
                    <p className="text-xs text-green-400 mt-1">
                      Acquired by {investment.acquiredBy}
                    </p>
                  )}
                  {/* {type IndustryKey = keyof typeof industryColors;} */}
                  {/* <div className={`mt-2 inline-block px-2 py-1 rounded-full text-xs font-semibold ${industryColors[investment.industry]} text-white`}>
                    {investment.industry}
                  </div> */}
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 flex justify-center items-center space-x-4">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span>Page {currentPage} of {Math.ceil(filteredInvestments.length / itemsPerPage)}</span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredInvestments.length / itemsPerPage)}
                className="bg-gray-800 text-white px-4 py-2 rounded-md disabled:opacity-50"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </section>
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