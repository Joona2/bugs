import {Button} from 'reactstrap'
import {ListGroup} from 'reactstrap'
import {ListGroupItem} from 'reactstrap'
import {useState} from 'react'
import {FormGroup, Label, Col, Input} from 'reactstrap'

function App() {

const [showListEqs, setShowListEqs] = useState(false)
const [buttonPress, setButtonPress] = useState(false)
const [showSelectedEq, setShowSelectedEq] = useState(false)
const [selectedEquation, setSelectedEquation] = useState("")
const [numberOfVariables, setNumberOfVariables] = useState(0)


const equation1 = "PV = nRT"
const equation2 = "(P+an2/V2)(V−nb) = nRT"
const equation3 = "q = CΔT"
const equation4 = "E = hν"
const equation5 = "En = -RH/n2"

// const riedbergsConstant = 8.3144598
// const plancksConstant = 6.62607015e-34
// const rydbergsConstant = 2.179e-18

const buttonPressed = () => {
  setShowListEqs(!showListEqs)
  setButtonPress(!buttonPress)
}

const equationPressed = (equation) =>{
  buttonPressed();
  setSelectedEquation(equation)
  setShowSelectedEq(true)
  if (equation === "PV = nRT"){
    setNumberOfVariables(4)
  } else if (equation === "(P+an2/V2)(V−nb) = nRT"){
    setNumberOfVariables(7)
  } else if (equation === "q = CΔT"){
    setNumberOfVariables(3)
  } else if (equation === "E = hν"){
    setNumberOfVariables(3)
  } else {
    setNumberOfVariables(3)
  }
}

  return (
    <div className="container2">
      <h1 className="titleSolver">Equation Solver</h1>
          <h2 className="stitle">Select Equation</h2>
          {!buttonPress && <div className="buttonDiv"><Button className='topButton' color='primary' onClick={buttonPressed}>
          Show List of Equations
          </Button></div>}
          {buttonPress && <div className="buttonDiv"><Button className='topButton' color='danger' onClick={buttonPressed}>
          Hide List of Equations
          </Button></div>}
          {showListEqs && <div className="listDiv"><ListGroup className='listEquations'flush>
            <ListGroupItem action tag="button" color="blue" onClick={() => equationPressed(equation1)}>
            {equation1}
            </ListGroupItem>
            <ListGroupItem action tag="button" color="blue" onClick={() => equationPressed(equation2)}>
            {equation2}
            </ListGroupItem>
            <ListGroupItem action tag="button" color="blue" onClick={() => equationPressed(equation3)}>
            {equation3}
            </ListGroupItem>
            <ListGroupItem action tag="button" color="blue" onClick={() => equationPressed(equation4)}>
            {equation4}
            </ListGroupItem>
            <ListGroupItem action tag="button" color="blue" onClick={() => equationPressed(equation5)}>
            {equation5}
            </ListGroupItem>
          </ListGroup></div>}
          {showSelectedEq && 
          <>
          <h5 className='formulaText'>{selectedEquation}</h5>
          <div className="variableForm">
              {numberOfVariables >= 1 && <FormGroup className="formRows" row>
                <Label for="Variable 1" sm={4} >Variable 1</Label>
                <Col sm={8}>
                  <Input id="Variable 1" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}

            {numberOfVariables >= 2 && <FormGroup className="formRows" row>
                <Label for="Variable 2" sm={4} >Variable 2</Label>
                <Col sm={8}>
                  <Input id="Variable 2" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}

            {numberOfVariables >= 3 && <FormGroup className="formRows" row>
                <Label for="Variable 3" sm={4} >Variable 3</Label>
                <Col sm={8}>
                  <Input id="Variable 3" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}

            {numberOfVariables >= 4 && <FormGroup className="formRows" row>
                <Label for="Variable 4" sm={4} >Variable 4</Label>
                <Col sm={8}>
                  <Input id="Variable 4" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}

            {numberOfVariables >= 5 && <FormGroup className="formRows" row>
                <Label for="Variable 5" sm={4} >Variable 5</Label>
                <Col sm={8}>
                  <Input id="Variable 5" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}

            {numberOfVariables >= 6 && <FormGroup className="formRows" row>
                <Label for="Variable 6" sm={4} >Variable 6</Label>
                <Col sm={8}>
                  <Input id="Variable 6" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}

            {numberOfVariables >= 7 && <FormGroup className="formRows" row>
                <Label for="Variable 7" sm={4} >Variable 7</Label>
                <Col sm={8}>
                  <Input id="Variable 7" placeholder="Type Value Here"/>
                </Col>
              </FormGroup>}
            
            <FormGroup check row>
                <Col className="formSubmitButton">
                  <Button>Submit</Button>
                </Col>
              </FormGroup>
            </div></>}
    </div>
  );  
}

export default App;
