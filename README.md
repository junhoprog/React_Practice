1. 해당 폴더 terminal 열고 npx create-react-app 프로젝트이름
2. npm start 미리보기



```공부한 내용 정리```



1. let 변수=?;

{변수} 안에 변수 넣을 수 있음

2. style

<h4 style={{color:”white”,fontSize:”16px”}} //style사용시 중괄호 두 번 써야 한다.

3. useState()

let [a,b]=useState(”보관할 자료”)

{a}사용시 보관할 자료형을 얻을 수 있다. 이후에 어떤 상황에서 자료를 바꾸고자 할 때 b로 바꿈.

destructuring

let [a,b]=[1,2];

위에서는 [”보관할 자료”,함수]

- 변동시 자동으로 html에 반영되게 하고 싶을 때 state사용

useState사용시

```
let [글제목1, b] = useState("남자 코트 추천");
  let [글제목2, b2] = useState("강남우동맛집");
  let [글제목3, b3] = useState("파이썬독학");
//인덱싱
  let[글제목,set글제목]=useState(["남자코트추천","강남우동맛집","파이썬독학"])
```

state변경함수는 state를 갈아치워주는것

기존 state랑 신규 state랑 비교해서 같으면 변경x

4. onClick={}

 onClick={함수()} 함수만 들어갈 수 있음.

()=>{}으로 {}함수 내용 넣어도 됨.

```jsx
<button onClick={()=>{
        let copy=[...글제목]; 
        copy[0]='여자코트추천';
        set글제목(copy);
        }}>글수정</button>
```

원본을 훼손하면 안되기때문에 복사본을 만드는데 이때 원본에 있는 것을 가져오기위해서는 […원본]형식으로 가져와야함.(화살표를 바꾸는것임)→독립적

let arr=[1,2,3];

let copy=글제목;은 화살표를 저장하는것임.

[1,2,3]을 미지의 공간에 갖다 놓고

arr에 저 공간을 가리키는 화살표가 저장되어있음.

[1,2,3]은 수정될 수 있어도 화살표는 수정될 수 없음

5.컴포넌트

컴포넌트 만들기

    1. funtion만들기
    2. return()안에 html담기
    3. <함수명></함수명/쓰기

<Modal></Modal>

```jsx
function Modal(){
return(
  <div className="modal">
  <h4>제목</h4>
  <p>날짜</p>
  <p>상세 내용</p>
  </div>
  )
}
```

return 안에 표현하고자 하는 문장 넣으면 됨.

return()안에 병렬 기입하려면?

<div>한번 더 감싸기→<> ~</>

언제 써야 할지?

    1. 반복적으로 출현하는 html축약
    2. 큰 페이지들
    3. 자주 변경되는 것들

6. 동적인 UI만들기(모달,경고,설정 등)

    1. html,css로 미리 디자인 완성
    2. UI의 현재 상태를 state로 저장
    3. state에 따라 UI가 어떻게 보일지 작성

- 삼항연산자

{

if문 쓸 수 x→ 삼항 연산자로 대체

조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드

}