import { useEffect } from "react"
import * as S from "./sellers.styles"

export function Sellers() {
  useEffect(() => {
    ;(function (h, b) {
      var w = window,
        d = document,
        s = "script",
        x,
        y
      w["__hb_namespace"] = h
      w[h] =
        w[h] ||
        function () {
          ;(w[h].q = w[h].q || []).push(arguments)
        }
      y = d.createElement(s)
      x = d.getElementsByTagName(s)[0]
      y.async = 1
      y.src = b
      x.parentNode.insertBefore(y, x)
    })("Homebot", "https://embed.homebotapp.com/lgw/v1/widget.js")
    Homebot(
      "#homebot_homeowner",
      "f99d4fae1f736bdf7a150206671f876b4d8a7148254ef90e",
      { size: "compact" }
    )
  }, [])
  return (
    <S.Container>
      <S.HomeWorth>
        <S.Background />
        <S.Title>What&apos;s your home worth?</S.Title>
        <S.Paragraph>
          Enter your address and find out how much your property is worth
        </S.Paragraph>
        <div id="homebot_homeowner" />
        <S.SecuredData>
          Don&apos;t worry, your data is protected by our security system.
        </S.SecuredData>
      </S.HomeWorth>
    </S.Container>
  )
}
