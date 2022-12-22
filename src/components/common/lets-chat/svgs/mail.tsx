export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="2.5"
        y="3.333"
        width="15"
        height="13.333"
        rx="4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14.583 7.5-3.513 2.944c-.619.52-1.521.52-2.14 0L5.416 7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
