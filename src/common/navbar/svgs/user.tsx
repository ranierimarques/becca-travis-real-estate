export default function Svg({ ...props }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.333 13.333v-.5A2.833 2.833 0 0 0 10.5 10h-5a2.833 2.833 0 0 0-2.833 2.833v.5"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="4.667"
        r="2.667"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
