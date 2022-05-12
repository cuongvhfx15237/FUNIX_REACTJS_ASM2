import React, { useState } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import "../index.css";
import { Link } from "react-router-dom";

function RenderStaffList( {Staff} ) {
  //render  list staff with image and name;
  return (
    <Card>
      <Link to={`${Staff.id}`}>
        <CardImg src={Staff.image} alt={Staff.image} />
        <CardTitle style={{ textAlign: "center" }}>{Staff.name}</CardTitle>
      </Link>
    </Card>
  );
}

const StaffList = (props, iStaffs) => {
  // getvalue search Name
  //params : iStaff
  const [searchName, setSearchName] = useState("");
  const mySearch = () => {
    setSearchName(document.getElementById("SearchName").value);
  };
  if (searchName === "") {
    iStaffs = props.Staffs;
  } else {
    iStaffs = props.Staffs.filter((iStaff) => iStaff.name === searchName);
  }

  //Defragment
  const [Defragment, setDefragment] = useState(""); 
  const myDefragment = () => {

    setDefragment(document.getElementById("Defragment-select").value);
  
  };

const DepartmentContainer = props.Departments.map((departmentItem) => {
  
  const Staffs = iStaffs.filter(iStaff => iStaff.department.name == departmentItem.name)
      if (Defragment === "Defragment") {



        return(
        Staffs.map((Staff) => {
          return(
          <div className="row">
            <div
              key={departmentItem.id}
              className="col-sm-12 col-md-3 col-xl-2"
              style={{ padding: 1 + "em", backgroundColor: "blue"}}>
              {departmentItem.name}
            </div>
            <div
              key={Staff.id}
              className="col-sm-12 col-md-3 col-xl-2"
              style={{ padding: 1 + "em" }} >
              <RenderStaffList Staff={Staff} />
            </div>
          </div>
          )
      }))
      }
      else {
    return (
      Staffs.map(Staff => {
        return(
            <div
              key={Staff.id}
              className="col-sm-6 col-md-4 col-xl-2"
              style={{ padding: 1 + "em" }}>
              <RenderStaffList Staff={Staff} />
            </div>
        )

          
        }))}})

      

  
  //can xu ly o day

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 style={{ width: 50 + "%" }}>Nhân Viên</h2>
        <div className="input-group" style={{ width: 50 + "%" }}>
          <input
            id="SearchName"
            type="text"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{ backgroundColor: "none" }}
            onClick={mySearch}
          >
            search
          </button>
        </div>
      </div>
      <hr />
      <select className="form-select" id="Defragment-select"  >
        <option value="Default">None Defragment</option>
        <option value="Defragment">Defragment with Deparment</option>
      </select>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={myDefragment}
      >        Submit
      </button>
      <div className="row">{DepartmentContainer}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
  );
};

export default StaffList;
