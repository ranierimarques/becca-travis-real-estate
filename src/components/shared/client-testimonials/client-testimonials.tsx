import { Button, Flex } from '@/common'
import { Tooltip } from '@/primitives'
import { Hat } from '@/shared'
import { useRef, useState } from 'react'
import { Testimonial } from '.'
import * as S from './client-testimonials.styles'

const reviews = [
  [
    {
      name: 'Kristin B.',
      source: 'Zillow',
      text: `Becca is the best! She goes so far above and beyond. She is quick to respond
     and get information from other agents. She is dream to work with. I couldn't imagine
     working with anyone else. We live out of the area and she made the home buying
     process easy.`,
    },
    {
      name: 'Lisa Vernon',
      source: 'Google',
      text: `We are incredibly fortunate to have a top real estate professional like Becca
     Travis as our agent! She listened carefully to our needs, gave outstanding advice,
      and worked tirelessly to find the perfect home for us. We truly would have been lost
       without her guidance`,
    },
    {
      name: 'Randell P.',
      source: 'Zillow',
      text: `Love her tenacity on the details of our transaction. Becca Travis is an all
     -star player in my book. She knows her market and understands her client's needs very
      well. If you need someone you can trust and who deeply understands the dynamics of
      the real estate process`,
    },
  ],
  [
    {
      name: 'Hayden Walcott',
      source: 'Zillow',
      text: (
        <>
          <S.ReviewSpan>
            &quot;Why Trust Your Future Home Purchase To Just Any Real Estate Agent?
            Discover Becca Travis - An Agent That Treats You Like Family And Not Just As A
            Transaction
          </S.ReviewSpan>
          <S.ReviewSpan>
            Looking for a new home? First time home buyer or seasoned investor?
          </S.ReviewSpan>
          <S.ReviewSpan>Well, it doesn’t matter.</S.ReviewSpan>
          <S.ReviewSpan>
            You will be treated with the same courtesy, respect and professionalism when
            you put the search of your future home or next investment in the hands of
            Becca Travis.
          </S.ReviewSpan>
          <S.ReviewSpan>How do I know this?</S.ReviewSpan>
          <S.ReviewSpan>Because I am now one happy home owner.</S.ReviewSpan>
          <S.ReviewSpan>
            Frankly speaking, most reviews about anything these days are either paid for
            or fakes.
          </S.ReviewSpan>
          <S.ReviewSpan>
            Rarely will you find honest feedback and reviews about companies, products,
            services or professionals in their field.
          </S.ReviewSpan>
          <S.ReviewSpan>
            But I didn’t need to get paid to write this - my fingers were all over the
            keyboard when asked to write this review - it’s looking more like an article
            now actually.
          </S.ReviewSpan>
          <S.ReviewSpan>
            The secret to success in business or your profession is to help people first -
            solve their problems, don’t sell and up-sell - that’s a turnoff.
          </S.ReviewSpan>
          <S.ReviewSpan>
            You want to show your clients, you have their best interest at heart. You want
            them to feel happy with their purchase without second thoughts or regrets.
          </S.ReviewSpan>
          <S.ReviewSpan>
            After all, buying a house is a life changing decision. You want to work with
            someone who understands this and is not just after the big commission.
          </S.ReviewSpan>
          <S.ReviewSpan>
            Becca puts her client first, and with patience and some love will review as
            many houses as needed to make sure you are buying exactly what makes you happy
            and within your budget.
          </S.ReviewSpan>
          <S.ReviewSpan>
            And she’ll guide you through the process with expert advice and
            recommendations.
          </S.ReviewSpan>
          <S.ReviewSpan>
            Did you know that some real estate agents will not work with clients if their
            target purchase price is under a certain amount?
          </S.ReviewSpan>
          <S.ReviewSpan>
            That’s right! Some agents for example are not interest in clients with
            purchases under $300000.00
          </S.ReviewSpan>
          <S.ReviewSpan>Why?</S.ReviewSpan>
          <S.ReviewSpan>
            Because the commission is not big enough! Becca is not that kind of agent.
          </S.ReviewSpan>
          <S.ReviewSpan>
            But what the $300000.00 and above agents don’t understand is that small home
            buyers can recommend big clients - if they are treated right - and small
            commissions add up.
          </S.ReviewSpan>
          <S.ReviewSpan>
            What’s more, when you treat your clients with respect and kindness, you don’t
            have to advertise as much, because people love to tell their friends, families
            and co-workers about a good thing.
          </S.ReviewSpan>
          <S.ReviewSpan>
            Don’t entrust your home buying experience to just anyone. Work with an
            experienced professional that knows the business and put her clients first.
          </S.ReviewSpan>
          <S.ReviewSpan>Happy hunting.</S.ReviewSpan>
          <S.ReviewSpan>Hayden Walcott</S.ReviewSpan>
        </>
      ),
    },
    {
      name: 'Jen V.',
      source: 'Google',
      text: `My husband and I are planning on moving to Huntsville in the next year. We had
     planned a trip to go out to Huntsville to check out the area and we're hoping we
     could get an agent to show us around, despite we are not buying at the current time`,
    },
    {
      name: 'Nick R.',
      source: 'Google',
      text: `If you need a realtor in Huntsville, Becca is your go-to AGENT! she goes above
      and beyond for you and has many outside referrals and connections to make your life
      EASIER! she is awesome and we will continue to use her as we continue to buy more
      rentals! thanks again!`,
    },
  ],
  [
    {
      name: 'Mike B.',
      source: 'Zillow',
      text: `Becca was amazing and really went above and beyond! She overcame obstacles that
     no one else could, fought to get me the right home for me, and held my hand/explained
     all the complicated aspects about the home buying process when I needed it`,
    },
    {
      name: 'Kristin Bourne',
      source: 'Google',
      text: `Becca is the best! She goes so far above and beyond. She is quick to respond
     and get information from other agents. She is dream to work with. I couldn't imagine
      working with anyone else. We live out of the area and she made the home buying
       process easy`,
    },
    {
      name: 'C. Hill',
      source: 'Google',
      text: `My wife, our kids and myself were looking for a place to purchase in the
     Huntsville area and were living in Seattle WA.  We needed a realtor we could trust
      and it had to be someone we could meet over the phone and trust that would work for
       us from 2600 miles away`,
    },
  ],
]

