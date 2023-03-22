import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Info from "./Info";
import Logo from "./Logo";

const Navbar = () => {

    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <Logo></Logo>
                </Col>
                <Col className=" my-1" sm={8}>
                    <Info></Info>
                </Col>
            </Row>
        </Container>
    )
}
export default Navbar;