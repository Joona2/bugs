import {FormGroup, Label, Col, Input} from 'reactstrap'
import {Button} from 'reactstrap'
import {useState} from 'react'

const FirstOrderConcentrationVsTime = () => {
    const variables = ["[A]o","[A]","k","t"]
    var inputBoxSetValue, answer;

    const [initialAConcentration, setInitialAConcentration] = useState("")
    const [currentAConcentration, setCurrentAConcentration] = useState("")
    const [rateConstant, setRateConstant] = useState("")
    const [timeOfRxn, setTimeOfRxn] = useState("")

    const setValues = (variable) => {
        if (variable === "[A]o") {
            inputBoxSetValue = <Input value={initialAConcentration} onChange={(e) => setInitialAConcentration(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "[A]") {
            inputBoxSetValue = <Input value={currentAConcentration} onChange={(e) => setCurrentAConcentration(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "k") {
            inputBoxSetValue = <Input value={rateConstant} onChange={(e) => setRateConstant(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else{
            inputBoxSetValue = <Input value={timeOfRxn} onChange={(e) => setTimeOfRxn(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }
    return inputBoxSetValue
    }

    const onCalculate = () => {
        if (initialAConcentration === ""){
            answer = currentAConcentration*rateConstant*timeOfRxn
            setInitialAConcentration(answer)
        }else if (currentAConcentration === ""){
            answer = initialAConcentration/(rateConstant*timeOfRxn)
            setCurrentAConcentration(answer)
        }else if (rateConstant === ""){
            answer = initialAConcentration/(currentAConcentration*timeOfRxn)
            setRateConstant(answer)
        }else if (timeOfRxn === ""){
            answer = initialAConcentration/(currentAConcentration*rateConstant)
            setTimeOfRxn(answer)
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

export default FirstOrderConcentrationVsTime