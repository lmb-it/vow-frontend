import { IMenuItem } from "@lmb-it/kitsconcerto";
import { Login } from "Modules";
import Error404 from "../Errors/error404";

const noneAuthRoutes: IMenuItem[] = [
    {
        id: "login-page",
        title: 'Login',
        path: '',
        element: <Login />,
    },
    {
        title: 'Not Found',
        path: '*',
        hide: true,
        element: <Error404 />,
    },
];

export default noneAuthRoutes;