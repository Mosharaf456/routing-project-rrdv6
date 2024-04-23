import { useState } from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue)
    }
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    console.log('value: ', value);
    console.log('bind: ', bind);
    console.log('reset: ', reset);
    return [value, bind, reset];
}

export default useInput