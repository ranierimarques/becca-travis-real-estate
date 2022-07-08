import { useState } from "react"

import { Box, Hat } from "@common"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import * as S from "./client-testimonials.styles"
import { client1, client2, client3 } from "./images"
import { StarSvg } from "./svgs"

export function ClientTestimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      image: client1,
      name: "Spencer B.",
      message:
        "Becca Travis is an amazing Realtor!! Becca is very knowledgeable about the field. Most importantly she loves to help others which shows in her work. She is very reliable, efficient, customer centered and will make sure you are taken care of. With all of my requests she was able to assist in ensuring they were answered or an alternative was provided.She was on my side throughout the purchase of my new home and I felt appreciated and valued by her. She is a professional that went above and beyond to ensure that the stress level that came with this experience was diminished as much as possible.",
      active: false,
    },
    {
      image: client2,
      name: "Laurent",
      message:
        "Becca Travis is an amazing Realtor!! Becca is very knowledgeable about the field. Most importantly she loves to help others which shows in her work. She is very reliable, efficient, customer centered and will make sure you are taken care of. With all of my requests she was able to assist in ensuring they were answered or an alternative was provided.She was on my side throughout the purchase of my new home and I felt appreciated and valued by her. She is a professional that went above and beyond to ensure that the stress level that came with this experience was diminished as much as possible.",
      active: true,
    },
    {
      image: client3,
      name: "Jen V.",
      message:
        "Becca Travis is an amazing Realtor!! Becca is very knowledgeable about the field. Most importantly she loves to help others which shows in her work. She is very reliable, efficient, customer centered and will make sure you are taken care of. With all of my requests she was able to assist in ensuring they were answered or an alternative was provided.She was on my side throughout the purchase of my new home and I felt appreciated and valued by her. She is a professional that went above and beyond to ensure that the stress level that came with this experience was diminished as much as possible.",
      active: false,
    },
  ])

  const [person, setPerson] = useState("Laurent")

  function clientClick(client: {
    image: StaticImageData
    name: string
    message: string
    active: boolean
  }) {
    setPerson(client.name)
    testimonials.forEach(testimonial => {
      if (client.name === testimonial.name) {
        testimonial.active = true
      } else {
        testimonial.active = false
      }
    })
  }

  return (
    <S.Section>
      <Box>
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
      </Box>

      <Box css={{ display: "flex", alignItems: "center", gap: 92 }}>
        <S.Clients>
          {testimonials.map(testimonial => {
            return (
              <li key={testimonial.name}>
                <S.Client
                  onClick={() => clientClick(testimonial)}
                  className={testimonial.active ? "active" : ""}
                >
                  <Box
                    css={{
                      opacity: "0.4",
                      "&.active": {
                        opacity: "1",
                      },
                    }}
                    className={testimonial.active ? "active" : ""}
                  >
                    <Image src={testimonial.image} alt={testimonial.name} />
                  </Box>
                  <Box
                    css={{ display: "flex", flexDirection: "column", gap: 4 }}
                  >
                    <S.ListClientName
                      className={testimonial.active ? "active" : ""}
                    >
                      {testimonial.name}
                    </S.ListClientName>
                    <S.ListBeccaClient
                      className={testimonial.active ? "active" : ""}
                    >
                      Client Becca Travis Real State Group
                    </S.ListBeccaClient>
                  </Box>
                </S.Client>
              </li>
            )
          })}
        </S.Clients>
        <S.Testimonial>
          <Box
            css={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              marginBottom: 4,
            }}
          >
            <S.ClientName>
              {testimonials.map(testimonial => {
                return testimonial.name === person ? testimonial.name : ""
              })}
            </S.ClientName>

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
              <StarSvg />5
            </Box>
          </Box>

          <S.BeccaClient>Client Becca Travis Real State Group</S.BeccaClient>

          <S.Message>
            &quot;
            {testimonials.map(testimonial => {
              return testimonial.name === person ? testimonial.message : ""
            })}
            &quot;
          </S.Message>
        </S.Testimonial>
      </Box>
    </S.Section>
  )
}
