import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  
  // 재 랜더링이 자동으로 되기 때문에 useState를 사용한다. 
  let [글제목, b] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
