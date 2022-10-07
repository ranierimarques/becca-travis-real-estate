export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="2" width="28" height="28" rx="14" fill="#fff" />
      <path
        d="M13 15.333h6M19 10h-1.333A2.667 2.667 0 0 0 15 12.667V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
