import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
