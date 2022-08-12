export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m7.767 1.667.341 1.283M11.909 17.117l.324 1.216M3.9 3.9l.942.942M15.209 15.209l.891.891M1.667 7.767l1.283.341M17.117 11.909l1.216.324M1.667 12.233l1.283-.341M17.117 8.092l1.216-.325M3.9 16.1l.942-.942M15.209 4.792 16.1 3.9M7.767 18.333l.341-1.283M11.909 2.883l.324-1.216"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 7.35c.36-.42.98-.891 1.925-.891 1.653 0 2.762 1.551 2.762 2.997 0 3.02-3.761 5.336-4.687 5.336-.926 0-4.688-2.315-4.688-5.336 0-1.446 1.11-2.997 2.763-2.997.945 0 1.566.471 1.925.89Z"
        fill="currentColor"
      />
    </svg>
  )
}
