import React from 'react';
import styled from 'styled-components';
import {cardStyles} from "./ReusableStyles";
import {BsFillCalendar2weekFill} from "react-icons/bs";
import {IoStatsChart} from "react-icons/io5";
import {BiGroup} from "react-icons/bi";
import {FiActivity} from "react-icons/fi";

export default function Analytics() {
  return (
    <Section>
       <div className="analytic">
           <h5>Spent this month</h5>
           <h2>$682.5</h2>
       </div>
    </Section>
  )
}

const Section = styled.section`

`;