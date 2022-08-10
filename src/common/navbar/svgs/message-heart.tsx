export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.857 14.303a7.5 7.5 0 1 1 1.84 1.839l-2.365.525.525-2.364Z"
        fill="#9CA8B7"
        stroke="#9CA8B7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="m9.812 8.256.188.191.188-.19a1.823 1.823 0 0 1 2.606 0v0c.72.734.72 1.91 0 2.645l-1.763 1.79a1.443 1.443 0 0 1-2.062 0l-1.763-1.79a1.891 1.891 0 0 1 0-2.646v0a1.823 1.823 0 0 1 2.606 0Z"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
