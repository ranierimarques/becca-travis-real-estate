import { Box } from '@common'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'
import * as Svg from '../svgs'
import * as S from './slider.styles'

interface ListingMedia {
  media: string[]
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
      <div className="keen-slider" ref={sliderRef}>
        {media.map((url, index) => {
          // Instant load first 3 images
          // Load (next + 3) image in array when navigate to next image in slider
          const loadPreviousAndCurrentImages = currentSlide + 2 >= index

          return (
            <Box
              className="keen-slider__slide"
              key={index}
              css={{ w: 'fit-content', lineHeight: 0, overflow: 'hidden' }}
            >
              <Image
                src={url}
                alt="house image"
                width={704}
                height={395}
                priority={loadPreviousAndCurrentImages}
              />
            </Box>
          )
        })}
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
              {currentSlide + 1} / {media.length}
            </S.Index>
          </>
        )}
      </div>
    </S.NavigationWrapper>
  )
}