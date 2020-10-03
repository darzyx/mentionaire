import React, { useState } from "react";
import styled, { css } from "styled-components";

function Loading() {
  return <i className="fas fa-spinner loading" />;
}

const IconToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;

  a {
    background-color: white;
    border-radius: 50%;
    height: 22px;
    width: 22px;
    transform: scale(1);

    ${({ searchString }) =>
      searchString.length < 1 &&
      css`
        pointer-events: none;
        cursor: default;
        animation: none;
      `}
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    max-width: 500px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 18px;
    outline: none;
  }
`;

function IconToolbar({ searchString }) {
  return (
    <IconToolbarWrapper searchString={searchString}>
      <a
        className="animated_icon_google"
        href={`https://www.google.com/search?q=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google" />
      </a>
      <a
        className="animated_icon_youtube"
        href={`https://www.youtube.com/results?search_query=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        className="animated_icon_twitter"
        href={`https://twitter.com/search?q=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        className="animated_icon_wikipedia"
        href={`https://en.wikipedia.org/w/index.php?search=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-wikipedia-w" />
      </a>
      <a
        className="animated_icon_reddit"
        href={`https://www.reddit.com/search/?q=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-reddit" />
      </a>
      <a
        className="animated_icon_medium"
        href={`https://medium.com/search?q=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium-m" />
      </a>
      <a
        className="animated_icon_facebook"
        href={`https://www.facebook.com/search/top?q=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook" />
      </a>
      <a
        className="animated_icon_github"
        href={`https://github.com/search?q=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a
        className="animated_icon_yahoo"
        href={`https://search.yahoo.com/search?p=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-yahoo" />
      </a>
      <a
        className="animated_icon_linkedin"
        href={`https://www.linkedin.com/search/results/content/?keywords=${searchString}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
    </IconToolbarWrapper>
  );
}

function App() {
  const [searchString, setSearchString] = useState("");
  const isReady = true;

  return (
    <div id="app">
      <header id="header">
        {isReady ? (
          <>
            <h1>Mentionaire</h1>
            <Form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                id="search"
                name="search"
                autoFocus
                placeholder="Search..."
                value={searchString}
                onChange={(e) => setSearchString(e.currentTarget.value)}
              />
            </Form>
            <br />
            <IconToolbar searchString={searchString} />
          </>
        ) : (
          <Loading />
        )}
      </header>
    </div>
  );
}

export default App;
