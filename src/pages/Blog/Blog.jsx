import React from "react";
import { blogs } from "./blogs";
import { Link } from "react-router-dom";
export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                            <p className="text-gray-600 mb-4">{blog.description}</p>
                            <Link
                                to={`/blog/${blog.id}`}
                                className="text-blue-500 hover:underline font-semibold"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}