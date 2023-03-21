import logo from './logo.svg'
import './App.css'
import Welcome from './component/Welcome'
import FunctionalProps from './component/FunctionalProps'
import ClassComponent from './component/ClassComponent'
import ClassComponentProps from './component/ClassComponentProps'
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
            </div>
        </div>
    )
}

export default App
