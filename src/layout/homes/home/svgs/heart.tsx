export default function Svg({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="m10.424 4.979-.424.43-.424-.43a4.115 4.115 0 0 0-5.866 0v0a4.27 4.27 0 0 0 0 5.956l4.494 4.563a2.52 2.52 0 0 0 3.592 0l4.494-4.563a4.27 4.27 0 0 0 0-5.957v0a4.116 4.116 0 0 0-5.866 0Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
