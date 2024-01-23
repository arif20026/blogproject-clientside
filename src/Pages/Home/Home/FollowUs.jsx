import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const FollowUs = () => {
    return (
        <div className="text-center  mx-10 my-10 card bg-base-100 shadow-xl border border-blue-500">
            <h3 className="text-4xl font-bold">Find us on</h3>

            <div className="flex justify-around mx-28 my-4 ">
            <FaFacebook  />
            <FaYoutube />
            <FaTwitter />
            <FaLinkedin />
            </div>


            
        </div>
    );
};

export default FollowUs;