export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        opacity=".5"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 6.667a.208.208 0 1 0 .002.417.208.208 0 0 0-.003-.417" />
        <path
          clipRule="evenodd"
          d="M10 17.5v0A7.5 7.5 0 0 1 2.5 10v0A7.5 7.5 0 0 1 10 2.5v0a7.5 7.5 0 0 1 7.5 7.5v0a7.5 7.5 0 0 1-7.5 7.5Z"
        />
        <path d="M10 10v4.167" />
      </g>
    </svg>
  )
}
