export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.167 5.833v8.334M15.833 14.167V5.833"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M16.667 17.5H15a.834.834 0 0 1-.833-.833V15c0-.46.373-.833.833-.833h1.667c.46 0 .833.373.833.833v1.667c0 .46-.373.833-.833.833ZM5 17.5H3.333a.834.834 0 0 1-.833-.833V15c0-.46.373-.833.833-.833H5c.46 0 .833.373.833.833v1.667c0 .46-.373.833-.833.833ZM16.667 5.833H15A.834.834 0 0 1 14.167 5V3.333c0-.46.373-.833.833-.833h1.667c.46 0 .833.373.833.833V5c0 .46-.373.833-.833.833ZM5 5.833H3.333A.834.834 0 0 1 2.5 5V3.333c0-.46.373-.833.833-.833H5c.46 0 .833.373.833.833V5c0 .46-.373.833-.833.833Z"
        stroke="#7A7786"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.833 15.833h8.334M14.167 4.167H5.833"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
