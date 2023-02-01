import { Box, Button, Flex, Image } from '@/common'
import { Select } from '@/primitives'
import { Section } from '@/template'
import { useState } from 'react'
import * as Img from './images'
import * as S from './yelp.styles'

const RESULTS_LIMIT = 6

const businessRatingImage = {
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

const buttonOptions = [
  { id: 1, category: 'dining' },
  { id: 2, category: 'active' },
  { id: 3, category: 'nightlife' },
  { id: 4, category: 'shopping' },
] as const

interface YelpProps {
  data: {
    id: string
    name: string
    review_count: number
    rating: keyof typeof businessRatingImage
    image_url: string
    url: string
  }[]
  communityName: string
}

type CategoriesName = 'dining' | 'active' | 'shopping' | 'nightlife'

export function Yelp({ data, communityName }: YelpProps) {
  const [yelpData, setYelpData] = useState(data)
  const [activeCategory, setActiveCategory] = useState<CategoriesName>('dining')
  const [activeIndex, setActiveIndex] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const isAthens = communityName === 'Athens'

  async function handleRequestNewData(category: CategoriesName) {
    if (category === activeCategory) return

    setActiveCategory(category)
    setActiveIndex(1)
    const response = await fetch(
      `/api/yelp?category=${category}&community=${
        isAthens ? 'athens, alabama' : communityName
      }&limit=${RESULTS_LIMIT}&offset=0`
    )
    console.log(response)
    const data = await response.json()
    setYelpData(data)
  }

  async function handleRequestMoreData() {
    setIsLoading(true)
    const offset = activeIndex * RESULTS_LIMIT
    const response = await fetch(
      `/api/yelp?category=${activeCategory}&community=${
        isAthens ? 'athens, alabama' : communityName
      }&offset=${offset}&limit=${RESULTS_LIMIT}`
    )
    const data = await response.json()
    setActiveIndex(oldValue => oldValue + 1)
    setYelpData([...yelpData, ...data])
    setIsLoading(false)
  }

  return (
    <Section hasMaxWidth css={{ pt: 120, '@bp4': { pt: 80 }, '@bp2': { pt: 64 } }}>
      <Flex
        direction="column"
        align="center"
        css={{ '@bp5': { mb: 48 }, '@bp4': { mb: 32 } }}
      >
        <S.Title>
          Living in <S.Community>{communityName}</S.Community>
        </S.Title>
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

        <Box
          css={{
            display: 'none',
            w: '100%',
            '@bp4': { display: 'flex', justifyContent: 'center' },
          }}
        >
          <Select.Root
            onValueChange={(value: CategoriesName) => handleRequestNewData(value)}
            category={activeCategory}
            community
          >
            <Select.Item value="dining">dining</Select.Item>
            <Select.Item value="active">active</Select.Item>
            <Select.Item value="nightlife">nightlife</Select.Item>
            <Select.Item value="shopping">shopping</Select.Item>
          </Select.Root>
        </Box>
      </Flex>

      <Flex direction="column" align="center">
        <S.YelpLogo />

        <S.CardsGrid>
          {yelpData.map(business => (
            <S.Card key={business.id}>
              <a href={business.url} target="_blank" rel="noreferrer noopener">
                <Image
                  src={business.image_url}
                  alt={business.name}
                  style={{ objectFit: 'cover' }}
                  fill
                />
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
        <Button
          size="2"
          onClick={handleRequestMoreData}
          loading={isLoading}
          css={{ mt: 48 }}
        >
          Load More
        </Button>
      </Flex>
    </Section>
  )
}
