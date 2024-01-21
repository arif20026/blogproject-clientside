import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const WishListCard = ({ item ,handleRemove}) => {
    const {_id,title,image,category,shortDescription } = item

    const [remainingWishList, setRemainingWishList] = useState([])

    // const { user } = useContext(AuthContext);

    // console.log(user?.email)
    // const [wishList,setWishList] = useState([])
   

    // const url = `http://localhost:5000/wishList?email=${user?.email}`
    // console.log(url)

    // useEffect(() => {fetch(url)
    //         .then(res => res.json())
    //         .then(data => setWishList(data))

    // }, []);

    

    // const handleRemove = _id => {
    //     console.log(_id)
    //     fetch(`http://localhost:5000/wishList/${_id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successful');
    //                     const remaining = remainingWishList.filter(newRemainingWishList => newRemainingWishList._id !== _id);
    //                     setRemainingWishList(remaining);
    //                 }
    //             })
    // }


    return (
        <div>

            <h3 > Id: {_id}</h3>
            <h3 > Title: {title}</h3>
            <h3 > Image: {image}</h3>
            <h3 > Category: {category}</h3>
            <h3 > Short Description: {shortDescription}</h3>
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-secondary" onClick={() =>handleRemove(_id)} >Remove</button>

        </div>
    );
};

export default WishListCard;