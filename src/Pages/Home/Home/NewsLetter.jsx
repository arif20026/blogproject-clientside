import Swal from "sweetalert2";

const NewsLetter = () => { 

    const handleSubmit = (e) =>{
       e.preventDefault()
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Thank you for subscribing to our newsletter",
            showConfirmButton: false,
            timer: 3000
          });


    }
    return (
        <div  className="flex flex-col justify-center items-center card bg-base-100 shadow-xl border border-blue-500 my-10 mx-10">

            <h3 className="text-4xl font-bold ">Subscribe To Our NewsLetter</h3>

            <form onSubmit={handleSubmit} className="my-4 mx-4">
            <div className="join">
                <input className="input input-bordered join-item" placeholder="Email" type="email" required  />
                {/* <input  type="submit"></input> */}
                <input className="btn btn-primary join-item rounded-r-full" type="submit" value="Subscribe" />
            </div>

            </form>
        </div>
    );
};

export default NewsLetter;