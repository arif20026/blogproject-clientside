import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RecentBlog = ({ blog }) => {
  const { _id, title, image, shortDescription, category } = blog;
  const { user } = useContext(AuthContext);

  const handleAddToWishList = (_id) => {
    console.log(_id);

    const wishListedBlog = {
      email: user?.email,
      title,
      image,
      shortDescription,
      category,
    };

    console.log(wishListedBlog);

    fetch("http://localhost:5000/wishList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishListedBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Blog  WishListed ",
            showConfirmButton: false,
            timer: 1000
        });
        }
      });
  };

  return (
    <div
      
      className="card bg-base-100 mx-10 shadow-xl border border-blue-500"
    >
      <figure>
        <img src={image} alt="Blog" className="w-60 h-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p ><span className="font-bold">Category:</span> {category}</p>
        <p > <span className="font-bold">Short Description: </span>{shortDescription}</p>
        <Link to={`/blogs/${_id}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
        <button
          className="btn btn-primary w-20"
          onClick={() => handleAddToWishList(_id)}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default RecentBlog;
