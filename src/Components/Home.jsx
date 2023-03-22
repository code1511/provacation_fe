import { Col, Container, Row } from "react-bootstrap";
import BlogContaint from "./Blogs/BlogContaint";
import Navbar from "./Nav/Navbar";
import Menu from "./Menu";
import AddBlog from "./AddBlog/AddBlog";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => {
    return (
        <Router>
            <Container fluid >
                <Row>
                    <Col style={{ backgroundColor: "blue", height: 50 }} >
                        <Navbar style={{ backgroundColor: "blue", height: 50 }} />
                    </Col>
                </Row>
                <Row className="text-center my-2">
                    <Col style={{ height: 300 }} md={2}>
                        <Menu />
                    </Col>
                    <Col style={{ backgroundColor: "white", height: 300 }} my-2>
                        <Routes>
                            <Route path='/' element={<BlogContaint />} />
                            <Route path='/add-blog' element = {<AddBlog/>}/>
                        </Routes>

                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </Router>
    )
}

export default Home;
