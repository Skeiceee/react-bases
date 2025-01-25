import { FC, useReducer } from 'react'
import { counterReducer } from './state/counterReducer'
import * as CounterActions from './actions/actions'

const INITIAL_STATE = {
    counter: 0,
    previous: 0,
    changes: 0
}

const CounterReducer: FC = () => {

    const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handlerCounterClickReset = () => {
        dispatch( CounterActions.doReset() )	
    }

    const handlerCounterClick = (value: number) => {
        dispatch( CounterActions.doIncreaseBy(value) )
    }

    return (
        <div>
            <h1>CounterReducer (Segmentado): {counter} </h1>
            <button onClick={ () => handlerCounterClick(1)}>
                +1
            </button> 
            <button onClick={ () => handlerCounterClick(5)}>
                +5
            </button>
            <button onClick={ () => handlerCounterClick(10)}>
                +10
            </button>
            <button onClick={handlerCounterClickReset}>
                reset
            </button>
        </div>
    )

}

export default CounterReducer
