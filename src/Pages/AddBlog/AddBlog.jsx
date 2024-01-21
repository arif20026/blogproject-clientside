import Swal from 'sweetalert2'

const AddBlog = () => {
    const handleAddBlog = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const title = form.title.value
        const email = form.email.value
        const category = form.category.value
        const shortDescription = form.shortDescription.value
        const longDescription = form.longDescription.value

        const newBlog = {image,title,email,category,shortDescription,longDescription}

        console.log(newBlog)

        // sending newProduct to server

        fetch('http://localhost:5000/blogs',{
            method:'POST',
            headers:{'content-type' : 'application/json'},
            body:JSON.stringify(newBlog)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Blog Added",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
        
        })

    }
    return (
        <div>

            <form className="card-body" onSubmit={handleAddBlog}>
              <div className=" grid grid-cols-2 gap-4">
              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="title" name="title" className="input input-bordered" required />
                </div>
              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" placeholder="image" name="image" className="input input-bordered" required />
                </div>
              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
              <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" placeholder="category" name="category" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <input type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Long Description</span>
                    </label>
                    <input type="text" placeholder="Long Description" name="longDescription" className="input input-bordered" required />
                </div>
                
                
              </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Add Blog" className="btn btn-primary" />
                </div>
            </form>

        </div>
    );
};

export default AddBlog;