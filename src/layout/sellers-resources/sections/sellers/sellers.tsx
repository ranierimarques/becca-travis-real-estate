import { useLayoutEffect } from 'react'
import * as S from './sellers.styles'
import { HomebotSvg } from './svgs'

const style = `
  /* Div */
  
  .__hblgw--widget-container {
    width: 533px;
    padding: 0px;
  }
  .__hblgw--widget-container:focus-visible {
    outline: none;
  }
  
  /* Form */

  .__hblgw--input-container {
    border: none;
    border-radius: 8px;

   }
   .__hblgw--input-container:hover {
    box-shadow: 0px 0px 0px 1px #A6AEB8;
   }
   .__hblgw--input-container:focus {
    box-shadow: 0px 0px 0px 1px #C06D94;
   }
   .__hblgw--input-container:focus-visible {
    outline: none;
   }

   /* Input */

   #hb-lgw-input {
    height: 48px !important;
    border-radius: 8px;
    background: #F6F6F8;
   }
   #hb-lgw-input:focus-visible {
    outline: none;
   }

   #hb-lgw-input:focus {
    box-shadow: 0px 0px 0px 1px #C06D94;
   }

   #hb-lgw-input::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #5F5C6B;
   }

   /* Button */

  .__hblgw--button-container {
    width: 54px;
    height: 48px;
    background-color: #E3E5E8;
    border-radius: 0px 8px 8px 0px;
   }
   .__hblgw--button-container:hover {
    background-color: #E3E5E8;
   }
   .__hblgw--button-container:focus-visible {
    outline: none;
    }

  /* Input focus and Button hover */

    #hb-lgw-input:focus ~ .__hblgw--button-container {
      background: rgba(192, 109, 148, 0.1);
    }
  
    #hb-lgw-input:focus ~ .__hblgw--button-container:hover {
      background: rgba(192, 109, 148, 0.2);
    }

    #hb-lgw-input:focus ~ .__hblgw--button-container img {
      filter: brightness(0) saturate(100%) invert(87%) sepia(49%) saturate(975%) hue-rotate(283deg) brightness(83%) contrast(95%);
    }

    #hb-lgw-input:focus ~ .__hblgw--button-container:hover img {
      filter: brightness(0) saturate(100%) invert(35%) sepia(13%) saturate(2509%) hue-rotate(279deg) brightness(93%) contrast(87%);
    }
`

const homebotScript = `(function (h,b) { var w = window, d = document, s = 'script', x, y; w['__hb_namespace'] = h; w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) }; y = d.createElement(s); x = d.getElementsByTagName(s)[0]; y.async = 1; y.src = b; x.parentNode.insertBefore(y,x) })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js'); Homebot('#homebot_homeowner', 'f99d4fae1f736bdf7a150206671f876b4d8a7148254ef90e', {'size':'compact'})`

export function Sellers() {
  useLayoutEffect(() => {
    new Function(homebotScript)()

    const homebot: HTMLElement | null = document.getElementById('homebot_homeowner')

    function callback(e: { contentRect: { height: number } }[]) {
      const loaded = e[0].contentRect.height !== 0

      if (!loaded) return

      const homebotShadow = homebot?.shadowRoot

      const styleSheet = document.createElement('style')
      styleSheet.innerHTML = style
      homebotShadow?.appendChild(styleSheet)

      const homebotInput = homebotShadow?.querySelector('.__hblgw--input-input')
      homebotInput?.setAttribute('placeholder', 'Enter an address or Zip Code')

      const homebotButton = homebotShadow?.querySelector('.__hblgw--button-container')
      if (!homebotButton) return
      homebotButton.innerHTML = ''
      const icon = document.createElement('img')
      icon.setAttribute('src', '/loupe.svg')
      homebotButton.setAttribute('style', 'font-size: 0')
      homebotButton.appendChild(icon)

      const homebotPoweredBy = homebotShadow?.querySelector(
        '.__hblgw--logo-message_small'
      )
      homebotPoweredBy?.remove()
    }

    if (homebot !== null) {
      new ResizeObserver(callback).observe(homebot)
    }
  }, [])

  return (
    <S.Container>
      <S.HomeWorth>
        <S.BackgroundPoweredBy />
        <S.PoweredBy>
          <HomebotSvg />
          Powered by Homebot
        </S.PoweredBy>
        <S.Title>What&apos;s your home worth?</S.Title>
        <S.Paragraph>
          Enter your address and find out how much your property is worth
        </S.Paragraph>
        <div id="homebot_homeowner" />
        <S.SecuredData>
          Don&apos;t worry, your data is protected by our security system.
        </S.SecuredData>
      </S.HomeWorth>
      <S.BackgroundSvg />
    </S.Container>
  )
}
