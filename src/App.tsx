import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { FullPageSpinner } from './components'
import { routesConfig } from './routes'

function App() {
  const element = useRoutes(routesConfig)
  return <Suspense fallback={<FullPageSpinner />}>{element}</Suspense>
}

export default App
