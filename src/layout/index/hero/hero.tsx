import Image from 'next/image'
import * as S from './hero.styles'
import { downtownHuntsville } from './images'

export function Hero() {
  return (
    <div>
      <Image
        src={downtownHuntsville}
        alt="Downtown Hunstsville Lake"
        layout="responsive"
        priority
      />
    </div>
  )
}
