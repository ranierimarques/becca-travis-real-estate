export const buyerGoals = ['search', 'compare', 'numbers', 'relocate'] as const
export const moveTimings = ['now', '0-3', '3-6', '6-12', '12+', 'research'] as const

export type BuyerGoal = typeof buyerGoals[number]
export type MoveTiming = typeof moveTimings[number]
export type BuyerLanguage = 'en' | 'pt'

export type BuyerAnswers = {
  goal?: BuyerGoal
  location?: string
  timing?: MoveTiming
}

export type BuyerRouteContext = BuyerAnswers & {
  language: BuyerLanguage
  label: string
}

export type BuyerPlanItem = {
  title: string
  text: string
}

const portugueseStateNames: Record<string, string> = {
  california: 'Califórnia',
  florida: 'Flórida',
  georgia: 'Geórgia',
  'new-jersey': 'Nova Jersey',
  'new-mexico': 'Novo México',
  'new-york': 'Nova York',
  'north-carolina': 'Carolina do Norte',
  'north-dakota': 'Dakota do Norte',
  pennsylvania: 'Pensilvânia',
  'south-carolina': 'Carolina do Sul',
  'south-dakota': 'Dakota do Sul',
  virginia: 'Virgínia',
  'west-virginia': 'Virgínia Ocidental',
}

function cleanPath(asPath: string) {
  return asPath.split(/[?#]/)[0]
}

function finalSegment(asPath: string) {
  const segments = cleanPath(asPath).split('/').filter(Boolean)
  return segments[segments.length - 1] || ''
}

function titleCaseSlug(slug: string) {
  try {
    return decodeURIComponent(slug)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, letter => letter.toUpperCase())
  } catch {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase())
  }
}

export function getBuyerRouteContext(
  pathname: string,
  asPath: string
): BuyerRouteContext {
  const language: BuyerLanguage = pathname.startsWith('/agenciamento') ? 'pt' : 'en'
  const slug = finalSegment(asPath)

  if (pathname === '/planning-tools') {
    return { language, goal: 'numbers', label: 'Buyer planning tools' }
  }

  if (pathname === '/areas/[slug]' || pathname === '/communities/[community]') {
    const location = titleCaseSlug(slug)
    return {
      language,
      goal: 'compare',
      location,
      label: `Area guide: ${location}`,
    }
  }

  if (pathname.startsWith('/homes')) {
    return {
      language,
      goal: 'search',
      label: pathname === '/homes/[...segments]' ? 'Property detail page' : 'Homes page',
    }
  }

  if (pathname === '/agenciamento/[state]') {
    const location = portugueseStateNames[slug] || titleCaseSlug(slug)
    return {
      language,
      goal: 'relocate',
      location,
      label: `Guia estadual: ${location}`,
    }
  }

  if (pathname === '/agenciamento') {
    return {
      language,
      goal: 'relocate',
      label: 'Agenciamento nacional em português',
    }
  }

  return { language, label: cleanPath(asPath) || '/' }
}

