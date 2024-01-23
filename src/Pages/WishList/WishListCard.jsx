import { Link } from "react-router-dom";

const WishListCard = ({ item ,handleRemove}) => {
    const {_id,title,image,category,shortDescription } = item


 


    return (
        <div>

            <h3 > Id: {_id}</h3>
            <h3 > Title: {title}</h3>
            <h3 > Image: {image}</h3>
            <h3 > Category: {category}</h3>
            <h3 > Short Description: {shortDescription}</h3>
            <Link to={`/blogs/${_id}`}><button className="btn btn-primary">Details</button></Link>
            <button className="btn btn-secondary" onClick={() =>handleRemove(_id)} >Remove</button>

        </div>
    );
};

export default WishListCard;