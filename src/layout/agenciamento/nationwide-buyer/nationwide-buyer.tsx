import { useEffect, useState } from 'react'
import { Image } from '@/common'
import becca from '@/layout/index/sections/achievements/images/becca.jpg'
import downtownHuntsville from '@/layout/index/sections/hero/images/downtown-huntsville.jpg'
import { Contact } from '../sections'
import * as S from './nationwide-buyer.styles'

const collaborationCards = [
  {
    number: '01',
    icon: '✦',
    title: 'Você fala comigo',
    description:
      'Conte seus planos em português, no idioma em que consegue explicar melhor suas prioridades, dúvidas e preocupações.',
  },
  {
    number: '02',
    icon: '⌖',
    title: 'Eu encontro a conexão local certa',
    description:
      'Procuro um profissional que conheça a região escolhida e tenha o perfil adequado para a sua compra.',
  },
  {
    number: '03',
    icon: '∞',
    title: 'Nós trabalhamos juntos por você',
    description:
      'Faço a apresentação, compartilho o contexto da busca e continuo conectada. Você recebe uma equipe alinhada.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Diga onde você quer comprar',
    description:
      'Estado, cidade, tipo de imóvel, objetivo, orçamento e prazo. Se ainda estiver comparando lugares, começamos pelos seus critérios.',
  },
  {
    number: '02',
    title: 'Eu entendo o que realmente importa',
    description:
      'Não apenas quartos e preço, mas família, trabalho, rotina, investimento e o tipo de apoio que você espera.',
  },
  {
    number: '03',
    title: 'Eu monto a conexão local',
    description:
      'No Alabama, seguimos diretamente. Em outro estado, apresento o profissional local adequado e alinho o contexto da sua compra.',
  },
  {
    number: '04',
    title: 'Nós seguimos juntos',
    description:
      'O profissional local conduz o mercado e a transação naquela região, enquanto eu continuo conectada a você e à equipe.',
  },
]

const faqs = [
  {
    question: 'Você pode me ajudar a comprar em qualquer estado?',
    answer:
      'Sim. Sua compra pode começar comigo em português em qualquer estado dos Estados Unidos. No Alabama, eu trabalho diretamente com você. Em outros estados, conecto e colaboro com um profissional da região e continuo envolvida durante o processo.',
  },
  {
    question: 'Você apenas envia o contato de outro corretor?',
    answer:
      'Não. Primeiro eu entendo o que você precisa. Depois faço uma apresentação pessoal, compartilho o contexto da sua busca e ajudo a alinhar a relação com o profissional local.',
  },
  {
    question: 'E se eu ainda não souber em qual estado comprar?',
    answer:
      'Podemos começar pelos seus objetivos: trabalho, família, clima, custo de vida, estilo de imóvel, orçamento e prazo. A partir daí, organizamos os próximos passos e as conexões necessárias.',
  },
  {
    question: 'Posso falar tudo em português?',
    answer:
      'Sim. A conversa inicial e o acompanhamento comigo podem acontecer em português.',
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
  const [showMobileCta, setShowMobileCta] = useState(false)

  useEffect(() => {
    function updateMobileCta() {
      setShowMobileCta(window.scrollY > 520)
    }

    updateMobileCta()
    window.addEventListener('scroll', updateMobileCta, { passive: true })
    return () => window.removeEventListener('scroll', updateMobileCta)
  }, [])

  return (
    <>
      <S.SkipLink href="#conteudo">Ir para o conteúdo</S.SkipLink>

      <main id="conteudo">
        <S.Hero css={{ backgroundImage: heroBackground }}>
          <S.Container>
            <S.HeroGrid>
              <S.HeroContent>
                <S.Eyebrow>Atendimento em português · Em todos os estados</S.Eyebrow>
                <S.HeroTitle>
                  Você escolhe o estado. <em>Eu ajudo você a comprar.</em>
                </S.HeroTitle>
                <S.HeroLede>
                  Atendimento pessoal em português para comprar imóveis em qualquer lugar
                  dos Estados Unidos. No Alabama, trabalho diretamente com você. Nos
                  outros estados, conecto e colaboro com um corretor local e continuo ao
                  seu lado durante o processo.
                </S.HeroLede>

                <S.BuyerPrompt href="#contato">
                  <S.PromptIcon aria-hidden="true">⌖</S.PromptIcon>
                  <S.PromptText>
                    <small>Comece por aqui</small>
                    <strong>Onde você quer comprar?</strong>
                  </S.PromptText>
                  <S.PromptButton>Contar à Becca</S.PromptButton>
                </S.BuyerPrompt>

                <S.RouteLinks aria-label="Escolha seu ponto de partida">
                  <a href="#contato">Alabama</a>
                  <a href="#contato">Outro estado</a>
                  <a href="#contato">Ainda estou escolhendo</a>
                  <a href="tel:+12563189066">Ligar em português</a>
                </S.RouteLinks>

                <S.ProofList aria-label="Diferenciais">
                  <span>Português fluente</span>
                  <span>Experiência local no Alabama</span>
                  <span>Conexões em todo o país</span>
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
                <strong>Uma Becca</strong>
                <span>Continuidade pessoal</span>
              </S.TrustItem>
            </S.TrustGrid>
          </S.Container>
        </S.TrustStrip>

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

        <S.Section tone="blush" id="como-funciona">
          <S.Container>
            <S.Centered>
              <S.SectionTag>O diferencial</S.SectionTag>
              <S.SectionHeading>
                Não é só uma indicação. É uma compra coordenada.
              </S.SectionHeading>
              <S.SectionCopy>
                Uma relação pessoal comigo, somada à experiência de um profissional que
                conhece o mercado onde você quer comprar.
              </S.SectionCopy>
            </S.Centered>

            <S.CardGrid>
              {collaborationCards.map(card => (
                <S.FeatureCard key={card.number} data-number={card.number}>
                  <S.IconCircle aria-hidden="true">{card.icon}</S.IconCircle>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </S.FeatureCard>
              ))}
            </S.CardGrid>
          </S.Container>
        </S.Section>

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
                <h3>Eu monto sua conexão local.</h3>
                <p>
                  Entendo seu objetivo, encontro o corretor certo naquela região, faço uma
                  apresentação pessoal e trabalho com ele ou ela para dar continuidade à
                  busca.
                </p>
                <S.TextLink light href="#contato">
                  Quero comprar em outro estado →
                </S.TextLink>
              </S.PathCard>
            </S.PathsGrid>

            <S.ProcessHeader>
              <S.SectionTag>Passo a passo</S.SectionTag>
              <S.SectionHeading id="process-title">
                Da primeira conversa à equipe certa.
              </S.SectionHeading>
            </S.ProcessHeader>

            <S.ProcessList>
              {processSteps.map(step => (
                <S.ProcessRow key={step.number}>
                  <S.ProcessNumber>{step.number}</S.ProcessNumber>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </S.ProcessRow>
              ))}
            </S.ProcessList>
          </S.Container>
        </S.Section>

        <S.Section tone="blush">
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
            <h2>Onde você quer comprar?</h2>
            <p>
              Alabama, Flórida, Texas, Tennessee, Califórnia ou qualquer outro estado.
              Comece me contando seus planos em português. Eu ajudo você a construir o
              caminho e a equipe certa para chegar lá.
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
          <Contact />
        </S.ContactAnchor>
      </main>

      <S.MobileCta visible={showMobileCta} href="#contato">
        Conte onde você quer comprar →
      </S.MobileCta>
    </>
  )
}
