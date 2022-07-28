import { styled } from "stitches.config"

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

export const Title = styled("h2", {
  margin: "8px 0 16px",
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "50px",
  color: "$magenta6",
})

export const Paragraph = styled("p", {
  marginBottom: 48,

  maxWidth: "300px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  textAlign: "center",
  color: "$gray2",
})
