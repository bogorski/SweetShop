import { Dokumenty } from '../../../../components/dokumenty/Dokumenty'
import { Col, Row, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

export const AdminDokumenty = () => {
    return (
        <div>
            <Row className="pb-5 mb-3 justify-content-center">
                <Col xs="auto">
                    <h3 className="text-center mb-3">Dodaj dokument</h3>
                    <ButtonGroup className="btn-primary">
                        <DropdownButton as={ButtonGroup} title="Pracownicze" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Anulowanie pełnomocnictwa</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Decyzja o udzieleniu dodatkowego urlopu macierzyńskiego</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Decyzja o udzieleniu urlopu ojcowskiego</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Decyzja w sprawie rozpatrzenia sprzciwu od ukarania pracownika</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Decyzja o udzieleniu urlopu macierzyńskiego</Dropdown.Item>
                            <Dropdown.Item eventKey="6">Delegacja krajowa</Dropdown.Item>
                            <Dropdown.Item eventKey="7">Delegacja zagraniczna</Dropdown.Item>
                            <Dropdown.Item eventKey="8">Informacja o zatrudnieniu i wynagrodzeniu</Dropdown.Item>
                            <Dropdown.Item eventKey="9">Informacja o zwolnieniu z pracy - redukcja etatów</Dropdown.Item>
                            <Dropdown.Item eventKey="10">Kurs językowy</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton as={ButtonGroup} title="Umowy o dzieło i zlecenie" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Umowa o dzieło</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Umowa o dzieło dla konserwatora</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Umowa o dzieło dla cukiernika</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Umowa o dzieło dla handlowca</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Umowa zlecenie dla cukiernika</Dropdown.Item>
                            <Dropdown.Item eventKey="6">Umowa zlecenie dla magazyniera</Dropdown.Item>
                            <Dropdown.Item eventKey="7">Umowa zlecenie dla sprzedawcy</Dropdown.Item>
                            <Dropdown.Item eventKey="8">Umowa zlecenie dla konserwatora</Dropdown.Item>
                            <Dropdown.Item eventKey="9">Umowa zlecenie dla handlowca</Dropdown.Item>
                            <Dropdown.Item eventKey="10">Umowa zlecenie dla kierownika</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton as={ButtonGroup} title="Firmowe" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Informacja o przekazaniu wierzytelności</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Przedłużenie terminu płatności</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Umowa akwizycyjna</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Umowa dostawy</Dropdown.Item>
                            <Dropdown.Item eventKey="5">Umowa zamiany</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton as={ButtonGroup} title="Urzędy" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Arkusz spisu z natury</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dowód sprzedaży</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Wniosek o zwrto podatku VAT w teminie 180 dni</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Wniosek o zwrto podatku VAT w teminie 60 dni</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Col>
            </Row>
            <Dokumenty />
        </div>
    )
}