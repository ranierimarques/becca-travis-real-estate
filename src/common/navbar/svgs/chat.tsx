export default function Svg({ ...props }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M8 12h4a2 2 0 0 0 2-2V4.667a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2V10a2 2 0 0 0 2 2h1v2l3-2Z"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
