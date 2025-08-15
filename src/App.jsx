import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);
  return (
    <div className="min-h-screen bg-space-galaxy relative overflow-hidden">
      <div className="bg-space-pattern bg-[length:20px_20px] absolute inset-0 opacity-30"></div>
      <div className="relative z-10">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <About />
          <Services />
          <Contact />
        </motion.main>
        <Footer />
      </div>
      
      <motion.div
        className="fixed top-20 right-10 w-4 h-4 bg-primary-400 rounded-full opacity-70"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="fixed bottom-32 left-16 w-2 h-2 bg-accent-400 rounded-full opacity-60"
        animate={{ 
          x: [0, -20, 0], 
          y: [0, 20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.div
        className="fixed top-1/2 left-8 w-3 h-3 bg-primary-300 rounded-full opacity-50"
        animate={{ 
          rotate: 360,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </div>
  )
}