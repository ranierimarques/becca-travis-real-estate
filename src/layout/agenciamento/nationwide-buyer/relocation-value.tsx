import {
  DrawingPinIcon,
  ListBulletIcon,
  PersonIcon,
  ValueIcon,
  VideoIcon,
} from '@radix-ui/react-icons'
import * as S from './nationwide-buyer.styles'

const deliverables = [
  {
    number: '01',
    title: 'Mapa de destino',
    description:
      'Rotina, deslocamento, serviços e regiões para comparar antes dos imóveis.',
    icon: <DrawingPinIcon />,
  },
  {
    number: '02',
    title: 'Custo completo',
    description: 'Parcela, impostos, seguro, HOA, viagem, mudança e moradia temporária.',
    icon: <ValueIcon />,
  },
  {
    number: '03',
    title: 'Lista de decisão',
    description: 'O que é essencial, o que é preferência e o que elimina uma opção.',
    icon: <ListBulletIcon />,
  },
  {
    number: '04',
    title: 'Compra à distância',
    description: 'Visitas em vídeo, viagem objetiva, inspeção, documentos e prazos.',
    icon: <VideoIcon />,
  },
  {
    number: '05',
    title: 'Equipe e calendário',
    description: 'Profissional local, financiamento, fechamento, mudança e chegada.',
    icon: <PersonIcon />,
  },
]

const movingTimeline = [
  {
    weeks: 'Semanas 8 e 7',
    title: 'Destino e orçamento',
    items: [
      'Transforme sua rotina em critérios de comparação',
      'Some compra, viagem, mudança e possível moradia temporária',
      'Converse sobre financiamento disponível no estado de destino',
    ],
  },
  {
    weeks: 'Semanas 6 e 5',
    title: 'Equipe e visitas',
    items: [
      'Escolha o profissional local e alinhe responsabilidades',
      'Decida entre visitas em vídeo, viagem curta ou os dois',
      'Organize documentos e cotações para a mudança',
    ],
  },
  {
    weeks: 'Semanas 4 e 3',
    title: 'Casas e decisão',
    items: [
      'Compare imóveis usando a mesma lista de critérios',
      'Revise entorno, ruído, deslocamento e pontos difíceis de ver online',
      'Planeje oferta, inspeção e alternativas com a equipe local',
    ],
  },
  {
    weeks: 'Semanas 2 e 1',
    title: 'Fechamento e chegada',
    items: [
      'Acompanhe documentos, seguro e datas da transação',
      'Confirme instruções bancárias por um contato verificado',
      'Organize chaves, serviços essenciais e o primeiro dia na casa',
    ],
  },
]

export function RelocationValue() {
  return (
    <S.ValueSection id="valor">
      <S.Container>
        <S.ValueHeading>
          <h2>O que você recebe antes de fazer uma oferta.</h2>
          <p>Um plano de compra e mudança organizado em português.</p>
        </S.ValueHeading>

        <S.Deliverables>
          {deliverables.map(item => (
            <S.Deliverable key={item.number}>
              <S.DeliverableTop>
                <S.DeliverableIcon aria-hidden="true">{item.icon}</S.DeliverableIcon>
                <span>{item.number}</span>
              </S.DeliverableTop>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </S.Deliverable>
          ))}
        </S.Deliverables>

        <S.TimelineHeader>
          <div>
            <h3>Um roteiro flexível de 8 semanas.</h3>
            <p>
              Use como ponto de partida. O calendário real varia conforme mercado,
              financiamento, contrato e data da mudança.
            </p>
          </div>
          <a href="#planejador">Personalizar meu roteiro</a>
        </S.TimelineHeader>

        <S.MoveTimeline>
          {movingTimeline.map(phase => (
            <S.TimelinePhase key={phase.weeks}>
              <span>{phase.weeks}</span>
              <h4>{phase.title}</h4>
              <ul>
                {phase.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </S.TimelinePhase>
          ))}
        </S.MoveTimeline>

        <S.ValueCallout>
          <h3>Você não precisa escolher uma casa no escuro.</h3>
          <div>
            <p>
              Eu organizo as perguntas, o contexto e a equipe para você comparar com
              clareza e decidir com mais segurança.
            </p>
            <S.ValueAction href="#contato">Montar meu plano com a Becca</S.ValueAction>
          </div>
        </S.ValueCallout>
      </S.Container>
    </S.ValueSection>
  )
}
