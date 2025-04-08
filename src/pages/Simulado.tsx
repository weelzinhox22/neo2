import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Clock, AlertCircle, CheckCircle, Repeat, X, AlertTriangle, BookOpen, Users, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from "@/components/AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: 'fácil' | 'médio' | 'difícil';
  relatedContentPath?: string;
  relatedContentTitle?: string;
}

const questionsData: Question[] = [
  {
    id: 1,
    text: "Qual é a idade gestacional de um recém-nascido pré-termo?",
    options: ["Menos de 37 semanas e 6 dias", "Entre 38 e 41 semanas", "42 semanas ou mais", "Acima de 37 semanas"],
    answer: "Menos de 37 semanas e 6 dias",
    explanation: "Recém-nascidos pré-termo são aqueles nascidos com menos de 37 semanas e 6 dias de gestação.",
    difficulty: 'fácil',
    relatedContentPath: "/desenvolvimento-embrionario",
    relatedContentTitle: "Desenvolvimento Embrionário"
  },
  {
    id: 2,
    text: "Qual é a importância da humanização na UTI Neonatal?",
    options: [
      "Apenas melhorar a aparência visual da unidade",
      "Considerar aspectos físicos, fisiológicos, emocionais e psicológicos do bebê e seus familiares",
      "Reduzir o número de profissionais necessários",
      "Diminuir o tempo de internação independente da condição clínica"
    ],
    answer: "Considerar aspectos físicos, fisiológicos, emocionais e psicológicos do bebê e seus familiares",
    explanation: "A humanização na UTI Neonatal considera não apenas os aspectos físicos e fisiológicos, mas também os emocionais e psicológicos tanto do bebê quanto de seus familiares, promovendo um ambiente acolhedor em meio à tecnologia necessária para o suporte à vida.",
    difficulty: 'fácil',
    relatedContentPath: "/uti-neo",
    relatedContentTitle: "Humanização na UTI Neonatal"
  },
  {
    id: 3,
    text: "O que é um RN-EBP?",
    options: [
      "Recém-nascido de extremo baixo peso (inferior a 1.000g)",
      "Recém-nascido com peso adequado (entre 2.500g e 3.500g)",
      "Recém-nascido de muito baixo peso (inferior a 1.500g)",
      "Recém-nascido de baixo peso (inferior a 2.000g)"
    ],
    answer: "Recém-nascido de extremo baixo peso (inferior a 1.000g)",
    explanation: "RN-EBP significa Recém-nascido de extremo baixo peso, classificação dada a bebês com peso inferior a 1.000g.",
    difficulty: 'fácil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Classificações de Recém-Nascidos"
  },
  {
    id: 4,
    text: "Quais são os objetivos da fisioterapia na UTI Neonatal?",
    options: [
      "Apenas monitorar o desenvolvimento neuropsicomotor do bebê",
      "Otimizar a função respiratória, prevenir complicações e favorecer o desmame ventilatório", 
      "Exclusivamente realizar aspiração das vias aéreas",
      "Apenas posicionar o bebê para evitar deformidades"
    ],
    answer: "Otimizar a função respiratória, prevenir complicações e favorecer o desmame ventilatório",
    explanation: "Os objetivos da fisioterapia incluem otimizar a função respiratória e as trocas gasosas, adequar o suporte ventilatório, prevenir e tratar complicações pulmonares, manter a permeabilidade das vias aéreas e favorecer o desmame da ventilação mecânica e oxigenoterapia.",
    difficulty: 'fácil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Fisioterapia na UTI Neonatal"
  },
  {
    id: 5,
    text: "O que NÃO é uma contraindicação para a Manobra de Higiene Brônquica em RNPT?",
    options: [
      "Peso inferior a 1.500g nos primeiros 3 dias de vida",
      "Risco de hemorragias intracranianas",
      "Bebê posicionado adequadamente em incubadora",
      "Instabilidade hemodinâmica"
    ],
    answer: "Bebê posicionado adequadamente em incubadora",
    explanation: "A MHB (Manobra de Higiene Brônquica) é contraindicada para RNPT com peso inferior a 1.500g nos primeiros 3 dias de vida, com risco de hemorragias intracranianas ou com instabilidade hemodinâmica. O posicionamento adequado em incubadora não é uma contraindicação.",
    difficulty: 'médio',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Manobra de Higiene Brônquica"
  },
  {
    id: 6,
    text: "Na 8ª semana de desenvolvimento embrionário, o que acontece?",
    options: [
      "Início do período fetal e presença dos primórdios de todas as estruturas internas e externas",
      "Formação dos cotovelos e do sistema vascular",
      "Implantação superficial do óvulo no endométrio",
      "O coração começa a pulsar"
    ],
    answer: "Início do período fetal e presença dos primórdios de todas as estruturas internas e externas",
    explanation: "Na 8ª semana ocorre o início do período fetal, reconhecimento dos testículos e presença dos primórdios de todas as estruturas internas e externas.",
    difficulty: 'médio',
    relatedContentPath: "/desenvolvimento-embrionario",
    relatedContentTitle: "8ª Semana do Desenvolvimento Embrionário"
  },
  {
    id: 7,
    text: "Qual é o valor normal da frequência respiratória em um recém-nascido prematuro?",
    options: ["40-50 rpm", "30-40 rpm", "20-25 rpm", "12-20 rpm"],
    answer: "40-50 rpm",
    explanation: "A frequência respiratória normal em um recém-nascido prematuro é de 40-50 rpm (respirações por minuto).",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Frequência Respiratória em Prematuros"
  },
  {
    id: 8,
    text: "O que é a Síndrome de Aspiração de Mecônio (SAM)?",
    options: [
      "Uma condição onde o RN aspira saliva durante o nascimento",
      "Um processo de desconforto respiratório precoce com colapso alveolar progressivo",
      "Uma condição onde há presença de SDR em RNs com líquido amniótico meconial ao nascimento",
      "Um edema pulmonar transitório devido à demora na reabsorção do líquido fetal"
    ],
    answer: "Uma condição onde há presença de SDR em RNs com líquido amniótico meconial ao nascimento",
    explanation: "A SAM ocorre quando há presença de SDR em RNs com líquido amniótico meconial ao nascimento. É mais comum em RNs a termo que sofreram sofrimento fetal e apresenta alta taxa de mortalidade neonatal.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Síndrome de Aspiração de Mecônio (SAM)"
  },
  {
    id: 9,
    text: "Qual técnica é contraindicada em recém-nascidos por poder causar hipoxemia, fraturas de costelas e lesões cerebrais?",
    options: ["Vibração/Vibrocompressão", "Tapotagem", "Posicionamento terapêutico", "Bag-squeezing"],
    answer: "Tapotagem",
    explanation: "Tapotagem é contraindicada, pois pode causar hipoxemia, fraturas de costelas e lesões cerebrais em recém-nascidos.",
    difficulty: 'médio',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Técnicas Contraindicadas em RNs"
  },
  {
    id: 10,
    text: "Na avaliação neonatal, qual é o perímetro cefálico normal de um recém-nascido a termo?",
    options: ["31 a 35,5 cm", "25 a 30 cm", "36 a 40 cm", "41 a 45 cm"],
    answer: "31 a 35,5 cm",
    explanation: "O perímetro cefálico normal de um recém-nascido a termo varia de 31 a 35,5 cm.",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Perímetro Cefálico Normal"
  },
  {
    id: 11,
    text: "Quais são as áreas que compõem a unidade neonatal?",
    options: [
      "AC (Alojamento Conjunto), CI (Cuidados Intermediários), UTI e ACT (Alojamento Conjunto Tardia)",
      "Apenas UTI e Berçário",
      "Maternidade, Enfermaria e Cirurgia",
      "UTI, Enfermaria e Ambulatório"
    ],
    answer: "AC (Alojamento Conjunto), CI (Cuidados Intermediários), UTI e ACT (Alojamento Conjunto Tardia)",
    explanation: "A unidade neonatal é composta por AC (Alojamento Conjunto), CI (Cuidados Intermediários), UTI (Unidade de Terapia Intensiva) e ACT (Alojamento Conjunto Tardia).",
    difficulty: 'fácil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Unidade Neonatal"
  },
  {
    id: 12,
    text: "O que são manchas mongólicas?",
    options: [
      "Petéquias traumáticas causadas pelo parto",
      "Pigmentação cinza-azulada no dorso e nas nádegas, sem importância clínica",
      "Sinais indicativos de icterícia neonatal",
      "Sinais de má-formação congênita"
    ],
    answer: "Pigmentação cinza-azulada no dorso e nas nádegas, sem importância clínica",
    explanation: "Manchas Mongólicas são pigmentação cinza-azulada no dorso e nas nádegas, sem importância clínica.",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Manchas Mongólicas"
  },
  {
    id: 13,
    text: "Durante a avaliação do recém-nascido, quais aspectos devem ser observados nos olhos?",
    options: [
      "Apenas tamanho e cor",
      "Sobrancelhas, cílios, movimentos palpebrais, edema, direção da comissura palpebral e epicanto",
      "Apenas a presença de secreções",
      "Somente o reflexo pupilar"
    ],
    answer: "Sobrancelhas, cílios, movimentos palpebrais, edema, direção da comissura palpebral e epicanto",
    explanation: "Na avaliação dos olhos do RN, deve-se observar sobrancelhas, cílios, movimentos palpebrais, edema, direção da comissura palpebral e epicanto.",
    difficulty: 'médio',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Avaliação dos Olhos do RN"
  },
  {
    id: 14,
    text: "Qual é a definição de natimorto?",
    options: [
      "Bebê que nasce prematuro",
      "Bebê com malformação congênita",
      "Feto que nasceu morto",
      "Bebê que morre nas primeiras 24 horas de vida"
    ],
    answer: "Feto que nasceu morto",
    explanation: "Natimorto é definido como o feto que nasceu morto.",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Definição de Natimorto"
  },
  {
    id: 15,
    text: "Na relação entre Perímetro Cefálico (PC) e Perímetro Torácico (PT) em um RN prematuro:",
    options: ["PC = PT", "PC < PT", "PC > PT", "Não há relação entre PC e PT"],
    answer: "PC > PT",
    explanation: "Em um recém-nascido prematuro, o Perímetro Cefálico (PC) é maior que o Perímetro Torácico (PT).",
    difficulty: 'médio',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Relação PC e PT em Prematuros"
  },
  {
    id: 16,
    text: "Qual posicionamento é contraindicado em RN com instabilidade hemodinâmica?",
    options: ["Decúbito lateral", "Posição prona", "Trendelemburg", "Decúbito dorsal"],
    answer: "Trendelemburg",
    explanation: "O posicionamento de Trendelemburg é contraindicado em RN com instabilidade hemodinâmica e aumento da pressão intracraniana, pois pode aumentar a pressão intracraniana e o refluxo gastroesofágico, elevando o risco de broncoaspiração e pneumonia aspirativa.",
    difficulty: 'médio',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Posicionamento Contraindicado em RN"
  },
  {
    id: 17,
    text: "O que é a apneia da prematuridade?",
    options: [
      "Pausas respiratórias de mais de 20 segundos, acompanhadas de bradicardia e/ou cianose",
      "Respiração rápida e superficial",
      "Dificuldade na expansão torácica",
      "Hiperventilação causada pelo estresse do nascimento"
    ],
    answer: "Pausas respiratórias de mais de 20 segundos, acompanhadas de bradicardia e/ou cianose",
    explanation: "A apneia da prematuridade se caracteriza por pausas respiratórias de mais de 20 segundos, acompanhadas de bradicardia e/ou cianose.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Apneia da Prematuridade"
  },
  {
    id: 18,
    text: "Qual é a função do surfactante pulmonar?",
    options: [
      "Aumentar a tensão superficial alveolar",
      "Diminuir a tensão superficial alveolar, prevenindo o colapso",
      "Estimular o centro respiratório",
      "Promover secreção de muco"
    ],
    answer: "Diminuir a tensão superficial alveolar, prevenindo o colapso",
    explanation: "O surfactante pulmonar tem a função de diminuir a tensão superficial alveolar, prevenindo o colapso dos alvéolos durante a expiração.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Função do Surfactante Pulmonar"
  },
  {
    id: 19,
    text: "Quais são os valores normais da frequência cardíaca em um recém-nascido?",
    options: [
      "80-170 bpm, média 140 bpm",
      "60-100 bpm, média 80 bpm",
      "100-200 bpm, média 150 bpm",
      "40-60 bpm, média 50 bpm"
    ],
    answer: "80-170 bpm, média 140 bpm",
    explanation: "A frequência cardíaca normal em um recém-nascido varia de 80-170 batimentos por minuto, com média de 140 bpm.",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Frequência Cardíaca Normal em RN"
  },
  {
    id: 20,
    text: "Em que semana do desenvolvimento embrionário ocorre a formação do tubo neural?",
    options: [
      "2ª semana",
      "3ª semana",
      "6ª semana",
      "9ª semana"
    ],
    answer: "3ª semana",
    explanation: "A formação do tubo neural ocorre durante a 3ª semana do desenvolvimento embrionário, um processo conhecido como neurulação.",
    difficulty: 'médio',
    relatedContentPath: "/desenvolvimento-embrionario",
    relatedContentTitle: "Formação do Tubo Neural"
  },
  {
    id: 21,
    text: "Qual é a causa principal da Síndrome do Desconforto Respiratório (SDR) em prematuros?",
    options: [
      "Infecção do trato respiratório",
      "Deficiência de surfactante pulmonar",
      "Aspiração de mecônio",
      "Malformação cardíaca congênita"
    ],
    answer: "Deficiência de surfactante pulmonar",
    explanation: "A SDR é causada principalmente pela deficiência de surfactante pulmonar, que leva à instabilidade alveolar e atelectasia progressiva.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Síndrome do Desconforto Respiratório (SDR)"
  },
  {
    id: 22,
    text: "Quais são os sinais clínicos da enterocolite necrosante em recém-nascidos?",
    options: [
      "Febre e letargia",
      "Distenção abdominal, resíduo gástrico bilioso e sangue nas fezes",
      "Apenas desidratação e hipotermia",
      "Hiperglicemia e diurese aumentada"
    ],
    answer: "Distenção abdominal, resíduo gástrico bilioso e sangue nas fezes",
    explanation: "Os sinais clínicos da enterocolite necrosante incluem distenção abdominal, resíduo gástrico bilioso e sangue nas fezes, além de outros sinais sistêmicos como letargia e instabilidade térmica.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Enterocolite Necrosante"
  },
  {
    id: 23,
    text: "Qual o principal objetivo da postura de 'ninho' ou 'contenção' em recém-nascidos prematuros?",
    options: [
      "Facilitar os procedimentos médicos",
      "Promover organização neuropsicomotora e conforto",
      "Reduzir o contato com os pais",
      "Aumentar o desconforto para avaliação da dor"
    ],
    answer: "Promover organização neuropsicomotora e conforto",
    explanation: "A postura de ninho ou contenção visa promover organização neuropsicomotora, conforto e desenvolvimento adequado, simulando o ambiente intrauterino.",
    difficulty: 'fácil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Postura de 'Ninho' ou 'Contenção'"
  },
  {
    id: 24,
    text: "Como se caracteriza a taquipneia transitória do recém-nascido?",
    options: [
      "Frequência respiratória aumentada que persiste por meses",
      "Frequência respiratória aumentada que resolve em 24-72 horas após o nascimento",
      "Episódios de apneia frequentes nas primeiras horas de vida",
      "Esforço respiratório intenso com cianose grave"
    ],
    answer: "Frequência respiratória aumentada que resolve em 24-72 horas após o nascimento",
    explanation: "A taquipneia transitória do recém-nascido caracteriza-se por frequência respiratória aumentada que tipicamente se resolve em 24-72 horas após o nascimento.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Taquipneia Transitória do RN"
  },
  {
    id: 25,
    text: "Qual técnica fisioterapêutica é mais indicada para melhorar a oxigenação em um recém-nascido prematuro estável?",
    options: [
      "Tapotagem",
      "Posicionamento em prona",
      "Aspiração de vias aéreas a cada 30 minutos",
      "Exercícios passivos intensos"
    ],
    answer: "Posicionamento em prona",
    explanation: "O posicionamento em prona melhora a oxigenação por otimizar a relação ventilação-perfusão, aumentar o volume pulmonar e diminuir a assincronia toracoabdominal.",
    difficulty: 'médio',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Posicionamento em Prona"
  },
  {
    id: 26,
    text: "Em que consiste o método Canguru?",
    options: [
      "Posicionamento do RN em decúbito ventral sobre o tórax da mãe/pai, em contato pele a pele",
      "Técnica de fisioterapia respiratória para RNs prematuros",
      "Protocolo medicamentoso para estimular o ganho de peso",
      "Modelo de incubadora específico para prematuros extremos"
    ],
    answer: "Posicionamento do RN em decúbito ventral sobre o tórax da mãe/pai, em contato pele a pele",
    explanation: "O método Canguru consiste no posicionamento do recém-nascido em decúbito ventral sobre o tórax da mãe ou pai, em contato pele a pele, promovendo diversos benefícios fisiológicos e psicológicos.",
    difficulty: 'fácil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Método Canguru"
  },
  {
    id: 27,
    text: "O que é a displasia broncopulmonar (DBP)?",
    options: [
      "Uma malformação congênita pulmonar que impede o desenvolvimento normal",
      "Uma doença pulmonar crônica resultante da prematuridade e ventilação mecânica prolongada",
      "Uma infecção viral que afeta principalmente os brônquios",
      "Uma complicação temporária que se resolve em poucas semanas"
    ],
    answer: "Uma doença pulmonar crônica resultante da prematuridade e ventilação mecânica prolongada",
    explanation: "A displasia broncopulmonar é uma doença pulmonar crônica que resulta da combinação de imaturidade pulmonar, barotrauma, volutrauma, toxicidade pelo oxigênio e processos inflamatórios em prematuros que necessitaram de ventilação mecânica prolongada.",
    difficulty: 'difícil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Displasia Broncopulmonar (DBP)"
  },
  {
    id: 28,
    text: "Quais são os principais reflexos primitivos avaliados no recém-nascido?",
    options: [
      "Reflexo de Babkin e reflexo de Pavlov",
      "Reflexo de Moro, sucção, preensão palmar e plantar, e reflexo de busca",
      "Apenas reflexo de Magnus-Klein e reflexo oculocardíaco",
      "Reflexo de Gordon e reflexo de Hoffmann"
    ],
    answer: "Reflexo de Moro, sucção, preensão palmar e plantar, e reflexo de busca",
    explanation: "Os principais reflexos primitivos avaliados no recém-nascido incluem o reflexo de Moro, sucção, preensão palmar e plantar, e reflexo de busca, além de outros como o reflexo tônico-cervical assimétrico.",
    difficulty: 'médio',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Reflexos Primitivos"
  },
  {
    id: 29,
    text: "Qual o principal objetivo da aspiração de vias aéreas em neonatos?",
    options: [
      "Estimular o choro e melhorar a capacidade pulmonar",
      "Manter a permeabilidade das vias aéreas, removendo secreções",
      "Induzir o reflexo de tosse para treino muscular",
      "Prevenir infecções do trato respiratório superior"
    ],
    answer: "Manter a permeabilidade das vias aéreas, removendo secreções",
    explanation: "O principal objetivo da aspiração de vias aéreas é manter a permeabilidade, removendo secreções para facilitar as trocas gasosas e prevenir obstruções.",
    difficulty: 'fácil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Aspiração de Vias Aéreas"
  },
  {
    id: 30,
    text: "Qual parâmetro NÃO é avaliado na escala de Apgar?",
    options: [
      "Frequência cardíaca",
      "Tônus muscular",
      "Temperatura corporal",
      "Irritabilidade reflexa"
    ],
    answer: "Temperatura corporal",
    explanation: "A escala de Apgar avalia cinco parâmetros: frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e coloração da pele. A temperatura corporal não faz parte desta avaliação.",
    difficulty: 'médio',
    relatedContentPath: "/apgar",
    relatedContentTitle: "Escala de Apgar"
  },
  {
    id: 31,
    text: "Qual técnica de reexpansão pulmonar é frequentemente aplicada em recém-nascidos sob ventilação mecânica?",
    options: [
      "Espirometria de incentivo",
      "Bag squeezing (hiperinsuflação com balão)",
      "Respiração diafragmática",
      "Exercícios de expansão costal"
    ],
    answer: "Bag squeezing (hiperinsuflação com balão)",
    explanation: "A técnica de bag squeezing ou hiperinsuflação com balão é frequentemente aplicada em neonatos sob ventilação mecânica para promover reexpansão pulmonar e mobilizar secreções.",
    difficulty: 'difícil',
    relatedContentPath: "/utideo",
    relatedContentTitle: "Técnicas de Reexpansão Pulmonar"
  },
  {
    id: 32,
    text: "O que significa CPAP nasal na assistência respiratória neonatal?",
    options: [
      "Cateter Pulmonar Arterial Periférico",
      "Compressão Pneumática para Apneia Precoce",
      "Pressão Positiva Contínua nas Vias Aéreas",
      "Controle Pulmonar Automático Pressurizado"
    ],
    answer: "Pressão Positiva Contínua nas Vias Aéreas",
    explanation: "CPAP significa Continuous Positive Airway Pressure (Pressão Positiva Contínua nas Vias Aéreas), um modo de suporte ventilatório não-invasivo que mantém uma pressão positiva nas vias aéreas durante todo o ciclo respiratório.",
    difficulty: 'médio',
    relatedContentPath: "/utideo",
    relatedContentTitle: "CPAP Nasal"
  },
  {
    id: 33,
    text: "Quais são as principais causas de apneia em recém-nascidos prematuros?",
    options: [
      "Apenas infecções respiratórias",
      "Imaturidade do centro respiratório, refluxo gastroesofágico e termorregulação inadequada",
      "Somente malformações congênitas",
      "Exclusivamente anemia e hipocalcemia"
    ],
    answer: "Imaturidade do centro respiratório, refluxo gastroesofágico e termorregulação inadequada",
    explanation: "As principais causas de apneia em prematuros são imaturidade do centro respiratório, refluxo gastroesofágico e termorregulação inadequada, além de outros fatores como sepse, anemia e distúrbios metabólicos.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Causas de Apneia em Prematuros"
  },
  {
    id: 34,
    text: "Qual é a principal causa da persistência do canal arterial (PCA) em prematuros?",
    options: [
      "Malformação cardíaca congênita",
      "Imaturidade da resposta vascular à elevação do oxigênio após o nascimento",
      "Infecção no miocárdio",
      "Excesso de prostaglandinas sintéticas"
    ],
    answer: "Imaturidade da resposta vascular à elevação do oxigênio após o nascimento",
    explanation: "A principal causa da PCA em prematuros é a imaturidade da resposta vascular à elevação do oxigênio após o nascimento, o que normalmente provocaria o fechamento do canal arterial em recém-nascidos a termo.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Persistência do Canal Arterial (PCA)"
  },
  {
    id: 35,
    text: "Qual condição pode causar alterações no desenvolvimento neuropsicomotor em prematuros extremos?",
    options: [
      "Hemorragia peri-intraventricular",
      "Icterícia fisiológica leve",
      "Coto umbilical úmido",
      "Dermatite de fralda"
    ],
    answer: "Hemorragia peri-intraventricular",
    explanation: "A hemorragia peri-intraventricular é uma condição grave que pode causar alterações significativas no desenvolvimento neuropsicomotor de prematuros extremos.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Hemorragia Peri-Intraventricular"
  },
  {
    id: 36,
    text: "Quais são os princípios do Manuseio Mínimo na UTI Neonatal?",
    options: [
      "Manipular o RN o máximo possível para estimular seu desenvolvimento",
      "Agrupar procedimentos e respeitar períodos de sono do RN",
      "Realizar procedimentos apenas durante o dia",
      "Estimular o RN constantemente para evitar atrasos no desenvolvimento"
    ],
    answer: "Agrupar procedimentos e respeitar períodos de sono do RN",
    explanation: "Os princípios do Manuseio Mínimo incluem agrupar procedimentos para reduzir o número de manipulações, respeitar os períodos de sono e o estado comportamental do RN, realizar procedimentos com técnica adequada e delicada, e monitorar sinais de estresse durante os procedimentos.",
    difficulty: 'médio',
    relatedContentPath: "/uti-neo",
    relatedContentTitle: "Manuseio Mínimo"
  },
  {
    id: 37,
    text: "Quais são os benefícios neurológicos do Manuseio Mínimo em recém-nascidos prematuros?",
    options: [
      "Apenas melhora no ganho de peso",
      "Melhor organização comportamental, redução do estresse e melhor qualidade do sono",
      "Somente redução de infecções hospitalares",
      "Apenas diminuição do tempo de internação"
    ],
    answer: "Melhor organização comportamental, redução do estresse e melhor qualidade do sono",
    explanation: "Os benefícios neurológicos do Manuseio Mínimo incluem melhor organização comportamental, redução do estresse, melhor qualidade do sono, desenvolvimento neurológico mais adequado e redução de sequelas a longo prazo.",
    difficulty: 'médio',
    relatedContentPath: "/uti-neo",
    relatedContentTitle: "Benefícios do Manuseio Mínimo"
  },
  {
    id: 38,
    text: "Qual intervenção é inadequada durante uma crise convulsiva neonatal?",
    options: [
      "Posicionamento em decúbito lateral",
      "Tentativa de restrição forçada dos movimentos",
      "Monitorização dos parâmetros vitais",
      "Administração de medicamentos conforme prescrição"
    ],
    answer: "Tentativa de restrição forçada dos movimentos",
    explanation: "Durante uma crise convulsiva neonatal, a tentativa de restrição forçada dos movimentos é inadequada e pode causar lesões. A abordagem correta inclui posicionamento seguro, monitorização e administração de medicamentos conforme prescrição médica.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Crise Convulsiva Neonatal"
  },
  {
    id: 39,
    text: "Como se caracteriza a genitália de um recém-nascido do sexo feminino a termo?",
    options: [
      "Pequenos lábios e clitóris cobertos pelos grandes lábios",
      "Pequenos lábios e clitóris proeminentes, ultrapassando os grandes lábios",
      "Ausência de desenvolvimento dos pequenos lábios",
      "Grandes lábios completamente fundidos na linha média"
    ],
    answer: "Pequenos lábios e clitóris cobertos pelos grandes lábios",
    explanation: "Na recém-nascida a termo, os pequenos lábios e o clitóris são normalmente cobertos pelos grandes lábios, diferente do que ocorre em prematuras, nas quais os pequenos lábios e o clitóris são mais proeminentes.",
    difficulty: 'médio',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Genitália de RN Feminino a Termo"
  },
  {
    id: 40,
    text: "Qual é a técnica de fisioterapia respiratória mais adequada para recém-nascidos com Taquipneia Transitória?",
    options: [
      "Tapotagem vigorosa",
      "Aspiração frequente de vias aéreas",
      "Posicionamento adequado e técnicas de desobstrução brônquica leves",
      "Exercícios de resistência respiratória"
    ],
    answer: "Posicionamento adequado e técnicas de desobstrução brônquica leves",
    explanation: "Para recém-nascidos com Taquipneia Transitória, o posicionamento adequado e técnicas leves de desobstrução brônquica são mais apropriados, evitando manobras agressivas que podem exacerbar o desconforto respiratório.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Taquipneia Transitória do RN"
  },
  {
    id: 41,
    text: "Como é administrado o surfactante exógeno em prematuros com SDR?",
    options: [
      "Via oral, com alimentação",
      "Intravenoso, por acesso periférico",
      "Instilação direta na traqueia",
      "Inalação com nebulizador"
    ],
    answer: "Instilação direta na traqueia",
    explanation: "O surfactante exógeno é administrado através de instilação direta na traqueia, geralmente por meio do tubo endotraqueal, para atingir diretamente os alvéolos pulmonares.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Administração de Surfactante"
  },
  {
    id: 42,
    text: "O que é a Ventilação Mandatória Intermitente Sincronizada (SIMV)?",
    options: [
      "Técnica de fisioterapia respiratória manual",
      "Modalidade ventilatória que sincroniza respirações mecânicas com o esforço respiratório do paciente",
      "Método de monitorização da saturação de oxigênio",
      "Protocolo de desmame da oxigenoterapia"
    ],
    answer: "Modalidade ventilatória que sincroniza respirações mecânicas com o esforço respiratório do paciente",
    explanation: "A Ventilação Mandatória Intermitente Sincronizada (SIMV) é uma modalidade ventilatória que permite ao paciente respirar espontaneamente entre os ciclos mandatórios do ventilador, sincronizando as respirações mecânicas com o esforço respiratório do paciente, o que reduz o trabalho respiratório e melhora o conforto.",
    difficulty: 'médio',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Modalidades Ventilatórias"
  },
  {
    id: 43,
    text: "O que é a Escala NIPS?",
    options: [
      "Sistema de pontuação para cólicas em recém-nascidos",
      "Escala de avaliação da dor em neonatos",
      "Método de classificação do peso ao nascer",
      "Protocolo de avaliação nutricional para prematuros"
    ],
    answer: "Escala de avaliação da dor em neonatos",
    explanation: "A Escala NIPS (Neonatal Infant Pain Scale) é uma ferramenta validada para avaliação da dor em neonatos, baseada em parâmetros como expressão facial, choro, padrão respiratório, movimentos de braços e pernas, e estado de alerta.",
    difficulty: 'médio',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Avaliação da Dor em Neonatos"
  },
  {
    id: 44,
    text: "O que é a Persistência da Circulação Fetal?",
    options: [
      "Condição normal em recém-nascidos a termo",
      "Falha na transição da circulação fetal para a neonatal após o nascimento",
      "Condição que se resolve espontaneamente nas primeiras horas de vida",
      "Síndrome exclusiva de prematuros extremos"
    ],
    answer: "Falha na transição da circulação fetal para a neonatal após o nascimento",
    explanation: "A Persistência da Circulação Fetal (ou Hipertensão Pulmonar Persistente do Recém-Nascido) é caracterizada pela falha na transição da circulação fetal para a neonatal após o nascimento, mantendo o shunt direita-esquerda pelo canal arterial e/ou forame oval.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Persistência da Circulação Fetal"
  },
  {
    id: 45,
    text: "Qual a frequência respiratória normal em um recém-nascido a termo?",
    options: [
      "30-60 irpm",
      "12-20 irpm",
      "60-80 irpm",
      "15-25 irpm"
    ],
    answer: "30-60 irpm",
    explanation: "A frequência respiratória normal em um recém-nascido a termo varia de 30 a 60 incursões respiratórias por minuto (irpm).",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Padrões Respiratórios do RN"
  },
  {
    id: 46,
    text: "O que é a retinopatia da prematuridade?",
    options: [
      "Condição temporária que afeta a córnea dos prematuros",
      "Doença vascular proliferativa da retina que pode levar à cegueira",
      "Infecção bacteriana do trato ocular em prematuros",
      "Alteração congênita do nervo óptico"
    ],
    answer: "Doença vascular proliferativa da retina que pode levar à cegueira",
    explanation: "A retinopatia da prematuridade é uma doença vascular proliferativa da retina imatura que pode evoluir para descolamento de retina e cegueira, sendo mais comum em prematuros extremos e expostos a altas concentrações de oxigênio.",
    difficulty: 'difícil',
    relatedContentPath: "/patologias-neonatais",
    relatedContentTitle: "Retinopatia da Prematuridade"
  },
  {
    id: 47,
    text: "O que é o vérnix caseoso?",
    options: [
      "Uma secreção patológica da pele do recém-nascido",
      "Substância esbranquiçada e gordurosa que protege a pele do feto",
      "Um tipo de infecção cutânea neonatal",
      "A primeira fezes do recém-nascido"
    ],
    answer: "Substância esbranquiçada e gordurosa que protege a pele do feto",
    explanation: "O vérnix caseoso é uma substância esbranquiçada e gordurosa que recobre a pele do feto, protegendo-a durante a vida intrauterina e facilitando a passagem pelo canal de parto.",
    difficulty: 'fácil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Características da Pele do RN"
  },
  {
    id: 48,
    text: "Quais são os componentes avaliados na escala Silverman-Andersen?",
    options: [
      "Apenas frequência respiratória e saturação de oxigênio",
      "Movimentos torácicos e abdominais, retração intercostal, retração xifoide e batimento de asa nasal",
      "Apenas ausculta pulmonar e frequência cardíaca",
      "Somente temperatura corporal e coloração da pele"
    ],
    answer: "Movimentos torácicos e abdominais, retração intercostal, retração xifoide e batimento de asa nasal",
    explanation: "A escala Silverman-Andersen avalia cinco componentes: movimentos torácicos e abdominais, retração intercostal, retração xifoide, batimento de asa nasal e gemido expiratório, sendo uma ferramenta importante para avaliar o desconforto respiratório em recém-nascidos.",
    difficulty: 'difícil',
    relatedContentPath: "/avaliacao-neonatal",
    relatedContentTitle: "Avaliação Respiratória"
  },
  {
    id: 49,
    text: "Qual é o papel do fisioterapeuta na humanização da UTI Neonatal?",
    options: [
      "Apenas realizar técnicas respiratórias",
      "Aplicar técnicas que respeitem o desenvolvimento e conforto do RN e orientar os pais",
      "Somente monitorar os sinais vitais",
      "Apenas realizar a aspiração de vias aéreas"
    ],
    answer: "Aplicar técnicas que respeitem o desenvolvimento e conforto do RN e orientar os pais",
    explanation: "O fisioterapeuta contribui para a humanização da assistência neonatal aplicando técnicas que respeitem o desenvolvimento e conforto do RN, orientando os pais sobre posicionamento e manipulação adequada, participando de programas de seguimento após a alta hospitalar e promovendo o vínculo entre pais e bebê durante os atendimentos.",
    difficulty: 'médio',
    relatedContentPath: "/uti-neo",
    relatedContentTitle: "Papel do Fisioterapeuta na Humanização"
  },
  {
    id: 50,
    text: "Quais sinais de estresse devem ser monitorados pelo fisioterapeuta durante a manipulação do recém-nascido?",
    options: [
      "Apenas alterações na frequência cardíaca",
      "Sinais fisiológicos, motores e comportamentais como alteração de frequência cardíaca, hiperextensão de membros e choro",
      "Somente a presença de choro",
      "Apenas alterações na temperatura corporal"
    ],
    answer: "Sinais fisiológicos, motores e comportamentais como alteração de frequência cardíaca, hiperextensão de membros e choro",
    explanation: "O fisioterapeuta deve monitorar sinais de estresse durante a manipulação do RN, incluindo sinais fisiológicos (alteração da frequência cardíaca e respiratória, queda de saturação), sinais motores (hiperextensão de membros, dedos em leque, hipertonia) e sinais comportamentais (choro, agitação, irritabilidade).",
    difficulty: 'médio',
    relatedContentPath: "/uti-neo",
    relatedContentTitle: "Sinais de Estresse no RN"
  },
];

