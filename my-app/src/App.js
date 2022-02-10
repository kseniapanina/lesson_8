import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';
import { routes } from "./routes"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {renderRoutes(routes)}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;