import type { StaticImageData } from 'next/image'
import Img4 from '../../../public/house-images/360_F_118465200_0q7Of6UnbA8kDlYEe3a4PuIyue27fbuV.jpg'
import Img6 from '../../../public/house-images/706-front-1.webp'
import Img3 from '../../../public/house-images/2305-1-0_front_left_v-2_m.webp'
import Img5 from '../../../public/house-images/57260-768.jpeg'
import Img2 from '../../../public/house-images/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg'
import Img8 from '../../../public/house-images/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg'
import Img1 from '../../../public/house-images/Westford_03112025MC_0039_FINAL-scaled.webp'
import Img9 from '../../../public/house-images/how-to-design-a-house.jpg'
import Img7 from '../../../public/house-images/istockphoto-1026205392-612x612.jpg'
import Img10 from '../../../public/house-images/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg'

export const houseImages: StaticImageData[] = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
]

export function getRandomHouseImage(): StaticImageData {
  const randomIndex = Math.floor(Math.random() * houseImages.length)
  return houseImages[randomIndex]
}
