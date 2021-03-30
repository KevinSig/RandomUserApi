import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json()
    const [item] = data.results

    console.log(item)
    setData(item)
    setLoading(false)
  }, [])

  return { data, loading }
}

function App() {
  const [count, setCount] = useState(0)

  const { data, loading } = useFetch("https://randomuser.me/api")

  useEffect(() => {
    document.title = `${count}`
  }, [count])

  return (
    <div className='App'>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {loading ? <div>loading</div> : <div>{data.name.first}</div>}
    </div>
  )
}

export default App
