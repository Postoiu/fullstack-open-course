import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalReviews = good + neutral + bad;

  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / totalReviews;

  const positiveFeedback = (good / totalReviews) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <Header title='statistics' />
      <table>
        <tbody>
          <StatisticLine text='good' value= {good} />
          <StatisticLine text='neutral' value= {neutral} />
          <StatisticLine text='bad' value= {bad} />
          <StatisticLine text='all' value= {totalReviews} />
          <StatisticLine text='average' value= {average} />
          <StatisticLine text='positive' value= {positiveFeedback} />
        </tbody>
      </table>
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
