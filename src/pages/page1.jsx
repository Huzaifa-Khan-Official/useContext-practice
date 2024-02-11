import React, { useContext } from 'react'
import Counter from '../context/context'

export default function Page1() {
    let { counter, setCounter } = useContext(Counter);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (!counter <= 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className='px-4 py-5'>
            <h1 className='text-center'>Page 1</h1>
            <h1 className='text-center mt-3'>{counter}</h1>

            <div className='d-flex flex-column align-items-center gap-4 mt-5 btnsDiv'>
                <button onClick={increment} className='btn btn-primary'>
                    +
                </button>
                <button onClick={decrement} className='btn btn-danger'>
                    -
                </button>
            </div>
        </div>
    )
}