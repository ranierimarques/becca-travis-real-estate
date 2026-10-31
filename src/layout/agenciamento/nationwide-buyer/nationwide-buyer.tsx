import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Image } from '@/common'
import becca from '@/layout/index/sections/achievements/images/becca.jpg'
import downtownHuntsville from '@/layout/index/sections/hero/images/downtown-huntsville.jpg'
import { stateGuideBySlug } from '@/resources/relocation/state-guides'
import type { RelocationPlan } from '../relocation-plan'
import { readStoredRelocationPlan } from '../relocation-plan'
import { Contact } from '../sections'
import * as S from './nationwide-buyer.styles'
import { RelocationPlanner } from './relocation-planner'
import { RelocationValue } from './relocation-value'
import { StateDirectory } from './state-directory'

const faqs = [
  {
    question: 'Posso contar com sua ajuda para comprar em qualquer estado?',
    answer:
      'Sim. Sua busca pode começar comigo em português em qualquer estado dos Estados Unidos. No Alabama, trabalho diretamente com você. Nos demais estados, conecto e colaboro com um profissional local e continuo envolvida durante o processo.',
  },
  {
    question: 'Por onde começo se ainda não escolhi a cidade?',
    answer:
      'Comece pela rotina que deseja ter. Trabalho, deslocamento, serviços, proximidade da família, clima, tipo de imóvel e orçamento ajudam a comparar lugares antes de comparar casas.',
  },
  {
    question: 'O que entra no custo completo da mudança?',
    answer:
      'Além do preço e da parcela, vale organizar impostos, seguro, HOA quando houver, custos de fechamento, viagem, transporte da mudança, armazenamento e possível moradia temporária. Os valores exatos precisam ser confirmados com os profissionais da região e do financiamento.',
  },
  {
    question: 'É possível comprar sem estar presente em todas as etapas?',
    answer:
      'Muitas etapas podem ser organizadas à distância, dependendo do imóvel, do financiamento e das regras locais. Visitas em vídeo, inspeções, assinaturas e opções de fechamento precisam ser planejadas com a equipe da transação.',
  },
  {
    question: 'Quando devo começar a planejar?',
    answer:
      'Quanto antes você conseguir organizar destino, orçamento e prazo, melhor. Mesmo quando a compra ainda está distante, um plano inicial ajuda a evitar viagens inúteis e decisões apressadas.',
  },
  {
    question: 'Você apenas envia o contato de outro corretor?',
    answer:
      'Não. Primeiro eu entendo sua mudança e organizo o contexto. Depois faço uma apresentação pessoal, compartilho o plano com o profissional local e continuo conectada à equipe.',
  },
  {
    question: 'Como funciona a conexão com profissionais de outros estados?',
    answer:
      'Quando houver um acordo de indicação entre as corretoras, a compensação e as divulgações aplicáveis são tratadas conforme a documentação e as regras da transação. Eu explico como a conexão será organizada antes de encaminhar seu plano.',
  },
]

const heroBackground = `linear-gradient(rgba(29, 20, 31, 0.72), rgba(39, 24, 37, 0.78)), url(${downtownHuntsville.src})`
const ctaBackground = `linear-gradient(rgba(69, 29, 52, 0.91), rgba(42, 23, 35, 0.96)), url(${downtownHuntsville.src})`

