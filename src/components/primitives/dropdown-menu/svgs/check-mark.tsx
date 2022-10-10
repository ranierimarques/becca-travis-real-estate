export default function Svg({ ...props }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M8 14a6 6 0 0 1-6-6v0a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6v0Z"
        stroke="#6EBB5A"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.5 6 8M10 7 7.5 9.5"
        stroke="#5BA341"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
