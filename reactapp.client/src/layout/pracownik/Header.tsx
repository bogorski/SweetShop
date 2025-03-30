import './Header.css';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

export const Header = () => {
    return (
        <Navbar expand="lg" className="layout p-3">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto margin-x50">
                    <NavDropdown title="URLOPY" id="basic-nav-dropdown" className="margin-x50 widthText">
                        <NavDropdown.Item >
                            <Link to="/pracownik/urlopy/limity" className="d-block">LIMITY</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/pracownik/urlopy/nieobecnosci" className="d-block">NIEOBECNOŚCI</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/pracownik/urlopy/grafik" className="d-block">GRAFIK URLOPOWY</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/pracownik/aktualnosci" className="d-block">AKTUALNOŚCI</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/pracownik/kalendarz" className="d-block">KALENDARZ</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="m-0 p-0">
                <Link to="/pracownik"><Image src={logoImg} className="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto margin-x50 ">
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/pracownik/delegacje" className="d-block ">DELEGACJE</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/pracownik/dokumenty" className="d-block">DOKUMENTY</Link>
                    </Nav.Link>
                    <Nav.Link className="margin-x50 widthText">
                        <Link to="/" className="d-block">WYLOGUJ</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}