import { type RouteConfig, index, layout } from '@react-router/dev/routes'
import { routes } from 'react-router-mdx/server'

export default [
  layout('routes/layout.tsx', [index('routes/home.tsx'), ...routes('./routes/post.tsx')]),
] satisfies RouteConfig
