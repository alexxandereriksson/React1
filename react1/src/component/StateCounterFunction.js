import React, { useState } from 'react'

function CounterFunction() {
    const [count, setCount] = useState(0)
    function decrease() {
        setCount(count - 1)
    }

    return (
        <div>
            <h4 className="App-header">
                I denna functional component använder vi useState och du har
                klickat {count}
            </h4>
            <button className="button-85" onClick={() => setCount(count + 1)}>
                Öka värdet!
            </button>
            <button className="button-85" onClick={decrease}>
                Minska värdet!
            </button>
        </div>
    )
}

export default CounterFunction
