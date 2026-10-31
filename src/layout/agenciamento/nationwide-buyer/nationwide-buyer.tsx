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
    title: 'Conexão local, com você no controle',
    description:
      'Com sua autorização, apresento você a um profissional imobiliário licenciado no estado escolhido. A disponibilidade de atendimento em português varia por região.',
  },
  {
    number: '03',
    icon: '∞',
    title: 'Apoio que continua',
    description:
      'Sigo disponível em português para apoiar seu planejamento de mudança. O profissional licenciado no destino conduz os serviços imobiliários locais.',
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
    title: 'Conexão com um profissional local',
    description:
      'No Alabama, posso atuar como sua corretora local. Em outro estado, com sua autorização, faço a apresentação a um profissional licenciado naquele mercado.',
  },
  {
    number: '04',
    title: 'Você tem clareza em cada etapa',
    description:
      'O profissional local conduz visitas, ofertas e a transação. Eu continuo disponível para apoiar sua mudança e comunicação em português.',
  },
]

const faqs = [
  {
    question: 'Você pode me ajudar a comprar em qualquer estado?',
    answer:
      'Você pode começar sua busca comigo em português, de qualquer lugar dos Estados Unidos. No Alabama, presto atendimento imobiliário local. Fora do Alabama, ajudo com o planejamento e, com sua autorização, conecto você a um profissional licenciado no estado de destino. Esse profissional conduz os serviços imobiliários locais. A disponibilidade de atendimento em português varia por região.',
  },
  {
    question: 'Você apenas envia o contato de outro corretor?',
    answer:
      'Eu escuto seus planos, ajudo a organizar prioridades da mudança e, com sua autorização, faço uma apresentação pessoal ao profissional local. O corretor licenciado conduz visitas, ofertas, negociação e a transação no mercado dele. Meu apoio contínuo é voltado ao planejamento da mudança e à comunicação em português.',
  },
  {
    question: 'E se eu ainda não souber em qual estado comprar?',
    answer:
      'Podemos começar pelos seus objetivos: trabalho, família, clima, custo de vida, estilo de imóvel, orçamento e prazo. A partir daí, organizamos os próximos passos e as conexões necessárias.',
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

      <main id="conteudo" lang="pt-BR">
        <S.Hero css={{ backgroundImage: heroBackground }}>
          <S.Container>
            <S.HeroGrid>
              <S.HeroContent>
                <S.Eyebrow>Atendimento em português brasileiro</S.Eyebrow>
                <S.HeroTitle>
                  Sua compra nos EUA começa <em>em português.</em>
                </S.HeroTitle>
                <S.HeroLede>
                  Converse comigo em português brasileiro sobre a compra de um imóvel nos
                  Estados Unidos. No Alabama, posso ajudar diretamente como corretora local.
                  Em outro estado, ajudo a planejar a mudança e, com sua autorização, apresento
                  você a um profissional licenciado no destino. A disponibilidade de atendimento
                  em português varia por região.
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
                  <span>Português brasileiro</span>
                  <span>Atuação local no Alabama</span>
                  <span>Conexões conforme disponibilidade</span>
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
                <strong>Apoio pessoal</strong>
                <span>Planejamento da mudança</span>
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
                  Você começa a conversa comigo em português brasileiro. Eu entendo o que sua
                  família procura, onde quer chegar, seu orçamento e o que precisa para se
                  sentir segura na decisão.
                </p>
                <p>
                  No Alabama, posso atuar como sua corretora local. Em outro estado, ajudo a
                  planejar a mudança e, com sua autorização, faço uma apresentação pessoal a
                  um profissional licenciado na região. Esse profissional conduz visitas,
                  ofertas, negociação e os serviços imobiliários locais. Eu continuo à disposição
                  para apoiar sua mudança e a comunicação em português.
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
              <S.SectionHeading>Apoio certo para cada destino.</S.SectionHeading>
              <S.SectionCopy>
                No Alabama, posso atuar como sua corretora local. Em outros estados, ajudo
                no planejamento e faço a conexão com um profissional licenciado no destino.
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
                  Ajudo a organizar a busca e, com sua autorização, apresento você a um
                  corretor licenciado no destino. Esse profissional conduz os serviços
                  imobiliários e a transação no mercado local. Posso continuar ao seu lado
                  no planejamento da mudança, em português.
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
              Alabama ou outro estado: começamos com uma conversa em português brasileiro.
              No Alabama, posso ajudar diretamente com sua compra. Em outros estados, ajudo
              a planejar a mudança e, com sua autorização, faço a conexão com um profissional
              licenciado no destino, conforme a disponibilidade da região.
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
