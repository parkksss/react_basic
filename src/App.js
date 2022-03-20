import React from 'react';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './BucketList';
import "./style.css";
import styled from "styled-components";

class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log(this.state);

      return (
      <div className="App">
        <MyStyled>
          <p>im here!!!</p>
        </MyStyled>
        {/* <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className="line"/>
          <BucketList list={this.state.list}/>
        </div> */}
      </div>
    );
  }
}


const MyStyled = styled.div`
  width: 50vw;
  height: 150px;
  background-color: ${(props) => (props.bg_color ? "red" : "purple")};
  p {
    color: blue;
  }
  &:hover{
    background-color: yellow;
  }
`;

export default App;