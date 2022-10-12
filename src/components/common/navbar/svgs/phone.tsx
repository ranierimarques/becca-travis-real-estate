export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="m15.252 15.469.715-.716a1.25 1.25 0 0 0 0-1.767l-1.598-1.598a1.666 1.666 0 0 0-2.357 0L10.76 12.64a6.922 6.922 0 0 1-4.067-4.067l1.253-1.252c.65-.651.65-1.706 0-2.357L6.348 3.366a1.25 1.25 0 0 0-1.768 0l-.715.716A2.952 2.952 0 0 0 3 6.166v0a10.158 10.158 0 0 0 10.167 10.167v0c.782 0 1.532-.311 2.085-.864v0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
