const promise = fetchAllData() // 1

function UserProfile() {
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState(null)

  useEffect(() => { // 3
    promise.then(({ user, todos }) => {
      setUser(user)
      setTodos(todos)
    })
  }, [id])

  if (user === null) return <p>Loading profile...</p> // 2

  return ( // 4
    <>
      <h1>{user.name}</h1>
      <UserProfileTodos todos={todos} />
    </>
  )
}

function UserProfileTodos({ todos }) {
  return ( // 5
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
