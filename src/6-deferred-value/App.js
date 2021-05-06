import { useState, unstable_useDeferredValue, memo } from 'react'

function SearchResult({ search }) {
  const now = performance.now()
  while (performance.now() - now < 1000) {
    // Intentionally does nothing in order to block the main thread for x number
    // of milliseconds.
  }

  return <p>Search result for: {search}</p>
}

const MemoizedSearchResult = memo(SearchResult)

function App() {
  const [search, setSearch] = useState('')
  const deferredSearch = unstable_useDeferredValue(search, { timeoutMs: 2500 })

  return (
    <>
      <h2>Search</h2>

      <input
        placeholder='Foo...'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      <MemoizedSearchResult search={deferredSearch} />
    </>
  )
}

export default App
