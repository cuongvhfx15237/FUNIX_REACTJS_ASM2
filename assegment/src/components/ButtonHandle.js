import { Component } from "react";
import {ABUTTON} from "../shared/Buttons";
import { Button } from 'reactstrap'


class BTN extends Component {
    constructor(props){
        super(props);
        this.state = {
            Abutton : ABUTTON,
            ClassChange:"col-sm-12 col-md-6 col-xl-3"
        }
    }
    onClickTrigger(butn) {
        console.log(butn)
        this.setState({ ClassChange: butn.ClassChange });
      }
    render(){
        const BUTTON = this.state.Abutton.map(Butn => {
            return (
                <Button
                    key={Butn.id}
                    className={"col-sm-4 col-md-4 col-xl-4"}
                    title={Butn.ClassChange}
                    onClick={() => this.onClickTrigger(Butn)}>
                    {Butn.name}
                </Button>
             )
        }
    )
    return(
        <div className="container-fluid">
            <div className="row">
                {BUTTON}
            </div>
        </div>
    )
}
}
export default BTN;