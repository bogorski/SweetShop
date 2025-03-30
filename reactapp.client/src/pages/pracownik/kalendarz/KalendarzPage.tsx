import { Calendar } from '../../../components/kalendarz/Calendar'
import { Col, Row, Badge } from 'react-bootstrap';
import './KalendarzPage.css';

export const Kalendarz = () => {
    return (
        <div>
            <Calendar />
            <Row className="pt-4">
                <Col xs={{ span: 6, offset: 3 }} className="text-center">
                        <Badge className="urlop mx-2">Urlop</Badge>
                    <Badge className="wolne mx-2">Dzień wolny</Badge>
                    <Badge className="aktualny mx-2">Aktualnu dzień</Badge>
                    <Badge className="zdalna mx-2">Praca zdalna</Badge>
                    <Badge className="delegacja mx-2">Delegacja</Badge>
                    <Badge className="szkolenie mx-2">Szkolenie</Badge>
                </Col>
            </Row>
        </div>
    )
}