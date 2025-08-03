import { Link, Outlet, useNavigation, matchPath, type Location } from 'react-router'
import { PostLoading } from '~/components/Post/loading'
import { PostsLoading } from '~/components/Posts/loading'
import AvatarImage from '~/assets/avatar.png'

const loadings = [
  {
    path: '/posts/:id',
    element: <PostLoading />,
  },
  {
    path: '/',
    element: <PostsLoading />,
  },
]

export function Loading(location: Location) {
  const loading = loadings.find(({ path }) => matchPath(path, location.pathname))
  if (!loading) return null
  return loading.element
}

export default function Layout() {
  const { state, location } = useNavigation()
  const loading = state === 'loading' && location ? Loading(location) : null
  return (
    <>
      <header className="py-4 flex items-center justify-between w-full max-w-[680px] px-6">
        <Link to="/" className="text-blue-500">
          Jayden's Blog
        </Link>
        <div>
          <Link
            to="https://github.com/JaydenV8/jaydenv8.github.io"
            target="_blank"
            className="flex items-center space-x-2 hover:underline cursor-pointer"
          >
            <span>By</span> <img src={AvatarImage} className="size-6 rounded-full" alt="avatar" />
          </Link>
        </div>
      </header>
      {loading ? loading : <Outlet />}
    </>
  )
}
