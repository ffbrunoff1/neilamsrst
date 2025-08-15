import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: {
          site_title: 'Neil Amrst - Astronauta Profissional',
          site_description:
            'Neil Amrst - Astronauta profissional com experiência em missões espaciais e exploração do cosmos. Descubra a jornada extraordinária de um verdadeiro explorador do espaço.',
          site_keywords:
            'Neil Amrst, astronauta, espaço, missões espaciais, exploração espacial, cosmos',
          site_author: 'Neil Amrst',
          og_title: 'Neil Amrst - Astronauta Profissional',
          og_description:
            'Astronauta profissional com experiência em missões espaciais e exploração do cosmos.',
          twitter_title: 'Neil Amrst - Astronauta Profissional',
          twitter_description:
            'Astronauta profissional com experiência em missões espaciais e exploração do cosmos.',
          header_astronaut: 'Astronauta Profissional',
          menu_home: 'Início',
          menu_about: 'Sobre',
          menu_specialties: 'Especialidades',
          menu_contact: 'Contato',
          hero_explorer: 'Explorador do Cosmos',
          hero_title_part1: 'Pioneiro na',
          hero_title_part2: 'Exploração Espacial',
          hero_description:
            'Com anos de experiência em missões críticas e descobertas inovadoras, estou pronto para liderar a próxima era da exploração humana.',
          hero_button_contact: 'Fale Comigo',
          hero_button_journey: 'Minha Jornada',
          hero_missions_count: '15+',
          hero_missions_label: 'Missões',
          hero_years_in_space_count: '8',
          hero_years_in_space_label: 'Anos no Espaço',
          hero_space_stations_count: '3',
          hero_space_stations_label: 'Estações Espaciais',
          hero_active_mission_title: 'Missão Ativa',
          hero_active_mission_desc:
            'Atualmente em preparação para a próxima expedição à Estação Espacial Internacional',
          about_journey: 'Minha Jornada',
          about_title_part1: 'Explorando os',
          about_title_part2: 'Limites do Impossível',
          about_description:
            'Minha carreira é dedicada a expandir as fronteiras do conhecimento humano e a inspirar a próxima geração de exploradores. Cada missão é um passo em direção ao desconhecido, impulsionado pela paixão pela descoberta.',
          about_personal_mission_title: 'Minha Missão Pessoal',
          about_personal_mission_desc:
            'Além das missões oficiais, dedico-me a projetos que visam o avanço da ciência e a sustentabilidade da vida no espaço. Acredito que a exploração espacial é a chave para o futuro da humanidade.',
          about_scientific_research: 'Pesquisa Científica Avançada',
          about_scientific_research_desc:
            'Condução de experimentos em microgravidade para avanços em medicina e materiais.',
          about_international_collaboration: 'Colaboração Internacional',
          about_international_collaboration_desc:
            'Trabalho em equipe com cientistas e astronautas de diversas nações.',
          about_achievements_missions: 'Missões Concluídas',
          about_achievements_missions_desc: 'Missões espaciais bem-sucedidas',
          about_achievements_hours: 'Horas em EVA',
          about_achievements_hours_desc: 'Atividades extraveiculares',
          about_achievements_evas: 'Caminhadas Espaciais',
          about_achievements_evas_desc: 'Total de caminhadas espaciais',
          about_achievements_certifications: 'Certificações',
          about_achievements_certifications_desc: 'Certificações avançadas',
          about_career_milestones_title: 'Marcos da Carreira',
          about_career_milestones_desc:
            'Uma linha do tempo dos momentos mais significativos da minha jornada espacial.',
          about_milestone_2015_title: 'Início da Carreira de Astronauta',
          about_milestone_2015_desc:
            'Conclusão do rigoroso treinamento da agência espacial, marcando o início oficial da minha jornada como astronauta.',
          about_milestone_2017_title: 'Primeira Missão à ISS',
          about_milestone_2017_desc:
            'Participação na minha primeira missão de longa duração na Estação Espacial Internacional, realizando pesquisas cruciais.',
          about_milestone_2019_title: 'Comando de Missão Lunar',
          about_milestone_2019_desc:
            'Liderança de uma missão simulada à Lua, testando novas tecnologias e procedimentos para futuras explorações.',
          about_milestone_2024_title: 'Preparação para Missão a Marte',
          about_milestone_2024_desc:
            'Atualmente envolvido em treinamento avançado e desenvolvimento de protocolos para a primeira missão tripulada a Marte.',
          services_specialties: 'Minhas Especialidades',
          services_title_part1: 'Áreas de',
          services_title_part2: 'Atuação',
          services_description:
            'Minha expertise abrange diversas áreas críticas da exploração espacial, desde operações de lançamento até pesquisa científica avançada.',
          services_launch_operations_title: 'Operações de Lançamento',
          services_launch_operations_desc:
            'Experiência em todas as fases de preparação e execução de lançamentos espaciais.',
          services_launch_operations_feat1: 'Planejamento de pré-lançamento',
          services_launch_operations_feat2: 'Monitoramento em tempo real',
          services_launch_operations_feat3: 'Procedimentos de emergência',
          services_orbital_maintenance_title: 'Manutenção Orbital',
          services_orbital_maintenance_desc:
            'Habilidade em reparos e manutenção de equipamentos em ambiente de microgravidade.',
          services_orbital_maintenance_feat1: 'Reparo de sistemas críticos',
          services_orbital_maintenance_feat2: 'Instalação de novos módulos',
          services_orbital_maintenance_feat3: 'Otimização de desempenho',
          services_scientific_research_title: 'Pesquisa Científica',
          services_scientific_research_desc:
            'Condução de experimentos em diversas disciplinas científicas no espaço.',
          services_scientific_research_feat1: 'Biologia e medicina espacial',
          services_scientific_research_feat2: 'Física de materiais avançados',
          services_scientific_research_feat3: 'Observação astronômica',
          services_mission_leadership_title: 'Liderança de Missão',
          services_mission_leadership_desc:
            'Capacidade comprovada de liderar equipes em ambientes de alta pressão e complexidade.',
          services_mission_leadership_feat1: 'Gestão de equipe e recursos',
          services_mission_leadership_feat2: 'Tomada de decisão estratégica',
          services_mission_leadership_feat3: 'Comunicação eficaz',
          services_space_security_title: 'Segurança Espacial',
          services_space_security_desc:
            'Especialista em protocolos de segurança e resposta a incidentes no espaço.',
          services_space_security_feat1: 'Gerenciamento de riscos',
          services_space_security_feat2: 'Treinamento de sobrevivência',
          services_space_security_feat3: 'Protocolos de evacuação',
          services_space_systems_title: 'Sistemas Espaciais',
          services_space_systems_desc:
            'Profundo conhecimento em operação e otimização de sistemas de naves espaciais.',
          services_space_systems_feat1: 'Navegação e controle',
          services_space_systems_feat2: 'Sistemas de suporte à vida',
          services_space_systems_feat3: 'Propulsão e energia',
          services_ready_for_next_mission_title: 'Pronto para a Próxima',
          services_ready_for_next_mission_title2: 'Missão Espacial?',
          services_ready_for_next_mission_desc:
            'Se você busca um profissional com experiência comprovada e paixão pela exploração, estou à disposição para discutir como minhas habilidades podem contribuir para o sucesso do seu projeto.',
          services_start_collaboration: 'Iniciar Colaboração',
          services_available: 'Disponível para novos projetos',
          services_quick_response: 'Resposta rápida',
          contact_connect: 'Conecte-se',
          contact_title_part1: 'Entre em',
          contact_title_part2: 'Contato',
          contact_description:
            'Seja para uma nova missão, uma palestra inspiradora ou uma colaboração científica, estou pronto para ouvir e contribuir.',
          contact_email_title: 'Email',
          contact_email_value: 'contato@neilamrst.com',
          contact_email_desc: 'Para consultas gerais e oportunidades.',
          contact_location_title: 'Localização',
          contact_location_value: 'Órbita Terrestre Baixa (ISS)',
          contact_location_desc: 'Atualmente em missão, mas sempre conectado.',
          contact_availability_title: 'Disponibilidade',
          contact_availability_value: '24/7 (com fuso horário espacial)',
          contact_availability_desc:
            'Pronto para responder a qualquer momento.',
          contact_special_projects_title: 'Projetos Especiais',
          contact_special_projects_desc:
            'Interessado em projetos de pesquisa inovadores ou colaborações que desafiam os limites da exploração espacial? Entre em contato para discutir suas ideias.',
          contact_available: 'Disponível para novos projetos',
          contact_quick_response: 'Resposta rápida',
          contact_send_message_title: 'Envie uma Mensagem',
          contact_send_message_desc:
            'Use o formulário abaixo para me enviar uma mensagem diretamente.',
          contact_name_label: 'Seu Nome',
          contact_name_placeholder: 'Digite seu nome completo',
          contact_email_label: 'Seu Email',
          contact_email_placeholder: 'seu.email@exemplo.com',
          contact_message_label: 'Sua Mensagem',
          contact_message_placeholder: 'Escreva sua mensagem aqui...',
          contact_success_message: 'Mensagem enviada com sucesso!',
          contact_error_message: 'Erro ao enviar mensagem. Tente novamente.',
          contact_submit_button: 'Enviar Mensagem',
          footer_description:
            'Neil Amrst é um astronauta dedicado à exploração espacial e ao avanço da ciência. Com uma carreira repleta de missões desafiadoras, ele inspira a próxima geração de exploradores.',
          footer_status: 'Online e em órbita',
          footer_navigation: 'Navegação Rápida',
          footer_achievements: 'Conquistas',
          footer_achievements_missions: 'Missões',
          footer_achievements_hours: 'Horas em EVA',
          footer_achievements_evas: 'Caminhadas Espaciais',
          footer_achievements_experience: 'Anos de Experiência',
          footer_contact: 'Contato',
          footer_email_desc: 'Para todas as suas perguntas',
          footer_location_desc: 'Onde a exploração acontece',
          footer_availability_desc: 'Sempre pronto para o espaço',
          footer_copyright:
            '© {{year}} Neil Amrst. Todos os direitos reservados.',
          footer_created_with: 'Criado com',
        },
      },
      en: {
        translation: {
          site_title: 'Neil Amrst - Professional Astronaut',
          site_description:
            'Neil Amrst - Professional astronaut with experience in space missions and cosmos exploration. Discover the extraordinary journey of a true space explorer.',
          site_keywords:
            'Neil Amrst, astronaut, space, space missions, space exploration, cosmos',
          site_author: 'Neil Amrst',
          og_title: 'Neil Amrst - Professional Astronaut',
          og_description:
            'Professional astronaut with experience in space missions and cosmos exploration.',
          twitter_title: 'Neil Amrst - Professional Astronaut',
          twitter_description:
            'Professional astronaut with experience in space missions and cosmos exploration.',
          header_astronaut: 'Professional Astronaut',
          menu_home: 'Home',
          menu_about: 'About',
          menu_specialties: 'Specialties',
          menu_contact: 'Contact',
          hero_explorer: 'Cosmic Explorer',
          hero_title_part1: 'Pioneer in',
          hero_title_part2: 'Space Exploration',
          hero_description:
            'With years of experience in critical missions and groundbreaking discoveries, I am ready to lead the next era of human exploration.',
          hero_button_contact: 'Contact Me',
          hero_button_journey: 'My Journey',
          hero_missions_count: '15+',
          hero_missions_label: 'Missions',
          hero_years_in_space_count: '8',
          hero_years_in_space_label: 'Years in Space',
          hero_space_stations_count: '3',
          hero_space_stations_label: 'Space Stations',
          hero_active_mission_title: 'Active Mission',
          hero_active_mission_desc:
            'Currently preparing for the next expedition to the International Space Station',
          about_journey: 'My Journey',
          about_title_part1: 'Exploring the',
          about_title_part2: 'Limits of the Impossible',
          about_description:
            'My career is dedicated to expanding the frontiers of human knowledge and inspiring the next generation of explorers. Each mission is a step into the unknown, driven by a passion for discovery.',
          about_personal_mission_title: 'My Personal Mission',
          about_personal_mission_desc:
            "Beyond official missions, I dedicate myself to projects aimed at advancing science and the sustainability of life in space. I believe that space exploration is key to humanity's future.",
          about_scientific_research: 'Advanced Scientific Research',
          about_scientific_research_desc:
            'Conducting microgravity experiments for advancements in medicine and materials.',
          about_international_collaboration: 'International Collaboration',
          about_international_collaboration_desc:
            'Teamwork with scientists and astronauts from various nations.',
          about_achievements_missions: 'Missions Completed',
          about_achievements_missions_desc: 'Successful space missions',
          about_achievements_hours: 'Hours in EVA',
          about_achievements_hours_desc: 'Extravehicular activities',
          about_achievements_evas: 'Spacewalks',
          about_achievements_evas_desc: 'Total spacewalks',
          about_achievements_certifications: 'Certifications',
          about_achievements_certifications_desc: 'Advanced certifications',
          about_career_milestones_title: 'Career Milestones',
          about_career_milestones_desc:
            'A timeline of the most significant moments in my space journey.',
          about_milestone_2015_title: 'Start of Astronaut Career',
          about_milestone_2015_desc:
            'Completion of rigorous space agency training, marking the official start of my journey as an astronaut.',
          about_milestone_2017_title: 'First ISS Mission',
          about_milestone_2017_desc:
            'Participation in my first long-duration mission on the International Space Station, conducting crucial research.',
          about_milestone_2019_title: 'Lunar Mission Command',
          about_milestone_2019_desc:
            'Leadership of a simulated mission to the Moon, testing new technologies and procedures for future explorations.',
          about_milestone_2024_title: 'Preparation for Mars Mission',
          about_milestone_2024_desc:
            'Currently involved in advanced training and protocol development for the first crewed mission to Mars.',
          services_specialties: 'My Specialties',
          services_title_part1: 'Areas of',
          services_title_part2: 'Expertise',
          services_description:
            'My expertise covers various critical areas of space exploration, from launch operations to advanced scientific research.',
          services_launch_operations_title: 'Launch Operations',
          services_launch_operations_desc:
            'Experience in all phases of preparing and executing space launches.',
          services_launch_operations_feat1: 'Pre-launch planning',
          services_launch_operations_feat2: 'Real-time monitoring',
          services_launch_operations_feat3: 'Emergency procedures',
          services_orbital_maintenance_title: 'Orbital Maintenance',
          services_orbital_maintenance_desc:
            'Ability to repair and maintain equipment in a microgravity environment.',
          services_orbital_maintenance_feat1: 'Critical system repair',
          services_orbital_maintenance_feat2: 'New module installation',
          services_orbital_maintenance_feat3: 'Performance optimization',
          services_scientific_research_title: 'Scientific Research',
          services_scientific_research_desc:
            'Conducting experiments in various scientific disciplines in space.',
          services_scientific_research_feat1: 'Space biology and medicine',
          services_scientific_research_feat2: 'Advanced materials physics',
          services_scientific_research_feat3: 'Astronomical observation',
          services_mission_leadership_title: 'Mission Leadership',
          services_mission_leadership_desc:
            'Proven ability to lead teams in high-pressure, complex environments.',
          services_mission_leadership_feat1: 'Team and resource management',
          services_mission_leadership_feat2: 'Strategic decision-making',
          services_mission_leadership_feat3: 'Effective communication',
          services_space_security_title: 'Space Security',
          services_space_security_desc:
            'Expert in security protocols and incident response in space.',
          services_space_security_feat1: 'Risk management',
          services_space_security_feat2: 'Survival training',
          services_space_security_feat3: 'Evacuation protocols',
          services_space_systems_title: 'Space Systems',
          services_space_systems_desc:
            'Deep knowledge in operating and optimizing spacecraft systems.',
          services_space_systems_feat1: 'Navigation and control',
          services_space_systems_feat2: 'Life support systems',
          services_space_systems_feat3: 'Propulsion and energy',
          services_ready_for_next_mission_title: 'Ready for the Next',
          services_ready_for_next_mission_title2: 'Space Mission?',
          services_ready_for_next_mission_desc:
            'If you are looking for a professional with proven experience and a passion for exploration, I am available to discuss how my skills can contribute to the success of your project.',
          services_start_collaboration: 'Start Collaboration',
          services_available: 'Available for new projects',
          services_quick_response: 'Quick response',
          contact_connect: 'Connect',
          contact_title_part1: 'Get in',
          contact_title_part2: 'Touch',
          contact_description:
            'Whether for a new mission, an inspiring lecture, or a scientific collaboration, I am ready to listen and contribute.',
          contact_email_title: 'Email',
          contact_email_value: 'contact@neilamrst.com',
          contact_email_desc: 'For general inquiries and opportunities.',
          contact_location_title: 'Location',
          contact_location_value: 'Low Earth Orbit (ISS)',
          contact_location_desc: 'Currently on mission, but always connected.',
          contact_availability_title: 'Availability',
          contact_availability_value: '24/7 (with space time zone)',
          contact_availability_desc: 'Ready to respond at any time.',
          contact_special_projects_title: 'Special Projects',
          contact_special_projects_desc:
            'Interested in innovative research projects or collaborations that push the boundaries of space exploration? Contact me to discuss your ideas.',
          contact_available: 'Available for new projects',
          contact_quick_response: 'Quick response',
          contact_send_message_title: 'Send a Message',
          contact_send_message_desc:
            'Use the form below to send me a message directly.',
          contact_name_label: 'Your Name',
          contact_name_placeholder: 'Enter your full name',
          contact_email_label: 'Your Email',
          contact_email_placeholder: 'your.email@example.com',
          contact_message_label: 'Your Message',
          contact_message_placeholder: 'Write your message here...',
          contact_success_message: 'Message sent successfully!',
          contact_error_message: 'Error sending message. Please try again.',
          contact_submit_button: 'Send Message',
          footer_description:
            'Neil Amrst is an astronaut dedicated to space exploration and the advancement of science. With a career full of challenging missions, he inspires the next generation of explorers.',
          footer_status: 'Online and in orbit',
          footer_navigation: 'Quick Navigation',
          footer_achievements: 'Achievements',
          footer_achievements_missions: 'Missions',
          footer_achievements_hours: 'Hours in EVA',
          footer_achievements_evas: 'Spacewalks',
          footer_achievements_experience: 'Years of Experience',
          footer_contact: 'Contact',
          footer_email_desc: 'For all your inquiries',
          footer_location_desc: 'Where exploration happens',
          footer_availability_desc: 'Always ready for space',
          footer_copyright: '© {{year}} Neil Amrst. All rights reserved.',
          footer_created_with: 'Created with',
        },
      },
    },
  });

export default i18n;
