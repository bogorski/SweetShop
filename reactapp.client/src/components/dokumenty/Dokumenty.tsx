import { Col, Row, Card, Badge, ButtonGroup, Button, DropdownButton, Dropdown, Form, InputGroup } from 'react-bootstrap';
import './Dokumenty.css';

export const Dokumenty = () => {

    const sampleText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum';

    const words = [
        'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
        'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua',
        'Ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris',
        'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'Duis', 'aute', 'irure', 'reprehenderit',
        'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'Excepteur',
        'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia', 'deserunt',
        'mollit', 'anim', 'id', 'est', 'laborum'
    ];

    const extensions = ['txt', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'jpg', 'png', 'gif'];

    const getRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)];
    };

    const getRandomExtension = () => {
        return extensions[Math.floor(Math.random() * extensions.length)];
    };

    return (
        <Row className=" justify-content-center">
            <Col xs={{ span: 6, offset: 4 }} className="ms-3 text-center">
                <h3>Dokumenty do pobrania</h3>
            </Col>
            <Col xs={{ span: 6, offset: 4 }} className="ms-3">
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Znajdź dokument"
                        aria-label="Zanjdz dokument"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Szukaj
                    </Button>
                </InputGroup>
            </Col>
            <Col xs={12} className="ms-3">
                <ButtonGroup className="btn-primary">
                    <DropdownButton as={ButtonGroup} title="Obszar" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">BHP</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Delegacja</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Ubezpieczenia</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Opieka medyczna</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Ogólne</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} title="Data dodania" id="bg-nested-dropdown">
                        <Row className="p-1">
                            <Col xs={6} className="pe-1">
                                <Form.Group controlId="od">
                                    <Form.Control type="text" placeholder="od" />
                                </Form.Group>
                            </Col>
                            <Col xs={6} className="ps-1">
                                <Form.Group controlId="do">
                                    <Form.Control type="text" placeholder="do" />
                                </Form.Group>
                            </Col>
                            <Col >
                                <Button size="sm" className="mt-2">Szukaj</Button>
                            </Col>
                        </Row>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} title="Pozycje na stronie" id="bg-nested-dropdown">
                        <Dropdown.Item eventKey="1">10</Dropdown.Item>
                        <Dropdown.Item eventKey="2">25</Dropdown.Item>
                        <Dropdown.Item eventKey="3">50</Dropdown.Item>
                        <Dropdown.Item eventKey="4">100</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </Col>
            <Col xs={12}>
                <Row>
                    {[...Array(104)].map((_, index) => (
                        <SingleCard
                            key={index}
                            name={`${getRandomWord()} ${getRandomWord()}`}
                            text={selectRandomWords(sampleText, 12)}
                            rozszerzenie={`${getRandomExtension()}`}
                            data={`${generateRandomDate()}`} />
                    ))}
                </Row>
            </Col >
        </Row>
    )
}

const selectRandomWords = (text, numberOfWords) => {
    const words = text.split(/\s+/);

    if (numberOfWords > words.length) {
        return '';
    }

    const randomOffset = Math.floor(Math.random() * 3) * 2 - 2;

    const newNumberOfWords = numberOfWords + randomOffset;

    if (newNumberOfWords <= 0) {
        return '';
    }

    const selectedWords = [];
    for (let i = 0; i < newNumberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedWords.push(words[randomIndex]);
    }

    return selectedWords.join(' ');
};

const generateRandomDate = () => {
    const currentDate = new Date();
    const randomYear = currentDate.getFullYear() - Math.floor(Math.random() * 5);
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);

    const formattedDate = `${randomYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')} ${randomHour.toString().padStart(2, '0')}:${randomMinute.toString().padStart(2, '0')}`;

    return formattedDate;
};

const SingleCard = ({ name, text, rozszerzenie, data }) => {

    return (
        <Col xs={3}>
            <Card className="m-2">
                <Card.Body>
                    <Card.Title>{name} <Badge className="rozszerzenie">{rozszerzenie}</Badge></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Data dodania {data}</Card.Subtitle>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Link href="#">Pobierz</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};