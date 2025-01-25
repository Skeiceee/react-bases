import Counter from './bases/Counter'
import CounterBy from './bases/CounterBy'
import CounterEffect from './bases/CounterEffect'
import CounterHook from './bases/CounterHook'
import CounterReducer from './counter-reducer/CounterReducer'
// import CounterReducer from './bases/CounterReduces'

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterHook initialValue={0}/>
      <CounterReducer/>
    </>
  )
}

export default App
