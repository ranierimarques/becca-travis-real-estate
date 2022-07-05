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
        opacity=".6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.9 6.1c5.467 5.468 5.467 14.332 0 19.8-5.468 5.467-14.332 5.467-19.8 0C.634 20.431.634 11.567 6.1 6.1 11.569.634 20.433.634 25.9 6.1Z"
        fill="#33303E"
      />
      <path
        opacity=".8"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.287 10C22.108 10 24 12.608 24 15.036 24 19.964 16.143 24 16 24c-.143 0-8-4.036-8-8.964C8 12.608 9.894 10 12.713 10c1.614 0 2.673.791 3.287 1.497.612-.706 1.672-1.497 3.287-1.497Z"
        fill="#fff"
      />
    </svg>
  )
}
