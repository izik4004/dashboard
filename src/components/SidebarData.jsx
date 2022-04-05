import React from 'react'
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
// import * as FiIcons from "react-icons/fi";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <MdIcons.MdSpaceDashboard />,
        cname: 'nav-text'
    },
    {
        title: 'Home',
        path: '/home',
        icon: <RiIcons.RiDashboard2Fill />,
        cname: 'nav-text'
    },
    {
        title: 'Payment Details',
        path: '/payment-details',
        icon: <FaIcons.FaAddressCard />,
        cname: 'nav-text'
    },
    {
        title: 'Learning Center',
        path: '/learning-center',
        icon: <GiIcons.GiTwirlCenter />,
        cname: 'nav-text'
    },
    {
        title: 'FAQs',
        path: '/faq',
        icon: <BsIcons.BsFillChatTextFill />,
        cname: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IoIcons.IoSettings />,
        cname: 'nav-text'
    },
    // {
    //     title: 'Logout',
    //     path: '/',
    //     icon: <FiIcons.FiLogOut />,
    //     cname: 'nav-text'
    // },
]