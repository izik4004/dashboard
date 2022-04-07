import React from 'react';
import styled from "styled-components";
import {AreaChart, Area, Tooltip, ResponsiveContainer} from 'recharts';
import { cardStyles } from './ReusableStyles';

const data = [
  {
    data:4500
  },
  {
    data:5000
  },
  {
    data:4700
  },
  {
    data:4400
  },
  {
    data:4800
  },
  {
    data:5300
  },
  {
    data:5800
  },
  {
    data:5800
  },
  {
    data:6000
  },
  {
    data:6300
  },
  {
    data:7000
  },
]
export default function Earnings() {
  return (
    <Section>
        <div className="top">
          <div className="info">
            <h4>This months earnings</h4>
            <h1>$683.5</h1>
            <div className="growth">
              <span>+2.45%</span>
            </div>
          </div>
        </div>
        <div className="chart">
          <ResponsiveContainer height="100%" width="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{top:0, left:0, right:0, bottom:0}}
              >
                <Tooltip
                  cursor={false}/>
                  <Area
                    animationBegin={800}
                    animationDuration={2000}
                    type="monotone"
                    dataKey="data"
                    stroke="black"
                    fill="#80683233e"></Area>
              </AreaChart>
          </ResponsiveContainer>
        </div>
    </Section>
  )
}

const Section = styled.section`

`;