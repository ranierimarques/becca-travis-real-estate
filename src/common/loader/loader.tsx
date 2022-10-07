import * as S from './loader.styles'

export function Loader() {
  return (
    <S.LoaderSvg
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <S.Circle
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></S.Circle>
    </S.LoaderSvg>
  )
}
