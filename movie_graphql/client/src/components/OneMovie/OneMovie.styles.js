import styled from "styled-components";

export const Div = styled.div`
  /* 
  */
  background-color: black;
  color: white;
  font-size: 1.5resm;

  .backdrop {
    width: 100%;
    height: 800px;
    position: absolute;
    z-index: 1;
    /* 
    background-repeat: no-repeat;
    */
  }

  .container {
    position: relative;
    background-color: #00000090;
    padding: 5rem;
    z-index: 2;
    /* 
    */
  }
`;
