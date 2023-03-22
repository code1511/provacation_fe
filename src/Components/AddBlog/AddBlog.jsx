import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import base_url from "../../ServerApi";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddBlog = () => {
    useEffect(() => {
        document.title = "Add blog";
    }, []);
    const [blog, setBlog] = useState({});
    const postDataToServer = (data) => {
        axios.post(`${base_url}/vacationBlogs`, data,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then(
                (data) => {
                    console.log(data);
                },
                (err) => {
                    console.log(err);
                }
            )

    }
    const handleSubmit = (e) => {
        console.log(blog);
        postDataToServer(blog);
        e.preventDefault();
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1 className="text-center my-3">Add New Blog </h1>
                <Row>
                    <Col>
                        <FormGroup>
                            <label className="text-left">Blog No</label>
                            <Input type="text" placeholder="Enter blog no here" name="id" id="id"
                                onChange={(e) => {
                                    setBlog({
                                        ...blog, id: e.target.value
                                    })
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <label className="text-left" >Blog Author</label>
                            <Input type="text" placeholder="Enter blog author name" name="author" id="author"
                                onChange={(e) => {
                                    setBlog({
                                        ...blog, author: e.target.value
                                    })
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <label className="text-left" >Blog Title</label>
                            <Input type="text" placeholder="Enter blog title here" name="title" id="title"
                                onChange={(e) => {
                                    setBlog({
                                        ...blog, title: e.target.value
                                    })
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <label className="text-left">Blog Description</label>
                    <Input
                        type="textarea"
                        placeholder="Enter blog containt here" name="description" id="description"
                        style={{ height: 250 }}
                        onChange={(e) => {
                            setBlog({
                                ...blog, description: e.target.value
                            })
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">
                        Add Blog
                    </Button>{" "}
                    <Button color="dark ml-2" type="reset" onClick={() => { }}>
                        Clear
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default AddBlog;
