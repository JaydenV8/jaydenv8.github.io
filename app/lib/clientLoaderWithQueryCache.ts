import { queryClient } from '~/configs/queryClient'
import type { ClientLoaderFunctionArgs } from 'react-router'

export async function clientLoaderWithQueryCache<T extends ClientLoaderFunctionArgs>({ serverLoader, request }: T) {
  const key = ['react-loader', request.url]
  const cache = queryClient.getQueryData(key)
  if (cache) return cache
  const data = await serverLoader()
  queryClient.setQueryData(key, data)
  return data
}
