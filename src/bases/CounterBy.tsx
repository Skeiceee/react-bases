import { FC, useState } from 'react'

interface CounterProps {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

const CounterBy:FC<CounterProps> = ( { initialValue = 0 }: CounterProps ) => {

    const [ { counter, clicks } , setCounterState ] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    })

    const handlerCounterClick = (value: number) => {
        setCounterState( ( { clicks, counter } ) => (
            {
                counter: counter + value,
                clicks: clicks + 1
            }
        ))
    }

    return (
        <div>
            <h1>CounterBy: { counter } </h1>
            <h1>Clicks: { clicks } </h1>
            <button onClick={ () => handlerCounterClick(1) }>+1</button>
            <button onClick={ () => handlerCounterClick(5) }>+5</button>
        </div>
    )

}

export default CounterBy
