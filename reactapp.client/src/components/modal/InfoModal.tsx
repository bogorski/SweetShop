import { Modal, Button } from 'react-bootstrap';
import { InfoModalProps } from '../../types/infoModalProps'


const InfoModal: React.FC<InfoModalProps> = ({ show, onHide, text }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Informacja</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>
                    Zamknij
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InfoModal;