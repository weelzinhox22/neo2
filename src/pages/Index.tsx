import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Book, Heart, Activity, Stethoscope, BookOpen, Clock, Users, Brain, ExternalLink, ChevronRight, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedButton from "@/components/AnimatedButton";
import InfoCard from "@/components/InfoCard";
import { useState, useEffect } from "react";

const Index = () => {
  const [userCount, setUserCount] = useState(Math.floor(Math.random() * 30) + 15);
  
  useEffect(() => {
    const userCountInterval = setInterval(() => {
      setUserCount(prev => {
        // Sempre aumenta entre 1 e 3 estudantes
        const increase = Math.floor(Math.random() * 3) + 1;
        return prev + increase;
      });
    }, 5000);
    
    return () => clearInterval(userCountInterval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1631217869284-8ba5db81fc56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        className="min-h-[90vh] flex items-center"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto px-6 py-24 relative">
          {/* Animated background elements */}
          <motion.div 
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-teal-500/20 blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 relative z-10">
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                
                </span>
                
                <div className="flex items-center">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-green-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="ml-2 text-white/80 text-sm">{userCount} estudantes online</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block">Fisioterapia</span>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Neonatal</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Olá! Preparado para nossa aula sobre Fisioterapia Neonatal? Vamos abordar desde a história da Neonatologia até as técnicas fisioterapêuticas utilizadas na UTINeo.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <AnimatedButton 
                    to="/simulado" 
                    variant="primary"
                    size="lg"
                    icon={<Book size={18} />}
                    className="bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-medium"
                  >
                    Fazer Simulado
                  </AnimatedButton>
                </motion.div>

                
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <AnimatedButton 
                    to="/desenvolvimento-embrionario" 
                    variant="outline"
                    size="lg"
                    icon={<Stethoscope size={18} />}
                    className="border-white text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Desenvolvimento Embrionário
                  </AnimatedButton>
                </motion.div>
                <AnimatedButton 
                    to="/apgar" 
                    variant="outline"
                    size="lg"
                    icon={<Stethoscope size={18} />}
                    className="border-white text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Apgar
                  </AnimatedButton>

                  <AnimatedButton 
                    to="/utineo" 
                    variant="outline"
                    size="lg"
                    icon={<Stethoscope size={18} />}
                    className="border-white text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    UTINeo
                  </AnimatedButton>
                  <AnimatedButton 
                    to="/patologias-neonatais" 
                    variant="outline"
                    size="lg"
                    icon={<Stethoscope size={18} />}
                    className="border-white text-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    Patologias
                  </AnimatedButton>
              </motion.div>
              
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 flex items-center"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white/50 overflow-hidden">
                      <img 
                        src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">Avaliado por {userCount}+ estudantes</p>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-2 hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-teal-500/30 rounded-2xl blur-xl transform -rotate-6 scale-105 animate-pulse"></div>
                <motion.div 
                  className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    borderColor: "rgba(255, 255, 255, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="flex justify-between items-center mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={{ 
                          boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 10px rgba(59, 130, 246, 0)"],
                        }}
                        transition={{ 
                          boxShadow: { repeat: Infinity, duration: 1.5 },
                          scale: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <Activity className="h-5 w-5 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="ml-3 text-xl font-semibold text-white">Simulado Interativo</h3>
                    </div>
                    <motion.span 
                      className="px-3 py-1 bg-white/20 rounded-full text-white text-xs"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                      animate={{ 
                        y: [0, -3, 0],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{ 
                        y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                        rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                      }}
                    >
                      Novo
                    </motion.span>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <motion.div 
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + (item * 0.1) }}
                        className="p-3 bg-white/10 rounded-lg flex items-center"
                        whileHover={{ 
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          scale: 1.02,
                          x: 5
                        }}
                      >
                        <motion.div 
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3"
                          whileHover={{ scale: 1.1 }}
                          animate={{ 
                            backgroundColor: ["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.2)"]
                          }}
                          transition={{ 
                            backgroundColor: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                          }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          </motion.div>
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-white text-sm">Questão {item} respondida</p>
                          <div className="h-1.5 w-full bg-white/20 rounded-full mt-1 overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-green-400 to-teal-300 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${30 * item}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: 0.7 + (item * 0.2),
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-6 pt-6 border-t border-white/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-white/80 text-sm">Progresso total</p>
                      <motion.p 
                        className="text-white font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                      >
                        60%
                      </motion.p>
                    </div>
                    <div className="h-2 w-full bg-white/20 rounded-full mt-2 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-teal-400 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                      />
                    </div>
                    
                    {/* Partículas animadas */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/40"
                        initial={{ 
                          x: `${Math.random() * 100}%`, 
                          y: `${Math.random() * 100}%`, 
                          opacity: 0,
                          scale: 0
                        }}
                        animate={{ 
                          y: [null, -20],
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          delay: i * 0.4,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
            </motion.div>
            <p className="text-white/70 text-xs mt-2 text-center">Role para baixo</p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* História da Neonatologia */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">História da Neonatologia</h2>
          <div className="w-20 h-1 bg-brand-500 mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            A Neonatologia surgiu na França, em 1882, com o Dr. Pierre Budin, um obstetra que expandiu suas preocupações para além da sala de parto, criando o Ambulatório de Puericultura no Hospital Charité de Paris. Em 1914, o pediatra Dr. Julius Hess criou o primeiro centro para recém-nascidos prematuros em Chicago. Esses centros pioneiros estabeleceram princípios para o cuidado de prematuros, incluindo enfermeiras treinadas, incubadoras e rigorosa prevenção de infecções.
          </p>
          
          <p className="text-gray-700 mb-6">
            Nos últimos anos, a importância dos períodos pré e pós-natal para o desenvolvimento infantil tem sido cada vez mais reconhecida. As intervenções visam melhorar a saúde mental, motora e social desde o início da vida. Os primeiros anos de vida são cruciais devido à alta plasticidade neuronal nesse período. Bebês pré-termo recebem atenção especial devido ao risco de problemas de desenvolvimento, muitas vezes associados ao uso de ventilação mecânica.
          </p>
          
          <p className="text-gray-700 mb-6">
            A fisioterapia se integrou a este contexto, atuando de forma interdisciplinar nas UTIs Neonatais. O objetivo é identificar fatores de risco que podem levar a atrasos no desenvolvimento motor, mental, sensorial e emocional, visando o desenvolvimento neuropsicossocial da criança e evitando complicações da prematuridade.
          </p>

          <p className="text-gray-700 mb-6">
            O fisioterapeuta necessita de conhecimento sobre o desenvolvimento infantil, criatividade, paciência, persistência, tranquilidade e carinho. É crucial levantar a história obstétrica, os antecedentes maternos, os dados do RN (idade gestacional, peso ao nascimento, Apgar, tipo e condições de parto) e a hipótese diagnóstica para um tratamento eficaz.
          </p>
        </div>
      </AnimatedSection>
    
      {/* Definições Importantes */}
      <ParallaxSection bgColor="bg-gray-50" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Introdução à Neonatologia</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Vamos começar definindo alguns termos importantes para compreender melhor este campo de estudo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard 
              icon={<Baby size={28} />} 
              title="Definições Básicas" 
              content="Neonatologia: É o estudo do recém-nascido (RN). 'Neo' significa novo, 'Nato' significa nascimento e 'Logia' significa estudo. RN (Recém-Nascido): Consideramos como RN o bebê até os 28 dias de vida. Lactente: Acima de 28 dias, o bebê passa a ser chamado de lactente."
              delay={0.1}
            />
            
            <InfoCard 
              icon={<Heart size={28} />} 
              title="Termos e Definições" 
              content="Nascimento: Expulsão ou extração completa do feto do organismo materno. Nativivo: Feto vivo ao nascer. Natimorto: Feto que nasceu morto. Óbito fetal: Morte do produto da concepção antes da expulsão ou extração completa do corpo materno."
              delay={0.2}
            />
            
            <InfoCard 
              icon={<Clock size={28} />} 
              title="Classificação por Idade" 
              content="Neonato: 0 a 28 dias. Lactente: 29 dias até 2 anos. Pré-escolar: Acima de 2 anos até 5-6 anos. Escolar: 6 anos até 11-12 anos. Adolescente: Acima de 13 anos até 18 anos. Adulto: Acima de 18 anos."
              delay={0.3}
            />
          </div>
        </div>
      </ParallaxSection>

      {/* Classificação do RN */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Classificação do Recém-Nascido</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700">
            A classificação do recém-nascido é fundamental para determinar os cuidados necessários e o acompanhamento adequado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <AnimatedSection animation="slideRight" delay={0.2} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Idade Gestacional (IG)
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-700">Pré-Termo (PT)</p>
                  <p className="text-gray-700">Menos de 37 semanas e 6 dias</p>
              </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-medium text-green-700">Termo (T)</p>
                  <p className="text-gray-700">Entre 38 e 41 semanas</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium text-amber-700">Pós-Termo (PO)</p>
                  <p className="text-gray-700">42 semanas ou mais</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.3} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                Relação entre IG e Peso
              </h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-medium text-purple-700">GIG</p>
                  <p className="text-gray-700">Grande para a Idade Gestacional</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="font-medium text-emerald-700">AIG</p>
                  <p className="text-gray-700">Adequado para a Idade Gestacional</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <p className="font-medium text-rose-700">PIG</p>
                  <p className="text-gray-700">Pequeno para a Idade Gestacional</p>
                </div>
              </div>
            </AnimatedSection>
              </div>
              
          <div className="space-y-8">
            <AnimatedSection animation="slideRight" delay={0.4} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Classificação por Peso
              </h3>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-medium text-teal-700">RN-BP</p>
                  <p className="text-gray-700">Recém-nascido de baixo peso (inferior a 2.000g)</p>
              </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <p className="font-medium text-cyan-700">RN-MBP</p>
                  <p className="text-gray-700">Recém-nascido de muito baixo peso (inferior a 1.500g)</p>
            </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-700">RN-EBP</p>
                  <p className="text-gray-700">Recém-nascido de extremo baixo peso (inferior a 1.000g)</p>
          </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.5} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Classificação por Idade
              </h3>
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium text-amber-700">Neonato</p>
                  <p className="text-gray-700">0 a 28 dias</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium text-orange-700">Lactente</p>
                  <p className="text-gray-700">29 dias até 2 anos</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="font-medium text-red-700">Pré-escolar</p>
                  <p className="text-gray-700">Acima de 2 anos até 5-6 anos</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="font-medium text-pink-700">Escolar</p>
                  <p className="text-gray-700">6 anos até 11-12 anos</p>
                </div>
                <div className="bg-rose-50 p-4 rounded-lg">
                  <p className="font-medium text-rose-700">Adolescente</p>
                  <p className="text-gray-700">Acima de 13 anos até 18 anos</p>
                </div>
            </div>
          </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Organização e Funcionamento da UTIneo */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Organização e Funcionamento da UTIneo</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coluna Esquerda */}
            <div className="space-y-8">
              {/* Alojamento Conjunto Tardio */}
              <AnimatedSection animation="slideRight" delay={0.2} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
              </div>
                    <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Alojamento Conjunto Tardio (ACT)</h3>
                    <div className="space-y-6">
                      <div className="bg-emerald-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-emerald-700 mb-3">Objetivos:</h4>
                        <ul className="space-y-3">
                          {[
                            "Proporcionar o aleitamento materno na alta hospitalar",
                            "Manter o aleitamento materno por tempo prolongado",
                            "Estabelecer vínculo afetivo entre mãe e RN",
                            "Orientar a mãe nos cuidados com o neonato"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                  </li>
                          ))}
                        </ul>
                    </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-800 mb-3">Tempo de Internação:</h4>
                        <p className="text-gray-700 mb-4">O tempo de internação em ACT depende de:</p>
                        <ul className="space-y-3">
                          {[
                            "Interação mãe-filho",
                            "Ganho de peso do RN",
                            "Segurança da mãe"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                  </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-gray-700 font-medium">Após a alta, a criança é acompanhada em ambulatório.</p>
                    </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Cuidados Intermediários */}
              <AnimatedSection animation="slideRight" delay={0.3} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Cuidados Intermediários</h3>
                    <p className="text-gray-600 mb-6">Setor para RNs que necessitam de cuidados específicos, mas não intensivos.</p>
                    <div className="space-y-6">
                      <p className="text-gray-700">Destinado a internações de RN com peso de nascimento menor ou igual a 2000g, para ganho de peso, sem patologia respiratória, em investigação diagnóstica, em tratamento com medicação endovenosa.</p>
                      <p className="text-gray-700 font-medium">Área física de 2 m² por RN.</p>
                      <div className="bg-amber-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-amber-700 mb-4">Equipamentos necessários:</h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {[
                            "Iluminação natural durante o dia e controlada durante a noite",
                            "Paredes e pisos laváveis que permitem assepsia",
                            "Lavatório com sabão e toalhas descartáveis",
                            "Temperatura mantida entre 24°C e 26°C",
                            "Fonte de O² e aspiração junto a cada leito",
                            "Berços comuns, incubadoras para cuidados semi-intensivo",
                            "Bombas de infusão, monitor cardíaco, oxímetro de pulso, fototerapia e monitor de PNI",
                            "Estetoscópio, termômetro digital para cada RN e aparelhos de glicemia",
                            "Balança infantil",
                            "Bomba de seringa"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                  </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Alojamento Conjunto */}
              <AnimatedSection animation="slideRight" delay={0.4} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                    <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Alojamento Conjunto (AC)</h3>
                    <p className="text-gray-600 mb-6">Sistema hospitalar em que a mãe e RN se localizam na mesma área física desde o nascimento até a alta hospitalar, devendo permanecer juntos 24h/dia.</p>
                    
                    <div className="bg-emerald-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-emerald-700 mb-4">Objetivos do AC:</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {[
                          "Estabelecer e estimular o vínculo mãe e filho",
                          "Incentivar o aleitamento materno",
                          "Possibilitar e incrementar o aprendizado materno quanto aos cuidados com o RN",
                          "Reduzir a mortalidade, particularmente as infecções hospitalares cruzadas",
                          "Permitir melhor integração de equipe multiprofissional de saúde e melhor observação do comportamento do binômio (mãe e bebê)"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-8">
              {/* UTI Neonatal */}
              <AnimatedSection animation="slideRight" delay={0.4} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-rose-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Unidade de Terapia Intensiva</h3>
                    <div className="space-y-6">
                      <p className="text-gray-700">Onde se concentram recursos materiais e humanos especializados capazes de prestar uma assistência que garante observação rigorosa e tratamento adequado aos RNs com passibilidade ou presença de patologia que possa ocasionar sua morte ou sequelas interferindo no seu desenvolvimento.</p>
                      <p className="text-gray-700 font-medium">A área reservada deve ser 5 m² para cada RN, devendo ter uma área específica para isolamento.</p>
                      
                      <div className="bg-rose-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-rose-700 mb-4">Equipamentos necessários:</h4>
                        <ul className="grid grid-cols-1 gap-3">
                          {[
                            "Equipamentos dos CI, acrescidos de:",
                            "Ventiladores neonatais (respirador)",
                            "Incubadoras para tratamento intensivo com parede dupla",
                            "Berço aquecido",
                            "Capacete de acrílico para O²",
                            "Umidificadores de O²",
                            "Densímetro urinário",
                            "Régua antropométrica",
                            "Carro de emergência",
                            "Bandejas de dissecção de veias, drenagem torácica, exame sanguíneo, transfusão, intracath",
                            "Foco de luz"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{item}</span>
                  </li>
                          ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* UTI Neonatal */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">UTI Neonatal e Equipamentos</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700">
            A UTI Neonatal é um ambiente especializado que concentra recursos materiais e humanos para garantir o melhor cuidado aos recém-nascidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <AnimatedSection animation="slideRight" delay={0.2} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Visão Geral
              </h3>
            <p className="text-gray-700 mb-6">
              A UTI é o setor que concentra recursos materiais e humanos especializados para garantir observação rigorosa e tratamento adequado aos RNs com risco de morte ou sequelas que possam interferir no seu desenvolvimento. A área deve ser de 5 m² por RN, com uma área específica para isolamento.
            </p>
            
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 mb-3">Equipamentos Necessários na UTI</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Ventiladores neonatais (respiradores)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Incubadoras de tratamento intensivo com parede dupla
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Berço aquecido
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Capacete de acrílico para O₂ (Halo), umidificadores de O₂
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Densímetro urinário, régua antropométrica e fita métrica
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Negatoscópio, desfibrilador neonatal, carro de emergência
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Bandejas de procedimentos especializados
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Foco de luz
                  </li>
            </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={0.3} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Indicações para UTI Neonatal
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Baixo peso/GIG/PIG
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      RNPT
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Filho de mãe diabética
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Malformações
                    </li>
            </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Suspeita de infecção congênita
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Icterícia não fisiológica
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Asfixia perinatal
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Convulsões
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Pré e pós-operatório
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="space-y-8">
            <AnimatedSection animation="slideRight" delay={0.4} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                  Particularidades Fisiológicas
                </h3>
                
              <div className="space-y-6">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-medium text-teal-700 mb-2">Relação entre Perímetro Cefálico (PC) e Perímetro Torácico (PT)</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Ao nascer, em RN a termo: PC = PT
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      No prematuro: PC {'>'} PT
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Até 6 meses: PC é maior que PT
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Cerca de 6 meses: PC = PT
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Cerca de nove meses: PC é menor que PT
                    </li>
                </ul>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-medium text-cyan-700 mb-2">Frequência Respiratória</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Prematuro: 40 - 50 rpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Lactentes: 30 - 40 rpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      1 ano: 25 - 30 rpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Pré-escolar: 20 - 25 rpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Escolar: 18 - 24 rpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Adolescente: 12 - 20 rpm
                    </li>
                </ul>
              </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-700 mb-2">Frequência Cardíaca</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      RN: 80 - 170 bpm, média 140 bpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Lactentes: 80 - 160 bpm, média 120 bpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      2 anos: 80 - 130 bpm, média 110 bpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      3 a 5 anos: 80 - 120 bpm, média 90 bpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      6 a 11 anos: 75 - 100 bpm, média 80 bpm
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Adolescente: 60 - 100 bpm, média 70 bpm
                    </li>
                </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Fisioterapia na UTI Neonatal */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1623854775676-3e0ca4328cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        className="py-24 px-6"
        overlayOpacity={0.75}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Fisioterapia na UTI Neonatal</h2>
              <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
              
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-md">
                <p className="text-gray-700 mb-6">
                  A fisioterapia é uma modalidade terapêutica relativamente recente e em expansão nas UTIs Neonatais, especialmente em grandes centros. Hospitais com serviço terciário devem oferecer assistência fisioterapêutica em período integral para diminuir complicações, reduzir o tempo de internação e os custos hospitalares, além de detectar possíveis disfunções no desenvolvimento neuropsicomotor.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Objetivos da Assistência Fisioterapêutica Neonatal</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <Activity size={36} className="text-brand-500 mb-2" />
                    <p className="text-gray-700">Otimizar a função respiratória e as trocas gasosas</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <Stethoscope size={36} className="text-brand-500 mb-2" />
                    <p className="text-gray-700">Adequar o suporte ventilatório</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <BookOpen size={36} className="text-brand-500 mb-2" />
                    <p className="text-gray-700">Prevenir e tratar complicações pulmonares</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                    <Heart size={36} className="text-brand-500 mb-2" />
                    <p className="text-gray-700">Favorecer o desmame da ventilação e oxigenoterapia</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Um programa de terapia neonatal exige conhecimento e habilidades especializadas em avaliação do desenvolvimento na primeira infância, intervenção precoce e orientação aos pais, com internação interdisciplinar em um centro de assistência intensiva.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Eficácia da Fisioterapia em Neonatologia</h3>
                <p className="text-gray-700 mb-4">
                  A fisioterapia neonatal é eficaz na prevenção de atelectasias pós-extubação, facilita a expectoração, melhora a oxigenação em crianças com SDRA e diminui as resistências periféricas. Além disso, contribui para a redução dos índices de morbimortalidade.
                </p>
                
                <div className="flex justify-center mt-8">
                  <AnimatedButton 
                    to="/utideo" 
                    variant="primary"
                    size="lg"
                    icon={<ExternalLink size={18} />}
                  >
                    Saiba mais sobre UTI Neonatal
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Técnicas Fisioterapêuticas */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Técnicas Fisioterapêuticas na UTINeo</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700">
            A fisioterapia neonatal utiliza diversas técnicas específicas para atender as necessidades dos recém-nascidos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="slideUp" delay={0.2} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
            <h3 className="text-xl font-semibold mb-4">Técnicas Respiratórias</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-medium">Vibração/Vibrocompressão:</span> Manobra de higiene brônquica aplicada durante a fase expiratória.</li>
              <li><span className="font-medium">Bag-squeezing:</span> Hiperinsuflação com o balão autoinflável para mobilização de secreções.</li>
              <li><span className="font-medium">Aspiração:</span> De vias aéreas superiores e endotraqueal quando necessário.</li>
              <li><span className="font-medium">Estímulo de tosse:</span> Técnica de pressão na traqueia para estimular o reflexo da tosse.</li>
              <li><span className="font-medium">Posicionamento:</span> Em posturas de drenagem para facilitar a eliminação de secreções.</li>
            </ul>
            
            <div className="mt-6 bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">Contraindicações Importantes:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>MHB (Manobra de Higiene Brônquica) é contraindicada para RNPT com peso inferior a 1.500g nos primeiros 3 dias de vida.</li>
                <li>Tapotagem é contraindicada, pois pode causar hipoxemia, fraturas de costelas e lesões cerebrais.</li>
                <li>Posicionamento de Trendelemburg é contraindicado em RN com instabilidade hemodinâmica.</li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.3} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-4">Fisioterapia Motora</h3>
            <p className="text-gray-700 mb-4">
              A fisioterapia motora visa prevenir os efeitos do repouso prolongado no leito, eliminar reações posturais inadequadas e estimular o desenvolvimento neuropsicomotor e global do neonato. 
            </p>
            
            <h4 className="font-medium text-gray-800 mb-2">Técnicas Utilizadas:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>Cinesioterapia</li>
              <li>Integração sensorial</li>
              <li>Facilitação neuromuscular proprioceptiva</li>
              <li>Posicionamento terapêutico</li>
            </ul>
            
            <p className="text-gray-700 mb-4">
              Os exercícios incluem movimentos em membros, tronco e cabeça, junto com estimulação tátil, visual, auditiva, vestibular e proprioceptiva.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-700 font-medium">
                A intervenção precoce da fisioterapia motora na UTI Neonatal minimiza atrasos motores em bebês prematuros.
              </p>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="slideUp" delay={0.4} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Atelectasia</h3>
            <p className="text-gray-700 mb-4">
              É o colapso parcial ou total de uma região do pulmão devido à obstrução das vias aéreas ou à falta de ventilação adequada nos alvéolos. Isso impede a troca eficiente de oxigênio e pode causar sintomas como falta de ar, tosse e desconforto torácico.
            </p>
            
            <h4 className="font-medium text-gray-800 mb-2">Principais Causas:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li><span className="font-medium">Obstrução das vias aéreas:</span> Pode ser causada por muco, tumor ou corpo estranho.</li>
              <li><span className="font-medium">Compressão pulmonar:</span> Líquido (derrame pleural), ar (pneumotórax) ou massa ao redor do pulmão podem impedir sua expansão.</li>
              <li><span className="font-medium">Hipoventilação:</span> Comum em pacientes acamados, sedados ou pós-cirúrgicos.</li>
            </ul>
            
            <h4 className="font-medium text-gray-800 mb-2">Tratamento:</h4>
            <p className="text-gray-700">
              Inclui fisioterapia respiratória, exercícios para expansão pulmonar e, se necessário, remoção da obstrução com broncoscopia.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.5} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-4">Apneia e Dispneia</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Apneia</h4>
                <p className="text-gray-700">
                  É a interrupção da respiração por mais de 20 segundos, podendo ser acompanhada de bradicardia e cianose. Em prematuros, é definida como pausa respiratória maior que 15 segundos.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Dispneia</h4>
                <p className="text-gray-700">
                  É a dificuldade respiratória caracterizada por respiração rápida e superficial, com uso de musculatura acessória e retrações intercostais. Pode ser causada por obstrução das vias aéreas, doenças pulmonares ou cardíacas.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">Frequência Respiratória Normal por Idade:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">Prematuros (antes de 28 dias):</span> 40 - 50 rpm</li>
                  <li><span className="font-medium">a termo:</span> 30 - 40 rpm</li>
                  <li><span className="font-medium">Lactentes (depois de 29 dias até 2 anos):</span> 30 - 40 rpm</li>
                  <li><span className="font-medium">Um Ano:</span> 25 - 30 rpm</li>
                  <li><span className="font-medium">Pré-escolar (2-5/6 anos):</span> 20 - 25 rpm</li>
                  <li><span className="font-medium">Escolar (6-12 anos):</span> 18 - 24 rpm</li>
                  <li><span className="font-medium">Adolescente (13-18 anos):</span> 12-20 rpm</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

              {/* Parâmetros Gasométricos */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Parâmetros Gasométricos do RN</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700">
            A fisioterapia neonatal também envolve o monitoramento de parâmetros gasométricos para garantir o equilíbrio gasoso no sangue.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection animation="slideUp" delay={0.6} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-4">Parâmetros Gasométricos do RN</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">Valores Normais:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600">pH</p>
                    <p className="text-2xl font-bold text-teal-600">7,25-7,35</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600">PaO₂</p>
                    <p className="text-2xl font-bold text-teal-600">50-70 mmHg</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600">PaCO₂</p>
                    <p className="text-2xl font-bold text-teal-600">45-55 mmHg</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-gray-600">SatO₂</p>
                    <p className="text-2xl font-bold text-teal-600">90-94%</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-3">Distúrbios:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-medium text-red-700 mb-2">Acidose Respiratória</h5>
                    <p className="text-gray-700">pH {'<'} 7,25 e PaCO₂ {'>'} 55</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-2">Alcalose Respiratória</h5>
                    <p className="text-gray-700">pH {'>'} 7,35 e PaCO₂ {'<'} 45</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-medium text-orange-700 mb-2">Acidose Metabólica</h5>
                    <p className="text-gray-700">pH {'<'} 7,25 e HCO₃ {'<'} 23</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-green-700 mb-2">Alcalose Metabólica</h5>
                    <p className="text-gray-700">pH {'>'} 7,35 e HCO₃ {'>'} 23</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
        
        <div className="flex justify-center">
          <Link to="/simulado" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-brand-500/20 relative">
              {/* Efeito de destaque pulsante */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:animate-pulse"></div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Simulado"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:transform group-hover:scale-110"
                />
                {/* Badge de destaque */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-300">
                  Interativo
                </div>
              </div>
              <div className="relative p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Simulado Interativo</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Teste seus conhecimentos com 50 questões sobre Fisioterapia Neonatal.</p>
                <span className="text-brand-600 dark:text-brand-400 font-medium flex items-center justify-center gap-1 group-hover:gap-3 transition-all">
                  Fazer Simulado <ChevronRight size={16} className="transition-transform group-hover:transform group-hover:translate-x-2" />
                </span>
                
                {/* Indicador de progresso animado */}
                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full group-hover:w-full transition-all duration-700 ease-in-out"></div>
              </div>
            </div>
          </Link>
        </div>
      </AnimatedSection>

      {/* Flashcards Section */}
      <ParallaxSection bgColor="bg-gray-50" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Flashcards para Estudo</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Use esses flashcards para revisar rapidamente conceitos importantes sobre Fisioterapia Neonatal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { question: "Qual a frequência cardíaca normal esperada para 1 ano?", answer: "25 - 30 RPM" },
              { question: "Quais são os tipos de RN por idade gestacional?", answer: "Pré-Termo (<37 semanas), Termo (38-41 semanas), Pós-Termo (≥42 semanas)" },
              { question: "O que significa RN-EBP?", answer: "Recém-nascido de extremo baixo peso (inferior a 1.000g)" },
              { question: "Qual a frequência respiratória normal de um prematuro?", answer: "40-50 respirações por minuto" },
              { question: "Por que a tapotagem é contraindicada em RNs?", answer: "Pode causar hipoxemia, fraturas de costelas e lesões cerebrais" },
              { question: "Quais são os objetivos da fisioterapia na UTINeo?", answer: "Otimizar função respiratória, prevenir complicações, favorecer desmame ventilatório" },
            ].map((card, index) => (
              <AnimatedSection key={index} animation="scale" delay={0.1 * index} className="perspective-1000">
                <div className="flip-card h-[200px] w-full">
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d">
                    <div className="flip-card-front absolute w-full h-full bg-white rounded-xl shadow-md p-6 flex items-center justify-center text-center backface-hidden">
                      <h3 className="text-lg font-semibold text-gray-800">{card.question}</h3>
                    </div>
                    <div className="flip-card-back absolute w-full h-full bg-brand-50 rounded-xl shadow-md p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                      <p className="text-gray-800">{card.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">Clique ou toque nos cartões para revelar as respostas</p>
          </div>
        </div>
      </ParallaxSection>

      

      {/* Mais Conteúdo */}
      <AnimatedSection className="container mx-auto px-6 py-16 text-center" animation="fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Explore Mais Conteúdos</h2>
        <div className="w-20 h-1 bg-brand-500 mx-auto mb-8"></div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Link to="/desenvolvimento-embrionario" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80" 
                  alt="Desenvolvimento Embrionário"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Desenvolvimento Embrionário</h3>
                <p className="text-gray-600 mb-4">Detalhes sobre o desenvolvimento embrionário e fetal por semanas.</p>
                <span className="text-brand-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Ver mais <ChevronRight size={16} className="transition-transform group-hover:transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/utideo" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="UTI Neonatal"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">UTI Neonatal</h3>
                <p className="text-gray-600 mb-4">Particularidades e funcionamento da UTI Neonatal.</p>
                <span className="text-brand-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Ver mais <ChevronRight size={16} className="transition-transform group-hover:transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
          
          <Link to="/simulado" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Simulado"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Simulado</h3>
                <p className="text-gray-600 mb-4">Teste seus conhecimentos com 50 questões sobre Fisioterapia Neonatal.</p>
                <span className="text-brand-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Fazer Simulado <ChevronRight size={16} className="transition-transform group-hover:transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

const Baby = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
};

export default Index;
