import Keys from "./components/keys";
import Guesses from "./components/Guesses";



function App() {
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    function Color() {
        const element = document.body;
        element.classList.toggle("dark-mode");
    }

    function Function1(){
        document.getElementById("demo").innerHTML = "Game Saved!";
    }




    return (
    <div className="App">
        <nav>
            <a href="App.js">Home</a>
            <a href="About.html">About</a>
        </nav>

        <h1>Current date is {date}</h1>

        <button onClick={Color}>Toggle dark mode</button>


      {<Guesses/>}
      {<Keys/>}
        <button onClick={Function1}>Save Game?</button>
    </div>

  );
}

export default App;
