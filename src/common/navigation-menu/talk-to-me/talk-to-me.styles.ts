import * as DialogPrimitive from "@radix-ui/react-dialog"
import { keyframes, styled } from "stitches.config"

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
})

export const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba($colors$blackRgb, 0.55)",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

export const Content = styled(DialogPrimitive.Content, {
  backgroundColor: "$white",
  borderRadius: "8px",
  border: "1px solid #D0D5DD",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 32,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
})

export const Title = styled(DialogPrimitive.Title, {
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "36px",
  color: "#9D446E",
})

export const Description = styled(DialogPrimitive.Description, {
  margin: "8px 0 24px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#7A7786",
})

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "21px",

  borderRadius: "5px",

  color: "$white",
})

export const IconButton = styled("button", {
  all: "unset",
  borderRadius: "999px",
  height: 24,
  width: 24,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray2",
  position: "absolute",
  top: 10,
  right: 10,

  "&:hover": {
    backgroundColor: "rgba(192, 109, 148, 0.15)",
    cursor: "pointer",
  },
  "&:focus": { boxShadow: "0 0 0 1px rgba(157, 68, 110, 0.4)" },
})

export const Flex = styled("div", { display: "flex" })

export const ContactList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
})

export const ContactText = styled("span", {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#9CA8B7",
})

export const Contact = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  padding: "12px 16px",

  background: "#FFFFFF",
  border: "1px solid #CDD1D6",
  borderRadius: "8px",

  "&:hover": {
    border: "1px solid #9D446E",
    cursor: "pointer",

    [`& ${ContactText}`]: {
      color: "#9D446E",
    },

    "& .strokeTalkToMe001": {
      stroke: "#9D446E",
    },
  },
  "&:focus": { boxShadow: "0 0 0 4px rgba(157, 68, 110, 0.2)" },
})
