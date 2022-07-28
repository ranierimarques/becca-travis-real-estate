import { styled } from "stitches.config"
import { CirclesSvg } from "./svgs"

export const Container = styled("div", {
  maxWidth: "1072px",
  margin: "0 auto",
})

export const HomeWorth = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  width: "1072px",
  height: "320px",

  background: "$magenta9",
  borderRadius: "16px",
})

export const Title = styled("h3", {
  marginBottom: 8,

  fontWeight: "400",
  fontSize: "24px",
  lineHeight: "48px",
  color: "$white",
})

export const Paragraph = styled("p", {
  marginBottom: 16,

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "30px",
  color: "$offWhite2",
})

export const SecuredData = styled("span", {
  marginTop: 8,

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "$grayW9",
})

export const Background = styled(CirclesSvg, {
  position: "absolute",
  top: 0,
})
