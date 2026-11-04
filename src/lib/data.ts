// Todos os textos e dados da landing. Atualize preços e tabelas aqui.

export const WA_NUM = "5581996725111";
export const WA_DISPLAY = "(81) 99672-5111";
export const INSTAGRAM = "https://instagram.com/alebandeiraplanosdesaude";
export const BASE_MSG = "Olá, Alessandra! Quero uma cotação de plano de saúde.";
export const wa = (m: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(m)}`;
export const WA_DEFAULT = wa(BASE_MSG);

/** Mês/ano de referência das tabelas exibidas (atualizar junto com os preços). */
export const TABELAS_REF = "jun–set/2026";

// ---------- Hero / simulador ----------
export type QuemId = "eu" | "fam" | "59" | "emp";
export const QUEM: { id: QuemId; label: string; sum: string; msg: string }[] = [
  { id: "eu", label: "Só eu", sum: "Cotação para 1 pessoa", msg: "só para mim" },
  { id: "fam", label: "Minha família", sum: "Cotação para a família", msg: "minha família" },
  { id: "59", label: "59+", sum: "Cotação 59+", msg: "59+" },
  { id: "emp", label: "Minha empresa/MEI", sum: "Cotação empresa/MEI", msg: "minha empresa/MEI" },
];
export const IDADES = ["0–18", "19–23", "24–28", "29–33", "34–38", "39–43", "44–48", "49–53", "54–58", "59+"];
export const ACOM = ["Enfermaria", "Apartamento", "Tanto faz"];

export const HERO = {
  h1: ["O", "plano", "de", "saúde", "certo,"],
  h1Glow: ["sem", "dor", "de", "cabeça."],
  sub: "Comparo as principais operadoras de Recife e te mostro a melhor condição para a sua idade, sem custo nenhum a mais. Fala comigo.",
  trust: ["Consultoria gratuita", "Atendimento pelo WhatsApp", "Todas as idades, inclusive 59+"],
};

// ---------- Operadoras ----------
// logo: arquivo em /public/images/operadoras (sites oficiais e Wikimedia Commons). Sem logo = nome em texto.
const OP = "/images/operadoras";
export const OPERADORAS: { nome: string; sub?: string; logo?: string; h?: number }[] = [
  { nome: "Hapvida", sub: "NotreDame Intermédica", logo: `${OP}/hapvida.svg`, h: 34 },
  { nome: "Fox Saúde", logo: `${OP}/fox-saude.svg`, h: 30 },
  { nome: "SF Saúde", sub: "SF Saúde via Corpe", logo: `${OP}/corpe.png`, h: 40 },
  { nome: "Select", logo: `${OP}/select.svg`, h: 38 },
  { nome: "Saúde Aires", logo: `${OP}/saude-aires.png`, h: 40 },
  { nome: "MedSênior", logo: `${OP}/medsenior.png`, h: 40 },
  { nome: "Unimed Recife", logo: `${OP}/unimed.svg`, h: 34 },
  { nome: "Amil", logo: `${OP}/amil.svg`, h: 30 },
  { nome: "SulAmérica Saúde", sub: "Saúde", logo: `${OP}/sulamerica.png`, h: 28 },
  { nome: "SulAmérica Odonto", sub: "Odonto", logo: `${OP}/sulamerica.png`, h: 28 },
  { nome: "Bradesco Saúde", logo: `${OP}/bradesco-seguros.svg`, h: 44 },
  { nome: "Bradesco Dental" },
  { nome: "CASSI", sub: "Vida Recife", logo: `${OP}/cassi.png`, h: 34 },
  { nome: "Medvida" },
];

// ---------- Planos por perfil ----------
export type TabId = "eu" | "59" | "emp" | "odo";
export type Plano = {
  nome: string;
  op: string;
  preco?: string;
  h1: string;
  h2: string;
  extra?: string;
  /** Caminho da imagem da tabela em /public/images/tabelas. Sem valor = sem botão "Ver tabela completa". */
  tabela?: string;
};

export const TABS: { id: TabId; label: string; intro?: string; cta: string }[] = [
  { id: "eu", label: "Só eu / família", cta: "Pedir cotação para o meu perfil" },
  {
    id: "59",
    label: "44+ e 59+",
    intro: "Plano individual para qualquer idade e para 59+ sem limite de idade.",
    cta: "Pedir cotação para o meu perfil",
  },
  {
    id: "emp",
    label: "Empresa / MEI",
    intro: "Ei, empreendedor individual: tenho o plano ideal para você.",
    cta: "Montar cotação para minha empresa",
  },
  { id: "odo", label: "Odonto", cta: "Cotar plano odontológico" },
];

export const PLANOS: Record<TabId, Plano[]> = {
  eu: [
    {
      nome: "Fox Saúde",
      op: "Fox Saúde · Enfermaria",
      preco: "237,41",
      h1: "Sem coparticipação",
      h2: "Titulares de 2 a 79 anos",
      extra: "Dependentes: pais, cônjuge, filhos, irmãos, sobrinhos e netos.",
    },
    {
      nome: "SF Saúde Grande Recife",
      op: "SF Saúde · via Corpe Saúde",
      preco: "195,74",
      h1: "Coparticipação total",
      h2: "Obstetrícia inclusa",
      extra: "O menor valor de entrada da tabela.",
    },
    {
      nome: "Hapvida Individual Mix",
      op: "Hapvida · NotreDame Intermédica",
      preco: "435,54",
      h1: "Coparticipação parcial + odonto",
      h2: "5% de desconto para 2 vidas",
      extra: "Enfermaria · até 58 anos.",
    },
  ],
  "59": [
    {
      nome: "MedSênior REC1 Enfermaria",
      op: "MedSênior",
      preco: "767,69",
      h1: "Carência zero a partir de 44 anos",
      h2: "Sem limite de idade",
      extra:
        "Programa Envelhecer Bem. Rede com Real Hospital Português e Laboratório Marcelo Magalhães. Também REC2 Apartamento e Black Apartamento.",
    },
    {
      nome: "Saúde Aires Exclusive Master",
      op: "Saúde Aires · Individual",
      preco: "509,74",
      h1: "Sem coparticipação, a partir de 39 anos",
      h2: "Odontologia inclusa e teleconsulta 24h",
      extra: "Enfermaria.",
    },
    {
      nome: "Fox Saúde 59+",
      op: "Fox Saúde · Enfermaria",
      preco: "878,58",
      h1: "Plano individual para 59+",
      h2: "Sem coparticipação",
      extra: "Plano individual para qualquer idade e para 59+ sem limite de idade.",
    },
  ],
  emp: [
    { nome: "Select", op: "Empresarial e por adesão", h1: "Para MEI e pequenas empresas", h2: "Cotação pelo CNPJ" },
    { nome: "SF Saúde", op: "Via Corpe Saúde", h1: "Empresarial e por adesão", h2: "Cotação pelo CNPJ" },
    { nome: "Hapvida", op: "NotreDame Intermédica", h1: "Empresarial e por adesão", h2: "Cotação pelo CNPJ" },
    { nome: "Unimed Recife", op: "Empresarial", h1: "Empresarial e por adesão", h2: "Cotação pelo CNPJ" },
  ],
  odo: [
    { nome: "SulAmérica Odonto", op: "Linha Mais", h1: "Doc · Clarear · Orto", h2: "Pro · Amplo · Premium" },
    { nome: "Bradesco Dental SPG", op: "Bradesco Dental", h1: "Padrão Doc", h2: "Premium Top · Premium Top Mais" },
  ],
};

// ---------- Comparativo ----------
export const CMP_COLS = ["Fox Saúde", "SF Saúde", "Hapvida Mix", "Saúde Aires", "MedSênior"];
export const CMP_ROWS: { label: string; mono?: boolean; vals: string[] }[] = [
  { label: "A partir de", mono: true, vals: ["R$ 237,41", "R$ 195,74", "R$ 435,54", "R$ 509,74", "R$ 767,69"] },
  { label: "Coparticipação", vals: ["Sem", "Total ou parcial", "Parcial", "Sem", "Consultar"] },
  {
    label: "Acomodação",
    vals: [
      "Enfermaria ou apartamento",
      "Enfermaria",
      "Enfermaria ou apartamento",
      "Enfermaria ou apartamento",
      "Enfermaria (REC1) ou apartamento (REC2, Black)",
    ],
  },
  {
    label: "Faixa de idade",
    vals: ["Titular de 2 a 79 anos", "Todas as faixas", "Até 58 anos", "A partir de 39 anos", "Sem limite de idade"],
  },
  {
    label: "Carência",
    vals: [
      "Redução até 64 anos",
      "Consultar",
      "Consultar",
      "Redução conforme plano anterior",
      "Zero a partir de 44 anos",
    ],
  },
  { label: "Odonto", vals: ["—", "—", "Incluso", "Incluso", "—"] },
  {
    label: "Hospitais de destaque",
    vals: [
      "Albert Sabin · HBV · Cidade Patrimônio · De Ávila · Guararapes",
      "Consultar",
      "Hospital Ariano Suassuna (rede própria)",
      "Albert Sabin · HBV · Hospital de Ortopedia · Santa Joana (apto.)",
      "Real Hospital Português",
    ],
  },
];

// ---------- Como funciona ----------
export const STEPS = [
  { t: "Análise personalizada", d: "Avalio o seu perfil e as suas necessidades." },
  { t: "Comparação", d: "Trabalho com uma ampla rede de operadoras." },
  { t: "Economia de tempo e dinheiro", d: "Você não perde horas pesquisando, e eu busco o melhor custo-benefício." },
  { t: "Suporte do início ao fim", d: "Estou com você da escolha até a contratação, e depois também." },
];

// ---------- Quem sou ----------
export const SOBRE = {
  texto:
    "Sou a Alessandra Bandeira, consultora de planos de saúde em Recife. Meu trabalho é simples: ouvir você, comparar as operadoras e te mostrar o plano que cabe na sua vida e no seu bolso, sem dor de cabeça.",
  bio: "Especialista em Planos de Saúde · Consultora apaixonada por saúde e bem-estar · Contate-me para uma consulta gratuita!",
};

// ---------- Depoimentos (a coletar) ----------
export const DEPOIMENTOS = [
  {
    t: "Texto de exemplo: conta como estava o plano antes, quanto passou a pagar e como foi o atendimento pelo WhatsApp.",
    perfil: "Perfil: família",
  },
  {
    t: "Texto de exemplo: depoimento de cliente 59+ que conseguiu plano sem limite de idade ou com carência reduzida.",
    perfil: "Perfil: 59+",
  },
  {
    t: "Texto de exemplo: MEI ou pequena empresa que montou o plano empresarial com a consultoria.",
    perfil: "Perfil: MEI",
  },
];

// ---------- Dicas e dúvidas ----------
export const DICAS = [
  { t: "Avalie suas necessidades", a: "Pense em quem vai usar o plano, com que frequência e quais especialidades são importantes para você." },
  { t: "Verifique a rede de prestadores", a: "Confira se os hospitais, clínicas e laboratórios que você já usa fazem parte da rede do plano." },
  { t: "Entenda as coberturas", a: "Veja o que está incluso: obstetrícia, odontologia, teleconsulta e a abrangência do atendimento." },
  { t: "Compare os custos", a: "Some mensalidade, coparticipação e reajuste. O mais barato no papel nem sempre é o mais barato no ano." },
  { t: "Pesquise a reputação da operadora", a: "Consulte os índices da ANS e as reclamações antes de fechar." },
];

export const FAQS = [
  {
    t: "O que é coparticipação?",
    a: "É quando você paga uma parte de cada consulta ou exame que usa, além da mensalidade. A mensalidade fica menor, e costuma valer a pena para quem usa pouco o plano.",
  },
  {
    t: "Enfermaria ou apartamento?",
    a: "A diferença está na internação: na enfermaria o quarto é dividido; no apartamento ele é privativo, com direito a acompanhante. Consultas e exames são iguais nos dois.",
  },
  {
    t: "O que é carência e como reduzir?",
    a: "Carência é o prazo entre a contratação e o uso de alguns serviços. Dependendo da operadora e do seu plano anterior, dá para conseguir redução de carência. Eu verifico isso na cotação.",
  },
  { t: "Tenho mais de 59 anos, consigo plano?", a: "Sim, inclusive sem limite de idade e com carência zero em alguns planos." },
  {
    t: "Plano individual × coletivo por adesão",
    a: "O individual é contratado direto por você, com reajuste regulado pela ANS. O coletivo por adesão é contratado por meio de uma entidade de classe ou associação. Comparo os dois para o seu caso.",
  },
  { t: "Quanto custa a consultoria?", a: "Nada. Você paga só o plano." },
];
