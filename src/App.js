import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Winx1718/react-weather-too.git"
            target="_blank"
            rel="noreferrer"
          >
            Open source project
          </a>
          , by{" "}
          <a
            href="https://lustrous-gelato-606801.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Layna Moore
          </a>
        </footer>
      </div>
    </div>
  );
}
