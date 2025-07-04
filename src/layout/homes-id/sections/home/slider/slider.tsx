import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Box, Image } from '@/common'
import { FormattedHouse } from '@/services/house-listings/types'
import * as Svg from '../svgs'
import * as S from './slider.styles'

interface ListingMedia {
  media: FormattedHouse['listing']['media'] | string
}

export function Slider({ media }: ListingMedia) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [lazyImages, setLazyImages] = useState<boolean[]>([true, true, true, true])
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      setLazyImages(oldLazyImages => {
        const newLazyImages = [...oldLazyImages]
        newLazyImages[slider.track.details.rel + 3] = true
        return newLazyImages
      })
    },
    created() {
      setLoaded(true)
    },
    rubberband: false,
  })

  const isFirstPhoto = currentSlide === 0
  const isLastPhoto =
    currentSlide === (instanceRef.current?.track.details.slides.length || 1) - 1

  function handlePreviousPhoto() {
    instanceRef.current?.prev()
  }

  function handleNextPhoto() {
    instanceRef.current?.next()
  }

  return (
    <S.NavigationWrapper>
      <div ref={sliderRef} className="keen-slider">
        {media ? (
          <Box className="keen-slider__slide" css={{ minWidth: '100%' }}>
            <Box
              css={{
                h: 395,
                overflow: 'hidden',
                '@bp5': { w: '100%' },
                '@bp2': { h: 211 },
                '@bp1': { h: 180 },
              }}
            >
              <Image
                src={media as string}
                alt="house image"
                priority={true}
                style={{ objectFit: 'cover' }}
                loading="eager"
                fill
              />
            </Box>
          </Box>
        ) : (
          <Box
            className="keen-slider__slide"
            css={{ w: 704, h: 395, overflow: 'hidden' }}
          >
            <Svg.NoHouse />
          </Box>
        )}
      </div>
      {loaded && instanceRef.current && (
        <>
          <S.Skip direction="left" onClick={handlePreviousPhoto} disabled={isFirstPhoto}>
            <Svg.ChevronLeft />
          </S.Skip>
          <S.SkipOverlay direction="left" onClick={handlePreviousPhoto} />

          <S.Skip direction="right" onClick={handleNextPhoto} disabled={isLastPhoto}>
            <Svg.ChevronRight />
          </S.Skip>
          <S.SkipOverlay direction="right" onClick={handleNextPhoto} />

          <S.Index>
            {currentSlide + 1} {media && `/ 1`}
          </S.Index>
        </>
      )}
    </S.NavigationWrapper>
  )
}
