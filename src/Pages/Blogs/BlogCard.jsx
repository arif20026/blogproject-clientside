import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BlogCard = ({ blog }) => {
    const {email,_id, title,image,category,shortDescription,longDescription } = blog
    const {user} =useContext(AuthContext)

    // console.log(user?.email)

   

    const handleAddToWishList=_id => {
        console.log(_id)

        const wishListedBlog = {
            email: user?.email,
           title, image, shortDescription, category
        }
        console.log(wishListedBlog)

        fetch('http://localhost:5000/wishList', {
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
                alert('Blog WishListed successfully')
            }
        })
    } 
    return (
        <div className="card bg-base-100 shadow-xl border border-blue-500 ">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">title : {title}</h2>
                <p>category: {category}</p>
                <p>Short Description: {shortDescription}</p>
                <div className="card-actions justify-start">
                    <Link to={`/blogs/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-secondary" onClick={() => handleAddToWishList(_id)}>Wishlist</button>
                   {
                    user?.email===email &&  <Link to={`/updateBlog/${_id}`} ><button className="btn btn-primary">Update</button></Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default BlogCard;