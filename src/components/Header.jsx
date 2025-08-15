import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Menu, X, Star } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Especialidades', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-secondary-900/95 backdrop-blur-md shadow-lg shadow-primary-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-1 -right-1"
              >
                <Star className="w-4 h-4 text-accent-400" />
              </motion.div>
            </div>
            <div className="flex flex-col">
              <motion.h1 
                className={`text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
              >
                Neil Amrst
              </motion.h1>
              <span className={`text-sm transition-all duration-300 ${
                isScrolled ? 'text-primary-300' : 'text-primary-200'
              }`}>
                Astronauta
              </span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-primary-400 relative group ${
                  isScrolled ? 'text-white' : 'text-primary-100'
                }`}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-white hover:bg-white/10' : 'text-primary-100 hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-secondary-900/95 backdrop-blur-md rounded-lg mt-2"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-primary-100 hover:text-primary-400 hover:bg-white/5 transition-all duration-300 rounded-lg"
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}