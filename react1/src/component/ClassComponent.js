import { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <h3 className="App-header">
                Detta är en React ClassComponent!{this.props.prop1}
            </h3>
        )
    }
}

export default ClassComponent
