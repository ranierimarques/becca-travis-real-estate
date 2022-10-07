export default function Svg({ ...props }) {
  return (
    <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M26.16 6.667c5.292 0 8.84 4.966 8.84 9.591 0 9.389-14.732 17.075-15 17.075-.268 0-15-7.686-15-17.075 0-4.625 3.548-9.591 8.84-9.591 3.025 0 5.012 1.508 6.16 2.851 1.148-1.343 3.135-2.851 6.16-2.851Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