export const buyerCopy = {
  en: {
    launcher: 'Build my buyer plan',
    launcherShort: 'Buyer plan',
    close: 'Close buyer plan',
    back: 'Back',
    progress: (step: number) => `${step} of 3`,
    goalTitle: 'What would help most right now?',
    goalDescription: 'Choose one. Your buyer plan takes about a minute.',
    goals: {
      search: 'Find homes that fit',
      compare: 'Compare areas',
      numbers: 'Plan my numbers',
      relocate: 'Plan an out of state move',
    },
    noContact: 'No contact details yet.',
    locationTitle: 'Where are you considering?',
    locationDescription: 'A city, area or state is enough.',
    locationLabel: 'City, community or state',
    locationPlaceholder: 'Enter a place',
    locationContinue: 'Continue',
    notSure: 'I am not sure yet',
    locationError: 'Enter a place or choose “I am not sure yet.”',
    timingTitle: 'When would you like to move?',
    timingDescription: 'Choose the closest answer. You can change it later.',
    timings: {
      now: 'As soon as possible',
      '0-3': 'Within 3 months',
      '3-6': '3 to 6 months',
      '6-12': '6 to 12 months',
      '12+': 'More than a year',
      research: 'Still researching',
    },
    planLabel: 'Your buyer plan',
    planTitle: 'Your next steps are ready.',
    askForHelp: 'Ask Becca to help with this plan',
    keepExploring: 'Keep exploring',
    contactPreview: 'First name + one reply method on the next screen.',
    contactTitle: 'Want help with your plan?',
    contactDescription: 'Becca will review your answers before replying.',
    emailMe: 'Email me',
    phoneMe: 'Call or text me',
    firstName: 'First name',
    email: 'Email',
    phone: 'Phone',
    phonePlaceholder: 'Include area or country code',
    sendPlan: 'Send my buyer plan',
    sending: 'Sending your plan',
    consent: 'By sending, you authorize contact about this request.',
    terms: 'Terms',
    privacy: 'Privacy',
    backToPlan: 'Back to my plan',
    nameError: 'Enter your first name.',
    emailError: 'Enter a valid email address.',
    phoneError: 'Enter a valid phone number.',
    submitError: 'Your plan could not be sent. Please try again or call 256 318 9066.',
    successTitle: 'Your buyer plan was sent.',
    successDescription:
      'Becca will review the plan before replying through the method you selected.',
    done: 'Keep exploring the site',
  },
  pt: {
    launcher: 'Criar meu plano de compra',
    launcherShort: 'Meu plano',
    close: 'Fechar plano de compra',
    back: 'Voltar',
    progress: (step: number) => `${step} de 3`,
    goalTitle: 'O que mais ajudaria agora?',
    goalDescription: 'Escolha uma opção. Seu plano leva cerca de um minuto.',
    goals: {
      search: 'Encontrar imóveis adequados',
      compare: 'Comparar regiões',
      numbers: 'Planejar meus números',
      relocate: 'Planejar mudança para outro estado',
    },
    noContact: 'Sem pedir seus dados de contato agora.',
    locationTitle: 'Onde você está pensando em comprar?',
    locationDescription: 'Uma cidade, região ou estado já é suficiente.',
    locationLabel: 'Cidade, região ou estado',
    locationPlaceholder: 'Digite um lugar',
    locationContinue: 'Continuar',
    notSure: 'Ainda não sei',
    locationError: 'Informe um lugar ou escolha “Ainda não sei”.',
    timingTitle: 'Quando pretende se mudar?',
    timingDescription: 'Escolha a opção mais próxima. Você pode mudar depois.',
    timings: {
      now: 'Assim que possível',
      '0-3': 'Nos próximos 3 meses',
      '3-6': 'De 3 a 6 meses',
      '6-12': 'De 6 a 12 meses',
      '12+': 'Mais de um ano',
      research: 'Ainda pesquisando',
    },
    planLabel: 'Seu plano de compra',
    planTitle: 'Seus próximos passos estão prontos.',
    askForHelp: 'Pedir ajuda de Becca com este plano',
    keepExploring: 'Continuar pesquisando',
    contactPreview: 'Primeiro nome + uma forma de resposta na próxima tela.',
    contactTitle: 'Quer ajuda com este plano?',
    contactDescription: 'Becca vai revisar suas respostas antes de responder.',
    emailMe: 'Responder por e-mail',
    phoneMe: 'Ligar ou enviar mensagem',
    firstName: 'Primeiro nome',
    email: 'E-mail',
    phone: 'Telefone',
    phonePlaceholder: 'Inclua o DDD ou código do país',
    sendPlan: 'Enviar meu plano de compra',
    sending: 'Enviando seu plano',
    consent: 'Ao enviar, você autoriza contato sobre esta solicitação.',
    terms: 'Termos',
    privacy: 'Privacidade',
    backToPlan: 'Voltar ao meu plano',
    nameError: 'Informe seu primeiro nome.',
    emailError: 'Digite um e-mail válido.',
    phoneError: 'Digite um telefone válido.',
    submitError:
      'Não foi possível enviar seu plano. Tente novamente ou ligue para 256 318 9066.',
    successTitle: 'Seu plano de compra foi enviado.',
    successDescription:
      'Becca vai revisar o plano antes de responder pelo meio que você escolheu.',
    done: 'Continuar explorando o site',
  },
} as const

