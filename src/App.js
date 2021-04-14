import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
       <TodoHead />
       <TodoList />
      </TodoTemplate>
    </div>
  );
}

export default App;
