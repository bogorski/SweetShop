import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, NavDropdown, Row, Badge } from 'react-bootstrap';
import './Login.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            navigate('/admin');
        } else if (username === 'user' && password === 'user') {
            navigate('/pracownik');
        }
        else {
            setError('Zła nazwa lub hasło!');
        }
    };

    return (
            <NavDropdown title="LOGOWANIE" id="basic-nav-dropdown" className="margin-x50 widthText loginDiv">
                <Row className="p-2 panel">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button size="sm" className="mt-2" type="submit">
                            Login
                        </Button>
                    </Form>
                </Row>
                {error && <Badge  >{error}</Badge>}
            </NavDropdown>
    );
};