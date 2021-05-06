import api from '../api'

const resource = api.albums.list()

function AlbumList() {
  const albums = resource.read()

  return (
    <>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </>
  )
}

export default AlbumList
