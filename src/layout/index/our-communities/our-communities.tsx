import Image from "next/image"
import {
  athens,
  decatur,
  hamptonCover,
  harvest,
  huntsville,
  meridianville,
} from "./images"
import * as S from "./our-communities.styles"

const communitiesData = [
  {
    image: harvest,
    alt: "Harvest road",
    community: `Harvest, AL`,
    href: "#",
    hover: "Find out more about Harvest",
  },
  {
    image: huntsville,
    alt: "Huntsville forest",
    community: `Huntsville, AL`,
    href: "#",
    hover: "Find out more about Huntsville",
  },
  {
    image: hamptonCover,
    alt: "Hamptom Cove lake",
    community: `Hamptom Cove, AL`,
    href: "#",
    hover: "Find out more about Hamptom Cove",
  },
  {
    image: decatur,
    alt: "Decatur home",
    community: `Decatur, AL`,
    href: "#",
    hover: "Find out more about Decatur",
  },
  {
    image: athens,
    alt: "Athens river",
    community: `Athens, AL`,
    href: "#",
    hover: "Find out more about Athens",
  },
  {
    image: meridianville,
    alt: "Meridianville house",
    community: `Meridianville, AL`,
    href: "#",
    hover: "Find out more about Meridianville",
  },
]

export function OurCommunities() {
  return (
    <S.Section>
      <S.Heading>MEET OUR COMMUNITIES</S.Heading>
      <S.Title>Our communities</S.Title>
      <S.CommunitiesList>
        {communitiesData.map(community => {
          return (
            <S.Community key={community.community}>
              <Image src={community.image} alt={community.alt} layout="fill" />
              <span>{community.community}</span>
            </S.Community>
          )
        })}
      </S.CommunitiesList>
    </S.Section>
  )
}
