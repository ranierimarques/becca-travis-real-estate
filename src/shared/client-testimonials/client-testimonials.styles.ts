import * as DialogPrimitive from "@radix-ui/react-dialog"
import { keyframes, styled } from "stitches.config"
import { LinkSvg, LogoSvg } from "./svgs"

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba($colors$blackRgb, 0.4)",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "536px",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
})

export const IconButton = styled("button", {
  all: "unset",
  borderRadius: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": {
    background: "rgba(140, 138, 151, 0.15)",
    cursor: "pointer",
  },
  "&:focus": { boxShadow: `0 0 0 2px rgba(122, 119, 134, 0.5)` },
})

export const ModalPhoto = styled("div", {
  width: "48px",
  padding: "12px 0",
  background: "rgba($colors$magenta5Rgb, 0.5)",
  borderRadius: "999px",

  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "24px",
  textAlign: "center",
  color: "$magenta1",
})

export const ModalName = styled("span", {
  display: "block",
  marginBottom: "4px",

  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
  color: "$grayW1",
})

export const ModalSource = styled("span", {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "22px",
  color: "$gray3",
})

export const ModalText = styled("p", {
  padding: "24px 32px 32px",

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "$gray2",
})

export const ModalLogo = styled(LogoSvg, {
  position: "absolute",
  top: 0,
  right: 36,
})

// =========== Radix ===========

export const Section = styled("section", {
  paddingBottom: "120px",
  margin: "0 auto",
  maxWidth: "1072px",
})

// =========== Title ===========

export const Title = styled("h2", {
  marginBottom: 16,

  fontWeight: "500",
  fontSize: "36px",
  lineHeight: "50px",
  color: "$magenta6",
})

export const Description = styled("p", {
  maxWidth: "428px",

  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
  color: "$gray2",
})

export const ViewAll = styled("a", {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "36px",
  color: "$magenta9",
})

// =========== Testimonial ===========

export const TestimonialsWrapper = styled("div", {
  overflow: "hidden",

  "&.resize": {
    overflow: "visible",
  },
})

export const Testimonials = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: 32,

  position: "relative",

  maxHeight: "629px",

  "&.resize": {
    maxHeight: "fit-content",
  },
})

export const LinkSvgHover = styled(LinkSvg, {
  opacity: "0",
})

export const TestimonialCard = styled("div", {
  padding: "24px",
  maxWidth: "336px",
  background: "$white",
  boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.08)",
  borderRadius: "8px",

  "&:hover": {
    cursor: "pointer",
    [`${LinkSvgHover}`]: {
      opacity: "1",
    },
  },
})

export const Photo = styled("div", {
  width: "48px",
  padding: "12px 0",
  background: "$grayW8",
  borderRadius: "999px",

  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "24px",
  textAlign: "center",
  color: "$grayW2",
})

export const Name = styled("span", {
  display: "block",
  marginBottom: "4px",

  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
  color: "$grayW1",
})

export const Source = styled("span", {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "22px",
  color: "$gray3",
})

export const Text = styled("p", {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "$gray2",
})

export const TestimonialsOverlay = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "237px 0px 64px",

  position: "absolute",
  bottom: "0px",
  width: "100%",
  background:
    "linear-gradient(180deg, rgba(255, 255, 255, 0) 47.4%, rgba(255, 255, 255, 0.7) 75.52%, rgba(255, 255, 255, 0.7) 100%)",

  pointerEvents: "none",
})
