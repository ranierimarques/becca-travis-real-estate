export default function Svg({ ...props }) {
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx="8"
        cy="7"
        r="1.667"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M13.333 8.347c0 2.517-3.096 4.386-4.573 5.137a1.67 1.67 0 0 1-1.518 0c-1.475-.749-4.575-2.623-4.575-5.137V4.713a.675.675 0 0 1 .601-.661 7.595 7.595 0 0 0 3.915-1.448 1.368 1.368 0 0 1 1.634 0 7.595 7.595 0 0 0 3.915 1.448c.338.037.596.32.601.66v3.635Z"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m11.267 11.868-.306-.613a1.666 1.666 0 0 0-1.491-.922H6.53c-.631 0-1.208.357-1.49.922l-.306.61"
        stroke="#9D446E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
