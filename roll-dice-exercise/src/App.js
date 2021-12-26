import react, {Component} from "react";
import Dice from "./Dice"

class App extends Component{
  render(){
      return(
          <div className="App">
              <Dice face='five'/>
          </div>
      )
      
  }
}

export default App;
