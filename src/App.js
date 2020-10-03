import React from "react";
import styled from "styled-components";

const IconToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;

  a {
    color: #333;
  }

  i {
    font-size: 20px;
  }
`;

function IconToolbar() {
  return (
    <IconToolbarWrapper>
      <i className="fab fa-google" />
      <a
        href="https://twitter.com/search-advanced"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
      <i className="fab fa-reddit" />
      <i className="fab fa-facebook" />
      <i className="fab fa-linkedin" />
    </IconToolbarWrapper>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Mentionaire</h1>
      <IconToolbar />
    </div>
  );
}

export default App;
