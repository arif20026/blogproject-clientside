import { useEffect, useState } from "react";

const Blogers = () => {

    const [allBlogs,setAllBlogs] =useState([])

    useEffect(() => {
        fetch('https://assignment-11-blog-server.vercel.app/blogs')
        .then(res =>res.json())
        .then(data => setAllBlogs(data))
    }
        ,[])

    // Group blogs by blogger and count the number of blogs for each blogger
    const bloggerCounts = allBlogs.reduce((acc, blog) => {
        acc[blog.blogOwner] = (acc[blog.blogOwner] || 0) + 1;
        return acc;
    }, {});

    // Sort bloggers by the number of blogs in descending order
    const sortedBloggers = Object.keys(bloggerCounts).sort(
        (a, b) => bloggerCounts[b] - bloggerCounts[a]
    );

    // Display the top three bloggers and the number of blogs they have written
    const topThreeBloggers = sortedBloggers.slice(0, 3);
    return (
        <div>


             {/* Display top three bloggers */}
             <div className="text-center m-10 p-10 space-y-8 card bg-base-100 shadow-xl border border-blue-500 ">
                <h3 className="text-4xl font-bold">Top Three Bloggers:</h3>
                <ul className="grid grid-cols-3 gap-8 ">
                    {topThreeBloggers.map((blogger) => (
                        <li key={blogger} >
                            <span className="text-xl font-bold "> {blogger}</span> - {bloggerCounts[blogger]} blogs
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default Blogers;