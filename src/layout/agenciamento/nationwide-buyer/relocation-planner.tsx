import Link from 'next/link'
import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircledIcon,
  HomeIcon,
} from '@radix-ui/react-icons'
import type {
  BudgetBand,
  DestinationStage,
  HomeToSell,
  MoveWindow,
  PropertyGoal,
  RelocationPlan,
  RelocationPriority,
  RemoteVisitPlan,
} from '@/layout/agenciamento/relocation-plan'
import {
  getRelocationJourneyStage,
  getRelocationTiming,
} from '@/layout/agenciamento/relocation-plan'
import { getLeadAttribution } from '@/services/leads/get-lead-attribution'
import * as S from './nationwide-buyer.styles'

type PlannerField = keyof RelocationPlan

type PlannerQuestion = {
  field: PlannerField
  label: string
  shortLabel: string
  description: string
  options: readonly string[]
}

const questions: readonly PlannerQuestion[] = [
  {
    field: 'destinationStage',
    label: 'Em que ponto está sua escolha?',
    shortLabel: 'Destino',
    description: 'Isso define o primeiro tipo de comparação que vale a pena fazer.',
    options: [
      'Já escolhi a cidade',
      'Escolhi o estado',
      'Estou comparando estados',
      'Ainda estou começando',
    ] as readonly DestinationStage[],
  },
  {
    field: 'moveWindow',
    label: 'Quando você pretende se mudar?',
    shortLabel: 'Prazo',
    description: 'O prazo organiza financiamento, visitas, oferta, fechamento e chegada.',
    options: [
      'Até 3 meses',
      '3 a 6 meses',
      '6 a 12 meses',
      'Mais de 1 ano',
      'Ainda pesquisando',
    ] as readonly MoveWindow[],
  },
  {
    field: 'propertyGoal',
    label: 'Que tipo de imóvel combina com seu plano?',
    shortLabel: 'Imóvel',
    description: 'Isso ajuda a escolher a experiência local que sua busca precisa.',
    options: [
      'Casa',
      'Condomínio ou townhome',
      'Multifamiliar ou investimento',
      'Ainda estou decidindo',
    ] as readonly PropertyGoal[],
  },
  {
    field: 'budgetBand',
    label: 'Qual faixa de compra você está considerando?',
    shortLabel: 'Orçamento',
    description:
      'Uma faixa inicial ajuda a comparar regiões e o custo total com realismo.',
    options: [
      'Até US$ 300 mil',
      'US$ 300 mil a US$ 500 mil',
      'US$ 500 mil a US$ 900 mil',
      'Acima de US$ 900 mil',
      'Ainda não sei',
    ] as readonly BudgetBand[],
  },
  {
    field: 'remoteVisitPlan',
    label: 'Como você imagina conhecer os imóveis?',
    shortLabel: 'Visitas',
    description:
      'Se você está no Brasil, organize como conhecer os imóveis antes de viajar. Confirme as opções de visita e fechamento com a equipe local.',
    options: [
      'Quero comprar à distância',
      'Posso fazer uma viagem curta',
      'Quero combinar vídeo e viagem',
      'Ainda não decidi',
    ] as readonly RemoteVisitPlan[],
  },
  {
    field: 'homeToSell',
    label: 'Você também tem um imóvel para vender?',
    shortLabel: 'Venda',
    description:
      'Essa resposta ajuda a alinhar datas, recursos e o risco entre transações.',
    options: [
      'Sim, preciso vender primeiro',
      'Sim, mas posso comprar antes',
      'Talvez',
      'Não',
    ] as readonly HomeToSell[],
  },
  {
    field: 'priority',
    label: 'O que mais precisa de clareza agora?',
    shortLabel: 'Prioridade',
    description: 'Escolha a dúvida que mais pesa na sua decisão hoje.',
    options: [
      'Escolher a região certa',
      'Entender o custo total',
      'Comprar à distância',
      'Montar a equipe local',
    ] as readonly RelocationPriority[],
  },
]

const destinationGuidance: Record<DestinationStage, { title: string; text: string }> = {
  'Já escolhi a cidade': {
    title: 'Valide a rotina antes dos imóveis',
    text: 'Compare deslocamento, serviços, regiões e o dia a dia que você terá depois da mudança.',
  },
  'Escolhi o estado': {
    title: 'Compare duas ou três cidades',
    text: 'Use os mesmos critérios em cada lugar para enxergar diferenças reais de rotina e custo.',
  },
  'Estou comparando estados': {
    title: 'Escolha critérios antes das casas',
    text: 'Trabalho, família, clima, viagens, orçamento e rotina ajudam a reduzir as opções com lógica.',
  },
  'Ainda estou começando': {
    title: 'Comece pelo motivo da mudança',
    text: 'Transforme trabalho, família, espaço e estilo de vida em critérios que possam ser comparados.',
  },
}

