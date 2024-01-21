import { useLoaderData } from "react-router-dom";
import BlogCard from "../Blogs/BlogCard";



const Blogs = () => {
    const blogs = useLoaderData()
    // const {title} =blogs
    console.log(blogs)
    return (
        <div className="grid grid-cols-1 space-y-8">
            <h3>blogs : {blogs.length}</h3>

            {
                blogs.map(blog => <BlogCard key={blog._id} blog={blog}> </BlogCard>)
            }
        </div>
    );
};

export default Blogs;