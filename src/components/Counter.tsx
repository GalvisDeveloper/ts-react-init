
import { useState } from 'react';

const Counter = () => {

    const [value, setValue] = useState(0);

    const sum = (num: number) => {
        setValue(value + num);
    }

    const substract = (num: number) => {
        setValue(value - num);
    }

    return (
        <>
            <h3>Counter <small>{value}</small></h3>

            <button
                className="btn btn-primary"
                onClick={() => sum(1)}
            >
                +1
            </button>

            <button
                className="btn btn-primary"
                onClick={() => substract(1)}
            >
                -1
            </button>
        </>
    )
}

export default Counter