import Head from 'next/head'
import Link from 'next/link'
import type { StateGuide as StateGuideData } from '@/resources/relocation/state-guides'
import * as S from './state-guide.styles'

type StateGuideProps = {
  guide: StateGuideData
  relatedGuides: StateGuideData[]
}

const processSteps = [
  {
    title: 'Organize seus critérios',
    text: 'Defina rotina, prazo, orçamento e o que precisa confirmar antes de escolher uma região.',
  },
  {
    title: 'Compare regiões',
    text: 'Use as mesmas perguntas em cada cidade para comparar rotina, deslocamento e custo com clareza.',
  },
  {
    title: 'Monte a conexão local',
    text: 'Becca entende seu plano em português e conecta você a um profissional da região quando necessário.',
  },
  {
    title: 'Planeje visitas e decisão',
    text: 'Combine vídeos, viagem, inspeção, documentos e prazos antes de fazer uma oferta.',
  },
]

function getDestinationPhrase(locationPhrase: string) {
  if (locationPhrase.startsWith('na ')) {
    return `para a ${locationPhrase.slice(3)}`
  }

  if (locationPhrase.startsWith('no ')) {
    return `para o ${locationPhrase.slice(3)}`
  }

  if (locationPhrase.startsWith('nas ')) {
    return `para as ${locationPhrase.slice(4)}`
  }

  if (locationPhrase.startsWith('nos ')) {
    return `para os ${locationPhrase.slice(4)}`
  }

  if (locationPhrase.startsWith('em ')) {
    return `para ${locationPhrase.slice(3)}`
  }

  return `para ${locationPhrase}`
}

function getServiceCopy(guide: StateGuideData) {
  if (guide.serviceMode === 'direct') {
    return {
      label: 'Atendimento direto com Becca',
      title: 'Experiência local no Alabama',
      text: 'No Alabama, Becca trabalha diretamente com você durante a busca e a compra.',
    }
  }

  return {
    label: 'Conexão local selecionada',
    title: `Seu plano ${getDestinationPhrase(guide.locationPhrase)} começa com Becca`,
    text: `Becca organiza sua mudança em português, apresenta você a um profissional local ${guide.locationPhrase} e continua conectada ao processo.`,
  }
}

