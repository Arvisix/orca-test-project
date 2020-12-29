import { AppWrapper, AppHeader, AppLink } from './App.styles';

function App() {
  return (
    <AppWrapper>
      <AppHeader>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppWrapper>
  );
}

export default App;
