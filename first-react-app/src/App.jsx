import React from "react";
import styled from "styled-components";
import Calculator from "./components/calculator/Calculator";

const AppContainer = styled.div`
  text-align: center;
  padding: 100px 0;
`;

class App extends React.Component {
  state = {};

  render() {
    return (
      <AppContainer>
        <h1>계산기</h1>
        <Calculator />
      </AppContainer>
    );
  }
}

export default App;
