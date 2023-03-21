import { Component } from "react"
class ClassComponentProps extends Component {
    render() {
        return (
            <h4 className="App-header">
                Detta är en React ClassComponent med double props!!
                {this.props.prop2} och {this.props.prop3 }
            </h4>
        )
    }
}

export default ClassComponentProps
