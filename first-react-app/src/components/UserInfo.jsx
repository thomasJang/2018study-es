import React from "react";
import styled from "styled-components";

const User = styled.div`
  font-size: 20px;
`;

class UserInfo extends React.Component {
  static defaultProps = {
    name: "기본이름"
  };
  render() {
    const { name } = this.props;
    return <User>안녕하세요 제 이름은 {name} 입니다.</User>;
  }
}

// 또는
UserInfo.defaultProps = {
  name: "기본이름"
};

export default UserInfo;
