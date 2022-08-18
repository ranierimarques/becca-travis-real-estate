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
        d="M11.083 12.917v1.819c0 .506.41.917.917.917h4.226a.917.917 0 0 0 .869-1.208l-.512-1.528.514-1.543a.917.917 0 0 0-.87-1.207h-3.312"
        stroke="#7F4124"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12 12.917H7.417V9.25c0-.506.41-.917.917-.917H12c.506 0 .917.41.917.917V12a.918.918 0 0 1-.917.917Z"
        stroke="#7F4124"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.42 19.94v-7.02"
        stroke="#7F4124"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.482 5.518A9.167 9.167 0 1 1 5.518 18.482 9.167 9.167 0 0 1 18.482 5.518"
        stroke="#C57E59"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
