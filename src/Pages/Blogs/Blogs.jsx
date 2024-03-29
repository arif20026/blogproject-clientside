import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../Blogs/BlogCard";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {

    
    const {isPending,isError,error,data:allBlogs} =useQuery({
        queryKey:['allBlogs'],
        queryFn: async () =>{
            const res = await fetch('https://assignment-11-blog-server.vercel.app/blogs')
            return res.json()
        }

    })

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchedTitle, setSearchedTitle] = useState("");

    // Filter blogs based on the selected category and searched title
    const filteredBlogs = allBlogs?.filter((blog) => {
        const categoryMatch =
            selectedCategory === "all" || blog.category === selectedCategory;
        const titleMatch = blog.title.toLowerCase().includes(searchedTitle.toLowerCase());
        return categoryMatch && titleMatch;
    });

  
    const uniqueCategories = [...new Set(allBlogs?.map((blog) => blog.category))];

    const handleSearchByTitle = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.searchedTitle.value;
        setSearchedTitle(title);
        setSelectedCategory("all");
    };

    if(isPending){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(isError){
        return <p>Error: {error.message}</p>
    }

    return (
        <div >

            {/* Category filter dropdown */}
            <div className=" flex flex-col lg:flex-row space-y-4 my-4 justify-around items-center gap">
                <label>
                    <span className="font-bold mr-2">Filter by Category:</span>
                    <select
                        className="border border-black rounded-xl"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        {uniqueCategories?.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </label>

                <form className="join" onSubmit={handleSearchByTitle}>
                    <input
                        className="input input-bordered join-item"
                        placeholder="Type a title"
                        name="searchedTitle"
                    />
                    <button className="btn join-item rounded-r-full" type="submit">
                        Search
                    </button>
                </form>
            </div>


         <div className="grid grid-cols-1 space-y-8 mx-10 my-6">
               {/* Display filtered blogs */}
               {filteredBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
         </div>
        </div>
    );
};

export default Blogs;
