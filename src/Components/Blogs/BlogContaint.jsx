import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import base_url from "../../ServerApi";

const BlogContaint = () => {
    const [blogs, setBlogs] = useState([])
    const getAllBlogsFromServer = () => {
        axios.get(`${base_url}/vacationBlogs`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(
            (res) => {
                console.log(res);
                setBlogs(res.data);
            },
            (err) => { console.log(err) }
        );
    }
    useEffect(() => {
        getAllBlogsFromServer();
    }, [])

    const renderBlogs = () => {
        if (blogs.length > 0) {
            return blogs.map((item, index) => {
                return <Blog key={item.id} blogs={item} />;
            });
        } else {
            return <p>No blogs available</p>;
        }
    };

    const renderSpacer = () => {
        if (blogs.length > 0) {
            return <div style={{ height: '50px' }}>
            </div>; // add your own styling here
        } else {
            return null;
        }
    };

    return (
        <div>
            {renderBlogs()}
            {renderSpacer()}
        </div>
    )
}
export default BlogContaint;