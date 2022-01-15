import { useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import SearchBarComponent from './components/HomePage'

const App = () => {
  const [url, setUrl] = useState('')

  console.log(url)
  return (
    <Router>
      <SearchBarComponent getURL={url => setUrl(url)} />
    </Router>
  )
}

export default App
