import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, Zap, Award, Users, Target, Clock } from 'lucide-react'

export default function About() {
  const { t } = useTranslation();
    const achievements = [
    {
      icon: Rocket,
      title: t("about_achievements_missions"),
      count: "15+",
      description: t("about_achievements_missions_desc")
    },
    {
      icon: Clock,
      title: t("about_achievements_hours"),
      count: "2.850",
      description: t("about_achievements_hours_desc")
    },
    {
      icon: Star,
      title: t("about_achievements_evas"),
      count: "12",
      description: t("about_achievements_evas_desc")
    },
    {
      icon: Award,
      title: t("about_achievements_certifications"),
      count: "25+",
      description: t("about_achievements_certifications_desc")
    }
  ]

    const milestones = [
    {
      year: "2015",
      title: t("about_milestone_2015_title"),
      description: t("about_milestone_2015_desc")
    },
    {
      year: "2017",
      title: t("about_milestone_2017_title"),
      description: t("about_milestone_2017_desc")
    },
    {
      year: "2019",
      title: t("about_milestone_2019_title"),
      description: t("about_milestone_2019_desc")
    },
    {
      year: "2024",
      title: t("about_milestone_2024_title"),
      description: t("about_milestone_2024_desc")
    }
  ]

  return (
    <section id="about" className="section-padding relative">
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
            <span className="text-primary-300 text-sm font-medium">{t('about_journey')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Explorando os 
            <span className="block text-gradient">Limites do Impossível</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed"
          >
            {t('about_description')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-3xl border border-dashed border-primary-400/20"
              />
              
              <div className="glass-effect rounded-3xl p-8 space-glow">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-6"
                >
                  <div className="relative inline-block">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl"
                    >
                      <Globe className="w-12 h-12 text-white" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-2 -right-2"
                    >
                      <Zap className="w-6 h-6 text-accent-400" />
                    </motion.div>
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{t('about_personal_mission_title')}</h3>
                <p className="text-primary-200 leading-relaxed mb-6">
                  {t('about_personal_mission_desc')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{t('about_scientific_research')}</h4>
                      <p className="text-primary-300 text-sm">{t('about_scientific_research_desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{t('about_international_collaboration')}</h4>
                      <p className="text-primary-300 text-sm">{t('about_international_collaboration_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-2xl p-6 text-center group hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-4 group-hover:shadow-lg transition-all duration-300"
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {achievement.count}
                  </motion.div>
                  
                  <h4 className="font-semibold text-primary-300 mb-2">{achievement.title}</h4>
                  <p className="text-primary-400 text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">{t('about_career_milestones_title')}</h3>
            <p className="text-primary-200 max-w-2xl mx-auto">
              {t('about_career_milestones_desc')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="glass-effect rounded-2xl p-6 space-glow"
                    >
                      <div className="text-accent-400 font-bold text-xl mb-2">{milestone.year}</div>
                      <h4 className="text-white font-semibold text-lg mb-3">{milestone.title}</h4>
                      <p className="text-primary-300 leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-secondary-900 z-10"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-400 to-accent-400 animate-pulse"></div>
                  </motion.div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}