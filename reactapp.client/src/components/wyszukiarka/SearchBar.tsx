import { Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <Row className="justify-content-center">
            <Col xs={{ span: 6, offset: 4 }} className="ms-3">
                <Form className="mb-3">
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" >
                        <Form.Label column sm={1}>
                            <h5 className="ms-2">Szukaj</h5> 
                        </Form.Label>
                        <Col sm={11}>
                        <Form.Control
                            type="text"
                            placeholder="Znajdź dokument"
                            aria-label="Znajdź dokument"
                            aria-describedby="basic-addon2"
                            value={searchTerm}
                            onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}

export default SearchBar;
