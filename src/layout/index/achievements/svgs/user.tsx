export default function Svg({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="m17.226 15.158-.226.23-.226-.23a2.187 2.187 0 0 0-3.127 0v0a2.27 2.27 0 0 0 0 3.174l2.116 2.148a1.731 1.731 0 0 0 2.474 0l2.116-2.148a2.27 2.27 0 0 0 0-3.175v0a2.187 2.187 0 0 0-3.127 0Z"
        stroke="#C57E59"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15H7a4 4 0 0 0-4 4v1"
        stroke="#5B2F20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="11"
        cy="7"
        r="4"
        stroke="#5B2F20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
