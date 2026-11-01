import Head from 'next/head'
import Image from 'next/image'
import { MetaSEO } from '@/common'
import * as S from '@/resources/community-guides/madison.styles'

const contactHref = '/contact-us?intent=area-help&area=Madison'

const places = [
  {
    number: '01',
    title: 'Historic Madison Station',
    text: 'Start on Main Street near Wall Triana Highway. The city traces this historic district to the original rail stop. Walk the blocks, then notice how the surrounding residential streets change as you leave downtown.',
    source:
      'https://www.madisonal.gov/DocumentCenter/View/10200/Madison-Station---2017?bidId=',
    sourceLabel: 'City history',
  },
  {
    number: '02',
    title: 'Parks and trails',
    text: 'Dublin Park has a paved walking trail and recreation facilities. For a different outing, Rainbow Mountain Preserve has rocky trails and the Balance Rock formation. Check conditions and access before you go.',
    source: 'https://www.madisonal.gov/facilities/Facility/Details/352',
    sourceLabel: 'Dublin Park',
    secondSource:
      'https://landtrustnal.org/explore-our-lands/preserves-north-alabama/rainbow-mountain-preserve/',
    secondSourceLabel: 'Rainbow Mountain',
  },
  {
    number: '03',
    title: 'A local calendar',
    text: 'The Madison Street Festival fills historic downtown with arts, food and exhibits. The Madison City Farmers Market is a producer only market. Check each organizer for its current calendar before planning a visit.',
    source: 'https://madisonstreetfestival.org/',
    sourceLabel: 'Street Festival',
    secondSource: 'https://madisoncityfarmersmarket.com/index.html',
    secondSourceLabel: 'Farmers Market',
  },
] as const

const searchAreas = [
  {
    title: 'Downtown and established streets',
    text: 'Look at the home itself as closely as the setting: renovation history, parking, lot conditions and any historic district rules that apply to the address.',
    source:
      'https://www.madisonal.gov/DocumentCenter/View/10223/HistoricMadisonStationGuidelines',
    sourceLabel: 'Historic district guidance',
  },
  {
    title: 'Clift Farm and Highway 72',
    text: 'Clift Farm combines homes with shopping and dining on land once used as a farm. Compare the specific home, association documents and the roads you would use most often.',
    source: 'https://cliftfarm.com/explore',
    sourceLabel: 'Clift Farm overview',
  },
  {
    title: 'Town Madison and Toyota Field',
    text: 'Town Madison is a developing district around Toyota Field. Visit on a regular day and an event day to compare traffic, parking and the feel of the exact block.',
    source: 'https://www.madisonal.gov/1153/Town-Madison-Toyota-Field',
    sourceLabel: 'City district overview',
  },
] as const

const buyerChecks = [
  {
    title: 'Confirm the address',
    text: 'A Madison mailing address does not establish the school zone. Use the district locator and county tax record for each property.',
    source: 'https://www.madisoncity.k12.al.us/school-zones-2',
    sourceLabel: 'School zone locator',
  },
  {
    title: 'Test your real route',
    text: 'Drive from a potential home to the places you visit regularly at the times you would normally travel.',
  },
  {
    title: 'Read the property documents',
    text: 'Compare condition, lot details, utility providers, association fees and rules for the actual home before you decide.',
  },
] as const

