import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const totalReviews = good + neutral + bad;

  const average = () => {
    return ((good * 1) + (neutral * 0) + (bad * -1)) / totalReviews || 0;
  }

  const positiveFeedback = () => {
    return (good / totalReviews) * 100 || 0;
  }

  return (
    <>
      <Header title='statistics' />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {totalReviews}</p>
      <p>average {average()}</p>
      <p>positive {positiveFeedback()} %</p>
    </>
  )
}

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App
