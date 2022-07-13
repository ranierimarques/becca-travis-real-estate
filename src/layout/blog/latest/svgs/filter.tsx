export default function Svg({ ...props }) {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.667 2H1.334l5.333 6.307v4.36L9.334 14V8.307L14.667 2Z"
        stroke="#F6F6F8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
