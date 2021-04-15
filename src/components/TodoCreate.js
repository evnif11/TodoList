import { useState } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";


const CreateButton = styled.button`
  background: 38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  display: block;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

`;


const TodoCreate = () => {
  const [ open, setOpen ] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <div>
      <CreateButton onClick={onToggle} open={open}>
        <MdAdd />
      </CreateButton>
    </div>

  );
}

export default TodoCreate;
