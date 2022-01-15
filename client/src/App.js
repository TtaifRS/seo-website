import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AnalyzePage from './pages/AnalyzePage.js'
import HomePage from './pages/HomePage'

const App = () => {
  const [url, setUrl] = useState('')

  console.log(url)
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage getURL={url => setUrl(url)} />} />


        <Route path="/analyze" element={url !== "" ? <AnalyzePage url={url} /> : <Navigate to="/" />} />


      </Routes>

    </Router>
  )
}

export default App
