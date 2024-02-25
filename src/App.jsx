import Flight from "./page/Flight";
import Train from "./page/Train";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/train`} element={<Train />} />
          <Route path={`/flight`} element={<Flight />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
