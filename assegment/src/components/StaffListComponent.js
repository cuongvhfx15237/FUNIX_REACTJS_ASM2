import React from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import '../index.css';
import { Link } from "react-router-dom";

//Search Bar in page
function SearchBar(){
  return(
  <div className="input-group" style={{width: 50 + '%'}}>
<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
<button type="button" className="btn btn-outline-primary" style={{backgroundColor:"none"}}>search</button>
</div>)
}

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
            <h2 style={{width: 50 + "%"}}>Nhân Viên</h2>
            <SearchBar/>
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
    export default StaffList;
