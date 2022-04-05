import React from 'react';
import styled from 'styled-components';
import {cardStyles} from "./ReusableStyles";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {IoStatsChart} from "react-icons/io5";
import {BiGroup} from "react-icons/bi";
import {FiActivity} from "react-icons/fi";

export default function Analytics() {
  return (
    <Section>
       <div className="analytic">
            <div className="content">
                <h5>Spent this month</h5>
                <h2>$682.5</h2>
            </div>
            <div className="logo">
                <BsFillCalendar2WeekFill />
            </div>
       </div>
       <div className="analytic">
       <div className="logo">
            <IoStatsChart />
        </div>
           <div className="content">
           <h5>Earnings</h5>
             <h2>$350.40</h2>
           </div>
       </div>
       <div className="analytic">
           <div className="content">
           <h5>New Clients</h5>
             <h2>321</h2>
           </div>
           <div className="logo">
               <BiGroup />
           </div>
       </div>
       <div className="analytic">
           <div className="content">
           <h5>Activity</h5>
             <h2>$550</h2>
           </div>
           <div className="logo">
               <FiActivity />
           </div>
       </div>
    </Section>
  )
}

const Section = styled.section`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    .analytic {
        ${cardStyles};
        padding: 1rem;
        display:flex;
        justify-content: space-evenly;
        gap:1rem;
        transition:0.5s ease-in-out;
        &:hover {
            background-color: #ffc107;
            color:black;
            svg {
                color: white;
            }
        }
        .logo {
            border-radius: 3rem;
            background-color: black;
            align-items:center;
            display:flex;
            justify-content: center;
            padding:1.5rem;
        }
    }
`;