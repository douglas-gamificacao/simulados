const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCQHQVC5dtAqgrrNo19_5JUH7t7dV1qXx0",
  authDomain: "atividades-douglas.firebaseapp.com",
  databaseURL: "https://atividades-douglas-default-rtdb.firebaseio.com",
  projectId: "atividades-douglas",
  storageBucket: "atividades-douglas.firebasestorage.app",
  messagingSenderId: "546897428823",
  appId: "1:546897428823:web:250438dd79a300b7b4be12"
};

const GAME_ID = "laboratorio-debret";
const GAME_TITLE = "Laboratório Debret: Imagem sob Suspeita";
const DB_ROOT = "estacao_aprendizagem";
const A = "assets/";
let db = null;

try {
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  db = firebase.database();
} catch (error) {
  console.warn("Firebase indisponível.", error);
}

const question = (text, options, correct, explanation) => ({ text, options, correct, explanation });

const CASES = [
  {
    id: "missao",
    title: "A missão e o projeto",
    label: "Contexto de produção",
    intro: "Quem era Debret, por que veio ao Brasil e quais interesses cercavam suas imagens?",
    color: "#a6422b",
    cover: A + "debret.webp",
    sources: [
      {
        title: "Um artista entre Corte e documento",
        image: A + "debret.webp",
        caption: "Retrato de Jean-Baptiste Debret. Fonte reproduzida no material didático.",
        text: "Debret chegou ao Rio de Janeiro em 1816, no contexto da aproximação entre Portugal e França após a queda de Napoleão. Integrante do grupo conhecido como Missão Artística Francesa, recebeu encomendas oficiais, colaborou com cerimônias da Corte e registrou cenas da sociedade escravista.",
        clues: [
          ["Encomendas oficiais", "O artista não trabalhou isolado: sua produção também atendeu à monarquia e ao projeto de representação do novo centro político."],
          ["Viagem Pitoresca", "De volta à França, publicou imagens e textos que organizavam uma interpretação do Brasil para leitores europeus."],
          ["Documento e projeto", "A obra é valiosa como fonte, mas foi selecionada, composta e comentada por um autor com valores próprios."]
        ],
        concepts: [
          ["Missão Artística Francesa", "Grupo de artistas e intelectuais franceses ligado à institucionalização das artes no Rio de Janeiro."],
          ["Fonte histórica", "Vestígio produzido em determinado contexto, interrogado pelo historiador."],
          ["Autoria", "A posição social e cultural do produtor influencia sua representação."],
          ["Contexto", "Debret observou uma Corte europeia instalada em uma sociedade colonial e escravista."]
        ],
        exam: "Em vestibulares, desconfie de alternativas que tratem imagens como cópias neutras da realidade. Autoria, encomenda, público e época fazem parte da análise."
      },
      {
        title: "Arte, Estado e memória",
        image: A + "selos-missao.webp",
        caption: "Selos comemorativos dos 200 anos da Missão Artística Francesa, Correios, 2016.",
        text: "A lembrança da Missão continuou sendo construída muito depois do século XIX. Uma homenagem oficial seleciona personagens e realizações que o Estado deseja valorizar. Por isso, até um selo comemorativo pode ser interrogado como fonte de memória.",
        clues: [
          ["Seleção", "Comemorações destacam certos nomes e podem deixar outros agentes fora da narrativa."],
          ["Bicentenário", "A data de produção, 2016, mostra que a fonte fala tanto do presente quanto do passado homenageado."],
          ["Instituição", "Os Correios participaram da construção pública dessa memória."]
        ],
        concepts: [
          ["Memória", "Seleção e interpretação social do passado."],
          ["Patrimônio", "Bens e referências escolhidos como significativos para uma coletividade."]
        ],
        exam: "Quando uma prova apresenta uma comemoração, pergunte o que foi escolhido para ser lembrado e o que ficou ausente."
      }
    ],
    questions: [
      question("Ao utilizar uma obra de Debret como fonte histórica, o procedimento mais adequado é:", ["considerar autoria, contexto, público e escolhas de composição", "aceitá-la como reprodução fotográfica da sociedade", "ignorar os textos escritos pelo próprio artista", "presumir que toda encomenda oficial seja falsa"], 0, "A imagem é uma representação produzida em condições históricas específicas."),
      question("A chegada da Missão Artística Francesa em 1816 relaciona-se:", ["à aproximação entre Portugal e França e às reformas culturais da Corte no Rio", "à Proclamação da República brasileira", "à expulsão definitiva da família real", "à abolição do trabalho escravo"], 0, "A presença da Corte e o restabelecimento das relações com a França criaram esse contexto."),
      question("As encomendas oficiais recebidas por Debret indicam que:", ["arte e poder político podiam estar conectados na construção da imagem da monarquia", "o artista não observou a sociedade brasileira", "suas obras foram produzidas sem público", "a Corte proibiu qualquer pintura histórica"], 0, "Debret documentou a sociedade, mas também participou de projetos oficiais de representação."),
      question("Os selos comemorativos de 2016 são úteis ao historiador porque:", ["mostram como a Missão foi lembrada e valorizada no presente", "provam exatamente como todos os eventos ocorreram em 1816", "substituem as fontes do século XIX", "eliminam disputas sobre a memória nacional"], 0, "Comemorações são fontes sobre os usos posteriores do passado."),
      question("O conceito de fonte histórica corresponde a:", ["um vestígio do passado que precisa ser interrogado e contextualizado", "apenas um documento escrito produzido pelo governo", "qualquer imagem que revele a verdade sem interpretação", "somente objetos preservados em museus europeus"], 0, "Fontes podem ser visuais, escritas, materiais ou orais e exigem perguntas."),
      question("A obra Viagem Pitoresca e Histórica ao Brasil deve ser entendida como:", ["um projeto visual e textual que organizou uma interpretação do Brasil", "um conjunto de fotografias instantâneas", "uma defesa do fim imediato da monarquia", "um relatório produzido pela República"], 0, "Debret selecionou cenas e comentários para construir uma narrativa dirigida também ao público europeu.")
    ]
  },
  {
    id: "hierarquias",
    title: "A casa e a rua",
    label: "Hierarquias cotidianas",
    intro: "Objetos, posições e gestos revelam as relações sociais de uma sociedade escravista.",
    color: "#315b6d",
    cover: A + "jantar-brasileiro.webp",
    sources: [
      {
        title: "Um jantar brasileiro",
        image: A + "jantar-brasileiro.webp",
        caption: "Jean-Baptiste Debret, Um jantar brasileiro, 1827. Aquarela.",
        text: "A cena doméstica apresenta um casal branco no centro da mesa e pessoas negras escravizadas servindo, observando ou recebendo alimento. O conforto dos proprietários depende do trabalho e da subordinação de outros personagens.",
        clues: [
          ["Centro da cena", "Mesa, comida e casal branco concentram poder e recursos."],
          ["Trabalho invisibilizado", "Abanar, servir e permanecer disponível fazem parte do trabalho doméstico escravizado."],
          ["Crianças", "A presença de crianças negras junto à mesa não elimina a desigualdade: elas também estão submetidas à propriedade senhorial."]
        ],
        concepts: [
          ["Escravidão doméstica", "Trabalho realizado no interior da casa, marcado por vigilância, dependência e violência."],
          ["Hierarquia visual", "A composição distribui centralidade, conforto e subordinação."],
          ["Paternalismo", "A proximidade doméstica podia ser usada para disfarçar relações de propriedade e coerção."],
          ["Cultura material", "Mesa, roupas, sapatos e objetos ajudam a identificar posições sociais."]
        ],
        exam: "A proximidade entre senhores e escravizados não significava igualdade. Em provas, relacione intimidade doméstica à manutenção da dominação."
      },
      {
        title: "Negros de carro",
        image: A + "negros-de-carro.webp",
        caption: "Jean-Baptiste Debret, Negros de Carro, 1834.",
        text: "Na rua, pessoas negras movimentam a cidade e transportam mercadorias. A obra documenta o peso do trabalho escravizado no cotidiano urbano, ao mesmo tempo que enquadra esses indivíduos principalmente por sua função produtiva.",
        clues: [
          ["Força coletiva", "O deslocamento da carga depende do esforço coordenado de vários trabalhadores."],
          ["Cidade escravista", "Escravidão não era apenas rural: organizava serviços, comércio e circulação urbana."],
          ["Enquadramento", "Os trabalhadores aparecem associados à carga, reforçando a redução social à força de trabalho."]
        ],
        concepts: [
          ["Escravidão urbana", "Uso de trabalho escravizado em transporte, oficinas, comércio e serviços."],
          ["Agência", "Mesmo sob coerção, sujeitos escravizados criavam vínculos, estratégias e práticas culturais."]
        ],
        exam: "Vestibulares frequentemente contrastam escravidão rural e urbana. A diversidade de ocupações não eliminava a condição jurídica de propriedade."
      }
    ],
    questions: [
      question("Na obra Um jantar brasileiro, a organização dos personagens permite identificar:", ["uma hierarquia entre proprietários brancos e pessoas negras escravizadas", "uma relação de trabalho livre e igualitário", "a ausência de escravidão no espaço doméstico", "a autonomia política das crianças representadas"], 0, "Posição, gestos e objetos evidenciam relações de poder."),
      question("A escravidão doméstica deve ser interpretada como:", ["uma forma de dominação marcada por trabalho, vigilância e dependência", "uma relação familiar que anulava a propriedade", "uma atividade sempre remunerada", "um privilégio que garantia liberdade"], 0, "A proximidade dentro da casa não anulava coerção e violência."),
      question("A obra Negros de Carro ajuda a demonstrar que:", ["o trabalho escravizado também era central na economia urbana", "a escravidão existia somente nas plantações", "o transporte de mercadorias era feito apenas por europeus", "o Rio de Janeiro não possuía atividades comerciais"], 0, "Pessoas escravizadas atuavam em transportes, serviços, comércio e oficinas."),
      question("Em uma análise visual, roupas, sapatos, alimentos e móveis podem ser tratados como:", ["indícios de posição social e cultura material", "detalhes sem importância histórica", "provas de igualdade jurídica", "elementos puramente decorativos"], 0, "Objetos também comunicam riqueza, função e distinção social."),
      question("O paternalismo senhorial consistia em:", ["apresentar a dominação como proteção ou proximidade familiar", "abolir juridicamente a escravidão", "garantir participação política aos escravizados", "substituir o trabalho compulsório pelo assalariado"], 0, "A linguagem de proteção podia encobrir relações de propriedade e obediência."),
      question("Ao mostrar trabalhadores sobretudo ligados à carga, Debret:", ["registra o trabalho urbano, mas também os enquadra por sua função produtiva", "nega qualquer presença negra na cidade", "representa uma greve de trabalhadores livres", "defende explicitamente o sufrágio universal"], 0, "A fonte informa e, ao mesmo tempo, revela escolhas de representação.")
    ]
  },
  {
    id: "violencia",
    title: "A violência organizada",
    label: "Escravidão e coerção",
    intro: "A punição não era um acidente: fazia parte do funcionamento social e institucional da escravidão.",
    color: "#8e2f32",
    cover: A + "acoitamento.webp",
    sources: [
      {
        title: "Punição pública",
        image: A + "acoitamento.webp",
        caption: "Jean-Baptiste Debret, Execução da punição de açoitamento, c. 1830.",
        text: "O castigo público combinava dor física e intimidação coletiva. A presença de guardas, instrumentos e espectadores indica que a violência escravista não se limitava à vontade privada de um senhor: podia ser regulamentada e executada com participação do Estado.",
        clues: [
          ["Espetáculo", "O castigo diante de outros escravizados buscava produzir medo e disciplina."],
          ["Instituição", "Guarda, julgamento e espaços de punição conectavam escravidão e poder estatal."],
          ["Corpos feridos", "As figuras caídas tornam visíveis os efeitos extremos da tortura legalizada."]
        ],
        concepts: [
          ["Coerção", "Uso da força para impor trabalho e obediência."],
          ["Violência exemplar", "Punição destinada também a intimidar quem presencia."],
          ["Estado escravista", "Instituições públicas ajudavam a proteger propriedade e ordem senhorial."],
          ["Controle social", "Castigo e ameaça integravam a disciplina cotidiana."]
        ],
        exam: "Evite a ideia de violência como simples desvio individual. A legislação e as instituições sustentavam a ordem escravista."
      },
      {
        title: "A oficina e a palmatória",
        image: A + "loja-sapateiro.webp",
        caption: "Jean-Baptiste Debret, Loja de sapateiro, c. 1830. Aquarela.",
        text: "A sapataria revela especialização técnica, produção urbana e violência no mesmo espaço. Trabalhadores negros fabricam calçados, mas o proprietário mantém controle por meio do castigo. Escravidão e atividade artesanal não eram opostos.",
        clues: [
          ["Conhecimento técnico", "Os trabalhadores dominam etapas especializadas da produção de calçados."],
          ["Palmatória", "O instrumento erguido transforma a oficina em espaço de trabalho e punição."],
          ["Contradição", "Quem produz calçados aparece descalço, sinal visual da desigualdade social."]
        ],
        concepts: [
          ["Ofício urbano", "Trabalho artesanal especializado realizado também por pessoas escravizadas."],
          ["Apropriação", "O proprietário controlava o produto e o trabalho de quem possuía habilidade técnica."],
          ["Violência cotidiana", "A coerção atravessava relações produtivas dentro das oficinas."]
        ],
        exam: "Questões podem usar a imagem para romper a associação automática entre escravidão e trabalho não qualificado."
      }
    ],
    questions: [
      question("A cena de açoitamento público permite concluir que a violência escravista:", ["possuía dimensão institucional e função de intimidação coletiva", "era sempre secreta e proibida pelo Estado", "ocorria apenas no espaço rural", "atingia somente trabalhadores livres"], 0, "Guardas, instrumentos e exposição pública revelam organização institucional."),
      question("A presença de trabalhadores especializados na sapataria demonstra que:", ["pessoas escravizadas também exerciam ofícios urbanos qualificados", "todo trabalho artesanal era livre", "a escravidão impedia qualquer conhecimento técnico", "calçados eram produzidos apenas por imigrantes"], 0, "A escravidão apropriava-se inclusive de conhecimentos e habilidades especializadas."),
      question("Na Loja de sapateiro, o contraste entre produzir calçados e aparecer descalço evidencia:", ["a desigualdade entre o trabalho realizado e o acesso aos bens produzidos", "a ausência de mercado consumidor", "a liberdade econômica dos trabalhadores", "a proibição de oficinas no Rio de Janeiro"], 0, "O detalhe visual sintetiza apropriação e distinção social."),
      question("A expressão violência exemplar refere-se ao castigo que:", ["pretende punir uma pessoa e intimidar as demais", "ocorre sem testemunhas", "substitui todo controle jurídico", "é aplicado somente durante guerras"], 0, "A exibição pública amplia o efeito disciplinador da punição."),
      question("As duas obras, analisadas em conjunto, mostram que:", ["trabalho e violência estavam articulados no sistema escravista", "a cidade havia superado a escravidão", "os proprietários não controlavam oficinas", "o castigo era incompatível com atividades econômicas"], 0, "A coerção garantia a exploração em diferentes espaços produtivos."),
      question("A interpretação de que a violência era apenas excesso de alguns senhores é insuficiente porque:", ["leis e instituições também sustentavam a coerção escravista", "não existiam punições particulares", "todo castigo era aplicado por estrangeiros", "os escravizados controlavam o sistema judicial"], 0, "A ordem escravista possuía proteção legal e participação estatal.")
    ]
  },
  {
    id: "indigenas",
    title: "O olhar que classifica",
    label: "Povos indígenas",
    intro: "A representação europeia produziu diferenças entre o chamado 'selvagem' e o 'civilizado'.",
    color: "#6b6531",
    cover: A + "botocudos.webp",
    sources: [
      {
        title: "Família de botocudos em marcha",
        image: A + "botocudos.webp",
        caption: "Jean-Baptiste Debret, Família de botocudos em marcha, 1834. Gravura.",
        text: "Debret enfatizou armas, ornamentos, nudez e ambiente natural. Esses elementos ajudavam o público europeu a reconhecer uma figura considerada 'exótica'. O registro possui valor histórico, mas também participa de uma classificação colonial dos povos indígenas.",
        clues: [
          ["Natureza", "O cenário afasta os personagens do espaço urbano associado pelo artista à civilização europeia."],
          ["Armas e postura", "A composição pode induzir a leitura de agressividade e ameaça."],
          ["Exótico", "Diferenças culturais são destacadas para provocar curiosidade no observador europeu."]
        ],
        concepts: [
          ["Eurocentrismo", "Interpretação de outras sociedades a partir de valores europeus apresentados como universais."],
          ["Exotização", "Redução de grupos a características vistas como estranhas ou pitorescas."],
          ["Binarismo", "Oposição rígida entre categorias, como 'selvagem' e 'civilizado'."],
          ["Tutela", "Ideia de que povos indígenas deveriam ser dirigidos por agentes considerados superiores."]
        ],
        exam: "Em provas, palavras como 'civilização', 'progresso' e 'selvagem' precisam ser historicizadas: elas expressam relações de poder, não classificações neutras."
      },
      {
        title: "A dupla linguagem de Debret",
        image: A + "debret.webp",
        caption: "O retrato do autor recorda que toda classificação parte de um lugar social e cultural.",
        text: "Pesquisadores identificam na obra uma oposição recorrente: indígenas próximos da natureza seriam apresentados como 'selvagens'; os vestidos, cristianizados e usuários de objetos europeus apareceriam como 'civilizados'. Essa escala transformava aproximação à cultura europeia em medida de superioridade.",
        clues: [
          ["Quem classifica?", "As categorias foram formuladas por observadores externos e ligadas ao projeto colonial."],
          ["O que se perde?", "A diversidade de povos, línguas e experiências é reduzida a duas categorias."],
          ["Hierarquia", "A classificação não apenas diferencia: coloca modos de vida em níveis de valor."]
        ],
        concepts: [
          ["Alteridade", "Relação com grupos percebidos como diferentes."],
          ["Estereótipo", "Imagem simplificada e repetida que apaga diversidade e historicidade."]
        ],
        exam: "A crítica ao olhar eurocêntrico não exige descartar a fonte. Exige usá-la também para estudar quem representou e quais valores orientaram a representação."
      }
    ],
    questions: [
      question("A oposição entre indígenas 'selvagens' e 'civilizados' na obra de Debret revela:", ["uma hierarquia baseada na aproximação aos padrões europeus", "uma classificação criada pelos próprios povos indígenas", "igual valorização de todos os modos de vida", "a inexistência de projetos coloniais"], 0, "A cultura europeia funcionava como medida de civilização."),
      question("O conceito de eurocentrismo refere-se a:", ["interpretar outras sociedades tomando valores europeus como centro e padrão", "estudar apenas a geografia da Europa", "defender a diversidade cultural sem hierarquias", "recusar qualquer contato entre sociedades"], 0, "O problema está em universalizar uma experiência histórica específica."),
      question("Na gravura dos botocudos, armas, nudez e natureza contribuem para:", ["construir uma imagem de exotismo e distância da civilização europeia", "demonstrar cidadania política plena", "registrar uma cerimônia da Corte", "provar ausência de organização social"], 0, "A seleção visual orienta o modo como o público europeu percebe os personagens."),
      question("Criticar a representação de Debret significa:", ["contextualizar seus valores e usar a obra para estudar também o olhar do autor", "destruir a fonte e impedir sua análise", "aceitar suas categorias como científicas", "negar que indígenas apareçam em suas obras"], 0, "Uma fonte problemática pode ser historicamente valiosa quando interrogada criticamente."),
      question("O uso de duas categorias rígidas para povos muito diversos é exemplo de:", ["binarismo e simplificação", "sufrágio censitário", "mercantilismo", "federalismo político"], 0, "O binarismo reduz experiências complexas a uma oposição."),
      question("A noção colonial de tutela apoiava-se na ideia de que:", ["povos indígenas precisariam ser dirigidos por agentes considerados superiores", "todos os povos possuíam a mesma autonomia reconhecida", "o Estado não poderia intervir em territórios indígenas", "a cultura europeia deveria aprender exclusivamente com os nativos"], 0, "A tutela transformava a suposta inferioridade em justificativa para controle.")
    ]
  },
  {
    id: "memoria",
    title: "A imagem contra-ataca",
    label: "Releitura e memória",
    intro: "Uma artista contemporânea desloca a cena de Debret e devolve protagonismo aos personagens negros.",
    color: "#73507c",
    cover: A + "radiola-promessa.webp",
    sources: [
      {
        title: "Compare: da carga à cultura",
        image: A + "negros-de-carro.webp",
        caption: "Jean-Baptiste Debret, Negros de Carro, 1834.",
        text: "Na imagem de Debret, homens negros aparecem puxando uma carga pelas ruas. A obra documenta o trabalho escravizado, mas associa os personagens à exploração física e à função produtiva.",
        clues: [
          ["Carga", "O objeto transportado organiza o movimento e o sentido principal da cena."],
          ["Corpos em esforço", "A ação destaca exploração e desgaste físico."],
          ["Registro colonial", "A cena foi produzida por um observador europeu no interior de uma sociedade escravista."]
        ],
        concepts: [
          ["Representação", "Construção visual que seleciona e organiza aspectos da realidade."],
          ["Trauma visual", "Repetição de imagens que fixa grupos apenas em posições de sofrimento e subordinação."],
          ["Contraponto", "Uso de outra fonte para tensionar a primeira."],
          ["Protagonismo", "Capacidade de aparecer como sujeito de ação, cultura e história."]
        ],
        exam: "Comparações costumam cobrar permanências e mudanças. Liste o que a releitura conserva da composição e o que transforma no significado."
      },
      {
        title: "Radiola de Promessa",
        image: A + "radiola-promessa.webp",
        caption: "Gê Viana, Radiola de Promessa, 2022. Releitura contemporânea de Negros de Carro.",
        text: "Gê Viana mantém a estrutura do transporte coletivo, mas substitui a carga colonial por uma aparelhagem sonora e atualiza roupas e gestos. Os personagens deixam de ser vistos apenas como força de trabalho e passam a afirmar presença, circulação e produção cultural negra.",
        clues: [
          ["Radiola", "A carga torna-se tecnologia de música, encontro e expressão cultural."],
          ["Atualização", "Roupas e objetos conectam a cena ao presente."],
          ["Agência", "Os personagens aparecem ligados à criação cultural, não somente ao sofrimento."]
        ],
        concepts: [
          ["Releitura", "Nova obra que dialoga criticamente com uma imagem anterior."],
          ["Ressignificação", "Produção de outro sentido para elementos já conhecidos."],
          ["Memória em disputa", "Diferentes grupos questionam quais imagens devem organizar a lembrança social."]
        ],
        exam: "A releitura não apaga Debret: depende do reconhecimento da obra anterior para inverter e ampliar seus sentidos."
      }
    ],
    questions: [
      question("A principal transformação realizada por Gê Viana em Radiola de Promessa é:", ["deslocar a cena da carga escravista para a afirmação cultural negra contemporânea", "retirar todas as pessoas negras da composição", "copiar a obra sem alterar seu significado", "representar uma cerimônia da monarquia"], 0, "A estrutura visual dialoga com Debret, mas a radiola e os elementos atuais produzem outro protagonismo."),
      question("Uma releitura artística é:", ["uma nova obra que dialoga e pode contestar sentidos da obra anterior", "uma falsificação destinada a substituir o original", "uma reprodução que deve permanecer idêntica", "um documento sem relação com a memória"], 0, "A releitura depende do diálogo, mas produz escolhas e sentidos próprios."),
      question("Ao comparar as duas imagens, uma permanência é:", ["o esforço coletivo de transportar um objeto pela rua", "a mesma carga e as mesmas roupas", "o contexto jurídico da escravidão", "a autoria de Jean-Baptiste Debret"], 0, "A composição mantém a ação coletiva, embora altere objeto, tempo e significado."),
      question("Na obra contemporânea, a aparelhagem sonora funciona como símbolo de:", ["produção cultural, encontro e presença negra", "punição pública estatal", "autoridade da família real", "catequese dos povos indígenas"], 0, "A radiola desloca a leitura da exploração para a agência cultural."),
      question("A expressão memória em disputa indica que:", ["grupos sociais podem questionar imagens e narrativas dominantes sobre o passado", "o passado muda fisicamente a cada nova obra", "fontes antigas deixam de possuir valor", "somente o Estado produz memória"], 0, "A memória resulta de escolhas, conflitos e novas interpretações."),
      question("O projeto de atualizar imagens traumáticas contribui para:", ["ampliar representações negras para além de vulnerabilidade e trabalho compulsório", "negar a existência histórica da escravidão", "eliminar a análise de fontes coloniais", "confirmar que Debret foi um fotógrafo"], 0, "A proposta critica a repetição de lugares visuais subordinados sem ocultar a violência histórica.")
    ]
  }
];

