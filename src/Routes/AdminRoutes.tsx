import React from "react";
import { LayoutDashboard, Languages } from "lucide-react";
import { IMenuItem } from "@lmb-it/kitsconcerto-web";
import AdminDashboard from '../Pages/Home';
import { LanguagesListing } from 'Modules';

const authedRoutes: IMenuItem<string>[] = [
    {
        id: "dashboard",
        title: "Dashboard",
        path: "",
        element: <AdminDashboard />,
        icon: <LayoutDashboard />,
        collapsable: false,
    },
    {
        id: "languages",
        title: "Languages",
        path: "languages",
        element: <LanguagesListing />,
        icon: <Languages />,
        collapsable: false,
    },
];

export default authedRoutes;