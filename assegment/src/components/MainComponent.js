import React, { Component } from 'react';
import StaffList from './StaffListComponent';
import RenderStaff from './Staff';
import { STAFFS } from '../shared/staffs';
import { Routes, Route, Navigate } from 'react-router-dom';
import Salary from './SalaryComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: STAFFS,
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
              <Route path='/PhongBan' element={<RenderStaff Staffs={this.state.selectedStaff} />}/>
              <Route path='/BangLuong' element={<Salary Staffs={this.state.selectedStaff} />}/>
              <Route path='/*' element={<Navigate to="/Nhanvien" />}/>
        </Routes>
      </div>
    
    );

  }
}


export default Main;