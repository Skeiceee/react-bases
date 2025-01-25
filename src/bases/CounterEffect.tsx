import { FC, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CounterProps {
    initialValue?: number;
}

const MAXIMUN_COUNTER = 10;

const CounterEffect: FC<CounterProps> = ({
    initialValue = 0,
}: CounterProps) => {
    const [counter, setCounter] = useState(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handlerCounterClick = () => {
        // if(counter >= MAXIMUN_COUNTER) return
        setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNTER));
    };

    useEffect(() => {
        if (counter < MAXIMUN_COUNTER) return;
        console.log(`Se llego a ${MAXIMUN_COUNTER}`);

        const tl = gsap.timeline();
        tl.to(counterElement.current, { y: -10, duration: 0.5, color: "red" })
            .to(counterElement.current, { y: 10, duration: 0.5, color: "red", ease: "bounce.out" });
    }, [counter]);

    return (
        <div>
            <h1>CounterEffect</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handlerCounterClick}>+1</button>
        </div>
    );
};

export default CounterEffect;
