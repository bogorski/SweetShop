import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const AdminLayout = () => {
    return (
        <Container fluid className="p-0">
            <Header />
            <Container fluid className="py-5">
                <Outlet />
            </Container>
        </Container>
    )
}