import { Box, Button } from '@common'
import { Hat } from '@shared'
import Image from 'next/image'
import * as S from './hero.styles'
import { background, becca } from './images'
import { ArrowDownSvg, CirclesSvg } from './svgs'

export function Hero() {
  return (
    <S.Section>
      <S.Container>
        <div>
          <Hat css={{ marginBottom: 8 }}>Why Becca?</Hat>
          <S.Title>With Becca Travis, you can buy or sell a home easily.</S.Title>
          <S.Paragraph>
            From finding you your dream home to negotiating on behalf of clients, we have
            every aspect covered and more!
          </S.Paragraph>
          <Box css={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Button
              css={{
                padding: '12px 24px',
                borderRadius: '6px',

                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '22px',
                color: '$white',
              }}
            >
              Contact Becca Travis
            </Button>
            <Button
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8,

                padding: 0,

                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '20px',
                color: 'rgba($colors$magenta6Rgb, 0.5)',

                backgroundColor: 'transparent',
              }}
            >
              <ArrowDownSvg /> Keep exploring
            </Button>
          </Box>
        </div>

        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            position: 'relative',
            width: '520px',
            height: '100%',
          }}
        >
          <Image src={becca} alt="Becca Travis" quality={100} />
          <Box
            css={{
              position: 'absolute',
              bottom: '-4px',
              zIndex: '-2',
              borderRadius: '8px',
            }}
          >
            <Image src={background} alt="background" quality={100} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              top: 13,
              zIndex: '0',
            }}
          >
            <CirclesSvg />
          </Box>
        </Box>
      </S.Container>
    </S.Section>
  )
}
