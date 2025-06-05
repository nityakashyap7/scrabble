import {Routes, Route} from "react-router-dom";
import Canvas from "./Canvas.jsx";
import LandingPage from "./LandingPage.jsx";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default App;
