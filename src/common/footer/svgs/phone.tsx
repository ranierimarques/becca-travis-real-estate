export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="m15.585 15.802.715-.715a1.25 1.25 0 0 0 0-1.768l-1.597-1.598a1.667 1.667 0 0 0-2.357 0l-1.253 1.253a6.922 6.922 0 0 1-4.067-4.067L8.28 7.654c.65-.65.65-1.706 0-2.357L6.68 3.7a1.25 1.25 0 0 0-1.768 0l-.715.716A2.952 2.952 0 0 0 3.332 6.5v0A10.158 10.158 0 0 0 13.5 16.668v0a2.954 2.954 0 0 0 2.084-.865v0Z"
        stroke="#CDD1D6"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
