export function wrap(promise) {
  let status = 'pending'
  let result = null

  let suspender = promise
    .then(data => {
      status = 'resolved'
      result = data
    })
    .catch(err => {
      status = 'rejected'
      result = err
    })

  return {
    read() {
      // eslint-disable-next-line default-case
      switch (status) {
        case 'pending':
          throw suspender
        case 'rejected':
          throw result
        case 'resolved':
          return result
      }
    }
  }
}
