import { Component } from 'react'

class StateCounterClass extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
    }

    // SKAPAR EN INCREMENT FUNKTION SOM LOGGAR VARJE KNAPPTRYCK.
    increment() {
        console.log(this)
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <div>
                <h4 className="App-header">
                    I denna komponent använder vi setState i en klasskomponent
                    och värdet är : {this.state.counter}
                </h4>
                <button className="button-85" onClick={() => this.increment()}>
                    Öka värdet
                </button>
            </div>
        )
    }
}
export default StateCounterClass
