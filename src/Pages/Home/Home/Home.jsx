import Banner from "./Banner";
import Blogers from "./Blogers";
import FollowUs from "./FollowUs";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
           
            <RecentBlogs></RecentBlogs>
            <Blogers></Blogers>
            <FollowUs></FollowUs>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;