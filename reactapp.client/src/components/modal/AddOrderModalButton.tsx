import { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Zamowienie } from '../../types/zamowienie'

const AddOrderModalButton = ({ handleSave, ordersLength }) => {
    const [show, setShow] = useState(false);

    const today = new Date();
    const maxDate = new Date(today.getFullYear()+1, 11, 31);
    const validationSchema = Yup.object().shape({
        nr: Yup.number().typeError("Numer zamówienia musi być liczbą").positive("Numer zamówienia musi być liczbą dodatnią").required("Numer zamówienia jest wymagany"),
        od: Yup.string().required("Pole 'Od' jest wymagane"),
        temat: Yup.string().required("Temat jest wymagany"),
        wartosc: Yup.number().required("Wartość jest wymagana").min(0, "Wartość musi być większa lub równa 0"),
        termin_realizacji: Yup.date().required("Termin realizacji jest wymagany")
            .min(today, `Termin realizacji nie może być wcześniejszy niż dzisiaj`)
            .max(maxDate, `Termin realizacji nie może być późniejszy niż ${maxDate.toLocaleDateString()}`), 
        właściciel: Yup.string().required("Właściciel jest wymagany"),
        email: Yup.string().email("Nieprawidłowy adres email").required("Email jest wymagany").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Niepoprawny adres email'),
        oferta: Yup.number().typeError("Numer oferty musi być liczbą").positive("Numer oferty musi być liczbą dodatnią").required("Numer oferty jest wymagany"),
        faktura: Yup.number().typeError("Numer faktury musi być liczbą").positive("Numer faktury musi być liczbą dodatnią").required("Numer faktury jest wymagany")
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (values, { setSubmitting }) => {
        const newOrder: Zamowienie = {
            ...values,
            id: ordersLength + 1,
            nr: "Z/" + values.nr + "/" + new Date().getFullYear(),
            status: "Nowe",
            data_zlozenia: new Date(),
            termin_realizacji: new Date(values.termin_realizacji),
            oferta: "O/" + values.oferta + "/" + new Date().getFullYear(),
            faktura: "FV/" + values.faktura + "/" + new Date().getFullYear()
        };
        handleSave(newOrder);
        setSubmitting(false);
        handleClose();
    };

    return (
        <>
            <Button onClick={handleShow}>
                Dodaj
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj nowe zamówienie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            nr: "",
                            od: "",
                            temat: "",
                            wartosc: null,
                            termin_realizacji: "",
                            właściciel: "",
                            email: "",
                            oferta: "",
                            faktura: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <FormikForm>
                                <Row>
                                <Form.Group className="mb-3" controlId="formNrZamowienia">
                                    <Form.Label>Numer zamówienia</Form.Label>
                                    <Field type="text" name="nr" className="form-control" />
                                    <ErrorMessage name="nr" component="div" className="text-danger" />
                                        </Form.Group>
                                <Form.Group className="mb-3" controlId="formOd">
                                    <Form.Label>Od</Form.Label>
                                    <Field type="text" name="od" className="form-control" />
                                    <ErrorMessage name="od" component="div" className="text-danger" />
                                        </Form.Group>
                                <Form.Group className="mb-3" controlId="formTemat">
                                    <Form.Label>Temat</Form.Label>
                                    <Field type="text" name="temat" className="form-control" />
                                    <ErrorMessage name="temat" component="div" className="text-danger" />
                                    </Form.Group>
                                    <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formWartosc">
                                    <Form.Label>Wartość</Form.Label>
                                    <Field type="number" name="wartosc" className="form-control" />
                                    <ErrorMessage name="wartosc" component="div" className="text-danger" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formTerminRealizacji">
                                    <Form.Label>Termin realizacji</Form.Label>
                                    <Field type="date" name="termin_realizacji" className="form-control" />
                                    <ErrorMessage name="termin_realizacji" component="div" className="text-danger" />
                                        </Form.Group>
                                        </Col>
                                <Form.Group className="mb-3" controlId="formWlasciciel">
                                    <Form.Label>Właściciel</Form.Label>
                                    <Field type="text" name="właściciel" className="form-control" />
                                    <ErrorMessage name="właściciel" component="div" className="text-danger" />
                                        </Form.Group>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Adres email</Form.Label>
                                    <Field type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                        </Form.Group>
                                    <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formOferta">
                                    <Form.Label>Oferta</Form.Label>
                                    <Field type="text" name="oferta" className="form-control" />
                                    <ErrorMessage name="oferta" component="div" className="text-danger" />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formFaktura">
                                    <Form.Label>Faktura</Form.Label>
                                    <Field type="text" name="faktura" className="form-control" />
                                    <ErrorMessage name="faktura" component="div" className="text-danger" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Modal.Footer>
                                    <Button onClick={handleClose}>
                                        Anuluj
                                    </Button>
                                    <Button type="submit" disabled={isSubmitting}>
                                        Zapisz
                                    </Button>
                                </Modal.Footer>
                            </FormikForm>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddOrderModalButton;