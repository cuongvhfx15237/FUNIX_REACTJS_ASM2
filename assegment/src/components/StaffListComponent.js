import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle } from "reactstrap";
import { Button } from 'reactstrap';
import '../index.css';
import {ABUTTON} from '../shared/Buttons'
import { Link } from "react-router-dom";

function  RenderStaffList({Staff}) {

  //render  list staff with image and name;
  return (

      <Card>
        <Link to={`${Staff.id}`}>
          <CardImg src={Staff.image} alt={Staff.image}/>
          <CardTitle style = {{textAlign : 'center'}}>{Staff.name}</CardTitle>
        </Link>
      </Card>


  );}
  //StaffList Component
      const StaffList = (props) => {
       const staf = props.Staffs.map((Staff) => {
        return (
          <div key={Staff.id} className="col-sm-6 col-md-4 col-xl-2" style={{padding: 1 + "em"}}>
            <RenderStaffList Staff={Staff}/>
          </div>
        )
      })
      return (
        <div className="container-fluid">
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

    }
    export default StaffList;
