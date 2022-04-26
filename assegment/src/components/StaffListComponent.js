import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import RenderStaff from "./Staff";
import { Button } from 'reactstrap';
import '../index.css'


class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      ClassChange: 'col-sm-12 col-md-6 col-xl-2'

    };
  }
  onStaffSelected(Staff) {
    this.setState({ selectedStaff: Staff });
  }
  onselectedButton(BUTTON) {
    this.setState({ selectedButton: BUTTON });
    // console.log(Button)
  }
 
  onClickTrigger(butn) {
    this.setState({ ClassChange: butn.ClassChange });
  }
  render() {

    
    //data of button
    const Abutton = [
      {
        id: "1",
        name: '2 Cột',
        ClassChange: 'col-sm-6 col-md-6 col-xl-6'
      },
      {
        id: "2",
        name: '3 Cột',
        ClassChange: 'col-sm-6 col-md-6 col-xl-4'
      },
      {
        id: "3",
        name: '6 Cột',
        ClassChange: 'col-sm-6 col-md-6 col-xl-2'
      }
    ]
    const BUTTON = Abutton.map(Butn => {
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
          <div key={Staff.id} className={this.state.ClassChange}>
            <Card onClick={() => this.onStaffSelected(Staff)}>
              <CardImg src={Staff.image} alt={Staff.image}/>
              <CardTitle style={{textAlign : 'center'}}>{Staff.name}</CardTitle>
            </Card>
          </div>
        )
      })
      return (
        <div className="container-fluid">
          <div className="row">{BUTTON}</div>
          <br></br>
          <div className="row">
            {staf}
          </div>
          <div className="row">
            Bấm vào tên Nhân Viên để xem thông tin cụ thể.
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              {RenderStaff(this.state.selectedStaff)}
            </div>
          </div>
        </div>
      )

    }}

    export default StaffList;
