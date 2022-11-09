import { useState } from 'react'
import * as S from './image.styles'

type ImageProps = React.ComponentProps<typeof S.Image> & {
  skeletonBackground?: string
}

export function Image({ skeletonBackground, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <S.Container
      loading={isLoading}
      css={{ $$background: skeletonBackground || 'rgba($colors$grayW9Rgb)' }}
    >
      <S.Image
        {...props}
        loaded={!isLoading}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </S.Container>
  )
}
