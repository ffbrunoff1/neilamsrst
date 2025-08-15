import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Mail, Phone, MapPin, Send, Star, Globe, Rocket, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ message: '', isError: false, isLoading: false })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: '', isError: false, isLoading: true })

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        recipientEmail: 'ffbrunoff@yahoo.com.br',
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ 
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.', 
          isError: false, 
          isLoading: false 
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente ou use os outros meios de contato.', 
        isError: true, 
        isLoading: false 
      })
    } finally {
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@neilamrst.space",
      description: "Resposta em atÃ© 24 horas"
    },
    {
      icon: Globe,
      title: "LocalizaÃ§Ã£o",
      value: "Centro de Treinamento Espacial",
      description: "DisponÃ­vel para missÃµes globais"
    },
    {
      icon: Clock,
      title: "Disponibilidade",
      value: "24/7 para EmergÃªncias",
      description: "Suporte tÃ©cnico espacial"
    }
  ]

  return (
    <section id="contact" className="section-padding relative">
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
            <Star className="w-4 h-4 text-accent-400 mr-2" />
            <span className="text-primary-300 text-sm font-medium">Vamos Conectar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Inicie uma Nova
            <span className="block text-gradient">MissÃ£o Juntos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed"
          >
            Pronto para colaborar em projetos espaciais inovadores, consultorias tÃ©cnicas ou compartilhar experiÃªncias sobre exploraÃ§Ã£o espacial.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-effect rounded-2xl p-6 group hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl group-hover:shadow-lg transition-all duration-300"
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-primary-300 font-medium mb-1">{info.value}</p>
                        <p className="text-primary-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-effect rounded-3xl p-8 text-center space-glow"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">Projetos Especiais</h3>
              <p className="text-primary-200 leading-relaxed mb-6">
                Interessado em colaboraÃ§Ãµes Ãºnicas? Consultorias para missÃµes espaciais, treinamentos especializados ou palestras sobre exploraÃ§Ã£o espacial.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-primary-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">DisponÃ­vel</span>
                </div>
                <div className="w-px h-4 bg-primary-400/30"></div>
                <div className="text-sm">Resposta RÃ¡pida</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-3xl p-8 space-glow">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enviar Mensagem</h3>
                <p className="text-primary-300">Preencha o formulÃ¡rio abaixo e entrarei em contato em breve.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-primary-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-primary-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-primary-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva seu projeto, consulta ou colaboraÃ§Ã£o..."
                  />
                </motion.div>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                  size="invisible"
                />

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      status.isError 
                        ? 'bg-red-500/20 border border-red-400/30 text-red-300' 
                        : 'bg-green-500/20 border border-green-400/30 text-green-300'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">{status.message}</span>
                  </motion.div>
                )}

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.isLoading}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    status.isLoading
                      ? 'bg-primary-600/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {status.isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-32 right-20 w-5 h-5 bg-accent-400/40 rounded-full"
      />
      
      <motion.div
        animate={{ 
          y: [0, -25, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-3 h-3 bg-primary-400/50 rounded-full"
      />
    </section>
  )
}