import react, {Component} from "react";
import Dice from "./Dice"
import RollDice from "./RollDice";

class App extends Component{
 
  render(){
      return(
          <div className="App">
             <RollDice />
          </div>
      )
      
  }
}

export default App;
