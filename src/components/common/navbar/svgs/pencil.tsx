export default function Svg({ ...props }) {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="m2.744 5.118 2.374-2.374a.834.834 0 0 1 1.178 0l10.96 10.96a.834.834 0 0 1 0 1.179l-2.373 2.373a.834.834 0 0 1-1.179 0L2.744 6.296a.832.832 0 0 1 0-1.178Z"
        stroke="#3A8AD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m11.775 8.225-1.25 1.25M13.933 10.383l-.833.834M15.916 12.367l-1.25 1.25M9.792 6.242l-.833.825M7.633 4.083l-1.25 1.25M10.295 6.743l3.718-3.718a1.661 1.661 0 0 1 2.35.008l.596.596c.65.651.654 1.703.008 2.35l-3.719 3.718M6.743 10.295l-3.358 3.358a.836.836 0 0 0-.218.381l-.618 2.393a.837.837 0 0 0 1.022 1.019l2.387-.623a.835.835 0 0 0 .38-.217l3.359-3.36M12.6 4.442l2.95 2.95"
        stroke="#3A8AD9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
