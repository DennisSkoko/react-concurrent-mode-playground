function UserViewInfo({ resource }) {
  const user = resource.read()

  return (
    <>
      <h2>{user.name}'s profile</h2>

      <dl>
        <dt>Email</dt>
        <dd>{user.email}</dd>

        <dt>Website</dt>
        <dd>{user.website}</dd>

        <dt>City</dt>
        <dd>{user.address.city}</dd>
      </dl>
    </>
  )
}

export default UserViewInfo
