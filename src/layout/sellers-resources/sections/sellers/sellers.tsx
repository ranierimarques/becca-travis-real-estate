import Script from 'next/script'
import { useEffect } from 'react'
import { Box } from '@/common'
import * as S from './sellers.styles'
import * as Svg from './svgs'

const inputStyle = `
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
    padding-left: 20px;
    height: 48px !important;
    border-radius: 8px;
    background: #F6F6F8;
    text-overflow: ellipsis;
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

   .__hblgw--input-input {
    padding: 4px 86px 4px 13px;
    z-index: 1;
   }

   /* Button */

  .__hblgw--button-container {
    font-size: 0;
    width: 54px;
    height: 48px;
    background-color: #E3E5E8;
    border-radius: 0px 8px 8px 0px;
    z-index: 1;
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

    /* Logo */

    .__hblgw--logo-message_small {
      display: none;
    }


    /* Responsive */

    @media (max-width: 767px) {
      .__hblgw--widget-container {
        width: 100%;
      }
    }
`

const modalStyle = `
  .__hblgw--backdrop-container {
    overflow-y: hidden;
  }
`

const homebotScript = `window.__hb_namespace="Homebot",window.Homebot=window.Homebot||function(){(window.Homebot.q=window.Homebot.q||[]).push(arguments)},Homebot("#homebot_homeowner","f99d4fae1f736bdf7a150206671f876b4d8a7148254ef90e",{size:"compact"});`
const loadHomebot = new Function(homebotScript)

export function Sellers() {
  function handleSubmit(event: Event) {
    event.preventDefault()
  }

  useEffect(() => {
    const homebot = document.getElementById('homebot_homeowner')

    const inputObserver = new MutationObserver(() => {
      if (homebot?.shadowRoot?.querySelector('[data-qa="hblgw-container"]')) {
        const homebotShadow = homebot.shadowRoot

        const styleSheet = document.createElement('style')
        styleSheet.innerHTML = inputStyle
        homebotShadow.appendChild(styleSheet)

        const homebotInput = homebotShadow.querySelector('.__hblgw--input-input')
        homebotInput?.setAttribute('placeholder', 'Enter an address or Zip Code')

        const homebotButton = homebotShadow.querySelector('.__hblgw--button-container')
        if (!homebotButton) return

        homebotButton.innerHTML = '<img src="/loupe.svg" alt="search" />'

        const homebotForm = homebotShadow.querySelector('form#hb-lgw-combobox')

        homebotForm?.addEventListener('submit', handleSubmit)

        inputObserver.disconnect()
      }
    })

    inputObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    const modalObserver = new MutationObserver(() => {
      const homebotPortal = document.querySelector('[data-qa="hblgw-portal"]')

      if (homebotPortal) {
        const homebotShadow = homebotPortal.shadowRoot

        const styleSheet = document.createElement('style')
        styleSheet.innerHTML = modalStyle
        homebotShadow?.appendChild(styleSheet)
      }
    })

    modalObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      inputObserver.disconnect()
      modalObserver.disconnect()

      const homebotForm = homebot?.shadowRoot?.querySelector('form#hb-lgw-combobox')
      homebotForm?.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <S.Section hasMaxWidth>
      <S.HomeWorth>
        <S.PoweredBy>
          <S.BackgroundPoweredBy />
          <Svg.Homebot />
          Powered by Homebot
        </S.PoweredBy>
        <S.Title>What&apos;s your home worth?</S.Title>
        <S.Paragraph>
          Enter your address and find out how much your property is worth
        </S.Paragraph>

        <div id="homebot_homeowner" />

        <Script
          id="homebot"
          src="https://embed.homebotapp.com/lgw/v1/widget.js"
          onReady={() => loadHomebot()}
        />

        <S.SecuredData>
          Don&apos;t worry, your data is protected by our security system.
        </S.SecuredData>
        <S.BackgroundSvg />
      </S.HomeWorth>
    </S.Section>
  )
}
