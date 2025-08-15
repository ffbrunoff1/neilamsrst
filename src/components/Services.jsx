import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Satellite, Globe, Zap, Star, Target, Users, Brain, Shield, Settings } from 'lucide-react'

export default function Services() {
  const specialties = [
    {
      icon: Rocket,
      title: "OperaÃ§Ãµes de LanÃ§amento",
      description: "EspecializaÃ§Ã£o em procedimentos de lanÃ§amento, sistemas de propulsÃ£o e operaÃ§Ãµes de decolagem com seguranÃ§a mÃ¡xima.",
      features: ["Protocolos de SeguranÃ§a", "Sistemas de PropulsÃ£o", "Procedimentos de EmergÃªncia"]
    },
    {
      icon: Satellite,
      title: "ManutenÃ§Ã£o Orbital",
      description: "ExperiÃªncia em reparos e manutenÃ§Ã£o de equipamentos em ambiente de microgravidade e estaÃ§Ãµes espaciais.",
      features: ["Reparos EVA", "Sistemas de Suporte", "Equipamentos CientÃ­ficos"]
    },
    {
      icon: Globe,
      title: "Pesquisa CientÃ­fica",
      description: "ConduÃ§Ã£o de experimentos em microgravidade, estudos de materiais e pesquisas biomÃ©dicas no espaÃ§o.",
      features: ["Experimentos em Microgravidade", "Pesquisa BiomÃ©dica", "AnÃ¡lise de Materiais"]
    },
    {
      icon: Brain,
      title: "LideranÃ§a de MissÃ£o",
      description: "Comando de equipes internacionais em missÃµes de longa duraÃ§Ã£o, coordenaÃ§Ã£o de atividades e tomada de decisÃµes crÃ­ticas.",
      features: ["GestÃ£o de Equipes", "ComunicaÃ§Ã£o Internacional", "DecisÃµes EstratÃ©gicas"]
    },
    {
      icon: Shield,
      title: "SeguranÃ§a Espacial",
      description: "Desenvolvimento e implementaÃ§Ã£o de protocolos de seguranÃ§a para operaÃ§Ãµes espaciais e situaÃ§Ãµes de emergÃªncia.",
      features: ["Protocolos de EmergÃªncia", "AnÃ¡lise de Riscos", "Treinamento de SeguranÃ§a"]
    },
    {
      icon: Settings,
      title: "Sistemas Espaciais",
      description: "OperaÃ§Ã£o e monitoramento de sistemas complexos de naves espaciais, estaÃ§Ãµes e equipamentos de suporte.",
      features: ["Monitoramento de Sistemas", "DiagnÃ³stico TÃ©cnico", "ManutenÃ§Ã£o Preventiva"]
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 border border-primary-400/30 mb-6"
          >
            <Target className="w-4 h-4 text-accent-400 mr-2" />
            <span className="text-primary-300 text-sm font-medium">Especialidades</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Expertise em
            <span className="block text-gradient">OperaÃ§Ãµes Espaciais</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed"
          >
            Combinando conhecimento tÃ©cnico avanÃ§ado com experiÃªncia prÃ¡tica em ambiente espacial, oferecendo expertise em mÃºltiplas Ã¡reas da exploraÃ§Ã£o espacial.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect rounded-2xl p-8 group hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex flex-col h-full"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                  {specialty.title}
                </h3>

                <p className="text-primary-200 leading-relaxed mb-6 flex-grow">
                  {specialty.description}
                </p>

                <div className="space-y-3 mt-auto">
                  {specialty.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0"
                      />
                      <span className="text-primary-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 text-center space-glow"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8"
          >
            <Star className="w-10 h-10 text-white" />
          </motion.div>

          <h3 className="text-3xl font-bold text-white mb-6">
            Pronto para a PrÃ³xima
            <span className="block text-gradient">MissÃ£o</span>
          </h3>

          <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Com experiÃªncia comprovada em operaÃ§Ãµes espaciais crÃ­ticas, estou disponÃ­vel para consultoria, treinamento e participaÃ§Ã£o em novos projetos de exploraÃ§Ã£o espacial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center group space-glow"
            >
              <Users className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Iniciar ColaboraÃ§Ã£o</span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-6 text-primary-300"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">DisponÃ­vel</span>
              </div>
              <div className="w-px h-4 bg-primary-400/30"></div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-accent-400" />
                <span className="text-sm">Resposta RÃ¡pida</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-20 right-10 w-6 h-6 bg-accent-400/30 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 left-16 w-4 h-4 bg-primary-400/40 rounded-full"
      />
    </section>
  )
}