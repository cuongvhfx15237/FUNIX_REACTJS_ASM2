import React, { useState } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import "../index.css";
import { Link } from "react-router-dom";

function RenderStaffList({ Staff }) {
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

// function DepartmentBar(myDefragment){
//   const [Defragment, setDefragment] = useState("");
// myDefragment = () => {
//   setDefragment(document.getElementById("Defragment-select").value)}
//   console.log(Defragment)
//   if (Defragment === "Defragment"){
//     return (
//       <div className="row">
//         <div> fuck U bitch</div>
//       </div>
//     )
//   }
//   else {
//     return (
//       <div></div>
//     )
//   }
// }
//StaffList Component
const StaffList = (props, iStaffs) => {
  // getvalue search Name
  const [searchName, setSearchName] = useState("");
  const mySearch = () => {
    setSearchName(document.getElementById("SearchName").value);
  };
  if (searchName === "") {
    iStaffs = props.Staffs;
  } 
  else {
    iStaffs = props.Staffs.filter((iStaff) => iStaff.name === searchName);
  }
//Defragment
  const [Defragment, setDefragment] = useState("");

const myDefragment = () => {
  setDefragment(document.getElementById("Defragment-select").value)}
  console.log(Defragment)
const DepartmentBar = () => {
  
if (Defragment === "Defragment"){
    return (<div className="row">
        <div>
          1111111111111111
        </div>
    </div>)
  }

else { 

  return (<div>aaaaa</div>)}
}

  //can xu ly o day
  const staf = iStaffs.map((Staff) => {

    return (
      <div
        key={Staff.id}
        className="col-sm-6 col-md-4 col-xl-2"
        style={{ padding: 1 + "em" }}
      >
        <DepartmentBar/>
        <RenderStaffList Staff={Staff} />
      </div>
    );
  });
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
            onClick={mySearch}>
            search
          </button>
        </div>
      </div>
      <hr />
      <select className="form-select" id="Defragment-select">
        <option value= "Default" >None Defragment</option>
        <option value="Defragment">Defragment with Deparment</option>
      </select>
      <button type="button" className="btn btn-primary mt-3" onClick={myDefragment}>Submit</button>
      <div className="row">{staf}</div>
      <div className="row">Bấm vào tên Nhân Viên để xem thông tin cụ thể.</div>
    </div>
  );
};

export default StaffList;
