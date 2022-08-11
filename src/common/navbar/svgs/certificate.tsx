export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.833 18.333H4.167c-.921 0-1.667-.745-1.667-1.666V3.333c0-.92.746-1.666 1.667-1.666h11.666c.921 0 1.667.746 1.667 1.666v13.334c0 .92-.746 1.666-1.667 1.666Z"
        fill="#9CA8B7"
      />
      <path
        d="M13.333 12.5H6.667M11.667 15H8.333"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10 8.886 1.253.658c.245.129.53-.079.483-.35l-.24-1.396 1.015-.988a.333.333 0 0 0-.184-.567l-1.402-.204-.627-1.27a.333.333 0 0 0-.596 0l-.627 1.27-1.402.204a.333.333 0 0 0-.184.568l1.014.987-.239 1.396a.333.333 0 0 0 .483.351L10 8.885"
        fill="#fff"
      />
    </svg>
  )
}
