import { styled } from "stitches.config"

export const Section = styled("section", {
  maxWidth: "1072px",
  margin: "0 auto",
  padding: "160px 0 160px",

  display: "flex",
  justifyContent: "space-between",
})

export const Title = styled("h2", {
  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "36px",
  color: "#58243C",
})

export const Hat = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "0.03em",
  textTransform: "uppercase",
  color: "#9D446E",
})

export const Paragraph = styled("p", {
  maxWidth: "458px",

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#4E4B59",
})
