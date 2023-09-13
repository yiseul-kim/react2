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

  return (

      // 숙제 버튼 누르면 글제목 가나다순 정렬 기능 만들기
    
    <div className="App">

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy); 
      }}>글수정</button>

      <div className="list">

        <h4>
          {글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>
          {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

    </div>
  );
}

export default App;
