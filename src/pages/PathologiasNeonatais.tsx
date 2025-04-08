import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Activity, 
  Heart, 
  Stethoscope, 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Brain,
  HeartPulse,
  Info
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Custom Lungs icon since it's not available in lucide-react
const Lungs = ({ size = 24, ...props }) => {
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
      <path d="M6.081 20c-2.528 0-4.581-2.054-4.581-4.582V11.5c0-1.657 1.343-3 3-3 1.657 0 3 1.343 3 3v4.5"></path>
      <path d="M17.92 20c2.528 0 4.581-2.054 4.581-4.582V11.5c0-1.657-1.343-3-3-3-1.657 0-3 1.343-3 3v4.5"></path>
      <path d="M9.5 12A5.5 5.5 0 0 1 4 6.5V3c0-.552.448-1 1-1 .513 0 .936.386.993.883C6.5 6.5 9.5 7 9.5 7"></path>
      <path d="M14.5 12a5.5 5.5 0 0 0 5.5-5.5V3c0-.552-.448-1-1-1-.513 0-.936.386-.993.883C17.5 6.5 14.5 7 14.5 7"></path>
      <path d="M12 12V4c0-1.105.895-2 2-2"></path>
      <path d="M12 12V4c0-1.105-.895-2-2-2"></path>
    </svg>
  );
};

