import { Suspense, useMemo } from 'react'
import api from '../api'
import UserViewInfo from './UserViewInfo'
import UserViewPosts from './UserViewPosts'
import UserViewTodos from './UserViewTodos'

function UserView({ id }) {
  const resource = useMemo(() => ({
    user: api.users.id(id).get(),
    posts: api.users.id(id).posts.list(),
    todos: api.users.id(id).todos.list()
  }), [id])

  return (
    <Suspense fallback={<p>Loading user data...</p>}>
      <UserViewInfo resource={resource.user} />

      <Suspense fallback={<p>Loading posts...</p>}>
        <UserViewPosts resource={resource.posts} />
      </Suspense>

      <Suspense fallback={<p>Loading todos...</p>}>
        <UserViewTodos resource={resource.todos} />
      </Suspense>
    </Suspense>
  )
}

export default UserView
