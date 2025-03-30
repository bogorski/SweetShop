import './Header.css';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

export const Header = () => {
    return (
        <Navbar expand="lg" className="layout p-3">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto margin-x50">
                    <NavDropdown title="PRACOWNICY" id="basic-nav-dropdown" className="margin-x50 widthText">
                        <NavDropdown.Item >
                            <Link to="/admin/pracownicy/lista" className="d-block">LISTA PRACOWNIKÓW</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/admin/pracownicy/umowy" className="d-block">UMOWY CYWILNOPRAWNE</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/admin/pracownicy/dokumenty" className="d-block">DOKUMENTY</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/admin/zamowienia" className="d-block">ZAMÓWIENIA</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/admin/finanse" className="d-block">FINANSE</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="m-0 p-0">
                <Link to="/admin"><Image src={logoImg} className="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto margin-x50 ">
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/admin/rekrutacja" className="d-block ">REKRUTACJA</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/admin/flota" className="d-block">FLOTA</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/" className="d-block">WYLOGUJ</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}