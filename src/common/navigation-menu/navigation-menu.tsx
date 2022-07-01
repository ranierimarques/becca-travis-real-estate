import { Button } from "@common"
import Image from "next/image"
import {
  athens,
  decatur,
  hamptonCover,
  harvest,
  huntsville,
  meridianville,
} from "./images"
import * as S from "./navigation-menu.styles"
import { ArrowDownSvg, HomeSvg } from "./svgs"

export function NavigationMenu() {
  return (
    <S.Root>
      <S.List>
        <S.Item>
          <S.Trigger>
            Buyers <ArrowDownSvg />
          </S.Trigger>
          <S.Content>
            <S.ContentList>
              <S.ContentListItem>
                Search Houses
                <span>Properties for sale</span>
              </S.ContentListItem>
              <S.ContentListItem>
                Our featured listings
                <span>New featured houses</span>
              </S.ContentListItem>
              <S.ContentListItem>
                Buyers Resources
                <span>All you need to buy your property</span>
              </S.ContentListItem>
              <S.ContentListItem>
                Huntsville school
                <span>Everything about Huntsville education</span>
              </S.ContentListItem>
              <S.ContentListItem>
                Relocation Information
                <span>All you need to move to a new home</span>
              </S.ContentListItem>
              <S.ContentListItem>
                Calculators
                <span>Estimate your costs with our calculator</span>
              </S.ContentListItem>
            </S.ContentList>
            <S.Link />
          </S.Content>
        </S.Item>

        <S.Item>
          <S.Trigger>
            Sellers <ArrowDownSvg />
          </S.Trigger>
          <S.Content>
            <S.ContentList>
              <S.ContentListItem>
                Sellers Resources
                <span>Properties for sale</span>
              </S.ContentListItem>
              <S.ContentListItem>
                Selling your home with us
                <span>All you need to sell your property</span>
              </S.ContentListItem>
            </S.ContentList>
            <S.Link />
          </S.Content>
        </S.Item>

        <S.Item>
          <S.Trigger>
            Communities <ArrowDownSvg />
          </S.Trigger>
          <S.Content>
            <S.Communities>
              <S.AboutHuntsville>
                <h3>About Huntsville</h3>
                <S.Huntsville>
                  <div>
                    <S.IconContainer>
                      <HomeSvg />
                    </S.IconContainer>
                    Huntsville
                  </div>
                  <span>
                    Huntsville, the city where waves of history wash over you as
                    soon as it rains...
                  </span>
                </S.Huntsville>
              </S.AboutHuntsville>
              <S.Line />
              <S.OurCommunities>
                <h3>Our communities</h3>
                <S.CommunitiesList>
                  <li>
                    <Image src={harvest} alt="Harvest photo" layout="fill" />
                    <span>Harvest, AL</span>
                  </li>
                  <li>
                    <Image
                      src={huntsville}
                      alt="Huntsville photo"
                      layout="fill"
                    />
                    <span>Huntsville, AL</span>
                  </li>
                  <li>
                    <Image
                      src={hamptonCover}
                      alt="Hampton Cover photo"
                      layout="fill"
                    />
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
                    <Image
                      src={meridianville}
                      alt="Meridianville photo"
                      layout="fill"
                    />
                    <span>Meridianville, AL</span>
                  </li>
                </S.CommunitiesList>
              </S.OurCommunities>
            </S.Communities>
            <S.Link />
          </S.Content>
        </S.Item>

        <S.Item>
          <S.Link href="https://github.com/radix-ui">Why Becca?</S.Link>
        </S.Item>

        <S.Item>
          <S.Link href="https://github.com/radix-ui">Blog</S.Link>
        </S.Item>

        <S.Item>
          <Button href="https://github.com/radix-ui">Talk to me</Button>
        </S.Item>
      </S.List>
    </S.Root>
  )
}
