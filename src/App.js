import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/login.js';
import Invoice from './pages/invoice/invoice.js';
import LayoutComponent from "./component/layout/LayoutComponent";

function App() {
  return (
    <div className="App">
        <LayoutComponent/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/invoice" element={<Invoice />} />
        </Routes>

    </div>
  );
}

export default App;
