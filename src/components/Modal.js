import RBModal from 'react-bootstrap/Modal';
import RBButton from 'react-bootstrap/Button';
import { MovieDetails } from './MovieDetails';
import { useState } from 'react';

export const Modal = () => {
    const [show, setShow] = useState();

    const handleClose = () => setShow(false);

    return (
        <>
            <RBModal show={show} onHide={handleClose}>
                <RBModal.Header closeButton>
                <RBModal.Title>Movie Details</RBModal.Title>
                </RBModal.Header>
                <RBModal.Body> {MovieDetails} </RBModal.Body>
                <RBModal.Footer>
                <RBButton variant="danger" onClick={handleClose}>
                    Close
                </RBButton>
                </RBModal.Footer>
            </RBModal>
        </>
    )
}