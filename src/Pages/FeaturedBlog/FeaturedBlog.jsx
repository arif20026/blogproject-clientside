import { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const FeaturedBlog = () => {
    const blogs = useLoaderData();

    const {user} =useContext(AuthContext)

    // Sort blogs based on the length of longDescription in descending order
    const sortedBlogs = blogs.sort((a, b) => b.longDescription.length - a.longDescription.length);

    // Select the top 10 blogs
    const top10Blogs = sortedBlogs.slice(0, 10);

    const columns = [
        {
            name: 'Serial',
            selector: (row) => row.serial,
        },
        {
            name: 'Title',
            selector: (row) => row.title,
        },
        {
            name: 'Blog Owner',
            selector: (row) => row.blogOwner,
        },
        {
            name: 'Profile Pic',
            selector: (row) => row.profilePic,
        },
    
    ];

    // Create data from top 10 blogs
    const data = top10Blogs.map((blog, index) => ({
        id: index + 1,
        serial: (index + 1).toString(),
        title: blog.title,
        blogOwner: blog.blogOwner,
        profilePic: <img src={blog.profilePicture} alt=""  className='w-10 h-10 rounded-full'/>
        
    }));

    return (
        <div >
            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default FeaturedBlog;
