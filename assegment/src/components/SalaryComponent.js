import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";
import BTN from './ButtonHandle'


function Salary(props) {
    function onSalarySelected(salary){
       console.log(salary)
        }

        const staf = props.Staffs.map((Staff) => {

    return (
        <div className='contaier'>
        <div key={Staff.id} className={props.classChange}>
          <Card onClick={() => onSalarySelected(Staff)}>
            <CardBody>
              <CardTitle>{Staff.name}</CardTitle>
              <p>Mã Nhân Viên : {Staff.id}</p>
              <p>Hệ số lương: {Staff.salaryScale}</p>
              <p>Số ngày làm thêm: {Staff.overTime} </p>
            </CardBody>
          </Card>
        </div>
        </div>
        );
        });
  return (
    <div className="container-fluid">
        <BTN/>
      <div className="row">{staf}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
  );

}
export default Salary;
