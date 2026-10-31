const locations: Record<string, string> = {
  huntsville: 'Huntsville, Alabama',
  athens: 'Athens, Alabama',
  harvest: 'Harvest, Alabama',
  'hampton cove': 'Owens Cross Roads, Alabama 35763',
  decatur: 'Decatur, Alabama',
  meridianville: 'Meridianville, Alabama',
}

const categories: Record<string, string> = {
  dining: 'restaurants',
  active: 'active',
  nightlife: 'nightlife',
  shopping: 'shopping',
}

export function getYelpSearchParams(
  community: string,
  category: string,
  offset = 0,
  limit = 6
) {
  const normalizedCommunity = community.trim().toLowerCase().replace(/-/g, ' ')
  const location = locations[normalizedCommunity]
  const categoryAlias = categories[category]
  if (!location || !categoryAlias) return null

  const params = new URLSearchParams({
    categories: categoryAlias,
    location,
    sort_by: 'review_count',
    limit: String(Math.min(Math.max(limit, 1), 20)),
    offset: String(Math.min(Math.max(offset, 0), 100)),
  })

  // A short search radius keeps the Cove guide centered on its nearby area.
  if (normalizedCommunity === 'hampton cove') params.set('radius', '10000')

  return params
}

export function isAlabamaBusiness(business: {
  is_closed?: boolean
  location?: { state?: string }
}) {
  return business.location?.state === 'AL' && !business.is_closed
}
