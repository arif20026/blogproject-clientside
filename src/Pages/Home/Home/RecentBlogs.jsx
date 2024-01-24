import { useEffect, useState } from "react";
import RecentBlog from './RecentBlog'

const RecentBlogs = () => {

    

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-blog-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))}, [])

               // Sort blogs based on the createdAt property in descending order
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Get the 6 most recently posted blogs
    const recentBlogs = sortedBlogs.slice(0, 6);
    return (
        <div>

            <h3 className="text-center text-4xl font-bold my-8">Recent Blogs</h3>

         <div className=" space-y-4 my-4 ">
         {recentBlogs.map((blog) => (
           
           <RecentBlog blog={blog} key={blog._id}/>
        
            ))}
         </div>

        </div>
    );
};

export default RecentBlogs;