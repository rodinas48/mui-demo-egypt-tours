import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/Appbar";
import Tour from "./pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:tourId" element={<Tour />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
