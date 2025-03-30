import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const SortDropdown = ({ handleSortChange }) => {
    return (
        <DropdownButton as={ButtonGroup} title="Sortowanie" id="bg-nested-dropdown" onSelect={handleSortChange}>
            <Dropdown.Item eventKey="1">Nr</Dropdown.Item>
            <Dropdown.Item eventKey="2">Od</Dropdown.Item>
            <Dropdown.Item eventKey="3">Temat</Dropdown.Item>
            <Dropdown.Item eventKey="4">Wartość</Dropdown.Item>
            <Dropdown.Item eventKey="5">Status</Dropdown.Item>
            <Dropdown.Item eventKey="6">Data złożenia</Dropdown.Item>
            <Dropdown.Item eventKey="7">Termin realizacji</Dropdown.Item>
            <Dropdown.Item eventKey="8">Właściciel</Dropdown.Item>
            <Dropdown.Item eventKey="9">Email</Dropdown.Item>
            <Dropdown.Item eventKey="10">Oferta</Dropdown.Item>
            <Dropdown.Item eventKey="11">Faktura</Dropdown.Item>
        </DropdownButton>
    );
};

export default SortDropdown;