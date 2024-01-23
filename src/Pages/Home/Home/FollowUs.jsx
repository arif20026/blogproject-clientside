import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FollowUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center mx-10 my-10 card bg-base-100 shadow-xl border border-blue-500"
    >
      <h3 className="text-4xl font-bold">Find us on</h3>

      <motion.div className="flex justify-around mx-28 my-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <FaFacebook />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <FaYoutube />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <FaTwitter />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <FaLinkedin />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FollowUs;
