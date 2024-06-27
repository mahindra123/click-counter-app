import { Component } from "react";
import './index.css'
class ClickCounter extends Component{
    state = {count:0}

    clickCounterBtn = () =>{
        this.setState(prevState =>({count: prevState.count + 1}))
    }

    render(){
        const {count}  = this.state
        return(
            <div className="counter-container">
                <h1>The Button has clicked <span>{count}</span> Times</h1>
                <p>Click the button to increase the count</p>
                <button type="button" onClick={this.clickCounterBtn}>CLick Me</button>
            </div>
        )
    }
}

export default ClickCounter