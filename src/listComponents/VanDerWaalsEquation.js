import {FormGroup, Label, Col, Input} from 'reactstrap'
import {Button} from 'reactstrap'
import {useState} from 'react'

const VanDerWaalsEquation = () => {
    const variables = ["P","a","n","V","b","T"]
    var inputBoxSetValue, answer;
    const rConstant = 8.3144598

    const [pressure, setPressure] = useState("")
    const [volume, setVolume] = useState("")
    const [moles, setMoles] = useState("")
    const [temperature, setTemperature] = useState("")
    const [gasConstantA, setgasConstantA] = useState("")
    const [gasConstantB, setgasConstantB] = useState("")


    const setValues = (variable) => {
        if (variable === "P") {
            inputBoxSetValue = <Input value={pressure} onChange={(e) => setPressure(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "V"){
            inputBoxSetValue = <Input value={volume} onChange={(e) => setVolume(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "n"){
            inputBoxSetValue = <Input value={moles} onChange={(e) => setMoles(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "a"){
            inputBoxSetValue = <Input value={gasConstantA} onChange={(e) => setgasConstantA(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "b"){
            inputBoxSetValue = <Input value={gasConstantB} onChange={(e) => setgasConstantB(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else{
            inputBoxSetValue = <Input value={temperature} onChange={(e) => setTemperature(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }
    return inputBoxSetValue
    }

    const onCalculate = () => {
        if (pressure === ""){
            answer = (moles*rConstant*temperature)/(volume-moles*gasConstantB)*(volume**2)-(gasConstantA*(moles**2))
            setPressure(answer)
        }else if (volume === ""){
            answer = (moles*(rConstant**3)*(temperature**3))/(pressure*(rConstant**2)*(temperature**2)+gasConstantA*(pressure**2))+moles*gasConstantB
            setVolume(answer)
        }else{
            alert("Please leave one of pressure or volume blank")
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

export default VanDerWaalsEquation