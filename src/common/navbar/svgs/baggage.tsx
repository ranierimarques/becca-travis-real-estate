export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M15.833 16.667H4.167C3.246 16.667 2.5 15.92 2.5 15V7.917c0-.921.746-1.667 1.667-1.667h11.666c.921 0 1.667.746 1.667 1.667V15c0 .92-.746 1.667-1.667 1.667Z"
        stroke="#F796AA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.037 6.25V4.94c0-.922-.746-1.668-1.666-1.668H8.628c-.92 0-1.667.746-1.667 1.667V6.25M6.25 6.25v10.417M13.75 10.833V6.25"
        stroke="#F796AA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M10.834 10.833H15v2.5h-4.166v-2.5Z"
        stroke="#F796AA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 16.667v-3.334"
        stroke="#F796AA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
