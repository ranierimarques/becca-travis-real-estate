export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M3 12v0a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0a9 9 0 0 1-9-9Z"
        stroke="rgba(88, 36, 60, .5)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V8M15 13l-3 3-3-3"
        stroke="rgba(157, 68, 110, .5)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
