export default function Svg({ ...props }) {
  return (
    <svg width="20" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="20" height="15" rx="2" fill="#fff" />
      <mask
        id="mask0_4716_10403"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" rx="2" fill="#fff" />
      </mask>
      <g mask="url(#mask0_4716_10403)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 4h20V0H0v4ZM0 15h20v-4H0v4Z"
          fill="#DD172C"
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M0 11h20V4H0v7Z" fill="#FFD133" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.238 7h.953v.5h-.953V7Z"
          fill="#FFEDB1"
        />
        <path
          d="M4.437 7.193a.333.333 0 0 1 .333-.36h.937c.195 0 .348.166.332.36l-.105 1.331a.698.698 0 0 1-1.391 0l-.106-1.331Z"
          stroke="#A41517"
          strokeWidth=".667"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.286 7.5h1.905V8h-.476l-.476 1-.477-1h-.476v-.5Z"
          fill="#A41517"
        />
        <rect x="2.857" y="6" width=".952" height="3.5" rx=".476" fill="#A41517" />
        <rect x="6.667" y="6" width=".952" height="3.5" rx=".476" fill="#A41517" />
        <path
          d="M4.286 5.8a.8.8 0 0 1 .8-.8h.305a.8.8 0 0 1 .8.8.2.2 0 0 1-.2.2H4.486a.2.2 0 0 1-.2-.2Z"
          fill="#A41517"
        />
      </g>
    </svg>
  )
}
