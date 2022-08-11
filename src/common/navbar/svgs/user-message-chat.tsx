export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m7.988 15.833 1.423 1.423a.833.833 0 0 0 1.178 0l1.423-1.423H15a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 15 2.5H5A2.5 2.5 0 0 0 2.5 5v8.333a2.5 2.5 0 0 0 2.5 2.5h2.988Z"
        fill="#9CA8B7"
      />
      <circle
        cx="7.917"
        cy="7.083"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        r="1.667"
      />
      <path
        d="M7.917 5.417a1.667 1.667 0 0 1 0 3.333M11.667 5.417a1.667 1.667 0 1 1 0 3.333"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 5.417a1.667 1.667 0 1 1 0 3.333M10.833 12.5c0-.92-.746-1.666-1.666-1.666h-2.5C5.747 10.834 5 11.58 5 12.5M15 12.5c0-.92-.746-1.666-1.667-1.666H12.5"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
