import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const BlogDetailsCard = ({ blog }) => {

    const { user } = useContext(AuthContext)


    const { _id, email, image, title, shortDescription, longDescription } = blog
    return (
        <div>

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

            </div>

        </div>
    );
};

export default BlogDetailsCard;