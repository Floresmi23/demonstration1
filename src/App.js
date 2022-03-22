import Keys from "./components/keys";
import Guesses from "./components/Guesses";

function App() {
  return (
    <div className="App">
      {<Guesses/>}
      {<Keys/>}
    </div>
  );
}

export default App;
