import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const Blog = ({blogs}) => {

    useEffect(() => {
        document.title = "Blog";
    }, [])
    return (
        <Card style={{width:900}}>
            <Card.Body>
                <Card.Text style={{textAlign:'left'}}>Written by: {blogs.author}</Card.Text>
                <Card.Title style={{textAlign:'left'}} > <h5>{blogs && blogs.title}</h5></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                   {blogs.description}
                </Card.Text>
                <Card.Img style={{height:300, margin: 'auto'}} variant="top" 
                src="https://images.unsplash.com/photo-1468546211010-9a842bd2026e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" />
                <Button className="my-1" style={{ width: 150, display: 'block', margin: 'auto' }}>
                    Read full blog
                </Button>
            </Card.Body>
        </Card>
    )
}
export default Blog;