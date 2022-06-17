import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

const BodyContainer = styled.div`
  grid-area: BodyContainer;
  margin : 20px;

  .todoListUl{
    display:grid;
    width: 80%;
    text-align : center;
    grid-template-columns: repeat(6, minmax(1fr, auto));
    margin: 5px;

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
  }
`;

function Body() {
    const Array = useSelector((state)=>state)
    const dispatch = useDispatch(); //전역변수의 메소드를 사용하기 위해서 
    const onClick =(e) =>{
        const DeleteId = e.target.parentElement.id
        dispatch({type: "Delete", id: DeleteId})
    }

    return (
      <BodyContainer>
        <div>
          {Array.map((el, idx)=>
          <ul className='todoListUl' id={el.id} key={el.id}>
           <div className='ListNumber'>{Array.length-idx}</div>
           <div className='ListText'>{el.text}</div>
           <button className='ListDelete' onClick={onClick}>삭제</button>
          </ul>)}
        </div>
      </BodyContainer>
    );
  }
  
  export default Body;
  