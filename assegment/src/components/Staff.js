import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";
import dateFormat from "dateformat";
import '../index.css'


function RenderStaff(Staff=this.props.Staffs){
    // console.log(Staff.department)
    if (Staff != null) {
        return (
          <Card>
          <CardBody>
            <CardImg src={Staff.image} alt={Staff.name} />
          </CardBody>
            <CardBody>
              <h1>{Staff.name}</h1>
              <CardText>
                Ngày sinh: {dateFormat(Staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(Staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Hệ số lương: {Staff.salaryScale} </CardText>
              <CardText>Số ngày nghỉ còn lại: {Staff.annualLeave}</CardText>
              <CardText>Số ngày đã làm thêm: {Staff.overTime}</CardText>
            </CardBody>
          </Card>
        );
      } else {
        return <div></div>;
      }
}
export default RenderStaff;