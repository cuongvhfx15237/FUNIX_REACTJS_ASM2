import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import Department from './DeparmentComponent';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Routes, Route, Navigate } from 'react-router-dom';
import Salary from './SalaryComponent';
import RenderStaff from './Staff';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: STAFFS,
      selectedDept: DEPARTMENTS,
    };
  }

  render() {
    
    return(
     
      <div>
        <Routes>
              {/* <Route path='/NhanVien' element={<StaffList 
              Staff={this.state.selectedStaff.filter((Staff) => Staff.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
              />}
               /> */}
              <Route path='/NhanVien' element={<StaffList Staffs={this.state.selectedStaff} />}/>
              <Route path='/NhanVien1' element={<RenderStaff Staffs={this.state.selectedStaff} />}/>
              <Route path='/PhongBan' element={<Department Department={this.state.selectedDept} />}/>
              <Route path='/BangLuong' element={<Salary Staffs={this.state.selectedStaff} />}/>
              <Route path='/*' element={<Navigate to="/Nhanvien" />}/>
        </Routes>
      </div>
    
    );
  }
}

export default Main;