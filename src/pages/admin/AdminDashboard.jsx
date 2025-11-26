import React from 'react';
import { useAdmin } from '../../context/AdminContext';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const { user, logout } = useAdmin();

    return (
        <Container fluid>
            <Row>
                <Col md={2} className="bg-light sidebar min-vh-100 py-3">
                    <h4 className="text-center">Admin Panel</h4>
                    <Nav className="flex-column mt-4">
                        <Nav.Link as={Link} to="/admin/dashboard" active>Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/admin/content">Content Editor</Nav.Link>
                        <Nav.Link onClick={logout} className="text-danger">Logout</Nav.Link>
                    </Nav>
                </Col>
                <Col md={10} className="py-4">
                    <Card>
                        <Card.Header>
                            <h3>Welcome, {user?.username}!</h3>
                        </Card.Header>
                        <Card.Body>
                            <p>Select an option from the sidebar to manage your website content.</p>
                            <Button variant="primary" as={Link} to="/">View Live Site</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
