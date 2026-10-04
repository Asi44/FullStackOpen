import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}> {text} </button>
    </>
  )
}

const StatisticLine = ({text, val}) => {
  return (
    <>
      <tr><td>{text}</td> <td>{val}</td></tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad;

  const average = (good - bad) / all

  const positive = (good / all) * 100

  if (all == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <h2>statistics</h2>
      <StatisticLine text='good' val ={good}/>
      <StatisticLine text='neutral' val ={neutral}/>
      <StatisticLine text='bad' val ={bad}/>
      <StatisticLine text='all' val ={all}/>
      <StatisticLine text='average' val ={average}/>
      <StatisticLine text='positive' val ={positive}/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handlegood = () => {
    setGood(good + 1);
  }
  const handleneutral = () => {
    setNeutral(neutral + 1);
  }
  const handlebad = () => {
    setBad(bad + 1);

  }

  return (
    
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handlegood} text = 'good'/>
      <Button handleClick={handleneutral} text = 'neutral'/>
      <Button handleClick={handlebad} text = "bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App