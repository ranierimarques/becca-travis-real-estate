import { Box, Button } from '@common'
import Image from 'next/image'
import { becca } from './images'
import * as S from './last-call.styles'
import {
  CirclesSvg,
  HeartSvg,
  HouseSvg,
  LikeSvg,
  MedalSvg,
  PinSvg,
  ShieldSvg,
} from './svgs'

export function LastCall() {
  return (
    <S.Section>
      <S.Container>
        <Box css={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <S.Title>Get started with Becca Travis</S.Title>
          <S.Paragraph>
            Is there a problem finding your dream home? Just contact us
          </S.Paragraph>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,

              color: '$grayW10',
              fontWeight: '400',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          >
            <Button
              href="#"
              css={{
                backgroundColor: '$white',
                color: '$magenta1',
                padding: '10px 20px',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '36px',
              }}
            >
              Schedule
            </Button>
            or
            <Button
              href="#"
              css={{
                color: '$white',
                padding: '10px 20px',
                border: '1px solid $white',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '36px',
              }}
            >
              Call
            </Button>
          </Box>
        </Box>

        <div>
          <Box
            css={{
              position: 'absolute',
              top: '31px',
              left: '428px',

              padding: '10px',
              background: '$tangerine1',
              borderRadius: '16px',

              zIndex: 2,
            }}
          >
            <HeartSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              bottom: '183px',
              left: '387px',

              padding: '10px',
              background: '$tangerine9',
              borderRadius: '12px',

              zIndex: 2,
            }}
          >
            <ShieldSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              bottom: '86px',
              left: '498px',

              padding: '10px',
              background: '$tangerine9',
              borderRadius: '14px',

              zIndex: 2,
            }}
          >
            <MedalSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              top: '29px',
              right: '28px',

              padding: '10px',
              background: '$tangerine9',
              borderRadius: '14px',

              zIndex: 2,
            }}
          >
            <PinSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              top: '189px',
              right: '63px',

              padding: '10px',
              background: '$tangerine1',
              borderRadius: '16px',

              zIndex: 2,
            }}
          >
            <HouseSvg className={S.SvgStyles()} />
          </Box>
          <Box
            css={{
              position: 'absolute',
              bottom: '28px',
              right: '36px',

              padding: '10px',
              background: '#tangerine9',
              borderRadius: '12px',

              zIndex: 2,
            }}
          >
            <LikeSvg className={S.SvgStyles()} />
          </Box>

          <Box
            css={{
              position: 'absolute',
              bottom: '-4px',
              right: '152px',

              zIndex: 2,
            }}
          >
            <Image src={becca} alt="Becca Travis" quality="100" />
          </Box>
          <Box css={{ position: 'absolute', bottom: 0, right: 5 }}>
            <CirclesSvg className={S.SvgStyles()} />
          </Box>
        </div>
      </S.Container>
    </S.Section>
  )
}
