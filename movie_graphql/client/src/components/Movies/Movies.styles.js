import styled from "styled-components";

export const Div = styled.div`
  background-color: black;
  color: red;

  body {
    margin: 0;
    position: absolute;
  }

  .contain {
    position: relative;
    /* text-align: center; */
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    /* visibility: hidden; */
    position: absolute;
    z-index: 2;
    color: red;
  }

  .title:hover {
    visibility: visible;
    z-index: 2;
    color: blue;
  }

  .img {
    z-index: 1;
  }
  /* .container {
    margin: 10px;
  } */
`;
