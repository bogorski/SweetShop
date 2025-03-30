import './Footer.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import logoImg from '../../assets/logo.svg';

export const Footer = () => {
    return (
        <Container fluid className="bgColor p-5">
            <Row>
                <Col xs={5} className="text-center">
                    <Image src={logoImg} className="logoFooter mb-1" />
                    <li className="text-center"> <p className="mt-2 mb-0 bold">Zainteresowały cię nasze produkty?</p></li>
                    <li className="text-center"> <a role="button" className="link">Zamów z Glovo</a></li>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={4} className="d-flex justify-content-center">
                            <ul >
                                <li> <p className="bold">Menu</p></li>
                                <li> <a role="button" className="link">Strona główna</a></li>
                                <li> <a role="button" className="link">Produkty</a></li>
                                <li> <a role="button" className="link">Cukiernie</a></li>
                                <li> <a role="button" className="link">Catering</a></li>
                                <li> <a role="button" className="link">Kariera</a></li>
                                <li> <a role="button" className="link">O nas</a></li>
                                <li> <a role="button" className="link">Kontakt</a></li>
                            </ul>
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                            <ul >
                                <li> <p className="bold">Produkty</p></li>
                                <li> <a role="button" className="link">Bezy</a></li>
                                <li> <a role="button" className="link">Ciasta</a></li>
                                <li> <a role="button" className="link">Ciastka</a></li>
                                <li> <a role="button" className="link">Tarty</a></li>
                                <li> <a role="button" className="link">Torty</a></li>
                                <li> <a role="button" className="link">Wszystko</a></li>
                            </ul>
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                            <ul >
                                <li> <p className="bold">Informacje</p></li>
                                <li> <a role="button" className="link">Polityka prywatności</a></li>
                                <li> <a role="button" className="link">Składniki i alergeny</a></li>
                                <li> <a role="button" className="link">Kontakt</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}