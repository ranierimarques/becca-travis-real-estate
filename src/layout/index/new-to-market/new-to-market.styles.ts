import { styled } from "stitches.config"
import { FavoriteSvg } from "./svgs"

export const Section = styled("section", {
  maxWidth: "1072px",
  margin: "0 auto",
  padding: "120px 0 160px",
})

export const Title = styled("h2", {
  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "50px",
  color: "$magenta6",
})

export const ViewAll = styled("a", {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "36px",
  color: "$magenta9",
})

export const Houses = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: 32,
})

export const House = styled("li", {
  border: "1px solid #CDD1D6",
  borderRadius: "8px",
  overflow: "hidden",

  background: "$white",
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

export const HeartSvg = styled(FavoriteSvg, {
  position: "absolute",
  top: "8px",
  right: "8px",
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
  color: "#5BA341",
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
