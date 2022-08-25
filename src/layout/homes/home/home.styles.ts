import { styled } from "stitches.config"

export const Section = styled("section", {
  maxWidth: "1072px",
  margin: "0 auto",

  paddingTop: 40,
})

export const HouseName = styled("h1", {
  fontWeight: "500",
  fontSize: "22px",
  lineHeight: "40px",
  color: "#58243C",
})

export const HousePrice = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  marginRight: 30,

  padding: "6px 10px",
  background: "rgba(157, 68, 110, 0.1)",
  borderRadius: "4px",

  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "24px",
  color: "#8C3C62",
})

export const HouseStatus = styled("div", {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#33303E",
})

export const HouseOnSite = styled("div", {})

export const HouseId = styled("div", {})

export const HouseUpdated = styled("div", {})

export const Status = styled("span", {})

export const ShareAndSave = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 16,
})

export const ShareButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "10px",
  background: "#9D446E",
  borderRadius: "8px",
})

export const SaveButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "10px",
  background: "#9D446E",
  borderRadius: "8px",
})
