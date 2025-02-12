import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title='give feedback' />
      <Button
        onClick={() => setGood(good + 1)}
        text= 'good'
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text= 'neutral'
      />
      <Button
        onClick={() => setBad(bad + 1)}
        text= 'bad'
      />

      <Header title='statistics' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App
