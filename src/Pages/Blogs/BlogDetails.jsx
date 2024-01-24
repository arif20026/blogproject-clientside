import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import BlogDetailsCard from "./BlogDetailsCard";

const BlogDetails = () => {
    const blog = useLoaderData()
    const { email, _id, title, image, category, shortDescription, longDescription } = blog
    console.log(blog)

    const { user } = useContext(AuthContext)

    // const [comments, setComments] = useState([])
    // const url = `http://localhost:5000/comments?blogId=${_id}`
    // console.log(url)

    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setComments(data))
    // }
    //     , [])

   
    // const handleAddComment = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const comment = form.comment.value
    //     const currentDate = new Date();
    //     const createdAt = currentDate.toISOString();
    //     const email = user.email
    //     const blogOwner = user.displayName
    //     const profilePicture = user.photoURL
    //     const blogId = _id

    //     console.log(email, blogOwner, profilePicture)

    //     const newComment = { comment, blogOwner, profilePicture, blogId }

    //     console.log(newComment)

    //     // sending newProduct to server

    //     setComments((prevComments) => [...prevComments, newComment]);

        


    //     fetch('http://localhost:5000/comments', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(newComment)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)

    //         })

           

    // }
    return (
        

            <div className="card bg-base-100 shadow-xl border border-blue-500 ">

            <figure><img src={image} alt="Blog" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span className="font-bold">Title: </span> {title}</h2>
                <p><span className="font-bold">Short Description: </span> {shortDescription}</p>
                <h3><span className="font-bold">Long Description: </span>{longDescription}</h3>

                <h3 className="text-3xl font-bold">Comments</h3>

                {
                    user.email === email ?
                        <div><h3 className="text-blue-400 font-bold my-4">Sorry! Can not comment on own blog </h3><Link to={`/updateBlog/${_id}`} ><button className="btn btn-primary">Update Blog</button></Link></div>

                        :

                        <form className="my-4 mx-4" onSubmit={handleAddComment}>
                            <div className="join">
                                <input className="input input-bordered join-item" placeholder="Type here" name="comment" type="text" required />
                                {/* <input  type="submit"></input> */}
                                <input className="btn btn-primary join-item rounded-r-full" type="submit" value="Comment" />
                            </div>

                        </form>
                }
                    {/* {
                        comments.map(comment => <div key={comment._id} className="border border-red-400 rounded-xl">
                            <div className="flex gap-2" >
                                <img src={comment.profilePicture} alt="" className="w-10 rounded-full" />
                                <h3 className="text-xl font-bold">{comment.blogOwner}</h3>

                            </div>
                            <p className="ml-16 mb-4"> {comment.comment}</p>



                        </div>)
                    } */}

                    



            </div>
        </div>
    );
};

export default BlogDetails;