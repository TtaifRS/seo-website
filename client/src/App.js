import { useState } from 'react'
import SearchBarComponent from './components/SearchBarComponents'

const App = () => {
  const [url, setUrl] = useState('')

  console.log(url)
  return (
    <div>
      <SearchBarComponent getURL={url => setUrl(url)} />
    </div>
  )
}

export default App
