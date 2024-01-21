import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const blogs = useLoaderData()
    const {longDescription} = blogs
    console.log(blogs)
    return (
        <div>
          <h3>Long Description : {longDescription}</h3>
        </div>
    );
};

export default BlogDetails;