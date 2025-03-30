import './Header.css';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Login } from '../user/Login'
import logoImg from '../../assets/logo.svg';

export const Header = () => {
    return (
        <Navbar expand="lg" className="layout p-3">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto margin-x50">
                    <NavDropdown title="SKLEP ONLINE" id="basic-nav-dropdown" className="margin-x50 widthText">
                        <NavDropdown.Item >
                            <Link to="/sklep/bezy" className="d-block">BEZY</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/sklep/ciasta" className="d-block">CIASTA</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/sklep/ciastka" className="d-block">CIASTKA</Link>
                        </NavDropdown.Item><NavDropdown.Item >
                            <Link to="/sklep/tarty" className="d-block">TARTY</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/sklep/torty" className="d-block">TORTY</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link to="/sklep/wszystko" className="d-block">WSZYSTKO</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/cukiernie" className="d-block">CUKIERNIE</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/catering" className="d-block">CATERING</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="m-0 p-0">
                <Link to="/"><Image src={logoImg} className="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto margin-x50 ">
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/kariera" className="d-block ">KARIERA</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/o-nas" className="d-block">O NAS</Link>
                    </Nav.Link>
                    <Login />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}