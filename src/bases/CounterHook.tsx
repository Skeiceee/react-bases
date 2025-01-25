import { FC } from "react";
import { useCounter } from "../hooks/useCounter";

interface CounterProps {
    initialValue?: number;
}

const CounterEffect: FC<CounterProps> = ({
    initialValue = 0,
}: CounterProps) => {

    const { counter, elementToAnimate, handlerCounterClick } = useCounter({ maxCount: 10, initialValue: initialValue });

    return (
        <div>
            <h1>CounterHook</h1>
            <h2 ref={ elementToAnimate }>{counter}</h2>
            <button onClick={handlerCounterClick}>+1</button>
        </div>
    );

};

export default CounterEffect;



