import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    // arrow function
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    };
    // arrow function
    const handleRemove = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
}