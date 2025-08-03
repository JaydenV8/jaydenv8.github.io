import { loadMdx } from 'react-router-mdx/server'
import type { Route } from './+types/post'
import { Post } from '~/components/Post'
import { PostLoading } from '~/components/Post/loading'
import { clientLoaderWithQueryCache } from '~/lib/clientLoaderWithQueryCache'
import { useMdxAttributes } from 'react-router-mdx/client'
import { postSchema } from '~/components/Post/schema'

export async function loader({ request }: Route.LoaderArgs) {
  return loadMdx(request)
}

export const clientLoader = clientLoaderWithQueryCache

export function HydrateFallback() {
  return <PostLoading />
}

export default function Home() {
  const attrs = useMdxAttributes()
  const post = postSchema.parse(attrs)
  const title = `${post.title} - Jayden's Blog`

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      {post.description ? <meta property="og:description" content={post.description} /> : null}
      {post.banner ? <meta property="og:image" content={post.banner} /> : null}
      <Post post={post} />
    </>
  )
}
