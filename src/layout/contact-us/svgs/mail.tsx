export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="m15.374 12.718 4.506-3.055A2.547 2.547 0 0 0 21 7.552v0A2.551 2.551 0 0 0 18.449 5H5.566a2.55 2.55 0 0 0-2.551 2.551v0a2.55 2.55 0 0 0 1.12 2.112l4.506 3.055a6 6 0 0 0 6.733 0v0Z"
        stroke="#C06D94"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7.55V17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7.552"
        stroke="#C06D94"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
