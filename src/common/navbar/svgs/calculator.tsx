export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2.497" y="2.497" width="15.006" height="15.006" rx="2" fill="#9CA8B7" />
      <path
        d="m5.206 14.794 2.084-2.085M7.29 14.794l-2.084-2.085M12.501 6.248h2.501M12.501 12.626h2.501M12.501 14.877h2.501"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2.497v15.006M2.497 10h15.006"
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M4.998 6.248H7.5M6.248 7.5V4.997"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
