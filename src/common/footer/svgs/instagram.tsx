export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2.667" y="2.667" width="26.667" height="26.667" rx="13.333" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C8.636 2.667 2.667 8.637 2.667 16c0 7.364 5.97 13.333 13.333 13.333Z"
        fill="#fff"
      />
      <path
        clipRule="evenodd"
        d="M12.36 8.727h7.28a3.632 3.632 0 0 1 3.632 3.633v7.28a3.632 3.632 0 0 1-3.633 3.632H12.36a3.632 3.632 0 0 1-3.633-3.633V12.36a3.633 3.633 0 0 1 3.633-3.633Z"
        stroke="#7B3455"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11.934a.067.067 0 1 0 .067.067.068.068 0 0 0-.067-.067m-2.115 2.181a2.666 2.666 0 1 1-3.77 3.77 2.666 2.666 0 0 1 3.77-3.77"
        stroke="#7B3455"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
