import "./App.css";
import { Provider } from "react-redux";
import Register from "./components/Register";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Register />
        </header>
      </div>
    </Provider>
  );
}

export default App;