const BLOCKED = ["palavrao", "idiota", "otario", "otaria", "burro", "burra", "merda", "bosta", "porra", "caralho", "puta", "puto", "fdp", "cuzao", "cuzona", "desgraca", "vagabundo", "vagabunda"];
const state = { name: "", className: "", attemptId: "", score: 0, completed: {}, scores: {}, startedAt: 0, current: null, sourceIndex: 0, questions: [], questionIndex: 0, currentScore: 0, answered: false };

const sound = {
  enabled: true,
  ctx: null,
  timer: null,
  step: 0,
  ensure() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return true;
  },
  tone(frequency, duration = .08, type = "triangle", volume = .025, delay = 0) {
    if (!this.enabled || !this.ensure()) return;
    const now = this.ctx.currentTime + delay;
    const oscillator = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + .01);
    gain.gain.exponentialRampToValueAtTime(.0001, now + duration);
    oscillator.connect(gain);
    gain.connect(this.ctx.destination);
    oscillator.start(now);
    oscillator.stop(now + duration + .03);
  },
  click() { this.tone(520, .045, "triangle", .012); },
  correct() { this.tone(523, .12); this.tone(659, .15, "triangle", .028, .07); this.tone(784, .18, "triangle", .025, .14); },
  wrong() { this.tone(180, .16, "sawtooth", .018); this.tone(135, .22, "triangle", .025, .08); },
  ambientPulse() {
    if (!this.enabled || !this.ensure()) return;
    const chords = [[130.81, 196, 261.63], [146.83, 220, 293.66], [123.47, 185, 246.94], [110, 164.81, 220]];
    const chord = chords[this.step++ % chords.length];
    chord.forEach((f, i) => this.tone(f, 2.6, i === 0 ? "sine" : "triangle", i === 0 ? .008 : .004, i * .07));
  },
  start() {
    if (!this.enabled || this.timer) return;
    this.ambientPulse();
    this.timer = setInterval(() => this.ambientPulse(), 2800);
  },
  stop() {
    clearInterval(this.timer);
    this.timer = null;
  }
};

