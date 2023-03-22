import React from 'react'

function FunctionEvent() {
    function clickEvent() {
        console.log('Hej')
    }
    return (
        <div>
            <h4 className="App-header">This butt Console Logs</h4>
            <button className="button-85" onClick={clickEvent}>
                Event Knapp!
            </button>
        </div>
    )
}

export default FunctionEvent
