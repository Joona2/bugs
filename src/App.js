import {Button} from 'reactstrap'
import {ListGroup} from 'reactstrap'
import {ListGroupItem} from 'reactstrap'
import {useState} from 'react'
import IdealGasLaw from './listComponents/IdealGasLaw'
import VanDerWaalsEquation from './listComponents/VanDerWaalsEquation'
import HeatEquation from './listComponents/HeatEquation'
import PlanckRelation from './listComponents/PlanckRelation'
import FirstOrderConcentrationVsTime from './listComponents/FirstOrderConcentrationVsTime'

function App() {

const [showListEqs, setShowListEqs] = useState(false)
const [buttonPress, setButtonPress] = useState(false)
const [showSelectedEq, setShowSelectedEq] = useState(false)
const [selectedEquation, setSelectedEquation] = useState(1)


const equation1 = "PV = nRT"
const equation2 = "(P+an2/V2)(V−nb) = nRT"
const equation3 = "q = CΔT"
const equation4 = "E = hν"
const equation5 = "[A]o/[A] = kt"

const equations = [equation1, equation2, equation3, equation4, equation5]

const buttonPressed = () => {
  setShowListEqs(!showListEqs)
  setButtonPress(!buttonPress)
}

const equationPressed = (equation) =>{
  buttonPressed();
  setSelectedEquation(equation)
  setShowSelectedEq(true)
}

  return (
    <div className="container2">
      <h1 className="titleSolver">Equation Solver</h1>
          <h2 className="stitle">Select Equation</h2>
          {!buttonPress && <div className="buttonDiv"><Button id="main" className='topButton' color='primary' onClick={buttonPressed}>
          Show List of Equations
          </Button></div>}
          {buttonPress && <div className="buttonDiv"><Button id="main" className='topButton' color='danger' onClick={buttonPressed}>
          Hide List of Equations
          </Button></div>}
          {showListEqs && <div className="listDiv"><ListGroup className='listEquations'flush>
            {equations.map((equation, index) => (<ListGroupItem action tag="button" color="blue" onClick={() => equationPressed(index)}>{equations[index]}</ListGroupItem>))}
          </ListGroup></div>}
          {showSelectedEq && 
          <>
          <h5 className='formulaText'>{equations[selectedEquation]}</h5>
          <div className="variableForm">
              {selectedEquation === 0 && <IdealGasLaw/>}
              {selectedEquation === 1 && <VanDerWaalsEquation/>}
              {selectedEquation === 2 && <HeatEquation/>}
              {selectedEquation === 3 && <PlanckRelation/>}
              {selectedEquation === 4 && <FirstOrderConcentrationVsTime/>}
            </div></>}
    </div>
  );  
}

export default App;
