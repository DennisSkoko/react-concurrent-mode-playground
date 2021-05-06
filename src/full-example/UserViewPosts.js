function UserViewPosts({ resource }) {
  const posts = resource.read()

  return (
    <>
      <h3>Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default UserViewPosts
