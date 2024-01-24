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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeaturedBlog from "../Pages/FeaturedBlog/FeaturedBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          element:<PrivateRoute><AddBlog></AddBlog></PrivateRoute>
        },
        {
          path:'/updateBlog/:id',
          element:<UpdateBlog></UpdateBlog>,
          loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
          
        },
        {
          path:'/wishList',
          element:<PrivateRoute><WishList></WishList></PrivateRoute>,
          
        },
        {
          path:'/wishList/:id',
          element:<WishList></WishList>,
          loader: ({params}) => fetch(`http://localhost:5000/wishList/${params.id}`)
         
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>,
         
        },
        {
          path:'/blogs/:id',
          element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
        },

        {
          path:'/featuredBlog',
          element:<FeaturedBlog></FeaturedBlog>,
          loader:() => fetch('http://localhost:5000/blogs')
          
        },
       
      ]
    },
  ]);


  export default router