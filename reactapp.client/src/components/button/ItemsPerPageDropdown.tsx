import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const ItemsPerPageDropdown = ({ handleItemsPerPageChange }) => {
    return (
        <DropdownButton as={ButtonGroup} onSelect={handleItemsPerPageChange} title="Pozycje na stronie" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="10">10</Dropdown.Item>
            <Dropdown.Item eventKey="25">25</Dropdown.Item>
            <Dropdown.Item eventKey="50">50</Dropdown.Item>
            <Dropdown.Item eventKey="100">100</Dropdown.Item>
        </DropdownButton>
    );
};

export default ItemsPerPageDropdown;