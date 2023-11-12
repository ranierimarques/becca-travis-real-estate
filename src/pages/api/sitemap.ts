// import { NextApiRequest, NextApiResponse } from 'next'
// import { createClient } from '@supabase/supabase-js'
// import fs from 'node:fs'
// import { create } from 'xmlbuilder2'
// import { convertToSlug } from '@/resources/utils/convert'
// import { HouseCard } from '@/services/house-listings/types'

// const supabaseUrl = 'https://nxgdermerwvlhkcxxphb.supabase.co'
// const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY)

// // Upload file using standard upload
// async function uploadFile(file: any) {
//   const { data, error } = await supabase.storage
//     .from('sitemaps')
//     .upload('sitemap.xml', file)
//   if (error) {
//     // Handle error
//     console.log(error)
//   } else {
//     // Handle success
//     console.log('worked!')
//   }
// }

// const MAX_URLS = 7000

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   let xmlStr = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

//   try {
//     const response = await fetch(
//       'https://api.bridgedataoutput.com/api/v2/valleymls/listings/replication?limit=2',
//       {
//         method: 'GET',
//         headers: { Authorization: `Bearer ${process.env.BRIDGE_API_KEY}` },
//       }
//     )

//     console.log(response.headers.get('link'))

//     const data: HouseCard = await response.json()

//     const TOTAL_URLS = data.total

//     data.bundle.forEach(house => {
//       xmlStr += `
//           <sitemap>
//             <loc>https://beccatravis.com/homes/${house.ListingId}/${convertToSlug(
//         house?.UnparsedAddress
//       )}</loc>
//             <lastmod>${new Date().toISOString()}</lastmod>
//           </sitemap>
//         `
//     })

//     // for (let i = 0; i < TOTAL_URLS; i += 2000) {
//     //   text += cars[i] + "<br>";
//     //   if (MAX_URLS) {
//     //   }
//     // }
//     xmlStr += '</urlset>'

//     const xml = create(xmlStr)
//     const full_file_name = './sitemaps/' + 'sitemap' + '.xml'
//     fs.writeFileSync(full_file_name, xml.end())

//     console.log(xml.end())

//     uploadFile(xml.end())

//     res.status(200).json({ message: 'Working fine!' })
//   } catch (e) {
//     res.status(400).json({ e })
//   }
// }
