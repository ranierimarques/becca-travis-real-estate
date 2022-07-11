export default function Svg({ ...props }) {
  return (
    <svg
      width="40"
      height="40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m4.994 19.492 13.23-11.34a2.728 2.728 0 0 1 3.552 0l13.23 11.34"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.339 35.006V7.495a.834.834 0 0 0-.834-.834h-5.002a.834.834 0 0 0-.834.834v4.345M15.907 35.006v-9.17c0-.921.747-1.667 1.668-1.667h4.85c.921 0 1.668.746 1.668 1.667v9.17M7.137 17.655v17.351M35.006 35.006H4.994"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
