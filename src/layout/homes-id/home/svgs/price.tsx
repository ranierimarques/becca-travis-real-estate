export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10 7.5v.673M8.333 9.52A1.532 1.532 0 0 1 10 8.173M10 14.167v-.674M11.667 12.147A1.532 1.532 0 0 1 10 13.493M11.624 9.226A1.626 1.626 0 0 0 10 8.173M8.376 12.44c.25.67.91 1.098 1.624 1.053M8.333 9.52v0c0 .57.403 1.06.962 1.172l1.41.283c.56.111.962.602.962 1.172v0"
        stroke="#7A7786"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M17.5 14.167V8.933c0-1.013-.46-1.97-1.251-2.603l-3.646-2.917a4.167 4.167 0 0 0-5.206 0L3.751 6.33A3.333 3.333 0 0 0 2.5 8.933v5.234A3.333 3.333 0 0 0 5.833 17.5h8.334a3.333 3.333 0 0 0 3.333-3.333Z"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
