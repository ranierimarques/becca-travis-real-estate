import { styled } from "stitches.config"

export const Section = styled("section", {
  position: "relative",
})

export const Background = styled("div", {
  position: "absolute",
  top: 0,
  width: "100%",
  height: "570px",
  backgroundColor: "rgba($colors$tangerine5Rgb, 0.3)",
  zIndex: -1,
})

export const Content = styled("div", {
  maxWidth: "888px",
  margin: "0 auto",
})

export const Header = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 72,
  marginBottom: 48,
})

export const PostTitle = styled("h1", {
  marginBottom: 16,

  maxWidth: "704px",
  fontWeight: "500",
  fontSize: "40px",
  lineHeight: "64px",
  textAlign: "center",
  color: "#58243C",
})

export const PostDescription = styled("p", {
  marginBottom: 48,

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  textAlign: "center",
  color: "#4E4B59",
})

export const PostDetails = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  margin: "32px 0 16px ",
})

export const DatePublished = styled("span", {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#5F5C6B",
})

export const TimeToRead = styled("span", {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#5F5C6B",
})

export const LastUpdate = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: 10,

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#5F5C6B",
})

export const Heading1 = styled("h1", {
  fontWeight: "500",
  fontSize: "40px",
  lineHeight: "64px",
  color: "#58243C",
})

export const Heading2 = styled("h2", {
  fontWeight: "500",
  fontSize: "32px",
  lineHeight: "48px",
  color: "#58243C",
})

export const Heading3 = styled("h3", {
  fontWeight: "500",
  fontSize: "28px",
  lineHeight: "44px",
  color: "#58243C",
})

export const Heading4 = styled("h4", {
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "40px",
  color: "#58243C",
})

export const Heading5 = styled("h5", {
  fontWeight: "600",
  fontSize: "22px",
  lineHeight: "36px",
  color: "#58243C",
})

export const Heading6 = styled("h6", {
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "30px",
  color: "#58243C",
})

export const Paragraph = styled("p", {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#4E4B59",
})

export const Blockquote = styled("blockquote", {
  padding: "24px",
  background: "#F6F6F8",
  borderRadius: "8px",

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#5F5C6B",
})

export const OrderedList = styled("ol", {
  paddingLeft: 17.61,
  listStyle: "revert",

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#4E4B59",
})

export const UnorderedList = styled("ul", {
  paddingLeft: 17.61,
  listStyle: "revert",

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#4E4B59",
})

export const ListItem = styled("li", {
  listStyle: "revert",

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "32px",
  color: "#4E4B59",
})
