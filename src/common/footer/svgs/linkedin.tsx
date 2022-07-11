export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.428 6.572c5.207 5.207 5.207 13.65 0 18.856-5.207 5.207-13.65 5.207-18.856 0-5.207-5.207-5.207-13.65 0-18.856 5.207-5.207 13.65-5.207 18.856 0Z"
        fill="#fff"
      />
      <path
        d="M11.532 14.099v6.545m4.361 0v-3.819A2.726 2.726 0 0 1 18.62 14.1v0a2.726 2.726 0 0 1 2.727 2.726v3.819M11.53 10.144a.274.274 0 1 0 .003.546.274.274 0 0 0-.004-.546"
        stroke="#7B3455"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
