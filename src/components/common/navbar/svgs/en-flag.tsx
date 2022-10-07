export default function Svg({ ...props }) {
  return (
    <svg width="20" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="20" height="15" rx="2" fill="#fff" />
      <mask
        id="mask0_4672_10311"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" rx="2" fill="#fff" />
      </mask>
      <g mask="url(#mask0_4672_10311)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 0H0v1h20V0Zm0 2H0v1h20V2ZM0 4h20v1H0V4Zm20 2H0v1h20V6ZM0 8h20v1H0V8Zm20 2H0v1h20v-1ZM0 12h20v1H0v-1Zm20 2H0v1h20v-1Z"
          fill="#D02F44"
        />
        <path fill="#46467F" d="M0 0h8.571v7H0z" />
        <g filter="url(#filter0_d_4672_10311)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.905 1.5c0 .276-.214.5-.477.5a.489.489 0 0 1-.476-.5c0-.276.213-.5.476-.5s.477.224.477.5Zm1.904 0c0 .276-.213.5-.476.5a.489.489 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5Zm1.429.5a.489.489 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.476.5c0 .276.213.5.476.5Zm2.38-.5c0 .276-.212.5-.475.5a.489.489 0 0 1-.477-.5c0-.276.214-.5.477-.5s.476.224.476.5ZM2.382 3a.489.489 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.476.5c0 .276.213.5.476.5Zm2.38-.5c0 .276-.212.5-.475.5a.489.489 0 0 1-.477-.5c0-.276.214-.5.477-.5s.476.224.476.5Zm1.43.5a.489.489 0 0 0 .475-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.476.5c0 .276.213.5.476.5Zm1.428.5c0 .276-.213.5-.476.5a.489.489 0 0 1-.477-.5c0-.276.214-.5.477-.5s.476.224.476.5ZM5.238 4a.489.489 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.476.5c0 .276.213.5.476.5Zm-1.429-.5c0 .276-.213.5-.476.5a.489.489 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5ZM1.43 4a.489.489 0 0 0 .476-.5c0-.276-.214-.5-.477-.5a.489.489 0 0 0-.476.5c0 .276.213.5.476.5Zm1.428.5c0 .276-.213.5-.476.5a.489.489 0 0 1-.477-.5c0-.276.214-.5.477-.5s.476.224.476.5Zm1.429.5a.489.489 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.477.5c0 .276.214.5.477.5Zm2.38-.5c0 .276-.213.5-.476.5a.489.489 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5ZM7.143 6a.489.489 0 0 0 .476-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.477.5c0 .276.214.5.477.5Zm-1.429-.5c0 .276-.213.5-.476.5a.489.489 0 0 1-.476-.5c0-.276.213-.5.476-.5s.476.224.476.5Zm-2.38.5a.489.489 0 0 0 .475-.5c0-.276-.213-.5-.476-.5a.489.489 0 0 0-.476.5c0 .276.213.5.476.5Zm-1.43-.5c0 .276-.213.5-.476.5a.489.489 0 0 1-.476-.5c0-.276.213-.5.476-.5s.477.224.477.5Z"
            fill="url(#paint0_linear_4672_10311)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4672_10311"
          x1=".952"
          y1="1"
          x2=".952"
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#F0F0F0" />
        </linearGradient>
        <filter
          id="filter0_d_4672_10311"
          x=".952"
          y="1"
          width="6.667"
          height="6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4672_10311" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4672_10311"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
