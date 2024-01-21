import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateBlog = () => {


    const blogs = useLoaderData

    const {image, title, category, shortDescription, longDescription } =blogs

    const handleUpdateBlog = e => {
        e.preventDefault()
        const form = e.target
        const updatedImage = form.image.value
        const updatedTitle = form.title.value
        const updatedCategory = form.category.value
        const updatedShortDescription = form.shortDescription.value
        const updatedLongDescription = form.longDescription.value

        const updatedBlog = { updatedImage, updatedTitle, updatedCategory, updatedShortDescription, updatedLongDescription }

        console.log(updatedBlog)

        // sending newProduct to server

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Blog Updated",
                        showConfirmButton: false,
                        timer: 1000
                    });
                }

            })

    }
    return (
        <div>

            <form className="card-body" onSubmit={handleUpdateBlog}>
                <div className=" grid grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input defaultValue={title} type="text" placeholder="title" name="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input defaultValue={image} type="text" placeholder="image" name="image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input defaultValue={category} type="text" placeholder="category" name="category" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input defaultValue={shortDescription} type="text" placeholder="Short Description" name="shortDescription" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Long Description</span>
                        </label>
                        <input defaultValue={longDescription} type="text" placeholder="Long Description" name="longDescription" className="input input-bordered" required />
                    </div>


                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Update Blog" className="btn btn-primary" />
                </div>
            </form>

        </div>
    );
};

export default UpdateBlog;