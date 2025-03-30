import { Table, Col, Row, Badge } from 'react-bootstrap';
import { useSortable } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { CSS } from "@dnd-kit/utilities";
// import { Box2 } from "grommet";
export const Sortable = ({ id, value }) => {
    const [disableDnD, setDisableDnD] = useState(true);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style}{...listeners} {...attributes} >
            {value}
        </div>
    );
};
