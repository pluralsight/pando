export interface PaginationOptions {
  kind?: PaginationKind
}

type PaginationKind = 'more' | 'newerOlder' | 'bar'
