import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GymPlans from "./pages/GymPlans";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <Navbar />

      <Routes>
        <Route path="wtf-app/" element={<Home />} />
        <Route path="/gym-plan/:id" element={<GymPlans />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
