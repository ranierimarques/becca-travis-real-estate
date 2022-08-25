import { Box } from "@common"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"
import { useState } from "react"
import * as S from "./slider.styles"
import { ChevronLeftSvg, ChevronRightSvg } from "./svgs"

interface SliderProps {
  data: {
    Media: string[]
  }
}

export function Slider({ data }: SliderProps) {
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
        {data.Media.map((media: any) => {
          return (
            <Box
              className="keen-slider__slide"
              key={media.Order}
              css={{
                w: "fit-content",
                br: 8,
                lineHeight: 0,
                overflow: "hidden",
              }}
            >
              <Image
                src={media.MediaURL}
                alt="house image"
                width={704}
                height={400}
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
              <ChevronLeftSvg />
            </S.Skip>
            <S.SkipOverlay direction="left" onClick={handlePreviousPhoto} />

            <S.Skip
              direction="right"
              onClick={handleNextPhoto}
              disabled={isLastPhoto}
            >
              <ChevronRightSvg />
            </S.Skip>
            <S.SkipOverlay direction="right" onClick={handleNextPhoto} />
            <S.Index>
              {currentSlide + 1} / {data.Media.length}
            </S.Index>
          </>
        )}
      </div>
    </S.NavigationWrapper>
  )
}
