import type { Config } from '@react-router/dev/config'
import { init } from 'react-router-mdx/server'

const mdx = init({ path: 'posts' })

export default {
  ssr: true,
  routeDiscovery: { mode: 'initial' },
  async prerender() {
    return ['/', ...(await mdx.paths())]
  },
} satisfies Config
