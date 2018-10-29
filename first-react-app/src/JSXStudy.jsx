import React from "react";

class JSXStudy extends React.Component {
  render() {
    const myName = "Thomas";
    return <div>My name is "{myName}"</div>;
  }
}

// const OddComp = () => {
//   return <div style={{ background: "red" }}>홀수</div>;
// };
// const EvenComp = () => {
//   return <div style={{ background: "blue" }}>짝수</div>;
// };

// class JSXStudy extends React.Component {
//   state = {
//     count: 0
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div onClick={() => {  this.setState({ count: count + 1 }); }}>
//         {count % 2 === 0 ? <EvenComp /> : <OddComp />}
//       </div>
//     );
//   }
// }

// class JSXStudy extends React.Component {
//   render() {
//     return (
//       <div>
//         <span className="myClass">className</span>
//         <span className={`myClass ${true ? "yourClass" : ""}`}>className</span>
//         <span
//           style={{
//             fontSize: "15px"
//           }}
//         >
//           style
//         </span>
//       </div>
//     );
//   }
// }

// import styled from "styled-components";

// const Header = styled.div`
//   font-size: 15px;
// `;
// const StrongHeader = styled(Header)`
//   font-size: 50px;
//   font-weight: bold;
// `;

// class JSXStudy extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header>style</Header>
//         <StrongHeader>styled</StrongHeader>
//       </div>
//     );
//   }
// }

export default JSXStudy;
