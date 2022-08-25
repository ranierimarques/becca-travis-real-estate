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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.08 3.167c2.646 0 4.42 2.359 4.42 4.556 0 4.46-7.366 8.11-7.5 8.11-.134 0-7.5-3.65-7.5-8.11 0-2.197 1.774-4.556 4.42-4.556A4.04 4.04 0 0 1 10 4.52a4.04 4.04 0 0 1 3.08-1.354Z"
        fill="#fff"
      />
    </svg>
  )
}
