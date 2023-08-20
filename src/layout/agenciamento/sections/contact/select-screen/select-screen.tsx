import { Box, Flex } from '@/common'
import * as Svg from '../svgs'
import * as S from './select-screen.styles'

interface SelectScreenProps {
  setForm: (value: 'select-screen' | 'selling' | 'buying') => void
}

export function SelectScreen({ setForm }: SelectScreenProps) {
  return (
    <S.Container>
      <Box
        css={{
          position: 'absolute',
          b: 0,
          zIndex: -1,
        }}
      >
        <Svg.Circles />
      </Box>
      <Flex direction="column" align="center">
        <S.Title>Deseja comprar ou vender?</S.Title>
        <S.Paragraph>
          Escolha a opção abaixo de acordo com os seus interesses e preencha o formulário
          com as informações
        </S.Paragraph>

        <Flex align="center" css={{ gap: 24 }}>
          <S.Button onClick={() => setForm('selling')}>
            <S.SvgBackground>
              <Svg.Sell />
            </S.SvgBackground>
            <span>Quero vender</span>
          </S.Button>
          <S.Button onClick={() => setForm('buying')}>
            <S.SvgBackground>
              <Svg.Buy />
            </S.SvgBackground>
            <span>Quero comprar</span>
          </S.Button>
        </Flex>
      </Flex>
    </S.Container>
  )
}
