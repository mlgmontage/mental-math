import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Problem from "./Problem";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problem/:id" element={<Problem />} />
    </Routes>
  );
};

export default Routing;
