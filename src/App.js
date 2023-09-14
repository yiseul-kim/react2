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
              <h4 onClick={ () => { setModal(true); settitle(i) }}>
                {글제목[i]} <span onClick={() => { 따봉변경(따봉+1) }} >
                  👍</span> {따봉} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }


      {
        // 삼항연산자 : 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 
        modal == true ? <Modal 글제목작명={글제목} title={title} /> : null
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
      <h4>{ props.글제목작명[props.title ]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>

    </div>
  )
}


// 동적인 ui 만들기 3step
// 1. html css로 미리 디자인
// 2. 현재 ui상태를 state에 저장해 둠
// 3. state에 따라 ui가 어떻게 보일지 작성

export default App;
