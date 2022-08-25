import { styled } from "stitches.config"

export const Container = styled("div", {
  maxWidth: "1072px",
  margin: "0 auto",
})

export const Houses = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 32,
})

export const House = styled("li", {
  border: "1px solid #CDD1D6",
  borderRadius: "8px",
  overflow: "hidden",

  position: "relative",

  background: "$white",

  maxWidth: "336px",
})

export const New = styled("span", {
  display: "block",
  padding: "2px 8px",
  background: "rgba(15, 20, 26, 0.6)",
  borderRadius: "5px",

  position: "absolute",
  top: "-1px",
  left: "-1px",
  zIndex: "2",

  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "18px",
  color: "$white",
})

export const HeartSvg = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "absolute",
  top: "8px",
  right: "8px",

  padding: "4px 3px 2px",

  background: "$grayW3",
  opacity: "0.8",
  border: "1px solid $grayW2",
  boxShadow: "0px 0px 15px rgba($colors$blackRgb, 0.15)",
  borderRadius: 999,

  cursor: "pointer",
})

export const HouseInfo = styled("div", {
  padding: "6px 0 16px 16px",
})

export const Status = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 4,

  marginBottom: 2,

  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "18px",
  color: "$green3",
})

export const Value = styled("h4", {
  marginBottom: 4,

  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "30px",
  color: "$gray1",
})

export const Address = styled("p", {
  marginBottom: 8,

  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "24px",
  color: "$gray3",
})

export const Bedrooms = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "$gray4",
})

export const Bathrooms = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "$gray4",
})

export const SquareFeet = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "$gray4",
})

export const VAMLS = styled("span", {
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "14px",
  color: "$gray4",
  opacity: "0.8",
})
