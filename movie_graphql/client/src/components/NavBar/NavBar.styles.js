import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
    border-bottom: 3px solid red;
  }
  li {
    float: left;
    padding: 14px;
  }

  li a {
    display: block;
    /* text-align: center; */
    text-decoration: none;
    text-transform: uppercase;
    color: red;

    /* background-color: red; */
  }
  button {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
