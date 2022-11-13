import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { getItem, setItem, Store } from '@/libs/localforage'
import { Maybe } from '@/types/Maybe'

type UseStoreQueryResult<Key extends keyof Store> = [
  Maybe<Store[Key]>,
  (value: Store[Key] | null) => void
]

export const useStoreQuery = <Key extends keyof Store>(key: Key): UseStoreQueryResult<Key> => {
  const queryClient = useQueryClient()

  const { data: value } = useQuery<Maybe<Store[Key]>>(
    [key],
    async () => {
      return await getItem(key)
    },
    {
      suspense: true,
    }
  )

  const mutation = useMutation(async (value: Store[Key] | null) => await setItem(key, value), {
    onMutate: async (value: Store[Key] | null) => {
      queryClient.setQueryData([key], value)
    },
  })

  const setValue = useCallback(
    (value: Store[Key] | null) => {
      mutation.mutate(value)
    },
    [mutation]
  )

  // MEMO: Suspenseを前提としたhookのため、undefinedのvalueが出現することはない
  assertValue(value)

  return [value, setValue]
}

function assertValue<Key extends keyof Store>(
  value?: Maybe<Store[Key]>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
): asserts value is Maybe<Store[Key]> {}
