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
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return newCount > 10 ? newCount : 11;
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
                  StudyWell
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
                Olá! Preparado para nossa aula sobre Fisioterapia Neonatal? Vamos abordar desde a história da Neonatologia até as técnicas fisioterapêuticas utilizadas na UTINeo, como se estivéssemos em uma sala de aula de pós-graduação.
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-teal-500/30 rounded-2xl blur-xl transform -rotate-6 scale-105"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center">
                        <Activity className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="ml-3 text-xl font-semibold text-white">Simulado Interativo</h3>
                    </div>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Novo</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <motion.div 
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + (item * 0.1) }}
                        className="p-3 bg-white/10 rounded-lg flex items-center"
                      >
                        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">Questão {item} respondida</p>
                          <div className="h-1.5 w-full bg-white/20 rounded-full mt-1">
                            <div className="h-full bg-gradient-to-r from-green-400 to-teal-300 rounded-full" style={{ width: `${30 * item}%` }}></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <p className="text-white/80 text-sm">Progresso total</p>
                      <p className="text-white font-medium">60%</p>
                    </div>
                    <div className="h-2 w-full bg-white/20 rounded-full mt-2">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ duration: 1, delay: 1.2 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Classificação do Recém-Nascido</h2>
            <div className="w-20 h-1 bg-brand-500 mb-6"></div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Idade Gestacional (IG)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Pré-Termo (PT): Menos de 37 semanas e 6 dias.</li>
                  <li>Termo (T): Entre 38 e 41 semanas.</li>
                  <li>Pós-Termo (PO): 42 semanas ou mais.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Relação entre IG e Peso</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>GIG: Grande para a Idade Gestacional.</li>
                  <li>AIG: Adequado para a Idade Gestacional.</li>
                  <li>PIG: Pequeno para a Idade Gestacional.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Classificação por Peso</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>RN-BP: Recém-nascido de baixo peso (inferior a 2.000g).</li>
                  <li>RN-MBP: Recém-nascido de muito baixo peso (inferior a 1.500g).</li>
                  <li>RN-EBP: Recém-nascido de extremo baixo peso (inferior a 1.000g).</li>
                </ul>
              </div>
            </div>
          </div>
          
          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://campcarecursos.com.br/wp-content/uploads/2020/02/UTI-Neonatal.jpg" 
                alt="Recém-nascido"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Organização e Funcionamento da UTIneo */}
      <ParallaxSection bgColor="bg-gray-50" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center">Organização e Funcionamento da UTIneo</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-gray-700 text-center">
              A organização da UTIneo é crucial para otimizar o trabalho e a assistência ao RN.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://hsj.org.br/wp-content/uploads/2023/06/BAIXA-uti-neonatal-1-1024x683.jpg" 
                  alt="UTI Neonatal"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">Divisão da Unidade Neonatal</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold mr-3">AC</span>
                    <div>
                      <span className="font-medium">Alojamento Conjunto:</span> Área onde a mãe e o RN permanecem juntos desde o nascimento até a alta.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold mr-3">CI</span>
                    <div>
                      <span className="font-medium">Cuidados Intermediários:</span> Setor para RNs que necessitam de cuidados específicos, mas não intensivos.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-semibold mr-3">UTI</span>
                    <div>
                      <span className="font-medium">Unidade de Terapia Intensiva:</span> Para RNs com alto risco de morte ou sequelas.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold mr-3">ACT</span>
                    <div>
                      <span className="font-medium">Alojamento Conjunto Tardia:</span> Para prematuros na fase pré-alta.
                    </div>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Essa divisão permite racionalização do trabalho, determinação do nível de complexidade da assistência, adequação do número de profissionais, treinamento de pessoal, redução do risco de infecções cruzadas e melhor experiência para os pais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* UTI Neonatal */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">UTI Neonatal e Equipamentos</h2>
            <div className="w-20 h-1 bg-brand-500 mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              A UTI é o setor que concentra recursos materiais e humanos especializados para garantir observação rigorosa e tratamento adequado aos RNs com risco de morte ou sequelas que possam interferir no seu desenvolvimento. A área deve ser de 5 m² por RN, com uma área específica para isolamento.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Equipamentos Necessários na UTI</h3>
            <p className="text-gray-700 mb-3">
              Além dos equipamentos do CI, a UTI necessita de:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>Ventiladores neonatais (respiradores)</li>
              <li>Incubadoras de tratamento intensivo com parede dupla</li>
              <li>Berço aquecido</li>
              <li>Capacete de acrílico para O² (Halo), umidificadores de O²</li>
              <li>Densímetro urinário, régua antropométrica e fita métrica</li>
              <li>Negatoscópio, desfibrilador neonatal, carro de emergência</li>
              <li>Bandejas de procedimentos especializados</li>
              <li>Foco de luz</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Indicações para UTI Neonatal</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Baixo peso/GIG/PIG</li>
              <li>RNPT (Recém-Nascido Pré-Termo)</li>
              <li>Filho de mãe diabética</li>
              <li>Malformações</li>
              <li>Suspeita de infecção congênita</li>
              <li>Icterícia não fisiológica</li>
              <li>Asfixia perinatal</li>
              <li>Convulsões</li>
              <li>Pré e pós-operatório de cirurgias</li>
              <li>Sepses</li>
              <li>Cardiopatias</li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <AnimatedSection animation="slideUp" delay={0.3}>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Users size={20} className="text-brand-500" />
                  Particularidades Fisiológicas
                </h3>
                
                <h4 className="font-medium text-gray-800 mb-2">Relação entre Perímetro Cefálico (PC) e Perímetro Torácico (PT)</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                  <li>Ao nascer, em RN a termo: PC = PT</li>
                  <li>No prematuro: PC {'>'}  PT</li>
                  <li>Até 6 meses: PC é maior que PT</li>
                  <li>Cerca de 6 meses: PC = PT</li>
                  <li>Cerca de nove meses: PC é menor que PT</li>
                </ul>
                
                <h4 className="font-medium text-gray-800 mb-2">Frequência Respiratória</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                  <li>Prematuro: 40 - 50 rpm</li>
                  <li>Lactentes: 30 - 40 rpm</li>
                  <li>1 ano: 25 - 30 rpm</li>
                  <li>Pré-escolar: 20 - 25 rpm</li>
                  <li>Escolar: 18 - 24 rpm</li>
                  <li>Adolescente: 12 - 20 rpm</li>
                </ul>
                
                <h4 className="font-medium text-gray-800 mb-2">Frequência Cardíaca</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>RN: 80 - 170 bpm, média 140 bpm</li>
                  <li>Lactentes: 80 - 160 bpm, média 120 bpm</li>
                  <li>2 anos: 80 - 130 bpm, média 110 bpm</li>
                  <li>3 a 5 anos: 80 - 120 bpm, média 90 bpm</li>
                  <li>6 a 11 anos: 75 - 100 bpm, média 80 bpm</li>
                  <li>Adolescente: 60 - 100 bpm, média 70 bpm</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={0.4}>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Brain size={20} className="text-amber-500" />
                  Etiologia da Prematuridade
                </h3>
                
                <h4 className="font-medium text-gray-800 mb-2">Causas Maternas</h4>
                <p className="text-gray-700 mb-3">
                  Idade materna (precoce/idosa), primiparidade/grandes multíparas, condições socioeconômicas precárias, má nutrição materna, baixo peso materno, pré-eclâmpsia/eclampsia, patologias crônicas/agudas, fatores emocionais, estresse, uso de drogas medicamentosas, fumo, álcool, drogas ilícitas.
                </p>
                
                <h4 className="font-medium text-gray-800 mb-2">Causas Uterinas, Placentárias e Fetais</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><span className="font-medium">Causas Uterinas:</span> Miomas, incompetência do colo uterino.</li>
                  <li><span className="font-medium">Causas Placentárias:</span> Placenta prévia, DPP, hemorragia, infecção, tumores.</li>
                  <li><span className="font-medium">Causas Fetais:</span> Sofrimento fetal, gestação múltipla, infecções congênitas.</li>
                </ul>
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
        
        <div className="flex justify-center">
          <AnimatedButton 
            to="/simulado" 
            variant="primary"
            size="lg"
            icon={<ChevronRight size={18} />}
          >
            Testar Conhecimentos no Simulado
          </AnimatedButton>
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
              { question: "Quais são os pioneiros da Neonatologia?", answer: "Dr. Pierre Budin (1882, França) e Dr. Julius Hess (1914, Chicago)" },
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
