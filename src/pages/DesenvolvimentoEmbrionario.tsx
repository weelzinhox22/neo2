import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Baby, 
  Heart, 
  Calendar, 
  Brain, 
  Activity, 
  Eye, 
  Clock, 
  CheckCircle, 
  Info, 
  Zap
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedButton from "@/components/AnimatedButton";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Timeline Event Component
const TimelineEvent = ({ week, title, description, delay = 0, align = "left", icon = null }) => {
  const isLeft = align === "left";
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative flex flex-col my-8">
      {/* Card do evento - centralizado em todas as telas */}
      <div className="w-full mx-auto px-4 relative">
        {/* Círculo do timeline - visível apenas em desktop e posicionado fora do fluxo */}
        <motion.div 
          className="absolute top-6 left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-x-12 w-8 h-8 rounded-full flex items-center justify-center z-10"
          style={{ 
            background: isLeft ? "linear-gradient(to right, #38bdf8, #7dd3fc)" : "linear-gradient(to right, #a78bfa, #c4b5fd)" 
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {icon && <div className="text-white">{icon}</div>}
        </motion.div>
        
        <AnimatedSection 
          animation="fadeIn"
          delay={delay}
          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${isLeft ? "border-brand-400" : "border-purple-400"} md:ml-0 ml-12 relative z-20`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center mb-3 gap-2">
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${isLeft ? "bg-brand-100 text-brand-700" : "bg-purple-100 text-purple-700"}`}>
              {week}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
          
          <motion.div 
            className="w-full h-0.5 mt-4"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
            style={{ 
              background: isLeft 
                ? "linear-gradient(to right, #38bdf8, #7dd3fc)" 
                : "linear-gradient(to right, #a78bfa, #c4b5fd)" 
            }}
          />
        </AnimatedSection>
      </div>
    </div>
  );
};

