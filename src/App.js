import "./App.css";
import "./Weather";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This app is{" "}
        <a
          href="https://github.com/hedoshro/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        was coded by Hedie Rahimi
      </footer>
    </div>
  );
}

export default App;
