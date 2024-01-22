import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const RecentBlog = ({ blog }) => {
    const {_id, title, image, shortDescription, category } = blog

    const {user} =useContext(AuthContext)

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
        <div className="card  bg-base-100 shadow-xl border border-red-500">
            <figure><img src={image} alt="Blog" /></figure>
            <div className="card-body">
                <h2 className="card-title">title:{title}</h2>
                <p>category:{category}</p>
                <p>shortDescription:{shortDescription}</p>
                <Link to={`/blogs/${_id}`}><button className="btn btn-primary">Details</button></Link>
                <button className="btn btn-secondary w-20" onClick={() => handleAddToWishList(_id)}>Wishlist</button>
               
            </div>
        </div>
    );
};

export default RecentBlog;