export function ClientTestimonials() {
  const testimonialsContainerRef = useRef<HTMLDivElement>(null)
  const [resize, setResize] = useState(false)

  function onResize() {
    if (resize) {
      document.documentElement.style.scrollBehavior = 'auto'
      testimonialsContainerRef.current?.scrollIntoView()
      document.documentElement.style.scrollBehavior = ''
    }

    setResize(!resize)
  }

  return (
    <S.Section>
      <div>
        <Hat css={{ mb: 8 }}>CUSTOMERS STORIES</Hat>
        <S.Title>Client stories</S.Title>
        <Flex align="end" justify="between" css={{ mb: 48 }}>
          <S.Description>
            I work with my heart and the best part about my job is guiding each of home. I
            am grateful for each of my clients, here are just a few of their stories…
          </S.Description>
          <Tooltip content="Coming soon">
            <S.ViewAll>VIEW ALL</S.ViewAll>
          </Tooltip>
        </Flex>
      </div>

      <S.TestimonialsContainer ref={testimonialsContainerRef} resize={resize}>
        {reviews.map((reviewsColumn, index) => (
          <S.TestimonialsList key={index}>
            {reviewsColumn.map(review => (
              <Testimonial key={review.name} review={review} />
            ))}
          </S.TestimonialsList>
        ))}
        <S.OverlayWrapper>
          <S.Overlay />
          <Button onClick={onResize} size="2" css={{ pointerEvents: 'auto', zIndex: 1 }}>
            {resize ? 'Show less' : 'Show more...'}
          </Button>
        </S.OverlayWrapper>
      </S.TestimonialsContainer>
    </S.Section>
  )
}
