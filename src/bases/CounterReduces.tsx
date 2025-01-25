import { FC, useReducer } from 'react'

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }


const counterReducer = ( state:CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
        case 'increaseBy':
            return {
                counter: state.counter + action.payload.value,
                previous: state.counter,
                changes: state.changes + 1
            }
        default:
            return state;
    }

}

const CounterReducer: FC = () => {

    const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handlerCounterClickReset = () => {
        dispatch({ type: 'reset' })	
    }

    const handlerCounterClick = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }

    return (
        <div>
            <h1>CounterReducer: {counter} </h1>
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
