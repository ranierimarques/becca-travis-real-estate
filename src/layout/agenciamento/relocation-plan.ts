export type DestinationStage =
  | 'Já escolhi a cidade'
  | 'Escolhi o estado'
  | 'Estou comparando estados'
  | 'Ainda estou começando'

export type MoveWindow = 'Até 3 meses' | '3 a 6 meses' | '6 a 12 meses' | 'Mais de 1 ano'

export type RelocationPriority =
  | 'Escolher a região certa'
  | 'Entender o custo total'
  | 'Comprar à distância'
  | 'Montar a equipe local'

export type PropertyGoal =
  | 'Casa'
  | 'Condomínio ou townhome'
  | 'Multifamiliar ou investimento'
  | 'Ainda estou decidindo'

export type BudgetBand =
  | 'Até US$ 300 mil'
  | 'US$ 300 mil a US$ 500 mil'
  | 'US$ 500 mil a US$ 900 mil'
  | 'Acima de US$ 900 mil'

export type RemoteVisitPlan =
  | 'Quero comprar à distância'
  | 'Posso fazer uma viagem curta'
  | 'Quero combinar vídeo e viagem'
  | 'Ainda não decidi'

export type HomeToSell =
  | 'Sim, preciso vender primeiro'
  | 'Sim, mas posso comprar antes'
  | 'Talvez'
  | 'Não'

export type RelocationPlan = {
  destinationStage?: DestinationStage
  moveWindow?: MoveWindow
  propertyGoal?: PropertyGoal
  budgetBand?: BudgetBand
  remoteVisitPlan?: RemoteVisitPlan
  homeToSell?: HomeToSell
  priority?: RelocationPriority
}

const destinationStages: DestinationStage[] = [
  'Já escolhi a cidade',
  'Escolhi o estado',
  'Estou comparando estados',
  'Ainda estou começando',
]

const moveWindows: MoveWindow[] = [
  'Até 3 meses',
  '3 a 6 meses',
  '6 a 12 meses',
  'Mais de 1 ano',
]

const relocationPriorities: RelocationPriority[] = [
  'Escolher a região certa',
  'Entender o custo total',
  'Comprar à distância',
  'Montar a equipe local',
]

const propertyGoals: PropertyGoal[] = [
  'Casa',
  'Condomínio ou townhome',
  'Multifamiliar ou investimento',
  'Ainda estou decidindo',
]

const budgetBands: BudgetBand[] = [
  'Até US$ 300 mil',
  'US$ 300 mil a US$ 500 mil',
  'US$ 500 mil a US$ 900 mil',
  'Acima de US$ 900 mil',
]

const remoteVisitPlans: RemoteVisitPlan[] = [
  'Quero comprar à distância',
  'Posso fazer uma viagem curta',
  'Quero combinar vídeo e viagem',
  'Ainda não decidi',
]

const homesToSell: HomeToSell[] = [
  'Sim, preciso vender primeiro',
  'Sim, mas posso comprar antes',
  'Talvez',
  'Não',
]

export function readStoredRelocationPlan(value: string | null): RelocationPlan {
  if (!value) return {}

  try {
    const parsed = JSON.parse(value) as RelocationPlan
    return {
      destinationStage: destinationStages.includes(
        parsed.destinationStage as DestinationStage
      )
        ? parsed.destinationStage
        : undefined,
      moveWindow: moveWindows.includes(parsed.moveWindow as MoveWindow)
        ? parsed.moveWindow
        : undefined,
      propertyGoal: propertyGoals.includes(parsed.propertyGoal as PropertyGoal)
        ? parsed.propertyGoal
        : undefined,
      budgetBand: budgetBands.includes(parsed.budgetBand as BudgetBand)
        ? parsed.budgetBand
        : undefined,
      remoteVisitPlan: remoteVisitPlans.includes(
        parsed.remoteVisitPlan as RemoteVisitPlan
      )
        ? parsed.remoteVisitPlan
        : undefined,
      homeToSell: homesToSell.includes(parsed.homeToSell as HomeToSell)
        ? parsed.homeToSell
        : undefined,
      priority: relocationPriorities.includes(parsed.priority as RelocationPriority)
        ? parsed.priority
        : undefined,
    }
  } catch {
    return {}
  }
}

export function getRelocationJourneyStage(plan?: RelocationPlan) {
  if (plan?.destinationStage === 'Já escolhi a cidade') return 'Destino definido'
  if (
    plan?.destinationStage === 'Escolhi o estado' ||
    plan?.destinationStage === 'Estou comparando estados'
  ) {
    return 'Comparação ativa'
  }
  return 'Pesquisa inicial'
}

export function getRelocationTiming(plan?: RelocationPlan) {
  if (plan?.moveWindow === 'Até 3 meses') return 'Prazo curto'
  if (plan?.moveWindow === '3 a 6 meses') return 'Prazo médio'
  return 'Planejamento antecipado'
}
