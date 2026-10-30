import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: '/homes', permanent: false },
})

export default function HomeUnavailable() {
  return null
}
