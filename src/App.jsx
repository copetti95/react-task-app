import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
