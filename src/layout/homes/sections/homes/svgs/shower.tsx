export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 13h20M21 13l-.544 3.485A4.156 4.156 0 0 1 16.349 20H7.65a4.156 4.156 0 0 1-4.106-3.515L3 13M6.131 19.707 5 21M17.869 19.707 19 21"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M10.888 6h.224c1.06 0 2 .678 2.336 1.684v0A1 1 0 0 1 12.499 9H9.501a1 1 0 0 1-.949-1.316v0A2.462 2.462 0 0 1 10.888 6v0Z"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 6v0a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v7"
        stroke="#8C8A97"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
