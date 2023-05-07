/*eslint-disable*/

import "./App.css";
import { useState } from "react";

function App() {
  let title = "ReactBlog";
  //인덱싱
  let [글제목, set글제목] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
let[modal,setModal]=useState(false);//ui의 상태 넣어놓음->특정 상황에 setModal로 변경
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>{title}</h4>
      </div>

      <div className="list">
        <h4 onClick={()=>{setModal(true)}}>
          {글제목[0]}
        </h4>
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

      <button onClick={()=>{
        let copy=[...글제목]; 
        copy[0]='여자코트추천';
        set글제목(copy);
        }}>글수정</button>

       { 
        modal ? <Modal></Modal> :<div></div>
       }
    </div>
  );
}

function Modal(){
return(
  <div className="modal">
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세 내용</p>
  </div>
  )
}

export default App;
