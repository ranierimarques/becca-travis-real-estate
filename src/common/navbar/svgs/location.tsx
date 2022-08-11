export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17.5s-5.833-4.792-5.833-9.167a5.833 5.833 0 1 1 11.666 0C15.833 12.708 10 17.5 10 17.5Z"
        fill="#9CA8B7"
      />
      <path
        clipRule="evenodd"
        d="M10 10.833v0a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5v0a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5Z"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
