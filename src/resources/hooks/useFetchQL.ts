import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

export function useFetchQL(query: string) {
  return useQuery({
    queryKey: [query],
    queryFn: () =>
      request(
        'https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master',
        query
      ),
  })
}
