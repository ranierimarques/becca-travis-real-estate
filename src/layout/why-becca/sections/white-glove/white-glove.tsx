import { Box, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import { StaticImageData } from 'next/image'
import { useState } from 'react'
import { buyer, experience, negotiation } from './images'
import { HandshakeSvg, HomeSvg, LikeSvg } from './svgs'
import * as S from './white-glove.styles'

const images: Record<string, StaticImageData> = {
  buyer,
  experience,
  negotiation,
}

export function WhiteGlove() {
  const [content, setContent] = useState('experience')

  return (
    <Section hasMaxWidth css={{ pt: 120, pb: 120, '@bp2': { pt: 80, pb: 80 } }}>
      <Flex
        direction={{
          '@initial': 'row',
          '@bp4': 'column',
        }}
        align={{
          '@initial': 'start',
          '@bp4': 'center',
        }}
        justify="between"
      >
        <Flex
          direction="column"
          align="start"
          css={{ w: '100%', h: '100%', gap: 48, '@bp4': { w: 'auto' } }}
        >
          <Flex
            direction="column"
            align={{
              '@initial': 'start',
              '@bp4': 'center',
            }}
          >
            <Hat variant="2">Meet Huntsville</Hat>
            <S.Title>White glove moving</S.Title>
            <S.Paragraph>
              There are many reasons to use a buyers agent when purchasing a home. Here
              are three key reasons:
            </S.Paragraph>
          </Flex>

          <S.Accordion type="single" defaultValue="item-1">
            <S.Item value="item-1">
              <S.Header>
                <S.Trigger onClick={() => setContent('experience')}>
                  <S.ContentTriggerWrapper>
                    <LikeSvg /> Experience
                  </S.ContentTriggerWrapper>
                  <S.Chevron />
                </S.Trigger>
              </S.Header>
              <S.Content>
                <S.ContentText>
                  First, they have the experience and expertise to help you navigate
                  through the buying process.
                </S.ContentText>
                <Box
                  css={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                    overflow: 'hidden',

                    display: 'none',

                    '@bp4': {
                      display: 'block',
                    },
                  }}
                >
                  <Image
                    src={experience}
                    alt="accordion topic illustration"
                    quality={100}
                  />
                </Box>
              </S.Content>
            </S.Item>

            <S.Item value="item-2">
              <S.Header>
                <S.Trigger onClick={() => setContent('negotiation')}>
                  <S.ContentTriggerWrapper>
                    <HandshakeSvg />
                    Negotiation
                  </S.ContentTriggerWrapper>
                  <S.Chevron />
                </S.Trigger>
              </S.Header>
              <S.Content>
                <S.ContentText>
                  Second, I have negotiation skills that will guarantee you great
                  conditions for buying your property.
                </S.ContentText>
                <Box
                  css={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                    overflow: 'hidden',

                    display: 'none',

                    '@bp4': {
                      display: 'block',
                    },
                  }}
                >
                  <Image
                    src={negotiation}
                    alt="accordion topic illustration"
                    quality={100}
                  />
                </Box>
              </S.Content>
            </S.Item>

            <S.Item value="item-3">
              <S.Header>
                <S.Trigger onClick={() => setContent('buyer')}>
                  <S.ContentTriggerWrapper>
                    <HomeSvg />
                    Buyer Resources
                  </S.ContentTriggerWrapper>
                  <S.Chevron />
                </S.Trigger>
              </S.Header>
              <S.Content>
                <S.ContentText>
                  Third, I have buying smarts when it comes to finding good properties for
                  your family.
                </S.ContentText>
                <Box
                  css={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                    overflow: 'hidden',

                    display: 'none',

                    '@bp4': {
                      display: 'block',
                    },
                  }}
                >
                  <Image src={buyer} alt="accordion topic illustration" quality={100} />
                </Box>
              </S.Content>
            </S.Item>
          </S.Accordion>
        </Flex>

        <Box
          css={{
            width: '100%',
            minWidth: 366,
            maxWidth: 520,
            height: '100%',
            borderRadius: 8,
            overflow: 'hidden',

            alignSelf: 'flex-end',

            '@bp4': {
              display: 'none',
            },
          }}
        >
          <Image
            src={images[content]}
            alt="accordion topics illustration"
            quality={100}
          />
        </Box>
      </Flex>
    </Section>
  )
}
