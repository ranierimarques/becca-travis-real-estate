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
      Huntsville is a city of distinct places. Downtown puts parks, restaurants, museums,
      and historic streets close together. Beyond the center, neighborhoods stretch toward
      mountain trails, shopping districts, and the communities of the Tennessee Valley. A
      good home search begins with the routines and places that matter to you.
      <br />
      <br />
      <strong>Explore the historic heart.</strong> Twickenham, Old Town, and Five Points
      each tell a different part of the city&apos;s story. Twickenham includes homes from
      the early 1800s, while Old Town and Five Points reflect later periods of growth. If
      you are considering a historic property, ask about the rules that apply to its
      exterior before planning renovations. The{' '}
      <a href="https://www.huntsvilleal.gov/development/building-construction/historic-preservation/history/">
        City of Huntsville&apos;s historic district guide
      </a>{' '}
      is a useful place to begin.
      <br />
      <br />
      <strong>Make time for the outdoors.</strong> Big Spring International Park is in the
      heart of downtown. Monte Sano State Park offers a different setting in the
      mountains, with trails and opportunities to stay overnight. Explore the{' '}
      <a href="https://www.alapark.com/parks/monte-sano-state-park">
        state park&apos;s visitor information
      </a>{' '}
      for current access and hours.
      <br />
      <br />
      <strong>Look beyond a neighborhood name.</strong> Huntsville&apos;s areas include
      Jones Valley, the Village of Providence, MidCity, South Huntsville, West Huntsville,
      and Hampton Cove. Each has its own mix of places to visit and homes to explore. The{' '}
      <a href="https://www.huntsville.org/rocket-city/districts-neighborhoods/">
        Huntsville visitor bureau&apos;s district guide
      </a>{' '}
      is a helpful introduction as you narrow your search.
      <br />
      <br />
      <strong>Check the details for the actual address.</strong> School zones, city
      services, zoning, and commute times can vary from one property to another. The{' '}
      <a href="https://maps.huntsvilleal.gov/welcome/">city&apos;s map gallery</a> offers
      tools for exploring locations, and the relevant school district can confirm current
      attendance information. I would be happy to help you compare the areas that fit the
      way you want to live.
    </>
  ),
  harvest: (
    <>
      Harvest offers a place to explore northwest of Huntsville, with a mix of established
      homes and newer communities across the wider area. When you visit, take time to
      compare the setting around each property, from neighborhood streets to the roads you
      would use every day.
      <br />
      <br />
      <strong>A place to get outside.</strong>{' '}
      <a href="https://landtrustnal.org/explore-our-lands/preserves-north-alabama/harvest-square-preserve/">
        Harvest Square Nature Preserve
      </a>{' '}
      has trails, ponds, and a picnic pavilion. The Land Trust describes accessible
      crushed gravel trails and provides a map and current visitor information.
      <br />
      <br />
      <strong>Before you choose a home.</strong> Ask about the address, school assignment,
      utilities, any neighborhood association rules, and your actual drive to work or the
      places you visit most. Those details can differ within a broad community name. I can
      help you compare individual homes and plan a visit.
    </>
  ),
  hamptonCove: (
    <>
      Hampton Cove sits within the larger Big Cove area, where mountain scenery,
      residential neighborhoods, and outdoor places shape the experience of living east of
      central Huntsville. The area includes more than one neighborhood, so a visit to the
      specific streets you are considering is worthwhile.
      <br />
      <br />
      <strong>Along the water and trails.</strong> The City of Huntsville describes{' '}
      <a href="https://www.huntsvilleal.gov/environment/green-team/nature-preserves/hays-nature-preserve/">
        Hays Nature Preserve
      </a>{' '}
      as a network of trails and greenways along the Flint River. The{' '}
      <a href="https://www.huntsvilleal.gov/locations/flint-river-greenway/">
        Flint River Greenway
      </a>{' '}
      connects with nearby greenway and preserve routes.
      <br />
      <br />
      <strong>Explore with the details in mind.</strong> If a home is part of an
      association, ask for its current fees, rules, and amenity access. Confirm school
      assignments and city services for the exact address. I can help you look at the
      differences between communities and homes in the Cove.
    </>
  ),
  decatur: (
    <>
      Decatur sits along the Tennessee River and gives a home search a different point of
      view from the Huntsville city center. A visit can include downtown, residential
      streets, and the riverfront before you compare individual properties.
      <br />
      <br />
      <strong>Discover the outdoors.</strong>{' '}
      <a href="https://www.decatur-al.gov/government/departments/parks_recreation/point_mallard.php">
        Point Mallard Park
      </a>{' '}
      is one of the city&apos;s recreation destinations. The{' '}
      <a href="https://www.fws.gov/refuge/wheeler">Wheeler National Wildlife Refuge</a>{' '}
      offers another way to experience the Tennessee Valley landscape. Check each
      destination for current access and seasonal conditions.
      <br />
      <br />
      <strong>Consider the whole journey.</strong> Compare the routes you would travel
      regularly and verify the schools, services, flood information, and property details
      that apply to each address. I can help you explore Decatur and nearby communities
      with your priorities in mind.
    </>
  ),
  athens: (
    <>
      Athens combines a historic downtown setting with access to the surrounding Limestone
      County countryside. Begin with a visit to the courthouse square, then spend time on
      the nearby streets and in the areas where you are considering a home.
      <br />
      <br />
      <strong>Start near the square.</strong> The{' '}
      <a href="https://www.visitathensal.com/contact-us.html">
        Athens and Limestone County Visitors Center
      </a>{' '}
      is near Big Spring Memorial Park and a short distance from the courthouse square. It
      is a useful starting point for current local information and ideas for exploring.
      <br />
      <br />
      <strong>Choose by address, not just by area.</strong> Consider the route to your
      usual destinations, the setting around the property, and any neighborhood rules.
      Confirm school assignment, utilities, and other services for the individual home. I
      can help you compare Athens with other places across North Alabama.
    </>
  ),
  meridianville: (
    <>
      Meridianville is a community north of Huntsville. When you visit, explore the
      surrounding neighborhoods as well as the routes you would use for work, errands, and
      the places you enjoy.
      <br />
      <br />
      <strong>Explore the area.</strong> The{' '}
      <a href="https://choosehuntsville.com/live-here/neighborhoods/meridianville/">
        Choose Huntsville community guide
      </a>{' '}
      describes local neighborhoods and places to visit. The Land Trust of North Alabama
      also provides information about nearby Wade Mountain Nature Preserve.
      <br />
      <br />
      <strong>Look at the details.</strong> School assignments, utilities, lot features,
      and travel times depend on the specific property. I can help you compare homes and
      verify the details that matter to your search.
    </>
  ),
}

export function About({ communityName }: AboutProps) {
  const isHamptonCove = communityName === 'hampton cove'
  return (
    <S.Section hasMaxWidth id={`about-${communityName.toLowerCase()}`}>
      <S.Title>
        {communityName === 'huntsville' ? 'Welcome to' : 'About'}{' '}
        <S.Community>{communityName}</S.Community>
      </S.Title>
      <S.Paragraph>{texts[isHamptonCove ? 'hamptonCove' : communityName]}</S.Paragraph>
      {communityName === 'huntsville' && (
        <>
          <S.Highlights aria-label="Huntsville guide at a glance">
            <div>
              <strong>History</strong>
              <span>Twickenham, Old Town and Five Points</span>
            </div>
            <div>
              <strong>Outdoors</strong>
              <span>Monte Sano and the city greenways</span>
            </div>
            <div>
              <strong>Plan your search</strong>
              <span>Check schools and services by address</span>
            </div>
          </S.Highlights>
        </>
      )}
    </S.Section>
  )
}
