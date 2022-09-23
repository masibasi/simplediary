import React, { useState, useRef } from "react";

export const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({ author: "", content: "", emotion: 1 });
  //  여러 state를 한 state 변수에 묶어서 사용이 가능하다
  const stateChangeHandler = (e) => {
    // 그럴때 state 관리법은 전개연산자를 통하여 먼저 변수 초기화 후 대상변수 초기화
    setState({ ...state, [e.target.name]: e.target.value });
    // 괄호표기법으로 e.target.name : e.target.value로 특정해서 초기화가 가능하다
  };
  const submitHandler = () => {
    console.log(state);
    if (state.author.length < 1) {
      alert("작성자 이름은 최소 1글자 이상 입력해주세요");
      authorInput.current.focus();
      //authorIput.current : input tag를 불러온 것. useRef 를 통해 접근이 가능하다
      return;
    }
    if (state.content.length < 5) {
      alert("일기 내용은 최소 5글자 이상 입력해주세요");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공" + state);
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={stateChangeHandler}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={stateChangeHandler}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={stateChangeHandler}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};
