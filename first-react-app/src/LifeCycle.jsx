import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import ComponentLifeCycle from "./components/ComponentLifeCycle";

const Component = styled.div`
  margin: 100px auto;
  width: 400px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
`;

class LifeCycle extends React.Component {
  state = {
    remove: false,
    lifeCycleActive: false
  };

  handleActive = () => {
    console.info("handleActive ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    this.setState({
      lifeCycleActive: !this.state.lifeCycleActive
    });
  };

  render() {
    const { remove, lifeCycleActive } = this.state;
    return (
      <Component>
        {remove ? null : <ComponentLifeCycle active={lifeCycleActive} />}

        <Button onClick={this.handleActive}>lifeCycleActive</Button>
        <Button
          onClick={() => {
            this.setState({
              remove: !this.state.remove
            });
          }}
        >
          Toggle lifeCycle
        </Button>
      </Component>
    );
  }
}

export default LifeCycle;
