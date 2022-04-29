import React, { Component } from "react";
import { Card, Button } from "reactstrap";
import {ABUTTON} from '../shared/Buttons'


class Salary extends Component{
  constructor(props){
    super(props);
    this.state = {
      Abutton:ABUTTON,
      selectedStaff: null,
      ClassChange: "col-sm-12 col-md-6 col-xl-4",
    }
  }
  
  onClickTrigger(butn) {
    this.setState({ ClassChange: butn.ClassChange });
  }
  
  onStaffSelected(Staff) {
    this.setState({ selectedStaff: Staff });
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
  
    const staf = this.props.Staffs.map((Staff) => {
      console.log(this.state.ClassChange)
      return (
          <div key={Staff.id}  className={this.state.ClassChange} style={{padding: 1 + "em"}}>
              <Card  style={{padding: 0.4 + "em"}}>
                  <h4>{Staff.name}</h4>
                  <p> Mã Nhân Viên : {Staff.id}</p>
                  <p> Hệ số lương: {Staff.salaryScale}</p>
                  <p> Số ngày làm thêm: {Staff.overTime} </p>
                  <label style={{backgroundColor:'gray', border:'1px solid black', textAlign: 'center'}}> 
                    Lương: {parseInt(Staff.salaryScale)*3000000+parseInt(Staff.overTime)*200000}
                    </label>
              </Card>
            </div>
          );
          });
          
    return (
      <div className="container">
        {BUTTON}
        <br></br>
        <div className="row">
              <h2>Bảng Lương</h2>
              <hr/>
            </div>
          <div className="row" >
            {staf}
          </div>

      </div>
    );
  
}

}
export default Salary;
