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

export function OurCommunities() {
  return (
    <S.Section>
      <S.Heading>MEET OUR COMMUNITIES</S.Heading>
      <S.Title>Our communities</S.Title>
      <S.CommunitiesList>
        <li>
          <Image src={harvest} alt="Harvest photo" layout="fill" />
          <span>Harvest, AL</span>
        </li>
        <li>
          <Image src={huntsville} alt="Huntsville photo" layout="fill" />
          <span>Huntsville, AL</span>
        </li>
        <li>
          <Image src={hamptonCover} alt="Hampton Cover photo" layout="fill" />
          <span>Hamptom Cove, AL</span>
        </li>
        <li>
          <Image src={decatur} alt="Decatur photo" layout="fill" />
          <span>Decatur, AL</span>
        </li>
        <li>
          <Image src={athens} alt="Athens photo" layout="fill" />
          <span>Athens, AL</span>
        </li>
        <li>
          <Image src={meridianville} alt="Meridianville photo" layout="fill" />
          <span>Meridianville, AL</span>
        </li>
      </S.CommunitiesList>
    </S.Section>
  )
}