function toggleSound() {
  sound.enabled = !sound.enabled;
  const button = document.getElementById("soundBtn");
  button.classList.toggle("muted", !sound.enabled);
  button.textContent = sound.enabled ? "♪" : "×";
  if (sound.enabled) { sound.click(); sound.start(); } else sound.stop();
}

document.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (button && button.id !== "soundBtn" && !button.classList.contains("answer")) sound.click();
});

function showOnly(id) {
  ["splash", "register", "app"].forEach(item => {
    document.getElementById(item).style.display = item === id ? (item === "app" ? "block" : "flex") : "none";
  });
}

function showRegister() {
  sound.start();
  showOnly("register");
}

function clean(value) {
  return String(value || "").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 40);
}

function normalize(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

async function validateName(value) {
  const name = clean(value);
  const key = normalize(name);
  if (name.length < 3) return { ok: false, message: "Digite um nome com pelo menos 3 letras. Nomes como Ana são aceitos." };
  if (BLOCKED.some(word => key.includes(normalize(word)))) return { ok: false, message: "Esse nome não pode ser utilizado." };
  if (db) {
    try {
      const snapshot = await db.ref(`${DB_ROOT}/moderacao/nomesBloqueados/${key}`).once("value");
      if (snapshot.exists()) return { ok: false, message: "Esse nome foi bloqueado pelo professor." };
    } catch (error) {
      console.warn("Não foi possível consultar a moderação.", error);
    }
  }
  return { ok: true, name };
}

async function startGame() {
  const warning = document.getElementById("warning");
  const rawName = document.getElementById("studentName").value;
  const className = document.getElementById("studentClass").value;
  if (!rawName.trim() || !className) {
    warning.textContent = "Digite seu nome e selecione a turma.";
    warning.style.display = "block";
    return;
  }
  warning.textContent = "Verificando identificação...";
  warning.style.display = "block";
  const result = await validateName(rawName);
  if (!result.ok) {
    warning.textContent = result.message;
    return;
  }
  warning.style.display = "none";
  Object.assign(state, {
    name: result.name,
    className,
    attemptId: db ? db.ref(`${DB_ROOT}/rankings/${GAME_ID}`).push().key : `local-${Date.now()}`,
    score: 0,
    completed: {},
    scores: {},
    startedAt: Date.now()
  });
  showOnly("app");
  openMenu();
  registerGame();
}

function level(score) {
  if (score >= 90) return "Perito-chefe";
  if (score >= 70) return "Analista de fontes";
  if (score >= 50) return "Investigador visual";
  if (score >= 25) return "Auxiliar de perícia";
  return "Observador";
}

function updateHud() {
  document.getElementById("hudScore").textContent = state.score;
  document.getElementById("hudStages").textContent = `${Object.keys(state.completed).length}/5`;
  document.getElementById("hudLevel").textContent = level(state.score);
}

function openMenu() {
  document.getElementById("menuView").style.display = "block";
  document.getElementById("stageView").classList.add("hidden");
  renderMenu();
  updateHud();
  window.scrollTo(0, 0);
  sound.start();
}

function renderMenu() {
  const completed = Object.keys(state.completed).length;
  document.getElementById("progressValue").textContent = `${completed * 20}%`;
  document.getElementById("caseBoard").innerHTML = CASES.map((item, index) => `
    <button class="case-file ${state.completed[item.id] ? "done" : ""}" style="--accent:${item.color};--tilt:${index % 2 ? "1.1deg" : "-1deg"}" type="button" onclick="openCase('${item.id}')">
      <img src="${item.cover}" alt="">
      <div class="case-copy">
        <small>PASTA ${String(index + 1).padStart(2, "0")} · 20 PONTOS</small>
        <h2>${item.title}</h2>
        <p>${item.intro}</p>
      </div>
    </button>
  `).join("");
}

function openCase(id) {
  state.current = CASES.find(item => item.id === id);
  state.sourceIndex = 0;
  state.questions = shuffle(state.current.questions).slice(0, 4);
  state.questionIndex = 0;
  state.currentScore = 0;
  document.getElementById("menuView").style.display = "none";
  document.getElementById("stageView").classList.remove("hidden");
  document.getElementById("stageKicker").textContent = `${state.current.label} · 20 pontos`;
  document.getElementById("stageTitle").textContent = state.current.title;
  document.getElementById("stageIntro").textContent = state.current.intro;
  document.getElementById("quizArea").classList.remove("hidden");
  document.getElementById("stageComplete").classList.add("hidden");
  renderSources();
  renderQuestion();
  window.scrollTo(0, 0);
}

function renderSources() {
  document.getElementById("sourceTabs").innerHTML = state.current.sources.map((source, index) => `
    <button class="${index === state.sourceIndex ? "active" : ""}" type="button" onclick="selectSource(${index})">Fonte ${index + 1}</button>
  `).join("");
  const source = state.current.sources[state.sourceIndex];
  document.getElementById("sourceContent").innerHTML = `
    <section class="source-card">
      <h3>${source.title}</h3>
      <button class="image-frame" type="button" onclick="openImage('${source.image}','${encodeURIComponent(source.title)}','${encodeURIComponent(source.caption)}')">
        <img src="${source.image}" alt="${source.title}">
        <span>AMPLIAR FONTE</span>
      </button>
      <p class="caption">${source.caption}</p>
      <p>${source.text}</p>
      <div class="clue-actions">${source.clues.map((clue, index) => `<button class="clue" type="button" onclick="revealClue(this,'clue-${state.sourceIndex}-${index}')">${clue[0]}</button>`).join("")}</div>
      ${source.clues.map((clue, index) => `<div id="clue-${state.sourceIndex}-${index}" class="analysis-box"><b>${clue[0]}:</b> ${clue[1]}</div>`).join("")}
      <div class="concept-grid">${source.concepts.map(concept => `<div><b>${concept[0]}</b>${concept[1]}</div>`).join("")}</div>
      <div class="exam-tip"><b>DICA DE VESTIBULAR</b>${source.exam}</div>
    </section>
  `;
}

function selectSource(index) {
  state.sourceIndex = index;
  renderSources();
}

function revealClue(button, id) {
  document.getElementById(id).classList.add("show");
  button.classList.add("revealed");
  button.disabled = true;
  sound.click();
}

function renderQuestion() {
  const current = state.questions[state.questionIndex];
  state.answered = false;
  document.getElementById("questionProgress").textContent = `Questão ${state.questionIndex + 1} de 4 · ${state.currentScore} pontos nesta pasta`;
  document.getElementById("questionText").textContent = current.text;
  document.getElementById("feedback").className = "feedback";
  document.getElementById("feedback").textContent = "";
  document.getElementById("nextButton").classList.add("hidden");
  const options = shuffle(current.options.map((text, originalIndex) => ({ text, correct: originalIndex === current.correct })));
  document.getElementById("answers").innerHTML = options.map(option => `
    <button class="answer" type="button" data-correct="${option.correct}" onclick="answerQuestion(this,${option.correct})">${option.text}</button>
  `).join("");
}

function answerQuestion(button, isCorrect) {
  if (state.answered) return;
  state.answered = true;
  const current = state.questions[state.questionIndex];
  const feedback = document.getElementById("feedback");
  document.querySelectorAll(".answer").forEach(item => {
    item.disabled = true;
    if (item.dataset.correct === "true") item.classList.add("correct");
  });
  if (isCorrect) {
    state.currentScore += 5;
    sound.correct();
    feedback.className = "feedback show ok";
    feedback.innerHTML = `<b>Resposta correta. +5 pontos.</b><br>${current.explanation}`;
  } else {
    button.classList.add("wrong");
    sound.wrong();
    feedback.className = "feedback show bad";
    feedback.innerHTML = `<b>Observe novamente as evidências.</b><br>${current.explanation}`;
  }
  document.getElementById("nextButton").classList.remove("hidden");
}

function nextQuestion() {
  if (state.questionIndex < 3) {
    state.questionIndex++;
    renderQuestion();
    return;
  }
  document.getElementById("quizArea").classList.add("hidden");
  document.getElementById("stageComplete").classList.remove("hidden");
  document.getElementById("stageScore").textContent = `${state.currentScore}/20`;
}

async function finishStage() {
  const id = state.current.id;
  if (!state.completed[id]) {
    state.completed[id] = true;
    state.scores[id] = state.currentScore;
    state.score = Object.values(state.scores).reduce((total, value) => total + value, 0);
    await saveAttempt();
  }
  openMenu();
  if (Object.keys(state.completed).length === 5) {
    document.getElementById("finalScore").textContent = state.score;
    document.getElementById("finalLevel").textContent = level(state.score);
    document.getElementById("finalModal").classList.add("open");
  }
}

async function registerGame() {
  if (!db) return;
  try {
    await db.ref(`${DB_ROOT}/jogos/${GAME_ID}`).update({
      titulo: GAME_TITLE,
      slug: GAME_ID,
      categoria: "História",
      ativo: true,
      pontuacaoMaxima: 100,
      etapas: 5,
      atualizadoEm: firebase.database.ServerValue.TIMESTAMP
    });
  } catch (error) {
    console.warn("Não foi possível registrar o jogo.", error);
  }
}

async function saveAttempt() {
  const now = new Date();
  const record = {
    nome: state.name,
    turma: state.className,
    pontos: state.score,
    nivel: level(state.score),
    data: now.toLocaleString("pt-BR"),
    jogoId: GAME_ID,
    jogoTitulo: GAME_TITLE,
    nomeNormalizado: normalize(state.name),
    visivel: true,
    etapasConcluidas: Object.keys(state.completed),
    quantidadeEtapas: Object.keys(state.completed).length,
    pontuacaoPorEtapa: state.scores,
    duracaoSegundos: Math.max(1, Math.round((Date.now() - state.startedAt) / 1000)),
    criadoEm: state.startedAt,
    atualizadoEm: db ? firebase.database.ServerValue.TIMESTAMP : Date.now()
  };
  if (db) {
    try {
      await db.ref(`${DB_ROOT}/rankings/${GAME_ID}/${state.attemptId}`).set(record);
      return;
    } catch (error) {
      console.warn("Salvamento online indisponível; usando o navegador.", error);
    }
  }
  const key = `${GAME_ID}-ranking`;
  const list = JSON.parse(localStorage.getItem(key) || "[]");
  const index = list.findIndex(item => item.id === state.attemptId);
  const localRecord = { id: state.attemptId, ...record, atualizadoEm: Date.now() };
  if (index >= 0) list[index] = localRecord; else list.push(localRecord);
  localStorage.setItem(key, JSON.stringify(list));
}

async function loadRanking() {
  if (db) {
    try {
      const [rankingSnapshot, blockedSnapshot] = await Promise.all([
        db.ref(`${DB_ROOT}/rankings/${GAME_ID}`).once("value"),
        db.ref(`${DB_ROOT}/moderacao/nomesBloqueados`).once("value")
      ]);
      const rows = [];
      const blocked = blockedSnapshot.val() || {};
      rankingSnapshot.forEach(child => {
        const value = child.val();
        if (value.visivel !== false && !blocked[normalize(value.nome)]) rows.push({ id: child.key, ...value });
      });
      return rows;
    } catch (error) {
      console.warn("Ranking online indisponível.", error);
    }
  }
  try { return JSON.parse(localStorage.getItem(`${GAME_ID}-ranking`) || "[]"); } catch (error) { return []; }
}

async function openRanking() {
  document.getElementById("rankingModal").classList.add("open");
  const content = document.getElementById("rankingContent");
  content.innerHTML = "<p style='padding:20px;text-align:center'>Carregando...</p>";
  const rows = (await loadRanking()).sort((a, b) =>
    (b.pontos || 0) - (a.pontos || 0) ||
    (b.quantidadeEtapas || 0) - (a.quantidadeEtapas || 0) ||
    (a.duracaoSegundos || 1e9) - (b.duracaoSegundos || 1e9)
  );
  content.innerHTML = rows.length ? `
    <table><thead><tr><th>#</th><th>Estudante</th><th>Turma</th><th>Pontos</th><th>Pranchas</th><th>Patente</th><th>Data</th></tr></thead>
    <tbody>${rows.slice(0, 200).map((row, index) => `<tr class="${row.id === state.attemptId ? "me" : ""}"><td>${index + 1}</td><td>${escapeHtml(row.nome)}</td><td>${escapeHtml(row.turma)}</td><td><b>${row.pontos || 0}</b></td><td>${row.quantidadeEtapas || 0}/5</td><td>${escapeHtml(row.nivel || "")}</td><td>${escapeHtml(row.data || "")}</td></tr>`).join("")}</tbody></table>
  ` : "<p style='padding:22px'>Nenhuma tentativa registrada.</p>";
}

function openGuide() {
  document.getElementById("guideModal").classList.add("open");
}

function openImage(source, title, caption) {
  document.getElementById("lightboxImage").src = source;
  document.getElementById("lightboxTitle").textContent = decodeURIComponent(title);
  document.getElementById("lightboxCaption").textContent = decodeURIComponent(caption);
  document.getElementById("imageModal").classList.add("open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

showOnly("splash");
