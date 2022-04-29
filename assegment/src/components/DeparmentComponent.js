import React, { Component } from "react";
import { Card, Button } from "reactstrap";
import {ABUTTON} from '../shared/Buttons'


class Department extends Component{
  constructor(props){
    super(props);
    this.state = {
      Abutton:ABUTTON,
      selectedDept: null,
      ClassChange: "col-sm-12 col-md-6 col-xl-4",
    }
  }
  
  onClickTrigger(butn) {
    this.setState({ ClassChange: butn.ClassChange });
  }
  
  onStaffSelected(Dept) {
    this.setState({ selectedDept: Dept });
  }
  
render(){
    const BUTTON = ABUTTON.map(Butn => {
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
  
    const Dept = this.props.Department.map((Dept) => {
      return (
          <div key={Dept.id}  className={this.state.ClassChange} style={{padding: "1em"}}>
              <Card style={{padding: "10px"}}>
                  <h3>{Dept.name}</h3>
                  <p>Số Lượng Nhân Viên : {Dept.numberOfStaff}</p>
              </Card>
            </div>
          );
          });
          
    return (
      <div className="container">
        {BUTTON}
        <br></br>
        <div className="row">
              <h2>Phòng Ban</h2>
              <hr/>
            </div>
          <div className="row">
            {Dept}
          </div>

      </div>
    );
  
}

}
export default Department;
