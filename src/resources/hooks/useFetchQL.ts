import { request } from "graphql-request"
import useSWR from "swr"

const fetcher = (query: any) =>
  request(
    "https://api-us-east-1.hygraph.com/v2/cl5jvxz1t27ha01ujh7na0fn3/master",
    query
  )

export function useFetchQL(query: string) {
  const { data, error } = useSWR(query, fetcher)

  return { data, error }
}
