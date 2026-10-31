export type RelocationRegion = {
  name: string
  description: string
}

export type RelocationTopic = {
  title: string
  text: string
}

export type StateRegionGroup = 'Nordeste' | 'Sul' | 'Centro Oeste' | 'Oeste'

const REGION_NORTHEAST: StateRegionGroup = 'Nordeste'
const REGION_SOUTH: StateRegionGroup = 'Sul'
const REGION_MIDWEST: StateRegionGroup = 'Centro Oeste'
const REGION_WEST: StateRegionGroup = 'Oeste'

export type StateGuide = {
  slug: string
  name: string
  englishName: string
  abbreviation: string
  locationPhrase: string
  group: StateRegionGroup
  serviceMode: 'direct' | 'network'
  summary: string
  overview: string
  regions: RelocationRegion[]
  topics: RelocationTopic[]
  visitPlan: string
  relatedSlugs: string[]
}

export const stateGuides: StateGuide[] = [
  {
    slug: 'alabama',
    name: 'Alabama',
    englishName: 'Alabama',
    abbreviation: 'AL',
    locationPhrase: 'no Alabama',
    group: REGION_SOUTH,
    serviceMode: 'direct',
    summary:
      'Compare o norte do Alabama, Birmingham, a costa do Golfo e a região central com orientação direta de Becca em português.',
    overview:
      'O Alabama reúne polos de tecnologia e indústria, cidades universitárias, áreas rurais e comunidades costeiras. A escolha muda bastante conforme emprego, acesso a aeroportos, tempo de deslocamento e preferência entre vida urbana, suburbana ou com mais terreno.',
    regions: [
      {
        name: 'Huntsville e norte do Alabama',
        description:
          'Tecnologia, indústria, acesso interestadual e cidades próximas com ritmos diferentes.',
      },
      {
        name: 'Birmingham',
        description:
          'Centro urbano amplo com bairros, subúrbios e conexões regionais variadas.',
      },
      {
        name: 'Mobile e Baldwin County',
        description:
          'Rotina costeira, acesso à baía e planejamento específico para clima e seguro.',
      },
      {
        name: 'Montgomery e Auburn',
        description:
          'Capital estadual, cidade universitária e comunidades menores no corredor central.',
      },
    ],
    topics: [
      {
        title: 'Clima e drenagem',
        text: 'Confirme histórico de água, drenagem do lote e coberturas de seguro adequadas ao endereço.',
      },
      {
        title: 'Deslocamento real',
        text: 'Teste o trajeto nos horários em que você pretende trabalhar, estudar ou acessar serviços.',
      },
      {
        title: 'Terreno e manutenção',
        text: 'Em imóveis fora da cidade, verifique acesso, poço, sistema séptico e responsabilidades de manutenção.',
      },
    ],
    visitPlan:
      'Reserve blocos separados para Huntsville, Birmingham e a região que melhor combina com sua rotina. Becca pode organizar comparações locais e visitas diretas no Alabama.',
    relatedSlugs: ['tennessee', 'georgia', 'florida'],
  },
  {
    slug: 'alaska',
    name: 'Alasca',
    englishName: 'Alaska',
    abbreviation: 'AK',
    locationPhrase: 'no Alasca',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Organize uma mudança para o Alasca comparando acesso, serviços, inverno e logística entre os principais centros do estado.',
    overview:
      'No Alasca, distância e acesso pesam tanto quanto o imóvel. Uma casa próxima de Anchorage oferece uma rotina diferente de uma propriedade em Fairbanks, Juneau ou na Península de Kenai, especialmente quando transporte, manutenção e serviços entram na decisão.',
    regions: [
      {
        name: 'Anchorage e Mat Su Valley',
        description:
          'Maior concentração urbana do estado com opções entre cidade e lotes mais amplos.',
      },
      {
        name: 'Fairbanks',
        description:
          'Interior com inverno intenso, grande variação de luz e necessidades próprias de aquecimento.',
      },
      {
        name: 'Juneau',
        description:
          'Capital acessível principalmente por avião ou barco, com terreno limitado e clima úmido.',
      },
      {
        name: 'Península de Kenai',
        description:
          'Comunidades menores, longas distâncias e forte ligação com atividades ao ar livre.',
      },
    ],
    topics: [
      {
        title: 'Aquecimento e inverno',
        text: 'Revise sistema de aquecimento, isolamento, telhado e custos operacionais com profissionais locais.',
      },
      {
        title: 'Acesso e entrega',
        text: 'Calcule distâncias para trabalho, saúde, mercado, aeroporto e entrega de materiais.',
      },
      {
        title: 'Água e utilidades',
        text: 'Fora dos centros, confirme poço, sistema séptico, combustível e manutenção de vias.',
      },
    ],
    visitPlan:
      'Escolha primeiro um centro principal e visite no período do ano mais parecido com sua futura rotina. Uma conexão local pode mostrar como acesso e manutenção mudam de endereço para endereço.',
    relatedSlugs: ['washington', 'montana', 'wyoming'],
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    englishName: 'Arizona',
    abbreviation: 'AZ',
    locationPhrase: 'no Arizona',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare deserto, altitude e escalas urbanas no Arizona antes de decidir entre Phoenix, Tucson, Flagstaff ou Prescott.',
    overview:
      'O Arizona não tem uma única experiência climática. A região de Phoenix oferece uma grande área metropolitana no deserto, enquanto Tucson tem identidade própria e cidades de maior altitude, como Flagstaff e Prescott, passam por estações bem diferentes.',
    regions: [
      {
        name: 'Phoenix e Valley of the Sun',
        description:
          'Grande rede de cidades com deslocamentos, HOAs e estilos de construção variados.',
      },
      {
        name: 'Tucson',
        description:
          'Escala metropolitana menor, paisagem de deserto e acesso a áreas montanhosas.',
      },
      {
        name: 'Flagstaff',
        description: 'Maior altitude, neve no inverno e acesso ao norte do estado.',
      },
      {
        name: 'Prescott e Prescott Valley',
        description: 'Comunidades de altitude média com ligação a Phoenix e ao norte.',
      },
    ],
    topics: [
      {
        title: 'Calor e energia',
        text: 'Compare orientação solar, sombreamento, sistema de climatização e histórico de consumo disponível.',
      },
      {
        title: 'Água e paisagismo',
        text: 'Entenda a fonte de água, regras locais e manutenção de áreas externas antes da oferta.',
      },
      {
        title: 'Altitude e estações',
        text: 'Visite as opções de deserto e altitude para sentir a diferença real de clima e rotina.',
      },
    ],
    visitPlan:
      'Não tente avaliar Phoenix e o norte do estado no mesmo dia. Separe a viagem por altitude e teste deslocamentos no horário de maior uso.',
    relatedSlugs: ['nevada', 'new-mexico', 'utah'],
  },
  {
    slug: 'arkansas',
    name: 'Arkansas',
    englishName: 'Arkansas',
    abbreviation: 'AR',
    locationPhrase: 'no Arkansas',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Little Rock, o noroeste do Arkansas, Hot Springs e Fort Smith com foco em rotina, terreno e acesso.',
    overview:
      'O Arkansas combina centros urbanos, cidades em crescimento, lagos e áreas de relevo acidentado. O noroeste tem dinâmica diferente da capital e do oeste do estado, por isso emprego, aeroporto, topografia e serviços devem orientar a busca.',
    regions: [
      {
        name: 'Little Rock e região central',
        description:
          'Capital, serviços estaduais e comunidades conectadas pelas principais rodovias.',
      },
      {
        name: 'Northwest Arkansas',
        description:
          'Bentonville, Rogers, Springdale e Fayetteville formam um corredor com perfis distintos.',
      },
      {
        name: 'Hot Springs',
        description:
          'Lagos, turismo e terrenos que pedem atenção à inclinação e ao acesso.',
      },
      {
        name: 'Fort Smith',
        description: 'Centro regional no oeste, próximo à divisa com Oklahoma.',
      },
    ],
    topics: [
      {
        title: 'Topografia e água',
        text: 'Observe inclinação, drenagem, muros de contenção e acesso durante chuva.',
      },
      {
        title: 'Serviços rurais',
        text: 'Confirme internet, poço, sistema séptico, coleta e manutenção da estrada.',
      },
      {
        title: 'Corredores de trabalho',
        text: 'Mapeie o trajeto até o emprego antes de escolher uma cidade apenas pela distância no mapa.',
      },
    ],
    visitPlan:
      'Use dias separados para Little Rock e Northwest Arkansas. Se considerar área rural ou de lago, inclua uma visita técnica ao terreno e ao acesso.',
    relatedSlugs: ['missouri', 'oklahoma', 'tennessee'],
  },
  {
    slug: 'california',
    name: 'Califórnia',
    englishName: 'California',
    abbreviation: 'CA',
    locationPhrase: 'na Califórnia',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Reduza uma busca ampla na Califórnia comparando trabalho, deslocamento, clima e custo total entre regiões muito diferentes.',
    overview:
      'A Califórnia funciona como vários mercados em um só estado. Los Angeles, Bay Area, San Diego, Sacramento e os centros do interior têm escalas, climas e padrões de deslocamento próprios, então a região precisa ser escolhida antes do imóvel.',
    regions: [
      {
        name: 'Los Angeles e sul da Califórnia',
        description:
          'Muitos centros de emprego e trajetos que variam bastante conforme o horário.',
      },
      {
        name: 'San Francisco Bay Area',
        description:
          'Rede de cidades conectadas por rodovias, pontes e diferentes opções de transporte.',
      },
      {
        name: 'San Diego County',
        description:
          'Costa, comunidades interiores e conexão com uma grande área metropolitana.',
      },
      {
        name: 'Sacramento e Central Valley',
        description:
          'Capital estadual, cidades do interior e acesso a outras regiões do norte.',
      },
    ],
    topics: [
      {
        title: 'Tempo de deslocamento',
        text: 'Teste rotas em horários reais e considere pedágios, pontes, transporte e estacionamento.',
      },
      {
        title: 'Seguro e risco natural',
        text: 'Peça cotações e verifique mapas relevantes para incêndio, enchente e outros riscos do endereço.',
      },
      {
        title: 'Tipo de propriedade',
        text: 'Compare casa, condomínio, associação, taxas e responsabilidades de manutenção.',
      },
    ],
    visitPlan:
      'Escolha uma única área metropolitana por viagem e compare microrregiões usando o mesmo trajeto diário. Isso produz uma decisão mais útil do que visitar cidades distantes rapidamente.',
    relatedSlugs: ['oregon', 'nevada', 'arizona'],
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    englishName: 'Colorado',
    abbreviation: 'CO',
    locationPhrase: 'no Colorado',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Front Range, Colorado Springs, norte do estado e Western Slope com atenção a altitude, neve e acesso.',
    overview:
      'No Colorado, morar perto das montanhas não significa ter o mesmo acesso ou a mesma rotina. A Front Range concentra cidades e empregos, enquanto comunidades de maior altitude e o Western Slope exigem outra avaliação de clima, vias e serviços.',
    regions: [
      {
        name: 'Denver e Front Range',
        description:
          'Grande corredor urbano com cidades conectadas e deslocamentos variados.',
      },
      {
        name: 'Colorado Springs',
        description:
          'Centro regional ao sul de Denver com bairros e comunidades próximas.',
      },
      {
        name: 'Fort Collins e norte',
        description:
          'Cidade universitária, corredor para Loveland e acesso ao norte do estado.',
      },
      {
        name: 'Western Slope',
        description:
          'Grand Junction e comunidades de montanha com distâncias maiores entre serviços.',
      },
    ],
    topics: [
      {
        title: 'Altitude e neve',
        text: 'Considere adaptação, remoção de neve, orientação do lote e acesso no inverno.',
      },
      {
        title: 'Incêndio e seguro',
        text: 'Verifique vegetação, acesso de emergência e disponibilidade de cobertura antes de decidir.',
      },
      {
        title: 'Água e associação',
        text: 'Confirme fonte de água, regras da associação e responsabilidades do proprietário.',
      },
    ],
    visitPlan:
      'Compare primeiro cidades da Front Range. Se incluir montanha ou Western Slope, acrescente tempo para dirigir as rotas em condições realistas.',
    relatedSlugs: ['utah', 'wyoming', 'new-mexico'],
  },
  {
    slug: 'connecticut',
    name: 'Connecticut',
    englishName: 'Connecticut',
    abbreviation: 'CT',
    locationPhrase: 'em Connecticut',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare cidades, linhas de trem, costa e interior de Connecticut com foco no trajeto e no custo completo do endereço.',
    overview:
      'Connecticut oferece acesso a Nova York, centros próprios como Hartford e New Haven, comunidades costeiras e áreas mais rurais. A escolha costuma depender do trabalho, da estação de trem, do tipo de imóvel e dos serviços municipais.',
    regions: [
      {
        name: 'Fairfield County',
        description:
          'Conexões com Nova York, cidades costeiras e diferentes opções ferroviárias.',
      },
      {
        name: 'Hartford e centro',
        description: 'Capital estadual e comunidades próximas com trajetos regionais.',
      },
      {
        name: 'New Haven e costa central',
        description: 'Cidade universitária, linha costeira e acesso ferroviário.',
      },
      {
        name: 'New London e leste',
        description: 'Costa, centros menores e áreas mais abertas no interior.',
      },
    ],
    topics: [
      {
        title: 'Trem e deslocamento',
        text: 'Faça o percurso completo até a estação, plataforma e destino final no horário de trabalho.',
      },
      {
        title: 'Casa mais antiga',
        text: 'Planeje inspeção detalhada de estrutura, sistemas, umidade e eficiência energética.',
      },
      {
        title: 'Custos municipais',
        text: 'Compare impostos, serviços e possíveis taxas do município específico.',
      },
    ],
    visitPlan:
      'Organize a viagem por linha de trem ou corredor rodoviário. Visite a estação e o centro da cidade no mesmo período em que usaria esses serviços.',
    relatedSlugs: ['new-york', 'massachusetts', 'rhode-island'],
  },
  {
    slug: 'delaware',
    name: 'Delaware',
    englishName: 'Delaware',
    abbreviation: 'DE',
    locationPhrase: 'em Delaware',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare o norte urbano, a região central e a costa de Delaware considerando deslocamento, sazonalidade e seguro.',
    overview:
      'Embora seja compacto, Delaware muda bastante entre Wilmington, Dover e as comunidades costeiras de Sussex County. A proximidade de Maryland, Pensilvânia e Nova Jersey também influencia trabalho, viagens e serviços.',
    regions: [
      {
        name: 'Wilmington e New Castle County',
        description:
          'Norte urbano com conexões ferroviárias e rodoviárias para estados vizinhos.',
      },
      {
        name: 'Newark',
        description: 'Cidade universitária com acesso ao corredor da Interstate 95.',
      },
      {
        name: 'Dover e região central',
        description: 'Capital estadual e ritmo diferente entre o norte e a costa.',
      },
      {
        name: 'Sussex County e praias',
        description:
          'Comunidades costeiras com turismo, tráfego sazonal e associações variadas.',
      },
    ],
    topics: [
      {
        title: 'Costa e enchente',
        text: 'Confirme zona de risco, elevação, drenagem e opções de seguro para o endereço.',
      },
      {
        title: 'Tráfego sazonal',
        text: 'Teste os principais acessos em períodos movimentados se a costa fizer parte da rotina.',
      },
      {
        title: 'Associação e manutenção',
        text: 'Leia orçamento, regras e responsabilidades de condomínios e comunidades planejadas.',
      },
    ],
    visitPlan:
      'Compare o norte e a costa em dias separados. Na região de praia, dirija até serviços essenciais fora do horário turístico e também em momento movimentado.',
    relatedSlugs: ['maryland', 'pennsylvania', 'new-jersey'],
  },
  {
    slug: 'florida',
    name: 'Flórida',
    englishName: 'Florida',
    abbreviation: 'FL',
    locationPhrase: 'na Flórida',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Escolha a região certa da Flórida comparando costa, interior, seguro, condomínio e rotina antes de procurar imóveis.',
    overview:
      'A Flórida tem vários centros independentes. Miami e Fort Lauderdale, Orlando, Tampa Bay, Jacksonville e o Panhandle oferecem aeroportos, climas locais, trajetos e custos de manutenção diferentes.',
    regions: [
      {
        name: 'South Florida',
        description:
          'Miami, Fort Lauderdale e Palm Beach formam um corredor costeiro denso.',
      },
      {
        name: 'Orlando e centro',
        description: 'Centro logístico e turístico com muitas comunidades planejadas.',
      },
      {
        name: 'Tampa Bay',
        description:
          'Tampa, St. Petersburg e cidades próximas conectadas por pontes e rodovias.',
      },
      {
        name: 'Jacksonville e norte',
        description: 'Grande extensão territorial, costa atlântica e acesso à Geórgia.',
      },
    ],
    topics: [
      {
        title: 'Vento, água e seguro',
        text: 'Solicite cotações e revise telhado, aberturas, elevação e zona de enchente.',
      },
      {
        title: 'Condomínio e HOA',
        text: 'Analise reservas, avaliações especiais, regras, cobertura e responsabilidades.',
      },
      {
        title: 'Uso da propriedade',
        text: 'Confirme regras locais e da associação antes de contar com aluguel ou uso sazonal.',
      },
    ],
    visitPlan:
      'Escolha no máximo duas áreas metropolitanas por viagem. Inclua o trajeto até aeroporto, trabalho, saúde e serviços em horário comum e em período de chuva.',
    relatedSlugs: ['alabama', 'georgia', 'south-carolina'],
  },
  {
    slug: 'georgia',
    name: 'Geórgia',
    englishName: 'Georgia',
    abbreviation: 'GA',
    locationPhrase: 'na Geórgia',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Atlanta, Savannah, Augusta e o norte da Geórgia usando rotina, terreno, clima e acesso como filtros.',
    overview:
      'A Geórgia vai de uma grande região metropolitana a cidades históricas costeiras, centros regionais e áreas montanhosas. A direção do trabalho e o corredor rodoviário podem ser mais importantes que a distância em quilômetros.',
    regions: [
      {
        name: 'Metro Atlanta',
        description:
          'Muitos centros de emprego, condados e padrões de deslocamento dentro de uma área ampla.',
      },
      {
        name: 'Savannah e costa',
        description: 'Cidade histórica, umidade costeira e acesso a ilhas e portos.',
      },
      {
        name: 'Augusta',
        description: 'Centro regional no leste com ligação à Carolina do Sul.',
      },
      {
        name: 'North Georgia',
        description:
          'Cidades menores, relevo montanhoso e acesso diferente no inverno e na chuva.',
      },
    ],
    topics: [
      {
        title: 'Direção do trajeto',
        text: 'Escolha o lado da região metropolitana depois de mapear o destino diário.',
      },
      {
        title: 'Umidade e pragas',
        text: 'Revise ventilação, água, madeira e histórico de tratamento com inspetor qualificado.',
      },
      {
        title: 'Costa ou montanha',
        text: 'Verifique enchente, inclinação, drenagem e acesso conforme a geografia do imóvel.',
      },
    ],
    visitPlan:
      'Em Atlanta, concentre cada dia em um corredor. Para Savannah ou North Georgia, reserve uma etapa própria para entender clima, acesso e manutenção.',
    relatedSlugs: ['alabama', 'florida', 'south-carolina'],
  },
  {
    slug: 'hawaii',
    name: 'Havaí',
    englishName: 'Hawaii',
    abbreviation: 'HI',
    locationPhrase: 'no Havaí',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Planeje uma compra no Havaí escolhendo primeiro a ilha e entendendo propriedade, logística, seguro e serviços.',
    overview:
      'Cada ilha do Havaí funciona como um mercado separado. Oahu concentra mais serviços, enquanto Maui, Hawaii Island e Kauai apresentam distâncias, inventário e logística próprios. A ilha deve ser escolhida antes da busca por imóveis.',
    regions: [
      {
        name: 'Oahu',
        description:
          'Honolulu, centros de trabalho, transporte e comunidades em diferentes lados da ilha.',
      },
      {
        name: 'Maui',
        description:
          'Comunidades costeiras e do interior com logística e recuperação locais a considerar.',
      },
      {
        name: 'Hawaii Island',
        description:
          'Grande extensão, microclimas e longas distâncias entre algumas áreas e serviços.',
      },
      {
        name: 'Kauai',
        description:
          'Inventário limitado, ritmo insular e acesso concentrado em poucos corredores.',
      },
    ],
    topics: [
      {
        title: 'Forma de propriedade',
        text: 'Confirme se o imóvel é fee simple ou leasehold e revise os termos com profissionais locais.',
      },
      {
        title: 'Logística insular',
        text: 'Inclua frete, materiais, veículos, saúde, trabalho e viagens no orçamento da mudança.',
      },
      {
        title: 'Risco e microclima',
        text: 'Verifique vento, enchente, lava, chuva e seguro conforme a localização exata.',
      },
    ],
    visitPlan:
      'Visite uma ilha por vez e permaneça tempo suficiente para testar trabalho, mercado, saúde e deslocamentos. Uma conexão local deve explicar diferenças de propriedade e manutenção.',
    relatedSlugs: ['california', 'washington', 'oregon'],
  },
  {
    slug: 'idaho',
    name: 'Idaho',
    englishName: 'Idaho',
    abbreviation: 'ID',
    locationPhrase: 'em Idaho',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Treasure Valley, norte de Idaho, Idaho Falls e Magic Valley com foco em clima, acesso e serviços.',
    overview:
      'Idaho reúne um centro urbano crescente em Boise, cidades lacustres no norte, comunidades do leste e áreas agrícolas. Inverno, distância, água e tipo de terreno mudam conforme a região.',
    regions: [
      {
        name: 'Boise e Treasure Valley',
        description:
          'Boise, Meridian, Nampa e cidades próximas formam o maior corredor urbano.',
      },
      {
        name: 'Coeur d Alene e norte',
        description: 'Lagos, inverno mais marcado e acesso a Spokane, Washington.',
      },
      {
        name: 'Idaho Falls e leste',
        description: 'Centro regional com inverno frio e ligação a áreas rurais.',
      },
      {
        name: 'Twin Falls e Magic Valley',
        description:
          'Agricultura, cânions e comunidades menores ao longo da Interstate 84.',
      },
    ],
    topics: [
      {
        title: 'Neve e acesso',
        text: 'Verifique manutenção da via, orientação do lote e responsabilidades de remoção de neve.',
      },
      {
        title: 'Água e irrigação',
        text: 'Entenda poço, direitos ou sistemas de irrigação e obrigações ligadas ao terreno.',
      },
      {
        title: 'Incêndio e seguro',
        text: 'Avalie vegetação, acesso de emergência e disponibilidade de cobertura em áreas expostas.',
      },
    ],
    visitPlan:
      'Não misture Boise e o norte em uma visita curta. Escolha a região principal e dirija até os serviços que fariam parte da semana comum.',
    relatedSlugs: ['montana', 'washington', 'oregon'],
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    englishName: 'Illinois',
    abbreviation: 'IL',
    locationPhrase: 'em Illinois',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Chicago, subúrbios e centros regionais de Illinois usando transporte, impostos locais e tipo de imóvel.',
    overview:
      'Illinois oferece uma grande região metropolitana no nordeste e cidades de escalas diferentes no restante do estado. Trem, acesso a rodovias, município e idade da construção ajudam a separar opções que parecem semelhantes no mapa.',
    regions: [
      {
        name: 'Chicago',
        description:
          'Bairros urbanos, condomínios, transporte e diferentes padrões de deslocamento.',
      },
      {
        name: 'Subúrbios de Chicago',
        description:
          'Muitos municípios conectados por linhas ferroviárias e autoestradas.',
      },
      {
        name: 'Rockford e norte',
        description: 'Centro regional com acesso a Wisconsin e à região de Chicago.',
      },
      {
        name: 'Springfield, Champaign e centro',
        description:
          'Capital, cidade universitária e comunidades menores do centro do estado.',
      },
    ],
    topics: [
      {
        title: 'Município e impostos',
        text: 'Compare a conta total e os serviços do município, não apenas o preço da casa.',
      },
      {
        title: 'Trem e estacionamento',
        text: 'Teste a viagem completa e inclua estação, estacionamento e último trecho.',
      },
      {
        title: 'Frio e construção',
        text: 'Revise telhado, aquecimento, isolamento, porão e sinais de água.',
      },
    ],
    visitPlan:
      'Na região de Chicago, organize os dias por linha de trem ou autoestrada. Para o interior, avalie acesso a saúde, aeroporto e emprego regional.',
    relatedSlugs: ['indiana', 'wisconsin', 'missouri'],
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    englishName: 'Indiana',
    abbreviation: 'IN',
    locationPhrase: 'em Indiana',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Indianapolis, Fort Wayne, Northwest Indiana e cidades universitárias com foco em acesso e custo completo.',
    overview:
      'Indiana tem um centro metropolitano forte em Indianapolis, centros regionais e comunidades conectadas a Chicago e Louisville. Rodovias, direção do trabalho e condição do imóvel são filtros práticos para a busca.',
    regions: [
      {
        name: 'Indianapolis e cidades próximas',
        description:
          'Região metropolitana central com muitos corredores de deslocamento.',
      },
      {
        name: 'Fort Wayne',
        description: 'Centro regional no nordeste com acesso a Ohio e Michigan.',
      },
      {
        name: 'Northwest Indiana',
        description: 'Comunidades ligadas à região de Chicago por rodovia e trem.',
      },
      {
        name: 'Bloomington e sul',
        description: 'Cidade universitária, relevo mais variado e acesso a Louisville.',
      },
    ],
    topics: [
      {
        title: 'Corredor de trabalho',
        text: 'Escolha o lado da cidade depois de mapear o trajeto e as conexões interestaduais.',
      },
      {
        title: 'Água e fundação',
        text: 'Revise porão, espaço inferior, drenagem e sinais de movimentação.',
      },
      {
        title: 'Vento e granizo',
        text: 'Pergunte sobre telhado, reparos anteriores e opções de seguro disponíveis.',
      },
    ],
    visitPlan:
      'Em Indianapolis, compare corredores em horários de pico. Se considerar Northwest Indiana, faça o trajeto real até Chicago ou a estação prevista.',
    relatedSlugs: ['illinois', 'ohio', 'kentucky'],
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    englishName: 'Iowa',
    abbreviation: 'IA',
    locationPhrase: 'em Iowa',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Des Moines, Cedar Rapids, Iowa City e outros centros com atenção a enchente, inverno e serviços.',
    overview:
      'Iowa combina centros urbanos de escala média, cidades universitárias e áreas rurais. O acesso interestadual, a bacia hidrográfica e a distância de serviços merecem ser avaliados junto com o imóvel.',
    regions: [
      {
        name: 'Des Moines e centro',
        description:
          'Capital e maior centro de emprego do estado com subúrbios em várias direções.',
      },
      {
        name: 'Cedar Rapids e Iowa City',
        description: 'Corredor urbano e universitário no leste.',
      },
      {
        name: 'Quad Cities',
        description: 'Comunidades dos dois lados do Mississippi conectadas a Illinois.',
      },
      {
        name: 'Sioux City e oeste',
        description: 'Centro regional no encontro de Iowa, Nebraska e South Dakota.',
      },
    ],
    topics: [
      {
        title: 'Enchente e drenagem',
        text: 'Consulte mapas, histórico, elevação e funcionamento da drenagem local.',
      },
      {
        title: 'Inverno e energia',
        text: 'Revise aquecimento, isolamento, janelas e acesso durante neve.',
      },
      {
        title: 'Radon e porão',
        text: 'Inclua testes e inspeção do porão no plano de diligência.',
      },
    ],
    visitPlan:
      'Siga os corredores interestaduais e compare a distância real até emprego, saúde e aeroporto. Visite também depois de chuva quando possível.',
    relatedSlugs: ['nebraska', 'minnesota', 'illinois'],
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    englishName: 'Kansas',
    abbreviation: 'KS',
    locationPhrase: 'no Kansas',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Kansas City, Wichita, Topeka, Lawrence e centros menores com foco em clima, solo e deslocamento.',
    overview:
      'Kansas tem dois grandes polos de decisão: a parte da região de Kansas City no leste e Wichita no centro sul. A capital, cidades universitárias e comunidades rurais completam opções com acessos e serviços diferentes.',
    regions: [
      {
        name: 'Kansas City metro',
        description:
          'Cidades no lado do Kansas conectadas a empregos e serviços dos dois estados.',
      },
      {
        name: 'Wichita',
        description: 'Maior centro urbano do estado com forte rede regional.',
      },
      {
        name: 'Topeka e Lawrence',
        description: 'Capital e cidade universitária no corredor da Interstate 70.',
      },
      {
        name: 'Manhattan e oeste',
        description:
          'Centros menores separados por distâncias maiores e áreas agrícolas.',
      },
    ],
    topics: [
      {
        title: 'Vento e granizo',
        text: 'Revise telhado, abrigo, histórico de reparos e condições de seguro.',
      },
      {
        title: 'Solo e fundação',
        text: 'Observe drenagem, fissuras e movimentação com inspeção apropriada.',
      },
      {
        title: 'Distância de serviços',
        text: 'Calcule acesso a saúde, aeroporto e manutenção antes de escolher área rural.',
      },
    ],
    visitPlan:
      'Compare a região de Kansas City e Wichita em viagens separadas. No leste, atravesse a divisa estadual para entender a rotina completa.',
    relatedSlugs: ['missouri', 'nebraska', 'oklahoma'],
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    englishName: 'Kentucky',
    abbreviation: 'KY',
    locationPhrase: 'em Kentucky',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Louisville, Lexington, Northern Kentucky e Bowling Green com atenção a relevo, acesso e condição da casa.',
    overview:
      'Kentucky reúne dois grandes centros, comunidades conectadas a Cincinnati e Nashville, e extensas áreas rurais. Colinas, drenagem e sistemas próprios do terreno podem ser decisivos fora das áreas urbanas.',
    regions: [
      {
        name: 'Louisville',
        description:
          'Maior centro urbano do estado com acesso a Indiana e muitos corredores locais.',
      },
      {
        name: 'Lexington e Bluegrass',
        description:
          'Cidade universitária cercada por comunidades menores e áreas rurais.',
      },
      {
        name: 'Northern Kentucky',
        description: 'Covington e cidades próximas integradas à região de Cincinnati.',
      },
      {
        name: 'Bowling Green e sul',
        description: 'Centro regional no corredor entre Louisville e Nashville.',
      },
    ],
    topics: [
      {
        title: 'Relevo e drenagem',
        text: 'Avalie inclinação, água, acesso e manutenção de muros ou encostas.',
      },
      {
        title: 'Radon e fundação',
        text: 'Inclua testes e inspeção de porão ou espaço inferior.',
      },
      {
        title: 'Propriedade rural',
        text: 'Confirme limites, acesso, poço, sistema séptico e restrições registradas.',
      },
    ],
    visitPlan:
      'Organize cada dia por centro urbano. Em Northern Kentucky, teste o trajeto até Cincinnati; em área rural, reserve tempo para avaliar o terreno.',
    relatedSlugs: ['tennessee', 'indiana', 'ohio'],
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    englishName: 'Louisiana',
    abbreviation: 'LA',
    locationPhrase: 'na Louisiana',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare New Orleans, Baton Rouge, Acadiana e o norte da Louisiana com foco em elevação, seguro e manutenção.',
    overview:
      'A Louisiana tem culturas e mercados locais distintos. New Orleans, a capital, Lafayette e Shreveport oferecem rotinas diferentes, mas água, umidade e condição da construção merecem atenção em todo o processo.',
    regions: [
      {
        name: 'New Orleans metro',
        description:
          'Cidade histórica, subúrbios, diques e diferenças importantes de elevação.',
      },
      {
        name: 'Baton Rouge',
        description:
          'Capital estadual e centro universitário com expansão em vários corredores.',
      },
      {
        name: 'Lafayette e Acadiana',
        description:
          'Centro regional com identidade cultural própria e comunidades próximas.',
      },
      {
        name: 'Shreveport e norte',
        description:
          'Região ligada ao Texas e ao Arkansas com clima e economia próprios.',
      },
    ],
    topics: [
      {
        title: 'Elevação e enchente',
        text: 'Confirme mapas, certificado de elevação quando aplicável, histórico e drenagem.',
      },
      {
        title: 'Seguro disponível',
        text: 'Obtenha cotações para o endereço antes de assumir o custo mensal.',
      },
      {
        title: 'Umidade e madeira',
        text: 'Inspecione telhado, ventilação, pragas, água e reparos anteriores.',
      },
    ],
    visitPlan:
      'Visite a área em condições normais e observe drenagem, elevação e rotas de saída. Compare o custo de seguro antes de reduzir a lista de imóveis.',
    relatedSlugs: ['mississippi', 'texas', 'arkansas'],
  },
  {
    slug: 'maine',
    name: 'Maine',
    englishName: 'Maine',
    abbreviation: 'ME',
    locationPhrase: 'no Maine',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare Portland, Midcoast, Bangor e o interior do Maine com foco em inverno, acesso, aquecimento e terreno.',
    overview:
      'Maine combina um polo urbano no sul, pequenas cidades costeiras e vastas áreas rurais. A distância até serviços, o sistema de aquecimento e o acesso no inverno ajudam a definir se uma propriedade funciona o ano inteiro.',
    regions: [
      {
        name: 'Portland e sul do Maine',
        description:
          'Maior concentração urbana e conexão mais rápida com New Hampshire e Massachusetts.',
      },
      {
        name: 'Midcoast',
        description:
          'Cidades costeiras, ilhas e vias que podem ter grande variação sazonal.',
      },
      {
        name: 'Bangor e centro',
        description: 'Centro regional para serviços e acesso ao norte do estado.',
      },
      {
        name: 'Augusta e interior',
        description: 'Capital, lagos e comunidades menores com propriedades rurais.',
      },
    ],
    topics: [
      {
        title: 'Aquecimento e eficiência',
        text: 'Identifique combustível, idade do sistema, isolamento e histórico de consumo disponível.',
      },
      {
        title: 'Poço e sistema séptico',
        text: 'Faça testes e confirme localização, capacidade e manutenção.',
      },
      {
        title: 'Acesso no inverno',
        text: 'Entenda remoção de neve, manutenção da estrada e tempo até serviços.',
      },
    ],
    visitPlan:
      'Escolha entre sul, costa ou interior antes de marcar imóveis. Dirija as vias secundárias e confirme como a rotina muda fora da alta temporada.',
    relatedSlugs: ['new-hampshire', 'vermont', 'massachusetts'],
  },
  {
    slug: 'maryland',
    name: 'Maryland',
    englishName: 'Maryland',
    abbreviation: 'MD',
    locationPhrase: 'em Maryland',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Baltimore, os subúrbios de Washington, Annapolis e o oeste de Maryland usando trajeto, água e custos locais.',
    overview:
      'Maryland reúne duas grandes regiões metropolitanas, comunidades na Chesapeake Bay e áreas montanhosas no oeste. Mesmo distâncias curtas podem produzir rotinas muito diferentes por causa de pontes, trânsito e transporte.',
    regions: [
      {
        name: 'Baltimore metro',
        description: 'Cidade, condados próximos e conexões para Washington e o nordeste.',
      },
      {
        name: 'Subúrbios de Washington',
        description:
          'Montgomery e Prince George County com metrô, rodovias e trajetos variados.',
      },
      {
        name: 'Annapolis e Chesapeake',
        description:
          'Capital estadual, costa da baía e propriedades com questões marítimas.',
      },
      {
        name: 'Frederick e oeste',
        description:
          'Cidades menores, relevo crescente e acesso aos corredores metropolitanos.',
      },
    ],
    topics: [
      {
        title: 'Trajeto e pedágios',
        text: 'Teste pontes, transporte, estacionamento e tempo total da porta ao destino.',
      },
      {
        title: 'Baía e drenagem',
        text: 'Verifique enchente, elevação e manutenção de propriedades próximas à água.',
      },
      {
        title: 'Condado e custos',
        text: 'Compare impostos, serviços e regras no condado e município corretos.',
      },
    ],
    visitPlan:
      'Agrupe visitas por corredor de transporte. Se o trabalho estiver em Washington, faça o trajeto no horário previsto antes de escolher a cidade.',
    relatedSlugs: ['virginia', 'delaware', 'pennsylvania'],
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    englishName: 'Massachusetts',
    abbreviation: 'MA',
    locationPhrase: 'em Massachusetts',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare Boston, Worcester, as costas norte e sul e o oeste de Massachusetts com foco em transporte e construção.',
    overview:
      'Massachusetts varia de uma região metropolitana densa a cidades históricas, litoral e comunidades do oeste. Trem, rodovia, idade da casa e sistema de aquecimento têm peso real no orçamento e na rotina.',
    regions: [
      {
        name: 'Boston metro',
        description:
          'Cidade e municípios conectados por diferentes linhas de transporte e rodovias.',
      },
      {
        name: 'Worcester e centro',
        description:
          'Centro regional com acesso a Boston, oeste do estado e Rhode Island.',
      },
      {
        name: 'North Shore e South Shore',
        description:
          'Comunidades costeiras com trajetos ferroviários e rodoviários próprios.',
      },
      {
        name: 'Western Massachusetts',
        description:
          'Springfield, Pioneer Valley e Berkshires com menor densidade e mais distância.',
      },
    ],
    topics: [
      {
        title: 'Casa mais antiga',
        text: 'Revise estrutura, sistemas, umidade, isolamento e atualizações documentadas.',
      },
      {
        title: 'Aquecimento',
        text: 'Compare combustível, condição do sistema e eficiência do imóvel.',
      },
      {
        title: 'Transporte completo',
        text: 'Inclua estação, estacionamento, conexões e último trecho no cálculo diário.',
      },
    ],
    visitPlan:
      'Escolha um corredor de trem ou rodovia e compare municípios ao longo dele. Visite a estação e teste o trajeto em horário comum.',
    relatedSlugs: ['rhode-island', 'connecticut', 'new-hampshire'],
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    englishName: 'Michigan',
    abbreviation: 'MI',
    locationPhrase: 'em Michigan',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Detroit, Ann Arbor, Grand Rapids, Lansing e o norte de Michigan com atenção a inverno, água e acesso.',
    overview:
      'Michigan tem dois grandes centros no sul, uma capital central e extensas regiões de lagos e florestas. A proximidade da água, o tipo de aquecimento e a distância de serviços mudam muito entre as penínsulas.',
    regions: [
      {
        name: 'Detroit metro',
        description: 'Grande rede de cidades e subúrbios com vários centros de emprego.',
      },
      {
        name: 'Ann Arbor e sudeste',
        description: 'Cidade universitária conectada a Detroit e outros centros do sul.',
      },
      {
        name: 'Grand Rapids e oeste',
        description: 'Centro regional próximo ao Lake Michigan e a cidades menores.',
      },
      {
        name: 'Norte e Upper Peninsula',
        description: 'Longas distâncias, inverno mais intenso e forte presença de lagos.',
      },
    ],
    topics: [
      {
        title: 'Inverno e aquecimento',
        text: 'Revise isolamento, sistema, telhado e responsabilidades de neve.',
      },
      {
        title: 'Água e porão',
        text: 'Observe drenagem, bomba, impermeabilização e histórico de entrada de água.',
      },
      {
        title: 'Margem de lago',
        text: 'Confirme acesso, erosão, regras, seguro e manutenção quando houver água.',
      },
    ],
    visitPlan:
      'Compare as regiões sul e oeste em blocos separados. Para o norte, calcule viagens de inverno e acesso a saúde e manutenção.',
    relatedSlugs: ['ohio', 'indiana', 'wisconsin'],
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    englishName: 'Minnesota',
    abbreviation: 'MN',
    locationPhrase: 'em Minnesota',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Twin Cities, Rochester, Duluth e centros regionais de Minnesota com foco em inverno, energia e água.',
    overview:
      'Minnesota oferece uma grande região metropolitana, um polo médico no sul e cidades ligadas a lagos e ao norte. Preparação para o frio e distância de serviços são partes essenciais da comparação.',
    regions: [
      {
        name: 'Minneapolis e St. Paul',
        description:
          'Duas cidades centrais e muitos subúrbios conectados por rodovias e transporte.',
      },
      {
        name: 'Rochester',
        description: 'Centro regional no sudeste com conexão a Iowa e às Twin Cities.',
      },
      {
        name: 'Duluth e North Shore',
        description: 'Lake Superior, relevo e inverno mais marcado.',
      },
      {
        name: 'St. Cloud e centro',
        description: 'Comunidades no corredor central com acesso a áreas rurais e lagos.',
      },
    ],
    topics: [
      {
        title: 'Frio extremo',
        text: 'Revise aquecimento, isolamento, janelas, telhado e acesso durante neve.',
      },
      {
        title: 'Lagos e água',
        text: 'Verifique margem, drenagem, poço, sistema séptico e regras aplicáveis.',
      },
      {
        title: 'Trajeto de inverno',
        text: 'Considere rota, estacionamento e tempo de viagem em condições de neve.',
      },
    ],
    visitPlan:
      'Teste uma semana comum na região escolhida e inclua garagem, transporte e serviços de inverno na avaliação. Para Duluth, dirija o relevo local.',
    relatedSlugs: ['wisconsin', 'iowa', 'north-dakota'],
  },
  {
    slug: 'mississippi',
    name: 'Mississippi',
    englishName: 'Mississippi',
    abbreviation: 'MS',
    locationPhrase: 'no Mississippi',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Jackson, Gulf Coast, Hattiesburg e o norte do Mississippi com foco em clima, solo e serviços.',
    overview:
      'Mississippi combina uma capital central, comunidades costeiras, cidades universitárias e áreas rurais. A costa exige uma análise diferente do interior, principalmente para seguro, vento, água e manutenção.',
    regions: [
      {
        name: 'Jackson metro',
        description:
          'Principal centro urbano do estado com comunidades em vários corredores.',
      },
      {
        name: 'Gulf Coast',
        description: 'Gulfport, Biloxi e cidades costeiras com exposição a vento e água.',
      },
      {
        name: 'Hattiesburg',
        description: 'Centro regional entre Jackson, Mobile e a costa.',
      },
      {
        name: 'Oxford, Tupelo e norte',
        description: 'Cidades universitárias e regionais próximas ao Tennessee.',
      },
    ],
    topics: [
      {
        title: 'Vento, água e seguro',
        text: 'Na costa, confirme elevação, telhado, aberturas e cotações antes da oferta.',
      },
      {
        title: 'Solo e fundação',
        text: 'Observe drenagem, movimentação e condição estrutural com inspeção local.',
      },
      {
        title: 'Serviços do terreno',
        text: 'Fora da cidade, confirme internet, poço, sistema séptico e manutenção da via.',
      },
    ],
    visitPlan:
      'Trate costa e interior como buscas separadas. Faça o trajeto até serviços e observe o lote depois de chuva quando possível.',
    relatedSlugs: ['alabama', 'louisiana', 'tennessee'],
  },
  {
    slug: 'missouri',
    name: 'Missouri',
    englishName: 'Missouri',
    abbreviation: 'MO',
    locationPhrase: 'no Missouri',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare St. Louis, Kansas City, Springfield e Columbia com atenção a município, clima, porão e deslocamento.',
    overview:
      'Missouri tem duas regiões metropolitanas nas divisas, centros universitários e áreas de lagos e relevo no sul. Município, condado e lado da linha estadual podem mudar serviços e rotina.',
    regions: [
      {
        name: 'St. Louis metro',
        description:
          'Cidade, condado e comunidades no lado de Missouri de uma região interestadual.',
      },
      {
        name: 'Kansas City metro',
        description:
          'Centro urbano compartilhado com Kansas e muitos trajetos entre os dois estados.',
      },
      {
        name: 'Springfield e Ozarks',
        description: 'Centro regional com acesso a lagos, colinas e áreas rurais.',
      },
      {
        name: 'Columbia e centro',
        description: 'Cidade universitária no corredor entre St. Louis e Kansas City.',
      },
    ],
    topics: [
      {
        title: 'Cidade e condado',
        text: 'Confirme jurisdição, serviços, impostos e inspeções aplicáveis ao endereço.',
      },
      {
        title: 'Porão e radon',
        text: 'Inclua teste, drenagem, fundação e sinais de água na diligência.',
      },
      {
        title: 'Tempestade e enchente',
        text: 'Revise abrigo, telhado, mapas e opções de seguro.',
      },
    ],
    visitPlan:
      'Escolha uma região metropolitana por viagem e atravesse a divisa estadual se isso fizer parte da rotina. Nos Ozarks, avalie inclinação e acesso.',
    relatedSlugs: ['kansas', 'arkansas', 'illinois'],
  },
  {
    slug: 'montana',
    name: 'Montana',
    englishName: 'Montana',
    abbreviation: 'MT',
    locationPhrase: 'em Montana',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Billings, Missoula, Bozeman e os centros de Montana com foco em distância, inverno, terreno e serviços.',
    overview:
      'Montana tem centros regionais separados por longas distâncias, além de propriedades rurais e de montanha. Acesso a saúde, aeroporto, manutenção e estradas pode ser tão importante quanto o tamanho do imóvel.',
    regions: [
      {
        name: 'Billings',
        description:
          'Maior centro urbano do estado e ponto de serviços para o leste de Montana.',
      },
      {
        name: 'Missoula',
        description: 'Cidade universitária cercada por vales e montanhas no oeste.',
      },
      {
        name: 'Bozeman e Gallatin Valley',
        description:
          'Corredor de crescimento com acesso a montanhas e aeroporto regional.',
      },
      {
        name: 'Helena e Great Falls',
        description: 'Capital e centro regional conectando áreas centrais e rurais.',
      },
    ],
    topics: [
      {
        title: 'Distância e acesso',
        text: 'Calcule tempo até saúde, aeroporto, mercado e manutenção em todas as estações.',
      },
      {
        title: 'Inverno e vento',
        text: 'Revise aquecimento, isolamento, neve, orientação do lote e estrada.',
      },
      {
        title: 'Incêndio e terreno',
        text: 'Verifique vegetação, água, acesso de emergência, poço e sistema séptico.',
      },
    ],
    visitPlan:
      'Escolha um vale ou centro regional por viagem. Dirija as rotas secundárias e confirme como a propriedade funciona no inverno e durante emergências.',
    relatedSlugs: ['idaho', 'wyoming', 'north-dakota'],
  },
  {
    slug: 'nebraska',
    name: 'Nebraska',
    englishName: 'Nebraska',
    abbreviation: 'NE',
    locationPhrase: 'em Nebraska',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Omaha, Lincoln, Grand Island e o oeste de Nebraska com atenção a clima, enchente e acesso regional.',
    overview:
      'Nebraska concentra seus maiores centros no leste, enquanto o centro e o oeste têm distâncias maiores e serviços mais espaçados. Trabalho, rodovia e proximidade de saúde ajudam a organizar a busca.',
    regions: [
      {
        name: 'Omaha',
        description:
          'Maior região urbana do estado com conexão direta a Council Bluffs, Iowa.',
      },
      {
        name: 'Lincoln',
        description: 'Capital e cidade universitária no corredor entre Omaha e o centro.',
      },
      {
        name: 'Grand Island e centro',
        description: 'Centro regional para comunidades agrícolas e cidades menores.',
      },
      {
        name: 'Scottsbluff e Panhandle',
        description: 'Oeste do estado com relevo, clima e acesso diferentes do leste.',
      },
    ],
    topics: [
      {
        title: 'Vento e granizo',
        text: 'Revise telhado, janelas, abrigo e histórico de reparos.',
      },
      {
        title: 'Enchente e drenagem',
        text: 'Consulte mapas, elevação, histórico e escoamento do lote.',
      },
      {
        title: 'Serviços rurais',
        text: 'Confirme internet, poço, sistema séptico e distância de manutenção.',
      },
    ],
    visitPlan:
      'Compare Omaha e Lincoln com trajetos reais. Para o centro ou oeste, reserve tempo para dirigir até serviços e avaliar exposição ao clima.',
    relatedSlugs: ['iowa', 'kansas', 'south-dakota'],
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    englishName: 'Nevada',
    abbreviation: 'NV',
    locationPhrase: 'em Nevada',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Las Vegas, Reno, Carson City e comunidades rurais de Nevada com foco em clima, água e associação.',
    overview:
      'Nevada tem dois grandes polos separados por muitas horas de estrada. Las Vegas vive o calor do sul, enquanto Reno e Carson City combinam altitude, neve e proximidade da Califórnia.',
    regions: [
      {
        name: 'Las Vegas Valley',
        description: 'Grande região urbana no deserto com muitas comunidades planejadas.',
      },
      {
        name: 'Reno e Sparks',
        description:
          'Centro do norte com altitude, inverno e acesso à região de Lake Tahoe.',
      },
      {
        name: 'Carson City',
        description: 'Capital menor entre Reno e comunidades da Sierra Nevada.',
      },
      {
        name: 'Nevada rural',
        description:
          'Longas distâncias e disponibilidade limitada de alguns serviços e utilidades.',
      },
    ],
    topics: [
      {
        title: 'Calor e energia',
        text: 'Compare climatização, orientação solar, sombra e histórico de consumo disponível.',
      },
      {
        title: 'Água e paisagismo',
        text: 'Confirme fonte, regras, irrigação e manutenção externa.',
      },
      {
        title: 'HOA e terreno',
        text: 'Leia regras, orçamento e responsabilidades; fora da cidade, confirme utilidades e acesso.',
      },
    ],
    visitPlan:
      'Escolha norte ou sul antes da viagem. Teste deslocamentos no calor ou no inverno e visite serviços essenciais fora do bairro planejado.',
    relatedSlugs: ['california', 'arizona', 'utah'],
  },
  {
    slug: 'new-hampshire',
    name: 'New Hampshire',
    englishName: 'New Hampshire',
    abbreviation: 'NH',
    locationPhrase: 'em New Hampshire',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare o sul de New Hampshire, Seacoast, região dos lagos e montanhas com foco em inverno e serviços locais.',
    overview:
      'New Hampshire oferece acesso a Boston no sul, uma curta faixa costeira e comunidades de lagos e montanhas. Município, estrada e sistema próprio da casa são detalhes importantes fora dos centros urbanos.',
    regions: [
      {
        name: 'Manchester e Nashua',
        description:
          'Sul urbano com acesso a Massachusetts e aos principais serviços do estado.',
      },
      {
        name: 'Seacoast',
        description:
          'Portsmouth e comunidades costeiras conectadas a Maine e Massachusetts.',
      },
      {
        name: 'Concord e centro',
        description: 'Capital e ponto de acesso a lagos e ao norte.',
      },
      {
        name: 'Lakes Region e White Mountains',
        description: 'Turismo sazonal, inverno forte e propriedades com acesso variado.',
      },
    ],
    topics: [
      {
        title: 'Impostos municipais',
        text: 'Compare a conta do endereço e os serviços oferecidos pelo município específico.',
      },
      {
        title: 'Aquecimento e neve',
        text: 'Revise combustível, isolamento, telhado e manutenção da entrada e da estrada.',
      },
      {
        title: 'Poço e sistema séptico',
        text: 'Confirme condição, capacidade, testes e registros disponíveis.',
      },
    ],
    visitPlan:
      'No sul, teste o trajeto até Massachusetts se ele fizer parte da rotina. Em lagos ou montanhas, avalie acesso e serviços fora da alta temporada.',
    relatedSlugs: ['maine', 'vermont', 'massachusetts'],
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    englishName: 'New Jersey',
    abbreviation: 'NJ',
    locationPhrase: 'em New Jersey',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare norte, centro, costa e sul de New Jersey usando transporte, enchente, impostos e rotina como filtros.',
    overview:
      'New Jersey conecta mercados de trabalho de Nova York e Filadélfia, mas cada corredor ferroviário e rodoviário produz uma rotina diferente. A costa e o interior também exigem avaliações distintas de água e seguro.',
    regions: [
      {
        name: 'North Jersey',
        description: 'Cidades e subúrbios com diferentes conexões para Nova York.',
      },
      {
        name: 'Central Jersey',
        description:
          'Corredores ferroviários e rodoviários entre os dois grandes mercados.',
      },
      {
        name: 'Jersey Shore',
        description: 'Comunidades costeiras com turismo, água e sazonalidade.',
      },
      {
        name: 'South Jersey',
        description: 'Cidades conectadas a Filadélfia, costa e áreas mais abertas.',
      },
    ],
    topics: [
      {
        title: 'Viagem completa',
        text: 'Teste estação, estacionamento, trem, conexão e último trecho até o destino.',
      },
      {
        title: 'Impostos do endereço',
        text: 'Compare a conta total e os serviços do município específico.',
      },
      {
        title: 'Costa e enchente',
        text: 'Verifique zona, elevação, drenagem e opções de seguro antes da oferta.',
      },
    ],
    visitPlan:
      'Organize visitas por linha de trem ou autoestrada. Se considerar a costa, retorne em um período com tráfego e clima diferentes.',
    relatedSlugs: ['new-york', 'pennsylvania', 'delaware'],
  },
  {
    slug: 'new-mexico',
    name: 'Novo México',
    englishName: 'New Mexico',
    abbreviation: 'NM',
    locationPhrase: 'no Novo México',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Albuquerque, Santa Fe, Las Cruces e Rio Rancho com atenção a altitude, água e construção regional.',
    overview:
      'O Novo México combina grandes áreas de deserto, cidades de altitude e arquitetura regional. Albuquerque e Santa Fe têm rotinas diferentes, enquanto Las Cruces e comunidades menores dependem de outros corredores e serviços.',
    regions: [
      {
        name: 'Albuquerque',
        description:
          'Maior centro urbano do estado dividido pelo rio e por diferentes elevações.',
      },
      {
        name: 'Santa Fe',
        description: 'Capital de maior altitude com arquitetura e clima próprios.',
      },
      { name: 'Las Cruces', description: 'Sul do estado com conexão a El Paso, Texas.' },
      {
        name: 'Rio Rancho e corredor central',
        description:
          'Comunidades próximas a Albuquerque com acessos e serviços variados.',
      },
    ],
    topics: [
      {
        title: 'Água e poço',
        text: 'Confirme fonte, capacidade, qualidade, direitos e manutenção quando aplicável.',
      },
      {
        title: 'Construção regional',
        text: 'Use inspeção familiarizada com adobe, estuque, telhado plano e drenagem.',
      },
      {
        title: 'Altitude e incêndio',
        text: 'Considere adaptação, clima, vegetação, acesso de emergência e seguro.',
      },
    ],
    visitPlan:
      'Compare Albuquerque e Santa Fe em dias separados e observe a mudança de altitude. Para áreas rurais, verifique água, estrada e distância de serviços.',
    relatedSlugs: ['arizona', 'colorado', 'texas'],
  },
  {
    slug: 'new-york',
    name: 'Nova York',
    englishName: 'New York',
    abbreviation: 'NY',
    locationPhrase: 'em Nova York',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Reduza uma busca ampla em Nova York comparando cidade, Hudson Valley, Capital Region e oeste do estado.',
    overview:
      'O estado de Nova York inclui uma das maiores cidades do mundo, subúrbios conectados por trem, vales, cidades universitárias e centros próximos aos Grandes Lagos. A região deve vir antes do tipo de imóvel.',
    regions: [
      {
        name: 'New York City',
        description:
          'Cinco boroughs com condomínios, cooperativas e trajetos muito diferentes.',
      },
      {
        name: 'Hudson Valley e subúrbios',
        description: 'Cidades conectadas por trem e rodovias ao mercado da cidade.',
      },
      {
        name: 'Capital Region',
        description: 'Albany, Troy e Schenectady formam um centro próprio.',
      },
      {
        name: 'Western New York',
        description: 'Buffalo, Rochester e comunidades próximas aos Grandes Lagos.',
      },
    ],
    topics: [
      {
        title: 'Forma de propriedade',
        text: 'Entenda condomínio, cooperativa, casa e o processo de aprovação correspondente.',
      },
      {
        title: 'Impostos e município',
        text: 'Compare a conta completa, taxas e serviços do endereço exato.',
      },
      {
        title: 'Transporte e inverno',
        text: 'Teste o trajeto e revise aquecimento, telhado, porão e remoção de neve.',
      },
    ],
    visitPlan:
      'Escolha uma única região por viagem. Na área metropolitana, teste o trajeto completo; no interior, calcule acesso a aeroporto, saúde e emprego.',
    relatedSlugs: ['new-jersey', 'connecticut', 'pennsylvania'],
  },
  {
    slug: 'north-carolina',
    name: 'Carolina do Norte',
    englishName: 'North Carolina',
    abbreviation: 'NC',
    locationPhrase: 'na Carolina do Norte',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Charlotte, Triangle, Triad, costa e montanhas da Carolina do Norte com um plano de rotina e risco.',
    overview:
      'A Carolina do Norte tem vários centros fortes, uma longa costa e comunidades montanhosas. Charlotte, Raleigh Durham e o Triad atendem rotinas diferentes, enquanto costa e oeste pedem análises próprias de acesso e clima.',
    regions: [
      {
        name: 'Charlotte metro',
        description:
          'Grande centro financeiro com expansão em direção à Carolina do Sul.',
      },
      {
        name: 'Triangle',
        description:
          'Raleigh, Durham e Chapel Hill conectadas por vários corredores de trabalho.',
      },
      {
        name: 'Triad',
        description: 'Greensboro, Winston Salem e High Point formam um centro regional.',
      },
      {
        name: 'Costa e montanhas',
        description: 'Wilmington, Outer Banks e Asheville exigem comparações separadas.',
      },
    ],
    topics: [
      {
        title: 'Costa e tempestade',
        text: 'Verifique vento, enchente, elevação, telhado e seguro no litoral.',
      },
      {
        title: 'Montanha e acesso',
        text: 'Avalie inclinação, drenagem, estrada, sistema séptico e inverno no oeste.',
      },
      {
        title: 'Crescimento e trajeto',
        text: 'Teste rodovias e futuros projetos sem presumir que a distância continuará rápida.',
      },
    ],
    visitPlan:
      'Escolha uma região metropolitana por visita. Trate costa e montanhas como decisões separadas e dirija as rotas em condições comuns.',
    relatedSlugs: ['south-carolina', 'virginia', 'tennessee'],
  },
  {
    slug: 'north-dakota',
    name: 'Dakota do Norte',
    englishName: 'North Dakota',
    abbreviation: 'ND',
    locationPhrase: 'na Dakota do Norte',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Fargo, Bismarck, Grand Forks e Minot com foco em inverno, enchente, acesso e eficiência da casa.',
    overview:
      'A Dakota do Norte tem centros regionais separados por grandes áreas abertas. O inverno, a exposição ao vento e a distância entre serviços devem fazer parte da decisão desde o início.',
    regions: [
      {
        name: 'Fargo',
        description: 'Maior centro urbano do estado, integrado a Moorhead, Minnesota.',
      },
      {
        name: 'Bismarck e Mandan',
        description: 'Capital e comunidades dos dois lados do Missouri River.',
      },
      {
        name: 'Grand Forks',
        description: 'Cidade universitária no leste próxima a Minnesota.',
      },
      {
        name: 'Minot e oeste',
        description: 'Centro regional para comunidades e atividades do noroeste.',
      },
    ],
    topics: [
      {
        title: 'Frio e vento',
        text: 'Revise aquecimento, isolamento, janelas, garagem e acesso durante neve.',
      },
      {
        title: 'Enchente',
        text: 'Consulte mapas, elevação, histórico e medidas de proteção do imóvel.',
      },
      {
        title: 'Distância',
        text: 'Calcule viagens para saúde, aeroporto, manutenção e trabalho em condições de inverno.',
      },
    ],
    visitPlan:
      'Visite o centro regional que atende sua rotina e faça uma viagem de reconhecimento no inverno se possível. Avalie garagem e armazenamento como partes funcionais.',
    relatedSlugs: ['south-dakota', 'minnesota', 'montana'],
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    englishName: 'Ohio',
    abbreviation: 'OH',
    locationPhrase: 'em Ohio',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Columbus, Cleveland, Cincinnati e outros centros de Ohio com foco em município, construção e trajeto.',
    overview:
      'Ohio tem três grandes regiões metropolitanas e centros menores conectados por interestaduais. Cada uma possui geografia, idade de construção e relação com estados vizinhos diferentes.',
    regions: [
      {
        name: 'Columbus',
        description:
          'Capital central com crescimento em vários corredores e comunidades próximas.',
      },
      {
        name: 'Cleveland e nordeste',
        description: 'Lake Erie, bairros históricos e subúrbios conectados por rodovias.',
      },
      {
        name: 'Cincinnati',
        description: 'Região de colinas integrada a Kentucky e Indiana.',
      },
      {
        name: 'Dayton e Toledo',
        description: 'Centros regionais com acesso a outros mercados do Centro Oeste.',
      },
    ],
    topics: [
      {
        title: 'Casa mais antiga',
        text: 'Revise estrutura, sistemas, porão, água e atualizações documentadas.',
      },
      {
        title: 'Município e custos',
        text: 'Confirme impostos, serviços e eventuais avaliações do endereço.',
      },
      {
        title: 'Clima e porão',
        text: 'Observe drenagem, bomba, telhado, aquecimento e efeitos do inverno.',
      },
    ],
    visitPlan:
      'Escolha um centro por viagem e teste o corredor de trabalho. Em Cincinnati, atravesse as divisas se isso fizer parte da rotina.',
    relatedSlugs: ['michigan', 'indiana', 'pennsylvania'],
  },
  {
    slug: 'oklahoma',
    name: 'Oklahoma',
    englishName: 'Oklahoma',
    abbreviation: 'OK',
    locationPhrase: 'em Oklahoma',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Oklahoma City, Tulsa, Norman e centros regionais com atenção a tempestade, solo e direitos ligados ao terreno.',
    overview:
      'Oklahoma concentra seus maiores centros no corredor central e nordeste, com muitas comunidades menores e áreas rurais. Vento, fundação e detalhes registrados da propriedade merecem uma revisão local cuidadosa.',
    regions: [
      {
        name: 'Oklahoma City metro',
        description:
          'Grande área central com vários municípios e longos corredores de deslocamento.',
      },
      {
        name: 'Tulsa',
        description:
          'Centro do nordeste com bairros históricos e comunidades suburbanas.',
      },
      {
        name: 'Norman e centro sul',
        description: 'Cidade universitária conectada a Oklahoma City e ao sul.',
      },
      {
        name: 'Stillwater e cidades regionais',
        description: 'Centros menores cercados por áreas rurais e agrícolas.',
      },
    ],
    topics: [
      {
        title: 'Tempestade e abrigo',
        text: 'Revise telhado, abrigo, drenagem, histórico de reparos e seguro.',
      },
      {
        title: 'Solo e fundação',
        text: 'Use inspeção atenta a movimentação, fissuras e manejo de água no lote.',
      },
      {
        title: 'Direitos e utilidades',
        text: 'Confirme registros, direitos minerais, poço, sistema séptico e acesso quando aplicável.',
      },
    ],
    visitPlan:
      'Compare os lados da região metropolitana conforme o trabalho. Em propriedade rural, reserve tempo para documentos, limites e sistemas do terreno.',
    relatedSlugs: ['texas', 'kansas', 'arkansas'],
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    englishName: 'Oregon',
    abbreviation: 'OR',
    locationPhrase: 'em Oregon',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Portland, Willamette Valley, Central Oregon e a costa com foco em clima, incêndio, água e terreno.',
    overview:
      'Oregon muda bastante entre o oeste úmido, a costa, as montanhas e o interior mais seco. Portland, Eugene, Salem, Bend e cidades menores exigem comparações distintas de clima e acesso.',
    regions: [
      {
        name: 'Portland metro',
        description:
          'Grande centro urbano conectado a Washington por pontes e corredores interestaduais.',
      },
      {
        name: 'Willamette Valley',
        description: 'Salem, Eugene e cidades menores em um corredor mais úmido.',
      },
      {
        name: 'Bend e Central Oregon',
        description: 'Maior altitude, clima mais seco e acesso a áreas naturais.',
      },
      {
        name: 'Costa e sul do Oregon',
        description: 'Comunidades com chuva, relevo e distâncias próprias.',
      },
    ],
    topics: [
      {
        title: 'Incêndio e seguro',
        text: 'Verifique vegetação, zona, acesso de emergência e cobertura disponível.',
      },
      {
        title: 'Água e drenagem',
        text: 'No oeste, observe chuva e água; no interior, confirme fonte e poço.',
      },
      {
        title: 'Terremoto e construção',
        text: 'Pergunte sobre fundação, fixações, atualizações e condição estrutural.',
      },
    ],
    visitPlan:
      'Escolha oeste, centro ou costa antes da viagem. Dirija as rotas em chuva ou condições sazonais semelhantes à futura rotina.',
    relatedSlugs: ['washington', 'california', 'idaho'],
  },
  {
    slug: 'pennsylvania',
    name: 'Pensilvânia',
    englishName: 'Pennsylvania',
    abbreviation: 'PA',
    locationPhrase: 'na Pensilvânia',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare Filadélfia, Pittsburgh, Lehigh Valley e o centro da Pensilvânia com foco em trajeto, município e construção.',
    overview:
      'A Pensilvânia tem duas grandes regiões metropolitanas, cidades médias e comunidades rurais entre montanhas e vales. Município, condado e idade do imóvel podem mudar custos e responsabilidades.',
    regions: [
      {
        name: 'Philadelphia metro',
        description:
          'Cidade, subúrbios e conexões ferroviárias com New Jersey e Delaware.',
      },
      {
        name: 'Pittsburgh metro',
        description: 'Região de rios e colinas com muitos municípios independentes.',
      },
      {
        name: 'Lehigh Valley',
        description: 'Allentown, Bethlehem e Easton entre Filadélfia e Nova York.',
      },
      {
        name: 'Central Pennsylvania',
        description: 'Harrisburg, Lancaster, State College e comunidades menores.',
      },
    ],
    topics: [
      {
        title: 'Município e impostos',
        text: 'Confirme jurisdição, conta total, serviços e inspeções aplicáveis.',
      },
      {
        title: 'Casa antiga',
        text: 'Revise estrutura, sistemas, porão, telhado e atualizações documentadas.',
      },
      {
        title: 'Colina e água',
        text: 'Observe inclinação, drenagem, muros, acesso e histórico de água.',
      },
    ],
    visitPlan:
      'Organize visitas por corredor e município. Em Filadélfia, teste trem ou rodovia; em Pittsburgh, dirija as colinas e pontes da rotina.',
    relatedSlugs: ['new-jersey', 'new-york', 'ohio'],
  },
  {
    slug: 'rhode-island',
    name: 'Rhode Island',
    englishName: 'Rhode Island',
    abbreviation: 'RI',
    locationPhrase: 'em Rhode Island',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare Providence, East Bay, South County e Aquidneck Island com foco em costa, construção e deslocamento.',
    overview:
      'Rhode Island é pequeno no mapa, mas reúne uma capital urbana, comunidades costeiras e conexões de trabalho com Massachusetts. Água, pontes e sazonalidade podem mudar bastante a rotina.',
    regions: [
      {
        name: 'Providence metro',
        description: 'Capital e municípios próximos com acesso ferroviário a Boston.',
      },
      {
        name: 'East Bay',
        description:
          'Comunidades ao longo da baía conectadas por pontes e vias costeiras.',
      },
      {
        name: 'South County',
        description: 'Costa, turismo sazonal e cidades com perfis variados.',
      },
      {
        name: 'Newport e Aquidneck Island',
        description: 'Ambiente histórico e insular com acesso por pontes.',
      },
    ],
    topics: [
      {
        title: 'Costa e enchente',
        text: 'Confirme zona, elevação, drenagem e cobertura disponível.',
      },
      {
        title: 'Casa histórica',
        text: 'Revise estrutura, sistemas, umidade, eficiência e restrições aplicáveis.',
      },
      {
        title: 'Pontes e sazonalidade',
        text: 'Teste deslocamentos em períodos comuns e de maior movimento.',
      },
    ],
    visitPlan:
      'Visite Providence e a região costeira em dias separados. Cruze as pontes nos horários que fariam parte da rotina.',
    relatedSlugs: ['massachusetts', 'connecticut', 'new-york'],
  },
  {
    slug: 'south-carolina',
    name: 'Carolina do Sul',
    englishName: 'South Carolina',
    abbreviation: 'SC',
    locationPhrase: 'na Carolina do Sul',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Charleston, Columbia, Upstate e Grand Strand com foco em costa, umidade, crescimento e trajeto.',
    overview:
      'A Carolina do Sul tem uma costa movimentada, capital central e um forte corredor urbano no noroeste. Charleston, Columbia, Greenville e Myrtle Beach oferecem rotinas e riscos de propriedade diferentes.',
    regions: [
      {
        name: 'Charleston metro',
        description:
          'Península, ilhas e subúrbios conectados por pontes e vias costeiras.',
      },
      {
        name: 'Columbia',
        description: 'Capital central com acesso às principais regiões do estado.',
      },
      {
        name: 'Greenville e Spartanburg',
        description: 'Upstate com corredor industrial e acesso a montanhas.',
      },
      {
        name: 'Myrtle Beach e Grand Strand',
        description: 'Costa turística com muitos condomínios e comunidades planejadas.',
      },
    ],
    topics: [
      {
        title: 'Costa e seguro',
        text: 'Confirme vento, enchente, elevação, telhado e cotações para o endereço.',
      },
      {
        title: 'Umidade e pragas',
        text: 'Revise ventilação, água, madeira e tratamentos anteriores.',
      },
      {
        title: 'HOA e crescimento',
        text: 'Leia regras e orçamento e teste o trajeto diante de novas construções.',
      },
    ],
    visitPlan:
      'Trate costa, Midlands e Upstate como buscas separadas. Na costa, dirija pontes e rotas de saída em diferentes horários.',
    relatedSlugs: ['north-carolina', 'georgia', 'florida'],
  },
  {
    slug: 'south-dakota',
    name: 'Dakota do Sul',
    englishName: 'South Dakota',
    abbreviation: 'SD',
    locationPhrase: 'na Dakota do Sul',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Sioux Falls, Rapid City, Aberdeen e Black Hills com atenção a inverno, vento, distância e terreno.',
    overview:
      'A Dakota do Sul tem seu maior centro no leste e uma geografia muito diferente no oeste. Sioux Falls, Rapid City e comunidades menores dependem de redes regionais próprias de trabalho e serviços.',
    regions: [
      {
        name: 'Sioux Falls',
        description: 'Maior centro urbano no leste com acesso a Iowa e Minnesota.',
      },
      {
        name: 'Rapid City',
        description: 'Ponto de serviços do oeste e entrada para Black Hills.',
      },
      {
        name: 'Aberdeen e nordeste',
        description: 'Centro regional cercado por comunidades agrícolas.',
      },
      {
        name: 'Black Hills',
        description: 'Relevo, turismo, inverno e propriedades com acesso variado.',
      },
    ],
    topics: [
      {
        title: 'Inverno e vento',
        text: 'Revise aquecimento, isolamento, telhado e acesso durante neve.',
      },
      {
        title: 'Distância',
        text: 'Calcule tempo até saúde, aeroporto, trabalho e manutenção.',
      },
      {
        title: 'Terreno rural',
        text: 'Confirme poço, sistema séptico, limites, estrada e risco de incêndio.',
      },
    ],
    visitPlan:
      'Escolha leste ou oeste antes da viagem. Em Black Hills, dirija as rotas de acesso e avalie a manutenção sazonal.',
    relatedSlugs: ['north-dakota', 'nebraska', 'wyoming'],
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    englishName: 'Tennessee',
    abbreviation: 'TN',
    locationPhrase: 'no Tennessee',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Nashville, Knoxville, Chattanooga, Memphis e Tri Cities usando trajeto, relevo e clima como filtros.',
    overview:
      'Tennessee se estende por três grandes divisões geográficas, com centros urbanos e economias próprios. Nashville, leste montanhoso e Memphis no oeste não devem ser tratados como o mesmo mercado.',
    regions: [
      {
        name: 'Nashville metro',
        description: 'Grande centro no meio do estado com expansão em vários corredores.',
      },
      {
        name: 'Knoxville e leste',
        description: 'Centro próximo às montanhas e a comunidades de relevo variado.',
      },
      {
        name: 'Chattanooga',
        description: 'Cidade entre montanhas conectada à Geórgia e ao Alabama.',
      },
      {
        name: 'Memphis e Tri Cities',
        description: 'Polos em extremos diferentes que exigem análises separadas.',
      },
    ],
    topics: [
      {
        title: 'Relevo e água',
        text: 'Observe inclinação, drenagem, acesso e condição de fundação.',
      },
      {
        title: 'Tempestade e enchente',
        text: 'Revise telhado, abrigo, mapas e seguro disponível.',
      },
      {
        title: 'Trajeto em crescimento',
        text: 'Teste o corredor de trabalho e serviços no horário de uso.',
      },
    ],
    visitPlan:
      'Escolha uma divisão do estado por viagem. Em Nashville, organize visitas por corredor; no leste, dirija o relevo local.',
    relatedSlugs: ['alabama', 'kentucky', 'north-carolina'],
  },
  {
    slug: 'texas',
    name: 'Texas',
    englishName: 'Texas',
    abbreviation: 'TX',
    locationPhrase: 'no Texas',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Reduza uma busca no Texas comparando DFW, Houston, Austin e San Antonio com foco em custo, clima e deslocamento.',
    overview:
      'O Texas tem grandes regiões metropolitanas separadas por horas de estrada. Dallas Fort Worth, Houston, Austin e San Antonio possuem economias, clima local, solo e padrões de expansão diferentes.',
    regions: [
      {
        name: 'Dallas Fort Worth',
        description: 'Região extensa com muitos centros de emprego e municípios.',
      },
      {
        name: 'Houston metro',
        description: 'Grande área costeira com redes de rodovias, água e clima úmido.',
      },
      {
        name: 'Austin e Central Texas',
        description: 'Corredores de crescimento conectados a cidades vizinhas.',
      },
      {
        name: 'San Antonio',
        description: 'Centro urbano amplo com acesso a Hill Country e ao sul do estado.',
      },
    ],
    topics: [
      {
        title: 'Impostos e seguro',
        text: 'Compare a conta completa e obtenha cotações para o endereço antes da oferta.',
      },
      {
        title: 'Solo e fundação',
        text: 'Revise drenagem, movimentação e manutenção recomendada para a região.',
      },
      {
        title: 'Trajeto e utilidades',
        text: 'Teste rodovias e confirme água, esgoto, energia e responsabilidades do distrito.',
      },
    ],
    visitPlan:
      'Escolha uma única região metropolitana por viagem e concentre cada dia em um corredor. Dirija até trabalho, aeroporto e serviços no horário real.',
    relatedSlugs: ['oklahoma', 'new-mexico', 'louisiana'],
  },
  {
    slug: 'utah',
    name: 'Utah',
    englishName: 'Utah',
    abbreviation: 'UT',
    locationPhrase: 'em Utah',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Wasatch Front, Utah County, St. George e norte de Utah com foco em altitude, clima, água e trajeto.',
    overview:
      'Utah concentra muitas cidades ao longo da Wasatch Front, enquanto o sul oferece clima de deserto e outras distâncias. Salt Lake, Utah County e St. George pedem planos distintos de trabalho e manutenção.',
    regions: [
      {
        name: 'Salt Lake Valley',
        description: 'Centro urbano e corredor de transporte próximo às montanhas.',
      },
      {
        name: 'Utah County',
        description: 'Provo, Orem e cidades em expansão ao sul de Salt Lake.',
      },
      {
        name: 'St. George',
        description: 'Sul de clima mais quente e paisagem de deserto.',
      },
      {
        name: 'Ogden e Cache Valley',
        description: 'Norte do estado com inverno e acessos regionais próprios.',
      },
    ],
    topics: [
      {
        title: 'Neve ou calor',
        text: 'Compare climatização, orientação, remoção de neve e consumo conforme a região.',
      },
      {
        title: 'Água e associação',
        text: 'Confirme fonte, regras de paisagismo, irrigação e responsabilidades.',
      },
      {
        title: 'Altitude e ar',
        text: 'Visite em estações diferentes e considere adaptação, clima e inversões locais.',
      },
    ],
    visitPlan:
      'Compare cidades da Wasatch Front por corredor. Faça uma viagem separada para St. George e teste o clima mais próximo da futura rotina.',
    relatedSlugs: ['colorado', 'arizona', 'nevada'],
  },
  {
    slug: 'vermont',
    name: 'Vermont',
    englishName: 'Vermont',
    abbreviation: 'VT',
    locationPhrase: 'em Vermont',
    group: REGION_NORTHEAST,
    serviceMode: 'network',
    summary:
      'Compare Burlington, centro de Vermont, Rutland e Upper Valley com foco em inverno, estrada, água e serviços.',
    overview:
      'Vermont tem uma pequena área urbana no noroeste e muitas comunidades rurais entre montanhas e vales. Acesso no inverno, aquecimento e sistemas do terreno são partes centrais da compra.',
    regions: [
      {
        name: 'Burlington e Champlain Valley',
        description: 'Maior centro urbano e acesso ao lago e ao norte do estado.',
      },
      {
        name: 'Montpelier e centro',
        description: 'Capital e pequenas comunidades entre vales e montanhas.',
      },
      {
        name: 'Rutland e sul',
        description: 'Centro regional próximo a áreas de montanha e New York.',
      },
      {
        name: 'Upper Valley',
        description: 'Comunidades dos dois lados da divisa com New Hampshire.',
      },
    ],
    topics: [
      {
        title: 'Aquecimento e isolamento',
        text: 'Confirme combustível, idade do sistema, eficiência e armazenamento.',
      },
      {
        title: 'Estrada e neve',
        text: 'Entenda manutenção pública ou privada, inclinação e acesso no inverno.',
      },
      {
        title: 'Poço, séptico e água',
        text: 'Faça testes e verifique localização, capacidade, drenagem e enchente.',
      },
    ],
    visitPlan:
      'Escolha um vale ou corredor e dirija as vias secundárias. Visite fora da temporada turística e avalie a distância até serviços.',
    relatedSlugs: ['new-hampshire', 'new-york', 'massachusetts'],
  },
  {
    slug: 'virginia',
    name: 'Virgínia',
    englishName: 'Virginia',
    abbreviation: 'VA',
    locationPhrase: 'na Virgínia',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Northern Virginia, Richmond, Hampton Roads e o oeste com foco em trajeto, costa, terreno e serviços.',
    overview:
      'A Virgínia conecta a região de Washington, uma capital central, cidades costeiras e vales montanhosos. Transporte, água e topografia mudam muito entre essas áreas.',
    regions: [
      {
        name: 'Northern Virginia',
        description: 'Municípios conectados a Washington por metrô, rodovias e trens.',
      },
      {
        name: 'Richmond metro',
        description:
          'Capital estadual e comunidades em expansão ao longo de vários corredores.',
      },
      {
        name: 'Hampton Roads',
        description: 'Norfolk, Virginia Beach e cidades ligadas por pontes e túneis.',
      },
      {
        name: 'Roanoke e Shenandoah Valley',
        description: 'Centros do oeste com montanhas, vales e propriedades rurais.',
      },
    ],
    topics: [
      {
        title: 'Trajeto e pedágio',
        text: 'Teste metrô, rodovia, pontes, túneis e tempo total da porta ao destino.',
      },
      {
        title: 'Costa e enchente',
        text: 'Confirme zona, elevação, drenagem e seguro em Hampton Roads.',
      },
      {
        title: 'Terreno e sistemas',
        text: 'No oeste, revise inclinação, poço, sistema séptico e acesso.',
      },
    ],
    visitPlan:
      'Escolha uma região por viagem. No norte e na costa, faça o trajeto em horário real; no oeste, dirija estradas secundárias.',
    relatedSlugs: ['maryland', 'north-carolina', 'west-virginia'],
  },
  {
    slug: 'washington',
    name: 'Washington',
    englishName: 'Washington',
    abbreviation: 'WA',
    locationPhrase: 'no estado de Washington',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Puget Sound, Spokane, Vancouver e centro de Washington com foco em transporte, clima, incêndio e terreno.',
    overview:
      'O estado de Washington muda do oeste úmido para o leste mais seco. Seattle e Puget Sound, Spokane, Vancouver e cidades centrais têm transportes, clima e custos de manutenção diferentes.',
    regions: [
      {
        name: 'Seattle e Puget Sound',
        description: 'Grande região ligada por rodovias, trens, pontes e balsas.',
      },
      {
        name: 'Spokane e leste',
        description: 'Centro regional de clima mais seco e inverno mais marcado.',
      },
      {
        name: 'Vancouver e sudoeste',
        description: 'Conexão direta com Portland, Oregon, através do Columbia River.',
      },
      {
        name: 'Central Washington',
        description: 'Yakima, Tri Cities e comunidades com clima e agricultura próprios.',
      },
    ],
    topics: [
      {
        title: 'Transporte e balsas',
        text: 'Teste a viagem completa, incluindo ponte, balsa, estacionamento e conexões.',
      },
      {
        title: 'Terremoto e água',
        text: 'Revise fundação, fixações, drenagem, encosta e histórico do imóvel.',
      },
      {
        title: 'Incêndio e fumaça',
        text: 'No leste e centro, verifique vegetação, acesso de emergência e seguro.',
      },
    ],
    visitPlan:
      'Escolha oeste ou leste antes da viagem. Em Puget Sound, teste o corredor ou a balsa; no leste, avalie calor, inverno e fumaça sazonal.',
    relatedSlugs: ['oregon', 'idaho', 'alaska'],
  },
  {
    slug: 'west-virginia',
    name: 'Virgínia Ocidental',
    englishName: 'West Virginia',
    abbreviation: 'WV',
    locationPhrase: 'na Virgínia Ocidental',
    group: REGION_SOUTH,
    serviceMode: 'network',
    summary:
      'Compare Charleston, Morgantown, Eastern Panhandle e Huntington com atenção a montanhas, água e registros do terreno.',
    overview:
      'A Virgínia Ocidental é marcada por montanhas, vales e centros regionais próximos a outros estados. Acesso, inclinação e direitos ligados à propriedade merecem revisão detalhada.',
    regions: [
      {
        name: 'Charleston e centro',
        description: 'Capital estadual no corredor do Kanawha River.',
      },
      {
        name: 'Morgantown e norte',
        description: 'Cidade universitária conectada à Pensilvânia e a Pittsburgh.',
      },
      {
        name: 'Eastern Panhandle',
        description:
          'Comunidades com acesso a Maryland, Virginia e região de Washington.',
      },
      {
        name: 'Huntington e oeste',
        description: 'Centro no Ohio River próximo a Kentucky e Ohio.',
      },
    ],
    topics: [
      {
        title: 'Inclinação e acesso',
        text: 'Avalie estrada, drenagem, muros, estacionamento e acesso de emergência.',
      },
      {
        title: 'Enchente',
        text: 'Consulte mapas, elevação, histórico e seguro para imóveis em vales.',
      },
      {
        title: 'Direitos registrados',
        text: 'Revise limites, acesso e direitos minerais com profissionais locais.',
      },
    ],
    visitPlan:
      'Dirija as vias locais entre o imóvel e os serviços, não apenas a rodovia principal. Visite depois de chuva quando possível.',
    relatedSlugs: ['virginia', 'pennsylvania', 'ohio'],
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    englishName: 'Wisconsin',
    abbreviation: 'WI',
    locationPhrase: 'em Wisconsin',
    group: REGION_MIDWEST,
    serviceMode: 'network',
    summary:
      'Compare Milwaukee, Madison, Fox Valley e norte de Wisconsin com foco em inverno, água, impostos e acesso.',
    overview:
      'Wisconsin oferece dois grandes centros no sul, cidades industriais e universitárias e extensas áreas de lagos ao norte. Inverno, margem de água e distância de serviços variam muito.',
    regions: [
      {
        name: 'Milwaukee metro',
        description:
          'Maior centro urbano do estado com acesso a Chicago e Lake Michigan.',
      },
      {
        name: 'Madison',
        description:
          'Capital e cidade universitária cercada por lagos e comunidades em expansão.',
      },
      {
        name: 'Green Bay e Fox Valley',
        description: 'Corredor regional de cidades médias no leste.',
      },
      {
        name: 'Oeste e norte de Wisconsin',
        description: 'Centros menores, lagos, florestas e distâncias maiores.',
      },
    ],
    topics: [
      {
        title: 'Inverno e aquecimento',
        text: 'Revise isolamento, sistema, telhado, garagem e remoção de neve.',
      },
      {
        title: 'Lago e margem',
        text: 'Confirme acesso, erosão, sistema séptico, regras e seguro.',
      },
      {
        title: 'Impostos locais',
        text: 'Compare a conta completa e os serviços do município.',
      },
    ],
    visitPlan:
      'Compare Milwaukee e Madison em dias separados. Para o norte, calcule acesso anual a saúde, aeroporto e manutenção.',
    relatedSlugs: ['minnesota', 'illinois', 'michigan'],
  },
  {
    slug: 'wyoming',
    name: 'Wyoming',
    englishName: 'Wyoming',
    abbreviation: 'WY',
    locationPhrase: 'em Wyoming',
    group: REGION_WEST,
    serviceMode: 'network',
    summary:
      'Compare Cheyenne, Casper, Jackson, Laramie e centros regionais com foco em vento, inverno, distância e terreno.',
    overview:
      'Wyoming tem baixa densidade e centros separados por longas distâncias. Cheyenne se conecta ao Colorado, enquanto Casper, Jackson e comunidades do norte atendem regiões distintas.',
    regions: [
      {
        name: 'Cheyenne',
        description:
          'Capital no sudeste com acesso ao corredor de Front Range no Colorado.',
      },
      {
        name: 'Casper',
        description: 'Centro regional no meio do estado para serviços e transporte.',
      },
      {
        name: 'Jackson e Teton County',
        description: 'Mercado de montanha com acesso limitado e forte sazonalidade.',
      },
      {
        name: 'Laramie, Gillette e centros menores',
        description: 'Cidades separadas por grandes áreas abertas e clima exposto.',
      },
    ],
    topics: [
      {
        title: 'Vento e inverno',
        text: 'Revise telhado, aquecimento, isolamento, neve e fechamento de estradas.',
      },
      {
        title: 'Distância de serviços',
        text: 'Calcule viagens para saúde, aeroporto, mercado e manutenção.',
      },
      {
        title: 'Água e terreno',
        text: 'Confirme poço, sistema séptico, limites, acesso e risco de incêndio.',
      },
    ],
    visitPlan:
      'Escolha um centro regional por viagem e dirija as rotas que usaria no inverno. Em área rural, reserve tempo para revisar sistemas e acesso.',
    relatedSlugs: ['colorado', 'montana', 'south-dakota'],
  },
]

export const stateGuideBySlug = Object.fromEntries(
  stateGuides.map(guide => [guide.slug, guide])
) as Record<string, StateGuide>

export const stateGuidesByRegion = stateGuides.reduce<
  Record<StateRegionGroup, StateGuide[]>
>(
  (groups, guide) => {
    groups[guide.group].push(guide)
    return groups
  },
  {
    Nordeste: [],
    Sul: [],
    'Centro Oeste': [],
    Oeste: [],
  }
)
