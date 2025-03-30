import './StoryContainer.css'
import { Image, Col, Row, Container } from 'react-bootstrap';
import macaronsImg from '../../../assets/macarons.jpg'

export const Story = () => {
    return (
        <Container fluid className="pt-5">
            <Row>
                <Col xs={{ span: 5, offset: 1 }}>           
                    <Image src={macaronsImg} fluid />
                </Col>
                <Col xs={5} className="ms-5 ps-5">
                    <h3 className="pb-2">Historia firmy</h3>
                    <h5 className="pb-3">Tradycyjne receptury, naturalne składniki, niezapomniane smaki.</h5>
                    <p>"Sweet Shop" to rodzinnie prowadzona cukiernia, której początki sięgają lat dzieciństwa założyciela, Marka. Marek od najmłodszych lat fascynował się sztuką cukierniczą, inspirując się smakami i aromatami, które tworzył razem z matką w kuchni swojego domu.</p>
                    <p>Kiedy Marek dorósł, postanowił podzielić się swoją pasją i wyjątkowymi wypiekami z innymi. Wraz z żoną Ewą, która dzieliła jego zamiłowanie do cukiernictwa, otworzyli własny sklep ze słodyczami - "Sweet Shop".</p>
                    <p>Od samego początku "Sweet Shop" przyciągało uwagę mieszkańców swoim wyjątkowym urokiem i bogactwem smaków. Markowi i Ewie zależało na tworzeniu słodkości, które nie tylko smakują wyśmienicie, ale także wywołują uśmiech na twarzach klientów.</p>
                    <a href="/o-nas" className="btn" role="button">więcej</a>
                </Col>
            </Row>
        </Container>
    )
}