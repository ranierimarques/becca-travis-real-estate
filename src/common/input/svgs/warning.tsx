export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M10 2.5v0a7.5 7.5 0 0 1 7.5 7.5v0a7.5 7.5 0 0 1-7.5 7.5v0A7.5 7.5 0 0 1 2.5 10v0A7.5 7.5 0 0 1 10 2.5Z"
        stroke="#BD3E59"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.417V6.25M9.999 13.333a.208.208 0 1 0 .002.417.208.208 0 0 0-.002-.417"
        stroke="#BD3E59"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
