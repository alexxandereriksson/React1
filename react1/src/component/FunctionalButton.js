import React, { useState } from 'react'

function FunctionalButton(props) {
    const [count, setCount] = useState(100)

    return (
        <div>
            <h4 className="App-header">
                Denn knapp Decreasar {props.prop1}: {count}
            </h4>
            <button className="button-85" onClick={() => setCount(count - 1)}>
                Button
            </button>
        </div>
    )
}

export default FunctionalButton
