import {FormGroup, Label, Col, Input} from 'reactstrap'
import {Button} from 'reactstrap'
import {useState} from 'react'

const PlanckRelation = () => {
    const variables = ["E","ν"]
    var inputBoxSetValue, answer;
    const plancksConstant = 6.62607015e-34

    const [energy, setEnergy] = useState("")
    const [frequency, setFrequency] = useState("")

    const setValues = (variable) => {
        if (variable === "E") {
            inputBoxSetValue = <Input value={energy} onChange={(e) => setEnergy(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else{
            inputBoxSetValue = <Input value={frequency} onChange={(e) => setFrequency(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }
    return inputBoxSetValue
    }

    const onCalculate = () => {
        if (energy === ""){
            answer = frequency*plancksConstant
            setEnergy(answer)
        }else if (frequency === ""){
            answer = energy/plancksConstant
            setFrequency(answer)
        }else{
            alert("Please leave the variable that you want to solve for blank")
        }
        
      }

  return (
    <div>
        {variables.map((variable, index) => (
            <><FormGroup className="formRows" row><Label className="formLabels" for="Variable" sm={2} >{variable}</Label>
            <Col sm={9}>
                {setValues(variable)}
            </Col>
            </FormGroup>
        </>))}
        <FormGroup row>
            <Col className="formSubmitButton">
                <Button onClick={onCalculate}>Calculate</Button>
            </Col>
        </FormGroup>
    </div>
  )
}

export default PlanckRelation