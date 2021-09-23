import styled from "styled-components";
export const Div = styled.div`
  background-color: black;
  color: red;

  .backdrop {
    width: 100%;
    height: 800px;
    position: absolute;
    z-index: 1;
    /* 
    background-repeat: no-repeat;
    */
  }

  .poster {
    grid-area: poster;
  }
  .sec1 {
    grid-area: sec1;
  }
  .sec2 {
    grid-area: sec2;
  }
  .sec3 {
    grid-area: sec3;
  }
  .overview {
    grid-area: overview;
  }

  .grid-container {
    background-color: #00000090;
    height: 600px;
    display: grid;
    grid-template-columns: auto 25% 25% 25%;
    grid-template-areas:
      "poster   sec1     sec2     sec3"
      "poster   sec1     sec2     sec3"
      "overview overview sec2     sec3";
    grid-gap: 10px;
    padding: 3rem;
    position: relative;
    z-index: 2;
  }

  /* .grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
} */
`;
