import { useStoreQuery } from './useStoreQuery'

export const useToken = () => {
  const storeQuery = useStoreQuery('token')

  return storeQuery
}
