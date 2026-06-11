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
      question("A chegada de Debret ao Rio de Janeiro, em 1816, esteve ligada principalmente:", ["às reformas culturais promovidas pela Corte e à reaproximação diplomática com a França", "à expansão republicana no Atlântico e ao afastamento diplomático em relação à França", "à crise do trabalho assalariado e à organização das primeiras academias republicanas", "ao encerramento da escravidão urbana e à criação de instituições artísticas provinciais"], 0, "A transferência da Corte e o restabelecimento das relações luso-francesas favoreceram a institucionalização das artes no Rio."),
      question("Debret realizou encomendas para a Corte e também publicou cenas do cotidiano escravista. Considerando essa dupla atuação, suas imagens devem ser interpretadas como:", ["registros que combinam observação social e participação em projetos de representação do poder", "testemunhos que perdem valor histórico por terem circulado entre membros da monarquia e instituições ligadas à Corte", "denúncias abolicionistas produzidas de maneira independente das instituições imperiais", "descrições objetivas cuja precisão decorre da formação acadêmica europeia do artista"], 0, "A ligação com a Corte não invalida a fonte, mas integra seu contexto de produção e orienta perguntas sobre escolhas e interesses."),
      question("Ao colocar lado a lado o retrato de Debret e os selos comemorativos de 2016, o historiador pode concluir que:", ["a memória da Missão foi reconstruída posteriormente por instituições que selecionaram seus protagonistas", "a homenagem contemporânea confirma a neutralidade das representações produzidas pelo artista francês e de seus textos", "a circulação oficial dos selos recupera integralmente os objetivos originais do grupo de 1816", "a distância temporal impede que os selos sejam empregados no estudo dos usos públicos do passado"], 0, "Os selos não comprovam como a Missão ocorreu; mostram como uma instituição do presente escolheu homenageá-la."),
      question("Uma questão afirma: “Por representar cenas observadas diretamente, Debret oferece acesso transparente à sociedade brasileira”. A crítica metodológica mais consistente a essa afirmação é:", ["toda observação é mediada por escolhas de enquadramento, linguagem e valores do observador", "toda imagem encomendada pelo Estado contém informações deliberadamente inventadas para atender aos interesses oficiais", "somente fontes escritas permitem reconstruir relações sociais e instituições políticas", "somente artistas nascidos no Brasil poderiam representar adequadamente aquela sociedade"], 0, "A observação direta não elimina seleção, composição, público pretendido e referências culturais do autor."),
      question("Na expressão Viagem Pitoresca e Histórica ao Brasil, a reunião entre imagens e comentários escritos indica que Debret:", ["organizou uma narrativa sobre o país destinada também a orientar o olhar do público europeu", "se limitou a catalogar objetos naturais sem estabelecer relações entre as cenas escolhidas", "procurou substituir documentos oficiais por uma descrição exclusivamente estética da paisagem", "abandonou os modelos europeus para reproduzir integralmente interpretações dos grupos retratados"], 0, "A obra constitui um projeto visual e textual: não é uma coleção aleatória nem um registro fotográfico."),
      question("Diante de uma fonte visual produzida por um artista ligado à Corte, qual procedimento evita tanto a aceitação ingênua quanto a rejeição automática do documento?", ["cruzar a imagem com outras fontes e examinar autoria, circulação, encomenda e linguagem visual", "separar os detalhes cotidianos da composição para utilizar apenas aquilo que pareça espontâneo", "considerar verdadeiro apenas o que confirma informações já registradas em documentos governamentais", "desprezar a intenção do autor e concentrar a análise exclusivamente nos objetos representados"], 0, "A crítica histórica contextualiza e cruza evidências; vínculo institucional não torna a fonte verdadeira nem inútil por si só.")
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
      question("A presença de pessoas escravizadas na sala de jantar e nas ruas do Rio permite reconhecer:", ["a participação do trabalho escravizado tanto na vida doméstica quanto na economia urbana", "a separação rígida entre escravidão doméstica e atividades comerciais realizadas nas cidades", "a substituição gradual da mão de obra compulsória por trabalhadores urbanos assalariados", "a concentração do cativeiro nas grandes propriedades rurais voltadas à exportação"], 0, "As duas fontes contextualizam a amplitude da escravidão, presente em serviços domésticos, transporte, comércio e ofícios."),
      question("Em Um jantar brasileiro, a proximidade física entre o casal branco, as crianças negras e os servidores poderia ser utilizada para sustentar uma leitura paternalista. A própria composição, porém, enfraquece essa leitura ao:", ["distribuir alimento, repouso e serviço segundo posições sociais claramente desiguais", "representar todos os personagens utilizando roupas e objetos de valor equivalente", "colocar os trabalhadores no centro da mesa e os proprietários nas margens da cena", "apresentar a convivência doméstica como resultado de contratos livremente estabelecidos"], 0, "Proximidade não significa igualdade: centralidade, gestos, trabalho e acesso aos bens revelam uma relação de propriedade."),
      question("Ao analisar Negros de Carro, um estudante concluiu que a cena comprova a passividade das pessoas escravizadas. Essa conclusão é metodologicamente frágil porque:", ["transforma o enquadramento escolhido pelo artista em descrição completa das experiências dos retratados", "desconsidera que o transporte urbano era realizado exclusivamente por trabalhadores livres africanos organizados em associações", "pressupõe que fontes visuais nunca podem informar sobre atividades econômicas ou relações sociais", "ignora que a legislação imperial já reconhecia cidadania plena aos trabalhadores representados"], 0, "A obra mostra uma atividade e um olhar sobre ela, mas não esgota vínculos, resistências e estratégias dos sujeitos retratados."),
      question("A análise conjunta da mesa farta, dos serviços prestados e do transporte de cargas permite compreender a escravidão urbana como um sistema que:", ["articulava consumo das elites, circulação de mercadorias e apropriação do trabalho compulsório", "restringia a coerção ao interior das residências e remunerava as atividades realizadas nas ruas", "reduzia a importância econômica do cativeiro ao separar trabalho doméstico e produção mercantil", "favorecia a mobilidade jurídica dos escravizados envolvidos em tarefas especializadas ou comerciais"], 0, "Os espaços são diferentes, mas a apropriação do trabalho conecta conforto doméstico, serviços e circulação econômica."),
      question("Roupas, calçados, móveis, alimentos e posições corporais são relevantes nessas fontes porque:", ["funcionam como indícios de distinção, atividade, acesso a bens e relações de dependência", "permitem determinar sem margem de dúvida a identidade individual e a trajetória social de cada personagem", "comprovam que a diferença social se baseava exclusivamente nos níveis de renda familiar", "substituem a necessidade de contextualizar juridicamente a escravidão no período imperial"], 0, "A cultura material fornece evidências, mas precisa ser combinada ao contexto e a outras fontes."),
      question("A aparente incorporação de pessoas escravizadas ao cotidiano familiar pode ser relacionada ao paternalismo senhorial porque essa ideologia:", ["convertia dependência e obediência em linguagem de proteção, afeto e autoridade doméstica", "reconhecia autonomia jurídica aos cativos que mantivessem vínculos pessoais com os proprietários", "defendia a separação entre vida privada dos senhores e utilização econômica do trabalho escravizado", "questionava o direito de propriedade ao estabelecer relações familiares entre todos os moradores"], 0, "O paternalismo apresentava a dominação como cuidado, sem eliminar propriedade, coerção ou desigualdade.")
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
      question("A presença de guardas, instrumentos de castigo e observadores na cena de açoitamento indica que:", ["a violência podia assumir caráter público, disciplinador e institucional", "a punição ocorria clandestinamente e contrariava toda ação do Estado", "o castigo se restringia a conflitos particulares ocorridos nas fazendas", "a coerção havia sido substituída pela fiscalização do trabalho assalariado"], 0, "A cena introduz o estudante no caráter exemplar e institucional da punição escravista."),
      question("Um observador afirma que a oficina de sapateiro demonstra integração econômica dos trabalhadores e, portanto, redução da violência escravista. Qual elemento contradiz diretamente essa interpretação?", ["o domínio técnico dos trabalhadores convive com a palmatória e com a autoridade coercitiva do proprietário", "a produção artesanal ocorre em ambiente urbano e atende a consumidores socialmente diversificados por meio do comércio local", "a presença de vários trabalhadores indica uma divisão interna das tarefas de fabricação", "o estabelecimento comercial reúne instrumentos, matérias-primas e produtos em diferentes etapas"], 0, "Qualificação e integração à economia não significavam liberdade; a coerção organizava o próprio processo de trabalho."),
      question("A representação do açoitamento como espetáculo público e a punição dentro da sapataria permitem identificar, respectivamente:", ["uma pedagogia coletiva do medo e um mecanismo cotidiano de disciplina do trabalho", "uma prática exclusivamente estatal e uma relação produtiva organizada por contrato salarial", "uma reação popular contra a escravidão e uma forma de autonomia dos artesãos urbanos", "uma exceção jurídica aplicada nas cidades e uma sobrevivência sem função econômica definida"], 0, "As fontes revelam escalas distintas de coerção: intimidação pública e controle cotidiano da produção."),
      question("Na Loja de sapateiro, trabalhadores que fabricam calçados aparecem descalços. Em uma interpretação histórica, esse contraste sintetiza:", ["a apropriação do produto e da habilidade de quem trabalhava por aquele que controlava a oficina", "a inexistência de consumidores urbanos para os bens fabricados pelos trabalhadores especializados no estabelecimento", "a autonomia dos oficiais urbanos para decidir como utilizar os rendimentos do estabelecimento", "a valorização social do trabalho manual como caminho regular de ascensão dos escravizados"], 0, "O detalhe evidencia que dominar uma técnica e produzir mercadorias não garantia acesso ao produto nem controle sobre o trabalho."),
      question("A ideia de que a tortura resultava apenas da crueldade particular de alguns senhores é limitada, pois a fonte do açoitamento permite observar:", ["agentes e procedimentos públicos que integravam a coerção à preservação da ordem escravista", "a resistência sistemática das autoridades imperiais à aplicação de penas corporais em espaços urbanos", "a transferência integral do poder de punir para associações privadas de proprietários e comerciantes", "a separação entre a legislação criminal do Império e a proteção jurídica da propriedade escravista"], 0, "A violência particular existia, mas leis, guardas e instituições também protegiam a ordem senhorial."),
      question("Ao relacionar especialização artesanal e coerção, as fontes questionam qual interpretação sobre a escravidão brasileira?", ["a de que o trabalho escravizado se restringia a tarefas rurais simples e sem conhecimento técnico", "a de que proprietários urbanos buscavam controlar a produtividade e a circulação de mercadorias", "a de que as cidades imperiais reuniam oficinas, serviços e diferentes formas de trabalho compulsório", "a de que a violência funcionava como recurso de disciplina em uma sociedade baseada na propriedade humana"], 0, "A alternativa incorreta questionada pelas fontes é a associação automática entre escravidão, ruralidade e ausência de qualificação.")
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
      question("Na representação dos botocudos, a associação entre armas, nudez e ambiente natural contribui para:", ["produzir uma imagem de exotismo e distância em relação aos padrões europeus de civilização", "comprovar a inexistência de organização política entre os povos indígenas representados", "registrar a integração dos personagens às instituições urbanas criadas pela Corte portuguesa", "demonstrar que as classificações empregadas pelo artista foram formuladas pelos próprios indígenas"], 0, "A seleção dos elementos orienta o primeiro nível de interpretação sobre o olhar europeu."),
      question("Debret diferenciava indígenas “selvagens” e “civilizados” segundo sua aproximação a roupas, objetos e moradias europeias. Essa classificação expressa:", ["uma hierarquia cultural que transforma a experiência europeia em medida universal de progresso", "uma descrição técnica das diferenças econômicas reconhecida igualmente pelos grupos representados", "uma valorização da autonomia indígena diante das políticas de catequese e integração territorial", "uma oposição jurídica entre povos aliados e inimigos definida pela Constituição brasileira de 1824"], 0, "A categoria não apenas descreve diferenças: ordena modos de vida segundo uma referência eurocêntrica."),
      question("A gravura é importante tanto para estudar povos indígenas quanto o pensamento do século XIX. Essa dupla utilização é possível porque a fonte:", ["registra elementos selecionados da cena e também revela categorias empregadas pelo observador europeu", "reproduz integralmente a perspectiva dos retratados e neutraliza os valores culturais de seu autor", "deixa de informar sobre o período quando são identificados estereótipos em sua composição", "permite substituir relatos indígenas, pois apresenta evidências visuais produzidas por observação direta"], 0, "A fonte contém indícios sobre o referente e sobre o sistema de representação de quem a produziu."),
      question("A redução de povos diversos às categorias “selvagem” e “civilizado” favorecia políticas de tutela porque:", ["a suposta inferioridade cultural era mobilizada para justificar direção, catequese e controle por outros agentes", "a classificação reconhecia soberania plena e impedia interferências externas das autoridades nos territórios indígenas", "o binarismo valorizava igualmente os modos de vida e preservava diferenças políticas entre os grupos", "a oposição recusava qualquer expectativa de transformação dos costumes segundo padrões coloniais"], 0, "A tutela apresenta o controle como necessidade decorrente de uma inferioridade previamente atribuída."),
      question("Qual leitura emprega corretamente o conceito de alteridade sem reproduzir o eurocentrismo presente na classificação?", ["a diferença deve ser analisada historicamente sem converter o modo de vida do observador em escala de superioridade", "a diferença cultural comprova estágios universais pelos quais todas as sociedades precisam necessariamente passar", "a descrição europeia é mais confiável por utilizar técnicas artísticas acadêmicas desconhecidas pelos povos retratados", "a preservação da diversidade exige considerar incomparáveis todas as fontes produzidas em situações de contato cultural"], 0, "Reconhecer alteridade exige contextualizar diferenças e relações de poder, sem naturalizar uma escala universal."),
      question("Ao criticar os estereótipos presentes na obra, o historiador não precisa abandonar a fonte. Ele pode utilizá-la para:", ["investigar simultaneamente a sociedade representada e os limites culturais do olhar que a representou", "reconstituir apenas os hábitos indígenas que correspondam às descrições registradas pelo artista francês", "demonstrar que imagens preconceituosas não produziram efeitos sobre políticas e memórias posteriores", "separar os aspectos considerados verdadeiros daqueles que não correspondam aos padrões europeus atuais"], 0, "A crítica interna transforma os limites da fonte em objeto de investigação histórica.")
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
      question("Ao comparar Negros de Carro e Radiola de Promessa, permanece nas duas composições:", ["o deslocamento coletivo de um objeto pelas ruas", "a condição jurídica dos personagens representados", "a função econômica atribuída ao objeto transportado", "o vestuário utilizado pelos trabalhadores da cena"], 0, "A ação coletiva permanece; carga, roupas, contexto e sentido histórico são transformados."),
      question("Gê Viana preserva a estrutura do transporte coletivo, mas substitui a carga por uma aparelhagem sonora. Esse procedimento produz uma releitura porque:", ["retoma uma imagem reconhecível para deslocar seus personagens da exploração à produção cultural", "apaga a referência ao passado para apresentar a cena como registro autônomo do presente", "confirma o significado original ao atualizar apenas as técnicas materiais de reprodução artística", "substitui a interpretação histórica por uma homenagem estética sem relação com disputas de memória"], 0, "O diálogo formal permite reconhecer Debret, enquanto as alterações contestam o lugar visual reservado aos personagens negros."),
      question("Um crítico afirma que a releitura ameniza a escravidão ao apresentar uma cena vibrante. A resposta mais consistente seria:", ["a nova obra não substitui a fonte colonial; ela a convoca para questionar a repetição de imagens negras restritas ao sofrimento", "a releitura comprova que o transporte representado por Debret era uma atividade cultural e voluntária no período escravista", "a presença de roupas contemporâneas impede qualquer relação crítica com o passado escravista brasileiro e suas imagens", "a arte atual deve repetir a violência original para conservar o valor documental e a função social das imagens históricas"], 0, "Ressignificar não é negar a violência; é disputar os limites das representações herdadas."),
      question("A aparelhagem sonora modifica o papel simbólico da carga ao associá-la:", ["à circulação de música, encontro social e criação cultural negra", "à continuidade do trabalho compulsório organizado pelas autoridades urbanas", "à incorporação dos personagens à cultura oficial da monarquia brasileira", "à transformação da memória escravista em celebração desprovida de conflito"], 0, "O objeto contemporâneo desloca a cena para agência e produção cultural, mantendo a tensão com a obra anterior."),
      question("As duas obras podem ser utilizadas para discutir memória em disputa porque:", ["a imagem posterior intervém nos sentidos sociais consolidados pela circulação da representação anterior", "a releitura elimina a necessidade de analisar a autoria e o contexto da obra produzida por Debret", "a semelhança compositiva demonstra que diferentes períodos constroem interpretações equivalentes do passado", "a atualização estética permite determinar qual das duas imagens representa objetivamente a experiência negra"], 0, "A disputa não procura escolher uma imagem neutra, mas compreender como representações são retomadas e contestadas."),
      question("O projeto de atualizar imagens consideradas traumáticas atua sobre um problema da cultura visual brasileira: a:", ["repetição de pessoas negras sobretudo como corpos explorados, vulneráveis ou subordinados", "ausência completa de registros visuais sobre o trabalho escravizado nas cidades imperiais", "predominância de artistas negros nas encomendas oficiais realizadas durante o Primeiro Reinado", "substituição das fontes coloniais por produções contemporâneas nos acervos públicos nacionais"], 0, "A crítica se dirige à permanência de repertórios visuais limitadores, não à existência das fontes históricas.")
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
  state.questions = [
    state.current.questions[0],
    ...shuffle(state.current.questions.slice(1)).slice(0, 3)
  ];
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
