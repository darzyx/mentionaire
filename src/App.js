import React from "react";
import styled from "styled-components";

const IconToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;

  i {
    font-size: 20px;
    cursor: pointer;
  }
`;

function App() {
  return (
    <div className="app">
      <h1>Mentionaire</h1>
      <IconToolbar>
        <i className="fab fa-google" />
        <i className="fab fa-twitter" />
        <i className="fab fa-reddit" />
        <i className="fab fa-facebook" />
        <i className="fab fa-linkedin" />
      </IconToolbar>
    </div>
  );
}

export default App;
