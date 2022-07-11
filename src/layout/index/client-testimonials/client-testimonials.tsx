import { useState } from "react"

import { Box, Hat } from "@common"
import Image from "next/image"
import Link from "next/link"
import * as S from "./client-testimonials.styles"
import { client1, client2, client3 } from "./images"
import { StarSvg } from "./svgs"

const testimonials = [
  {
    image: client1,
    name: "Spencer B.",
    message:
      "Becca Travis is an amazing Realtor!! Becca is very knowledgeable about the field. Most importantly she loves to help others which shows in her work. She is very reliable, efficient, customer centered and will make sure you are taken care of. With all of my requests she was able to assist in ensuring they were answered or an alternative was provided.She was on my side throughout the purchase of my new home and I felt appreciated and valued by her. She is a professional that went above and beyond to ensure that the stress level that came with this experience was diminished as much as possible.",
  },
  {
    image: client2,
    name: "Laurent",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ducimus eos saepe iste voluptatibus veritatis repellat voluptates provident officia, velit facilis quibusdam excepturi reiciendis labore. Mollitia ducimus quaerat commodi expedita.m",
  },
  {
    image: client3,
    name: "Jen V.",
    message:
      "Becca Travis is an amazing Realtor!! Becca is very knowledgeable about the field. Most importantly she loves to help others which shows in her work. She is very reliable, efficient, customer centered and will make sure you are taken care of. With all of my requests she was able to assist in ensuring they were answered or an alternative was provided.She was on my side throughout the purchase of my new home and I felt appreciated and valued by her. She is a professional that went above and beyond to ensure that the stress level that came with this experience was diminished as much as possible. Lorem ipsum dolor sit amet in the beginning of the experience as well as the stress level of others have Becca Travis is an amazing Realtor!! Becca is very knowledgeable about the field. Most importantly she loves to help others which shows in her work. She is very reliable, efficient, customer centered and will make sure you are taken care of. With all of my requests she was able to assist in ensuring they were answered or an alternative was provided.She was on my side throughout the purchase of my new home and I felt appreciated and valued by her. She is a professional that went above and beyond to ensure that the stress level that came with this experience was diminished as much as possible. Lorem ipsum dolor sit amet in the beginning of the experience as well as the stress level of others have",
  },
]

export function ClientTestimonials() {
  const [index, setIndex] = useState(1)

  let activeTestimonial = testimonials[index]

  return (
    <S.Section>
      <div>
        <Hat css={{ marginBottom: 8 }}>CUSTOMERS STORIES</Hat>
        <S.Title>Client testimonials</S.Title>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 48,
          }}
        >
          <S.Description>
            These are just a few of the many happy customers that we have
            served.
          </S.Description>
          <Link href="#" passHref>
            <S.MoreTestimonials>VIEW MORE TESTIMONIALS</S.MoreTestimonials>
          </Link>
        </Box>
      </div>

      <Box
        css={{
          display: "flex",
          alignItems: "center",
          gap: 92,
          height: "329px",
        }}
      >
        <S.Clients>
          {testimonials.map((testimonial, i) => {
            const isActive = testimonial.name === activeTestimonial.name
            return (
              <li key={testimonial.name}>
                <S.Client onClick={() => setIndex(i)} active={isActive}>
                  <S.ImageWrapper>
                    <Image src={testimonial.image} alt={testimonial.name} />
                  </S.ImageWrapper>
                  <Box
                    css={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <S.ClientName>{testimonial.name}</S.ClientName>
                    <S.BeccaClient>
                      Client Becca Travis Real State Group
                    </S.BeccaClient>
                  </Box>
                </S.Client>
              </li>
            )
          })}
        </S.Clients>

        <div>
          <S.Testimonial>
            <Box
              css={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                marginBottom: 4,
              }}
            >
              <S.TestimonialClientName>
                {activeTestimonial.name}
              </S.TestimonialClientName>

              <Box
                css={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "4px 10px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 225, 66, 0.2);",
                }}
              >
                <StarSvg /> 5
              </Box>
            </Box>
            <S.TestimonialBeccaClient>
              Client Becca Travis Real State Group
            </S.TestimonialBeccaClient>
          </S.Testimonial>

          <S.ScrollArea scrollHideDelay={150}>
            <S.Viewport>
              <S.Message>&quot;{activeTestimonial.message}&quot;</S.Message>
            </S.Viewport>
            <S.Scrollbar orientation="horizontal">
              <S.Thumb />
            </S.Scrollbar>
            <S.Scrollbar orientation="vertical">
              <S.Thumb />
            </S.Scrollbar>
            <S.Corner />
          </S.ScrollArea>
        </div>
      </Box>
    </S.Section>
  )
}
