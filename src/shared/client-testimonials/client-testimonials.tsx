import { Box, Button, Flex, Hat } from '@common'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import Link from 'next/link'
import { useRef, useState } from 'react'
import * as S from './client-testimonials.styles'
import { CloseSvg } from './svgs'

const testimonials = [
  {
    name: 'Spencer B.',
    source: 'Zillow',
    text: `Becca Travis is an amazing Realtor!! Becca is very knowledgeable
    about the field. Most importantly she loves to help others which shows
    in her work. She is very reliable, efficient, customer centered and
    will make sure you are taken care of...`,
  },
  {
    name: 'Nick R.',
    source: 'Google reviews',
    text: `If you need a realtor in Huntsville, Becca is your go-to AGENT! she goes above and beyond for you and has many outside referrals and connections to make your life EASIER! she is awesome and we will continue to use her as we continue to buy more rentals! thanks again!"
    `,
  },
  {
    name: 'Mike B.',
    source: 'Zillow',
    text: `Becca was amazing and really went above and beyond! She overcame obstacles that no one else could, fought to get me the right home for me, and held my hand/explained all the complicated aspects about the home buying process when I needed it...`,
  },
  {
    name: 'Kristin B.',
    source: 'Zillow',
    text: `Becca is the best! She goes so far above and beyond. She is quick to respond and get information from other agents. She is dream to work with. I couldn't imagine working with anyone else. We live out of the area and she made the home buying process easy.`,
  },
  {
    name: 'Jen V.',
    source: 'Google reviews',
    text: `My husband and I are planning on moving to Huntsville in the next year. We had planned a trip to go out to Huntsville to check out the area and we're hoping we could get an agent to show us around, despite we are not buying at the current time...`,
  },
  {
    name: 'Randell P.',
    source: 'Zillow',
    text: `Love her tenacity on the details of our transaction. Becca Travis is an all -star player in my book. She knows her market and understands her client's needs very well. If you need someone you can trust and who deeply understands the dynamics of the real estate process...`,
  },
  {
    name: 'Lisa Vernon',
    source: 'Google reviews',
    text: `“We are incredibly fortunate to have a top real estate professional like Becca Travis as our agent! She listened carefully to our needs, gave outstanding advice, and worked tirelessly to find the perfect home for us. We truly would have been lost without her guidance...”`,
  },
  {
    name: 'Kristin Bourne',
    source: 'Google reviews',
    text: `“Becca is the best! She goes so far above and beyond. She is quick to respond and get information from other agents. She is dream to work with. I couldn't imagine working with anyone else. We live out of the area and she made the home buying process easy...”`,
  },
  {
    name: 'C. Hill',
    source: 'Google reviews',
    text: `“My wife, our kids and myself were looking for a place to purchase in the Huntsville area and were living in Seattle WA.  We needed a realtor we could trust and it had to be someone we could meet over the phone and trust that would work for us from 2600 miles away...”`,
  },
]

export function ClientTestimonials() {
  const [resize, setResize] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  function onResize() {
    setResize(!resize)
  }

  return (
    <S.Section>
      <div>
        <Hat css={{ mb: 8 }}>CUSTOMERS STORIES</Hat>
        <S.Title>Client stories</S.Title>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 48,
          }}
        >
          <S.Description>
            I work with my heart and the best part about my job is guiding each of home. I
            am grateful for each of my clients, here are just a few of their stories…
          </S.Description>
          <Link href="#" passHref>
            <S.ViewAll>VIEW ALL</S.ViewAll>
          </Link>
        </Box>
      </div>

      <S.Testimonials className={resize ? 'resize' : ''}>
        <S.TestimonialsOverlay>
          <Button size="2" css={{ pointerEvents: 'auto' }} onClick={onResize}>
            {resize ? 'Show less' : 'Show more...'}
          </Button>
        </S.TestimonialsOverlay>
        {testimonials.map(testimonial => {
          return (
            <DialogPrimitive.Root key={testimonial.name}>
              <DialogPrimitive.Trigger asChild>
                <S.TestimonialCard>
                  <Flex align="start" justify="between">
                    <Flex align="center" css={{ gap: 16, mb: 16 }}>
                      <S.Photo>{testimonial.name.substring(0, 1)}</S.Photo>
                      <div>
                        <S.Name>{testimonial.name}</S.Name>
                        <S.Source>{testimonial.source}</S.Source>
                      </div>
                    </Flex>
                    <S.LinkSvgHover />
                  </Flex>

                  <S.Text>&quot;{testimonial.text}&quot;</S.Text>
                </S.TestimonialCard>
              </DialogPrimitive.Trigger>

              <DialogPrimitive.Portal>
                <S.StyledOverlay />
                <S.StyledContent onOpenAutoFocus={onOpenAutoFocus}>
                  <Flex
                    align="center"
                    css={{
                      position: 'relative',
                      padding: '32px 32px 24px 32px',
                      background: 'rgba(232, 183, 206, 0.2)',
                      borderBottom: '2px solid rgba(232, 183, 206, 0.5)',
                      gap: 16,
                    }}
                  >
                    <S.ModalPhoto>{testimonial.name.substring(0, 1)}</S.ModalPhoto>
                    <div>
                      <S.ModalName>{testimonial.name}</S.ModalName>
                      <S.ModalSource>{testimonial.source}</S.ModalSource>
                    </div>
                    <S.ModalLogo />
                  </Flex>
                  <S.ModalText>{testimonial.text}</S.ModalText>

                  <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}></Flex>
                  <DialogPrimitive.Close asChild>
                    <S.IconButton aria-label="Close">
                      <CloseSvg />
                    </S.IconButton>
                  </DialogPrimitive.Close>
                </S.StyledContent>
              </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
          )
        })}
      </S.Testimonials>
    </S.Section>
  )
}
