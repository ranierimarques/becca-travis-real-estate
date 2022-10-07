export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M8 4h8a1 1 0 0 1 1 1v6a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5V5a1 1 0 0 1 1-1Z"
        stroke="#C57E59"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m16.673 12.78 1.892-.946a3.5 3.5 0 0 0 1.935-3.13V7.367a.875.875 0 0 0-.875-.875H17"
        stroke="#7F4124"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 20v-4" stroke="#C57E59" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 20H8M7.327 12.78l-1.892-.946A3.5 3.5 0 0 1 3.5 8.704V7.367c0-.484.392-.875.875-.875H7"
        stroke="#7F4124"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
