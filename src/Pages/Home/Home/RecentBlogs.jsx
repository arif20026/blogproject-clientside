import { useEffect, useState } from "react";
import RecentBlog from './RecentBlog'

const RecentBlogs = () => {

    

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))}, [])

               // Sort blogs based on the createdAt property in descending order
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Get the 6 most recently posted blogs
    const recentBlogs = sortedBlogs.slice(0, 6);
    return (
        <div>

            <h3>Blogs :{blogs.length}</h3>
         <div className=" space-y-4 my-4 ">
         {recentBlogs.map((blog) => (
           
           <RecentBlog blog={blog} key={blog._id}/>
        
            ))}
         </div>

        </div>
    );
};

export default RecentBlogs;