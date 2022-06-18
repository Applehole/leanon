import React, { useState } from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

const BodyContainer = styled.div`
  grid-area: BodyContainer;
  margin : 20px;

  .todoListUl{
    display:grid;
    width: 80%;
    text-align : center;
    grid-template-columns: repeat(7, 1fr);
    margin: 5px;
    overflow-x: auto;

    .ListNumber{
        grid-column: 1/2;
        text-align : center;
    }
    .ListText{
        grid-column: 2/6;
    }
    .ListDelete{
        grid-column: 6/7;
        text-align : center;
    }
    .ListChange{
      grid-column: 7/8;
      text-align : center;
  }
  }
`;

function Body() {

  const Array = useSelector((state) => state)
  const dispatch = useDispatch(); //전역변수의 메소드를 사용하기 위해서 
  const [render, setRender] = useState(0) // eslint-disable-line no-unused-vars 
  const onClickDelete = (e) => { // 위의 변수는 렌더링하기 위한 변수라서 쓰지 않으려고 한다.
    const DeleteId = e.target.parentElement.id // 현재 부모요소에 지워야할 값이 들어있기 때문에 부모의 id로 들어간다.
    dispatch({ type: "Delete", id: DeleteId }) // 찾은 값을 없애준다.
  }
  const onClickChange = (e) => { // 클릭 이벤트로 보내지면
    const ChangeId = e.target.parentElement.id // 변경해야 하는 값을 찾아서
    dispatch({ type: "ChangeState", id: ChangeId }) // 변경하는 값의 toggle을 찾아서 바꿔준다.
    setRender((currnet) => currnet + 1) // 렌더링 도와주기
  }
  const onClickCancle = (e) => {
    const CancleId = e.target.parentElement.id
    dispatch({ type: "ChangeCancle", id: CancleId }) // 취소하면 아무것도 바뀌지 않고 토글만 다시 원래대로 바꿔준다.
    setRender((currnet) => currnet + 1)
  }
  const onClickChangeDone = (e) =>{
    const ChangeDoneId = e.target.parentElement.id
    const ChangeDoneText = e.target.parentElement.children[1].value
    dispatch({ type: "ChangeText", id: ChangeDoneId, text: ChangeDoneText }) // 바뀐 값과 바뀐 값의 id를 찾아서 바꿔준다.
    setRender((currnet) => currnet + 1)
  }


  return (
    <BodyContainer>
      <div>
        {Array.map((el, idx) =>
          <ul className='todoListUl' id={el.id} key={el.id}>
            <div className='ListNumber'>{Array.length - idx}</div>
            {el.toggle ? (
              <>
                <input className='ListText' placeholder={el.text}></input>
                <button className='ListDelete' onClick={onClickCancle}>취소</button>
                <button className='ListChange' onClick={onClickChangeDone}>완료</button>
              </>
            ) : (
              <>
                <div className='ListText'>{el.text}</div>
                <button className='ListDelete' onClick={onClickDelete}>삭제</button>
                <button className='ListChange' onClick={onClickChange}>수정</button>
              </>
            )}
          </ul>)}
      </div>
    </BodyContainer>
  );
}

export default Body;
