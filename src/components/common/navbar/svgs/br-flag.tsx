export default function Svg({ ...props }) {
  return (
    <svg width="20" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="20" height="15" rx="2" fill="#fff" />
      <mask
        id="mask0_4672_10343"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="15"
      >
        <rect width="20" height="15" rx="2" fill="#fff" />
      </mask>
      <g mask="url(#mask0_4672_10343)">
        <path fill="#05AB41" d="M0 0h20v15H0z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.716 8.051a.667.667 0 0 1 0-1.102l6.909-4.694a.667.667 0 0 1 .75 0l6.908 4.694c.39.264.39.838 0 1.102l-6.909 4.694a.667.667 0 0 1-.75 0L2.717 8.052Z"
          fill="#FDD216"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 11c1.841 0 3.334-1.567 3.334-3.5S11.84 4 10 4C8.16 4 6.667 5.567 6.667 7.5S8.159 11 10 11Z"
          fill="#053087"
        />
        <mask
          id="mask1_4672_10343"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="4"
          width="8"
          height="7"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 11c1.841 0 3.334-1.567 3.334-3.5S11.84 4 10 4C8.16 4 6.667 5.567 6.667 7.5S8.159 11 10 11Z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#mask1_4672_10343)">
          <path
            d="M6.272 6.585c.523-.445 2.212-.023 3.788.418 1.577.442 3.22 1.367 3.64 1.91"
            stroke="#fff"
            strokeWidth="1.333"
            strokeLinecap="square"
          />
        </g>
      </g>
    </svg>
  )
}