export function NationwideBuyer() {
  const router = useRouter()
  const [showMobileCta, setShowMobileCta] = useState(false)
  const [relocationPlan, setRelocationPlan] = useState<RelocationPlan>({})
  const [planStorageReady, setPlanStorageReady] = useState(false)
  const selectedState =
    typeof router.query.estado === 'string'
      ? stateGuideBySlug[router.query.estado]
      : undefined
  const selectedRegion =
    selectedState && typeof router.query.regiao === 'string'
      ? selectedState.regions.find(region => region.name === router.query.regiao)
      : undefined
  const selectedDestination = selectedRegion
    ? `${selectedRegion.name}, ${selectedState?.name}`
    : selectedState?.name

  useEffect(() => {
    function updateMobileCta() {
      setShowMobileCta(window.scrollY > 520)
    }

    updateMobileCta()
    window.addEventListener('scroll', updateMobileCta, { passive: true })
    return () => window.removeEventListener('scroll', updateMobileCta)
  }, [])

  useEffect(() => {
    const storedPlan = readStoredRelocationPlan(
      window.sessionStorage.getItem('becca-relocation-plan')
    )
    setRelocationPlan(storedPlan)
    setPlanStorageReady(true)
  }, [])

  useEffect(() => {
    if (!planStorageReady) return
    window.sessionStorage.setItem('becca-relocation-plan', JSON.stringify(relocationPlan))
  }, [planStorageReady, relocationPlan])

  return (
    <>
      <S.SkipLink href="#conteudo">Ir para o conteúdo</S.SkipLink>

      <main id="conteudo">
        <S.Hero css={{ backgroundImage: heroBackground }}>
          <S.Container>
            <S.HeroGrid>
              <S.HeroContent>
                <S.Eyebrow>Atendimento em português nos Estados Unidos</S.Eyebrow>
                <S.HeroTitle>
                  Você define o destino. <em>Eu acompanho sua compra.</em>
                </S.HeroTitle>
                <S.HeroLede>
                  Para quem está mudando de cidade, estado ou país e precisa comparar
                  regiões, entender o custo completo e comprar à distância. No Alabama,
                  trabalho diretamente com você. Nos demais estados, conecto você a um
                  profissional local e continuo envolvida no processo.
                </S.HeroLede>

                <S.BuyerPrompt href="#planejador">
                  <S.PromptIcon aria-hidden="true">⌖</S.PromptIcon>
                  <S.PromptText>
                    <small>Comece pelo plano</small>
                    <strong>Qual é o ponto de partida da sua mudança?</strong>
                  </S.PromptText>
                  <S.PromptButton>Planejar agora</S.PromptButton>
                </S.BuyerPrompt>

                <S.RouteLinks aria-label="Escolha seu ponto de partida">
                  <a href="#planejador">Já escolhi a cidade</a>
                  <a href="#planejador">Comparando estados</a>
                  <a href="#planejador">Ainda estou começando</a>
                  <a href="tel:+12563189066">Ligar em português</a>
                </S.RouteLinks>

                <S.ProofList aria-label="Diferenciais">
                  <span>Mapa de destino</span>
                  <span>Custo completo</span>
                  <span>Compra à distância</span>
                </S.ProofList>
              </S.HeroContent>
            </S.HeroGrid>
          </S.Container>
        </S.Hero>

        <S.TrustStrip aria-label="Resumo do atendimento">
          <S.Container>
            <S.TrustGrid>
              <S.TrustItem>
                <strong>Português</strong>
                <span>Conversa sem barreiras</span>
              </S.TrustItem>
              <S.TrustItem>
                <strong>Alabama</strong>
                <span>Experiência local</span>
              </S.TrustItem>
              <S.TrustItem>
                <strong>50 estados</strong>
                <span>Conexões nacionais</span>
              </S.TrustItem>
              <S.TrustItem>
                <strong>Plano claro</strong>
                <span>Compra e mudança</span>
              </S.TrustItem>
            </S.TrustGrid>
          </S.Container>
        </S.TrustStrip>

        <RelocationPlanner
          plan={relocationPlan}
          onPlanChange={setRelocationPlan}
          defaultDestination={selectedDestination}
        />

        <S.Section tone="white">
          <S.Container>
            <S.RelationshipGrid>
              <S.PortraitWrap>
                <S.PortraitMedia>
                  <Image
                    src={becca}
                    alt="Becca Travis, profissional imobiliária que atende em português"
                    fill
                    sizes="(max-width: 1023px) 90vw, 420px"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    quality={90}
                  />
                </S.PortraitMedia>
                <S.PortraitNote>
                  “Seu destino pode mudar. A pessoa em quem você confia não precisa
                  mudar.”
                </S.PortraitNote>
              </S.PortraitWrap>

              <S.RelationshipCopy>
                <S.SectionTag>Não comece do zero</S.SectionTag>
                <S.SectionHeading>
                  Não importa o estado. Você continua comigo.
                </S.SectionHeading>
                <p>
                  Você começa a conversa comigo em português. Eu entendo o que sua família
                  procura, onde quer chegar, seu orçamento e o que precisa para se sentir
                  seguro na decisão.
                </p>
                <p>
                  Quando a compra acontece fora do Alabama, eu encontro a conexão local
                  certa, faço uma apresentação pessoal e trabalho com o profissional
                  daquela região. Você mantém a relação de confiança. Sua compra ganha
                  conhecimento local.
                </p>
                <S.Signature>Becca</S.Signature>
              </S.RelationshipCopy>
            </S.RelationshipGrid>
          </S.Container>
        </S.Section>

        <RelocationValue />

        <StateDirectory />

        <S.Section tone="white" id="estados">
          <S.Container>
            <S.Centered>
              <S.SectionTag>Dois caminhos</S.SectionTag>
              <S.SectionHeading>A mesma Becca com você.</S.SectionHeading>
              <S.SectionCopy>
                O jeito de atender muda conforme o mercado. A relação e o compromisso com
                a sua compra continuam.
              </S.SectionCopy>
            </S.Centered>

            <S.PathsGrid>
              <S.PathCard>
                <S.StateCount aria-hidden="true">AL</S.StateCount>
                <S.PathLabel>Comprando no Alabama</S.PathLabel>
                <h3>Eu sou sua profissional local.</h3>
                <p>
                  Ajudo você a conhecer as regiões, encontrar imóveis, avaliar opções,
                  preparar a oferta, negociar e acompanhar a compra.
                </p>
                <S.TextLink href="#contato">Quero comprar no Alabama →</S.TextLink>
              </S.PathCard>

              <S.PathCard featured>
                <S.StateCount light aria-hidden="true">
                  49
                </S.StateCount>
                <S.PathLabel>Comprando em outro estado</S.PathLabel>
                <h3>Eu organizo sua conexão local.</h3>
                <p>
                  Entendo seu objetivo, encontro o corretor certo naquela região, faço uma
                  apresentação pessoal e trabalho com ele ou ela para dar continuidade à
                  busca.
                </p>
                <S.ReferralNote>
                  Transparência: quando aplicável, a conexão pode envolver um acordo de
                  indicação entre corretoras, devidamente documentado.
                </S.ReferralNote>
                <S.TextLink light href="#contato">
                  Quero comprar em outro estado →
                </S.TextLink>
              </S.PathCard>
            </S.PathsGrid>
          </S.Container>
        </S.Section>

        <S.Section tone="blush" id="perguntas">
          <S.Container>
            <S.FaqGrid>
              <div>
                <S.SectionTag>Perguntas frequentes</S.SectionTag>
                <S.SectionHeading>O que você precisa saber.</S.SectionHeading>
                <S.SectionCopy>
                  Se sua pergunta não estiver aqui, fale comigo em português.
                </S.SectionCopy>
              </div>
              <div>
                {faqs.map((faq, index) => (
                  <S.Details key={faq.question} open={index === 0}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </S.Details>
                ))}
              </div>
            </S.FaqGrid>
          </S.Container>
        </S.Section>

        <S.FinalCta css={{ backgroundImage: ctaBackground }}>
          <S.Container>
            <S.DarkTag>Seu próximo endereço</S.DarkTag>
            <h2>Sua mudança começa com um plano.</h2>
            <p>
              Conte de onde você está vindo, o que precisa encontrar e quando pretende
              chegar. Eu ajudo você a organizar o destino, a compra e a equipe certa em
              português.
            </p>
            <S.Actions centered>
              <S.PrimaryAction href="#contato">
                Conte seus planos à Becca <span aria-hidden="true">→</span>
              </S.PrimaryAction>
              <S.LightAction href="tel:+12563189066">
                Ligar para (256) 318-9066
              </S.LightAction>
            </S.Actions>
          </S.Container>
        </S.FinalCta>

        <S.ContactAnchor id="contato">
          <Contact
            relocationPlan={relocationPlan}
            defaultState={selectedState?.name}
            defaultCity={selectedRegion?.name}
          />
        </S.ContactAnchor>
      </main>

      <S.MobileCta visible={showMobileCta} href="#contato">
        Montar meu plano com a Becca →
      </S.MobileCta>
    </>
  )
}
