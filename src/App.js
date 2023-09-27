import "./App.css";
import Create from "./components/Create";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
