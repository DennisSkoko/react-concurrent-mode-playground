function UserViewTodos({ resource }) {
  const todos = resource.read()

  return (
    <>
      <h3>Todos</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default UserViewTodos