const PathologiasNeonatais = () => {
  const sdrContent = (
    <>
      <p className="text-gray-700 mb-4">
        Também conhecida como Doença da Membrana Hialina (DMH), é uma das patologias respiratórias mais frequentes em recém-nascidos prematuros, caracterizada pela deficiência de surfactante pulmonar.
      </p>

      <h3 className="text-xl font-semibold mb-3">Etiologia</h3>
      <p className="text-gray-700 mb-4">
        A principal causa é a imaturidade pulmonar, levando à produção insuficiente de surfactante, uma substância que reduz a tensão superficial nos alvéolos, facilitando a troca gasosa.
      </p>

      <h3 className="text-xl font-semibold mb-3">Fisiopatologia</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Deficiência de surfactante aumenta a tensão superficial alveolar.</li>
        <li>Colapso alveolar (atelectasia) e redução da capacidade residual funcional.</li>
        <li>Aumento do trabalho respiratório e hipoxemia.</li>
        <li>Lesão pulmonar e formação de membrana hialina.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Histórico de prematuridade.</li>
        <li>Sinais clínicos: taquipneia, gemido, retrações intercostais e cianose.</li>
        <li>Radiografia de tórax: infiltrado reticulogranular difuso e broncograma aéreo.</li>
        <li>Gasometria arterial: hipoxemia e acidose respiratória.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tratamento</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Administração de surfactante exógeno.</li>
        <li>Suporte ventilatório: CPAP ou ventilação mecânica.</li>
        <li>Monitorização contínua da oximetria e gasometria.</li>
        <li>Manutenção da temperatura e suporte nutricional.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisioterapia na SDR</h3>
      <p className="text-gray-700 mb-4">
        A fisioterapia desempenha um papel crucial no tratamento da SDR, visando otimizar a função respiratória e prevenir complicações.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium">Técnicas de higiene brônquica:</span>
          Auxiliam na remoção de secreções e prevenção de atelectasias.
        </li>
        <li>
          <span className="font-medium">Ventilação não invasiva (VNI):</span>
          CPAP nasal pode reduzir o trabalho respiratório e melhorar a oxigenação.
        </li>
        <li>
          <span className="font-medium">Posicionamento:</span>
          Decúbito ventral pode melhorar a ventilação e perfusão pulmonar.
        </li>
        <li>
          <span className="font-medium">Monitorização:</span>
          Avaliação contínua dos parâmetros respiratórios e adaptação do tratamento.
        </li>
      </ul>
    </>
  );

  const ttrnContent = (
    <>
      <p className="text-gray-700 mb-4">
        É uma condição respiratória comum em recém-nascidos, caracterizada por dificuldade na reabsorção do líquido pulmonar fetal, resultando em taquipneia (aumento da frequência respiratória).
      </p>

      <h3 className="text-xl font-semibold mb-3">Etiologia</h3>
      <p className="text-gray-700 mb-4">
        A TTRN ocorre devido à retenção de líquido pulmonar fetal nos alvéolos após o nascimento. Fatores de risco incluem cesariana (sem trabalho de parto), parto rápido, macrossomia fetal e diabetes materno.
      </p>

      <h3 className="text-xl font-semibold mb-3">Fisiopatologia</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Retenção de líquido pulmonar fetal.</li>
        <li>Diminuição da complacência pulmonar.</li>
        <li>Aumento do trabalho respiratório.</li>
        <li>Hipoxemia leve a moderada.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Taquipneia (frequência respiratória {">"} 60 rpm).</li>
        <li>Sinais de desconforto respiratório: gemido, retrações e batimento de asa nasal.</li>
        <li>Radiografia de tórax: hiperinsuflação pulmonar, trama vascular proeminente e líquido nas fissuras interlobares.</li>
        <li>Exclusão de outras causas de desconforto respiratório.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tratamento</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Suporte de oxigênio, se necessário.</li>
        <li>Monitorização dos sinais vitais e oximetria.</li>
        <li>CPAP (pressão positiva contínua nas vias aéreas) em casos mais graves.</li>
        <li>Manutenção da temperatura e suporte nutricional.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisioterapia na TTRN</h3>
      <p className="text-gray-700 mb-4">
        A fisioterapia respiratória pode auxiliar na melhora da função pulmonar e no conforto do recém-nascido com TTRN.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium">Posicionamento:</span>
          Elevar a cabeceira do berço pode facilitar a drenagem do líquido pulmonar.
        </li>
        <li>
          <span className="font-medium">Aspiração suave:</span>
          Remover o excesso de secreções nas vias aéreas superiores.
        </li>
        <li>
          <span className="font-medium">Monitorização:</span>
          Acompanhar a frequência respiratória, oximetria e sinais de desconforto.
        </li>
      </ul>
    </>
  );

  const samContent = (
    <>
      <p className="text-gray-700 mb-4">
        É uma condição respiratória grave que ocorre quando o recém-nascido aspira mecônio (fezes do bebê) para os pulmões antes, durante ou logo após o parto.
      </p>

      <h3 className="text-xl font-semibold mb-3">Etiologia</h3>
      <p className="text-gray-700 mb-4">
        A SAM está associada ao sofrimento fetal, pós-maturidade, restrição de crescimento intrauterino e outras condições que causam estresse no feto.
      </p>

      <h3 className="text-xl font-semibold mb-3">Fisiopatologia</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Obstrução das vias aéreas pelo mecônio.</li>
        <li>Irritação química e inflamação dos pulmões.</li>
        <li>Inativação do surfactante pulmonar.</li>
        <li>Hipertensão pulmonar persistente.</li>
        <li>Hipoxemia e acidose.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Presença de mecônio no líquido amniótico.</li>
        <li>Recém-nascido deprimido ao nascer.</li>
        <li>Sinais de desconforto respiratório: taquipneia, gemido, retrações e cianose.</li>
        <li>Radiografia de tórax: infiltrados pulmonares irregulares e áreas de hiperinsuflação.</li>
        <li>Gasometria arterial: hipoxemia e acidose.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tratamento</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Aspiração traqueal do mecônio, se necessário.</li>
        <li>Suporte ventilatório: CPAP ou ventilação mecânica.</li>
        <li>Administração de surfactante pulmonar.</li>
        <li>Óxido nítrico inalatório para hipertensão pulmonar.</li>
        <li>Antibióticos, se houver suspeita de infecção.</li>
        <li>Monitorização contínua dos sinais vitais e gasometria.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisioterapia na SAM</h3>
      <p className="text-gray-700 mb-4">
        A fisioterapia respiratória é essencial para melhorar a função pulmonar e reduzir as complicações da SAM.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium">Técnicas de higiene brônquica:</span>
          Auxiliam na remoção de secreções e mecônio das vias aéreas.
        </li>
        <li>
          <span className="font-medium">Ventilação não invasiva (VNI):</span>
          CPAP nasal pode melhorar a oxigenação e reduzir o trabalho respiratório.
        </li>
        <li>
          <span className="font-medium">Posicionamento:</span>
          Decúbito ventral pode melhorar a ventilação e perfusão pulmonar.
        </li>
        <li>
          <span className="font-medium">Monitorização:</span>
          Avaliação contínua dos parâmetros respiratórios e adaptação do tratamento.
        </li>
      </ul>
    </>
  );

  const hppnContent = (
    <>
      <p className="text-gray-700 mb-4">
        É uma condição grave em que a resistência vascular pulmonar permanece elevada após o nascimento, causando desvio do fluxo sanguíneo e hipoxemia.
      </p>

      <h3 className="text-xl font-semibold mb-3">Etiologia</h3>
      <p className="text-gray-700 mb-4">
        A HPPN pode ser causada por várias razões, incluindo:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Mal desenvolvimento vascular pulmonar.</li>
        <li>Vasoconstrição pulmonar persistente.</li>
        <li>Doença pulmonar parenquimatosa.</li>
        <li>Aspiração de mecônio.</li>
        <li>Hérnia diafragmática congênita.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisiopatologia</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Aumento da resistência vascular pulmonar.</li>
        <li>Desvio do fluxo sanguíneo através do forame oval e ducto arterioso.</li>
        <li>Hipoxemia grave.</li>
        <li>Acidose.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Hipoxemia desproporcional ao suporte de oxigênio.</li>
        <li>Diferença na oximetria pré e pós-ductal.</li>
        <li>Ecocardiograma: pressão arterial pulmonar elevada e desvio do fluxo sanguíneo.</li>
        <li>Exclusão de outras causas de hipoxemia.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tratamento</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Suporte ventilatório: ventilação mecânica com altas pressões.</li>
        <li>Óxido nítrico inalatório.</li>
        <li>ECMO (oxigenação por membrana extracorpórea) em casos graves.</li>
        <li>Manutenção da pressão arterial sistêmica.</li>
        <li>Correção da acidose.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisioterapia na HPPN</h3>
      <p className="text-gray-700 mb-4">
        A fisioterapia respiratória desempenha um papel importante no suporte e monitorização do recém-nascido com HPPN.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium">Otimização do suporte ventilatório:</span>
          Ajuste dos parâmetros ventilatórios para minimizar a lesão pulmonar.
        </li>
        <li>
          <span className="font-medium">Monitorização:</span>
          Avaliação contínua dos parâmetros respiratórios, gasometria e sinais de desconforto.
        </li>
        <li>
          <span className="font-medium">Posicionamento:</span>
          Decúbito ventral pode melhorar a ventilação e perfusão pulmonar.
        </li>
      </ul>
    </>
  );

  const hpivContent = (
    <>
      <p className="text-gray-700 mb-4">
        É uma hemorragia que ocorre na matriz germinativa, uma área do cérebro rica em vasos sanguíneos, comum em recém-nascidos prematuros.
      </p>

      <h3 className="text-xl font-semibold mb-3">Etiologia</h3>
      <p className="text-gray-700 mb-4">
        A HPIV está associada à fragilidade dos vasos sanguíneos na matriz germinativa, flutuações na pressão arterial, prematuridade e outros fatores de risco.
      </p>

      <h3 className="text-xl font-semibold mb-3">Fisiopatologia</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Ruptura dos vasos sanguíneos na matriz germinativa.</li>
        <li>Hemorragia para os ventrículos cerebrais.</li>
        <li>Compressão do tecido cerebral.</li>
        <li>Hidrocefalia pós-hemorrágica.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Diagnóstico</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Ultrassonografia transfontanelar: visualização da hemorragia e dilatação ventricular.</li>
        <li>Tomografia computadorizada (TC) em casos selecionados.</li>
        <li>Avaliação neurológica: sinais de irritabilidade, letargia ou convulsões.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Classificação</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Grau I: Hemorragia na matriz germinativa.</li>
        <li>Grau II: Hemorragia intraventricular sem dilatação.</li>
        <li>Grau III: Hemorragia intraventricular com dilatação.</li>
        <li>Grau IV: Hemorragia intraparenquimatosa.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Tratamento</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Medidas de suporte: manutenção da pressão arterial estável, correção da anemia e distúrbios de coagulação.</li>
        <li>Drenagem ventricular em casos de hidrocefalia progressiva.</li>
        <li>Monitorização neurológica contínua.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisioterapia na HPIV</h3>
      <p className="text-gray-700 mb-4">
        A fisioterapia desempenha um papel importante na prevenção de complicações e no acompanhamento do desenvolvimento neurológico do recém-nascido com HPIV.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium">Posicionamento:</span>
          Adequado para evitar pressão excessiva na cabeça e facilitar a drenagem venosa.
        </li>
        <li>
          <span className="font-medium">Estimulação precoce:</span>
          Promover o desenvolvimento motor e sensorial.
        </li>
        <li>
          <span className="font-medium">Monitorização:</span>
          Acompanhar o desenvolvimento neurológico e identificar precocemente sinais de atraso.
        </li>
      </ul>
    </>
  );

  const vmContent = (
    <>
      <p className="text-gray-700 mb-4">
        É um suporte de vida utilizado em recém-nascidos com insuficiência respiratória grave, que não conseguem manter uma ventilação e oxigenação adequadas por conta própria.
      </p>

      <h3 className="text-xl font-semibold mb-3">Indicações</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Apneia recorrente.</li>
        <li>Insuficiência respiratória aguda ou crônica.</li>
        <li>Hipoxemia grave (PaO2 &lt; 50 mmHg).</li>
        <li>Hipercapnia (PaCO2 &gt; 60 mmHg).</li>
        <li>Acidose respiratória (pH &lt; 7.25).</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Modalidades Ventilatórias</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Ventilação convencional:
          <ul>
            <li>Ventilação mandatória intermitente sincronizada (SIMV).</li>
            <li>Ventilação com pressão controlada (PCV).</li>
            <li>Ventilação com volume controlado (VCV).</li>
          </ul>
        </li>
        <li>Ventilação de alta frequência (VAF).</li>
        <li>Ventilação não invasiva (VNI):
          <ul>
            <li>CPAP (pressão positiva contínua nas vias aéreas).</li>
            <li>BIPAP (pressão positiva em dois níveis).</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Parâmetros Ventilatórios</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Frequência respiratória (FR).</li>
        <li>Pressão inspiratória (PIP).</li>
        <li>Pressão expiratória final positiva (PEEP).</li>
        <li>Tempo inspiratório (Ti).</li>
        <li>Fluxo.</li>
        <li>Fração inspirada de oxigênio (FiO₂).</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Complicações</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Lesão pulmonar induzida pela ventilação (VILI).</li>
        <li>Displasia broncopulmonar (DBP).</li>
        <li>Pneumotórax.</li>
        <li>Infecção pulmonar.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Fisioterapia na Ventilação Mecânica</h3>
      <p className="text-gray-700 mb-4">
        A fisioterapia respiratória desempenha um papel fundamental na otimização do suporte ventilatório, prevenção de complicações e facilitação do desmame da ventilação mecânica.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-medium">Otimização do suporte ventilatório:</span>
          Ajuste dos parâmetros ventilatórios em colaboração com a equipe médica.
        </li>
        <li>
          <span className="font-medium">Técnicas de higiene brônquica:</span>
          Auxiliam na remoção de secreções e prevenção de atelectasias.
        </li>
        <li>
          <span className="font-medium">Mobilização precoce:</span>
          Estimular o movimento e prevenir a fraqueza muscular.
        </li>
        <li>
          <span className="font-medium">Monitorização:</span>
          Avaliação contínua dos parâmetros respiratórios, gasometria e sinais de desconforto.
        </li>
      </ul>
    </>
  );

  const modalidadesVentilatoriasContent = (
    <>
      <p className="text-gray-700 mb-4">
        As modalidades ventilatórias são fundamentais no suporte respiratório de recém-nascidos com insuficiência respiratória. A escolha da modalidade depende da condição clínica do paciente, da doença de base e dos objetivos terapêuticos.
      </p>

      <h3 className="text-xl font-semibold mb-3">CPAP (Pressão Positiva Contínua nas Vias Aéreas)</h3>
      <p className="text-gray-700 mb-4">
        É uma modalidade não invasiva que mantém uma pressão positiva constante nas vias aéreas durante todo o ciclo respiratório.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li><span className="font-medium">Indicações:</span> SDR leve a moderada, apneia da prematuridade, pós-extubação.</li>
        <li><span className="font-medium">Benefícios:</span> Previne o colapso alveolar, melhora a oxigenação, reduz o trabalho respiratório.</li>
        <li><span className="font-medium">Parâmetros:</span> Pressão de 4-8 cmH₂O, FiO₂ ajustada para manter SatO₂ entre 90-94%.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Ventilação Mandatória Intermitente (IMV)</h3>
      <p className="text-gray-700 mb-4">
        Fornece um número predeterminado de respirações mecânicas por minuto, independentemente do esforço respiratório do paciente.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li><span className="font-medium">Indicações:</span> Insuficiência respiratória grave, apneia recorrente.</li>
        <li><span className="font-medium">Limitações:</span> Não sincroniza com o esforço do paciente, podendo causar desconforto e barotrauma.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Ventilação Mandatória Intermitente Sincronizada (SIMV)</h3>
      <p className="text-gray-700 mb-4">
        É uma modalidade que sincroniza as respirações mecânicas com o esforço respiratório do paciente, permitindo respirações espontâneas entre os ciclos mandatórios.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li><span className="font-medium">Indicações:</span> Insuficiência respiratória, desmame ventilatório.</li>
        <li><span className="font-medium">Benefícios:</span> Reduz o trabalho respiratório, melhora o conforto do paciente, diminui o risco de barotrauma.</li>
        <li><span className="font-medium">Funcionamento:</span> O ventilador detecta o início da inspiração do paciente e sincroniza a respiração mecânica com esse esforço.</li>
        <li><span className="font-medium">Parâmetros:</span> Frequência respiratória, volume corrente ou pressão inspiratória, PEEP, FiO₂.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Ventilação com Pressão de Suporte (PSV)</h3>
      <p className="text-gray-700 mb-4">
        Fornece um suporte pressórico durante a inspiração espontânea do paciente, aumentando o volume corrente.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li><span className="font-medium">Indicações:</span> Desmame ventilatório, fortalecimento da musculatura respiratória.</li>
        <li><span className="font-medium">Benefícios:</span> Reduz o trabalho respiratório, mantém a respiração espontânea.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Ventilação de Alta Frequência (HFOV)</h3>
      <p className="text-gray-700 mb-4">
        Utiliza frequências respiratórias muito altas (300-900 ciclos/min) com volumes correntes muito baixos.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li><span className="font-medium">Indicações:</span> Síndrome do escape de ar, HPPN, SDR grave refratária à ventilação convencional.</li>
        <li><span className="font-medium">Benefícios:</span> Reduz o risco de lesão pulmonar, melhora a eliminação de CO₂.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Volume Garantido (VG)</h3>
      <p className="text-gray-700 mb-4">
        Modalidade que ajusta automaticamente a pressão inspiratória para garantir um volume corrente predeterminado.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li><span className="font-medium">Indicações:</span> RN com complacência pulmonar variável, prevenção de volutrauma.</li>
        <li><span className="font-medium">Benefícios:</span> Reduz o risco de hipocapnia e hipercapnia, adapta-se às mudanças na mecânica pulmonar.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Papel da Fisioterapia na Ventilação Mecânica</h3>
      <p className="text-gray-700 mb-4">
        O fisioterapeuta desempenha um papel fundamental no manejo da ventilação mecânica em neonatos:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Avaliação da eficácia da ventilação através de parâmetros clínicos e gasométricos.</li>
        <li>Ajuste dos parâmetros ventilatórios em conjunto com a equipe médica.</li>
        <li>Aplicação de técnicas de higiene brônquica adaptadas ao paciente ventilado.</li>
        <li>Posicionamento adequado para otimizar a ventilação-perfusão.</li>
        <li>Prevenção de complicações associadas à ventilação mecânica.</li>
        <li>Participação ativa no processo de desmame ventilatório.</li>
      </ul>
    </>
  );

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
              <Activity size={14} className="mr-1" /> Fisioterapia Neonatal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Patologias Neonatais</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Conheça as principais patologias respiratórias que acometem recém-nascidos e o papel da fisioterapia no tratamento.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="sdr" className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-2 mb-8 overflow-x-auto">
            <TabsList className="inline-flex w-full justify-start space-x-1 overflow-x-auto">
              <TabsTrigger value="sdr" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <Lungs size={16} className="mr-2" />
                SDR
              </TabsTrigger>
              <TabsTrigger value="ttrn" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <Activity size={16} className="mr-2" />
                TTRN
              </TabsTrigger>
              <TabsTrigger value="sam" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <Stethoscope size={16} className="mr-2" />
                SAM
              </TabsTrigger>
              <TabsTrigger value="hppn" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <Heart size={16} className="mr-2" />
                HPPN
              </TabsTrigger>
              <TabsTrigger value="hpiv" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <BookOpen size={16} className="mr-2" />
                HPIV
              </TabsTrigger>
              <TabsTrigger value="vm" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <ArrowRight size={16} className="mr-2" />
                VM
              </TabsTrigger>
              <TabsTrigger value="modalidades-ventilatorias" className="px-4 py-2 data-[state=active]:bg-brand-50 data-[state=active]:text-brand-700">
                <ArrowRight size={16} className="mr-2" />
                Modalidades
              </TabsTrigger>
            </TabsList>
          </div>

          {/* SDR Content */}
          <TabsContent value="sdr">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <Lungs size={28} className="text-brand-500 mr-3" />
                  Síndrome do Desconforto Respiratório (SDR)
                </h2>
                {sdrContent}
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Taquipneia Transitória Content */}
          <TabsContent value="ttrn">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <Activity size={28} className="text-brand-500 mr-3" />
                  Taquipneia Transitória do Recém-Nascido (TTRN)
                </h2>
                {ttrnContent}
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* SAM Content */}
          <TabsContent value="sam">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <Stethoscope size={28} className="text-brand-500 mr-3" />
                  Síndrome de Aspiração de Mecônio (SAM)
                </h2>
                {samContent}
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* HPPN Content */}
          <TabsContent value="hppn">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <Heart size={28} className="text-brand-500 mr-3" />
                  Hipertensão Pulmonar Persistente Neonatal (HPPN)
                </h2>
                {hppnContent}
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* HPIV Content */}
          <TabsContent value="hpiv">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <BookOpen size={28} className="text-brand-500 mr-3" />
                  Hemorragia Periventricular/Intraventricular (HPIV)
                </h2>
                {hpivContent}
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Ventilação Mecânica Content */}
          <TabsContent value="vm">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <ArrowRight size={28} className="text-brand-500 mr-3" />
                  Ventilação Mecânica Neonatal
                </h2>
                {vmContent}
              </div>
            </AnimatedSection>
          </TabsContent>

          {/* Modalidades Ventilatórias Content */}
          <TabsContent value="modalidades-ventilatorias">
            <AnimatedSection className="bg-white rounded-xl shadow-md overflow-hidden mb-8" animation="fadeIn">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center text-gray-800">
                  <ArrowRight size={28} className="text-brand-500 mr-3" />
                  Modalidades Ventilatórias
                </h2>
                {modalidadesVentilatoriasContent}
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>

        {/* Call to Action Section */}
        <AnimatedSection animation="fadeIn" className="mb-16">
          <div className="bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4">Teste seus conhecimentos</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Pratique o que você aprendeu sobre patologias neonatais com nosso simulado interativo.
                </p>
                <Link 
                  to="/simulado" 
                  className="inline-flex items-center px-6 py-3 bg-white text-brand-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Iniciar Simulado
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Related Content */}
        <AnimatedSection animation="fadeIn">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Conteúdo Relacionado</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to="/utideo" className="block">
                <div className="p-6">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                    <Stethoscope size={24} className="text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">UTI Neonatal</h3>
                  <p className="text-gray-600">
                    Conheça as particularidades da fisioterapia em UTI Neonatal.
                  </p>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to="/ventilacao-mecanica" className="block">
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Lungs size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Ventilação Mecânica</h3>
                  <p className="text-gray-600">
                    Aprofunde seus conhecimentos sobre ventilação mecânica neonatal.
                  </p>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to="/manuseio-minimo" className="block">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Heart size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Manuseio Mínimo</h3>
                  <p className="text-gray-600">
                    Entenda a importância do manuseio mínimo em recém-nascidos prematuros.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PathologiasNeonatais;
