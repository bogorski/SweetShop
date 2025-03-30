/* eslint-disable react/prop-types */
import './HomePageCarousel.css'
import { Carousel, Image, Col, Row, Container } from 'react-bootstrap';
import lodowkomatImg from '../../../assets/lodowkomat.png'
import newShopImg from '../../../assets/new_shop.png'

const DataCarouselItem = ({srcImg, altImg, h3Text, h4Text, pText, aLink, aText }) => {
    return (
        <Row >
            <Col xs={{ span: 5, offset: 1 }} className="text-center">
                <Image
                    src={srcImg}
                    alt={altImg}
                    className="ps-5 pe-3 heightCarouselImg"
                    fluid
                />
            </Col>
            <Col xs={{ span: 5 }} className="d-flex flex-column justify-content-center ps-3 pe-5">
                <Row>
                    <Col xs={12}>
                        <h3 className="text-center">{h3Text}</h3>
                        <h4 className="text-center">{h4Text}</h4>
                        <p className="text-center">{pText}</p>
                    </Col>
                    <Col xs={{ span: 6, offset: 3 }} className="text-center">
                        <a href={aLink} className="btn" role="button">{aText}</a>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export const HomePageCarousel = () => {
    return (
        <Container fluid className="my-5">
            <Carousel>
                <Carousel.Item>
                    <DataCarouselItem
                        srcImg={lodowkomatImg}
                        altImg={"First slide lodowkomat"}
                        h3Text={"Torty dostępne 24/7!"}
                        h4Text={"Zamów już dziś do Lodówkomatu InPostu!"}
                        pText={"Jak to działa? To proste! Wystarczy odwiedzić naszą stronę internetową i wybrać swój ulubiony tort spośród naszej bogatej oferty, a następnie wybrać Lodówkomat InPost, do którego go dostarczymy. Nie musisz się martwić o godziny otwarcia czy ograniczenia czasowe - nasze torty są dostępne dla Ciebie 24/7!"}
                        aLink={"/sklep/torty"}
                        aText={"WYBIERZ I ZAMÓW TORT" } />
                </Carousel.Item>
                <Carousel.Item>
                    <DataCarouselItem
                        srcImg={newShopImg}
                        altImg={"Second slide new shop"}
                        h3Text={"Już otwarte!"}
                        h4Text={"Nowa cukiernia, nowe smaki, nowe doznania!"}
                        pText={"Witajcie w naszej najnowszej cukierni, miejscu, które tętni życiem i aromatem świeżo pieczonych wypieków! Z ogromną radością ogłaszamy otwarcie naszej nowej przystani dla miłośników słodkości. Nasza cukiernia to nie tylko miejsce, gdzie można znaleźć najwyższej jakości wypieki, ale także serce naszej społeczności, gdzie spotykają się smaki i emocje."}
                        aLink={"/cukiernie"}
                        aText={"WYZNACZ TRASĘ"} />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}