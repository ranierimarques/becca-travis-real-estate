import * as S from './pagination.styles'

const getPages = (length: number, inc = 1) => Array.from({ length }, (_, i) => i + inc)

const dots = '...'

function usePagination(totalItems: number, currentPage: number, itemsPerPage: number) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return getPages(totalPages)
  }
  // -> 1 2 3 4 ... 10
  if (currentPage <= 3) {
    return [1, 2, 3, 4, dots, totalPages]
  }
  // -> 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return [1, dots, currentPage - 1, currentPage, currentPage + 1, dots, totalPages]
  }
  // -> 1 ... 7 8 9 10
  return [1, dots, ...getPages(4, totalPages - 3)]
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
        pageNumber === dots ? (
          <S.Dotts key={i}>{pageNumber}</S.Dotts>
        ) : (
          <S.Link
            key={i}
            href={renderPageLink(pageNumber as number)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </S.Link>
        )
      )}
    </S.Container>
  )
}
