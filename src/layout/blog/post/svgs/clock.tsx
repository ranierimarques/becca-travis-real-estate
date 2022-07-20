export default function Svg({ ...props }) {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 10a7.5 7.5 0 1 1 7.5 7.5"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M6.753 17.46 5.12 16.29a.208.208 0 0 0-.242 0l-1.633 1.167a.208.208 0 0 1-.329-.17v-3.894a.893.893 0 0 1 .893-.893h2.38a.893.893 0 0 1 .894.893v3.898a.208.208 0 0 1-.33.17v0Z"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.584 5.833v4.584h3.75"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
