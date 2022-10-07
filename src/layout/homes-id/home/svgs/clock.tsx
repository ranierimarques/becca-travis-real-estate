export default function Svg({ ...props }) {
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 12a9 9 0 1 1 9 9"
        stroke="#5F5C6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="m8.104 20.953-1.959-1.404a.25.25 0 0 0-.29 0l-1.96 1.4a.25.25 0 0 1-.395-.204v-4.674A1.071 1.071 0 0 1 4.571 15H7.43A1.072 1.072 0 0 1 8.5 16.071v4.679a.25.25 0 0 1-.396.203v0Z"
        stroke="#5F5C6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 7v5.5H16"
        stroke="#5F5C6B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
