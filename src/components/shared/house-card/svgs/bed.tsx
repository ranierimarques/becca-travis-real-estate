export default function Svg({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M3.333 10h13.334c.92 0 1.666.746 1.666 1.667V15c0 .46-.373.833-.833.833h-15A.833.833 0 0 1 1.667 15v-3.333c0-.92.746-1.667 1.666-1.667Z"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.333 10V5.833a2.5 2.5 0 0 1 2.5-2.5h8.334a2.5 2.5 0 0 1 2.5 2.5V10"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="5.833"
        y="6.667"
        width="8.333"
        height="3.333"
        rx="1.5"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 15.833V17.5M2.5 15.833V17.5"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
