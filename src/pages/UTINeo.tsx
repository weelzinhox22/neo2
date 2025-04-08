import { motion } from "framer-motion";
import { 
  Activity, 
  ThermometerSnowflake, 
  Stethoscope, 
  Wind, 
  HeartPulse, 
  BrainCircuit, 
  ArrowRight,
  BookOpen,
  Baby,
  Users,
  Heart,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Home,
  Lungs,
  Moon,
  Info,
  AlertCircle,
  Trophy,
  HandHeart,
  ThermometerSun,
  HeartHandshake,
  Lightbulb
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedButton from "@/components/AnimatedButton";
import InfoCard from "@/components/InfoCard";
import { Badge } from "@/components/ui/badge";

const UTINeo = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        className="min-h-[80vh] flex items-center"
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
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 relative z-10">
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                </span>
                <Badge className="bg-blue-500/20 text-white border-blue-300/30 backdrop-blur-sm">
                  Fisioterapia Neonatal
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block">UTINeo e suas</span>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">particularidades</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Vamos abordar desde a humanização do ambiente até as patologias respiratórias mais comuns em neonatos, com foco na assistência fisioterapêutica especializada.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <AnimatedButton 
                    to="/simulado" 
                    variant="primary"
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-medium"
                  >
                    <BookOpen size={18} className="mr-2" />
                    Fazer Simulado
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Card no lado direito */}
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
                      <Baby size={32} />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white text-center mb-3">
                    Ambiente da UTI Neonatal
                  </h3>
                  
                  <p className="text-white/80 text-center mb-5">
                    Um ambiente especializado para cuidados intensivos de recém-nascidos prematuros ou com condições críticas.
                  </p>
                  
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ThermometerSnowflake size={20} className="text-blue-300" />
                      <span className="text-white/90">Controle térmico rigoroso</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                    >
                      <Moon size={20} className="text-blue-300" />
                      <span className="text-white/90">Iluminação e ruídos controlados</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <HeartHandshake size={20} className="text-blue-300" />
                      <span className="text-white/90">Humanização do cuidado</span>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              <Heart size={12} className="mr-1" /> Humanização
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">A Unidade Neonatal, o Recém-Nascido (RN) e a Humanização</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              A UTI Neonatal é um ambiente altamente especializado, projetado para fornecer cuidados intensivos a recém-nascidos prematuros ou com condições médicas críticas. Neste ambiente, a <span className="font-semibold text-blue-600 dark:text-blue-400">humanização do cuidado</span> é tão importante quanto a tecnologia e as intervenções médicas.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              O fisioterapeuta desempenha um papel crucial na UTI Neonatal, contribuindo não apenas para o manejo respiratório, mas também para o desenvolvimento neuromotor adequado e o bem-estar geral do RN.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30 mt-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-blue-100 dark:bg-blue-800/30 rounded-full">
                    <Info size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Princípios da Humanização</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Respeito à individualidade do RN e sua família</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Minimização de estímulos nocivos (ruído, luz, manipulação excessiva)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Promoção do vínculo entre pais e bebê</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Cuidado centrado na família, incluindo os pais nas decisões e cuidados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Particularidades Neonatais */}
      <AnimatedSection className="bg-gray-50 dark:bg-gray-900/50 py-16" animation="fadeIn">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 mx-auto bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                <Baby size={12} className="mr-1" /> Características
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Particularidades Neonatais</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                O recém-nascido apresenta características anatômicas e fisiológicas únicas que influenciam diretamente a abordagem fisioterapêutica.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard 
              icon={<Stethoscope size={28} />} 
              title="Cabeça e Vias Aéreas Superiores" 
              content="A anatomia do RN contribui para uma maior resistência nas vias aéreas. A cabeça é proporcionalmente maior em relação ao corpo, e as vias aéreas são mais estreitas e colapsáveis."
              delay={0.1}
            />
            
            <InfoCard 
              icon={<Wind size={28} />} 
              title="Sistema Respiratório" 
              content="Os pulmões do RN possuem menor número de alvéolos, menor complacência e maior resistência. A respiração é predominantemente diafragmática, com maior frequência respiratória."
              delay={0.2}
            />
            
            <InfoCard 
              icon={<HeartPulse size={28} />} 
              title="Sistema Cardiovascular" 
              content="O RN apresenta maior frequência cardíaca, menor volume sistólico e pressão arterial mais baixa. O sistema cardiovascular ainda está em adaptação à vida extrauterina."
              delay={0.3}
            />
            
            <InfoCard 
              icon={<ThermometerSnowflake size={28} />} 
              title="Termorregulação" 
              content="O RN tem maior superfície corporal em relação ao peso, menor isolamento térmico e mecanismos de termorregulação imaturos, o que o torna mais suscetível à hipotermia."
              delay={0.4}
            />
            
            <InfoCard 
              icon={<Activity size={28} />} 
              title="Metabolismo" 
              content="Taxa metabólica basal elevada, com maior consumo de oxigênio por kg de peso. Reservas energéticas limitadas, especialmente em prematuros."
              delay={0.5}
            />
            
            <InfoCard 
              icon={<BrainCircuit size={28} />} 
              title="Sistema Neurológico" 
              content="Sistema neurológico imaturo, com reflexos primitivos presentes. A mielinização está em processo, o que influencia o tônus muscular e o desenvolvimento motor."
              delay={0.6}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Alvéolos e Ventilação */}
      <AnimatedSection className="container mx-auto px-6 py-24" animation="fadeIn">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://www.sobiologia.com.br/figuras/Fisiologiaanimal/respiracao6.jpg" 
                alt="Alvéolos e Ventilação Pulmonar"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.5}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Alvéolos e Ventilação Colateral</h2>
            <div className="w-20 h-1 bg-brand-500 mb-6"></div>
            
            <h3 className="text-xl font-semibold mb-4">Alvéolos</h3>
            <p className="text-gray-700 mb-6">
              O número de alvéolos aumenta após o nascimento. A menor quantidade de alvéolos no RN resulta em menor reserva de troca gasosa, levando à Insuficiência Respiratória Aguda (IRpA). No entanto, o RN tem maior potencial de recuperação mesmo em lesões pulmonares graves.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Ventilação Colateral</h3>
            <p className="text-gray-700 mb-6">
              Os poros de Kohn e canais de Lambert estão ausentes ou em menor número no RN, o que dificulta a ventilação pulmonar em unidades obstruídas. Isso prejudica a troca gasosa e facilita a ocorrência de atelectasias.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Avaliação do RN */}
      <ParallaxSection 
        bgImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        className="py-24 px-6"
      >
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gradient">Avaliação do RN</h2>
              <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
              
              <p className="text-gray-700 mb-6">
                Na avaliação do RN, é crucial observar os sinais vitais, como frequência respiratória (FR {'>'}  50 ipm) e frequência cardíaca (FC: 100 a 180 bpm). O ritmo ventilatório é rápido e irregular, com padrão predominantemente costal.
              </p>
              
              <p className="text-gray-700 mb-6">
                A ausculta pulmonar é mais audível nos ápices pulmonares, e a atividade motora, tônus e reflexos primitivos devem ser avaliados.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Parâmetros Gasométricos do RN</h3>
              <p className="text-gray-700 mb-4">
                Os parâmetros gasométricos são essenciais para avaliar o estado respiratório do RN. A gasometria indica acidose (pH {`<`} 7,25) ou alcalose (pH {`>`} 7,35), tanto respiratória (PaCO2 alterado) quanto metabólica (HCO3 alterado).
              </p>
              
              <p className="text-gray-700 mb-6">
                Valores de referência incluem pH entre 7,25 e 7,35, PaO2 entre 50 e 70 mmHg, PaCO2 entre 45 e 55 mmHg e SatO2 entre 90 e 94%.
              </p>
              
              <div className="mt-8 text-center">
                <AnimatedButton 
                  to="/avaliacao-neonatal" 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Ver mais sobre Avaliação Neonatal
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Distúrbios Respiratórios */}
      <AnimatedSection className="container mx-auto px-6 py-24" animation="fadeIn">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Distúrbios Respiratórios Comuns em Neonatologia</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-gray-700">
            As patologias respiratórias representam uma das principais causas de internação em UTI Neonatal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection animation="slideUp" delay={0.3} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-brand-500">
            <h3 className="text-xl font-semibold mb-4">Doença Pulmonar da Membrana Hialina (DPMH)</h3>
            <p className="text-gray-700 mb-4">
              A DPMH, também conhecida como Síndrome do Desconforto Respiratório (SDR), é um processo de desconforto respiratório precoce com colapso alveolar progressivo. É causada pelo desenvolvimento incompleto do parênquima pulmonar, levando à deficiência de surfactante e complacência exagerada da caixa torácica.
            </p>
            <p className="text-gray-700">
              A gravidade está diretamente relacionada ao grau de prematuridade, e a evolução geralmente atinge o pico entre 36 e 48 horas, com melhora gradual após 72 horas.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.4} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-4">Apneia da Prematuridade</h3>
            <p className="text-gray-700 mb-4">
              A apneia da prematuridade se caracteriza por pausas respiratórias de mais de 20 segundos, acompanhadas de bradicardia e/ou cianose. É inversamente proporcional à idade gestacional e pode ser central, obstrutiva ou mista.
            </p>
            <p className="text-gray-700">
              As causas incluem imaturidade do centro respiratório, reflexo vagal das vias aéreas, ineficiência da caixa torácica e influência do sono.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.5} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Síndrome do Pulmão Úmido ou Taquipneia Transitória</h3>
            <p className="text-gray-700 mb-4">
              Esta síndrome é decorrente de um edema pulmonar transitório devido à demora na reabsorção do líquido fetal do pulmão após o nascimento. Acomete RNs pré-termo, a termo ou pós-termo e evolui de forma aguda, mas benigna.
            </p>
            <p className="text-gray-700">
              As causas incluem parto cesáreo eletivo, prematuridade e hiperidratação materna durante o parto.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.6} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-4">Síndrome de Aspiração de Mecônio (SAM)</h3>
            <p className="text-gray-700 mb-4">
              A SAM ocorre quando há presença de SDR em RNs com líquido amniótico meconial ao nascimento. É mais comum em RNs a termo que sofreram sofrimento fetal e apresenta alta taxa de mortalidade neonatal.
            </p>
            <p className="text-gray-700">
              O mecônio no interstício causa pneumonite química.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.7} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-emerald-500">
            <h3 className="text-xl font-semibold mb-4">Displasia Broncopulmonar (DBP)</h3>
            <p className="text-gray-700 mb-4">
              A DBP é uma alteração no desenvolvimento pulmonar normal em RNPT, modificando a alveolização e o amadurecimento dos pulmões. É o resultado de uma lesão do tipo agressão/reparação.
            </p>
            <p className="text-gray-700">
              Existem duas formas: a DBP "clássica" (em RNs {`<`} 2500g e IG ≥ 32 semanas, submetidos à ventilação mecânica agressiva) e a "nova" DBP (em RNPT extremos com IG {`<`} 30 semanas e PN {`<`} 1000g, secundária à SARA ou imaturidade pulmonar).
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slideUp" delay={0.8} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-rose-500">
            <h3 className="text-xl font-semibold mb-4">Síndrome de Escape de Ar - Pneumotórax</h3>
            <p className="text-gray-700 mb-4">
              O pneumotórax espontâneo ocorre em 0,07% dos RNs aparentemente saudáveis. O pneumotórax secundário pode ser causado por PIP (Pressão Inspiratória de Pico) elevada e ventilação irregular, sendo mais comum em RNs tratados com ventilação mecânica.
            </p>
            <p className="text-gray-700">
              As atelectasias são áreas de colapso pulmonar que podem ocorrer em neonatos, prejudicando a troca gasosa.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Fisioterapia na UTI Neonatal */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Fisioterapia na UTI Neonatal</h2>
          <div className="w-20 h-1 bg-brand-500 mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            A fisioterapia na UTI Neonatal requer conhecimento especializado e técnicas específicas adaptadas às particularidades do recém-nascido. O fisioterapeuta atua de forma integrada com a equipe multidisciplinar, contribuindo para a recuperação e desenvolvimento do neonato.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Objetivos da Fisioterapia Neonatal</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Prevenir e tratar complicações respiratórias</li>
              <li>Facilitar o desmame da ventilação mecânica</li>
              <li>Promover o desenvolvimento neuropsicomotor adequado</li>
              <li>Minimizar os efeitos negativos da internação prolongada</li>
              <li>Orientar os pais quanto ao manuseio e posicionamento do RN</li>
              <li>Identificar precocemente alterações que possam comprometer o desenvolvimento</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
              <h3 className="text-xl font-semibold mb-4">Técnicas Respiratórias</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Posicionamento:</span> Favorece a ventilação-perfusão e previne atelectasias</li>
                <li><span className="font-medium">Vibração e Vibrocompressão:</span> Mobiliza secreções das vias aéreas</li>
                <li><span className="font-medium">Aspiração:</span> Remove secreções das vias aéreas superiores e inferiores</li>
                <li><span className="font-medium">Hiperinsuflação manual:</span> Previne atelectasias e melhora a ventilação alveolar</li>
                <li><span className="font-medium">Reequilíbrio toracoabdominal:</span> Melhora a mecânica respiratória</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-4">Técnicas Motoras</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><span className="font-medium">Estimulação sensorial:</span> Tátil, proprioceptiva, vestibular e visual</li>
                <li><span className="font-medium">Posicionamento terapêutico:</span> Favorece o desenvolvimento neuromotor</li>
                <li><span className="font-medium">Facilitação neuromuscular:</span> Estimula padrões normais de movimento</li>
                <li><span className="font-medium">Contenção:</span> Proporciona segurança e organização comportamental</li>
                <li><span className="font-medium">Método Canguru:</span> Promove o contato pele a pele com os pais</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold mb-4">Avaliação Fisioterapêutica Neonatal</h3>
            <p className="text-gray-700 mb-4">
              A avaliação fisioterapêutica do RN deve incluir:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>História obstétrica e neonatal completa</li>
              <li>Avaliação da função respiratória (padrão, frequência, expansibilidade)</li>
              <li>Avaliação da função cardiovascular</li>
              <li>Avaliação neurológica (tônus, postura, reflexos primitivos)</li>
              <li>Avaliação musculoesquelética</li>
              <li>Análise dos exames complementares (radiografia, gasometria)</li>
            </ol>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-amber-700">Considerações Importantes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Todas as intervenções devem respeitar o estado comportamental do RN</li>
              <li>O manuseio mínimo deve ser priorizado em RNs instáveis ou extremamente prematuros</li>
              <li>A monitorização dos sinais vitais durante os procedimentos é essencial</li>
              <li>A intervenção deve ser individualizada e baseada nas necessidades específicas de cada RN</li>
              <li>A família deve ser incluída no processo terapêutico sempre que possível</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Manuseio Mínimo */}
      <AnimatedSection className="bg-gray-50 dark:bg-gray-900/50 py-16" animation="fadeIn">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <Badge className="mb-4 mx-auto bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
                <HandHeart size={12} className="mr-1" /> Cuidado Humanizado
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Manuseio Mínimo</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
                Uma abordagem de cuidado que visa reduzir a manipulação excessiva do recém-nascido, minimizando o estresse e as complicações associadas.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-3">
                  <Info size={20} className="text-teal-600 dark:text-teal-400" />
                </div>
                Princípios do Manuseio Mínimo
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Agrupar procedimentos e cuidados para reduzir o número de manipulações</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Respeitar os períodos de sono e o estado comportamental do RN</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Realizar procedimentos com técnica adequada e delicada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Monitorar sinais de estresse durante os procedimentos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Proporcionar períodos de descanso entre as intervenções</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Evitar estímulos ambientais excessivos (ruído, luz, manipulação)</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-3">
                  <Trophy size={20} className="text-teal-600 dark:text-teal-400" />
                </div>
                Benefícios do Manuseio Mínimo
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-5 rounded-lg border border-teal-100 dark:border-teal-800/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <HeartPulse size={18} className="text-teal-600 dark:text-teal-400 mr-2" />
                    Benefícios Fisiológicos
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Estabilidade dos sinais vitais</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Redução de episódios de hipoxemia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Menor gasto energético</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Melhor ganho de peso</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800/30">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <BrainCircuit size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                    Benefícios Neurológicos
                  </h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Redução do estresse</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Melhora na qualidade do sono</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Menor risco de hemorragia intraventricular</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Melhor desenvolvimento neurológico a longo prazo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Sinais de Alerta */}
      <AnimatedSection className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 py-16" animation="fadeIn">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 mx-auto bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                <AlertTriangle size={12} className="mr-1" /> Atenção
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sinais de Alerta no RN</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                O reconhecimento precoce de sinais de estresse e desconforto é fundamental para uma intervenção fisioterapêutica segura e eficaz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-gradient-to-br from-red-500 to-red-700 text-white p-6 md:p-8">
                  <AlertCircle size={36} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Reconheça os Sinais</h3>
                  <p className="text-red-100">
                    Durante a manipulação e procedimentos fisioterapêuticos, observe atentamente estes sinais que indicam estresse ou instabilidade no recém-nascido.
                  </p>
                </div>
                
                <div className="col-span-2 p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full mr-3">
                          <HeartPulse size={20} className="text-red-600 dark:text-red-400" />
                        </div>
                        Sinais Fisiológicos
                      </h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Alterações na frequência cardíaca (taquicardia ou bradicardia)</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Alterações na frequência respiratória</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Queda na saturação de oxigênio</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Palidez, cianose ou moteamento da pele</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Apneia ou padrão respiratório irregular</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full mr-3">
                          <Activity size={20} className="text-orange-600 dark:text-orange-400" />
                        </div>
                        Sinais Motores
                      </h4>
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Hiperextensão de membros</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Dedos em leque (sinal de estresse)</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Hipertonia ou hipotonia súbita</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Tremores ou movimentos descoordenados</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Arqueamento do tronco</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-3">
                        <BrainCircuit size={20} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      Sinais Comportamentais
                    </h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <li className="flex items-start">
                        <AlertTriangle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Choro excessivo ou inconsolável</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Agitação ou irritabilidade</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Sono desorganizado</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Expressão facial de dor ou desconforto</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-8 p-5 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-800/30">
                    <div className="flex items-start">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full mr-3 mt-1">
                        <Info size={20} className="text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Conduta Recomendada</h4>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          Ao identificar sinais de estresse durante a intervenção fisioterapêutica:
                        </p>
                        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Interrompa imediatamente o procedimento</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Ofereça medidas de conforto (contenção facilitada, sucção não-nutritiva)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Monitore os sinais vitais até a estabilização</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Reavalie a necessidade e abordagem da intervenção</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Humanização na UTI Neonatal */}
      <AnimatedSection className="container mx-auto px-6 py-16" animation="fadeIn">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 mx-auto bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400">
              <Heart size={12} className="mr-1" /> Cuidado Centrado na Família
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Humanização na UTI Neonatal</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              A humanização do cuidado na UTI Neonatal envolve práticas que reconhecem o recém-nascido como um ser integral e sua família como parte essencial do processo de cuidado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-b from-pink-50 to-white dark:from-pink-900/20 dark:to-gray-800 rounded-xl overflow-hidden shadow-md border border-pink-100 dark:border-pink-800/30"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                  <Users size={24} className="text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Participação da Família</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Incentivo à presença e participação dos pais nos cuidados, fortalecendo o vínculo afetivo e promovendo segurança emocional para o RN.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-xl overflow-hidden shadow-md border border-blue-100 dark:border-blue-800/30"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <Moon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Controle Ambiental</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Redução de ruídos e luminosidade, respeitando os ciclos de sono-vigília e proporcionando um ambiente mais adequado ao desenvolvimento neurológico.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-xl overflow-hidden shadow-md border border-purple-100 dark:border-purple-800/30"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Sparkles size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cuidado Individualizado</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Reconhecimento das necessidades específicas de cada RN, respeitando sua individualidade e adaptando os cuidados conforme suas respostas.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">Benefícios da Humanização</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Baby size={20} className="text-pink-500 mr-2" />
                  Para o Recém-Nascido
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Redução do estresse e da dor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Melhora dos parâmetros fisiológicos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Redução do tempo de internação</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Melhor desenvolvimento neuropsicomotor</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <Users size={20} className="text-blue-500 mr-2" />
                  Para a Família
                </h4>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Fortalecimento do vínculo afetivo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Redução da ansiedade e do estresse</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Maior confiança no cuidado com o RN</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Melhor preparação para a alta hospitalar</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-800/30">
              <div className="flex items-start">
                <div className="p-2 bg-pink-100 dark:bg-pink-800/30 rounded-full mr-3 mt-1">
                  <Heart size={20} className="text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Papel do Fisioterapeuta na Humanização</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    O fisioterapeuta desempenha um papel fundamental na humanização do cuidado neonatal, integrando práticas que respeitam o desenvolvimento do RN e envolvem a família.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Adaptar técnicas para minimizar o desconforto</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Orientar os pais sobre posicionamento e estimulação adequados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Promover o contato pele a pele (método canguru)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Integrar a família no plano terapêutico</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Método Canguru */}
      <AnimatedSection className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 py-16" animation="fadeIn">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 mx-auto bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400">
                <Heart size={12} className="mr-1" /> Cuidado Humanizado
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Método Canguru</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                Uma abordagem de cuidado humanizado que promove o contato pele a pele entre o recém-nascido e seus pais, especialmente em prematuros e bebês de baixo peso.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Método Canguru" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">O que é o Método Canguru?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  O Método Canguru é uma forma de assistência neonatal que envolve o contato pele a pele precoce entre o recém-nascido e seus pais, especialmente em bebês prematuros ou de baixo peso ao nascer.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-3 mt-1">
                      <ThermometerSun size={20} className="text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Regulação Térmica</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        O contato pele a pele ajuda a manter a temperatura corporal do bebê de forma natural e eficiente.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3 mt-1">
                      <HeartHandshake size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Vínculo Afetivo</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Fortalece o vínculo emocional entre pais e bebê, promovendo segurança e desenvolvimento emocional saudável.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-3 mt-1">
                      <Stethoscope size={20} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Estabilidade Fisiológica</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Melhora os parâmetros cardiorrespiratórios e reduz o estresse, promovendo maior estabilidade clínica.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">Etapas do Método Canguru</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-teal-50 to-white dark:from-teal-900/20 dark:to-gray-800 rounded-xl overflow-hidden shadow-md border border-teal-100 dark:border-teal-800/30 p-6 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-teal-500 dark:bg-teal-600 flex items-center justify-center text-white font-bold rounded-bl-xl">
                    1
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white pt-2">Primeira Etapa</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Realizada na UTI Neonatal, com contato pele a pele gradual e progressivo, respeitando as condições clínicas do RN.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Identificação das famílias</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Orientação sobre o método</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Estímulo à participação dos pais</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Início do contato pele a pele</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 rounded-xl overflow-hidden shadow-md border border-blue-100 dark:border-blue-800/30 p-6 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500 dark:bg-blue-600 flex items-center justify-center text-white font-bold rounded-bl-xl">
                    2
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white pt-2">Segunda Etapa</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Realizada em unidades canguru ou alojamento conjunto, com permanência contínua da mãe e participação do pai.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>RN estável clinicamente</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Nutrição enteral plena</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Ganho de peso regular</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Posição canguru por períodos prolongados</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 rounded-xl overflow-hidden shadow-md border border-purple-100 dark:border-purple-800/30 p-6 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-purple-500 dark:bg-purple-600 flex items-center justify-center text-white font-bold rounded-bl-xl">
                    3
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white pt-2">Terceira Etapa</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Acompanhamento ambulatorial após a alta hospitalar, com consultas regulares até o bebê atingir 2.500g.
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Acompanhamento do crescimento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Avaliação do desenvolvimento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Suporte ao aleitamento materno</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Orientação contínua aos pais</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800/30">
                <div className="flex items-start">
                  <div className="p-2 bg-teal-100 dark:bg-teal-800/30 rounded-full mr-3 mt-1">
                    <Lightbulb size={24} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Papel do Fisioterapeuta no Método Canguru</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      O fisioterapeuta desempenha um papel importante no Método Canguru, contribuindo para o desenvolvimento neuropsicomotor adequado do recém-nascido:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Orientação sobre posicionamento adequado</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Monitoramento da função respiratória</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Avaliação do tônus muscular</span>
                        </li>
                      </ul>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Estímulo sensório-motor apropriado</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Prevenção de deformidades posturais</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Orientação aos pais sobre estimulação</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-700 to-brand-500 py-16 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Continue aprendendo</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Conheça mais sobre avaliação neonatal e a importância da tabela de Apgar.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <AnimatedButton 
                to="/avaliacao-neonatal" 
                variant="outline"
                size="lg"
                className="bg-white text-brand-700 border-white hover:bg-gray-100"
              >
                Avaliação Neonatal
              </AnimatedButton>
              
              <AnimatedButton 
                to="/apgar" 
                variant="outline"
                size="lg"
                className="bg-white text-brand-700 border-white hover:bg-gray-100"
              >
                Tabela de Apgar
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default UTINeo;
