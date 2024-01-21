import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"
import AddBlog from "../Pages/AddBlog/AddBlog";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import WishList from "../Pages/WishList/WishList";
import UpdateBlog from "../Pages/Update Blog/Update Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addBlog',
          element:<AddBlog></AddBlog>
        },
        {
          path:'/updateBlog/:id',
          element:<UpdateBlog></UpdateBlog>,
          loader:({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
        },
        {
          path:'/wishList',
          element:<WishList></WishList>,
          
        },
        // {
        //   path:'/wishList/:id',
        //   element:<WishList></WishList>,
        //   loader: ({params}) => fetch(`http://localhost:5000/wishList/${params.id}`)
         
        // },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
          loader:() => fetch('http://localhost:5000/blogs')
        },
        {
          path:'/blogs/:id',
          element:<BlogDetails></BlogDetails>,
          loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },
       
      ]
    },
  ]);


  export default router