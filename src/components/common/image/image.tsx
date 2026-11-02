import { useState } from 'react'
import * as S from './image.styles'

type ImageProps = React.ComponentProps<typeof S.Image> & {
  skeletonBackground?: string
}

export function Image({ skeletonBackground, ...props }: ImageProps) {
  const sourceKey =
    typeof props.src === 'string'
      ? props.src
      : 'src' in props.src
      ? props.src.src
      : props.src.default.src

  return (
    <ImageWithState key={sourceKey} skeletonBackground={skeletonBackground} {...props} />
  )
}

function ImageWithState({
  skeletonBackground,
  onLoad,
  onLoadingComplete,
  onError,
  ...props
}: ImageProps) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading')

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setState('loaded')
    onLoad?.(event)
    onLoadingComplete?.(event.currentTarget)
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setState('error')
    onError?.(event)
  }

  return (
    <S.Container
      loading={state === 'loading'}
      css={{ $$background: skeletonBackground || 'rgba($colors$grayW9Rgb)' }}
    >
      {state === 'error' && (
        <S.Fallback role="img" aria-label={props.alt || 'Image unavailable'}>
          <span>{props.alt || 'Image unavailable'}</span>
        </S.Fallback>
      )}
      <S.Image
        draggable="false"
        {...props}
        aria-hidden={state === 'error' || undefined}
        loaded={state === 'loaded'}
        onLoad={handleLoad}
        onError={handleError}
      />
    </S.Container>
  )
}
