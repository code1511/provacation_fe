import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ListGroup style={{width:200}}>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-blog" action>Add Blog</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/search_blog" action>Search Blog </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About Us </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contacts </Link>
        </ListGroup>
    )
}
export default Menu;
