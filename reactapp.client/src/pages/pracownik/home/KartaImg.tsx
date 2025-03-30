import { Card, Col, Row, Badge } from 'react-bootstrap';
import { useDraggable } from "@dnd-kit/core";
import userImage from '../../../assets/jan_kowalski.jpg';
import './KartaImg.css'

export const KartaImg = ({ title, text }) => {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Text><Badge bg="secondary">Dostępny</Badge></Card.Text>
                <Card.Img variant="top" src={userImage} className="rounded-image" />
            </Card.Body>
        </Card>
    );
}