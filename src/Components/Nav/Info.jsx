import React,{useContext} from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";

const Info = () => {
    const { logout } = useContext(AuthContext);
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }
    return (
        <Container fluid>
            <Nav className="me-auto">
                <Nav.Link href="#home" style={{ color: "white" }}>Home</Nav.Link>
                <Nav.Link href="#home" style={{ color: "white" }}>Trips</Nav.Link>
                <Nav.Link href="#home" style={{ color: "white" }}>Blogs</Nav.Link>
                <Nav.Link href="#home" style={{ color: "white" }}>Support</Nav.Link>
                <Nav.Link href="#home" style={{ color: "white" }}>Explore </Nav.Link>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 my-2"
                        aria-label="Search"
                        style={{ height: 28 }}
                    />
                    <Button className="my-2" variant="light" style={{ height: 28, display: "flex", alignItems: "center" }}>
                        <p style={{ margin: 0, padding: "0 10px" }}>Search</p>
                    </Button>
                </Form>
                <Nav.Link href="#home" style={{ color: "white" }} onClick={handleLogout}>Log out</Nav.Link>
            </Nav>
        </Container>
    )
}
export default Info;