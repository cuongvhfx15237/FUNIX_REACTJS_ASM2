import React from 'react';
import { Card, CardImg, CardImgOverlay, Label,CardBody, CardHeader,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Salary(props){
    const salarys = props.Staffs.map((salary)=> {
    return (
        <Card>
            <CardTitle>Họ và tên</CardTitle>
            <CardImg/>
            <p>Mã nhân viên</p>
            <p>Hệ số lương</p>
            <p>Số ngày làm thêm</p>
            <Label></Label>
            
        </Card>
    )

})
return (
    <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem></BreadcrumbItem>
                <Breadcrumb></Breadcrumb>
            </Breadcrumb>
        <div className="col">
            <Card>
                <CardHeader className=""></CardHeader>
                <CardBody>
                    
                </CardBody>
            </Card>
        </div>
        </div>
    </div>
)
}
export default Salary;