import React from "react";
import { Container } from "react-bootstrap";
import { Sidebar } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <div className="app__container">
          <Sidebar />
          <Container fluid className="app__main">
            {/* {} */}
          </Container>
    </div>
  );
};
