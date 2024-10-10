import { useState } from "react";

const FirstApp = ({value}) => {
    
    const [counter, setCounter] = useState(value);	

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>


        </>
    );
}

export default FirstApp;