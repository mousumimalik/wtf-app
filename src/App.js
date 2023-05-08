import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/gym-plan" element={<GymPlans />} /> */}
      </Routes>
    </div>
  );
}

export default App;
