import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>

            <div className=" text-center flex flex-col items-center justify-center  mt-60">

                <p className="text-3xl"><span className="font-bold">Oppss!</span> sorry page not found</p>
                <Link to='/'><button className="btn btn-primary mt-8">Go Back to Home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;