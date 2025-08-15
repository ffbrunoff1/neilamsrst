import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Especialidades', id: 'services' },
    { label: 'Contato', id: 'contact' }
  ]

  const achievements = [
    { label: 'Missões Espaciais', value: '15+' },
    { label: 'Horas no Espaço', value: '2.850' },
    { label: 'Caminhadas Espaciais', value: '12' },
    { label: 'Anos de Experiência', value: '8+' }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  >
                    <Rocket className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-1 -right-1"
                  >
                    <Star className="w-4 h-4 text-accent-400" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    Neil Amrst
                  </h3>
                  <p className="text-primary-300 text-sm">Astronauta</p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-primary-300 leading-relaxed mb-6"
              >
                Dedicado Á  exploração espacial e ao avanço da ciência, expandindo os horizontes da humanidade no cosmos através de missões inovadoras e descobertas revolucionárias.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-primary-400 text-sm">Ativo em Missão</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-accent-400" />
                Navegação
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.button
                      whileHover={{ x: 5, color: '#38bdf8' }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-300 hover:text-primary-400 transition-all duration-300 text-left"
                    >
                      {link.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-accent-400" />
                Conquistas
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-primary-500/20"
                  >
                    <span className="text-primary-300 text-sm">{achievement.label}</span>
                  <span className="font-bold text-accent-400">{achievement.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-accent-400" />
                Contato
              </h4>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-primary-300"
                >
                  <Mail className="w-5 h-5 mt-0.5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm">contato@neilamrst.space</p>
                    <p className="text-xs text-primary-400">Resposta em 24h</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-primary-300"
                >
                  <MapPin className="w-5 h-5 mt-0.5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Centro de Treinamento Espacial</p>
                    <p className="text-xs text-primary-400">Global</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-primary-300"
                >
                  <Clock className="w-5 h-5 mt-0.5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm">24/7 Emergências</p>
                    <p className="text-xs text-primary-400">Suporte técnico</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-primary-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-primary-400 text-sm text-center md:text-left"
            >
              © 2024 Neil Amrst. Todos os direitos reservados. | Explorando novos horizontes no cosmos.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-primary-400 text-sm"
            >
              <span>Criado com</span>
              <motion.a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: '#38bdf8' }}
                className="italic font-medium hover:text-primary-300 transition-colors"
              >
                Papum
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-20 right-20 w-4 h-4 bg-accent-400/30 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 left-32 w-3 h-3 bg-primary-400/40 rounded-full"
      />
    </footer>
  )
}