import { useEffect, useState, useRef } from "react";

export default function useDebounce(value, delay) {
    const [timeStart, setTimeStart] = useState();
    const [timeEnd, setTimeEnd] = useState();
    let timerRef = useRef(null);

    useEffect(() => { // Will run after every render
        setTimeStart(Date.now()); // start the timer
        timerRef = setTimeout(() => value(), delay);
     return () => { // will clear the previous timer before setting a new one
        clearTimeout(timerRef);
        setTimeEnd(Date.now());
     };   
    })

    return [timeStart, timeEnd]; // returns state values, if timeEnd > timeStart, the timeout func ran

}

// [4:35 PM] Mukesh Shukla
// mukesh.shukla@blenheimchalcot.com