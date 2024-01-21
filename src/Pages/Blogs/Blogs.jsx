import { useLoaderData } from "react-router-dom";
import BlogCard from "../Blogs/BlogCard";

const Blogs = () => {
    const blogs = useLoaderData();

    // Sort blogs based on the createdAt property in descending order
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="grid grid-cols-1 space-y-8">
            <h3>blogs: {sortedBlogs.length}</h3>

            {sortedBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
        </div>
    );
};

export default Blogs;
