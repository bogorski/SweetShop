import { useState, useEffect } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Zamowienie } from '../../types/zamowienie'
import { EditOrderModalButtonProps } from "../../types/editOrderModalButtonProps";

const EditOrderModalButton: React.FC<EditOrderModalButtonProps> = ({ handleSave, selectedId, zamowienia, handleClose, show }) => {
    const [initialValues, setInitialValues] = useState<Zamowienie>({
        id: null,
        nr: '',
        od: '',
        temat: '',
        wartosc: null,
        status: '',
        data_zlozenia: null,
        termin_realizacji: null,
        właściciel: '',
        email: '',
        oferta: '',
        faktura: ''
    });

    const today = new Date();
    const maxDate = new Date(today.getFullYear() + 1, 11, 31);
    const validationSchema = Yup.object().shape({
        nr: Yup.number().typeError("Numer zamówienia musi być liczbą").positive("Numer zamówienia musi być liczbą dodatnią").required("Numer zamówienia jest wymagany"),
        od: Yup.string().required("Pole 'Od' jest wymagane"),
        temat: Yup.string().required("Temat jest wymagany"),
        wartosc: Yup.number().required("Wartość jest wymagana").min(0, "Wartość musi być większa lub równa 0"),
        termin_realizacji: Yup.date().required("Termin realizacji jest wymagany")
            .max(maxDate, `Termin realizacji nie może być późniejszy niż ${maxDate.toLocaleDateString()}`),
        właściciel: Yup.string().required("Właściciel jest wymagany"),
        email: Yup.string().email("Nieprawidłowy adres email").required("Email jest wymagany").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Niepoprawny adres email'),
        oferta: Yup.number().typeError("Numer oferty musi być liczbą").positive("Numer oferty musi być liczbą dodatnią").required("Numer oferty jest wymagany"),
        faktura: Yup.number().typeError("Numer faktury musi być liczbą").positive("Numer faktury musi być liczbą dodatnią").required("Numer faktury jest wymagany")
    });


    const formatDateForInput = (date: Date | null): string => {
        if (!date) return '';

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const getZamowienieById = (id) => {
            return zamowienia.find(zamowienie => zamowienie.id === id);
        }
        const zamowienie: Zamowienie | undefined = getZamowienieById(selectedId);

        if (zamowienie) {
            const nrParts = zamowienie.nr.match(/^Z\/(\d+)\/\d{4}$/);
            const nrNumber = nrParts ? nrParts[1] : '';
            const ofertaParts = zamowienie.oferta.match(/^O\/(\d+)\/\d{4}$/);
            const ofertaNumber = ofertaParts ? ofertaParts[1] : '';
            const fakturaParts = zamowienie.faktura.match(/^FV\/(\d+)\/\d{4}$/);
            const fakturaNumber = fakturaParts ? fakturaParts[1] : '';

            setInitialValues({
                id: zamowienie.id,
                nr: nrNumber,
                od: zamowienie.od,
                temat: zamowienie.temat,
                wartosc: zamowienie.wartosc,
                data_zlozenia: zamowienie.data_zlozenia,
                termin_realizacji: zamowienie.termin_realizacji,
                właściciel: zamowienie.właściciel,
                email: zamowienie.email,
                oferta: ofertaNumber,
                faktura: fakturaNumber
            });
            console.log("wybrano " + zamowienie.data_zlozenia);
        }
    }, [selectedId, zamowienia]);

    const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
        const newOrder: Zamowienie = {
            ...values,
            id: selectedId,
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Dodaj nowe zamówienie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, values, handleChange, handleBlur }) => (
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
                                            <Field
                                                type="date"
                                                name="termin_realizacji"
                                                className="form-control"
                                                value={formatDateForInput(values.termin_realizacji)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
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

export default EditOrderModalButton;
