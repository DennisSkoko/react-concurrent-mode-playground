import { Suspense, useMemo } from 'react'
import api from '../api'

function AlbumList({ resource }) {
  const albums = resource.read()

  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  )
}

function App() {
  const resource = useMemo(() => api.albums.list(), [])

  return (
    <Suspense fallback={<p>Fetching albums...</p>}>
      <h1>Albums</h1>
      <AlbumList resource={resource} />
    </Suspense>
  )
}

export default App