export function StateGuide({ guide, relatedGuides }: StateGuideProps) {
  const service = getServiceCopy(guide)
  const canonicalUrl = `https://beccatravis.com/agenciamento/${guide.slug}`
  const displayName =
    guide.name === guide.englishName ? guide.name : `${guide.name} (${guide.englishName})`
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#page`,
      url: canonicalUrl,
      name: `Comprar casa ${guide.locationPhrase} em português`,
      description: guide.summary,
      inLanguage: 'pt-BR',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://beccatravis.com/#website',
        name: 'Becca Travis Real Estate',
        url: 'https://beccatravis.com',
      },
      mainEntity: {
        '@id': `${canonicalUrl}#service`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Atendimento em português',
          item: 'https://beccatravis.com/agenciamento',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: guide.name,
          item: canonicalUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name:
        guide.serviceMode === 'direct'
          ? `Atendimento imobiliário em português ${guide.locationPhrase}`
          : `Planejamento de compra e conexão local ${guide.locationPhrase}`,
      description: service.text,
      serviceType:
        guide.serviceMode === 'direct'
          ? 'Atendimento imobiliário em português'
          : 'Planejamento de compra e conexão com profissional imobiliário local em português',
      areaServed: {
        '@type': 'State',
        name: guide.englishName,
      },
      provider: {
        '@type': 'Person',
        name: 'Becca Travis',
        url: 'https://beccatravis.com/why-becca',
      },
    },
  ]

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <S.SkipLink href="#conteudo">Ir para o conteúdo</S.SkipLink>

      <S.Page id="conteudo">
        <S.Hero>
          <S.Container>
            <S.Breadcrumbs aria-label="Navegação estrutural">
              <Link href="/agenciamento">Atendimento em português</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{guide.name}</span>
            </S.Breadcrumbs>

            <S.HeroGrid>
              <div>
                <S.Eyebrow>
                  Guia de mudança · {guide.abbreviation} · {displayName}
                </S.Eyebrow>
                <S.Title>
                  Comprar casa {guide.locationPhrase} <em>com ajuda em português.</em>
                </S.Title>
                <S.HeroCopy>{guide.summary}</S.HeroCopy>
                <S.Actions>
                  <S.PrimaryAction href={`/agenciamento?estado=${guide.slug}#planejador`}>
                    Montar meu plano de mudança
                  </S.PrimaryAction>
                  <S.SecondaryAction href="#regioes">Comparar regiões</S.SecondaryAction>
                </S.Actions>
              </div>

              <S.StateCard>
                <S.StateCode aria-hidden="true">{guide.abbreviation}</S.StateCode>
                <S.ServiceLabel>{service.label}</S.ServiceLabel>
                <S.StateCardTitle>{service.title}</S.StateCardTitle>
                <S.StateCardCopy>{service.text}</S.StateCardCopy>
              </S.StateCard>
            </S.HeroGrid>
          </S.Container>
        </S.Hero>

        <S.AnchorNav aria-label={`Conteúdo do guia de ${guide.name}`}>
          <S.Container>
            <a href="#visao-geral">Visão geral</a>
            <a href="#regioes">Regiões</a>
            <a href="#planejamento">Planejamento</a>
            <a href="#perguntas">Perguntas</a>
          </S.Container>
        </S.AnchorNav>

        <S.Section id="visao-geral" tone="white">
          <S.Container>
            <S.IntroGrid>
              <div>
                <S.Tag>Antes de procurar imóveis</S.Tag>
                <S.Heading>Escolha o lugar pela vida que você quer construir.</S.Heading>
              </div>
              <S.LeadCopy>
                <p>{guide.overview}</p>
                <p>
                  Comece comparando rotina, deslocamento, serviços, tipo de imóvel e custo
                  completo. Depois transforme essa comparação em uma busca com um
                  profissional que conheça o mercado local.
                </p>
              </S.LeadCopy>
            </S.IntroGrid>
          </S.Container>
        </S.Section>

        <S.Section id="regioes" tone="blush">
          <S.Container>
            <S.SectionHeader>
              <S.Tag>Mapa inicial de destino</S.Tag>
              <S.Heading>Regiões para comparar {guide.locationPhrase}.</S.Heading>
              <p>
                Estas referências ajudam a estruturar a pesquisa. A escolha final depende
                da sua rotina, do imóvel e das condições locais confirmadas durante a
                compra.
              </p>
            </S.SectionHeader>

            <S.RegionGrid>
              {guide.regions.map((region, index) => (
                <S.RegionCard key={region.name}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{region.name}</h3>
                  <p>{region.description}</p>
                  <S.RegionAction
                    href={`/agenciamento?estado=${guide.slug}&regiao=${encodeURIComponent(
                      region.name
                    )}#planejador`}
                  >
                    Usar esta região no meu plano →
                  </S.RegionAction>
                </S.RegionCard>
              ))}
            </S.RegionGrid>

            <S.InlineCta>
              <div>
                <strong>Ainda não sabe qual região combina com sua rotina?</strong>
                <span>
                  Leve este estado ao planejador e transforme suas prioridades em
                  critérios para comparar áreas.
                </span>
              </div>
              <S.InlineCtaAction href={`/agenciamento?estado=${guide.slug}#planejador`}>
                Personalizar meu plano
              </S.InlineCtaAction>
            </S.InlineCta>
          </S.Container>
        </S.Section>

        <S.Section id="planejamento" tone="white">
          <S.Container>
            <S.SectionHeader>
              <S.Tag>O que verificar</S.Tag>
              <S.Heading>Três conversas para ter antes de fazer uma oferta.</S.Heading>
              <p>
                Os valores, regras e condições exatas devem ser confirmados com os
                profissionais responsáveis pela transação e pelo imóvel.
              </p>
            </S.SectionHeader>

            <S.TopicGrid>
              {guide.topics.map((topic, index) => (
                <S.TopicCard key={topic.title}>
                  <strong>{index + 1}</strong>
                  <h3>{topic.title}</h3>
                  <p>{topic.text}</p>
                </S.TopicCard>
              ))}
            </S.TopicGrid>

            <div style={{ marginTop: 24 }}>
              <S.VisitPlan>
                <strong aria-hidden="true">⌖</strong>
                <div>
                  <h3>Use sua viagem para tomar decisões, não apenas para ver casas.</h3>
                  <p>{guide.visitPlan}</p>
                </div>
              </S.VisitPlan>
            </div>
          </S.Container>
        </S.Section>

        <S.Section tone="soft">
          <S.Container>
            <S.SectionHeader>
              <S.Tag>Sem depender de uma lista de imóveis</S.Tag>
              <S.Heading>Seu plano começa antes da busca.</S.Heading>
              <p>
                A conversa inicial organiza a mudança e prepara uma apresentação útil para
                o profissional local.
              </p>
            </S.SectionHeader>

            <S.ProcessGrid>
              {processSteps.map((step, index) => (
                <S.ProcessStep key={step.title}>
                  <span>PASSO {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </S.ProcessStep>
              ))}
            </S.ProcessGrid>
          </S.Container>
        </S.Section>

        <S.Section id="perguntas" tone="white">
          <S.Container>
            <S.FaqGrid>
              <div>
                <S.Tag>Perguntas frequentes</S.Tag>
                <S.Heading>Planejando a compra {guide.locationPhrase}.</S.Heading>
              </div>
              <div>
                <S.Details open>
                  <summary>
                    Becca trabalha diretamente comigo {guide.locationPhrase}?
                  </summary>
                  <p>{service.text}</p>
                </S.Details>
                <S.Details>
                  <summary>
                    Preciso escolher a cidade antes de conversar com Becca?
                  </summary>
                  <p>
                    Não. Você pode começar comparando opções como{' '}
                    {guide.regions.map(region => region.name).join(', ')}. A primeira
                    conversa transforma sua rotina e seu orçamento em critérios para
                    reduzir as opções.
                  </p>
                </S.Details>
                <S.Details>
                  <summary>Posso organizar a compra mesmo morando longe?</summary>
                  <p>
                    Muitas etapas podem ser planejadas à distância. A equipe local deve
                    confirmar o que pode ser feito por vídeo, assinatura eletrônica ou
                    fechamento remoto em sua situação específica.
                  </p>
                </S.Details>
                <S.Details>
                  <summary>O que devo comparar além do preço da casa?</summary>
                  <p>
                    Compare o custo mensal e os gastos da mudança, incluindo impostos,
                    seguro, associação quando houver, viagem, transporte, inspeção e
                    possível moradia temporária. Confirme os valores antes de decidir.
                  </p>
                </S.Details>
              </div>
            </S.FaqGrid>
          </S.Container>
        </S.Section>

        <S.Section tone="blush">
          <S.Container>
            <S.SectionHeader>
              <S.Tag>Continue comparando</S.Tag>
              <S.Heading>Outros estados para colocar lado a lado.</S.Heading>
            </S.SectionHeader>
            <S.RelatedGrid>
              {relatedGuides.map(relatedGuide => (
                <S.RelatedLink
                  key={relatedGuide.slug}
                  href={`/agenciamento/${relatedGuide.slug}`}
                >
                  Comprar casa {relatedGuide.locationPhrase}
                  <span aria-hidden="true">→</span>
                </S.RelatedLink>
              ))}
            </S.RelatedGrid>
          </S.Container>
        </S.Section>

        <S.FinalCta>
          <S.Container>
            <h2>
              Transforme sua mudança {getDestinationPhrase(guide.locationPhrase)} em um
              plano claro.
            </h2>
            <p>
              Conte de onde você está vindo, o que precisa encontrar e quando pretende
              chegar. Becca organiza o ponto de partida em português.
            </p>
            <S.Actions>
              <S.PrimaryAction href={`/agenciamento?estado=${guide.slug}#contato`}>
                Contar meus planos à Becca
              </S.PrimaryAction>
              <S.SecondaryAction href="tel:+12563189066">
                Ligar para (256) 318-9066
              </S.SecondaryAction>
            </S.Actions>
            <S.Disclaimer>
              Este guia oferece conteúdo geral de planejamento. Ele não substitui
              orientação jurídica, tributária, financeira, de seguro ou a verificação das
              condições de um imóvel e das regras locais.
            </S.Disclaimer>
          </S.Container>
        </S.FinalCta>
      </S.Page>
    </>
  )
}