export function getGoalLabel(language: BuyerLanguage, goal?: BuyerGoal) {
  return goal ? buyerCopy[language].goals[goal] : ''
}

export function getTimingLabel(language: BuyerLanguage, timing?: MoveTiming) {
  return timing ? buyerCopy[language].timings[timing] : ''
}

function destination(language: BuyerLanguage, location?: string) {
  if (!location || location === 'Not sure yet' || location === 'Ainda não sei') {
    return language === 'pt'
      ? 'as regiões que você está considerando'
      : 'the areas you are considering'
  }
  return location
}

export function buildBuyerPlan(
  language: BuyerLanguage,
  answers: BuyerAnswers
): BuyerPlanItem[] {
  const place = destination(language, answers.location)

  if (language === 'pt') {
    const firstByGoal: Record<BuyerGoal, BuyerPlanItem> = {
      search: {
        title: 'Foque a busca',
        text: `Use ${place} como ponto de partida e filtre por rotina, tipo de imóvel e três prioridades principais.`,
      },
      compare: {
        title: 'Compare a rotina primeiro',
        text: `Compare ${place} por deslocamento, serviços, tipo de imóvel e o que muda no dia a dia.`,
      },
      numbers: {
        title: 'Defina a faixa mensal real',
        text: 'Reúna prestação, impostos, seguro, condomínio e manutenção antes de definir o preço de busca.',
      },
      relocate: {
        title: 'Planeje a mudança pelo destino',
        text: `Use ${place} como base e compare regiões pela rotina, logística da visita e suporte local necessário.`,
      },
    }

    return [
      firstByGoal[answers.goal || 'search'],
      {
        title:
          answers.goal === 'numbers'
            ? 'Proteja o caixa da compra'
            : 'Defina a faixa mensal real',
        text: 'Separe entrada, custos de fechamento, mudança e uma reserva para não decidir apenas pela prestação.',
      },
      {
        title:
          answers.goal === 'relocate'
            ? 'Organize a busca à distância'
            : 'Transforme prioridades em critérios',
        text:
          answers.goal === 'relocate'
            ? 'Defina o que pode ser verificado por vídeo, o que exige visita e quais profissionais locais serão necessários.'
            : 'Mantenha três itens indispensáveis e uma preferência flexível para comparar imóveis com clareza.',
      },
    ]
  }

  const firstByGoal: Record<BuyerGoal, BuyerPlanItem> = {
    search: {
      title: 'Focus the search',
      text: `Use ${place} as the starting point and narrow by daily routine, home type and your top three must haves.`,
    },
    compare: {
      title: 'Compare daily life first',
      text: `Compare ${place} by commute, services, home type and what would change in your normal week.`,
    },
    numbers: {
      title: 'Set the real monthly range',
      text: 'Combine payment, taxes, insurance, association costs and maintenance before setting a search price.',
    },
    relocate: {
      title: 'Build the move around the destination',
      text: `Use ${place} as the starting point and compare daily life, visit logistics and the local help you will need.`,
    },
  }

  return [
    firstByGoal[answers.goal || 'search'],
    {
      title:
        answers.goal === 'numbers'
          ? 'Protect the cash plan'
          : 'Set the real monthly range',
      text: 'Separate down payment, closing costs, moving costs and a reserve so the payment is not the only decision.',
    },
    {
      title:
        answers.goal === 'relocate'
          ? 'Organize the remote search'
          : 'Turn priorities into search criteria',
      text:
        answers.goal === 'relocate'
          ? 'Decide what can be checked by video, what requires a visit and which local professionals you may need.'
          : 'Keep three nonnegotiables and one flexible preference so homes are easier to compare.',
    },
  ]
}
