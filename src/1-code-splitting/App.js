import { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import Header from './Header'

const Foo = lazy(() => import('./Foo'))
const Bar = lazy(() => import('./Bar'))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p>Please wait while I'm fetching your page</p>}>
        <Switch>
          <Redirect from='/' exact to='/foo' />

          <Route path='/foo'>
            <Foo />
          </Route>

          <Route path='/bar'>
            <Bar />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
