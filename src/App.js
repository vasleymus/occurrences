import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [occurrences, setOccurrences] = useState({})

  const handleChange = e => {
    setValue(e.target.value)
  }

  const countOccurrences = value => {
    const occurrencesArray = value.split('')

    const occurrencesObject = {}

    for (const el of occurrencesArray) {
      if (occurrencesObject[el]) {
        occurrencesObject[el] += 1
      } else {
        occurrencesObject[el] = 1
      }
    }

    setOccurrences(occurrencesObject)
  }

  useEffect(() => {
    countOccurrences(value)
  }, [value])

  return (
    <div className="App">
      <header className="App-header">
        <label>
          {value}
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <div className="occurrences">
          {Object.entries(occurrences).map(([key, value]) => {
            return (
              <React.Fragment key={key}>
                <p>
                  {key}: {value}
                </p>
              </React.Fragment>
            )
          })}
        </div>
      </header>
    </div>
  )
}

export default App
