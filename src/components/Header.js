import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch } from 'react-redux';

const HeaderContainer = styled.div`
  grid-area: HeaderContainer;
  
  .title{
    text-align : center;
  }
  .formDiv{
    display:grid;
    grid-template-columns: repeat(7, minmax(1fr, auto));
    grid-template-rows: repeat(2, minmax(20px, auto));
    width: 100%;
    grid-gap: 20px;

    .workInput{
        grid-column: 1/6;
        grid-row: 2/2;
    }
    .addButton{
        grid-column: 6/7;
        grid-row: 1/3;
    }
  }
  
`;


function Header() {
    const [text, setText] = useState("") // 들어오는 값을 저장하기 위한 공간
    const dispatch = useDispatch(); //전역변수의 메소드를 사용하기 위해서 
    const onChange = (e)=>{ // 바뀌는 값을 확인하는 이벤트
        setText(e.target.value) // 바뀐 값을 업데이트 시켜준다.
    }

    const onsubmit = (e) =>{ //submit 함수가 일어나면
        e.preventDefault(); // submit 함수가 일어난다면 리다이렉팅이 되기 때문에 값을 유지하기 위해서 해당 메소드를 작성해줘야한다.
        if(text===""){ // 아무것도 들어있지 않다면 새로운 div를 만들어주지 못하게 막는다.
          return;
        }
        dispatch({type: 'Create', text}) // 그게 아니라면 새로운 것을 만들어준다.
        setText("") // 안의 값을 비워준다.
    }

    return (
      <HeaderContainer>
        <h1 className='title'>To Do</h1>
        <form className='formDiv' onSubmit={onsubmit}>
        <input className='workInput' placeholder='할 일을 작성해주세요' onChange={(e)=>onChange(e)} value={text}></input>
        <button className='addButton'>Add!</button>
        </form>
      </HeaderContainer>
    );
  }
  
  export default Header;
  