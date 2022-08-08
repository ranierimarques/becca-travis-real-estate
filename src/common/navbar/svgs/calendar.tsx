export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.321 6.665h.885c.717 0 1.297.58 1.297 1.297v8.245c0 .716-.58 1.296-1.297 1.296H7.129c-.717 0-1.297-.58-1.297-1.297v-1.204"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M3.331 15.002h9.43c.559 0 1.079-.278 1.388-.743l.612-.918c.365-.548.56-1.192.56-1.85V4.998c0-.921-.746-1.667-1.667-1.667H5.317c-.921 0-1.667.746-1.667 1.667v5.882c0 .518-.121 1.028-.352 1.492l-.712 1.424a.833.833 0 0 0 .745 1.206Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m11.376 7.993-2.345 2.345-1.407-1.406M6.982 2.497v1.667M11.984 2.497v1.667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
