import { Box, Button, Flex, Image } from '@/common'
import { StaticImageData } from 'next/image'
import { useState } from 'react'
import * as Img from './images'
import * as S from './yelp.styles'

interface YelpProps {
  data: {
    id: string
    name: string
    review_count: number
    rating: number
    image_url: string
    url: string
  }[]
  communityName: string
}

type CategoriesName = 'dining' | 'active' | 'beauty' | 'nightlife'

const RESULTS_LIMIT = 6

const businessRatingImage: Record<number, StaticImageData> = {
  0: Img.rating0,
  1: Img.rating1,
  1.5: Img.rating1_5,
  2: Img.rating2,
  2.5: Img.rating2_5,
  3: Img.rating3,
  3.5: Img.rating3_5,
  4: Img.rating4,
  4.5: Img.rating4_5,
  5: Img.rating5,
}

type buttonOptionsType = { id: number; category: CategoriesName }[]

const buttonOptions: buttonOptionsType = [
  { id: 1, category: 'dining' },
  { id: 2, category: 'active' },
  { id: 3, category: 'nightlife' },
  { id: 4, category: 'beauty' },
]

export function Yelp({ data, communityName }: YelpProps) {
  const [yelpData, setYelpData] = useState(data)
  const [activeCategory, setActiveCategory] = useState<CategoriesName>('dining')
  const [activeIndex, setActiveIndex] = useState(1)

  async function handleRequestNewData(category: CategoriesName) {
    if (category === activeCategory) return

    setActiveCategory(category)
    setActiveIndex(1)
    const response = await fetch(
      `/api/yelp?category=${category}&community=${communityName}&limit=${RESULTS_LIMIT}&offset=0`
    )
    const data = await response.json()
    setYelpData(data)
  }

  async function handleRequestMoreData() {
    const offset = activeIndex * RESULTS_LIMIT
    const response = await fetch(
      `/api/yelp?category=${activeCategory}&community=${communityName}&offset=${offset}&limit=${RESULTS_LIMIT}`
    )
    const data = await response.json()
    setActiveIndex(oldValue => oldValue + 1)
    setYelpData([...yelpData, ...data])
  }

  return (
    <S.Section>
      <Flex direction="column" align="center">
        <S.Title>Living in {communityName}</S.Title>
        <S.Description>
          Explore the best restaurants, businesses, and activities near Athens.
        </S.Description>
        <S.Options>
          {buttonOptions.map(option => (
            <Button
              key={option.id}
              size="2"
              outlined={activeCategory !== option.category}
              onClick={() => handleRequestNewData(option.category)}
            >
              {option.category}
            </Button>
          ))}
        </S.Options>
      </Flex>
      <Flex direction="column" align="center" css={{ gap: 48 }}>
        <S.CardsGrid>
          <S.YelpLogo />
          {yelpData.map(business => (
            <S.Card key={business.id}>
              <a href={business.url} target="_blank" rel="noreferrer noopener">
                <Box
                  css={{
                    h: '100%',
                  }}
                >
                  <Image
                    src={business.image_url}
                    alt={business.name}
                    style={{ objectFit: 'cover' }}
                    fill
                  />
                </Box>
                <Box
                  css={{
                    position: 'absolute',
                    top: 0,
                    h: '100%',
                    w: '100%',
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
                  }}
                />
                <S.BusinessName>{business.name}</S.BusinessName>
                <S.BusinessRating>
                  <Image
                    src={businessRatingImage[business.rating]}
                    alt="Business rating"
                  />
                </S.BusinessRating>
                <S.ReviewsCount>{business.review_count} Yelp reviews</S.ReviewsCount>
              </a>
            </S.Card>
          ))}
        </S.CardsGrid>
        <Button size="2" onClick={handleRequestMoreData}>
          Load More
        </Button>
      </Flex>
    </S.Section>
  )
}
