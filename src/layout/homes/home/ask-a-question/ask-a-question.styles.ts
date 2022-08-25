import { styled } from "stitches.config"

export const Section = styled("section", {
  maxWidth: "1072px",
  margin: "0 auto",
})

export const Title = styled("h2", {
  marginBottom: "16px",

  fontWeight: "500",
  fontSize: "24px",
  lineHeight: "36px",
  color: "#33303E",
})

export const Form = styled("form", {
  maxWidth: "704px",

  border: "1px solid #CDD1D6",
  borderRadius: "8px",
  padding: "32px",

  display: "flex",
  flexWrap: "wrap",
  columnGap: "56px",
  rowGap: "34px",
})

export const Label = styled("label", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 6,

  width: "280px",
})

export const Input = styled("input", {
  padding: "10px 16px",
  border: "1px solid #9CA8B7",
  borderRadius: "4px",
  width: "100%",
})

export const TextArea = styled("textarea", {
  padding: "10px 16px",
  border: "1px solid #9CA8B7",
  borderRadius: "4px",
})

export const Checkbox = styled("label", {
  display: "flex",
  alignItems: "center",
  gap: 10,

  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "20px",
  color: "#8C8A97",
})

export const FasterContact = styled("div", {
  width: "336px",
  padding: 24,
  border: "1px solid #CDD1D6",
  borderRadius: "8px",
})

export const FasterContactTitle = styled("h4", {
  margin: "16px 0 8px",

  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#33303E",
})

export const FasterContactParagraph = styled("p", {
  maxWidth: "215px",
  marginBottom: 24,

  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "20px",
  color: "#586474",
})