const Simulado = () => {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(3000); // 50 min = 3000 seconds
  const [attemptToLeave, setAttemptToLeave] = useState(false);
  const [userCount, setUserCount] = useState(Math.floor(Math.random() * 30) + 15);
  const [activeTab, setActiveTab] = useState<'todas' | 'corretas' | 'incorretas'>('todas');
  const intervalRef = useRef<number | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5).slice(0, 50);
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    if (started && !finished) {
      intervalRef.current = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setFinished(true);
            toast({
              title: "Tempo esgotado!",
              description: "Seu tempo acabou. Verificando suas respostas...",
              variant: "destructive"
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000) as unknown as number;
      
      const userCountInterval = window.setInterval(() => {
        setUserCount(prev => {
          const change = Math.random() > 0.5 ? 1 : -1;
          const newCount = prev + change;
          return newCount > 10 ? newCount : 11;
        });
      }, 5000);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        clearInterval(userCountInterval);
      };
    }
  }, [started, finished, toast]);
  
  // Prevent users from leaving the page during the test
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (started && !finished) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Also handle navigation within the app
    const handlePopState = () => {
      if (started && !finished) {
        setAttemptToLeave(true);
        // Prevent default navigation behavior
        window.history.pushState(null, '', window.location.pathname);
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Create an initial history entry to catch back button presses
    window.history.pushState(null, '', window.location.pathname);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [started, finished]);

  // This function hijacks navigation attempts when the test is active
  useEffect(() => {
    if (started && !finished) {
      // Create a fake history state to prevent immediate navigation
      window.history.pushState(null, '', window.location.pathname);
      
      const handleNavigation = () => {
        // If user tries to navigate, show confirmation dialog and prevent navigation
        window.history.pushState(null, '', window.location.pathname);
        setAttemptToLeave(true);
      };
      
      window.addEventListener('popstate', handleNavigation);
      
      return () => window.removeEventListener('popstate', handleNavigation);
    }
  }, [started, finished]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStartSimulado = () => {
    setStarted(true);
    // Create a fake history state to enable back button interception
    window.history.pushState(null, '', window.location.pathname);
    toast({
      title: "Simulado iniciado!",
      description: "Você tem 50 minutos para completar o teste. Boa sorte!",
    });
  };

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const handleNextQuestion = () => {
    // Verificar se a questão atual foi respondida
    if (!selectedAnswers[currentQuestionIndex]) {
      toast({
        title: "Atenção!",
        description: "Você precisa selecionar uma resposta antes de avançar.",
        variant: "destructive"
      });
      return;
    }
    
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleFinishSimulado();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinishSimulado = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFinished(true);
    
    const answeredCount = Object.keys(selectedAnswers).length;
    if (answeredCount < shuffledQuestions.length) {
      toast({
        title: "Atenção!",
        description: `Você deixou ${shuffledQuestions.length - answeredCount} questões sem resposta.`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Simulado finalizado!",
        description: "Parabéns! Verificando suas respostas...",
      });
    }
  };

  const handleTryAgain = () => {
    setStarted(false);
    setFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeRemaining(3000); // Reset to 50 minutes
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5).slice(0, 50);
    setShuffledQuestions(shuffled);
    setAttemptToLeave(false);
  };

  const calculateResults = () => {
    let correctCount = 0;
    for (let i = 0; i < shuffledQuestions.length; i++) {
      if (selectedAnswers[i] === shuffledQuestions[i].answer) {
        correctCount++;
      }
    }
    const results = {
      total: shuffledQuestions.length,
      correct: correctCount,
      percentage: Math.round((correctCount / shuffledQuestions.length) * 100)
    };
    
    return results;
  };

  const isQuestionAnswered = (index: number) => {
    return selectedAnswers[index] !== undefined;
  };

  const handleCancelLeave = () => {
    setAttemptToLeave(false);
  };

  const handleConfirmLeave = () => {
    setAttemptToLeave(false);
    handleFinishSimulado();
    // After confirming, allow navigation
    navigate('/');
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const results = finished ? calculateResults() : null;

  // Aprimorar o tratamento da navegação para garantir que a prova encerre
  useEffect(() => {
    // Função para encerrar a prova ao sair
    const handleWindowClose = () => {
      if (started && !finished) {
        handleFinishSimulado();
      }
    };

    // Interceptar tentativas de navegação
    const interceptNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName === 'A' || target.closest('a');
      
      if (isLink && started && !finished) {
        e.preventDefault();
        setAttemptToLeave(true);
      }
    };
    
    // Monitorar cliques em links
    document.addEventListener('click', interceptNavigation);
    
    // Monitorar fechamento de janela/aba
    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('unload', handleWindowClose);
    
    // Usar o evento locationchange para detectar mudanças de rota
    const handleLocationChange = () => {
      if (started && !finished) {
        handleFinishSimulado();
      }
    };
    
    // Criar evento personalizado para mudanças de localização
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      document.removeEventListener('click', interceptNavigation);
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('unload', handleWindowClose);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, [started, finished, handleFinishSimulado, navigate]);

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-gray-50 to-white">
      {started && !finished && (
        <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md p-3 md:p-4 mb-6 border-b border-gray-100 z-50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">{userCount} estudantes online</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100/80 px-4 py-2 rounded-lg border border-gray-200">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                <span className={`font-bold ${timeRemaining < 300 ? 'text-red-500 animate-pulse' : 'text-gray-800'}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <div className="hidden md:block w-32">
                <Progress value={(currentQuestionIndex + 1) / shuffledQuestions.length * 100} className="h-2.5" />
              </div>
              <span className="font-medium text-gray-700">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span>
              <Button 
                variant="destructive" 
                size="sm"
                onClick={handleFinishSimulado}
                className="ml-2 hidden md:flex"
              >
                <X className="h-4 w-4 mr-1" /> Encerrar
              </Button>
            </div>
          </div>
        </div>
      )}

      <AnimatedSection>
        {!started && !finished && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-4xl mx-auto mt-8 mb-8 shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl pb-6">
              <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl md:text-3xl font-bold">Simulado - Neonatologia</CardTitle>
                  <motion.div 
                    className="flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                  <Users size={16} />
                  {userCount} estudantes online
                  </motion.div>
              </div>
              <CardDescription className="text-white/90 text-base">
                Teste seus conhecimentos em neonatologia com este simulado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6 md:p-8">
                <motion.div 
                  className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r backdrop-blur-sm"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                <div className="flex gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mb-3" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Instruções:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>O simulado contém 50 questões de múltipla escolha</li>
                      <li>Você terá 50 minutos para completar o teste</li>
                      <li>Cada questão possui apenas uma resposta correta</li>
                      <li>É possível navegar entre as questões</li>
                      <li>O teste será finalizado automaticamente quando o tempo acabar</li>
                      <li>Não atualize ou saia da página durante o teste</li>
                      <li>Se tentar sair da página, o simulado será encerrado</li>
                    </ul>
                  </div>
                </div>
                </motion.div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                  {[
                    { icon: <Clock className="h-7 w-7 text-blue-600" />, text: "50 minutos", color: "blue" },
                    { icon: <CheckCircle className="h-7 w-7 text-green-600" />, text: "50 questões", color: "green" },
                    { icon: <BookOpen className="h-7 w-7 text-purple-600" />, text: "Conteúdo de estudo", color: "purple" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + index * 0.1,
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`rounded-full bg-${item.color}-100/80 p-4 mb-3 backdrop-blur-sm`}>
                        {item.icon}
                  </div>
                      <p className="font-medium text-gray-700">{item.text}</p>
                    </motion.div>
                  ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center p-6 md:p-8 pt-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
              <Button 
                onClick={handleStartSimulado} 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-10 py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/20"
              >
                Iniciar Simulado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
                </motion.div>
            </CardFooter>
          </Card>
          </motion.div>
        )}
        
        {started && !finished && currentQuestion && (
          <motion.div 
            className="max-w-4xl mx-auto mt-20 px-4" // Ajustado o margin-top para acomodar o cabeçalho fixo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {attemptToLeave && (
              <motion.div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="w-full max-w-md animate-in fade-in duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-center flex flex-col items-center">
                      <AlertCircle className="h-12 w-12 text-amber-500 mb-3" />
                      Deseja realmente sair?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="text-center text-gray-600">
                      Se sair agora, seu progresso será perdido e o simulado será finalizado.
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    <Button 
                      variant="outline" 
                      onClick={handleCancelLeave}
                      className="w-full sm:w-auto"
                    >
                      Continuar Prova
                    </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                    <Button 
                      variant="destructive" 
                      onClick={handleConfirmLeave}
                      className="w-full sm:w-auto"
                    >
                      Finalizar Agora
                    </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-8 shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-xl pb-6">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl md:text-2xl font-bold">
                      Questão {currentQuestionIndex + 1}
                    </CardTitle>
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                      {currentQuestion.difficulty}
                    </Badge>
                  </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-5 md:pt-6">
                <div className="space-y-4">
                  {/* Add the question text here */}
                  <div className="text-gray-800 font-medium text-lg mb-6 pb-4 border-b border-gray-100">
                    {currentQuestion.text}
                  </div>
                  {currentQuestion.options.map((option, idx) => (
                      <motion.div 
                      key={idx}
                      className={`flex items-start space-x-4 p-5 rounded-lg border-2 transition-all cursor-pointer
                        ${selectedAnswers[currentQuestionIndex] === option 
                          ? 'bg-blue-50 border-blue-500 shadow-sm' 
                          : 'hover:bg-gray-50 border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleSelectAnswer(option)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: idx * 0.1,
                          type: "spring", 
                          stiffness: 300, 
                          damping: 15 
                        }}
                    >
                      <Checkbox 
                        checked={selectedAnswers[currentQuestionIndex] === option}
                        onCheckedChange={() => handleSelectAnswer(option)}
                        className="mt-0.5"
                      />
                      <label 
                        className="flex-grow text-gray-700 cursor-pointer select-none"
                        onClick={(e) => e.preventDefault()}
                      >
                        {option}
                      </label>
                      </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 md:p-8 pt-4 md:pt-5 border-t bg-gray-50">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}  
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15 
                    }}
                  >
                <Button 
                  variant="outline" 
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center px-5 py-2.5"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                </Button>
                  </motion.div>
                {currentQuestionIndex === shuffledQuestions.length - 1 ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }}
                    >
                  <Button 
                    onClick={handleFinishSimulado}
                    className="bg-green-600 hover:bg-green-700 px-5 py-2.5"
                  >
                    Finalizar
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </Button>
                    </motion.div>
                ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 15 
                      }}
                    >
                  <Button 
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5"
                  >
                    Próxima
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                    </motion.div>
                )}
              </CardFooter>
            </Card>

              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md mb-8 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-medium mb-4 text-gray-800">Progresso</h3>
              <Progress value={(Object.keys(selectedAnswers).length / shuffledQuestions.length) * 100} className="h-2.5 mb-3" />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{Object.keys(selectedAnswers).length} respondidas</span>
                <span>{shuffledQuestions.length - Object.keys(selectedAnswers).length} restantes</span>
              </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {finished && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-4xl mx-auto mt-8 mb-8 shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-xl pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-center">
                Resultado do Simulado
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="inline-block"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-12 w-12 text-white" />
                </div>
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-2">
                    {(results?.percentage || 0) >= 70 
                      ? "Parabéns!" 
                      : (results?.percentage || 0) >= 50
                        ? "Bom esforço!" 
                        : "Continue estudando!"}
                  </h2>
                  <p className="text-gray-600">
                    {(results?.percentage || 0) >= 70 
                      ? "Você teve um excelente desempenho no simulado!" 
                      : (results?.percentage || 0) >= 50
                        ? "Você completou o simulado com um bom desempenho." 
                        : "Você completou o simulado. Revise os conteúdos para melhorar seu desempenho."}
                  </p>
                </div>

                {/* Estatísticas principais */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-sm font-medium mb-2 text-gray-600">Total de Questões</h3>
                    <p className="text-3xl font-bold text-gray-800">{shuffledQuestions.length}</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-sm font-medium mb-2 text-gray-600">Acertos</h3>
                    <p className="text-3xl font-bold text-green-600">{results?.correct || 0}</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-sm font-medium mb-2 text-gray-600">Erros</h3>
                    <p className="text-3xl font-bold text-red-600">{results ? results.total - results.correct : 0}</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-sm font-medium mb-2 text-gray-600">Aproveitamento</h3>
                    <p className="text-3xl font-bold text-blue-600">{results?.percentage || 0}%</p>
                  </motion.div>
                </div>
                
                {/* Gráfico de aproveitamento */}
                <motion.div 
                  className="mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-medium mb-4 text-gray-800">Seu desempenho</h3>
                    <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          (results?.percentage || 0) >= 70 ? 'bg-green-500' : 
                          (results?.percentage || 0) >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        } transition-all duration-1000 ease-out`}
                        style={{ width: `${results?.percentage || 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>0%</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                    <div className="mt-4 text-center font-medium">
                      <span className={`text-lg ${
                        (results?.percentage || 0) >= 70 ? 'text-green-600' : 
                        (results?.percentage || 0) >= 50 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {`Você acertou ${results?.correct || 0} de ${results?.total || 0} questões (${results?.percentage || 0}%)`}
                      </span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Abas para questões corretas/incorretas */}
                <div className="mt-8 space-y-6">
                  <div className="flex border-b">
                    <button 
                      className={`py-2 px-4 font-medium ${activeTab === 'todas' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('todas')}
                    >
                      Todas as Questões ({shuffledQuestions.length})
                    </button>
                    <button 
                      className={`py-2 px-4 font-medium ${activeTab === 'corretas' ? 'border-b-2 border-green-600 text-green-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('corretas')}
                    >
                      Corretas ({results?.correct || 0})
                    </button>
                    <button 
                      className={`py-2 px-4 font-medium ${activeTab === 'incorretas' ? 'border-b-2 border-red-600 text-red-600' : 'text-gray-500'}`}
                      onClick={() => setActiveTab('incorretas')}
                    >
                      Incorretas ({results ? results.total - results.correct : 0})
                    </button>
                  </div>
                  
                  <div className="space-y-6 max-h-[600px] overflow-y-auto p-2 custom-scrollbar">
                    {shuffledQuestions.map((question, idx) => {
                      const isCorrect = selectedAnswers[idx] === question.answer;
                      
                      if (
                        (activeTab === 'corretas' && !isCorrect) ||
                        (activeTab === 'incorretas' && isCorrect)
                      ) {
                        return null;
                      }
                      
                      return (
                        <motion.div 
                          key={idx} 
                          className={`p-6 rounded-xl border-l-4 shadow-md ${
                            isCorrect 
                              ? 'bg-green-50/70 border-l-green-500 border-gray-100' 
                              : 'bg-red-50/70 border-l-red-500 border-gray-100'
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-medium text-lg text-gray-800">Questão {idx + 1}</h4>
                            {isCorrect ? (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Correta</Badge>
                            ) : (
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Incorreta</Badge>
                            )}
                          </div>
                          
                          <p className="mb-5 text-gray-700 font-medium">{question.text}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100/50' : 'bg-gray-100/50'}`}>
                              <div className="text-sm font-medium text-gray-500 mb-1">Sua resposta:</div>
                              <div className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                {selectedAnswers[idx] || 'Não respondida'}
                              </div>
                            </div>
                            
                            <div className="p-4 rounded-lg bg-green-100/50">
                              <div className="text-sm font-medium text-gray-500 mb-1">Resposta correta:</div>
                              <div className="font-medium text-green-700">{question.answer}</div>
                            </div>
                          </div>
                          
                          {!isCorrect && (
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                              <div className="flex items-center text-blue-800 font-medium mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Explicação:
                              </div>
                              <p className="text-blue-700">{question.explanation}</p>
                            </div>
                          )}
                          
                          {question.relatedContentPath && (
                            <div className="mt-4 flex items-center justify-end">
                              <Link 
                                to={question.relatedContentPath} 
                                className="text-sm text-purple-600 hover:text-purple-800 flex items-center"
                                onClick={(e) => e.stopPropagation()}
                              >
                                Estudar: {question.relatedContentTitle}
                                <ExternalLink className="h-3.5 w-3.5 ml-1" />
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center p-6 md:p-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex gap-4"
                >
                  <Button 
                    onClick={() => navigate('/')}
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 rounded-xl"
                  >
                    Voltar ao início
                  </Button>
                  <Button 
                    onClick={handleTryAgain}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-500/20"
                  >
                    <Repeat className="mr-2 h-5 w-5" />
                    Refazer Simulado
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatedSection>
    </div>
  );
};

export default Simulado;
