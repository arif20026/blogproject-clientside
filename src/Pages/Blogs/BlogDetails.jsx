import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogs = useLoaderData()
    const {email,_id, title,image,category,shortDescription,longDescription } = blogs
    console.log(blogs)
    return (
        <div>
          
          <div className="card bg-base-100 shadow-xl border border-blue-500 ">
            <figure><img src={image} alt="Blog" /></figure>
            <div className="card-body">
                <h2 className="card-title">title : {title}</h2>
                <p>Short Description: {shortDescription}</p>
                <h3>Long Description : {longDescription}</h3>
                
            </div>
        </div>
        </div>
    );
};

export default BlogDetails;