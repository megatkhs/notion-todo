import { useStoreQuery } from './useStoreQuery'

export const useDatabaseId = () => {
  const storeQuery = useStoreQuery('databaseId')

  return storeQuery
}
