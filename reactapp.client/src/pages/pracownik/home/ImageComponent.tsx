import { Image, Col } from 'react-bootstrap';
import './ImageComponent.css';
export const ImageComponent = ({src }) => {
    return (
        <Col>
        <Image src={src} ></Image>
       </Col>
    )
}