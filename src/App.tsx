import PaginationDemo from "./components/PaginationDemo";
import DebounceSearchDemo from "./components/DebounceSearchDemo";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Custom Hooks Lab</h1>

      <PaginationDemo />

      <hr />

      <DebounceSearchDemo />
    </main>
  );
}

export default App;