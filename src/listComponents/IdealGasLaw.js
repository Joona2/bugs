import {FormGroup, Label, Col, Input} from 'reactstrap'
import {Button} from 'reactstrap'
import {useState} from 'react'

const IdealGasLaw = () => {
    const variables = ["P","V","n","T"]
    var inputBoxSetValue, answer;
    const rConstant = 8.3144598

    const [pressure, setPressure] = useState("")
    const [volume, setVolume] = useState("")
    const [moles, setMoles] = useState("")
    const [temperature, setTemperature] = useState("")

    const setValues = (variable) => {
        if (variable === "P") {
            inputBoxSetValue = <Input value={pressure} onChange={(e) => setPressure(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "V"){
            inputBoxSetValue = <Input value={volume} onChange={(e) => setVolume(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "n"){
            inputBoxSetValue = <Input value={moles} onChange={(e) => setMoles(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else{
            inputBoxSetValue = <Input value={temperature} onChange={(e) => setTemperature(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }
    return inputBoxSetValue
    }

    const onCalculate = () => {
        if (pressure === ""){
            answer = (moles*rConstant*temperature)/volume
            setPressure(answer)
        }else if (volume === ""){
            answer = (moles*rConstant*temperature)/pressure
            setVolume(answer)
        }else if (moles === ""){
            answer = (pressure*volume)/(rConstant*temperature)
            setMoles(answer)
        }else if (temperature ===""){
            answer = (pressure*volume)/(rConstant*moles)
            setTemperature(answer)
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

export default IdealGasLaw