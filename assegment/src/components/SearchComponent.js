import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import '../index.css';
import { Link } from "react-router-dom";

//Search Bar in page

function RenderSearchName({Staff}) {

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
      const SearchName = (props) => {
       const staf = props.Staffs.map((Staff) => {
        return (
          <div key={Staff.id} className="col-sm-6 col-md-4 col-xl-2" style={{padding: 1 + "em"}}>
            <RenderSearchName Staff={Staff}/>
          </div>
        )
      })
      return (
        <div className="container-fluid">
          <div className="row">
            <h2 style={{width: 50 + "%"}}>Nhân Viên</h2>
          </div>           
           <hr/>
          <div className="row">
            {staf}
          </div>
          <div className="row">
            Bấm vào tên Nhân Viên để xem thông tin cụ thể.
          </div>
        </div>
      )

    }
    export default SearchName;
