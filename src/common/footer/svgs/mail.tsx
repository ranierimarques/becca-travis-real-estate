export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="2.5"
        y="3.333"
        width="15"
        height="13.333"
        rx="4"
        stroke="#CDD1D6"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14.583 7.5-3.512 2.944c-.62.52-1.522.52-2.142 0L5.417 7.5"
        stroke="#CDD1D6"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
