import { useState } from 'react'

const Title = (props) => (<div><h1>{props.text}</h1></div>)

const Button = (props) => (<button onClick={props.handler}>{props.text}</button>)

const StatisticalLine = (props) => (<tr><td>{props.text}</td><td>{props.value}</td></tr>)

const Statistic = (props) => {
  console.log(props)
  const  [good, neutral, bad, total] = props.states

  const ComputeAvg = () => ((good - bad) / total)
  const ComputePos = () => ((good / total * 100)+ ' %')
  if (total > 0) {
    return (
      <div>
        <table><tbody>
        <StatisticalLine text="good" value={good} />
        <StatisticalLine text="neutral" value={neutral} />
        <StatisticalLine text="bad" value={bad} />
        <StatisticalLine text="all" value={total} />
        <StatisticalLine text="average" value={ComputeAvg()} />
        <StatisticalLine text="positive" value={ComputePos()} />
        </tbody></table>
      </div>
    )
    } else{
      return(
        <div>
          No feedback given
        </div>
      )
    }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad

  const ButtonHandler = (state, setState) => () =>{
    setState(state + 1)
    total += 1
    console.log("StatisticalLine: "+total)
  } 

  return (
    <div>
      <Title text="give feedback" />
      <Button handler={ButtonHandler(good, setGood)} text="good" />
      <Button handler={ButtonHandler(neutral, setNeutral)} text="neutral" />
      <Button handler={ButtonHandler(bad, setBad)} text="bad" />
      <Title text="statistic" />
      <Statistic states={[good, neutral, bad, total]} />
   </div>
  )
}

export default App