const timingGuidance: Record<MoveWindow, { title: string; text: string }> = {
  'Até 3 meses': {
    title: 'Proteja seu prazo',
    text: 'Organize financiamento, visitas, inspeção, fechamento e chegada no mesmo calendário.',
  },
  '3 a 6 meses': {
    title: 'Monte o calendário da compra',
    text: 'Defina quando comparar regiões, preparar o orçamento e começar as visitas.',
  },
  '6 a 12 meses': {
    title: 'Use o tempo para comparar melhor',
    text: 'Acompanhe regiões e custos antes de transformar interesse em uma busca ativa.',
  },
  'Mais de 1 ano': {
    title: 'Construa sua base de decisão',
    text: 'Organize prioridades e referências agora para evitar uma escolha apressada depois.',
  },
  'Ainda pesquisando': {
    title: 'Pesquise com critérios claros',
    text: 'Você não precisa definir uma data agora. Comece organizando destino, custo e rotina.',
  },
}

const priorityGuidance: Record<RelocationPriority, { title: string; text: string }> = {
  'Escolher a região certa': {
    title: 'Compare a vida que cada lugar oferece',
    text: 'Olhe para rotina, deslocamento e serviços antes de se apaixonar por um imóvel.',
  },
  'Entender o custo total': {
    title: 'Calcule compra e mudança juntas',
    text: 'Considere parcela, impostos, seguro, HOA, viagem, mudança e moradia temporária.',
  },
  'Comprar à distância': {
    title: 'Defina como visitar sem estar presente',
    text: 'Combine visitas em vídeo, uma viagem objetiva, inspeção e revisão de documentos.',
  },
  'Montar a equipe local': {
    title: 'Escolha profissionais que conversem entre si',
    text: 'Alinhe o profissional local, financiamento, inspeção e fechamento ao seu prazo.',
  },
}

const defaultGuidance = [
  {
    title: 'Compare a rotina, não só os imóveis',
    text: 'Comece pelo lugar e pelo dia a dia que você quer construir.',
  },
  {
    title: 'Calcule compra e mudança juntas',
    text: 'Veja o custo mensal e também os gastos para chegar ao novo endereço.',
  },
  {
    title: 'Defina como visitar à distância',
    text: 'Planeje vídeo, viagem, inspeção e decisão antes de fazer uma oferta.',
  },
]

const guidanceIcons = [HomeIcon, CalendarIcon, ArrowRightIcon] as const

function getPlanGuidance(plan: RelocationPlan) {
  return [
    plan.destinationStage
      ? destinationGuidance[plan.destinationStage]
      : defaultGuidance[0],
    plan.moveWindow ? timingGuidance[plan.moveWindow] : defaultGuidance[1],
    plan.priority ? priorityGuidance[plan.priority] : defaultGuidance[2],
  ]
}

function isPlausiblePhoneNumber(value: string) {
  const digits = value.replace(/\D/g, '')

  if (digits.length < 8 || digits.length > 15) return false
  if (/^(\d)\1+$/.test(digits)) return false

  const obviousPlaceholders = ['0123456789', '1234567890', '9876543210']
  return !obviousPlaceholders.includes(digits)
}

type RelocationPlannerProps = {
  plan: RelocationPlan
  onPlanChange: (plan: RelocationPlan) => void
  defaultDestination?: string
}

