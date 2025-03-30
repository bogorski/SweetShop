import { Card, Button, Row, Badge } from 'react-bootstrap';
import { useDraggable } from "@dnd-kit/core";

export const Karta = ({ title, text, subtitle, onRemove }) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text>
                    {text}
                </Card.Text>
                <Card.Link href="#">Link</Card.Link>
                <Button className="m-2" onClick={onRemove}>Usuń</Button>
            </Card.Body>
        </Card>
    );
}