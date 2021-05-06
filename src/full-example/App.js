import { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'
import Header from './Header'

const AlbumList = lazy(() => import('./AlbumList'))
const UserList = lazy(() => import('./UserList'))
const UserView = lazy(() => import('./UserView'))

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong :(</p>}>
      <BrowserRouter>
        <Header />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Redirect exact from='/' to='/users' />

            <Route exact path='/users'>
              <UserList />
            </Route>

            <Route exact path='/users/:id'>
              {({ match }) => <UserView id={match.params.id} />}
            </Route>

            <Route path='/albums'>
              <AlbumList />
            </Route>

            <Route>
              <p>Page not found</p>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
