export default function Svg({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 9v.808M10 11.424a1.839 1.839 0 0 1 2-1.616M12 17v-.808M14 14.576a1.839 1.839 0 0 1-2 1.616M13.95 11.071A1.95 1.95 0 0 0 12 9.808M10.05 14.929A1.95 1.95 0 0 0 12 16.192M10 11.424v0c0 .684.483 1.273 1.154 1.407l1.692.338c.671.134 1.154.723 1.154 1.407v0"
        stroke="#83CF77"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 17v-6.28a4 4 0 0 0-1.501-3.124l-4.375-3.5a5 5 0 0 0-6.248 0l-4.375 3.5A4 4 0 0 0 3 10.719V17a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z"
        fill="#83CF77"
        fillOpacity=".2"
        stroke="#83CF77"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
