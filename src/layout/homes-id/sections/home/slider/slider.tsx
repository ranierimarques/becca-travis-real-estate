import { Box, Image } from '@/common'
import { FormattedHouse } from '@/services/house-listings/types'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './slider.styles'

interface ListingMedia {
  media: FormattedHouse['listing']['media']
}

export function Slider({ media }: ListingMedia) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
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
          media.map((url, index) => (
            <Box
              key={index}
              className="keen-slider__slide"
              css={{ w: 704, h: 395, lineHeight: 0, overflow: 'hidden' }}
            >
              <Image
                src={url}
                alt="house image"
                priority={index === 0}
                style={{ objectFit: 'cover' }}
                fill
              />
            </Box>
          ))
        ) : (
          <Box
            className="keen-slider__slide"
            css={{ w: 704, h: 395, lineHeight: 0, overflow: 'hidden' }}
          >
            <Svg.NoHouse />
          </Box>
        )}
        {loaded && instanceRef.current && (
          <>
            <S.Skip
              direction="left"
              onClick={handlePreviousPhoto}
              disabled={isFirstPhoto}
            >
              <Svg.ChevronLeft />
            </S.Skip>
            <S.SkipOverlay direction="left" onClick={handlePreviousPhoto} />

            <S.Skip direction="right" onClick={handleNextPhoto} disabled={isLastPhoto}>
              <Svg.ChevronRight />
            </S.Skip>
            <S.SkipOverlay direction="right" onClick={handleNextPhoto} />

            <S.Index>
              {currentSlide + 1} {media && `/ ${media.length}`}
            </S.Index>
          </>
        )}
      </div>
    </S.NavigationWrapper>
  )
}
