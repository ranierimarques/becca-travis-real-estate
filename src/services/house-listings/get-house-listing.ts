import { GetHouseListing, Params, ReturnType, Type } from './types'

/**
 * The previous adapter called Bridge Data's public test feed, which returns synthetic
 * properties. Keep this interface empty until an authorized production listing feed
 * replaces it. No test property should reach a public page or browser request.
 */
export async function getHouseListing<T extends Type, P extends Params>({
  type,
}: GetHouseListing<T, P>): Promise<ReturnType<T>> {
  if (type === 'card') return [] as unknown as ReturnType<T>

  if (type === 'card-full-info') {
    return { listings: [], timestamp: '', total: 0 } as unknown as ReturnType<T>
  }

  return { success: false, listing: null } as unknown as ReturnType<T>
}
