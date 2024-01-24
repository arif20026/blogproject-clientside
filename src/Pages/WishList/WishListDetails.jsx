import { useLoaderData } from "react-router-dom";

const WishListDetails = () => {

    const details = useLoaderData()
    const { _id, title, image, category, shortDescription, longDescription } = details
    return (
        <div>

            <img src={image} alt="" />

            <h3 > Id: {_id}</h3>
            <h3 > Title: {title}</h3>
            <h3 > Category: {category}</h3>
            <h3 > Short Description: {shortDescription}</h3>
            <h3 > Long Description: {longDescription}</h3>



        </div>
    );
};

export default WishListDetails;