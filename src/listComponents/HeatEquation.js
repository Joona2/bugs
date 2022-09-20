import {FormGroup, Label, Col, Input} from 'reactstrap'
import {Button} from 'reactstrap'
import {useState} from 'react'

const HeatEquation = () => {
    const variables = ["q","C","ΔT"]
    var inputBoxSetValue, answer;

    const [heat, setHeat] = useState("")
    const [heatCapacity, setHeatCapacity] = useState("")
    const [temperatureChange, setTemperatureChange] = useState("")

    const setValues = (variable) => {
        if (variable === "q") {
            inputBoxSetValue = <Input value={heat} onChange={(e) => setHeat(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else if (variable === "C"){
            inputBoxSetValue = <Input value={heatCapacity} onChange={(e) => setHeatCapacity(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }else{
            inputBoxSetValue = <Input value={temperatureChange} onChange={(e) => setTemperatureChange(e.target.value)} key={variable} placeholder="Type Value Here"/>
        }
    return inputBoxSetValue
    }

    const onCalculate = () => {
        if (heat === ""){
            answer = heatCapacity*temperatureChange
            setHeat(answer)
        }else if (heatCapacity === ""){
            answer = heat/temperatureChange
            setHeatCapacity(answer)
        }else if (temperatureChange === ""){
            answer = heat/heatCapacity
            setTemperatureChange(answer)
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

export default HeatEquation