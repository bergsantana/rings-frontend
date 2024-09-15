import { createHashRouter } from "react-router-dom";
import App from "../App"; 
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Carousel from "../views/carousel/Carousel";
import Home from "../views/home/Home";


const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'products/:id',
                element: <Register />
            },
            {
                path: '/cart',
                element: <Carousel />
            },
            {
                path: '/register',
                element: <Register />
            }
   
        ]
    }
])


export default router