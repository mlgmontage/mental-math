import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Problem from "./Problem";
import Register from "./Register";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/problem/:id" element={<Problem />} />
    </Routes>
  );
};

export default Routing;
