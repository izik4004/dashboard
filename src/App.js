import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>

      <Dashboard />
    </Div>
  );
}

const Div = styled.div``;
