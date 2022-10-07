export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 7v10M19 17V7"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M20 21h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM6 21H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM20 7h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1ZM6 7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1Z"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 19h10M17 5H7"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
