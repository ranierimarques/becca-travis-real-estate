export default function Svg({ ...props }) {
  return (
    <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0Z"
        fill="#EF5BA1"
      />
      <path
        d="M11 20.947c-5.485 0-9.947-4.462-9.947-9.947 0-5.485 4.462-9.947 9.947-9.947 5.485 0 9.948 4.462 9.948 9.947 0 5.485-4.463 9.947-9.948 9.947Z"
        fill="#352E46"
      />
      <path
        d="M11.839 10.891a1.326 1.326 0 1 0 2.653-.001 1.326 1.326 0 0 0-2.653.001Zm-4.305 0a1.326 1.326 0 1 0 2.653-.001 1.326 1.326 0 0 0-2.653.001Zm1.493 4.89H7.576a.861.861 0 0 1-.862-.861v-1.46h-.512a.464.464 0 0 1-.465-.464V11.12a.464.464 0 0 1 .465-.464h.512V8.818c0-.475.386-.86.861-.86h3.179V7.43a1.361 1.361 0 0 1 .272-2.694 1.361 1.361 0 0 1 .217 2.704v.517h3.188c.476 0 .862.385.862.86v1.84h.506a.464.464 0 0 1 .465.463v1.875a.465.465 0 0 1-.465.463h-.506v1.46c0 .476-.386.862-.862.862H9.027Zm-.647-2.338a.53.53 0 0 0-.527.527v.08c0 .292.237.528.527.528h5.387a.53.53 0 0 0 .527-.527v-.08a.528.528 0 0 0-.527-.528H8.38Z"
        fill="#fff"
      />
    </svg>
  )
}