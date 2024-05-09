
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path:'/about',
        element:<About />,
    },
    {
        path:'/contactus',
        element: <ContactUs />
    }
])

export default router
