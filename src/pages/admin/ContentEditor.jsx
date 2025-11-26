import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContentEditor = () => {
    const { content, updateNestedContent } = useContent();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleHomeHeroChange = (e) => {
        updateNestedContent('home', 'hero', e.target.name, e.target.value);
    };

    const handleHomeReasonChange = (e) => {
        updateNestedContent('home', 'reason', e.target.name, e.target.value);
    };

    const handleSave = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={2} className="bg-light sidebar min-vh-100 py-3">
                    <h4 className="text-center">Admin Panel</h4>
                    <Nav className="flex-column mt-4">
                        <Nav.Link as={Link} to="/admin/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/admin/content" active>Content Editor</Nav.Link>
                        <Nav.Link as={Link} to="/admin/login" className="text-danger">Logout</Nav.Link>
                    </Nav>
                </Col>
                <Col md={10} className="py-4">
                    <h2>Content Editor</h2>
                    {showSuccess && <Alert variant="success">Content saved successfully!</Alert>}

                    <Card className="mb-4">
                        <Card.Header>Home Page - Hero Section</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Subtitle</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="subtitle"
                                        value={content.home.hero.subtitle}
                                        onChange={handleHomeHeroChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={content.home.hero.title}
                                        onChange={handleHomeHeroChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Button Text</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="buttonText"
                                        value={content.home.hero.buttonText}
                                        onChange={handleHomeHeroChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mb-4">
                        <Card.Header>Home Page - Reason Section</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Section Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={content.home.reason.title}
                                        onChange={handleHomeReasonChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description (First Item)</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="description"
                                        value={content.home.reason.description}
                                        onChange={handleHomeReasonChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Button variant="success" onClick={handleSave}>Save Changes</Button>
                </Col>
            </Row>
        </Container>
    );
};

import { Nav } from 'react-bootstrap'; // Added missing import

export default ContentEditor;
