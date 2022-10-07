export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.667 10.833h16.666M17.5 10.833l-.454 2.905a3.464 3.464 0 0 1-3.422 2.929H6.376a3.464 3.464 0 0 1-3.422-2.93L2.5 10.834M5.11 16.423 4.166 17.5M14.89 16.423l.943 1.077"
        stroke="#8C8A97"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M9.074 5h.186c.883 0 1.667.565 1.947 1.403v0a.833.833 0 0 1-.791 1.097H7.917a.833.833 0 0 1-.79-1.097v0A2.052 2.052 0 0 1 9.074 5v0Z"
        stroke="#7A7786"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.167 5v0a2.5 2.5 0 0 0-2.5-2.5v0a2.5 2.5 0 0 0-2.5 2.5v5.833"
        stroke="#7A7786"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
