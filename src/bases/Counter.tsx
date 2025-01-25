import { FC, useState } from 'react'

interface CounterProps {
    initialValue?: number;
}

const Counter:FC<CounterProps> = ( { initialValue = 0 }: CounterProps ) => {

    const [counter, setCounter] = useState(initialValue)
    const handlerCounterClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Counter: { counter } </h1>
            <button onClick={handlerCounterClick}>
                +1
            </button>
        </div>
    )

}

export default Counter
