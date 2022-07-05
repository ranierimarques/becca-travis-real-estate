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
        d="M10 8.5v1M14 8.5v1"
        stroke="#C57E59"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="m9.586 19 1.707 1.707a1 1 0 0 0 1.414 0L14.414 19H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h3.586Z"
        stroke="#5B2F20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.5a5.24 5.24 0 0 1-3.5-1.312M15.5 13.188A5.24 5.24 0 0 1 12 14.5"
        stroke="#C57E59"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
