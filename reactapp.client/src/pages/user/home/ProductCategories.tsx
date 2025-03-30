/* eslint-disable react/prop-types */
import './ProductCategories.css'
import { Container, Card, Col, Row } from 'react-bootstrap';
import Beza from '../../../assets/bezy.png';
import imgCiasto from '../../../assets/ciasto.jpg';
import imgCiastka from '../../../assets/ciastka.jpg';
import imgTarta from '../../../assets/tarta.jpg';
import imgTort from '../../../assets/tort.jpg';
import imgWszystko from '../../../assets/wszystko.png';

const MyCard = ({ link, img, title, text }) => {
    return (
        <a href={link} >
            <Card className="text-center widthCard">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    )
}

export const ProductCategories = () => {
    return (
        <Container fluid className="p-0">
            <Row className="mt-5 pt-5 productContainer justify-content-center">
                <Col xs={3} className="d-flex justify-content-center">
                    <MyCard
                        link={"/sklep/bezy"}
                        img={Beza}
                        title={"Bezy"}
                        text={"Nasze bezowe wypieki to czysta harmonia smaku i delikatności. Każdy kęs naszych bezów to podróż w świat subtelnych aromatów i rozkosznych doznań. Przygotuj się na niebiańską przyjemność bez kompromisów!"}
                    />
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <MyCard
                        link={"/sklep/ciasta"}
                        img={imgCiasto}
                        title={"Ciasta"}
                        text={"Przygotowujemy ciasta na zamówienie, które idealnie sprawdzą się jako dodatek do kawy lub herbaty. Nie trać czasu na przygotowania - zamów ciasto w naszej cukierni z dowozem i zaskocz rodzinę i znajomych pysznym deserem!"}
                    />
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <MyCard
                        link={"/sklep/ciastka"}
                        img={imgCiastka}
                        title={"Ciastka"}
                        text={"Spraw swojemu podniebieniu niezapomniane doznania z naszymi kruchymi ciastkami! Nasze wypieki to nie tylko pyszne smaki, ale także przyjemność dla oczu. Zanurz się w świecie słodkich marzeń i odkryj magię każdego kęsa!"}
                    />
                </Col>

            </Row>
            <Row className="productContainer justify-content-center py-5">
                <Col xs={3} className="d-flex justify-content-center">
                    <MyCard
                        link={"/sklep/tarty"}
                        img={imgTarta}
                        title={"Tarty"}
                        text={"Nasze wyrafinowane tarty to harmonijne połączenie kruchego spodu z wyjątkowymi nadzieniami, które tworzą niezapomniane doznania smakowe, idealne na każdą okazję. Skosztuj i odkryj nieodzowną słodycz na Twoim stole!"}
                    />
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <MyCard
                        link={"/sklep/torty"}
                        img={imgTort}
                        title={"Torty"}
                        text={"Nasze wyjątkowe torty to kulminacja mistrzowskiej cukierniczej sztuki, łącząca smak, wygląd i wyjątkowy charakter w jednym wspaniałym wypieku. Spróbuj naszych tortów i pozwól, aby słodycz i elegancja zagościły na Twoim stole!"}
                    />
                </Col>
                <Col xs={3} className="d-flex justify-content-center">
                    <MyCard
                        link={"/sklep/wszystko"}
                        img={imgWszystko}
                        title={"Cały asortyment"}
                        text={"Nasz szeroki asortyment to prawdziwa uczta dla zmysłów, łącząca najlepsze receptury z najświeższymi składnikami i niezrównanym rzemiosłem. Od wyrafinowanych tortów po delikatne ciasta, które są gotowe, aby uczynić Twoje chwile wyjątkowymi. "}
                    />
                </Col>
            </Row>
        </Container>
    )
}