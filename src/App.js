import React from "react";
import styled from "styled-components";

function Loading() {
  return <i className="fas fa-spinner loading" />;
}

const IconToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
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
        <i className="fab fa-twitter animated_icon_twitter" />
      </a>
      <i className="fab fa-reddit" />
      <i className="fab fa-facebook" />
      <i className="fab fa-linkedin" />
    </IconToolbarWrapper>
  );
}

function App() {
  const isReady = true;

  return (
    <div id="app">
      <header id="header">
        {isReady ? (
          <>
            <h1>Mentionaire</h1>
            <IconToolbar />
          </>
        ) : (
          <Loading />
        )}
      </header>
    </div>
  );
}

export default App;
