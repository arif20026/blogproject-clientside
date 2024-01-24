import WishListCard from "./WishListCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const WishList = () => {

    const [wishList, setWishList] = useState([])
    const { user } = useContext(AuthContext);

    console.log(user?.email)
   


    const url = `http://localhost:5000/wishList?email=${user?.email}`
    console.log(url)

    useEffect(() => {
        fetch(url,{ credentials: 'include' })
        .then(res => res.json())
        .then(data => setWishList(data))


    }, []);


    const handleRemove = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/wishList/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Blog removed from Wishlist",
                            showConfirmButton: false,
                            timer: 1000
                        });
                        const remaining = wishList.filter(RemainingWishList => RemainingWishList._id !== _id);
                        setWishList(remaining);
                    }
                })
    }



    return (
        <div>

            {
                wishList?.map(item => <WishListCard key={item._id} item={item} handleRemove={handleRemove} >

                </WishListCard>
                )
            }

        </div>
    );
};

export default WishList;