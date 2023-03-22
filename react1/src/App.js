import logo from './logo.svg'
import './App.css'
import Welcome from './component/Welcome'
import FunctionalProps from './component/FunctionalProps'
import ClassComponent from './component/ClassComponent'
import ClassComponentProps from './component/ClassComponentProps'
import StateCounterClass from './component/StateCounterClass'
import StateCounterFunction from './component/StateCounterFunction'
import FunctionEvent from './component/FunctionEvent'
import FunctionalButton from './component/FunctionalButton'
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div>
                <Welcome name="Alexander" />
                <FunctionalProps prop1="React" prop2="JS" />
                <ClassComponent prop1="YO" />
                <ClassComponentProps prop2="Iam nr1" prop3="Iam nr2" />
                <StateCounterClass />
                <StateCounterFunction />
                <FunctionEvent />
                <FunctionalButton prop1="från" />
            </div>
        </div>
    )
}

export default App