function QuickLeadCapture({
  plan,
  defaultDestination,
}: Pick<RelocationPlannerProps, 'plan' | 'defaultDestination'>) {
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )
  const [phoneError, setPhoneError] = useState('')
  const [contactChannel, setContactChannel] = useState<'email' | 'phone'>('email')

  async function submitQuickPlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const phone = String(form.get('phone') || '')

    if (contactChannel === 'phone' && !isPlausiblePhoneNumber(phone)) {
      setPhoneError('Informe um telefone válido com código do país ou código de área.')
      return
    }

    setPhoneError('')
    setLeadStatus('sending')

    try {
      const result = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          subject: 'Novo plano rápido de mudança',
          from_name: 'Becca Travis Website',
          form_source: 'Planejador de mudança em português',
          form_version: 'relocation_brief_v2',
          first_name: form.get('first_name'),
          email: form.get('email'),
          phone,
          reply_channel: contactChannel === 'email' ? 'E-mail' : 'Telefone ou WhatsApp',
          current_location: form.get('current_location'),
          destination: form.get('destination'),
          optional_context: form.get('optional_context'),
          destination_stage: plan.destinationStage,
          move_window: plan.moveWindow,
          property_goal: plan.propertyGoal,
          budget_band: plan.budgetBand,
          remote_visit_plan: plan.remoteVisitPlan,
          home_to_sell: plan.homeToSell,
          relocation_priority: plan.priority,
          journey_stage: getRelocationJourneyStage(plan),
          follow_up_timing: getRelocationTiming(plan),
          botcheck: form.get('botcheck'),
          ...getLeadAttribution(),
        }),
      })
      const response = await result.json()

      setLeadStatus(result.ok && response.success === true ? 'sent' : 'error')
    } catch {
      setLeadStatus('error')
    }
  }

  if (leadStatus === 'sent') {
    return (
      <S.LeadSuccess role="status">
        <CheckCircledIcon aria-hidden="true" />
        <div>
          <strong>Seu plano foi enviado.</strong>
          <span>
            Becca vai revisar suas respostas e falar com você em português pelo canal
            escolhido. Fora do Alabama, uma apresentação local só acontece com sua
            autorização. Você decide se quer seguir.
          </span>
          <a href="#contato">Acrescentar detalhes, se quiser</a>
        </div>
      </S.LeadSuccess>
    )
  }

  return (
    <S.QuickLeadForm onSubmit={submitQuickPlan}>
      <h4>Salvar e pedir uma revisão em português</h4>
      <p>
        Informe seu primeiro nome e escolha como prefere receber a resposta. As respostas
        do planejador já seguem juntas.
      </p>
      <S.ContactChoice role="radiogroup" aria-label="Canal de resposta">
        <button
          type="button"
          role="radio"
          aria-checked={contactChannel === 'email'}
          data-selected={contactChannel === 'email'}
          onClick={() => setContactChannel('email')}
        >
          E-mail
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={contactChannel === 'phone'}
          data-selected={contactChannel === 'phone'}
          onClick={() => setContactChannel('phone')}
        >
          Telefone ou WhatsApp
        </button>
      </S.ContactChoice>
      <S.QuickLeadGrid>
        <label>
          <span>Nome</span>
          <input name="first_name" type="text" autoComplete="given-name" required />
        </label>
        {contactChannel === 'email' ? (
          <label>
            <span>E-mail</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
        ) : (
          <label>
            <span>Telefone ou WhatsApp</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-describedby={phoneError ? 'planner-phone-error' : undefined}
              aria-invalid={Boolean(phoneError)}
              onChange={() => phoneError && setPhoneError('')}
              placeholder="Com código do país ou área"
              required
            />
            {phoneError && (
              <S.FieldError id="planner-phone-error" role="alert">
                {phoneError}
              </S.FieldError>
            )}
          </label>
        )}
        <label>
          <span>De onde você está vindo? Opcional</span>
          <input
            name="current_location"
            type="text"
            autoComplete="address-level1"
            placeholder="Cidade, estado ou país"
          />
        </label>
        <label>
          <span>Destino, se já souber</span>
          <input
            name="destination"
            type="text"
            autoComplete="address-level1"
            defaultValue={defaultDestination}
          />
        </label>
        <S.QuickLeadWide>
          <span>Algo mais que devo considerar?</span>
          <textarea
            name="optional_context"
            rows={3}
            placeholder="Exemplo: idioma, investimento, acessibilidade ou prazo especial"
          />
        </S.QuickLeadWide>
      </S.QuickLeadGrid>
      <input
        name="botcheck"
        type="checkbox"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      <S.QuickLeadConsent>
        Ao enviar, você autoriza contato sobre sua solicitação e concorda com os{' '}
        <Link href="/terms-of-service">Termos de Uso</Link> e a{' '}
        <Link href="/privacy-notice">Política de Privacidade</Link>. Seus dados não são
        compartilhados com um profissional local sem sua autorização.
      </S.QuickLeadConsent>
      <S.QuickLeadSubmit type="submit" disabled={leadStatus === 'sending'}>
        {leadStatus === 'sending' ? 'Enviando plano' : 'Salvar meu plano e pedir revisão'}
      </S.QuickLeadSubmit>
      {leadStatus === 'error' && (
        <S.LeadError role="alert">
          Não foi possível enviar agora. Você pode{' '}
          <a href="tel:+12563189066">ligar para (256) 318-9066</a>.
        </S.LeadError>
      )}
    </S.QuickLeadForm>
  )
}

