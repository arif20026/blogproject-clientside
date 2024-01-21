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
        <div>

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