import useSWR from "swr"

export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async fetchURL => {
    const response = await fetch(fetchURL)
    return response.json()
  })

  return { data, error }
}
