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
        d="M11.275 6.267 7.892 8.8M13.67 3.869a1.693 1.693 0 1 1-2.394 2.394A1.693 1.693 0 0 1 13.67 3.87M11.275 13.733 7.892 11.2M13.67 13.737a1.693 1.693 0 1 1-2.394 2.395 1.693 1.693 0 0 1 2.395-2.395M7.888 8.804a1.692 1.692 0 1 1-2.392 2.392 1.692 1.692 0 0 1 2.392-2.392"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
