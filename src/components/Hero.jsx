import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, Zap, ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation();
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6"
            >
              <Star className="w-4 h-4 text-accent-400 mr-2" />
              <span className="text-primary-300 text-sm font-medium">{t('hero_explorer')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white text-shadow">{t('hero_title_part1')}</span>
              <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                {t('hero_title_part2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed"
            >
              {t('hero_description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary inline-flex items-center group space-glow"
              >
                <span>{t('hero_button_contact')}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="btn-secondary inline-flex items-center group"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                <span>{t('hero_button_journey')}</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-8 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-primary-300 text-sm">Missões</div>
              </div>
              <div className="w-px h-8 bg-primary-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-primary-300 text-sm">Anos no Espaço</div>
              </div>
              <div className="w-px h-8 bg-primary-400/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-primary-300 text-sm">Estações Espaciais</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-400/30 scale-110"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-accent-400/20 scale-125"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative glass-effect p-8 rounded-3xl w-80 h-80 flex flex-col items-center justify-center space-glow"
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotateX: [0, 10, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="p-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    >
                      <Rocket className="w-16 h-16 text-white" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-2 -right-2"
                    >
                      <Zap className="w-8 h-8 text-accent-400" />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-white mb-2 text-center"
                >
                  Missão Ativa
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-primary-300 text-center text-sm leading-relaxed"
                >
                  Atualmente em preparação para a próxima expedição à Estação Espacial Internacional
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 glass-effect p-4 rounded-xl"
              >
                <Star className="w-6 h-6 text-accent-400" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, -8, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass-effect p-3 rounded-xl"
              >
                <Globe className="w-5 h-5 text-primary-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-primary-300 hover:text-primary-400 transition-colors p-2"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}