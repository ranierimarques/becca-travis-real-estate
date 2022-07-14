export default function Svg({ ...props }) {
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.9 6.1c5.467 5.468 5.467 14.333 0 19.8-5.467 5.467-14.332 5.467-19.8 0C.633 20.433.633 11.568 6.1 6.1 11.568.633 20.433.633 25.9 6.1"
        fill="#fff"
      />
      <path
        d="M11.532 14.099v6.545m4.361 0v-3.819A2.726 2.726 0 0 1 18.62 14.1v0a2.726 2.726 0 0 1 2.727 2.726v3.819M11.53 10.144a.274.274 0 1 0 .003.546.274.274 0 0 0-.004-.546"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
