export default function Svg({ ...props }) {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.168 18.4 4 22.667l3.333 2 2 3.333 5.199-5.46M17.468 22.54 22.667 28l2-3.333 3.333-2-4.168-4.267"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6 6.734A9.333 9.333 0 1 1 9.4 19.933a9.333 9.333 0 0 1 13.2-13.2"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="m15.999 16.779 2.396 1.258a.636.636 0 0 0 .922-.67l-.457-2.668 1.939-1.888a.636.636 0 0 0-.352-1.086l-2.679-.389-1.197-2.428a.635.635 0 0 0-1.14 0l-1.198 2.428-2.68.39a.636.636 0 0 0-.352 1.086L13.14 14.7l-.457 2.668c-.09.52.456.916.922.67l2.396-1.258H16v-.001Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}