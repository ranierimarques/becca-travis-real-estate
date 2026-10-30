export type AreaGuide = {
  slug: string
  name: string
  introduction: string
  explore: string
  homeSearch: string
  source: string
  sourceName: string
  details?: { heading: string; text: string; source: string; sourceName: string }[]
}

const historic =
  'https://www.huntsvilleal.gov/development/building-construction/historic-preservation/history/'
const districts = 'https://www.huntsville.org/rocket-city/districts-neighborhoods/'
const county =
  'https://www.madisoncountyal.gov/residents/advanced-components/list-detail-pages/facility-directory-table-list/-sortn-FCAvailability/-sortd-asc'

export const areaGuides: AreaGuide[] = [
  {
    slug: 'lincoln-mill',
    name: 'Lincoln Mill',
    introduction:
      'Lincoln Mill brings together Huntsville’s textile history, space age ingenuity and a district that continues to find new uses for its historic buildings.',
    explore:
      'Start with the mill campus on Meridian Street, then spend time exploring the surrounding village and local businesses. Look closely at the industrial architecture and the residential streets that tell a different part of the area’s story.',
    homeSearch:
      'Compare individual properties rather than relying on a neighborhood label. Ask about a home’s condition, renovation history, parking and the routes you will use every day. For an older property, investigate any preservation requirements before making plans for exterior work.',
    source:
      'https://www.huntsville.org/rocket-city/districts-neighborhoods/lincoln-mill/',
    sourceName: 'Huntsville visitor bureau, Lincoln Mill',
    details: [
      {
        heading: 'From textile mill to a center for innovation',
        text: 'The mill opened in 1900 as Madison Spinning Company and later became Lincoln Mill. After its textile era, the buildings found new life as offices used by engineers working on Huntsville’s early space and missile programs. The campus also played a role in development of NASA’s Lunar Rover.',
        source: 'https://lincolnmill.com/history/',
        sourceName: 'Lincoln Mill history',
      },
      {
        heading: 'A neighborhood with a story',
        text: 'The mill and its surrounding village are part of Huntsville’s broader industrial heritage. When you visit, allow time to see both the campus and nearby streets, and check current opening hours before visiting any business.',
        source:
          'https://www.huntsville.org/rocket-city/districts-neighborhoods/lincoln-mill/',
        sourceName: 'Huntsville visitor bureau',
      },
    ],
  },
  {
    slug: 'downtown-huntsville',
    name: 'Downtown Huntsville',
    introduction:
      'Downtown brings Huntsville’s historic streets, cultural venues, restaurants and civic spaces into one walkable core.',
    explore:
      'Spend time around Big Spring International Park and the courthouse square. The visitor bureau also describes the nearby historic neighborhoods, each with its own architectural character.',
    homeSearch:
      'Compare homes and residences by their actual surroundings, parking needs and route to the places you visit. For historic properties, check whether exterior changes require review.',
    source:
      'https://www.huntsville.org/rocket-city/districts-neighborhoods/downtown/neighborhoods/',
    sourceName: 'Huntsville visitor bureau, downtown neighborhoods',
  },
  {
    slug: 'twickenham',
    name: 'Twickenham',
    introduction:
      'Twickenham is a historic Huntsville district with homes representing several periods of American architecture.',
    explore:
      'The city identifies Twickenham as its first historic preservation district. Explore the streets near downtown and look at the architecture from the public sidewalks.',
    homeSearch:
      'Review the history and condition of each home, and check city preservation requirements before planning exterior alterations.',
    source: historic,
    sourceName: 'City of Huntsville, historic districts',
  },
  {
    slug: 'old-town',
    name: 'Old Town',
    introduction:
      'Old Town is one of Huntsville’s locally designated historic districts, near the center of the city.',
    explore:
      'The city describes a district with homes from several eras, including Victorian, Colonial Revival and bungalow styles. Visit the streets in person to see how the homes and surroundings differ.',
    homeSearch:
      'Ask about the property’s age, maintenance history and any historic district requirements that apply to proposed exterior work.',
    source: historic,
    sourceName: 'City of Huntsville, historic districts',
  },
  {
    slug: 'five-points',
    name: 'Five Points',
    introduction:
      'Five Points is a historic district east of downtown Huntsville with streets that reflect the city’s early twentieth century growth.',
    explore:
      'The visitor bureau highlights a mix of bungalow, Victorian, Cape Cod and ranch styles in the area. Make time to explore its streets and local businesses.',
    homeSearch:
      'Compare the age and condition of individual homes, parking, renovation plans and the route you would use to reach downtown.',
    source:
      'https://www.huntsville.org/rocket-city/districts-neighborhoods/downtown/neighborhoods/',
    sourceName: 'Huntsville visitor bureau, downtown neighborhoods',
  },
  {
    slug: 'blossomwood',
    name: 'Blossomwood',
    introduction:
      'Blossomwood is a Huntsville community near downtown and Monte Sano Mountain.',
    explore:
      'Choose Huntsville describes a mix of older homes and newer construction within the broader Blossomwood area. Explore the streets and the routes that connect the neighborhood with downtown.',
    homeSearch:
      'A property’s lot, slope, renovation history and school assignment can matter as much as its neighborhood name. Review each address on its own merits.',
    source: 'https://choosehuntsville.com/live-here/neighborhoods/downtown-huntsville/',
    sourceName: 'Choose Huntsville, downtown and Blossomwood',
  },
  {
    slug: 'jones-valley',
    name: 'Jones Valley',
    introduction:
      'Jones Valley is a Huntsville area south of downtown with several residential communities and access to shopping.',
    explore:
      'Choose Huntsville identifies a range of homes and neighborhoods in the area, including Jones Valley Estates and Jones Valley Gardens. Compare the setting around the specific streets on your list.',
    homeSearch:
      'Ask about the property’s layout, lot, association rules when applicable, and the everyday drive to your preferred destinations.',
    source: 'https://choosehuntsville.com/live-here/neighborhoods/jones-valley/',
    sourceName: 'Choose Huntsville, Jones Valley',
  },
  {
    slug: 'village-of-providence',
    name: 'Village of Providence',
    introduction:
      'The Village of Providence is a Huntsville district with homes and a village center containing places to shop and dine.',
    explore:
      'The Huntsville visitor bureau includes Providence among its city districts. Walk the village center and then visit the residential streets to see how the setting changes.',
    homeSearch:
      'Check the specific home’s association documents, parking, fees and amenity arrangements. Availability and rules depend on the property.',
    source: districts,
    sourceName: 'Huntsville visitor bureau, districts',
  },
  {
    slug: 'midcity',
    name: 'MidCity',
    introduction:
      'MidCity is a Huntsville district known for a mix of entertainment, dining and shopping destinations.',
    explore:
      'Look at the visitor bureau’s MidCity district resources for current venues and events, then consider how the surrounding residential options fit your daily routine.',
    homeSearch:
      'When comparing a nearby home, test the actual drive and check access, parking and any planned changes around the property.',
    source: districts,
    sourceName: 'Huntsville visitor bureau, districts',
  },
  {
    slug: 'west-huntsville',
    name: 'West Huntsville',
    introduction:
      'West Huntsville encompasses a broad part of the city with a mix of residential streets and cultural destinations.',
    explore:
      'The visitor bureau identifies West Huntsville and the Lowe Mill district as places to explore. Spend time in more than one part of the area before deciding which streets fit your search.',
    homeSearch:
      'Compare homes individually for age, updates, nearby roads and the route to work or other regular destinations.',
    source: districts,
    sourceName: 'Huntsville visitor bureau, districts',
  },
  {
    slug: 'south-huntsville',
    name: 'South Huntsville',
    introduction:
      'South Huntsville covers a broad area of neighborhoods between the city center and the Tennessee River corridor.',
    explore:
      'The visitor bureau’s district guide is a useful starting point for local destinations. Visit different parts of the area because a broad area name does not describe every street.',
    homeSearch:
      'Compare the property’s setting, commute and access to the places you use. Verify school assignment and city services for the exact address.',
    source: districts,
    sourceName: 'Huntsville visitor bureau, districts',
  },
  {
    slug: 'monte-sano',
    name: 'Monte Sano',
    introduction:
      'Monte Sano is a mountain area associated with Huntsville and its outdoor spaces.',
    explore:
      'Monte Sano State Park offers trails, cabins and camping. Its official visitor page provides current hours and guidance for planning a visit.',
    homeSearch:
      'For a mountain property, consider slope, drainage, access, insurance and maintenance alongside the home itself. Check applicable rules for the exact parcel.',
    source: 'https://www.alapark.com/parks/monte-sano-state-park',
    sourceName: 'Alabama State Parks, Monte Sano',
  },
  {
    slug: 'big-cove',
    name: 'Big Cove',
    introduction:
      'Big Cove is a broader area east of central Huntsville that includes several named communities.',
    explore:
      'Choose Huntsville describes Hampton Cove and McMullen Cove within the Big Cove area. The city’s Hays Nature Preserve offers trails near the Flint River.',
    homeSearch:
      'Distinguish the broader area from the individual subdivision. Check association documents, schools and services for the exact address.',
    source: 'https://choosehuntsville.com/live-here/neighborhoods/big-cove/',
    sourceName: 'Choose Huntsville, Big Cove',
  },
  {
    slug: 'mcmullen-cove',
    name: 'McMullen Cove',
    introduction: 'McMullen Cove is a residential community in the larger Big Cove area.',
    explore:
      'Choose Huntsville lists McMullen Cove among the communities in Big Cove. Explore the neighborhood and its surrounding mountain landscape in person.',
    homeSearch:
      'Request current association documents and verify fees, access, rules and amenities for the specific home before making a decision.',
    source: 'https://choosehuntsville.com/live-here/neighborhoods/big-cove/',
    sourceName: 'Choose Huntsville, Big Cove',
  },
  {
    slug: 'owens-cross-roads',
    name: 'Owens Cross Roads',
    introduction:
      'Owens Cross Roads is a North Alabama town and a name used in addresses in the wider Cove area.',
    explore:
      'The area has connections to Big Cove and the communities east of Huntsville. Spend time in the town and around the individual properties you want to compare.',
    homeSearch:
      'A mailing address alone does not settle city boundaries, services or school assignments. Verify jurisdiction and other details for the property.',
    source: 'https://choosehuntsville.com/live-here/neighborhoods/owens-cross-roads/',
    sourceName: 'Choose Huntsville, Owens Cross Roads',
  },
  {
    slug: 'madison',
    name: 'Madison',
    introduction:
      'Madison has a historic downtown and a range of residential areas within the Huntsville region.',
    explore:
      'Visit the downtown area, then explore the city’s parks and the Town Madison district. The visitor bureau offers a useful guide to the city.',
    homeSearch:
      'Compare city boundaries, school assignments, neighborhood rules and the routes you would use most often. Confirm each detail for the address.',
    source: 'https://www.huntsville.org/rocket-city/our-cities/madison/',
    sourceName: 'Huntsville visitor bureau, Madison',
  },
  {
    slug: 'town-madison',
    name: 'Town Madison',
    introduction:
      'Town Madison is a mixed use district in Madison with housing, shops, restaurants and Toyota Field.',
    explore:
      'Madison’s published city profile identifies Town Madison as a district with a variety of housing and entertainment uses. Visit at different times to understand its activity and parking.',
    homeSearch:
      'Compare the type of home, parking, community fees and access to amenities for the specific property you are considering.',
    source: 'https://www.madisonal.gov/DocumentCenter/View/12248/Profile-Summary-2023',
    sourceName: 'City of Madison, community profile',
  },
  {
    slug: 'clift-farm',
    name: 'Clift Farm',
    introduction: 'Clift Farm is a mixed use community in the Madison area.',
    explore:
      'Choose Huntsville describes residential and commercial uses at Clift Farm. Spend time in the community and its surrounding streets to understand the setting.',
    homeSearch:
      'Ask about the current association rules, fees, parking and access to shared amenities for the home you are considering.',
    source: 'https://choosehuntsville.com/live-here/neighborhoods/madison/',
    sourceName: 'Choose Huntsville, Madison area',
  },
  {
    slug: 'hazel-green',
    name: 'Hazel Green',
    introduction: 'Hazel Green is a community in northern Madison County.',
    explore:
      'Madison County lists a recreation center in Hazel Green. Check current schedules and explore the surrounding roads and local services during a visit.',
    homeSearch:
      'Look closely at the exact property, including its utility providers, road access, school assignment and the route to your regular destinations.',
    source: county,
    sourceName: 'Madison County facility directory',
  },
  {
    slug: 'toney',
    name: 'Toney',
    introduction:
      'Toney is a community in northern Madison County with a range of properties across a broad area.',
    explore:
      'Madison County lists the Madison Cross Roads Community Center in Toney. Use the county directory as a starting point for local services and verify current information.',
    homeSearch:
      'Compare acreage, utilities, maintenance and travel routes for each address. A broad community name cannot substitute for checking the parcel.',
    source: county,
    sourceName: 'Madison County facility directory',
  },
  {
    slug: 'new-market',
    name: 'New Market',
    introduction: 'New Market is a community in Madison County northeast of Huntsville.',
    explore:
      'Madison County lists Sharon Johnston Park in New Market. Check the county’s current information before visiting and explore the roads around any home you are considering.',
    homeSearch:
      'Review the individual property’s lot, utilities, access, school assignment and commute. These details can vary across a wide area.',
    source: county,
    sourceName: 'Madison County facility directory',
  },
  {
    slug: 'gurley',
    name: 'Gurley',
    introduction: 'Gurley is a town in Madison County east of Huntsville.',
    explore:
      'The county facility directory lists the Gurley Recreation and Community Center. A visit gives you a chance to see the town and its surroundings for yourself.',
    homeSearch:
      'Check the boundaries, services and features of the specific property. Consider your usual routes through the area when comparing locations.',
    source: county,
    sourceName: 'Madison County facility directory',
  },
  {
    slug: 'hartselle',
    name: 'Hartselle',
    introduction:
      'Hartselle is a North Alabama city with a downtown area and residential communities to explore.',
    explore:
      'Alabama’s tourism guide highlights downtown shops and dining. Visit the center of town and then compare the surrounding neighborhoods.',
    homeSearch:
      'Consider the individual home’s condition, services, neighborhood requirements and the actual routes to your regular destinations.',
    source: 'https://alabama.travel/places-to-go/cities-and-towns/hartselle/',
    sourceName: 'Alabama Travel, Hartselle',
  },
  {
    slug: 'guntersville',
    name: 'Guntersville',
    introduction: 'Guntersville sits alongside Lake Guntersville in North Alabama.',
    explore:
      'The state tourism guide identifies Lake Guntersville State Park as a place for trails and water recreation. Check official park information for current conditions.',
    homeSearch:
      'For any property near the water, verify the parcel, shoreline access, flood information and applicable rules rather than relying on a general area description.',
    source: 'https://alabama.travel/places-to-go/cities-and-towns/guntersville/',
    sourceName: 'Alabama Travel, Guntersville',
  },
  {
    slug: 'scottsboro',
    name: 'Scottsboro',
    introduction:
      'Scottsboro is a North Alabama city with local history, shops and access to the Lake Guntersville region.',
    explore:
      'Alabama Travel highlights the Scottsboro Boys Museum, the Scottsboro Railroad Depot Museum and local outdoor destinations. Confirm hours before you visit.',
    homeSearch:
      'Compare the location and features of each home, including any property specific flood or waterfront considerations, utilities and the routes you use regularly.',
    source: 'https://alabama.travel/places-to-go/cities-and-towns/scottsboro/',
    sourceName: 'Alabama Travel, Scottsboro',
  },
]
