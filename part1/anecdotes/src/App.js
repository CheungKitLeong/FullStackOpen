import { useState } from 'react'

const Title = (props) => (<div><h1>{props.text}</h1></div>)
const Button = (props) => (<button onClick={props.handler}>{props.text}</button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const randomAnecdotes = () => (Math.floor(Math.random()*anecdotes.length))
  const ButtonHandler = (state, setState) => () => {
    setState(randomAnecdotes())
  } 

  const voteHandler = (selected) => () => {
    //console.log("Vote: "+selected)
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const maxVotes = () => {
    let maxIndex = 0
    for (let i=1; i<votes.length; i++){
      if(votes[i]> votes[maxIndex]){
        maxIndex = i
      }
    }
    return maxIndex
  }
  console.log(votes)
  return (
    <div>
      <Title text="Anecdote of the day" />
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes.
      <br />
      <Button handler={voteHandler(selected)} text="vote" />
      <Button handler={ButtonHandler(selected, setSelected)} text="next anecdote" />
      <Title text="Anecdote with most votes" />
      {anecdotes[maxVotes()]}
      <br />
      has {votes[maxVotes()]} votes.
      <br /> 
    </div>
  )
}

export default App