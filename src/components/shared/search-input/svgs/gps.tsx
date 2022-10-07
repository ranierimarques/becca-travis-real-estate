export default function Svg({ ...props }) {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M9 9.75v0A2.25 2.25 0 0 1 6.75 7.5v0A2.25 2.25 0 0 1 9 5.25v0a2.25 2.25 0 0 1 2.25 2.25v0A2.25 2.25 0 0 1 9 9.75Z"
        stroke="#42A0FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M9 15.75S3.75 11.437 3.75 7.5a5.25 5.25 0 1 1 10.5 0c0 3.938-5.25 8.25-5.25 8.25Z"
        stroke="#42A0FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
