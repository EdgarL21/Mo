import styled from "styled-components";

export const Div = styled.div`
  background-color: black;
  color: white;
  font-size: 1.5rem;

  .backdrop {
    width: 100%;
    height: 800px;
    position: absolute;
    background-repeat: no-repeat;
  }

  .container {
    position: relative;
    background-color: #00000090;
    padding: 5rem;
  }
`;
