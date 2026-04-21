import React from "react";
import {
    LayoutDashboard,
    Languages,
    Cross,
    FolderTree,
    Church,
    Network,
    Hash,
    Landmark,
    CalendarClock,
    Image,
    Users,
    Link as LinkIcon,
} from "lucide-react";
import { IMenuItem } from "@lmb-it/kitsconcerto-web";
import AdminDashboard from '../Pages/Home';
import { LanguagesListing, SaintsListing, SaintForm, SaintsCategoriesPage, DenominationsListing, DenominationForm } from 'Modules';
import { CategoriesListing, CategoryForm, HashtagsPage } from 'Modules';
import {
    ChurchesListing,
    ChurchForm,
    ChurchServicesListing,
    ChurchServiceForm,
    ChurchPhotosListing,
    ChurchPhotoForm,
    ClergyListing,
    ClergyForm,
    ChurchResourcesListing,
    ChurchResourceForm,
} from 'Modules';

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
    {
        id: "saints",
        title: "Saints",
        path: "saints",
        element: <SaintsListing />,
        icon: <Cross />,
        collapsable: false,
        links: [
            {
                id: "saints-new",
                title: "New Saint",
                path: "saints/new",
                element: <SaintForm />,
                hide: true,
            },
            {
                id: "saints-edit",
                title: "Edit Saint",
                path: "saints/:ref/edit",
                element: <SaintForm />,
                hide: true,
            },
        ],
    },
    {
        id: "denominations",
        title: "Denominations",
        path: "denominations",
        element: <DenominationsListing />,
        icon: <Church />,
        collapsable: false,
        links: [
            {
                id: "denominations-new",
                title: "New Denomination",
                path: "denominations/new",
                element: <DenominationForm />,
                hide: true,
            },
            {
                id: "denominations-edit",
                title: "Edit Denomination",
                path: "denominations/:ref/edit",
                element: <DenominationForm />,
                hide: true,
            },
        ],
    },
    {
        id: "saints-categories",
        title: "Saints Categories",
        path: "saints-categories",
        element: <SaintsCategoriesPage />,
        icon: <FolderTree />,
        collapsable: false,
    },
    {
        id: "categories",
        title: "Categories",
        path: "categories",
        element: <CategoriesListing />,
        icon: <Network />,
        collapsable: false,
        links: [
            {
                id: "categories-new",
                title: "New Category",
                path: "categories/new",
                element: <CategoryForm />,
                hide: true,
            },
            {
                id: "categories-edit",
                title: "Edit Category",
                path: "categories/:ref/edit",
                element: <CategoryForm />,
                hide: true,
            },
        ],
    },
    {
        id: "hashtags",
        title: "Hashtags",
        path: "hashtags",
        element: <HashtagsPage />,
        icon: <Hash />,
        collapsable: false,
    },
    {
        id: "churches",
        title: "Churches",
        path: "churches",
        element: <ChurchesListing />,
        icon: <Landmark />,
        collapsable: false,
        links: [
            { id: "churches-new", title: "New Church", path: "churches/new", element: <ChurchForm />, hide: true },
            { id: "churches-edit", title: "Edit Church", path: "churches/:ref/edit", element: <ChurchForm />, hide: true },
        ],
    },
    {
        id: "church-services",
        title: "Church Services",
        path: "church-services",
        element: <ChurchServicesListing />,
        icon: <CalendarClock />,
        collapsable: false,
        links: [
            { id: "church-services-new", title: "New Church Service", path: "church-services/new", element: <ChurchServiceForm />, hide: true },
            { id: "church-services-edit", title: "Edit Church Service", path: "church-services/:ref/edit", element: <ChurchServiceForm />, hide: true },
        ],
    },
    {
        id: "church-photos",
        title: "Church Photos",
        path: "church-photos",
        element: <ChurchPhotosListing />,
        icon: <Image />,
        collapsable: false,
        links: [
            { id: "church-photos-new", title: "New Church Photo", path: "church-photos/new", element: <ChurchPhotoForm />, hide: true },
            { id: "church-photos-edit", title: "Edit Church Photo", path: "church-photos/:ref/edit", element: <ChurchPhotoForm />, hide: true },
        ],
    },
    {
        id: "clergy",
        title: "Clergy",
        path: "clergy",
        element: <ClergyListing />,
        icon: <Users />,
        collapsable: false,
        links: [
            { id: "clergy-new", title: "New Clergy", path: "clergy/new", element: <ClergyForm />, hide: true },
            { id: "clergy-edit", title: "Edit Clergy", path: "clergy/:ref/edit", element: <ClergyForm />, hide: true },
        ],
    },
    {
        id: "church-resources",
        title: "Church Resources",
        path: "church-resources",
        element: <ChurchResourcesListing />,
        icon: <LinkIcon />,
        collapsable: false,
        links: [
            { id: "church-resources-new", title: "New Church Resource", path: "church-resources/new", element: <ChurchResourceForm />, hide: true },
            { id: "church-resources-edit", title: "Edit Church Resource", path: "church-resources/:ref/edit", element: <ChurchResourceForm />, hide: true },
        ],
    },
];

export default authedRoutes;
