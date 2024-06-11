import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { DataProvider } from "./Components/DataContext";

function App() {
  return (
    <DataProvider>
      <Navbar />
      <Outlet />
    </DataProvider>
  );
}

export default App;
