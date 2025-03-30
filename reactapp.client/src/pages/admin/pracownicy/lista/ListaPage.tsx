import { useEffect, useState } from 'react';
import { Image, Col, Row, ListGroup, Badge, ButtonGroup, DropdownButton, Dropdown, Form, InputGroup, Button } from 'react-bootstrap';
import './ListaPage.css';

export const Lista = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                console.log(data.results[0])
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Ładowanie...</p>;
    }

    if (error) {
        return <p>Błąd: {error.message}</p>;
    }

    return (
        <div>
            <Row className="justify-content-between">
                <Col xs={3}>
                    <h2>Pracownicy <Badge bg="secondary" className='brownBadge'>50</Badge></h2>
                </Col>
                <Col xs="auto">
                    <ButtonGroup className="btnDropdown">
                        <DropdownButton as={ButtonGroup} title="Sortowanie" id="bg-nested-dropdown" >
                            <Dropdown.Item eventKey="1">Imię A-Z</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Imię Z-A</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Nazwisko A-Z</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Nazwisko Z-A</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton as={ButtonGroup} title="Pozycje na stronie" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">10</Dropdown.Item>
                            <Dropdown.Item eventKey="2">25</Dropdown.Item>
                            <Dropdown.Item eventKey="3">50</Dropdown.Item>
                            <Dropdown.Item eventKey="4">100</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Col>
            </Row>

            <Row className="pt-4">
                <Col xs={2}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Wpisz imię lub nazwisko"
                            aria-label="Wpisz imię lub nazwisko"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Szukaj
                        </Button>
                    </InputGroup>
                    <h5>Filtry</h5>
                    <ListGroup>
                        <ListGroup.Item> <h6>Płeć</h6>
                            <Form>
                                <Form.Check
                                    label="kobieta"
                                    name="group1"
                                    type="checkbox"
                                    id={1}
                                />
                                <Form.Check
                                    label="mężczyzna"
                                    name="group1"
                                    type="checkbox"
                                    id={2}
                                />
                            </Form>
                        </ListGroup.Item>
                        <ListGroup.Item> <h6>Wiek</h6>
                            <Row>
                                <Col xs={5}>
                                    <Form.Group controlId="wiekOd">
                                        <Form.Control type="number" placeholder="od" />
                                    </Form.Group>
                                </Col>
                                <Col xs={5}>
                                    <Form.Group controlId="wiekDo">
                                        <Form.Control type="number" placeholder="do" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item> <h6>Lokalizacja</h6>
                            <Form.Group controlId="lokalizacja">
                                <Form.Control type="text" placeholder="lokalizacja" />
                            </Form.Group>
                        </ListGroup.Item>
                        <ListGroup.Item> <h6>Staż pracy</h6>
                            <Row>
                                <Col xs={5}>
                                    <Form.Group controlId="stazOd">
                                        <Form.Control type="number" placeholder="od" />
                                    </Form.Group>
                                </Col>
                                <Col xs={5}>
                                    <Form.Group controlId="stazDo">
                                        <Form.Control type="number" placeholder="do" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item> <h6>Dział</h6>
                            <Form.Group controlId="dzial">
                                <Form.Control type="text" placeholder="dział" />
                            </Form.Group>
                        </ListGroup.Item>
                        <ListGroup.Item> <h6>Stanowisko</h6>
                            <Form>
                                <Form.Check
                                    label="sprzedawca"
                                    name="group1"
                                    type="checkbox"
                                    id={1}
                                />
                                <Form.Check
                                    label="cukiernik"
                                    name="group1"
                                    type="checkbox"
                                    id={2}
                                />
                                <Form.Check
                                    label="magazynier"
                                    name="group1"
                                    type="checkbox"
                                    id={3}
                                />
                                <Form.Check
                                    label="kierowca"
                                    name="group1"
                                    type="checkbox"
                                    id={4}
                                />
                                <Form.Check
                                    label="kierownik"
                                    name="group1"
                                    type="checkbox"
                                    id={4}
                                />
                                <Form.Check
                                    label="prezes"
                                    name="group1"
                                    type="checkbox"
                                    id={4}
                                />
                            </Form>
                        </ListGroup.Item>
                        <ListGroup.Item> <h6>Status zatrudnienia</h6>
                            <Form>
                                <Form.Check
                                    label="zatrudniony"
                                    name="group1"
                                    type="checkbox"
                                    id={1}
                                />
                                <Form.Check
                                    label="na wypowiedzeniu"
                                    name="group1"
                                    type="checkbox"
                                    id={2}
                                />
                                <Form.Check
                                    label="zwolniony"
                                    name="group1"
                                    type="checkbox"
                                    id={2}
                                />
                            </Form>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={10}>
                    <ListGroup variant="flush">
                        <ListGroup.Item key={0}>
                            <Row className="justify-content-start">
                                <Col xs={1} className="mx-1">
                                    <h5>Zdjęcie</h5>
                                </Col>
                                <Col xs={3} className="ms-3">
                                    <h5>Imię i nazwisko</h5>
                                </Col>
                                <Col xs={2} >
                                    <h5>Telefon</h5>
                                </Col>
                                <Col xs={3}>
                                    <h5>Email</h5>
                                </Col>
                                <Col xs={2}>
                                    <h5>Miasto</h5>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {data && data.results.map((user, index) => (
                            <ListGroup.Item key={index}>
                                <Row className="justify-content-start">
                                    <Col xs={1}>
                                        <Image src={user.picture.large}></Image>
                                    </Col>
                                    <Col xs={3} className="ms-4">
                                        <h4>{user.name.first} {user.name.last}</h4>
                                    </Col>
                                    <Col xs={2}>
                                        <h5>{user.phone}</h5>
                                    </Col>
                                    <Col xs={3}>
                                        <h5>{user.email}</h5>
                                    </Col>
                                    <Col xs={2}>
                                        <h5>{user.location.city}</h5>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}