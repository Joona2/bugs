import Select from "./components/Select";
import {Button} from 'reactstrap'

function App() {
  return (
    <div className="container">
      <h1>Solver</h1>
      <Select/>
      <Button color='primary'>
      Click Me
      </Button>
    </div>
  );
}

export default App;
