import styled from "styled-components";
import React from 'react';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    font-size: 24px;
    color: #868e96;
  }
  .task {
    margin-top: 40px;
    font-size: 18px;
    color: #20c997;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1>2021년 4월 14일</h1>
      <div className="day">수요일</div>
      <div className="task">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
