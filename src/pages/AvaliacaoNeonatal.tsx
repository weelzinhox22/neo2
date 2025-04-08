import { motion } from "framer-motion";
import { ArrowRight, Heart, Stethoscope, Eye, Ear, Baby, Ruler, Scale, Brain, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedButton from "@/components/AnimatedButton";
import InfoCard from "@/components/InfoCard";

const AvaliacaoNeonatal = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        className="min-h-[70vh] flex items-center"
        overlayOpacity={0.6}
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
                StudyWell
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Avaliação Neonatal
              </motion.h1>
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Uma abordagem detalhada para identificar e abordar as necessidades de saúde do recém-nascido.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <AnimatedButton 
                  to="/apgar" 
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-medium"
                >
                  <ArrowRight size={18} className="mr-2" />
                  Conhecer Tabela de Apgar
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
                  className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"
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
                    className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"
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
                      className="bg-gradient-to-r from-blue-500 to-teal-400 p-3 rounded-full text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Stethoscope size={32} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-3">
                    Componentes da Avaliação
                  </h3>
                  
                  <p className="text-white/80 text-center mb-5">
                    Uma avaliação neonatal completa inclui diversos aspectos fundamentais para garantir a saúde do recém-nascido.
                  </p>
                  
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Ruler size={20} className="text-blue-300" />
                      <span className="text-white/90">Medidas antropométricas</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                    >
                      <Brain size={20} className="text-blue-300" />
                      <span className="text-white/90">Avaliação neurológica</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <Heart size={20} className="text-blue-300" />
                      <span className="text-white/90">Sinais vitais</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Avaliação Neonatal: Uma Abordagem Detalhada</h2>
          <div className="w-20 h-1 bg-brand-500 mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            A avaliação neonatal é um processo crucial para identificar e abordar as necessidades de saúde do recém-nascido (RN). Envolve um exame completo desde as medições físicas até os reflexos e possíveis patologias.
          </p>
          
          <p className="text-gray-700 mb-6">
            A avaliação sistemática permite identificar precocemente alterações que podem impactar o desenvolvimento futuro do bebê, possibilitando intervenções oportunas e eficazes.
          </p>
        </div>
      </AnimatedSection>

      {/* Medições Gerais */}
      <ParallaxSection bgColor="bg-gray-50" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Medições Gerais</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-gray-700">
              As medidas são importantes para determinar se o bebê está dentro da faixa de normalidade para a idade gestacional.
            </p>
          </div>
          
          <AnimatedSection animation="slideUp" delay={0.3}>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-brand-50 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Parâmetro</th>
                      <th className="px-6 py-3 bg-brand-50 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Faixa Normal (RN a Termo)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">Comprimento</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">48 a 55 cm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">Perímetro Cefálico (PC)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">31 a 35,5 cm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">Perímetro Torácico (PT)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">30,5 a 33 cm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">Perímetro Abdominal (PA)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">30,5 a 33 cm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">Peso</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">Em média, 3.400g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* A Pele do RN */}
      <AnimatedSection className="container mx-auto px-6 py-24" animation="fadeIn">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1623854775676-3e0ca4328cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="A Pele do Recém-Nascido"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.5}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">A Pele do RN</h2>
            <div className="w-20 h-1 bg-brand-500 mb-6"></div>
            
            <h3 className="text-xl font-semibold mb-4">Coloração</h3>
            <p className="text-gray-700 mb-4">
              Recém-nascidos de cor branca a rosa tendem a apresentar uma coloração mais rosada, enquanto recém-nascidos de cor preta tendem a apresentar uma coloração mais avermelhada. Palidez pode sugerir anemia e/ou vasoconstrição periférica.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Características Comuns</h3>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Manchas Mongólicas:</span> Pigmentação cinza-azulada no dorso e nas nádegas, sem importância clínica.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Vernix Caseoso:</span> Substância esbranquiçada que recobre a pele do RN.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Eritema Tóxico:</span> Comum em RNs, surge de 1 a 3 dias após o nascimento. Lesões papulares ou vesicopustulosas localizadas na face, tronco e membros.
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Mílio Sebáceo:</span> Pequenos pontos branco-amarelados localizados principalmente nas asas do nariz.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Avaliação por Sistemas */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80" 
        className="py-24 px-6"
        overlayOpacity={0.7}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Avaliação por Sistemas</h2>
              <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoCard 
                  icon={<Baby size={28} />} 
                  title="Cabeça" 
                  content="Perímetro cefálico medido com fita métrica, sendo 1 a 2 cm maior que o perímetro torácico. Fontanelas anterior (formato de losango) e posterior (formato triangular). Observar suturas e possível craniotabes."
                  delay={0.1}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  icon={<Eye size={28} />} 
                  title="Olhos" 
                  content="Observar sobrancelhas, cílios, movimentos palpebrais, edema, direção da comissura palpebral e epicanto. Hemorragias conjuntivais são comuns e reabsorvidas sem intervenção."
                  delay={0.2}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  icon={<Ear size={28} />} 
                  title="Orelhas" 
                  content="Pavilhões auriculares são moles e moldáveis, frequentemente dobrados em prematuros. Observar forma, tamanho, simetria e implantação. 'Teste da orelhinha' avalia a acuidade auditiva."
                  delay={0.3}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  title="Boca e Garganta" 
                  content="Cistos de retenção mucosa são comuns. Avaliar a presença de dentes, conformação do palato, fenda palatina, fissura labial, desvio da comissura labial, posição da mandíbula, tamanho da língua e freio lingual."
                  delay={0.4}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  title="Tórax e Abdômen" 
                  content="Tórax com forma cilíndrica e ângulo costal de 90°. Tipo respiratório abdominal. Palpar clavículas para detectar fraturas. Abdômen cilíndrico, geralmente proeminente, com veias visíveis. Fígado palpável até 2 cm abaixo da borda costal."
                  delay={0.5}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  icon={<Stethoscope size={28} />} 
                  title="Pulmões e Cardiovascular" 
                  content="Respiração abdominal, silenciosa, sem uso de musculatura acessória. FR de 40 a 60 movimentos por minuto. FC de 100 a 160 bpm. PA sistólica ao nascer em torno de 70 mmHg."
                  delay={0.6}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  title="Aparelho Urinário" 
                  content="A taxa de filtração glomerular aumenta com a idade gestacional e no período pós-natal. O RN apresenta bexiga contendo urina, que é eliminada nas primeiras horas de vida."
                  delay={0.7}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  title="Genitálias" 
                  content="Observar a integridade e definição, buscando ambiguidade. Na feminina, pequenos lábios e clitóris proeminentes. Na masculina, verificar o meato urinário e presença dos testículos."
                  delay={0.8}
                  className="hover:bg-white/95"
                />
                
                <InfoCard 
                  icon={<Heart size={28} />} 
                  title="Coluna e Extremidades" 
                  content="Examinar a área sacrolombar em busca de espinha bífida. Avaliar os dedos, presença de fraturas ou lesão nervosa e as articulações coxofemurais pela abdução das coxas (manobra de Ortolani)."
                  delay={0.9}
                  className="hover:bg-white/95"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Avaliação Fisioterapêutica */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Avaliação Fisioterapêutica Neonatal</h2>
          <div className="w-20 h-1 bg-brand-500 mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            A avaliação fisioterapêutica neonatal é fundamental para direcionar o tratamento e acompanhar a evolução do recém-nascido. Ela deve ser realizada de forma sistemática, respeitando as particularidades do neonato e seu estado clínico.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Componentes da Avaliação</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-medium">Anamnese:</span> Histórico gestacional, tipo de parto, intercorrências perinatais, idade gestacional, peso ao nascer, Apgar</li>
              <li><span className="font-medium">Exame físico:</span> Inspeção, palpação, ausculta pulmonar e cardíaca</li>
              <li><span className="font-medium">Avaliação respiratória:</span> Padrão respiratório, frequência, expansibilidade torácica, sinais de desconforto</li>
              <li><span className="font-medium">Avaliação neurológica:</span> Tônus, postura, reflexos primitivos, reações posturais</li>
              <li><span className="font-medium">Avaliação musculoesquelética:</span> Amplitude de movimento, deformidades, assimetrias</li>
              <li><span className="font-medium">Monitorização:</span> Sinais vitais, oximetria de pulso, parâmetros ventilatórios</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
              <h3 className="text-xl font-semibold mb-4">Avaliação Respiratória</h3>
              <p className="text-gray-700 mb-4">
                A avaliação respiratória deve incluir:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Inspeção do tórax (formato, simetria, retrações)</li>
                <li>Padrão respiratório (abdominal, torácico, misto)</li>
                <li>Frequência respiratória (normal: 40-60 ipm)</li>
                <li>Ritmo respiratório (regular ou irregular)</li>
                <li>Ausculta pulmonar (murmúrios vesiculares, ruídos adventícios)</li>
                <li>Sinais de desconforto (batimento de asa de nariz, gemência, tiragem)</li>
                <li>Coloração da pele e mucosas</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-4">Avaliação Neurológica</h3>
              <p className="text-gray-700 mb-4">
                A avaliação neurológica deve incluir:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Tônus muscular (hipotonia, hipertonia, normotonia)</li>
                <li>Postura (flexão, extensão, assimetrias)</li>
                <li>Reflexos primitivos (Moro, preensão palmar e plantar, sucção)</li>
                <li>Movimentação espontânea (qualidade, quantidade, simetria)</li>
                <li>Reatividade a estímulos (visual, auditivo, tátil)</li>
                <li>Estado comportamental (sono profundo, sono leve, alerta, choro)</li>
                <li>Avaliação da dor (escalas específicas para neonatos)</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-4">Instrumentos de Avaliação</h3>
            <p className="text-gray-700 mb-4">
              Diversos instrumentos padronizados podem auxiliar na avaliação neonatal:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-medium">Escala de Silverman-Andersen:</span> Avalia o desconforto respiratório</li>
              <li><span className="font-medium">Escala NIPS (Neonatal Infant Pain Scale):</span> Avalia a dor no neonato</li>
              <li><span className="font-medium">AIMS (Alberta Infant Motor Scale):</span> Avalia o desenvolvimento motor</li>
              <li><span className="font-medium">TIMP (Test of Infant Motor Performance):</span> Avalia o desempenho motor</li>
              <li><span className="font-medium">Escala de Brazelton:</span> Avalia o comportamento neonatal</li>
              <li><span className="font-medium">Escala de Dubowitz:</span> Avalia a idade gestacional</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-amber-700">Considerações na Avaliação</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Respeitar o estado comportamental do RN (preferencialmente em estado de alerta)</li>
              <li>Considerar o horário das mamadas e procedimentos invasivos</li>
              <li>Manter o ambiente aquecido e com pouca estimulação sensorial</li>
              <li>Realizar a avaliação de forma gradual, respeitando os sinais de estresse</li>
              <li>Monitorar os sinais vitais durante toda a avaliação</li>
              <li>Documentar detalhadamente os achados para acompanhar a evolução</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Reflexos */}
      <AnimatedSection className="container mx-auto px-6 py-24" animation="fadeIn">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Reflexos</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Os reflexos avaliam a maturação neurológica do RN e são fundamentais para determinar o desenvolvimento adequado do sistema nervoso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="slideUp" delay={0.3} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-500">
            <h3 className="text-xl font-semibold mb-4">Reflexo de Moro</h3>
            <p className="text-gray-700 mb-4">
              Em resposta a ruídos fortes ou movimentos bruscos, o RN joga os braços e pernas para frente. Este reflexo desaparece normalmente no 4° mês.
            </p>
            <p className="text-gray-700">
              A ausência ou assimetria deste reflexo pode indicar problemas neurológicos ou ortopédicos.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.4} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-4">Preensão Palmar e Plantar</h3>
            <p className="text-gray-700 mb-4">
              Ocorre flexão dos dedos das mãos e pés quando a palma ou planta é estimulada. A preensão plantar normalmente desaparece por volta do 3° mês.
            </p>
            <p className="text-gray-700">
              A persistência prolongada pode sugerir problemas no desenvolvimento neurológico.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.5} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Reflexo Tônico Cervical</h3>
            <p className="text-gray-700 mb-4">
              Caracterizado pela extensão do membro homolateral à rotação da cabeça, também conhecido como "posição de esgrima".
            </p>
            <p className="text-gray-700">
              Este reflexo deve desaparecer por volta do 4° mês de vida.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.6} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-4">Sucção e Deglutição</h3>
            <p className="text-gray-700 mb-4">
              Estes reflexos estão presentes em RNs a termo, mas podem estar ausentes ou diminuídos em prematuros de baixo peso (menos de 35 semanas).
            </p>
            <p className="text-gray-700">
              São essenciais para a alimentação adequada do RN.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.7} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-emerald-500">
            <h3 className="text-xl font-semibold mb-4">Reflexo de Marcha</h3>
            <p className="text-gray-700 mb-4">
              Segurando o RN pelas axilas em posição vertical sobre uma superfície, ele desenvolve movimentos de marcha automática.
            </p>
            <p className="text-gray-700">
              Este reflexo primitivo geralmente desaparece por volta do 2° mês.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.8} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-rose-500">
            <h3 className="text-xl font-semibold mb-4">Reflexo dos Pontos Cardeais</h3>
            <p className="text-gray-700 mb-4">
              Ao tocar a região perioral, o RN procura com movimentos de sucção na direção do estímulo.
            </p>
            <p className="text-gray-700">
              Este reflexo ajuda o bebê a encontrar o mamilo durante a amamentação.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Considerações Finais */}
      <ParallaxSection bgColor="bg-gray-50" className="py-24 px-6">
        <div className="container mx-auto">
          <AnimatedSection animation="fadeIn">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">Considerações Finais</h2>
              <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-700 mb-4">
                  O exame do RN é de fundamental importância, pois os sinais e sintomas são as principais informações disponíveis para avaliação do seu estado de saúde.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Recém-nascidos e crianças não são adultos em miniatura e possuem particularidades anatômicas, fisiológicas e de desenvolvimento que devem ser consideradas durante a avaliação.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Devido às particularidades no sistema hematológico e alterações metabólicas, é preciso ter cuidado com a administração de certas drogas.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Uma avaliação minuciosa permite identificar precocemente alterações que podem impactar o desenvolvimento futuro do bebê, possibilitando intervenções oportunas e eficazes.
                </p>
                
                <div className="text-center mt-8">
                  <AnimatedButton 
                    to="/apgar" 
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight size={18} />}
                  >
                    Conhecer a Tabela de Apgar
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default AvaliacaoNeonatal;
