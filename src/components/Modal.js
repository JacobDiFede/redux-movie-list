import RBModal from 'react-bootstrap/Modal';
import RBButton from 'react-bootstrap/Button';

export const Modal = ({show, children, handleClose}) => {
    return (
        <>
            <RBModal show={show} onHide={handleClose}>
                <RBModal.Header>
                <RBModal.Title>Movie Details</RBModal.Title>
                </RBModal.Header>
                <RBModal.Body> {children} </RBModal.Body>
                <RBModal.Footer>
                <RBButton variant="danger" onClick={handleClose}>
                    Close
                </RBButton>
                </RBModal.Footer>
            </RBModal>
        </>
    )
}