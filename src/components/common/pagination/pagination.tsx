import Link from 'next/link'
import * as S from './pagination.styles'

const getPages = (length: number, inc = 1) => Array.from({ length }, (_, i) => i + inc)

const dotts = '...'

function usePagination(totalItems: number, currentPage: number, itemsPerPage: number) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return getPages(totalPages)
  }
  // -> 1 2 3 4 ... 10
  if (currentPage <= 3) {
    return [1, 2, 3, 4, dotts, totalPages]
  }
  // -> 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return [1, dotts, currentPage - 1, currentPage, currentPage + 1, dotts, totalPages]
  }
  // -> 1 ... 7 8 9 10
  return [1, dotts, ...getPages(4, totalPages - 3)]
}

export type PaginationProps = {
  totalItems: number
  currentPage: number
  renderPageLink: (page: number) => string
  itemsPerPage?: number
}

export function Pagination({
  totalItems,
  currentPage,
  itemsPerPage = 6,
  renderPageLink,
}: PaginationProps) {
  const pages = usePagination(totalItems, currentPage, itemsPerPage)

  return (
    <S.Container>
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span key={i}>{pageNumber}</span>
        ) : (
          <Link key={i} href={renderPageLink(pageNumber as number)} passHref>
            <S.Link active={pageNumber === currentPage}>{pageNumber}</S.Link>
          </Link>
        )
      )}
    </S.Container>
  )
}
