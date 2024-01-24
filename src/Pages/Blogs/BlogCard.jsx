import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BlogCard = ({ blog }) => {
    const {email,_id, title,image,category,shortDescription,longDescription} = blog
    const {user} =useContext(AuthContext)

    // console.log(user?.email)

   

    const handleAddToWishList=_id => {
        console.log(_id)

        const wishListedBlog = {
            email: user?.email,
           title, image, shortDescription, longDescription, category,
        }
        console.log(wishListedBlog)

        fetch('https://assignment-11-blog-server.vercel.app/wishList', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(wishListedBlog)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Blog WishListed Successfully",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    } 
    return (
        <div className="card bg-base-100 shadow-xl border border-blue-500 ">
            <figure><img src={image} alt="Blogs" className="w-60 h-40"/></figure>
            <div className="card-body">
                <h2 className="card-title"><span className="font-bold">Title : </span>{title}</h2>
                <p> <span className="font-bold">Category:</span> {category}</p>
                <p> <span className="font-bold">Short Description:</span> {shortDescription}</p>
                <div className="card-actions justify-start">
                    <Link to={`/blogs/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-primary" onClick={() => handleAddToWishList(_id)}>Wishlist</button>
                   {
                    user?.email===email &&  <Link to={`/updateBlog/${_id}`} ><button className="btn btn-primary">Update</button></Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default BlogCard;