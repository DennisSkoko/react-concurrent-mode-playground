import { useState, unstable_useTransition } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

const pageLimit = 3;
const initialResource = api.users.list({ page: 1, limit: pageLimit })

function UserList() {
  const [resource, setResource] = useState(initialResource)
  const [isPending, startTransition] = unstable_useTransition()
  const users = resource.users.read()

  const handlePrevClick = () => {
    startTransition(() => {
      setResource(api.users.list({ page: resource.page - 1, limit: pageLimit }))
    })
  }

  const handleNextClick = () => {
    startTransition(() => {
      setResource(api.users.list({ page: resource.page + 1, limit: pageLimit }))
    })
  }

  return (
    <>
      <h2>Users</h2>

      <button
        disabled={resource.page === 1 || isPending}
        onClick={handlePrevClick}
      >
        Previous
      </button>
      <button
        disabled={users.length < pageLimit || isPending}
        onClick={handleNextClick}
      >
        Next
      </button>
      {isPending && <span>Loading...</span>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserList
