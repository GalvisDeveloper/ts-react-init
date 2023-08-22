

import useCounter from '../hooks/useCounter';

const CounterWithHook = () => {

    const { value, sum, substract } = useCounter(5);

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

export default CounterWithHook