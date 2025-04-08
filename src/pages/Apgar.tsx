import { motion } from "framer-motion";
import { ArrowRight, Heart, Activity, Smile, Zap, Wind, Clock, CheckCircle, AlertTriangle, Timer } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedButton from "@/components/AnimatedButton";
import InfoCard from "@/components/InfoCard";

const Apgar = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        className="min-h-[70vh] flex items-center"
        overlayOpacity={0.7}
      >
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <motion.span 
                className="inline-block mb-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Tabela de Apgar
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Um método rápido e preciso para avaliar a condição clínica do recém-nascido após o nascimento.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AnimatedButton 
                  to="/avaliacao-neonatal" 
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-medium"
                >
                  <ArrowRight size={18} className="mr-2" />
                  Avaliação Neonatal
                </AnimatedButton>
              </motion.div>
            </div>
            
            {/* Card animado no lado direito */}
            <div className="md:col-span-2 relative z-10 hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative"
              >
                <motion.div
                  className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden relative">
                  <motion.div 
                    className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 to-pink-400 p-3 rounded-full text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Timer size={32} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-3">
                    Momentos de Avaliação
                  </h3>
                  
                  <p className="text-white/80 text-center mb-5">
                    A avaliação de Apgar é realizada em momentos específicos após o nascimento do bebê.
                  </p>
                  
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Clock size={20} className="text-pink-300" />
                      <span className="text-white/90">1º minuto após o nascimento</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                    >
                      <Clock size={20} className="text-pink-300" />
                      <span className="text-white/90">5º minuto após o nascimento</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <AlertTriangle size={20} className="text-pink-300" />
                      <span className="text-white/90">10º minuto (se necessário)</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Introdução */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">O Escore de Apgar</h2>
          <div className="w-20 h-1 bg-brand-500 mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            O escore de Apgar foi desenvolvido em 1952 pela Dra. Virginia Apgar, anestesista e primeira mulher a ser nomeada professora de anestesiologia na Universidade de Columbia. É um sistema de pontuação utilizado para avaliar a saúde de recém-nascidos imediatamente após o nascimento.
          </p>
          
          <p className="text-gray-700 mb-6">
            A avaliação é realizada em momentos específicos após o nascimento, geralmente ao primeiro e quinto minutos. Em alguns casos, quando os escores são baixos, pode ser repetido aos 10, 15 ou 20 minutos.
          </p>
          
          <p className="text-gray-700 mb-6">
            O método analisa cinco critérios simples no recém-nascido: frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor da pele. Cada critério recebe uma pontuação de 0 a 2, sendo a soma total entre 0 e 10.
          </p>
          
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-gray-700">0-3: Necessidade de intervenção imediata</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span className="text-gray-700">4-6: Pode necessitar de assistência para respirar</span>
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-gray-700">7-10: Condição excelente</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tabela de Apgar */}
      <ParallaxSection bgColor="bg-gray-50" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Tabela de Apgar</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              Cada componente da tabela é avaliado em uma escala de 0 a 2, e o resultado é a soma das cinco avaliações.
            </p>
          </div>
          
          <AnimatedSection animation="slideUp" delay={0.3}>
            <div className="overflow-x-auto bg-white rounded-xl shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-4 bg-brand-50 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Sinal</th>
                    <th className="px-6 py-4 bg-brand-50 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">0</th>
                    <th className="px-6 py-4 bg-brand-50 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">1</th>
                    <th className="px-6 py-4 bg-brand-50 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium flex items-center">
                      <Heart size={20} className="mr-2 text-red-500" /> Frequência Cardíaca
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Ausente</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">&lt; 100 bpm</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">&gt; 100 bpm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium flex items-center">
                      <Wind size={20} className="mr-2 text-blue-500" /> Esforço Respiratório
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Ausente</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Fraco/Irregular</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Forte/Choro</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium flex items-center">
                      <Activity size={20} className="mr-2 text-purple-500" /> Tônus Muscular
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Flácido</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Flexão de Extremidades</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Movimento Ativo</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium flex items-center">
                      <Smile size={20} className="mr-2 text-amber-500" /> Irritabilidade Reflexa
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Sem Resposta</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Careta</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Espirro/Tosse/Choro</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium flex items-center">
                      <Zap size={20} className="mr-2 text-green-500" /> Coloração
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Azulado/Pálido</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Corpo Rosado, Extremidades Azuis</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-gray-700">Completamente Rosado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Interpretação do Escore */}
      <AnimatedSection className="container mx-auto px-6 py-24" animation="fadeIn">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideUp" delay={0.5}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Interpretação do Escore</h2>
            <div className="w-20 h-1 bg-brand-500 mb-6"></div>
            
            <h3 className="text-xl font-semibold mb-4">Escore 7-10</h3>
            <p className="text-gray-700 mb-6">
              Indica que o bebê está em boas condições. A maioria dos bebês nasce com um escore de Apgar entre 7 e 10, e geralmente não necessitam de assistência além da aspiração das vias aéreas.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Escore 4-6</h3>
            <p className="text-gray-700 mb-6">
              Indica que o bebê pode necessitar de alguma assistência para começar a respirar adequadamente, como oxigênio suplementar e estimulação tátil.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Escore 0-3</h3>
            <p className="text-gray-700 mb-6">
              Indica que o bebê requer intervenção médica imediata e provavelmente ressuscitação, incluindo ventilação assistida e, possivelmente, medicação.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://futurosenf.wordpress.com/wp-content/uploads/2017/04/apgar-e1492421274543.png" 
                alt="Avaliação de recém-nascido usando o escore de Apgar"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Importância Clínica */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1632053015584-bbc2e8027195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        className="py-24 px-6"
      >
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">Importância Clínica</h2>
              <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
              
              <p className="text-gray-700 mb-4">
                O escore de Apgar é uma ferramenta valiosa por várias razões:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Proporciona uma avaliação padronizada e objetiva da condição clínica do recém-nascido.</li>
                <li>Ajuda a identificar rapidamente os bebês que necessitam de assistência médica imediata.</li>
                <li>Serve como um indicador da eficácia das intervenções de ressuscitação quando aplicadas.</li>
                <li>Oferece um prognóstico inicial, embora não deva ser usado isoladamente para prever resultados neurológicos a longo prazo.</li>
                <li>Facilita a comunicação entre profissionais de saúde sobre o estado do recém-nascido.</li>
              </ul>
              
              <p className="text-gray-700 mb-4">
                É importante ressaltar que o escore de Apgar não deve ser usado para determinar a necessidade de ressuscitação, que deve ser iniciada antes do escore de 1 minuto ser atribuído. Além disso, não deve ser o único critério para diagnóstico de asfixia, que requer avaliações adicionais como gasometria do cordão umbilical.
              </p>
              
              <p className="text-gray-700 mb-6">
                O escore também pode ser afetado por fatores como idade gestacional, medicamentos, anomalias congênitas e ressuscitação prévia.
              </p>
              
              <div className="mt-8 text-center">
                <AnimatedButton 
                  to="/" 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Voltar à Página Inicial
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-500 py-16 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Continue aprendendo</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Explore mais conteúdos sobre Fisioterapia Neonatal em nossas outras páginas.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <AnimatedButton 
                to="/desenvolvimento-embrionario" 
                variant="outline"
                size="lg"
                className="bg-white text-brand-700 border-white hover:bg-gray-100"
              >
                Desenvolvimento Embrionário
              </AnimatedButton>
              
              <AnimatedButton 
                to="/utideo" 
                variant="outline"
                size="lg"
                className="bg-white text-brand-700 border-white hover:bg-gray-100"
              >
                UTINeo
              </AnimatedButton>
              
              <AnimatedButton 
                to="/avaliacao-neonatal" 
                variant="outline"
                size="lg"
                className="bg-white text-brand-700 border-white hover:bg-gray-100"
              >
                Avaliação Neonatal
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Apgar;
