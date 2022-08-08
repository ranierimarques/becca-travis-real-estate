export default function Svg({ ...props }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx="8"
        cy="8"
        r="6"
        transform="rotate(-90 8 8)"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="8"
        cy="8"
        rx="6"
        ry="2"
        transform="rotate(-90 8 8)"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 8h12" stroke="#9D446E" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
