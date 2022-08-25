export default function Svg({ ...props }) {
  return (
    <svg
      width="336"
      height="298"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity=".5">
        <mask
          id="mask0_4090_9687"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="-38"
          width="336"
          height="336"
        >
          <circle
            opacity=".1"
            cx="168"
            cy="130"
            r="63.235"
            stroke="#fff"
            strokeWidth="2"
          />
          <circle
            opacity=".1"
            cx="168"
            cy="130"
            r="100.294"
            stroke="#fff"
            strokeWidth="2"
          />
          <circle
            opacity=".1"
            cx="168"
            cy="130"
            r="136.529"
            stroke="#fff"
            strokeWidth="2"
          />
          <circle opacity=".1" cx="168" cy="130" r="167" stroke="#fff" strokeWidth="2" />
        </mask>
        <g mask="url(#mask0_4090_9687)">
          <path fill="#7C8999" d="M-21-55h378v353H-21z" />
        </g>
      </g>
    </svg>
  )
}
