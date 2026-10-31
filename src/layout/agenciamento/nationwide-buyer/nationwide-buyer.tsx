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
      'Sua busca pode começar comigo em português em qualquer estado dos Estados Unidos. No Alabama, presto atendimento imobiliário local. Fora do Alabama, ajudo com o planejamento e, com sua autorização, apresento você a um profissional licenciado no destino. Esse profissional conduz os serviços imobiliários locais.',
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
      'Eu escuto seus planos, ajudo a organizar prioridades da mudança e, com sua autorização, faço uma apresentação pessoal ao profissional local. O corretor licenciado conduz visitas, ofertas, negociação e a transação no mercado dele. Meu apoio contínuo é voltado ao planejamento da mudança e à comunicação em português.',
  },
  {
    question: 'Como funciona a conexão com profissionais de outros estados?',
    answer:
      'Com sua autorização, apresento você a um profissional licenciado no destino. A disponibilidade de atendimento em português varia por região. Quando houver um acordo de indicação entre corretoras, a compensação e as divulgações aplicáveis são tratadas conforme a documentação e as regras da transação.',
  },
  {
    question: 'Posso falar tudo em português?',
    answer:
      'A conversa comigo pode ser em português brasileiro. Fora do Alabama, o idioma do atendimento local depende do profissional e da região.',
  },
  {
    question: 'E se eu já estiver trabalhando com outro corretor?',
    answer:
      'Conte isso logo no início. Assim posso entender a melhor forma de respeitar a relação existente e ainda ajudar, quando possível.',
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

      <main id="conteudo" lang="pt-BR">
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
                  posso atuar como sua corretora local. Nos demais estados, ajudo a
                  planejar a mudança e, com sua autorização, apresento você a um
                  profissional licenciado no destino.
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
                <strong>Outros estados</strong>
                <span>Conexões locais</span>
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
                  Você começa a conversa comigo em português brasileiro. Eu entendo o que
                  sua família procura, onde quer chegar, seu orçamento e o que precisa
                  para decidir com segurança.
                </p>
                <p>
                  No Alabama, posso atuar como sua corretora local. Em outro estado, ajudo
                  a planejar a mudança e, com sua autorização, faço uma apresentação
                  pessoal a um profissional licenciado na região. Esse profissional conduz
                  visitas, ofertas, negociação e os serviços imobiliários locais. Eu
                  continuo à disposição para apoiar sua mudança e a comunicação em
                  português.
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
              <S.SectionHeading>Apoio certo para cada destino.</S.SectionHeading>
              <S.SectionCopy>
                No Alabama, posso atuar como sua corretora local. Em outros estados, ajudo
                no planejamento e faço a conexão com um profissional licenciado no
                destino.
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
                  Ajudo a organizar a busca e, com sua autorização, apresento você a um
                  corretor licenciado no destino. Esse profissional conduz os serviços
                  imobiliários e a transação no mercado local. Posso continuar ao seu lado
                  no planejamento da mudança, em português.
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
              chegar. Eu ajudo a organizar o destino, a mudança e, fora do Alabama, a
              conexão autorizada com um profissional licenciado no mercado local.
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
