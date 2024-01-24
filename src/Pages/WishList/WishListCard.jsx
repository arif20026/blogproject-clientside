import { Link } from "react-router-dom";

const WishListCard = ({ item ,handleRemove}) => {
    const {_id,title,image,category,shortDescription } = item


 


    return (
        <div className="mx-10 border border-blue-500 my-4 rounded-md px-2">

            <h3 > <span className="font-bold">Title:</span>  {title}</h3>
            <h3 > <span className="font-bold">Category:</span>  {category}</h3>
            <h3 > <span className="font-bold">Short Description:</span> {shortDescription}</h3>
            <Link to={`/blogs/${_id}`}><button className="btn btn-primary mr-2 my-2">Details</button></Link>
            <button className="btn btn-primary" onClick={() =>handleRemove(_id)} >Remove</button>

        </div>
    );
};

export default WishListCard;