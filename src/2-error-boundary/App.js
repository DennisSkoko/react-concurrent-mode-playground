import ErrorBoundary from '../ErrorBoundary'

function BadComponent() {
  throw new Error('I refuse to render!')
}

function GoodComponent() {
  return <p>Because of my friend above me, I will never render...</p>
}

function App() {
  return (
    <ErrorBoundary
      fallback={<p>I won't render but I'm ready if something unexpected happens!</p>}
    >
      <p>I will always render since the error boundary got my back!</p>
      <ErrorBoundary
        fallback={<p>Something bad happened, have you tried restart your computer?</p>}
      >
        <BadComponent />
        <GoodComponent />
      </ErrorBoundary>
    </ErrorBoundary>
  )
}

export default App
