import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface Props {
    maxCount: number;
    initialValue: number;
}
export const useCounter = ( { maxCount = 1, initialValue = 0 }: Props ) => {

    const [counter, setCounter] = useState(initialValue);    
    const elementToAnimate = useRef<any>(null);

    const tl = useRef( gsap.timeline() )

    const handlerCounterClick = () => {
        // if(counter >= MAXIMUN_COUNTER) return
        setCounter((prev) => Math.min(prev + 1, maxCount));
    };

    useLayoutEffect(() => {
        if(!elementToAnimate.current) return
        tl.current
            .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out'})
            .to(elementToAnimate.current, { y: 0, duration: 0.5, ease: 'bounce.out' })
            .pause();
    }, []);

    useEffect(() => {
        // if(counter < maxCount) return;
        tl.current.play(0);
    }, [counter]);

    return {
        counter,
        elementToAnimate,
        handlerCounterClick
    }
}