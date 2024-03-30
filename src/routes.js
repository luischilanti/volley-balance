import { createHashRouter } from "react-router-dom"

import ErrorPage from "./pages/ErrorPage"
import Create from "./pages/Create"
import Rating from "./pages/Rating"
import Confirmation from "./pages/Confirmation"
import Home from "./pages/Home"
import Team from "./pages/Team"

export const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/create",
        element: <Create />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/rating",
        element: <Rating />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/team",
        element: <Team />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/confirmation",
        element: <Confirmation />,
        errorElement: <ErrorPage />,
    },
])
