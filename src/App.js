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
      <a
        className="animated_icon_google"
        href="https://www.google.com/search?q=hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google" />
      </a>
      <a
        className="animated_icon_twitter"
        href="https://twitter.com/search?q=hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        className="animated_icon_reddit"
        href="https://www.reddit.com/search/?q=hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-reddit" />
      </a>
      <a
        className="animated_icon_facebook"
        href="https://www.facebook.com/search/top?q=hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook" />
      </a>
      <a
        className="animated_icon_linkedin"
        href="https://www.linkedin.com/search/results/content/?keywords=hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
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
