import { useState } from 'react';


const useCounter = (initial: number = 0) => {

    const [value, setValue] = useState(initial);

    const sum = (num: number) => {
        setValue(value + num);
    }

    const substract = (num: number) => {
        setValue(value - num);
    }

    return {
        value,
        sum,
        substract,
    }
}

export default useCounter