import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AuthProvider } from "./context/Auth/AuthContext";
import Home from "./views/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  );
}

export default App;
