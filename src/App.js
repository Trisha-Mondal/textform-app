
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Textform from "./pages/Textform";
import Alert from "./components/Alert";

function App() {
  const [color, setColor] = useState("#FF0000");
  const [mode, setMode] = useState("Light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
    } else {
      setMode("Light");
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Home text="This is Home Page of React Course Demo App" c={color} setColor={setColor} />} />
          <Route path="/about" element={<About />} />
          <Route path="/textform" element={<Textform mode={mode} toggleMode={toggleMode} showAlert={showAlert} heading="Text Form Application" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;