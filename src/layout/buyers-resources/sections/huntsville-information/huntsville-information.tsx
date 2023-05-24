import Image from 'next/image'
import { Hat } from '@/shared'
import * as S from './huntsville-information.styles'
import { image1, image2, image3 } from './images'
import { ArrowSvg } from './svgs'

export function HuntsvilleInformation() {
  return (
    <S.Section>
      <S.Tour>
        <div>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Becca Travis Real Estate</S.Title>
          <S.Paragraph>
            There are many reasons why Huntsville is a great place to live. The economy is
            strong and there are plenty of jobs available. The schools are excellent, and
            the living cost is very affordable.
          </S.Paragraph>
          <S.Link>
            About Huntsville
            <ArrowSvg />
          </S.Link>
        </div>

        <S.ImageContainer>
          <Image src={image1} alt="Becca Travis" />
          <S.ImageDescription>Image by Becca Travis</S.ImageDescription>
        </S.ImageContainer>
      </S.Tour>

      <S.Schools>
        <S.Path />

        <S.ImageContainer>
          <Image src={image2} alt="Becca Travis" />
          <S.ImageDescription left>
            Image by Monrovia Elementary School via{' '}
            <S.ImageSource
              href="https://www.mcssk12.org/cms/lib/AL50000446/Centricity/Domain/21"
              target="_blank"
            >
              Madison County Schools
            </S.ImageSource>
          </S.ImageDescription>
        </S.ImageContainer>

        <div>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Becca Travis Real Estate</S.Title>
          <S.Paragraph>
            Huntsville is home to a number of highly respected colleges and universities.
            The quality of education in Huntsville is excellent, and students who attend
            school here have the opportunity to receive a well-rounded education.
          </S.Paragraph>
          <S.Link>
            Huntsville school&apos;s
            <ArrowSvg />
          </S.Link>
        </div>

        <S.Path2 />
      </S.Schools>

      <S.Relocation>
        <div>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Becca Travis Real Estate</S.Title>
          <S.Paragraph>
            The Huntsville area offers an excellent real estate market. You&apos;ll find
            an amazing selection of homes for sale here, and my job is to make sure you
            have all the information needed so we can save time on finding what fits best
            with your needs!
          </S.Paragraph>
          <S.Link>
            Relocation Information
            <ArrowSvg />
          </S.Link>
        </div>
        <S.ImageContainer>
          <Image src={image3} alt="Happy Family" />
          <S.ImageDescription>Image by Becca Travis</S.ImageDescription>
        </S.ImageContainer>
      </S.Relocation>
    </S.Section>
  )
}
