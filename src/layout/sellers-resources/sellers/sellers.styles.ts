import { styled } from "stitches.config"
import { CirclesSvg, HomebotBackgroundSvg } from "./svgs"

export const Container = styled("div", {
  maxWidth: "1072px",
  margin: "0 auto",
  position: "relative",
})

export const PoweredBy = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 6,

  padding: "8px 8px 14px 8px",

  position: "absolute",
  top: 0,
  left: 44,

  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "23px",
  color: "$white",

  zIndex: 1,
})

export const BackgroundPoweredBy = styled(HomebotBackgroundSvg, {
  position: "absolute",
  top: 0,
  left: 44,
})

export const HomeWorth = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "1072px",
  height: "320px",

  border: "1px solid rgba($colors$tangerine7Rgb, 0.15)",
  boxShadow: "0px 14px 50px rgba($colors$blackRgb, 0.08)",

  background: "rgba($colors$tangerine10Rgb, 0.75)",
  borderRadius: "24px",
})

export const Title = styled("h3", {
  marginBottom: 8,

  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "48px",
  color: "$gray1",
  zIndex: 1,
})

export const Paragraph = styled("p", {
  marginBottom: 32,

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  color: "$magenta1",
  zIndex: 1,
})

export const SecuredData = styled("span", {
  marginTop: 24,

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "$gray3",
  zIndex: 1,
})

export const BackgroundSvg = styled(CirclesSvg, {
  position: "absolute",
  top: 0,
  left: 59,
})
