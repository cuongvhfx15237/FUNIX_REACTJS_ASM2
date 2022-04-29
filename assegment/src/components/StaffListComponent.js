import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Button } from 'reactstrap';
import '../index.css';
import {ABUTTON} from '../shared/Buttons'

class StaffList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedStaff: null,
      ClassChange: "col-sm-6 col-md-4 col-xl-2",
      Abutton:ABUTTON

    };
  }
  onStaffSelected(Staff) {
    this.setState({ selectedStaff: Staff });
  }
  onClickTrigger(Butn) {
    this.setState({ ClassChange: Butn.ClassChange });
  }
  render() {

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
    })

        const staf = this.props.Staffs.map((Staff) => {
        return (
          <div key={Staff.id} className={this.state.ClassChange} style={{padding: 1 + "em"}}>
            <Card onClick={() => this.onStaffSelected(Staff)}>
              <CardImg src={Staff.image} alt={Staff.image}/>
              <CardTitle style={{textAlign : 'center'}}>{Staff.name}</CardTitle>
            </Card>
          </div>
        )
      })
      return (
        <div className="container">
          {BUTTON}
          <br></br>
          <div className="row">
            <h2>Nhân Viên</h2>
            <hr/>
          </div>
          <div className="row">
            {staf}
          </div>
          <div className="row">
            Bấm vào tên Nhân Viên để xem thông tin cụ thể.
          </div>
        </div>
      )

    }}
    export default StaffList;
