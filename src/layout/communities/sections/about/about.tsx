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
      Huntsville, Alabama is a vibrant city that offers a dynamic economy with a focus on
      aerospace, defense, and technology. The city&apos;s location in the picturesque
      Tennessee Valley provides mild weather and ample opportunities for outdoor
      recreation. Huntsville is also a hub for arts and culture, featuring a range of
      galleries, museums, and performance venues. But what really sets Huntsville apart is
      its strong sense of community, with numerous events and organizations that bring
      people together and promote a sense of belonging. If you&apos;re considering a move
      to Huntsville, you&apos;ll find a welcoming city with a lot to offer.
      <br />
      <br />
      Huntsville&apos;s arts and culture scene is a true gem of the city. There are
      numerous galleries, museums, and performance venues to enjoy. The Huntsville
      Symphony Orchestra, Huntsville Ballet, and Von Braun Center for the Performing Arts
      are just a few of the highlights. In addition, Huntsville has a strong sense of
      community, with many organizations and events that bring people together and foster
      a sense of belonging. Huntsville has gained recognition in national and
      international media for our strong economy and job growth, as well as our
      exceptional quality of life. The companies that have made Huntsville their home have
      made significant contributions to our community, and we are dedicated to supporting
      our primary industries of aerospace, defense, information technology, bioscience,
      and advanced manufacturing.
      <br />
      <br />
      Outdoor enthusiasts can take advantage of the Appalachian Mountains and the
      Tennessee River for boating, hiking, camping, fishing, and hunting. Huntsville is
      home to the National Speleological Society, offering opportunities for caving. There
      are also 30+ miles of hiking and biking trails, 5,000 acres of nature preserves, 60
      parks and greenways, and Monte Sano State Park.
      <br />
      <br />
      Huntsville offers a diverse range of living options to accommodate residents in all
      stages of life. Whether you prefer the charm of historic neighborhoods, the
      convenience of downtown living, the modern appeal of urban lofts, or the peace and
      tranquility of mini-farms, you&apos;ll find it all here. With a six percent increase
      in new home and apartment construction permits over the past five years, housing
      options are both plentiful and affordable.
      <br />
      <br />
      Additionally, the average home cost in Huntsville is 15 percent lower than the
      national average, making it an attractive location for those seeking affordable
      housing. Huntsville is home to several great communities that offer a range of
      amenities and lifestyles. Here are some of the top communities in Huntsville:
      <br />
      <br />
      -Five Points: Located near downtown Huntsville, this historic neighborhood features
      charming homes, tree-lined streets, and walkable access to local shops and
      restaurants.
      <br />
      -Blossomwood: A highly desirable neighborhood, Blossomwood is known for its
      beautiful homes, excellent schools, and proximity to Monte Sano State Park.
      <br />
      -Jones Valley: This upscale neighborhood offers a mix of traditional and
      contemporary homes, excellent schools, and easy access to shopping and dining at
      nearby malls.
      <br />
      -Providence: A newer development, Providence features a mix of residential, retail,
      and commercial properties, including restaurants, shops, and a movie theater. It
      also hosts a popular weekly farmers market.
      <br />
      -Madison: Although not technically in Huntsville, Madison is a neighboring city that
      offers great schools, parks, and amenities.
    </>
  ),
  harvest: (
    <>
      Harvest, Alabama is a great place to call home! This charming community is located
      in the heart of Madison County, just minutes from Huntsville and Redstone Arsenal.
      With its friendly small-town atmosphere and convenient location, Harvest has become
      a popular choice for families, young professionals, and retirees alike.
      <br />
      <br />
      One of the biggest draws to Harvest is its affordable cost of living. Housing is
      readily available and typically priced lower than the national average, making it an
      attractive option for those looking to purchase a home. Additionally, Harvest&apos;s
      proximity to Huntsville and other major job centers provides ample employment
      opportunities.
      <br />
      <br />
      Harvest also offers a wide range of outdoor recreational opportunities. The
      community is surrounded by beautiful natural scenery, with nearby parks and trails
      perfect for hiking, biking, and exploring. The Harvest Square Preserve, located in
      the heart of town, is a popular spot for picnics and outdoor events.
      <br />
      <br />
      For families with children, Harvest is served by the highly regarded Madison County
      School District, which consistently ranks among the top school systems in the state.
      The community also boasts a variety of youth sports leagues and other programs,
      ensuring that there is something for every child to enjoy.
      <br />
      <br />
      Finally, Harvest is a tight-knit community with a strong sense of civic pride. There
      are many community events and festivals throughout the year that bring residents
      together, including the Harvest Festival and the Madison County Fair. If you are
      looking for a safe, affordable, and friendly community to call home, Harvest is an
      excellent choice.
      <br />
      <br />
      A suburb of Huntsville, AL, the charming community of Harvest offers a peaceful and
      tranquil escape from the hustle and bustle of city life. With its quiet streets and
      friendly atmosphere, Harvest is an ideal location for those seeking a more relaxed
      way of life. Located just minutes from the thriving city of Huntsville, residents of
      Harvest enjoy the best of both worlds - the convenience of city amenities and the
      tranquility of small-town living.
      <br />
      <br />
      Harvest boasts a range of housing options, from spacious single-family homes on
      large lots to cozy apartments and townhouses. With affordable housing prices and a
      low cost of living, Harvest is an attractive option for young professionals,
      families, and retirees alike. The community is known for its excellent schools, with
      highly-rated public and private schools in the area. The community is also home to
      several parks and outdoor recreational areas, providing plenty of opportunities for
      residents to enjoy the natural beauty of the area
      <br />
      <br />
      Harvest is a close-knit community with a strong sense of community spirit. Residents
      come together for community events and celebrations throughout the year, creating a
      warm and welcoming atmosphere for all. Overall, Harvest is a great place to call
      home, offering a high quality of life, affordable housing, excellent schools, and a
      strong sense of community.
    </>
  ),
  hamptonCove: (
    <>
      Hampton Cove is a highly sought-after community in the Huntsville area due to its
      combination of natural beauty, exceptional amenities, and convenient location. This
      charming community boasts stunning mountain views, abundant green spaces, and a
      network of hiking and biking trails that wind through the surrounding natural areas.
      One of the main draws of Hampton Cove is its luxurious golf course, the Robert Trent
      Jones Golf Trail at Hampton Cove. This world-class golf course offers 54 holes of
      championship golf and is consistently ranked as one of the best public golf courses
      in the country. Beyond golf, residents of Hampton Cove can enjoy a range of other
      amenities, including a fitness center, tennis courts, and a swimming pool.
      <br />
      <br />
      In addition to its exceptional amenities, Hampton Cove is known for its excellent
      schools, making it a popular choice for families with children. The community is
      served by some of the top-rated schools in the Huntsville area, including Hampton
      Cove Elementary School, Hampton Cove Middle School, and Huntsville High School.
      Perhaps most importantly, Hampton Cove is a tight-knit community with a strong sense
      of camaraderie and neighborly spirit. With its natural beauty, exceptional
      amenities, and welcoming community, it&apos;s no wonder that Hampton Cove is such a
      special place to live.
      <br />
      <br />
      Nestled amidst the stunning natural beauty of North Alabama, Hampton Cove is a place
      where the best of urban and rural lifestyles converge. Here, residents can enjoy the
      serene surroundings of nature while still being close to the vibrant energy of city
      life. Hampton Cove truly offers the best of both worlds, making it a truly special
      and unique place to call home.
      <br />
      <br />
      Hampton Cove is a community in Huntsville, Alabama that is made up of several
      neighborhoods, each with its own unique character and charm. Some of the popular
      neighborhoods in Hampton Cove include:
      <br />
      <br />
      - Hampton Cove Golf Course Community: This neighborhood is centered around the
      Hampton Cove Golf Course and offers beautiful views of the greens and fairways.
      <br />
      - McMullen Cove: This neighborhood is located on the eastern side of Hampton Cove
      and offers stunning mountain views and a peaceful atmosphere.
      <br />
      - The Meadows: This neighborhood is located in the heart of Hampton Cove and
      features beautiful homes, tree-lined streets, and a community park.
      <br />
      - The Reserve: This gated community features luxury homes with large lots and
      stunning mountain views.
      <br />- Lake Pointe: This neighborhood is located near Hampton Cove&apos;s lake and
      offers waterfront homes and stunning views of the water and surrounding mountains.
    </>
  ),
  decatur: (
    <>
      Decatur, Alabama is a charming city located on the banks of the Tennessee River in
      northern Alabama. It offers a unique combination of Southern hospitality, natural
      beauty, and vibrant economic opportunities that make it an attractive place to live
      and work. One of the biggest draws of Decatur is its excellent quality of life. The
      city has a low cost of living, making it an affordable place to call home.
      <br />
      <br />
      It also has a strong economy, with job opportunities in a range of industries,
      including manufacturing, healthcare, and technology. Decatur is also known for its
      excellent education system. The city is home to a number of high-quality public and
      private schools, as well as higher education institutions like Calhoun Community
      College and Athens State University. In addition to its economic and educational
      opportunities, Decatur also boasts a rich cultural scene. The city is home to
      several museums, galleries, and theaters, as well as a number of annual events and
      festivals.
      <br />
      <br />
      For outdoor enthusiasts, Decatur has plenty to offer as well. The city is surrounded
      by natural beauty, including the Wheeler National Wildlife Refuge, Point Mallard
      Park, and the Tennessee River. There are also plenty of opportunities for outdoor
      recreation, such as hiking, fishing, boating, and golfing. Overall, Decatur, Alabama
      is a great place to live for those seeking a high quality of life, strong economy,
      excellent education, rich culture, and abundant natural beauty.
      <br />
      <br />
      Decatur, Alabama has several great neighborhoods to choose from depending on your
      lifestyle and preferences. Here are some of the top neighborhoods in Decatur:
      <br />
      <br />
      -Lake Morgan - Located near the beautiful Lake Morgan, this neighborhood features
      spacious homes with large yards and plenty of green space. It&apos;s perfect for
      families who love the outdoors and water activities.
      <br />
      -Point Mallard Estates - This neighborhood is adjacent to the Point Mallard
      Waterpark and golf course, making it ideal for families.
    </>
  ),
  athens: (
    <>
      Athens, AL is a charming town that seamlessly blends its rich heritage with a
      thriving industry, commerce, and restaurant scene, making it an ideal location to
      settle down, grow a family, or escape on a tranquil holiday retreat. With its highly
      recognized school system and solid presence in the growth of North Alabama, Athens
      is a mainstay that serves nearby cities and offers endless possibilities for people
      from all walks of life.
      <br />
      <br />
      With its preserved heritage and thriving industry, commerce, and restaurant scene,
      Athens is a unique and charming town. In 2019, Athens was ranked fifth among the top
      fifty safest places to live in Alabama by The Home Security Advisor, making it a
      safe choice for families. The town is also home to Athens State University, a leader
      in higher education in the area.
      <br />
      <br />
      Athens highly recognized school system and historical echoes are just a few of the
      reasons it continues to hold its place as a contender to help upgrade your life.
      Whether you&apos;re looking to set up shop, start a family, or find a tranquil
      holiday retreat, Athens is full of possibilities for every walk of life.
      <br />
      <br />
      Athens, Alabama, offers a variety of attractions and amenities that make it an ideal
      place to live. Golf enthusiasts can enjoy the Southern Gayles Golf Course and the
      Canebrake Club Golfing Community. For those who prefer fresh produce, there are
      orchards and farmers markets nearby to visit. History buffs can explore the Alabama
      Veterans Museum & Archives for a unique perspective on the past.
      <br />
      <br />
      Outdoor enthusiasts have several hiking trails and a state park to enjoy, as well as
      opportunities for rafting. With its diverse range of activities and attractions,
      Athens, Alabama, has something for everyone. Athens, AL offers a unique blend of
      small-town charm and outdoor adventures, making it an ideal destination for those
      seeking a slower pace of life. Outdoor enthusiasts can explore the picturesque Swan
      Creek Nature Trail or tee off at the scenic Canebrake Club golf course. For a
      relaxing weekend getaway, visit Wheeler State Park situated along the scenic Elk
      River. The park offers a range of lodging options and breathtaking views of the
      surrounding landscape.
      <br />
      <br />
      Some of the top neighborhoods in Athens, Alabama, include:
      <br />
      -Canebrake: This is a gated golf community with a private club, swimming pool, and
      tennis courts.
      <br />
      -The Ledges of Oakdale: A new community with beautiful homes and a lake.
      <br />
      -Cambridge Hill: A community with large homes and spacious yards.
      <br />
      -Brigadoon Village: This community offers lakefront living and a marina for boating
      enthusiasts.
      <br />
      -Beaty Historical District: A historic neighborhood with beautiful homes and mature
      trees.
      <br />
      <br />
      These neighborhoods offer a range of housing options for different budgets and
      lifestyles, and they are all located in desirable areas of Athens.
    </>
  ),
  meridianville: (
    <>
      Meridianville, Alabama offers a peaceful escape from the hustle and bustle of city
      life, while still being just a 15-minute drive away from Huntsville. With a
      population of approximately 8,000, this charming small town is perfect for those
      seeking a quieter pace of life. Meridianville is a great place for families as it
      offers plenty of space to explore and new construction projects in family-friendly
      neighborhoods
      <br />
      <br />
      Meridianville is an excellent choice for homebuyers seeking a tranquil retreat while
      still enjoying easy access to nearby cities. With just a 15-minute commute to
      Huntsville, Meridianville residents can easily access city life without sacrificing
      peace, quiet, and community. This small town boasts approximately 8,000 residents,
      making it ideal for those interested in a slower-paced lifestyle.
      <br />
      <br />
      One of the most appealing aspects of Meridianville is the affordability of its real
      estate market. Home prices in this area are lower than the national average, which
      is great news for first-time homebuyers and those looking to upgrade to a larger
      home. Meridianville has a mix of historic homes and new construction projects in
      family-friendly subdivisions, providing a wide range of options for buyers.
      <br />
      <br />
      Meridianville offers a small-town feel with easy access to nearby cities and a lower
      cost of living. If you&apos;re looking for a peaceful and affordable community,
      Meridianville may be the perfect place to call home.
      <br />
      <br />
      Families considering relocating to Meridianville, Alabama will be pleased to know
      that the community boasts several highly-rated schools, all falling under the
      Madison County Schools district. The area is home to four public schools, catering
      to all grades from elementary to high school. In addition to quality education,
      Meridianville offers residents access to a variety of amenities, including
      restaurants, shops, and a Publix supermarket.
      <br />
      <br />
      In addition to its highly-rated schools and convenient access to amenities,
      Meridianville, Alabama is located just a short drive away from the Huntsville
      International Airport and the Cummings Research Park, making it an attractive
      location for professionals and families alike who may need to travel frequently or
      work in these areas.
    </>
  ),
}

export function About({ communityName }: AboutProps) {
  const isHamptonCove = communityName === 'hampton cove'
  return (
    <S.Section hasMaxWidth id={`about-${communityName.toLowerCase()}`}>
      <S.Title>
        {communityName === 'huntsville' ? 'Welcome' : 'About'}{' '}
        <S.Community>{communityName}</S.Community>
      </S.Title>
      <S.Paragraph>{texts[isHamptonCove ? 'hamptonCove' : communityName]}</S.Paragraph>
    </S.Section>
  )
}
