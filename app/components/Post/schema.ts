import { z } from 'zod'

export const postSchema = z.object({
  date: z.date().optional(),
  description: z.string().optional(),
  title: z.string().optional(),
  category: z.string().optional(),
  banner: z.string().optional(),
})

export type Post = z.infer<typeof postSchema>
