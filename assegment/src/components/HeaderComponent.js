import { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    constructor(props) {
        super(props);   
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div className="container-fluid">
                <Navbar dark expand="md" style={{margin: 0 + 'em', backgroundColor: 'Dodgerblue'}}>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="50px" width="50px" alt='LogoIcon' />
                            </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/Nhanvien'>
                                <i class="fa fa-users" aria-hidden="true"></i>
                                    <span  style={{fontSize:'20px'}}>   Nhân viên</span>
                                    
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/PhongBan'>
                                <i class="fa fa-folder-open" aria-hidden="true"></i>
                                    <span style={{fontSize:'20px'}}>   Phòng Ban</span> 
                                    
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/BangLuong'>
                                <i class="fa fa-money" aria-hidden="true"></i>
                                    <span style={{fontSize:'20px'}}>   Bảng Lương</span> 
                                    
                                    </NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                       
                </Navbar>
            </div>
        );
    }
}
export default Header;