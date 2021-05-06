import { wrap } from './resource'

function wait() {
  return new Promise(resolve => {
    setTimeout(resolve, Math.round(Math.random() * 2000))
  })
}

function queryString(params) {
  return Object
    .entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

async function fetchFromApi(resource, params = {}) {
  const res = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/${resource}?${queryString(params)}`
  )

  await wait()

  if (!res.ok) throw new Error('Non successful status code from the server')

  return res.json()
}

const api = {
  users: {
    list({ page, limit }) {
      return {
        users: wrap(fetchFromApi('users', { _page: page, _limit: limit })),
        page
      }
    },

    id(id) {
      return {
        get() {
          return wrap(fetchFromApi(`users/${id}`))
        },

        posts: {
          list() {
            return wrap(fetchFromApi('posts', { userId: id }))
          }
        },

        todos: {
          list() {
            return wrap(fetchFromApi('todos', { userId: id }))
          }
        }
      }
    }
  },

  albums: {
    list() {
      return wrap(fetchFromApi('albums'))
    }
  }
}

export default api
