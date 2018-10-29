import React from "react";
import styled from "styled-components";

const Component = styled.div`
  margin: 100px auto;
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
`;

class Counter extends React.Component {
  state = {
    active: false
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    console.log("constructor");

    // You should not call setState() in the constructor()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    // v16.3 이후 추가됨.
    // props 값을 state 로 동기화 하는 경우에 사용.
    // static 함수 이기 때문에 this 사용 안됨.
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴

    if (nextProps.active !== prevState.active) {
      return { active: nextProps.active };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // return false 하면 업데이트를 안함
    // return this.props.checked !== nextProps.checked
    return true;
  }

  render() {
    console.log("render", this.state.active);
    const { active } = this.state;
    return <Component>active: {"" + active}</Component>;
  }

  componentDidMount() {
    // render 후에 발동함.
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log("componentDidMount");

    // const age = 1;
    // this.setState({ age });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 생성될 때는 작동안함. 업데이트 시에만 작동.
    // snapshot 데이터를 componentDidUpdate에 전달 할 수 있습니다.
    // 16.3부터 추가된 기능
    console.log("getSnapshotBeforeUpdate");

    if (prevState.active !== this.state.active) {
      console.log("make snapshot");
      return {
        newActive: this.state.active
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    if (snapshot) {
      console.log(snapshot);
    }
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    this.setState({
      error: true
    });
  }
}

export default Counter;
