import React from 'react'
import {BiSearch} from "react-icons/bi";
import styled from 'styled-components'

export default function Navbar() {
  return (
    <Nav>
        <div className="title">
            <h4>Hi, Izik</h4>
            <h1>Welcome to <span> BARBER'S SHOP</span></h1>
        </div>
        <div className="search">
            <BiSearch />
            <input type="text" placeholder="Search"/>
        </div>
    </Nav>
  )
}

const Nav = styled.nav`
display:flex;
justify-content: space-between;
color:black;
.title {
    h1 {
        span {
            margin-left: 0.5rem;
            color: #ffc107;
            letter-spacing: 0.2rem;
            font-family: 'Permanent Marker', cursive; 
        }
    }
}
.search {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border: 1px solid #E5E5E5;
    border-radius:10px;
    svg {
        color: #000000;
    }
    input {
        background-color: transparent;
        border: none;
        color:#00000;
        font-family: 'Permanent Marker', cursive; 
        letter-spacing: 0.3rem;
        &::placeholder {
            color: #000000;
        }
        &:focus {
            outline:none
        }
    }
}
`;