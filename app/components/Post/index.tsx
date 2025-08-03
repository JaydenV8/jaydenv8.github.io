import dayjs from 'dayjs'
import { useMdxComponent } from 'react-router-mdx/client'
import { type Post } from '~/components/Post/schema'

export function Post({ post }: { post: Post }) {
  const Component = useMdxComponent()
  return (
    <div className="mx-auto flex flex-col w-full items-center">
      {post.banner ? (
        <img src={post.banner} alt={post.title} className="object-cover aspect-square w-full max-w-[680px]" />
      ) : null}
      <article className="prose dark:prose-invert article-content max-w-[680px] p-6 w-full">
        <h1>{post.title}</h1>
        <div className="flex justify-between items-end mb-8">
          {post.date ? (
            <time dateTime={post.date.toString()} className="text-muted-foreground">
              {dayjs(post.date).format('MMM DD, YYYY')}
            </time>
          ) : null}
        </div>
        <Component />
      </article>
    </div>
  )
}
