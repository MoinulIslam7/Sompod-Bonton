import React from "react";
import { blogs } from "./blogs";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function BlogDetail() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id == id);

    if (!blog) {
        return <h2 className="text-center text-2xl font-bold mt-10">Blog not found</h2>;
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-3xl">
            <img src={blog.image} alt={blog.title} className="w-full h-[40rem] object-cover rounded-lg" />
            <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
            <p className="text-gray-700 text-lg mt-4">{blog.description}</p>
            <div className="mt-6 text-gray-800 text-base">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
                {/* {blog.content} */}
            </div>
            <Link to="/blog" className="text-blue-500 hover:underline font-semibold mt-6 inline-block">
                ← Back to Blogs
            </Link>
        </div>
    );
}