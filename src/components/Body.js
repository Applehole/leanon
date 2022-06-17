import React from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';

const BodyContainer = styled.div`
  grid-area: BodyContainer;
  margin : 20px
`;

function Body() {
    const Array = useSelector((state)=>state)

    return (
      <BodyContainer>
        <div>
          {Array.map((el)=><ul key={el.id}>{el.text}</ul>)}
        </div>
      </BodyContainer>
    );
  }
  
  export default Body;
  