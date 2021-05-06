import { Suspense } from 'react'
import ErrorBoundary from '../ErrorBoundary'

function DataView() {
  throw new Promise(() => {})
}

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Will not render</p>}>
        <DataView />
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
