import React, { useState } from "react";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    useDraggable
} from "@dnd-kit/core";
import { Form, Col, Row, Button, DropdownButton } from 'react-bootstrap';
import userImage from '../../../assets/jan_kowalski.jpg';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy
} from "@dnd-kit/sortable";
import { Sortable } from './SortableItem'
import { Karta } from './Karta'
import { KartaImg } from './KartaImg'
import './HomePage.css';
import { Formik, Form as FormikForm } from 'formik';

export const PracownikHome = () => {


    const [activeId, setActiveId] = useState(null);
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: {
            distance: 0.01
        }
    })
    const keyboardSensor = useSensor(KeyboardSensor)

    const sensors = useSensors(
        keyboardSensor,
        pointerSensor
    )
    const [items, setItems] = useState([
        { id: 1, component: <KartaImg /> },
        { id: 2, component: <Karta title={selectRandomWords(2)} subtitle={selectRandomWords(2)} text={selectRandomWords(22)} onRemove={() => removeItem(2)} /> },
        { id: 3, component: <Karta title={selectRandomWords(2)} subtitle={selectRandomWords(2)} text={selectRandomWords(22)} onRemove={() => removeItem(3)} /> },
        { id: 4, component: <Karta title={selectRandomWords(2)} subtitle={selectRandomWords(2)} text={selectRandomWords(22)} onRemove={() => removeItem(4)} /> },
        { id: 5, component: <Karta title={selectRandomWords(1)} subtitle={selectRandomWords(4)} text={selectRandomWords(12)} onRemove={() => removeItem(5)} /> },
        { id: 6, component: <Karta title={selectRandomWords(2)} subtitle={selectRandomWords(2)} text={selectRandomWords(22)} onRemove={() => removeItem(6)} /> },
        { id: 7, component: <Karta title={selectRandomWords(4)} subtitle={selectRandomWords(2)} text={selectRandomWords(12)} onRemove={() => removeItem(7)} /> },
        { id: 8, component: <Karta title={selectRandomWords(2)} subtitle={selectRandomWords(3)} text={selectRandomWords(22)} onRemove={() => removeItem(8)} /> },
        { id: 9, component: <Karta title={selectRandomWords(2)} subtitle={selectRandomWords(2)} text={selectRandomWords(22)} onRemove={() => removeItem(9)} /> },
        { id: 10, component: <Karta title={selectRandomWords(3)} subtitle={selectRandomWords(2)} text={selectRandomWords(25)} onRemove={() => removeItem(10)} /> }
    ]);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [text, setText] = useState('');

    const addItem = () => {
        const newId = items.length + 1;
        const newItem = {
            id: newId,
            component: (
                <Karta
                    key={newId}
                    title={title}
                    subtitle={subtitle}
                    text={text}
                    onRemove={() => removeItem(newId)}
                />
            )
        };
        setItems([...items, newItem]);
        setTitle('');
        setSubtitle('');
        setText('');
    };

    const removeItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        console.log(items)
    };

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        setActiveId(null);
        const { active, over } = event;

        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <>
            <DropdownButton title="Dodaj kafelek" className="pb-4" >
                <Form className="dodajFormularz p-2" >
                    <Form.Group controlId="title" className="p-1">
                        <Form.Control type="text" placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="subtitle" className="p-1">
                        <Form.Control type="text" placeholder="Podtytuł" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="text" className="p-1">
                        <Form.Control as="textarea" rows={3} placeholder="Tekst" value={text} onChange={(e) => setText(e.target.value)} />
                    </Form.Group>
                    <Button className="m-1" variant="primary" onClick={addItem}>Dodaj kafelek</Button>
                </Form>
            </DropdownButton>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
            >
                <Row className="justify-content-center">
                    <SortableContext items={items} strategy={rectSortingStrategy}>
                        {items.map((item) => {
                            return (
                                <Col key={item.id} className="pb-2">
                                    <Sortable id={item.id} handle={true} value={item.component} />
                                </Col>
                            );
                        })}
                    </SortableContext>
                </Row>
            </DndContext> </>
    );
};

const selectRandomWords = (numberOfWords) => {
    const sampleText = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum';

    const words = sampleText.split(/\s+/);

    if (numberOfWords > words.length) {
        return '';
    }

    const newNumberOfWords = numberOfWords;

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