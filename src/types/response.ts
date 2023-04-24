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