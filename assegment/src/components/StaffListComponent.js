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
  const [classChange, setClassChange] = useState("col-sm-12 col-md-3 col-xl-2")
  function handleColum(event){

    const classGet = event.target.value
    if (classGet === '2'){
      setClassChange("col-sm-12 col-md-3 col-xl-6")
    }
    else if (classGet === '4'){
      setClassChange("col-sm-12 col-md-3 col-xl-3")
    }
    else {
      setClassChange("col-sm-12 col-md-3 col-xl-2")
    }

  }
  
const DepartmentContainer = props.Departments.map((departmentItem) => {


  const Staffs = iStaffs.filter(iStaff => iStaff.department.name == departmentItem.name)
      if (Defragment === "Defragment") {

        return(
          <div className="row"  style={{margin:"0px"}}>
            <div
              key={departmentItem.id}
              className={classChange}
              style={{ padding: 1 + "em", 
                      backgroundColor: "#1e90ff", 
                      border: "1px solid black", 
                      fontSize: 1 + "em", 
                      textAlign:"center",
                      width: "100%"}}>
              {departmentItem.name}
            </div>
              <div className="row">
              {Staffs.map((Staff) => {
                  return(
                  <div 
                  key={Staff.id}
                  className={classChange}
                  style={{ padding: 1 + "em", border: "1px solid black" }} >
                  <RenderStaffList Staff={Staff} />
                </div>)})}
                </div>
          </div>
          )
      }

      else {
    return (
      Staffs.map(Staff => {
        return(
            <div
              key={Staff.id}
              className={classChange}
              style={{ padding: 1 + "em" }}>
              <RenderStaffList Staff={Staff} />
            </div>
        )

          
        }))}})

  //can xu ly o day
  debugger
  return (
    <div className="container-fluid">
      <div className="row " style={{margin:"0px"}}>
        <h2 style={{ width: 50 + "%" }} className="col-sm-12 col-md-12 col-xl-6">Nhân Viên</h2>
        <div className="input-group col-sm-12 col-md-12 col-xl-6" style={{ width: 50 + "%" }}>
          <input
            id="SearchName"
            type="text"
            className="form-control rounded col-sm-9 col-md-10 col-xl-10"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            className="btn btn-outline-primary col-sm-3 col-md-2 col-xl-2"
            style={{ backgroundColor: "none" }}
            onClick={mySearch}
          >
            search
          </button>
        </div>
      </div>
      <hr />
      <div  className="row" style={{margin:"0px"}}>
        <h5 className="btn-column col-xl-1" >Hiển thị:</h5>
      <button type = "button" className="btn-outline-primary btn-column col-xl-1" value={2} onClick={handleColum}>2 cột</button>
      <button type = "button" className="btn-outline-primary  btn-column col-xl-1" value={4}onClick={handleColum}>4 cột</button>
      <button type = "button" className="btn-outline-primary  btn-column col-xl-1" value={6} onClick={handleColum}>6 cột</button>
     <span className="btn-column col-xl-2"></span>
        <div  className="row col-sm-12 col-md-12 col-xl-6" style={{margin:"0px"}}>
          <select className="form-select" id="Defragment-select" style={{margin: '0px', width: '80%'}} >
            <option value="Default">None Defragment</option>
            <option value="Defragment">Defragment with Deparment</option>
          </select>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{margin: '0px', width: '20%'}}
            onClick={myDefragment}
          >        Submit
          </button>
      </div>
      </div>
      <div className="row">{DepartmentContainer}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
  );
};

export default StaffList;
