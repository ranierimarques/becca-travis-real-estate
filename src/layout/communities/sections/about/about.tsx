import * as S from './about.styles'

interface AboutProps {
  communityName: string
}

export function About({ communityName }: AboutProps) {
  return (
    <S.Section id={`about-${communityName.toLowerCase()}`}>
      <S.Title>
        About <S.Community>{communityName}</S.Community>
      </S.Title>
      <S.Paragraph>
        Athens is a city in Limestone County, Alabama. As of the 2000 census, the
        population of the city was 18,967. According to the 2007 U.S. Census estimates,
        the city had a population of 22,936. The city is the county seat of Limestone
        County and is included in the Huntsville-Decatur Combined Statistical Area.
        <br />
        <br /> Athens was founded in 1818 by John Coffee, Robert Beaty, John D. Carroll,
        and John Read. Athens is one of the oldest incorporated cities in the State of
        Alabama, having been incorporated one year prior to the state’s admittance to the
        Union in 1819. Limestone County was also created by an act of the Alabama
        Territorial Legislature in 1818. The town was first called Athenson, and then the
        name was then shortened to Athens, after the ancient city in Greece. In 1934,
        Athens became the first city to get its electricity from the Tennessee Valley
        Authority. Athens is the home of Browns Ferry Nuclear Power Plant. Tennessee
        Valley Authority installation first operated in 1974, which was once the world’s
        largest nuclear plant. It provides many jobs to the area and most of the
        electricity for the Huntsville-Decatur Metro Area. <br />
        <br /> Athens City and Limestone county area has an array of homes for sale.
        There’s a home for every families budget. Golf course communities, well
        established subdivisions, farm homes and new construction homes are available for
        sale. Athens City has a wide assortment of charming bouquet style shops,
        bookstores and restaurants on the court house square. The city also has large
        retail stores, privately owned eclectic shops and access to the interstate for
        easy commute to the surrounding cities.
      </S.Paragraph>
    </S.Section>
  )
}
