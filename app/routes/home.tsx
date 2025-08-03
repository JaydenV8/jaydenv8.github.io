import { loadAllMdx } from 'react-router-mdx/server'
import { useMdxFiles } from 'react-router-mdx/client'
import dayjs from 'dayjs'
import { Link } from 'react-router'
import { z } from 'zod'

import type { Route } from './+types/home'
import { postSchema } from '~/components/Post/schema'
import { PostsLoading } from '~/components/Posts/loading'
import { cn } from '~/lib/utils'
import { clientLoaderWithQueryCache } from '~/lib/clientLoaderWithQueryCache'

export function meta({}: Route.MetaArgs) {
  return [{ title: "Jayden's Blogs" }, { name: 'description', content: "Welcome to Jayden's Blogs!" }]
}

const postsSchema = z
  .array(
    z.object({
      ...postSchema.shape,
      slug: z.string().optional(),
    }),
  )
  .min(1)

export function loader() {
  return loadAllMdx()
}

export const clientLoader = clientLoaderWithQueryCache

export function HydrateFallback() {
  return <PostsLoading />
}

export default function Home() {
  const files = useMdxFiles()
  const posts = postsSchema.parse(files)

  return (
    <div className="max-w-[680px] bg-background">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className={cn('grid w-full p-6 border-b border-input', {
            'grid-cols-[1fr_120px] gap-4': !!post.banner,
          })}
          to={`/posts/${post.slug}`}
        >
          <div>
            <h2 className="text-xl font-bold">{post.title}</h2>
            {post.date ? <p className="text-sm mt-2">{dayjs(post.date).format('MMM DD, YYYY')}</p> : null}
            <p className="text-muted-foreground mt-2 line-clamp-2">{post.description}</p>
          </div>
          {post.banner ? (
            <img src={post.banner} alt={post.title} className="rounded-lg object-cover aspect-square" />
          ) : null}
        </Link>
      ))}
    </div>
  )
}
