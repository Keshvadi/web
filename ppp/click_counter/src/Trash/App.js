import logo from './logo.svg';
import './App.css';
import Click from './Click';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br />
          by Sina Keshvadi<br /> <br />
          <b>Innovation Lab</b>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <Click name='Nicole' />
        </p>
      </header>
    </div>
  );
}

export default App;