export default function MadisonAreaPage() {
  return (
    <S.Page>
      <MetaSEO
        canonicalPath="/areas/madison"
        title="Madison, Alabama Home Search and Local Guide | Becca Travis"
        description="Explore historic Madison Station, Dublin Park, Rainbow Mountain, Clift Farm and Town Madison. Use a practical checklist to compare Madison homes by address."
        image="/images/areas/madison-station-2024.jpg"
        alt="Historic downtown Madison, Alabama storefronts"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Madison, Alabama Home Search and Local Guide',
              url: 'https://beccatravis.com/areas/madison',
              description:
                'An original guide to exploring Madison, Alabama and comparing homes by address.',
              about: {
                '@type': 'Place',
                name: 'Madison, Alabama',
              },
            }),
          }}
        />
      </Head>

      <S.Hero>
        <S.HeroInner>
          <S.HeroCopy>
            <S.Eyebrow>Madison, Alabama area guide</S.Eyebrow>
            <S.Title>See Madison beyond the listing photos.</S.Title>
            <S.Lede>
              Historic streets, outdoor stops and newer districts give you more than one
              way to get to know Madison. Use this guide to explore, then compare homes by
              the address and details that matter to you.
            </S.Lede>
            <S.HeroActions>
              <S.PrimaryAction href={contactHref}>
                Request a Madison shortlist
              </S.PrimaryAction>
              <S.TextAction href="#explore">Explore the guide</S.TextAction>
            </S.HeroActions>
          </S.HeroCopy>
          <S.HeroPhoto>
            <S.HeroImage>
              <Image
                src="/images/areas/madison-station-2024.jpg"
                alt="Storefronts along a street in historic downtown Madison, Alabama"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 48vw"
              />
            </S.HeroImage>
            <figcaption>
              Historic downtown Madison. Photo by{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Madison_Alabama_Downtown_2024.jpg">
                Republic of Selmaria
              </a>
              , resized.{' '}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY SA 4.0</a>.
            </figcaption>
          </S.HeroPhoto>
        </S.HeroInner>
      </S.Hero>

      <S.JumpNav aria-label="Madison guide sections">
        <S.JumpInner>
          <a href="#explore">Explore Madison</a>
          <a href="#home-search">Compare areas</a>
          <a href="#buyer-checklist">Buyer checklist</a>
          <a href="#questions">Questions</a>
        </S.JumpInner>
      </S.JumpNav>

      <S.Section id="explore">
        <S.SectionTop>
          <S.SectionEyebrow>Get a feel for the place</S.SectionEyebrow>
          <S.SectionTitle>Three good starting points</S.SectionTitle>
          <S.SectionIntro>
            The places in Becca’s original Madison guide are a useful way to plan your
            first visit. Here is what to look for and where to check current details.
          </S.SectionIntro>
        </S.SectionTop>
        <S.PlaceGrid>
          {places.map(place => (
            <S.PlaceCard key={place.title}>
              <S.Number>{place.number}</S.Number>
              <h3>{place.title}</h3>
              <p>{place.text}</p>
              <S.SourceLine>
                <a href={place.source}>{place.sourceLabel}</a>
                {'secondSource' in place && (
                  <>
                    <span aria-hidden="true">·</span>
                    <a href={place.secondSource}>{place.secondSourceLabel}</a>
                  </>
                )}
              </S.SourceLine>
            </S.PlaceCard>
          ))}
        </S.PlaceGrid>
      </S.Section>

      <S.PhotoBand>
        <S.PhotoBandInner>
          <S.FieldPhoto>
            <S.FieldImage>
              <Image
                src="/images/areas/toyota-field-2025.jpg"
                alt="Rocket City Trash Pandas game at Toyota Field in Madison"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </S.FieldImage>
            <figcaption>
              Toyota Field in 2025. Photo by{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Rocket_City_Trash_Pandas_vs_Chattanooga_Lookouts,_Madison_AL_June_2025.jpg">
                Paul Lowry
              </a>
              , resized.{' '}
              <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.
            </figcaption>
          </S.FieldPhoto>
          <S.PhotoBandCopy>
            <S.SectionEyebrow>Town Madison</S.SectionEyebrow>
            <S.SectionTitle>See the district on a game day.</S.SectionTitle>
            <p>
              Toyota Field is home to the Rocket City Trash Pandas. The surrounding Town
              Madison district is still developing, so a visit at different times can tell
              you more about parking, traffic and nearby activity than a map alone.
            </p>
            <a href="https://www.madisonal.gov/1153/Town-Madison-Toyota-Field">
              City of Madison district overview
            </a>
          </S.PhotoBandCopy>
        </S.PhotoBandInner>
      </S.PhotoBand>

      <S.Section id="home-search">
        <S.SectionTop>
          <S.SectionEyebrow>Where to look</S.SectionEyebrow>
          <S.SectionTitle>Compare the setting, then the home.</S.SectionTitle>
          <S.SectionIntro>
            These are three different starting points for a Madison area search. A name or
            ZIP code alone cannot tell you what applies to a particular property.
          </S.SectionIntro>
        </S.SectionTop>
        <S.AreaGrid>
          {searchAreas.map(area => (
            <S.AreaCard key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <a href={area.source}>{area.sourceLabel}</a>
            </S.AreaCard>
          ))}
        </S.AreaGrid>
      </S.Section>

      <S.ChecklistSection id="buyer-checklist">
        <S.ChecklistInner>
          <S.ChecklistHeader>
            <S.SectionEyebrow>Before you choose a home</S.SectionEyebrow>
            <S.SectionTitle>Three checks that make a search useful</S.SectionTitle>
            <p>
              Use these questions while comparing listings. Becca can help you organize
              the answers for the homes you actually want to see.
            </p>
            <S.PrimaryAction href={contactHref}>
              Ask Becca to compare Madison homes
            </S.PrimaryAction>
          </S.ChecklistHeader>
          <S.Checklist>
            {buyerChecks.map((check, index) => (
              <li key={check.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{check.title}</h3>
                  <p>{check.text}</p>
                  {'source' in check && <a href={check.source}>{check.sourceLabel}</a>}
                </div>
              </li>
            ))}
          </S.Checklist>
        </S.ChecklistInner>
      </S.ChecklistSection>

      <S.Section id="questions">
        <S.SectionTop>
          <S.SectionEyebrow>Quick answers</S.SectionEyebrow>
          <S.SectionTitle>Questions buyers ask about Madison</S.SectionTitle>
        </S.SectionTop>
        <S.FaqGrid>
          <S.FaqItem>
            <h3>Does a Madison address mean Madison City Schools?</h3>
            <p>
              No. Confirm the assigned district and school for the exact address using{' '}
              <a href="https://www.madisoncity.k12.al.us/school-zones-2">
                Madison City Schools’ locator
              </a>
              . The district also links to county tax records for checking boundaries.
            </p>
          </S.FaqItem>
          <S.FaqItem>
            <h3>Is Clift Farm an active farm attraction?</h3>
            <p>
              <a href="https://cliftfarm.com/explore">Clift Farm describes itself</a> as a
              mixed use community built on former farmland, with residential and
              commercial areas. Check current businesses and amenities before visiting.
            </p>
          </S.FaqItem>
          <S.FaqItem>
            <h3>Where should I start if I like outdoor time?</h3>
            <p>
              Look at the{' '}
              <a href="https://www.madisonal.gov/681/Greenways-Trails">
                city’s greenways and trails
              </a>
              , Dublin Park and the{' '}
              <a href="https://landtrustnal.org/explore-our-lands/preserves-north-alabama/rainbow-mountain-preserve/">
                Rainbow Mountain trail map
              </a>
              . Compare trail access from each home rather than assuming every Madison
              address is equally close.
            </p>
          </S.FaqItem>
          <S.FaqItem>
            <h3>Can Becca help narrow my search?</h3>
            <p>
              Yes. Share your preferred home style, price range, timing and regular
              destinations, and Becca can help compare candidate properties and next
              steps.
            </p>
          </S.FaqItem>
        </S.FaqGrid>
        <S.EndAction>
          <div>
            <h2>Ready to make Madison more specific?</h2>
            <p>Tell Becca what you want in a home and what you need to compare.</p>
          </div>
          <S.PrimaryAction href={contactHref}>Start with my priorities</S.PrimaryAction>
        </S.EndAction>
      </S.Section>
    </S.Page>
  )
}
