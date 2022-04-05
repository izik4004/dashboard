import React, {useState} from 'react'
import styled from 'styled-components'
import { Link }
import { SidebarData } from './SidebarData';

import {MdSpaceDashboard} from "react-icons/md";
import {RiDashboard2Fill} from "react-icons/ri";
import {FaAddressCard} from "react-icons/fa";
import {GiTwirlCenter} from "react-icons/gi";
import {BsFillChatTextFill} from "react-icons/bs";
import {IoSettings} from "react-icons/io5";
import {FiLogOut} from "react-icons/fi";
// import {GiHamburgerMenu} from "react-icons/gi";
// import {VscChromeClose} from "react-icons/vsc"



export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)

  return (
    <>
        <Section>
            <div className="top">
                <div className="brand">
                    <h1>BARBER'S SHOP</h1>
                    <span></span>
                </div>
                <div className="toggle"></div>
                <div className="links">
                    <ul>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cname}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        <li onClick={()=>setCurrentLink(1)} className={currentLink === 1 ? "active" : ""}>
                            {/* <a href="#"> */}
                                <MdSpaceDashboard />
                                <span>Dashboard</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="#"> */}
                                <RiDashboard2Fill />
                                <span>Riders</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="#"> */}
                                <FaAddressCard />
                                <span>Payment Details</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="#"> */}
                                <GiTwirlCenter />
                                <span>Learning Center</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="#"> */}
                                <BsFillChatTextFill />
                                <span>FAQs</span>
                            {/* </a> */}
                        </li>
                        <li>
                            {/* <a href="#"> */}
                                <IoSettings />
                                <span>Settings</span>
                            {/* </a> */}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="logout">
                {/* <a href="#"> */}
                    <FiLogOut />
                    <span>Logout</span>
                {/* </a>        */}
            </div>
        </Section>
    </>
  )
}

const Section = styled.section`
position:fixed;
left: 0;
background-color:#E5E5E5;
height: 100vh;
width:18vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 2rem 0;
gap: 2rem;
.top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .toggle {
        display:none;
    }
    .brand {
        width: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 2rem;
    
    span {
        font-size: 2rem;
        font-family: 'Permanent Marker', cursive; 
        color: #ffc107; 
    }
    }
    .links {
        display:flex;
        justify-content: center;
        ul {
            list-style-type:none;
            display:flex;
            flex-direction: column;
            gap:1rem;
            li {
                padding: 0.6rem 1rem;
                border-radius: 0.6rem;
                &:hover {
                    background-color: #ffc107;
                    cursor:pointer; 
                    a{
                        color:black;
                    }
                }
                a{
                    text-decoration: none;
                    display:flex;
                    gap:1rem;
                    color: white;
                }
            }
            .active {
                background-color: #E7332B
                color:white;
                ${'' /* a {
                    
                } */}
            }
        }
    }
}
`;