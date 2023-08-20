import { Box, Button, Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './hero.styles'
import * as Svg from './svgs'

export function Hero() {
  function scrollTo() {
    document.querySelector('#experience')?.scrollIntoView()
  }

  return (
    <Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Container>
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp5': 'center',
          }}
        >
          <Hat css={{ marginBottom: 8 }}>Agenciamento</Hat>

          <S.Title>Becca Travis, sua parceira na compra de imóveis em Alabama</S.Title>
          <S.Paragraph>
            Se você está procurando comprar ou vender um imóvel em Huntsville, pode
            confiar em Becca Travis como sua parceira confiável.
          </S.Paragraph>

          <Flex
            css={{
              gap: 24,
              '@bp5': {
                width: 288,
              },
              '@bp4': {
                width: 'initial',
              },
            }}
            direction={{
              '@initial': 'row',
              '@bp5': 'column',
            }}
            align="center"
          >
            <Button
              size={{
                '@initial': '2',
                '@bp4': '3',
              }}
              href="/contact-us"
              css={{
                '@bp5': {
                  width: '100%',
                  textAlign: 'center',
                },
                '@bp1': {
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '14px',
                  lineHeight: '21px',
                  fontWeight: '400',
                },
              }}
            >
              Entrar em contato
            </Button>
            <S.KeepExploring onClick={scrollTo}>
              <Svg.CircleArrow /> Continuar explorando
            </S.KeepExploring>
          </Flex>
        </Flex>

        <Box
          css={{
            width: '100%',
            maxWidth: 520,

            '@bp5': {
              position: 'relative',
            },
          }}
        >
          <Box
            css={{
              '@bp5': {
                background: '$white',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '100%',
                width: '100vw',
              },
            }}
          />
          <Box
            css={{
              '@bp5': {
                background: 'rgba($colors$tangerine5Rgb, 0.3)',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '40%',
                width: '100vw',
              },
            }}
          />
          <Box
            css={{
              w: 520,
              h: '100%',
              minHeight: 363,
              bg: '$grayW9',

              '@bp5': {
                w: '100%',
              },
            }}
          />
        </Box>
      </S.Container>
    </Section>
  )
}
