import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const FollowUs = () => {
    return (
        <div className="text-center border border-red-300 mx-20 my-10">
            <h3>Find us on</h3>

            <div className="flex justify-around mx-28 my-4 ">
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
            <FaLinkedin />
            </div>


            
        </div>
    );
};

export default FollowUs;