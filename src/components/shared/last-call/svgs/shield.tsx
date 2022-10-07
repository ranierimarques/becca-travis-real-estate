export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M20 11.242c0 4.368-3.157 8.462-7.48 9.686a1.914 1.914 0 0 1-1.04 0C7.157 19.705 4 15.61 4 11.242V7.214a2 2 0 0 1 1.243-1.851l4.864-1.99a4.996 4.996 0 0 1 3.787 0l4.864 1.99A2 2 0 0 1 20 7.214v4.028Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v18"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
