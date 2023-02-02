import { useQuery } from '@tanstack/react-query'

export function useFetch(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: async () => await fetch(url).then(response => response.json()),
  })
}
