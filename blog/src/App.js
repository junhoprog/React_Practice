import "./App.css";
import { useState } from "react";

function App() {
  let title = "ReactBlog";
  let [글제목, set글제목] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);

let[따봉,set따봉]=useState([0,0,0]);
let[Title,setTitle]=useState(0);
let [입력값,입력값변경]=useState('');
let[modal,setModal]=useState(false);
 [1,2,3].map(function(a){
  return '123314'
 })
 
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "16px" }}>{title}</h4>
      </div>

      {
        글제목.map(function(a,i){
          return (
            <div className="list">
            <h4 onClick={()=>{setModal(!modal); setTitle(i)}}>
              {a}
            </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
        let copy=[...글제목];
        copy.splice(i,1);
        set글제목(copy)
       }}>글 삭제</button>
          </div>
          )
        })
      }
      

<input onChange={(e)=>{입력값변경(e.target.value)}}></input>

<button onClick={()=>{
        let copy=[...글제목];
        copy.unshift(입력값);
        set글제목(copy);
      }}>글 추가</button>

       { 
        modal ? <Modal i={0} Title={Title} 글제목={글제목}></Modal> :null
       }
    </div>
  );
      }

function Modal(props){
return(
  <div className="modal">
  <h4>{props.글제목[props.Title]}</h4>
  <p>날짜</p>
  <p>상세 내용</p>
  <button>글수정</button>
  </div>
  )
}

export default App;
