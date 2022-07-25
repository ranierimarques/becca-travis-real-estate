import { styled } from "stitches.config"

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

export const Title = styled("h2", {
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "50px",
  color: "$magenta6",
})

export const Paragraph = styled("p", {
  maxWidth: "300px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  textAlign: "center",
  color: "$gray2",
})
