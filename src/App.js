// warning massage 무시 ---> Lint 끄는 기능
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  // 재 랜더링이 자동으로 되기 때문에 useState를 사용한다. 
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이선독학']);

  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);
  let [입력값, 입력값변경] = useState(' ');
  let [날짜, set날짜] = useState(['2월 17일 발행', '2월 17일 발행', '2월 17일 발행'])
  let day = new Date().toLocaleDateString("en-us");

  [1, 2, 3].map(function (a) {
    return '12314123'
  })

  return (

    <div className="App">

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={() => {  
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>
          {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 >{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              {/* 이벤트 버블링(상위 html에서 이벤트를 받아오는 것) 막는 법 : e.stopPropagation(); */}
              <h4 onClick={(e) => { e.stopPropagation(); setModal(true); settitle(i); }}>
                {글제목[i]} <span onClick={() => { 따봉변경(따봉 + 1) }} >
                  👍</span> {따봉} </h4>
              <p>{날짜[i]}</p>
              {/* 삭제가 가능한 기능 copy.splice(1,1); => 1번째 글이 1개 삭제됨. */}
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice([i], 1);
                글제목변경(copy);
              }}> 삭제 </button>



            </div>
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />
      {/* 내용을 저장하는 방법 -> copy.unshift(저장소명); */}
      <button onClick={() => {
        // if else를 이용해 공백값 입력 막기
        if (입력값 === " ") { }
        else {
          let copy = [...글제목];
          let copy1 = [...날짜];
          copy.unshift(입력값);
          copy1.unshift(day);
          글제목변경(copy);
          set날짜(copy1);
        }
      }}>글발행</button>

      {
        // 삼항연산자 : 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 
        modal == true ? <Modal 글제목={글제목} title={title} /> : null
      }


    </div>
  );
}


function Modal(props) {
  return (
    // style을 특정 부분에만 넣고싶을때는 props.color 이런식으로 넣어서 사용할 수 있다.
    // color="orange" 를 Modal 뒷부분에 넣으면 사용 가능
    // <div className="modal" style={{background : props.color}}>
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>

  )
}

// class를 이용한 옛날 React 문법
/* 
class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
      // 결과 : 안녕 20
    )
  }
}
*/


// 동적인 ui 만들기 3step
// 1. html css로 미리 디자인
// 2. 현재 ui상태를 state에 저장해 둠
// 3. state에 따라 ui가 어떻게 보일지 작성

export default App;
