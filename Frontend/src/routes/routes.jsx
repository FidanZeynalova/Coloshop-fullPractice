import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import NotPage from "../pages/NotPage";
import Root from "../pages/Root";


export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
             path: "*",
             element: <NotPage />
            }
        ]
    }
]