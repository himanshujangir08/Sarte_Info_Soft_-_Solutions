import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/HomePage/Home";
import ScrollToTop from "./ScrollToTop";

const Routing = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routing;
