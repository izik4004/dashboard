import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import {FiLogOut} from "react-icons/fi";
// import {GiHamburgerMenu} from "react-icons/gi";
// import {VscChromeClose} from "react-icons/vsc"



export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
        <Section>
            <div className="top">
                <div className="brand">
                    <h1>BARBER'S SHOP</h1>
                    <span></span>
                </div>
                <div className="toggle"></div>
                <div className= {showSidebar ? 'nav-menu active' : 'nav-menu'}>
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
                    </ul>
                </div>
            </div>
            <div className="logout">
            <Link to="/logout">
                    <FiLogOut />
                    <span>Logout</span>
           </Link>
            </div>
        </Section>
    </>
  )
}

const Section = styled.section`
position:fixed;
left: 0;
background-color:white;
height: 100vh;
width:18vw;
border-right:1px solid #E5E5E5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 2rem 0;
gap: 2rem;
color:black;
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
        ${'' /* gap: 2rem; */}
        
    
    span {
        font-size: 2rem;
        font-family: 'Permanent Marker', cursive; 
        color: #ffc107; 
    }
    }

    .nav-menu {
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
                    color: #000000;
                }
            }
            .nav-menu.active {
                background-color: #E7332B
                color:white;
                transition: 350ms;
                a {
                    
                }
            }
        }
    }
    .logout {
        padding: 0.3rem 1rem;
        border-radius: 0.6rem;
        &:hover {
            background-color: #da0037;
        }
        a {
            text-decoration:none;
            display:flex;
            align-items: center;
            justify-content: flex-start;
            color: white;
        }
    }
}
`;