import localforage from 'localforage'
import { Maybe } from '@/types/Maybe'

const store = localforage.createInstance({
  name: 'notion-todo',
})

export type Store = {
  token: string
  databaseId: string
}

export const getItem = async <Key extends keyof Store>(key: Key): Promise<Maybe<Store[Key]>> => {
  try {
    return await store.getItem(key)
  } catch {
    throw new Error(`${store.config().name}の${key}を取得できませんでした。`)
  }
}

export const setItem = async <Key extends keyof Store>(key: Key, value: Maybe<Store[Key]>) => {
  try {
    return await store.setItem(key, value)
  } catch {
    throw new Error(`${store.config().name}の${key}に保存できませんでした。`)
  }
}
