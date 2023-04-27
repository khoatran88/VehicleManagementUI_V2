export interface Response {
  data?: any
  succeeded?: boolean
  message?: string
}

export interface PagedResponse extends Response {
  currentPage?: number
  totalPages?: number
  pageSize?: number
  totalCount?: number
  hasPrevious?: boolean
  hasNext?: boolean
}

export type Pagnation = {
  pageNumber: number
  totalCount: number
  pageSize: number
  hasPrevious: boolean
  hasNext: boolean
}

export function DefaultPagnation(
  pageNumber: number = 1,
  totalCount: number = 0,
  pageSize: number = 20,
  hasPrevious: boolean = false,
  hasNext: boolean = false
): Pagnation {
  return {
    pageNumber: pageNumber,
    totalCount: totalCount,
    pageSize: pageSize,
    hasPrevious: hasPrevious,
    hasNext: hasNext,
  }
}
