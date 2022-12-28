import { ReactNode } from 'react'
import * as S from './about.styles'

interface AboutProps {
  communityName: string
}

type Texts = {
  [key: string]: ReactNode
}

const texts: Texts = {
  huntsville: (
    <>
      Huntsville, Alabama is a city with a lot to offer. It has a thriving economy, with a
      strong focus on aerospace, defense, and technology. The city is home to several
      major aerospace and defense contractors, as well as many startups and innovative
      companies. In addition, Huntsville is home to several colleges and universities,
      making it a great place for higher education and research.
      <br />
      <br />
      The city is located in the beautiful Tennessee Valley, with mild weather and plenty
      of outdoor recreational opportunities. There are several parks and recreational
      areas in and around Huntsville, including the Monte Sano State Park and the Land
      Trust of North Alabama&apos;s Hays Nature Preserve.
      <br />
      <br />
      Huntsville also has a thriving arts and culture scene, with a number of galleries,
      museums, and performance venues. The city is home to the Huntsville Symphony
      Orchestra, the Huntsville Ballet, and the Von Braun Center for the Performing Arts.
      <br />
      <br />
      Finally, Huntsville is a city with a strong sense of community. There are many
      organizations and events that bring people together and promote a sense of
      belonging. If you are considering a move to Huntsville, you can be confident that it
      is a great place to live and work, with a strong economy, excellent educational and
      research opportunities, beautiful natural surroundings, and a thriving arts and
      culture scene.
    </>
  ),
  harvest: (
    <>
      Harvest, Alabama is a town located in Madison County, just north of Huntsville. It
      is a suburb of Huntsville and is part of the Huntsville Metropolitan Statistical
      Area. The town is known for its abundant harvests of wheat and corn and is a
      relatively new town, having been incorporated in 1997. In recent years, it has
      experienced significant growth, with new residential and commercial development.
      <br />
      <br />
      Harvest is located in the beautiful Tennessee Valley, with mild weather and plenty
      of outdoor recreational opportunities. The town is surrounded by forests, fields,
      and streams, and there are several parks and recreational areas in and around
      Harvest, including the Monrovia State Wildlife Management Area.
      <br />
      <br />
      Harvest is a growing and vibrant community, with a strong sense of community and a
      commitment to preserving its natural beauty. The town has a variety of housing
      options, including single-family homes, townhomes, and apartments.
      <br />
      <br />
      Overall, if you are considering a move to Harvest, you can be confident that it is a
      great place to live and work, with a growing and vibrant community, beautiful
      natural surroundings, and a commitment to preserving the town&apos;s natural beauty.
    </>
  ),
  hamptonCove: (
    <>
      Hampton Cove, Alabama is a residential and resort community located in Madison
      County, just north of Huntsville. It is a suburb of Huntsville and is part of the
      Huntsville Metropolitan Statistical Area.
      <br />
      <br />
      Hampton Cove is known for its beautiful natural surroundings, with forests, fields,
      and streams in the surrounding area. The community is located in the Tennessee
      Valley, which is known for its mild climate and abundance of outdoor recreational
      opportunities.
      <br />
      <br />
      Hampton Cove has a variety of housing options, including single-family homes,
      townhomes, and apartments. The community is home to several golf courses, including
      the Hampton Cove Golf Course, which is a popular destination for golfers. There are
      also several parks and recreational areas in and around Hampton Cove, including the
      Hampton Cove Nature Preserve and the Land Trust of North Alabama&apos;s Hays Nature
      Preserve.
      <br />
      <br />
      In addition to its natural beauty and recreational opportunities, Hampton Cove is
      also a convenient place to live, with easy access to shopping, dining, and other
      amenities. If you are considering a move to Hampton Cove, you can be confident that
      it is a great place to live and work, with beautiful natural surroundings,
      recreational opportunities, and convenient access to amenities.
    </>
  ),
  decatur: (
    <>
      Decatur, Alabama is a city located in Morgan County, in the north-central part of
      the state. It is the largest city in Morgan County and the fourth largest city in
      the state. As of the 2010 Census, the population of Decatur was 55,683.
      <br />
      <br />
      Decatur is located in the Tennessee Valley, which is known for its mild climate and
      beautiful natural surroundings. The city is situated along the Tennessee River and
      is surrounded by forests, fields, and streams. There are several parks and
      recreational areas in and around Decatur, including the Point Mallard Park and the
      Wheeler National Wildlife Refuge.
      <br />
      <br />
      Decatur is a city with a strong economy and a diverse array of industries. It is
      home to several major manufacturing and distribution companies, as well as a number
      of small businesses and startups. The city is also home to several colleges and
      universities, including the University of Alabama in Huntsville and Calhoun
      Community College.
      <br />
      <br />
      Overall, if you are considering a move to Decatur, you can be confident that it is a
      great place to live and work, with a strong economy, beautiful natural surroundings,
      and a variety of recreational and cultural opportunities.
    </>
  ),
  athens: (
    <>
      Athens, Alabama is a city located in Limestone County, in the northern part of the
      state. It is the county seat of Limestone County and the largest city in the county.
      As of the 2010 Census, the population of Athens was 21,897.
      <br />
      <br />
      Athens is located in the Tennessee Valley, which is known for its mild climate and
      beautiful natural surroundings. The city is situated in the foothills of the
      Appalachian Mountains and is surrounded by forests, fields, and streams. There are
      several parks and recreational areas in and around Athens, including the Athens
      State University Nature Trail and the Land Trust of North Alabama&apos;s Hays Nature
      Preserve.
      <br />
      <br />
      Athens is a city with a strong economy and a diverse array of industries. It is home
      to several major manufacturing and distribution companies, as well as a number of
      small businesses and startups. The city is also home to several colleges and
      universities, including Athens State University and Calhoun Community College.
      <br />
      <br />
      Overall, if you are considering a move to Athens, you can be confident that it is a
      great place to live and work, with a strong economy, beautiful natural surroundings,
      and a variety of recreational and cultural opportunities.
    </>
  ),
  meridianville: (
    <>
      Meridianville, Alabama is a small community located in Madison County, in the
      northern part of the state. It is a suburb of Huntsville and is part of the
      Huntsville Metropolitan Statistical Area. As of the 2010 Census, the population of
      Meridianville was 13,623.
      <br />
      <br />
      Meridianville is located in the Tennessee Valley, which is known for its mild
      climate and beautiful natural surroundings. The community is situated in the
      foothills of the Appalachian Mountains and is surrounded by forests, fields, and
      streams. There are several parks and recreational areas in and around Meridianville,
      including the Land Trust of North Alabama&apos;s Hays Nature Preserve and the
      Monrovia State Wildlife Management Area.
      <br />
      <br />
      Meridianville is a growing and vibrant community, with a strong sense of community
      and a commitment to preserving its natural beauty. The community has a variety of
      housing options, including single-family homes, townhomes, and apartments.
      <br />
      <br />
      Overall, if you are considering a move to Meridianville, you can be confident that
      it is a great place to live and work, with a growing and vibrant community,
      beautiful natural surroundings, and a commitment to preserving the community&apos;s
      natural beauty.
    </>
  ),
}

export function About({ communityName }: AboutProps) {
  const isHamptonCove = communityName === 'hampton cove'
  return (
    <S.Section id={`about-${communityName.toLowerCase()}`}>
      <S.Title>
        About <S.Community>{communityName}</S.Community>
      </S.Title>
      <S.Paragraph>{texts[isHamptonCove ? 'hamptonCove' : communityName]}</S.Paragraph>
    </S.Section>
  )
}
