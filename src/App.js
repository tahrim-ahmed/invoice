import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/login.js';
import Invoice from './pages/invoice/invoice.js';
import LayoutComponent from "./component/layout/LayoutComponent";
import Clients from "./pages/clients/clients";

function App() {
    return (
        <div className="App">
            <LayoutComponent/>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/clients" element={<Clients />} />
            </Routes>

        </div>
    );
}

export default App;
