export default function Svg({ ...props }) {
  return (
    <svg
      width="16"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m4 6.5 4 4 4-4"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