// Milestone Card Component
const MilestoneCard = ({ title, description, icon, color = "brand" }) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 border-t-4 border-${color}-500`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const DesenvolvimentoEmbrionario = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const embryonicDevelopment = [
    {
      week: "Semana 1",
      title: "Implantação inicial",
      description: "Implantação superficial do óvulo no endométrio.",
      icon: <Baby size={16} />
    },
    {
      week: "Semana 2",
      title: "Início da formação",
      description: "Implantação verdadeira do blastocisto, formação do disco embrionário e início da circulação placentária primitiva.",
      icon: <Activity size={16} />
    },
    {
      week: "Semana 3",
      title: "Sistema circulatório",
      description: "Origem dos vasos sanguíneos e do sangue, estabelecimento do sistema circulatório e surgimento do broto do fígado e intestino primitivo posterior.",
      icon: <Heart size={16} />
    },
    {
      week: "Semana 4",
      title: "Primeira batida do coração",
      description: "O coração começa a pulsar, os nervos cranianos são formados, e há formação do fígado, boca e língua. Primórdios de olhos, nariz, ouvidos, brotos dos membros superiores e inferiores, cordão umbilical e coluna vertebral começam a se desenvolver.",
      icon: <Heart size={16} />
    },
    {
      week: "Semana 5",
      title: "Órgãos sensoriais",
      description: "Desenvolvimento dos olhos e rins, formação do cérebro e dilatação palmar e plantar.",
      icon: <Eye size={16} />
    },
    {
      week: "Semana 6",
      title: "Desenvolvimento facial",
      description: "Os olhos giram para frente, os dedos se tornam distintos, surgem os brotos dentários e ocorre o desenvolvimento da face. Formação dos cotovelos e do sistema vascular, e aparecem os primórdios dos genitais.",
      icon: <Baby size={16} />
    },
    {
      week: "Semana 7",
      title: "Formação das pálpebras",
      description: "Início da formação das pálpebras e diferenciação.",
      icon: <Eye size={16} />
    },
    {
      week: "Semana 8",
      title: "Início do período fetal",
      description: "Reconhecimento dos testículos e presença dos primórdios de todas as estruturas internas e externas. Os ovários ainda não são identificados (até a 10ª semana). O saco vitelino perde sua função, e o cordão umbilical assume a alimentação do embrião com nutrientes da mãe.",
      icon: <Baby size={16} />
    }
  ];

  const fetalDevelopment = [
    {
      week: "Semanas 9-12",
      title: "Desenvolvimento inicial",
      description: "Pescoço bem definido, pálpebras bem formadas, pele rósea e fina, e pulmões com forma definida. ",
      icon: <Baby size={16} />
    },
    {
      week: "Semanas 13-16",
      title: "Desenvolvimento intermediário",
      description: "O feto pesa cerca de 200g, ocorre crescimento do corpo e surge lanugem no couro cabeludo. A língua se torna funcional, ocorrem movimentos fetais ativos e aparecem os reflexos de preensão e deglutição. O feto começa a aspirar líquido amniótico e há acúmulo de mecônio. Quase todos os órgãos estão desenvolvidos. ",
      icon: <Activity size={16} />
    },
    {
      week: "Semanas 17-20",
      title: "Movimentos perceptíveis",
      description: "O feto pesa cerca de 450g, a pele tem lanugem e vernix, e ocorre a formação dos seios. Há secreção de urina, sucção e deglutição ativa, calcificação dos dentes, e a gestante começa a perceber os movimentos fetais. ",
      icon: <Zap size={16} />
    },
    {
      week: "Semanas 21-24",
      title: "Viabilidade",
      description: "O feto pesa em torno de 480g e tem o corpo magro. Os olhos estão fechados e o feto é capaz de chorar. Movimentos respiratórios bem definidos e produção de surfactante nos pulmões. Rápido crescimento do cérebro",
      icon: <Heart size={16} />
    },
    {
      week: "Semanas 25-28",
      title: "Desenvolvimento pulmonar",
      description: "O feto pesa em torno de 1.100g e os olhos reabrem. Os pulmões estão bem desenvolvidos, e o feto pode sobreviver (prematuro).",
      icon: <Activity size={16} />
    },
    {
      week: "Semanas 29-32",
      title: "Ganho de peso",
      description: "O feto pesa em torno de 1.600g, unhas, digitais, néfrons e reflexos bem desenvolvidos. Aparentemente, o feto ouve sons in utero.  ",
      icon: <Brain size={16} />
    },
    {
      week: "Semanas 33-36",
      title: "Preparação para o nascimento",
      description: "O feto pesa em média 2.600g. A sucção e a deglutição tornam-se coordenadas e há cartilagem nas orelhas. Reflexos de preensão e sucção bastante fortes.",
      icon: <Baby size={16} />
    },
    {
      week: "Semanas 37-40",
      title: "Termo completo",
      description: " A pele está lisa e o tórax saliente. O feto está pronto para a vida extra uterina. ",
      icon: <CheckCircle size={16} />
    }
  ];

  const milestones = [
    {
      title: "Desenvolvimento Neurológico",
      description: "Formação do tubo neural e desenvolvimento do cérebro e sistema nervoso central.",
      icon: <Brain size={24} className="text-purple-600" />,
      color: "purple"
    },
    {
      title: "Sistema Cardiovascular",
      description: "Formação do coração e dos principais vasos sanguíneos, essenciais para a circulação fetal.",
      icon: <Heart size={24} className="text-red-600" />,
      color: "red"
    },
    {
      title: "Sistema Respiratório",
      description: "Desenvolvimento dos pulmões e das vias aéreas, preparando para a respiração após o nascimento.",
      icon: <Activity size={24} className="text-blue-600" />,
      color: "blue"
    },
    {
      title: "Crescimento Físico",
      description: "Desenvolvimento dos membros, órgãos e estruturas corporais ao longo da gestação.",
      icon: <Baby size={24} className="text-brand-600" />,
      color: "brand"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 transition-colors">
              <Calendar size={14} className="mr-1" /> Desenvolvimento Fetal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Desenvolvimento Embrionário e Fetal</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Conheça as principais etapas do desenvolvimento humano desde a concepção até o nascimento.
            </p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <a href="#embrionario" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors">
                Período Embrionário
              </a>
              <a href="#fetal" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors">
                Período Fetal
              </a>
              <a href="#marcos" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors">
                Marcos Importantes
              </a>
              <a href="#fisioterapia" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors">
                Importância para Fisioterapia
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-6 py-12">
        <AnimatedSection animation="fadeIn" className="bg-white rounded-xl shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Compreendendo o Desenvolvimento Humano</h2>
              <p className="text-gray-700 mb-4">
                O desenvolvimento humano é um processo complexo que começa com a fertilização e continua até o nascimento. 
                Este processo é dividido em dois períodos principais: o período embrionário (primeiras 8 semanas) e o período fetal (da 9ª semana até o nascimento).
              </p>
              <p className="text-gray-700 mb-4">
                Durante estas fases, ocorrem mudanças dramáticas que transformam um único óvulo fertilizado em um ser humano completamente formado, 
                com todos os sistemas corporais necessários para a vida extrauterina.
              </p>
              
              <div className="flex items-center p-4 bg-blue-50 rounded-lg mt-4">
                <Info size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  O conhecimento detalhado deste processo é fundamental para compreender o desenvolvimento normal e identificar possíveis alterações.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div 
                className="rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://static.todamateria.com.br/upload/de/se/desenvolvimento-embrionario-humano-og.jpg" 
                  alt="Desenvolvimento Embrionário" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Marcos do Desenvolvimento */}
        <div id="marcos" className="mb-16">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Marcos Importantes do Desenvolvimento</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <MilestoneCard 
                  key={index}
                  title={milestone.title}
                  description={milestone.description}
                  icon={milestone.icon}
                  color={milestone.color}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      
        {/* Período Embrionário Timeline */}
        <div id="embrionario" className="mb-16">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Período Embrionário</h2>
            <p className="text-gray-600 mb-8">As primeiras 8 semanas de desenvolvimento, quando ocorre a formação dos principais órgãos e sistemas.</p>
            
            <div className="relative" ref={timelineRef}>
              {/* Timeline line - visível apenas em desktop */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 transform md:-translate-x-12 -translate-x-8 w-1 bg-gray-200 h-full z-0"></div>
              
              {/* Timeline progress - visível apenas em desktop */}
              <motion.div 
                className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-12 -translate-x-8 w-1 bg-gradient-to-b from-brand-400 to-purple-400 z-0"
                style={{ height: progressHeight }}
              />
              
              {/* Timeline events */}
              <div className="w-full mx-auto">
                {embryonicDevelopment.map((event, index) => (
                  <TimelineEvent 
                    key={event.week}
                    week={event.week}
                    title={event.title}
                    description={event.description}
                    delay={index * 0.1}
                    align="left"
                    icon={event.icon}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Período Fetal Timeline */}
        <div id="fetal" className="mb-16">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Período Fetal</h2>
            <p className="text-gray-600 mb-8">Da 9ª semana até o nascimento, período de crescimento e maturação dos órgãos e sistemas.</p>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 transform md:-translate-x-12 -translate-x-8 w-1 bg-gray-200 h-full z-0"></div>
              
              {/* Timeline events */}
              <div className="w-full mx-auto">
                {fetalDevelopment.map((event, index) => (
                  <TimelineEvent 
                    key={event.week}
                    week={event.week}
                    title={event.title}
                    description={event.description}
                    delay={index * 0.1}
                    align="left"
                    icon={event.icon}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Ilustração e Importância para Fisioterapia */}
      <ParallaxSection 
        id="fisioterapia"
        bgImage="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80" 
        className="py-24 px-6"
      >
        <div className="container mx-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <AnimatedSection animation="scale">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600">
                Importância para a Fisioterapia Neonatal
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-purple-500 mx-auto mb-6"></div>
              
              <p className="text-gray-700 mb-4">
                Compreender o desenvolvimento embrionário e fetal é fundamental para a fisioterapia neonatal, pois permite:
              </p>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                {[
                  "Identificar possíveis alterações no desenvolvimento neuropsicomotor",
                  "Compreender a origem de certas patologias congênitas",
                  "Desenvolver programas de intervenção precoce mais eficazes",
                  "Orientar adequadamente os pais quanto ao desenvolvimento esperado",
                  "Adaptar técnicas fisioterapêuticas conforme a idade gestacional corrigida"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle size={20} className="text-brand-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="p-4 bg-brand-50 rounded-lg border border-brand-100 mb-6">
                <p className="text-brand-700">
                  <strong>Importante:</strong> Os prematuros, especialmente, se beneficiam de intervenções baseadas no conhecimento do desenvolvimento normal, 
                  pois muitas vezes apresentam atrasos no desenvolvimento relacionados à imaturidade dos sistemas.
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <AnimatedButton 
                  to="/utideo" 
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  UTINeo e suas particularidades
                </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-700 to-purple-600 py-16 px-6">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Teste seus conhecimentos</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Verifique o quanto você aprendeu sobre o desenvolvimento embrionário e fetal com nosso simulado interativo.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <AnimatedButton 
                to="/simulado" 
                variant="outline"
                size="lg"
                className="bg-white text-brand-700 border-white hover:bg-gray-100"
                icon={<Clock size={18} />}
              >
                Iniciar Simulado
              </AnimatedButton>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Continue explorando</h3>
              
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Link to="/avaliacao-neonatal" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors text-white">
                  <div className="flex items-center">
                    <Eye size={20} className="mr-2" />
                    <span>Avaliação Neonatal</span>
                  </div>
                </Link>
                
                <Link to="/apgar" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors text-white">
                  <div className="flex items-center">
                    <Activity size={20} className="mr-2" />
                    <span>Tabela de Apgar</span>
                  </div>
                </Link>
                
                <Link to="/utideo" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors text-white">
                  <div className="flex items-center">
                    <Heart size={20} className="mr-2" />
                    <span>UTI Neonatal</span>
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default DesenvolvimentoEmbrionario;