export function RelocationPlanner({
  plan,
  onPlanChange,
  defaultDestination,
}: RelocationPlannerProps) {
  const [step, setStep] = useState(0)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const question = questions[step]
  const selectedValue = plan[question.field]

  const guidance = getPlanGuidance(plan)
  const planFacts = [
    { label: 'Imóvel', value: plan.propertyGoal },
    { label: 'Faixa', value: plan.budgetBand },
    { label: 'Visitas', value: plan.remoteVisitPlan },
    { label: 'Imóvel para vender', value: plan.homeToSell },
  ].filter(fact => fact.value)

  function selectOption(value: string) {
    onPlanChange({ ...plan, [question.field]: value } as RelocationPlan)
  }

  function continuePlan() {
    if (step < questions.length - 1) {
      setStep(current => current + 1)
      return
    }

    setShowLeadForm(true)
  }

  return (
    <S.PlannerSection id="planejador">
      <S.Container>
        <S.PlannerHeading>
          <h2>Planeje a mudança antes de procurar a casa.</h2>
          <p>Em dois minutos, organize o que precisa decidir primeiro.</p>
          {defaultDestination && (
            <S.SelectedDestination>
              Destino selecionado: <strong>{defaultDestination}</strong>{' '}
              <a href="#guias-por-estado">Trocar estado</a>
            </S.SelectedDestination>
          )}
        </S.PlannerHeading>

        <S.PlannerShell>
          <S.PlannerQuestions>
            <S.PlannerSteps aria-label="Etapas do plano de mudança">
              {questions.map((item, index) => (
                <button
                  key={item.field}
                  type="button"
                  aria-current={step === index ? 'step' : undefined}
                  onClick={() => setStep(index)}
                >
                  <span>{index + 1}</span>
                  <b>{item.shortLabel}</b>
                </button>
              ))}
            </S.PlannerSteps>

            <S.PlannerProgress aria-hidden="true">
              <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
            </S.PlannerProgress>

            <S.QuestionHeader>
              <h3>{question.label}</h3>
              <p>{question.description}</p>
            </S.QuestionHeader>

            <S.OptionList role="radiogroup" aria-label={question.label}>
              {question.options.map(option => (
                <S.OptionButton
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={selectedValue === option}
                  selected={selectedValue === option}
                  onClick={() => selectOption(option)}
                >
                  <span aria-hidden="true" />
                  {option}
                </S.OptionButton>
              ))}
            </S.OptionList>
          </S.PlannerQuestions>

          <S.PlanResult aria-live="polite">
            <h3>Seu Resumo de Mudança</h3>
            <p>
              Veja seu ponto de partida agora. Salve quando quiser uma revisão humana em
              português.
            </p>

            <S.GuidanceList>
              {guidance.map((item, index) => {
                const GuidanceIcon = guidanceIcons[index]

                return (
                  <li key={item.title}>
                    <S.GuidanceIcon aria-hidden="true">
                      <GuidanceIcon />
                    </S.GuidanceIcon>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </li>
                )
              })}
            </S.GuidanceList>

            {planFacts.length > 0 && (
              <S.PlanFacts aria-label="Respostas do plano">
                {planFacts.map(fact => (
                  <li key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </li>
                ))}
              </S.PlanFacts>
            )}

            {showLeadForm ? (
              <QuickLeadCapture plan={plan} defaultDestination={defaultDestination} />
            ) : (
              <>
                <S.PlannerButton
                  type="button"
                  disabled={!selectedValue}
                  onClick={continuePlan}
                >
                  {step === questions.length - 1
                    ? 'Levar meu plano para a Becca'
                    : 'Continuar meu plano'}
                  <ArrowRightIcon aria-hidden="true" />
                </S.PlannerButton>
                <S.PlannerTextLink href="#contato">
                  Falar com Becca em português
                </S.PlannerTextLink>
              </>
            )}
          </S.PlanResult>
        </S.PlannerShell>
      </S.Container>
    </S.PlannerSection>
  )
}
