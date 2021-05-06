function UserProfile() {
  const [user, setUser] = useState(null)

  useEffect(() => { // 2
    fetchUser().then(u => setUser(u))
  }, [id])

  if (user === null) return <p>Loading profile...</p> // 1

  return ( // 3
    <>
      <h1>{user.name}</h1>
      <UserProfileTodos />
    </>
  )
}

function UserProfileTodos() {
  const [todos, setTodos] = useState(null)

  useEffect(() => { // 5
    fetchTodos().then(p => setTodos(p))
  }, [])

  if (todos === null) return <h2>Loading todos...</h2> // 4

  return ( // 6
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
