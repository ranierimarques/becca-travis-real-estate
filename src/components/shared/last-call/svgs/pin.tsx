export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M16 17.333v0a4 4 0 0 1-4-4v0a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M16 28s-9.333-7.667-9.333-14.667a9.333 9.333 0 0 1 18.666 0C25.333 20.333 16 28 16 28Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}