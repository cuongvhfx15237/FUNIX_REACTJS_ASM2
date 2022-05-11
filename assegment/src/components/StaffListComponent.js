import React, {useState} from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import '../index.css';
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
      const StaffList = (props, iStaffs) => {
         // getvalue search Name
    const [searchName, setSearchName] = useState('');
    const mySearch = () => {
      setSearchName(document.getElementById("SearchName").value);
    }
    if (searchName === ''){
     iStaffs = props.Staffs;
    }
    else {
     iStaffs=props.Staffs.filter((iStaff)=> iStaff.name===searchName)}

     const [Defragment, setDefragment] = useState('');

     function sortById(a, b) {
      if (a.id > b.id){
          return -1;
      }
      if (a.id < b.id){
          return 1
      }
      return 0;
    }
    const mySort = () => {setDefragment="a"}
    if (Defragment === ''){
      iStaffs = props.Staffs;
     }
     else {
      iStaffs = props.Staffs.sort (sortById)}
    

       const staf = iStaffs.map((Staff) => {
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
            <div className="input-group" style={{width: 50 + '%'}}>
        <input id="SearchName" type="text" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary" style={{backgroundColor:"none"}} onClick= {mySearch}>search</button>
        </div>
          </div>           
           <hr/>
           <div class="form-check">
          <input type="checkbox" class="form-check-input" id="Check1"/>
          <label class="form-check-label" for="exampleCheck1">ID down</label>
          </div>
          <div class="form-check">
          <input type="checkbox" class="form-check-input" id="Check2"/>
          <label class="form-check-label" for="exampleCheck1">ID up</label>
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
