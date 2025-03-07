"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Terminal,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  FileCode,
  Server,
  Database,
  GraduationCap,
  Calendar,
  Phone,
  BookOpen,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [typedText, setTypedText] = useState("")
  const fullText = "Welcome to my terminal portfolio."
  const typingSpeed = 100 // ms per character

  // Setup intersection observers for each section with proper threshold
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 })
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.5 })
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 })
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.5 })
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.5 })
  const { ref: publicationsRef, inView: publicationsInView } = useInView({ threshold: 0.5 })

  // Typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection("home")
    else if (aboutInView) setActiveSection("about")
    else if (educationInView) setActiveSection("education")
    else if (experienceInView) setActiveSection("experience")
    else if (skillsInView) setActiveSection("skills")
    else if (publicationsInView) setActiveSection("publications")
    else if (contactInView) setActiveSection("contact")
  }, [homeInView, aboutInView, educationInView, experienceInView, skillsInView, publicationsInView, contactInView])

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
  }

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <div className="min-h-screen bg-black text-green-500 font-mono">
        {/* AI Badge */}
        <div className="fixed top-0 right-0 z-50 m-2 md:m-4">
          <div className="bg-black/80 border border-green-500/50 text-green-400 text-xs md:text-sm px-2 py-1 rounded-md flex items-center shadow-lg backdrop-blur-sm">
            <Terminal className="h-3 w-3 md:h-4 md:w-4 mr-1" />
            <span>Developed with AI</span>
          </div>
        </div>

        {/* Floating Header */}
        <header
          className="fixed top-0 left-0 right-0 bg-black border-b border-green-500/50 z-50 backdrop-blur-sm"
          role="banner"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg font-bold">hj@terminal:~$</span>
              </div>

              <nav className="hidden md:flex space-x-6" aria-label="Main Navigation">
                {[
                  { id: "home", label: "Home", icon: <Terminal className="h-4 w-4" aria-hidden="true" /> },
                  { id: "about", label: "About", icon: <User className="h-4 w-4" aria-hidden="true" /> },
                  {
                    id: "education",
                    label: "Education",
                    icon: <GraduationCap className="h-4 w-4" aria-hidden="true" />,
                  },
                  { id: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" aria-hidden="true" /> },
                  { id: "skills", label: "Skills", icon: <Server className="h-4 w-4" aria-hidden="true" /> },
                  {
                    id: "publications",
                    label: "Publications",
                    icon: <BookOpen className="h-4 w-4" aria-hidden="true" />,
                  },
                  { id: "contact", label: "Contact", icon: <Mail className="h-4 w-4" aria-hidden="true" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 hover:text-white transition-colors ${
                      activeSection === item.id ? "text-white" : "text-green-500/70"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-green-500 hover:text-white"
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <Terminal className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        <div
          className="fixed bottom-0 left-0 right-0 md:hidden bg-black border-t border-green-500/50 z-40"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="flex justify-around py-2">
            {[
              { id: "home", label: "Home", icon: <Terminal className="h-5 w-5" aria-hidden="true" /> },
              { id: "about", label: "About", icon: <User className="h-5 w-5" aria-hidden="true" /> },
              { id: "education", label: "Edu", icon: <GraduationCap className="h-5 w-5" aria-hidden="true" /> },
              { id: "experience", label: "Exp", icon: <Briefcase className="h-5 w-5" aria-hidden="true" /> },
              { id: "skills", label: "Skills", icon: <Server className="h-5 w-5" aria-hidden="true" /> },
              { id: "contact", label: "Contact", icon: <Mail className="h-5 w-5" aria-hidden="true" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center p-1 ${
                  activeSection === item.id ? "text-white" : "text-green-500/70"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-20 pb-20 md:pb-4" id="main-content">
          {/* Home Section */}
          <section
            id="home"
            ref={homeRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="home-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">terminal -- bash -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">./welcome.sh</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="ascii-art text-green-400 text-xs md:text-sm whitespace-pre font-mono leading-tight overflow-hidden max-w-full"
                    aria-label="ASCII art spelling HARISH"
                  >
                    {`
  __  __     ______     ______     __     ______     __  __    
 /\\ \\_\\ \\   /\\  __ \\   /\\  == \\   /\\ \\   /\\  ___\\   /\\ \\_\\ \\   
 \\ \\  __ \\  \\ \\  __ \\  \\ \\  __<   \\ \\ \\  \\ \\___  \\  \\ \\  __ \\  
  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\_\\  \\/\\_____\\  \\ \\_\\ \\_\\ 
   \\/_/\\/_/   \\/_/\\/_/   \\/_/ /_/   \\/_/   \\/_____/   \\/_/\\/_/ 
                                                                
`}
                  </motion.div>

                  <div className="welcome-text">
                    <span>{typedText}</span>
                    <span
                      className={`inline-block w-2 h-4 ml-1 bg-green-500 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
                      aria-hidden="true"
                    ></span>
                  </div>

                  <div className="mt-4">
                    <h1 id="home-heading" className="text-2xl md:text-3xl font-bold text-white">
                      Harish Jartarghar
                    </h1>
                    <p className="text-green-400 mt-2">Software Engineer</p>
                  </div>

                  <div className="mt-8">
                    <p className="text-green-400">Type 'help' for available commands or navigate using the menu.</p>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <a
                      href="https://github.com/harishjartarghar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-green-500 hover:text-white transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/harishjartarghar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-green-500 hover:text-white transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            ref={aboutRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="about-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">about.txt -- nano -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">cat about.txt</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <h2 id="about-heading" className="text-xl md:text-2xl font-bold text-white">
                    About Me
                  </h2>

                  <div className="space-y-4 text-green-300">
                    <p>
                      Software engineer with 2.7+ years of experience in developing SaaS applications and automation
                      tools. Passionate about building scalable, high-performance applications and solving complex
                      technical challenges.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Personal Info</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                      <div className="flex items-start space-x-2">
                        <User className="h-5 w-5 mt-0.5 text-green-500" aria-hidden="true" />
                        <div>
                          <p className="text-white">Name</p>
                          <p className="text-green-400">Harish Jartarghar</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Mail className="h-5 w-5 mt-0.5 text-green-500" aria-hidden="true" />
                        <div>
                          <p className="text-white">Email</p>
                          <p className="text-green-400">harish.jartarghar@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Phone className="h-5 w-5 mt-0.5 text-green-500" aria-hidden="true" />
                        <div>
                          <p className="text-white">Phone</p>
                          <p className="text-green-400">+91-8762448499</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Briefcase className="h-5 w-5 mt-0.5 text-green-500" aria-hidden="true" />
                        <div>
                          <p className="text-white">Occupation</p>
                          <p className="text-green-400">Software Engineer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            ref={educationRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="education-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">education.log -- less -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">cat education.log</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <h2 id="education-heading" className="text-xl md:text-2xl font-bold text-white">
                    Education
                  </h2>

                  <div className="space-y-8 mt-6">
                    {/* Timeline */}
                    <div className="relative border-l-2 border-green-500/50 pl-6 pb-2">
                      {/* Education 1 */}
                      <div className="mb-10 relative">
                        <div
                          className="absolute -left-[30px] mt-1.5 h-4 w-4 rounded-full bg-green-500"
                          aria-hidden="true"
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-white">RV College of Engineering, Bangalore</h3>
                            <p className="text-green-300 mt-1">
                              Bachelor of Engineering in Computer Science and Engineering
                            </p>
                          </div>
                          <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 md:ml-4 w-full md:w-auto text-center md:text-left">
                            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                            <span>Aug 2018 - June 2022</span>
                          </div>
                        </div>
                      </div>

                      {/* Education 2 */}
                      <div className="relative">
                        <div
                          className="absolute -left-[30px] mt-1.5 h-4 w-4 rounded-full bg-green-500"
                          aria-hidden="true"
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              Vidyaniketan Pre-University College, Hubli
                            </h3>
                            <p className="text-green-300 mt-1">Pre-University Board (PUC)</p>
                          </div>
                          <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 md:ml-4 w-full md:w-auto text-center md:text-left">
                            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                            <span>Aug 2016 - Mar 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={experienceRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="experience-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">experience.log -- less -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">cat experience.log</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <h2 id="experience-heading" className="text-xl md:text-2xl font-bold text-white">
                    Experience
                  </h2>

                  <div className="space-y-8 mt-6">
                    {/* Timeline */}
                    <div className="relative border-l-2 border-green-500/50 pl-6 pb-2">
                      {/* Job 1 */}
                      <div className="mb-10 relative">
                        <div
                          className="absolute -left-[30px] mt-1.5 h-4 w-4 rounded-full bg-green-500"
                          aria-hidden="true"
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">Software Engineer</h3>
                          <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 w-full md:w-auto text-center md:text-left">
                            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                            <span>May 2024 - Present</span>
                          </div>
                        </div>
                        <p className="text-green-300 mb-3">PhonePe India Pvt. Ltd. (Indus Appstore), Bangalore, IN</p>
                        <p className="text-green-400 text-sm">
                          Focused on building an exceptional developer experience for India's first app store by
                          automating key processes and enhancing workflows. Created tools such as automated state
                          machines for app onboarding, security scripts, and APK generation, streamlining in-house
                          development efforts. These innovations reduced manual work, improved efficiency, and empowered
                          developers to focus on creating high-quality solutions.
                        </p>
                      </div>

                      {/* Job 2 */}
                      <div className="mb-10 relative">
                        <div
                          className="absolute -left-[30px] mt-1.5 h-4 w-4 rounded-full bg-green-500"
                          aria-hidden="true"
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">Software Engineer 1</h3>
                          <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 w-full md:w-auto text-center md:text-left">
                            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                            <span>Jan 2024 - May 2024</span>
                          </div>
                        </div>
                        <p className="text-green-300 mb-3">Tekion India Pvt. Ltd., Bangalore, IN</p>
                        <p className="text-green-400 text-sm">
                          Designed and implemented a scalable, self-configuring solution for filters and search
                          functionalities in the web interface of consumer-facing applications for prominent OEMs.
                          Successfully reduced the application's initial load time by 50% and enhanced SEO through
                          server-side rendering. Improved the search scroll experience by integrating virtual scrolling,
                          reducing the number of DOM elements by 90% in the web viewport. Developed a dynamic, animated
                          vehicle gallery interface that provides users with a smooth and seamless viewing experience
                          when selecting each image. These optimizations collectively elevated both the performance and
                          user experience of the web platform.
                        </p>
                      </div>

                      {/* Job 3 */}
                      <div className="relative">
                        <div
                          className="absolute -left-[30px] mt-1.5 h-4 w-4 rounded-full bg-green-500"
                          aria-hidden="true"
                        ></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">Associate Software Engineer</h3>
                          <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 w-full md:w-auto text-center md:text-left">
                            <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                            <span>Jul 2022 - Dec 2023</span>
                          </div>
                        </div>
                        <p className="text-green-300 mb-3">Tekion India Pvt. Ltd., Bangalore, IN</p>
                        <p className="text-green-400 text-sm">
                          Designed and implemented 50% of the key features within the inventory module, ensuring high
                          quality and scalability to accommodate high traffic demand. Reduced the initial load time of
                          the application by 50% and improved SEO through server-side rendering. Developed UI components
                          with 100% precision, ensuring seamless alignment with Figma designs. Enhanced application
                          accessibility by 60% by strictly adhering to standard accessibility protocols. These efforts
                          collectively improved both performance and user experience, contributing to the application's
                          overall success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section
            id="publications"
            ref={publicationsRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="publications-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">publications.log -- less -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">cat publications.log</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <h2 id="publications-heading" className="text-xl md:text-2xl font-bold text-white">
                    Publications
                  </h2>

                  <div className="space-y-6 mt-6">
                    <div className="border border-green-500/30 p-4 hover:border-green-500/70 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white break-words">
                          Detection, identification and alert of wild animals in surveillance videos using deep learning
                        </h3>
                        <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 md:ml-4 w-full md:w-auto text-center md:text-left">
                          <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>Jul 2024</span>
                        </div>
                      </div>
                      <p className="text-green-300 mb-2">DOI: 10.1108/IJIUS-09-2022-0125</p>
                      <a
                        href="https://www.emerald.com/insight/content/doi/10.1108/ijius-09-2022-0125/full/html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-400 hover:text-white transition-colors mt-2 text-sm"
                        aria-label="View publication: Detection, identification and alert of wild animals in surveillance videos using deep learning"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span>View Publication</span>
                      </a>
                    </div>

                    <div className="border border-green-500/30 p-4 hover:border-green-500/70 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white break-words">
                          React Apps with Server-Side Rendering: Next.js
                        </h3>
                        <div className="flex items-center text-green-400 text-sm bg-black/40 px-3 py-1 rounded border border-green-500/30 whitespace-nowrap mt-2 md:mt-0 md:ml-4 w-full md:w-auto text-center md:text-left">
                          <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>Dec 2022</span>
                        </div>
                      </div>
                      <p className="text-green-300 mb-2">DOI: 10.54554/jtec.2022.14.04.005</p>
                      <a
                        href="https://jtec.utem.edu.my/jtec/article/view/6192"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-400 hover:text-white transition-colors mt-2 text-sm"
                        aria-label="View publication: React Apps with Server-Side Rendering: Next.js"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" aria-hidden="true" />
                        <span>View Publication</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={skillsRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="skills-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">skills -- npm list -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">npm list --global</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <h2 id="skills-heading" className="text-xl md:text-2xl font-bold text-white mb-6">
                    Skills & Technologies
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                    <SkillCategory
                      title="Programming Languages"
                      icon={<Code className="h-5 w-5" aria-hidden="true" />}
                      skills={["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++", "Bash"]}
                    />

                    <SkillCategory
                      title="Frontend"
                      icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
                      skills={["React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"]}
                    />

                    <SkillCategory
                      title="Backend"
                      icon={<Server className="h-5 w-5" aria-hidden="true" />}
                      skills={["Node.js", "Express.js", "RESTful APIs"]}
                    />

                    <SkillCategory
                      title="Tools & Platforms"
                      icon={<Database className="h-5 w-5" aria-hidden="true" />}
                      skills={["Git", "NPM", "Yarn", "Webpack", "CI/CD"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            ref={contactRef}
            className="min-h-screen flex flex-col justify-center py-16"
            aria-labelledby="contact-heading"
          >
            <div className="terminal-window border border-green-500/50 rounded-md bg-black/80 backdrop-blur-sm p-3 md:p-8 max-w-full sm:max-w-3xl mx-auto overflow-hidden">
              <div className="terminal-header flex items-center space-x-2 mb-4 pb-2 border-b border-green-500/30">
                <div className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true"></div>
                <div className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true"></div>
                <span className="text-green-500/70 text-sm ml-2">contact -- mail -- 80x24</span>
              </div>

              <div className="terminal-content space-y-6">
                <div className="command-line">
                  <span className="text-green-500">hj@terminal:~$</span>
                  <span className="ml-2">./contact.sh</span>
                </div>

                <div className="output space-y-4 text-sm md:text-base">
                  <h2 id="contact-heading" className="text-xl md:text-2xl font-bold text-white mb-6">
                    Contact Me
                  </h2>

                  <p className="text-green-300 mb-6">
                    Feel free to reach out if you have any questions or would like to work together. Fill out the form
                    below or use one of the contact methods listed.
                  </p>

                  <form className="space-y-4 mb-8" aria-label="Contact form">
                    <div>
                      <label htmlFor="name" className="block text-green-500 mb-1">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-black border border-green-500/50 text-green-300 p-2 focus:outline-none focus:border-green-500"
                        placeholder="Enter your name"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-green-500 mb-1">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-black border border-green-500/50 text-green-300 p-2 focus:outline-none focus:border-green-500"
                        placeholder="Enter your email"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-green-500 mb-1">
                        Message:
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-black border border-green-500/50 text-green-300 p-2 focus:outline-none focus:border-green-500 resize-none"
                        placeholder="Type your message here..."
                        aria-required="true"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="bg-green-500/20 hover:bg-green-500/30 text-green-500 border border-green-500/50 px-4 py-2 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-green-300">harish.jartarghar@gmail.com</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Github className="h-5 w-5 text-green-500" aria-hidden="true" />
                      <a
                        href="https://github.com/harishjartarghar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-white transition-colors"
                        aria-label="GitHub Profile"
                      >
                        github.com/harishjartarghar
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Linkedin className="h-5 w-5 text-green-500" aria-hidden="true" />
                      <a
                        href="https://linkedin.com/in/harishjartarghar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-white transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        linkedin.com/in/harishjartarghar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

// Skill Category Component
function SkillCategory({ title, icon, skills }) {
  return (
    <div className="border border-green-500/30 p-4">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-green-500">{icon}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-green-500/10 border border-green-500/30 px-3 py-2 rounded-md hover:bg-green-500/20 transition-colors"
          >
            <span className="text-green-400">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

