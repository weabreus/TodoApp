import "./assets/styles/App.css";
import Card from "./components/Card";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Card
      title={"Codemera's To Do App"}
      content={<TodoList />}
      />
    </div>
  );
}

export default App;
