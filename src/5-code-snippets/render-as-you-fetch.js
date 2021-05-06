import { Suspense } from 'react'

const resource = fetchAllData() // 1

function UserProfile() {
  return (
    <Suspense fallback={<p>Loading profile...</p>}>
      <UserProfileName />
      <Suspense fallback={<p>Loading todos...</p>}>
        <UserProfileTodos />
      </Suspense>
    </Suspense>
  )
}

function UserProfileName() {
  const user = resource.user.read() // 2

  return <h1>{user.name}</h1>
}

function UserProfileTodos({ todos }) {
  const todos = resource.todos.read() // 3

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
